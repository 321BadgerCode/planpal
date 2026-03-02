import e from 'express';
import express, { type Request, type Response } from 'express';
import { GetGoals, SetGoals, UpdateGoals, DeleteGoals } from '../controllers/goalController.js';
import protect from '../middleware/authmiddleware.js';

const router = express.Router();

export default router;

router.route('/').get(protect, GetGoals).post(protect, SetGoals);

router.route('/:id').put(protect, UpdateGoals).delete(protect, DeleteGoals);
