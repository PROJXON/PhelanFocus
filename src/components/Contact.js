// pages/contact.js
"use client";
import { useState } from 'react';
import { motion } from "framer-motion";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [statusMessage, setStatusMessage] = useState("");
	const [loading, setLoading] = useState(false);


	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: value.trim() ? "" : errors[name] });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const validated = validateForm();

		if (validated) {
			setLoading(true)
			setFormData({ name: "", email: "", message: "" });
			setErrors({});
			setStatusMessage('Your message has been sent!')
			const url = '/PhelanFocus/api/contact';
			const opt = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			}
			const res = await fetch(url, opt)
			const data = await res.json()

			if (res.ok) {
				const secondUrl = '/PhelanFocus/api/confirmation';
				const secondOpt = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
				const secondEmail = await fetch(secondUrl, secondOpt)
				const secondEmailData = await secondEmail.json()
			} else {
				setStatusMessage('There was an error. Please try again.')
			}
		} else {
			console.log("Connection error. Please try again later.")
		}
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.name.trim()) newErrors.name = "Please enter your name";
		if (!formData.email.trim()) newErrors.email = "Please enter your email";
		if (!formData.message.trim()) newErrors.message = "Please enter your message";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};


	return (
		<form noValidate onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					className={`min-h-[48px] w-full px-5 rounded-xl border transition duration-300  bg-[#F2F6FD] dark:bg-[#2A384C] 
						${errors.name ? "border-red-500" : "border-gray-400"} `}
					placeholder="Enter Name"
				/>
				{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
			</div>

			<div className="mb-4">
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					className={`min-h-[48px] w-full px-5 rounded-xl border transition duration-300  bg-[#F2F6FD] dark:bg-[#2A384C] 
						${errors.email ? "border-red-500" : "border-gray-400"} `}
					placeholder="Enter Email"
				/>
				{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
			</div>

			<div className="mb-4">
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					className={`min-h-[48px] w-full px-5 rounded-xl border resize-none transition duration-300  bg-[#F2F6FD] dark:bg-[#2A384C] 
						${errors.message ? "border-red-500" : "border-gray-400"} `}
					placeholder="Enter Message"
					rows="4"
				></textarea>
				{errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
			</div>

			{statusMessage && <p className="text-white pb-2">{statusMessage}</p>}

			<div className="text-end">
				<button
					type="submit"
					disabled={loading}
					className={`px-9 py-3 rounded-md mb-4 text-white transition duration-300 ease-in-out
						${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
				>
					Submit
				</button>
			</div>
		</form>
	);
};

const ContactFormCard = () => (
	<div className="bg-white dark:bg-[#162231] shadow-xl rounded-2xl p-6 md:p-12">
		<h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
			Contact Me
		</h2>
		<p className="text-lg mb-12">
			Send me a message!
		</p>

		<ContactForm />
	</div>
);

const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			whileOutOfView={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.9, ease: "easeOut" }}
			id="contact"
			className="rounded-3xl ezy__contact3 light py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-12 lg:grid lg:grid-cols-12 lg:items-center min-h-[500px] py-6 lg:gap-8 justify-center">
					<div className="col-span-12 lg:col-span-7 lg:order-2 mb-4 lg:mb-0 flex justify-center">
						<div
							className="bg-center bg-no-repeat bg-cover rounded-2xl min-h-[300px] lg:min-h-[400px] w-full lg:w-[500px] block"
							style={{
								backgroundImage: "url(/PhelanFocus/connection.jpg)",
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
							}}
						></div>
					</div>
					<div className="col-span-12 lg:col-span-5">
						<ContactFormCard />
					</div>
				</div>
			</div>
		</motion.section>
	);
};


export default Contact
