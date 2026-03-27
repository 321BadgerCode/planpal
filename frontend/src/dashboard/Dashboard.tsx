import { useState, useEffect, useRef } from "react";
import { logout, getevent } from "./eventfunction";

const Dashboard = () => {
	interface eventobject {
		_id: string;
		text: string;
		user: string;
		createdAt: string;
		updatedAt: string;
	}

	const [event, setevent] = useState<eventobject[]>([]);

	useEffect(() => {
		getevent(setevent);
	}, []);

	return (
		<>
			<nav className="shadow-lg md:text-xl max-md:bottom-2 flex md:text-lg lg:text-base fixed md:top-5 inset-x-5 md:inset-x-40 lg:inset-x-60 xl:inset-x-80 items-center justify-around text-white py-2 md:py-4 bg-blue-900 rounded-2xl">
				<a href="/">
					<p className="max-md:hidden md:text-xl bg-blue-600 rounded-2xl px-3 py-1 text-white hover:scale-110 transition-transform duration-100 ease-in">
						Home
					</p>
				</a>

				<p className="max-md:hidden md:text-xl bg-blue-600 rounded-2xl px-3 py-1 text-white">
					Calendar
				</p>
				<p className="max-md:hidden md: block md:text-xl bg-blue-600 rounded-2xl px-3 py-1 text-white">
					Friends
				</p>
				<p className="max-md:hidden md:text-xl bg-blue-600 rounded-2xl px-3 py-1 text-white">
					Events
				</p>
				<button
					className="max-md:hidden md:text-xl bg-blue-600 rounded-2xl px-3 py-1 text-white hover:scale-110 transition-transform duration-100 ease-in "
					onClick={logout}
				>
					Logout
				</button>

				<a href="/">
					<p className="md:hidden bg-blue-600 rounded-2xl px-3 py-1 text-white hover:scale-110 transition-transform duration-100 ease-in">
						H
					</p>
				</a>
				<p className="md:hidden bg-blue-600 rounded-2xl px-3 py-1 text-white">C</p>
				<p className="md:hidden bg-blue-600 rounded-2xl px-3 py-1 text-white">F</p>
				<p className="md:hidden bg-blue-600 rounded-2xl px-3 py-1 text-white">E</p>
				<p className="md:hidden bg-blue-600 rounded-2xl px-3 py-1 text-white">A</p>
			</nav>

			<div className="w-screen h-[90dvh] md:h-[100dvh] text-white flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5">
				<div className="rounded-2xl overflow-auto bg-blue-900 rounded w-[80vw] h-[40dvh] md:w-[35vw] lg:w-[35vw] md:h-[50vh] flex flex-col items-center justify-start gap-3 md:gap-10">
					<p className="text-xl md:text-3xl font-extrabold py-2 md:mt-5">PlanPal</p>
					<div className="h-[50%] w-[80%] bg-gray-400 px-2">
						{event.map((item) => (
							<p>{item.text}</p>
						))}
					</div>
				</div>

				<div className="flex md:flex-col items-center justify-center gap-1 md:gap-5">
					<div className="rounded-2xl overflow-auto bg-blue-900 rounded w-[45vw] h-[40dvh] md:w-[40vw] lg:w-[30vw] md:h-[30vh] flex flex-col justify-start items-center">
						<p className="text-xl md:text-3xl font-extrabold py-2 md:mt-5">Events</p>
						<div className="h-[60%] w-[80%] bg-gray-500">test</div>
					</div>
					<div className="rounded-2xl overflow-auto bg-blue-900 rounded w-[45vw] h-[40dvh] md:w-[40vw] lg:w-[30vw] md:h-[30vh] flex flex-col justify-start items-center">
						<p className="text-xl md:text-3xl font-extrabold py-2 md:mt-5">Friends</p>
						<div className="h-[60%] w-[80%] bg-gray-500">test</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

/*
old stuff, will remove if dont end up using later
<div className="fixed left-1 top-1 text-white">{"<"}</div>

<div className="flex flex-col fixed bg-white bottom-5 left-5 hidden sm:flex md:hidden lg:hidden">
				sm
			</div>
			<div className="flex flex-col fixed bg-white bottom-5 left-5 hidden md:flex lg:hidden">
				md
			</div>
			<div className="flex flex-col fixed bg-white bottom-5 left-5 hidden lg:flex">
				lg
			</div>

			<div className="hidden flex items-center justify-center gap-5 md:gap-10 lg:gap-15 pb-2 mb-5 w-[80%]">
						<p className="font-bold bg-blue-600 rounded-2xl px-3 py-1 text-white">
							Add Friends
						</p>

						<p className="font-bold bg-blue-600 rounded-2xl px-3 py-1 text-white">
							Create Group
						</p>
					</div>

*/
