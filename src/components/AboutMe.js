// components/AboutMe.js
// export const AboutMe = () => (
//     <section className="flex flex-wrap gap-8">
//       <div className="w-full sm:w-1/2">
//         <img src="/path/to/image.jpg" alt="About Me" className="w-full h-auto rounded-lg" />
//       </div>
//       <div className="w-full sm:w-1/2">
//         <h3 className="text-2xl">About Me</h3>
//         <p>Some text about me...</p>
//       </div>
//     </section>
//   );
  
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAward,
	faGraduationCap,
	faRibbon,
	faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookF,
	faLinkedinIn,
	faPinterestP,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import MarkPhelanImg from "../../public/markphelan.webp"

// const stories = [
// 	{
// 		icon: faAward,
// 		title: "Top Rank On Fiverr",
// 	},
// 	{
// 		icon: faGraduationCap,
// 		title: "200+ 5 star Review",
// 	},
// 	{
// 		icon: faTrophy,
// 		title: "Top Rank on Dribbble",
// 	},
// 	{
// 		icon: faRibbon,
// 		title: "Top Seller on Upwork",
// 	},
// ];

const social = [
	{
		icon: faLinkedinIn,
		link: "https://www.linkedin.com/in/phelanmarkw/",
	},
];

const StoryItem = ({ item }) => {
	const { title, icon } = item;
	return (
		<div className="flex items-center justify-center md:justify-start">
			<FontAwesomeIcon icon={icon} className="text-blue-600 mr-4" style={{ fontSize: "2rem", width: "2rem", height: "2rem" }} />
			<h6 className="font-bold">{title}</h6>
		</div>
	);
};

StoryItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Social = ({ item }) => {
	const { link, icon } = item;
	return (
		<li className="inline-block m-2">
			<a
				href={link}
				className="border flex justify-center items-center rounded-full w-9 h-9 transition hover:bg-blue-600 hover:border-blue-600 hover:text-white"
			>
				<FontAwesomeIcon icon={icon} style={{ fontSize: "1rem", width: "1rem", height: "1rem" }}/>
			</a>
		</li>
	);
};

Social.propTypes = {
	item: PropTypes.object.isRequired,
};

const ShapeOne = () => (
	<>
		<svg
			className="absolute -top-[10%] -left-[10%] -z-[1] text-gray-50 dark:text-[#1E2735]"
			width="350"  // Adjusted size of the SVG
			height="350"
			viewBox="0 0 600 600"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="249.5"
				cy="249.5"
				r="249.5"
				fill="currentColor"
				fillOpacity="1"
			/>
		</svg>
		{/* Make the image fill the oval without stretching the section */}
		<img
			src="/PhelanFocus/markphelan.webp"
			alt="Mark Phelan"
			className="absolute top-0 left-0 w-full h-full object-cover rounded-full" // Image will fill the oval
		/>
	</>
);


const ShapeTwo = () => (
	<svg
		className="absolute top-[75%] right-[0 -z-[1] text-gray-50 dark:text-[#1E2735]"
		width="134"
		height="133"
		viewBox="0 0 134 133"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M66.9999 133C104.003 133 134 103.227 134 66.5C134 29.773 104.003 0 66.9999 0C29.9968 0 0 29.773 0 66.5C0 103.227 29.9968 133 66.9999 133Z"
			fill="currentColor"
			fillOpacity="1"
		/>
	</svg>
);

const ShapeThree = () => (
	<svg
		className="absolute top-[15%] right-[10%] -z-[1] text-gray-50 dark:text-[#1E2735]"
		width="223"
		height="262"
		viewBox="0 0 223 262"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M212.555 100.254C224.477 169.763 239.522 246.47 170.132 258.373C100.741 270.275 36.3657 251.51 24.443 182C12.5203 112.491 -30.8157 14.839 38.5748 2.93669C107.965 -8.96565 200.632 30.7447 212.555 100.254Z"
			fill="currentColor"
			fillOpacity="0.8"
		/>
	</svg>
);

const ShapeFour = () => (
	<svg
		className="absolute bottom-[22%] right-[15%] -z-[1] text-gray-50 dark:text-[#1E2735]"
		width="155"
		height="166"
		viewBox="0 0 155 166"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M141.003 54.264C153.758 98.3055 169.054 146.771 125.088 159.504C81.1214 172.237 38.1659 164.793 25.4108 120.751C12.6556 76.7097 -22.4405 16.769 21.5258 4.03561C65.4921 -8.69781 128.248 10.2226 141.003 54.264Z"
			fill="currentColor"
			fillOpacity="0.8"
		/>
	</svg>
);

const AboutMe = () => {
	return (
		<section
			id="about"
			className="ezy__about17 light pt-32 md:pt-40 pb-10 lg:pb-16 bg-white rounded-lg dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-[1] scroll-mt-20"
		>
			<ShapeThree />
			<ShapeFour />

			<div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
				<div className="grid grid-cols-12 justify-center gap-8">
					{/* Adjusting the column span to reduce the size */}
					<div className="col-span-12 md:col-span-5 flex justify-center items-center relative">
						<div className="relative w-[350px] h-[350px] rounded-full overflow-hidden">
							{/* Oval shape stays fixed */}
							<ShapeOne />
							<ShapeTwo />
						</div>
					</div>

					<div className="col-span-12 md:col-span-7 flex flex-col justify-center items-center text-center md:text-left">
						<div>
							<h2 className="text-xl md:text-3xl font-semibold leading-tight mt-4">
								Mark Phelan's Story
							</h2>
							<p className="text-base sm:text-lg leading-relaxed opacity-80 my-4 md:my-6 lg:pr-12">
								With a background in military logistics and project management, I bring a unique perspective to consulting, blending discipline with innovation. Over the years, I've spearheaded complex projects in e-commerce, IT, and engineering, managed multimillion-dollar assets, and developed scalable frameworks that have shaped PROJXON’s success.
							</p>
						</div>

						{/* Social Links */}
						<div className="flex flex-col sm:flex-row mt-8">
							<div className="flex justify-center md:ml-12 mt-4 sm:mt-0">
								<ul className="flex items-center justify-center sm:justify-end">
									{social.map((item, i) => (
										<Social item={item} key={i} />
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
