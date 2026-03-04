

const createAccount = async (email: string, username: string, password: string, confirmPassword: string) => {
	try {
		const data = {
			name: username,
			email: email,
			password: password
		};
		
		const response = await fetch("http://localhost:5000/api/users/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data),
		});

		if (!response.ok)
		{
			throw new Error("Error while sending request");
		}
		else{
			return true;
		}
	} catch (error) {
		console.error(error);
		return false;
	}
};

export default createAccount;