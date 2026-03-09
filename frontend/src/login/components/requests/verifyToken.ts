export default async function verifyToken()
{
	try {
		const response = await fetch("http://localhost:5000/api/users/me", {
			method: "GET",
			credentials: "include"
		});

		if (response.ok)
		{
			console.log("Token successfully verified");
			return true;
		}
		else{
			throw new Error("Invalid token");
			return false;
		}
	} catch (error) {
		console.error(error);
	}
}