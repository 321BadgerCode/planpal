import { useState } from "react";
import LoginUI from "./components/LoginUI";
import CreateAnAccountUI from "./components/CreateAnAccountUI";

const Login = () => {
	const [hasAccount, setHasAccount] = useState(true);

	return (
		<div className="w-full h-full flex items-center justify-center">
			<a href="/">
				<div className="fixed top-1 left-1 text-white font-extrabold cursor-pointer">
					{"<"}
				</div>
			</a>

			<div className="h-[75%] max-h-130 w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] bg-white rounded-2xl shadow-lg flex items-center flex-col pt-[3%] overflow-auto 2xl:max-h-160">
				{hasAccount ? (
					<LoginUI setHasAccount={setHasAccount}></LoginUI>
				) : (
					<CreateAnAccountUI setHasAccount={setHasAccount}></CreateAnAccountUI>
				)}
			</div>
		</div>
	);
};

export default Login;
