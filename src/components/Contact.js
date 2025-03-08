// pages/contact.js
"use client";
import { useState } from 'react';
import { motion } from "framer-motion";

const ContactForm = () => {
	const [validated, setValidated] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault(); // Prevent form submission

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.stopPropagation(); // Stop if form is not valid
		}

		setValidated(true); // Mark form as validated

		const formData = new FormData(form);

		const message = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message")
		};

		if (validated) {
			const url = '/PhelanFocus/api/contact';
			const opt = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(message),
			}
			const res = await fetch(url, opt)
			const data = await res.json()
			console.log(data)
			if (data.status === 'success') {
				setStatusMessage('Your message has been sent!')
			} else {
				setStatusMessage('There was an error. Please try again.')
			}
		} else {
			console.log('Form is not valid')
		}

	};



	return (
		<form noValidate validated={validated.toString()} onSubmit={handleSubmit}>
			{/* Name Input */}
			<div className="mb-4">
				<input
					type="text"
					name="name"
					className="min-h-[48px] leading-[24px] bg-[#F2F6FD] dark:bg-[#2A384C] 
							border border-gray-400 dark:border-gray-600 rounded-xl 
							focus:outline-none focus:border-black dark:focus:border-white 
							w-full px-5 transition duration-300"
					placeholder="Enter Name"
					required
				/>
			</div>

			{/* Email Input */}
			<div className="mb-4">
				<input
					type="email"
					name="email"
					className="min-h-[48px] leading-[24px] bg-[#F2F6FD] dark:bg-[#2A384C] 
							border border-gray-400 dark:border-gray-600 rounded-xl 
							focus:outline-none focus:border-black dark:focus:border-white 
							w-full px-5 transition duration-300"
					placeholder="Enter Email"
					required
				/>
			</div>

			{/* Message Textarea */}
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] max-h-[200px] leading-[24px] bg-[#F2F6FD] dark:bg-[#2A384C] 
						border border-gray-400 dark:border-gray-600 rounded-xl 
						focus:outline-none focus:border-black dark:focus:border-white 
						w-full px-5 resize-none transition duration-300"
					placeholder="Enter Message"
					rows="4"
					required
				></textarea>
			</div>

			{/* Submit Button */}
			<div className="text-end">
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out text-white px-9 py-3 rounded-md mb-4"
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
