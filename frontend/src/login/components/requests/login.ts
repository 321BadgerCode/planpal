
export default async function login(email: string, password: string)
{
	const data = {
		email: email,
		password: password
	};
	
	try {
		
		const response = await fetch("http://localhost:5000/api/users/login", {
			method: "POST",
			headers:{
				"Content-Type" : "application/json"
			},
			credentials: "include",
			body: JSON.stringify(data)

		});

		if (!response.ok)
		{
			throw new Error("Error signing in");
		}
		else
		{
			console.log(await response.json());
			return true;
		}
	} catch (error) {
		console.error(error);
		return false;
	}
}