import { useState } from "react";

interface Props {
	setHasAccount: (hasAccount: boolean) => void;
}

const CreateAnAccountUI = ({ setHasAccount }: Props) => {
	return (
		<>
			<div className="font-bold text-2xl mb-3">Create an account</div>
			<div className="w-full flex items-center flex-col my-2">
				<div className="w-[85%]">Email:</div>
				<input
					className="w-[85%] h-10 pl-1 bg-gray-200 rounded-xs"
					placeholder="example@email.com"
				></input>
			</div>
			<div className="w-full flex items-center flex-col my-2  rounded-xs">
				<div className="w-[85%]">Password:</div>
				<input
					className="w-[85%] h-10 pl-1 bg-gray-200"
					placeholder="password"
					type="password"
				></input>
			</div>
			<div className="w-full flex items-center flex-col my-2  rounded-xs">
				<div className="w-[85%]">Confirm Password:</div>
				<input
					className="w-[85%] h-10 pl-1 bg-gray-200"
					placeholder="password"
					type="password"
				></input>
			</div>
			<button className="w-45 h-10 min-h-10 bg-blue-400 mt-5 rounded-sm! text-white font-semibold hover:bg-blue-500 transition-colors duration-100 active:bg-blue-600">
				Create my account
			</button>

			<div className="h-20 mb-30 mt-10">
				Already have an account? Click
				<strong
					className="cursor-pointer "
					onClick={() => {
						setHasAccount(true);
					}}
				>
					{" "}
					here
				</strong>{" "}
				to sign in.
			</div>
		</>
	);
};

export default CreateAnAccountUI;
