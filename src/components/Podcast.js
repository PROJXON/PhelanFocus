import React from "react";

const Shape1 = () => (
	<svg
		className="text-[#fef2fb] dark:text-[#1E2735] absolute left-0 top-0 hidden sm:block -z-[1]"
		width="370"
		height="534"
		viewBox="0 0 370 534"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="0.5" cy="164.5" r="369.5" fill="currentColor" />
	</svg>
);

const Shape2 = () => (
	<svg
		className="text-[#fef2fb] dark:text-[#1E2735] absolute right-0 bottom-0 hidden sm:block -z-[1]"
		width="344"
		height="470"
		viewBox="0 0 344 470"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="369.5" cy="369.5" r="369.5" fill="currentColor" />
	</svg>
);

const Podcast = () => {
	return (
		<section id="podcast" className="ezy__comingsoon3 light relative bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white py-[60px] md:pt-0 md:pb-[100px] z-[1]">
			<Shape1 />
			<Shape2 />
			<div className="container px-4">
				<div className="grid grid-cols-12 justify-between">
					<div className="col-span-12 lg:col-span-5 flex flex-col justify-center text-center lg:text-start">
						<h2 className="font-bold text-[32px] leading-none md:text-[45px] mb-6 mt-0 md:mt-12">
							Podcast Coming Soon
						</h2>
						<p className="text-lg opacity-80 mb-12 lg:mb-0">
							An activity that requires a person's mental or physical effort is
							work.If a person is trained for a certain type of job, they may
							have a profession. Typically, a job would be a subset of someone's
							career.
						</p>
					</div>
					<div className="col-span-12 lg:col-span-5 lg:col-start-8 text-center">
						<img
							src="https://cdn.easyfrontend.com/pictures/comingsoon/three.png"
							alt=""
							className="h-auto max-w-full mx-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Podcast;