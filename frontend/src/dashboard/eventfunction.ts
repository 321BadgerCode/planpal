export const logout = () => {
    window.location.href = '/login';
}


export const getevent = async (setevent: (data: any) => void) => {
    
    try {
        const response = await fetch("http://localhost:5000/api/events/", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response.ok) {
            const data = await response.json();

            const event = data.slice(0,3);

            setevent(event);
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}


