const Login = () => {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<a href="/">
				<div className="fixed top-1 left-1 text-white font-extrabold cursor-pointer">
					{"<"}
				</div>
			</a>

			<div className="h-[65%] w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] bg-white rounded-2xl shadow-lg flex items-center flex-col pt-[3%] overflow-auto">
				<div className="font-bold text-2xl mb-3">Login</div>
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
					></input>
				</div>
				<button className="w-25 h-10 min-h-10 bg-blue-400 mt-5 rounded-sm! text-white font-semibold">
					Sign In
				</button>
				<div className="mt-3 font-bold">OR</div>
				<div className="h-10 mb-10">
					<button className="w-40 h-10 border! border-black! border-solid! mt-5 rounded-2xl! text-xs text-black font-semibold">
						<div className="flex items-center gap-3">
							<img src="google-icon.svg" className="h-8 ml-1"></img>Sign in with Google
						</div>
					</button>
				</div>
				<div className="h-20 mb-30">Don't have an account? Create one here.</div>
			</div>
		</div>
	);
};

export default Login;
