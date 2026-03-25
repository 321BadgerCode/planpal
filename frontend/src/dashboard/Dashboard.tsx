const Dashboard = () => {
	return (
		<>
			<div className="flex flex-col fixed bg-white bottom-5 left-5 hidden sm:flex md:hidden lg:hidden">
				sm
			</div>
			<div className="flex flex-col fixed bg-white bottom-5 left-5 hidden md:flex lg:hidden">
				md
			</div>
			<div className="flex flex-col fixed bg-white bottom-5 left-5 hidden lg:flex">
				lg
			</div>
			<nav className="shadow-lg text-xl hidden md:flex md:text-lg lg:text-base fixed top-5 inset-x-5 md:inset-x-10 items-center justify-around text-white py-4 bg-blue-900 rounded-2xl">
				<a href="/">
					<p className="bg-blue-600 rounded-2xl px-3 py-1 text-white hover:scale-110 transition-transform duration-100 ease-in">
						Home
					</p>
				</a>

				<p className="bg-blue-600 rounded-2xl px-3 py-1 text-white">Account</p>
			</nav>

			<div className="w-screen h-screen text-white flex flex-col my-5 md:my-0 md:flex-row justify-center items-center gap-5">
				<div className="flex flex-col items-center justify-center gap-5">
					<div className="rounded-2xl overflow-auto bg-blue-900 rounded w-[80vw] md:w-[35vw] lg:w-[35vw] md:h-[50vh] flex flex-col items-center justify-center gap-10">
						<p className="p-5 text-xl md:text-3xl font-extrabold pt-2 mt-5">
							PlanPal
						</p>
						<div className="h-[50%] w-[80%] bg-gray-400 px-2">calendar</div>
						<div className="flex items-center justify-center gap-5 md:gap-10 lg:gap-15 pb-2 mb-5 w-[80%]">
							<p className="font-bold bg-blue-600 rounded-2xl px-3 py-1 text-white">
								Add Friends
							</p>

							<p className="font-bold bg-blue-600 rounded-2xl px-3 py-1 text-white">
								Create Group
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center justify-center gap-5">
					<div className="rounded-2xl overflow-auto bg-blue-900 rounded w-[50vw] h-[20vw] md:w-[40vw] lg:w-[30vw] md:h-[30vh] flex flex-col justify-start items-center">
						<p className="p-5 text-3xl font-extrabold p-2">Upcoming Events</p>
						<div className="h-[60%] w-[80%] bg-gray-500">test</div>
					</div>
					<div className="rounded-2xl overflow-auto bg-blue-900 rounded w-[50vw] md:w-[40vw] lg:w-[30vw] h-[30vh] flex flex-col justify-start items-center">
						<p className="p-5 text-3xl font-extrabold p-2">Friend Activity</p>
						<div className="h-[60%] w-[80%] bg-gray-500">test</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

/*
old stuff
<div className="fixed left-1 top-1 text-white">{"<"}</div>

<div className="h-[75%] max-h-130 w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] bg-white rounded-2xl shadow-lg flex items-center flex-col pt-[3%] overflow-auto 2xl:max-h-160">


<div className="flex flex-col items-center justify-center h-full w-full">
					<div className="rounded-2xl text-2xl h-[50%] w-[90%] md:w-[60%] lg:w-[40%] xl:w-[30%] overflow-auto bg-blue-900 rounded">
						Welcome to Plan pal
					</div>
					<div className="flex items-center justify-between"></div>
				</div>
				<div className="flex-col items-center justify-center h-[80%] w-[50%]"></div>

*/
