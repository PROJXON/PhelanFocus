"use client";
import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCamera,
	faStar,
	faRandom,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const serviceList = [
	{
		color: "blue",
		icon: faStar,
		title: "Branding",
		description:
			"We help create a strong, unique brand identity that resonates with your audience. From logo design to brand strategy, we ensure your brand stands out and makes a lasting impression across all platforms.",
	},
	{
		color: "blue",
		icon: faRandom,
		title: "Content Marketing",
		description:
			"We craft compelling content that engages your audience and drives results. From blog posts to social media campaigns, we create content that amplifies your brand’s voice and boosts online visibility.",
	},
	{
		color: "blue",
		icon: faCamera,
		title: "Web Development",
		description:
			"We create custom, responsive websites that deliver a seamless user experience. From sleek landing pages to full-fledged e-commerce solutions, we focus on fast load times, performance optimization, and SEO to ensure your site stands out and performs at its best.",
	},
];

const ServiceItem = ({ service }) => (
	<motion.div
		initial={{ opacity: 0, y: 50 }} // Start hidden
		whileInView={{ opacity: 1, y: 0 }} // Animate when in view
		whileOutOfView={{ opacity: 0, y: 50 }}
		transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition for in-view effect
		viewport={{ once: false, amount: 0.2 }} // Triggers when 20% in view
		whileHover={{ scale: 1.05 }} // Instant hover zoom
		whileTap={{ scale: 0.98 }} // Optional: subtle press effect
		style={{ transition: "transform 0.08s ease-out" }}
		className="bg-white dark:bg-slate-800 h-full shadow-xl rounded-[20px] p-6 lg:px-6 lg:py-12 shadow-lg shadow-blue-500/50 transition-transform duration-300 hover:scale-105">
		 <div className={`w-24 h-24 rounded-full text-3xl inline-flex justify-center items-center mb-6 bg-${service.color}-600 bg-opacity-10 text-${service.color}-600 shadow-lg shadow-blue-500/50`}>
			<FontAwesomeIcon icon={service.icon} />
		</div>
		<h4 className="font-medium text-2xl mb-4">{service.title}</h4>
		<p className="opacity-80">{service.description}</p>
	</motion.div>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

const Services = () => {
	return (
		<section id="services" className="ezy__service2 light py-14 md:py-24 dark:bg-[#0b1727] text-white dark:text-white">
			<div className="w-full mx-auto px-1">
				<div className="grid grid-cols-12 justify-center md:mb-12">
					<motion.div
					initial={{ opacity: 0, y: 100 }} // Start fully hidden below the screen
					whileInView={{ opacity: 1, y: 0 }} // Fly in and fade in when in view
					whileOutOfView={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.9, ease: "easeOut" }} // Smooth transition
					viewport={{ once: false, amount: 0.1 }} // Trigger when 10% of text is visible
					className="col-span-12 lg:col-span-6 lg:col-start-4 text-center"
					>
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
							Services We Provide
						</h2>
						<p className="text-lg opacity-80">
							We deliver full services to make your brand reach the clients you want 
						</p>
					</motion.div>
				</div>
				<div className="grid grid-cols-12 gap-6 text-center pt-12 ">
					{serviceList.map((service, i) => (
						<div className="col-span-12 md:col-span-4" key={i}>
							<ServiceItem service={service} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;