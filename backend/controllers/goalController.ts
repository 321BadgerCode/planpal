import { type Request, type Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import goalModel from '../model/goalModel.js';
import usermodel from '../model/usermodel.js';

// @desc Get goals
// @route GET /api/goals
// @access Private
const GetGoals = expressAsyncHandler(async (req: Request, res: Response) => {
    const goals = await goalModel.find({ user: req.user?.id });

    res.status(200).json(goals);
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const SetGoals = expressAsyncHandler(async (req: Request, res: Response) => {
    if(!req.body?.text) { 
        res.status(400)
        throw new Error('Please add a text field');
    }

    const goal = await goalModel.create({
        text: req.body.text,
        user: req.user?.id,
    })
    
    res.status(200).json(goal);
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const UpdateGoals = expressAsyncHandler(async (req: Request, res: Response) => {

    const goal = await goalModel.findById(req.params.id);

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found');
    }

    // first checks for user
    const user = await usermodel.findById(req.user?.id);

    //check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found');
    }


    // checks if logged in user matches the goal ID of the user it belongs to
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized');
    }

    const updatedGoal = await goalModel.findByIdAndUpdate(req.params.id, req.body, {new: true})


     res.status(200).json(updatedGoal);
})

// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const DeleteGoals = expressAsyncHandler(async (req: Request, res: Response) => {
    const goal = await goalModel.findById(req.params.id);

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found');
    }

    // first checks for user
    const user = await usermodel.findById(req.user?.id);

    //check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found');
    }


    // checks if logged in user matches the goal ID of the user it belongs to
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized');
    }

    await goal.deleteOne();

    res.status(200).json({id: req.params.id});
})



export { GetGoals, SetGoals, UpdateGoals, DeleteGoals };