// pages/contact.js
"use client";
import { useState } from 'react';
import emailjs from "emailjs-com";

const ContactForm = () => {
	const [validated, setValidated] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); 

	const handleSubmit = (event) => {
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

  // 1. Send email to the user (confirmation email)
  emailjs
  .sendForm(
    process.env.NEXT_PUBLIC_SERVICE,  // Using the environment variable
    process.env.NEXT_PUBLIC_TEMPLATE, // Using the environment variable
    form, // The form element to be used
    process.env.NEXT_PUBLIC_USER  // User ID from EmailJS
  )
  .then(
    (response) => {
      console.log("User email SUCCESS!", response.status, response.text);
      setStatusMessage("Your message has been sent successfully!");
    },
    (error) => {
      console.log("User email FAILED...", error);
      setStatusMessage("Failed to send message. Please try again.");
    }
  );

// 2. Send email to you (the admin)
emailjs
  .send(
    process.env.NEXT_PUBLIC_SERVICE,  // Using the environment variable
    process.env.NEXT_ADMIN_TEMPLATE, // You should have a separate template for admin
    message, // Send message details to admin
    process.env.NEXT_PUBLIC_USER  // User ID from EmailJS (send to yourself)
  )
  .then(
    (response) => {
      console.log("Admin email SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("Admin email FAILED...", error);
    }
  );
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
		<section id="contact" className="rounded-lg ezy__contact3 light py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
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
		</section>
	);
};


export default Contact;
