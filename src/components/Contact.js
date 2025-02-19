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
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Name"
					required
				/>
			</div>

			{/* Email Input */}
			<div className="mb-4">
				<input
					type="email"
          name="email"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Email"
					required
				/>
			</div>

			{/* Message Textarea */}
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Message"
					rows="4"
					required
				></textarea>
			</div>

			{/* Submit Button */}
			<div className="text-end">
				<button
					type="submit"
					className="bg-blue-600 hover:bg-opacity-90 text-white px-9 py-3 rounded-md mb-4"
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
			Contact Us
		</h2>
		<p className="text-lg mb-12">
			We list your menu online, help you process orders.
		</p>

		<ContactForm />
	</div>
);

const Contact = () => {
	return (
		<section id="contact" className="ezy__contact3 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-12 py-6 lg:gap-8 justify-center">
					<div className="col-span-12 lg:col-span-7 lg:order-2 mb-4 lg:mb-0">
						<div
							className="bg-center bg-no-repeat bg-cover rounded-2xl min-h-[150px] h-full object-cover"
							style={{
								backgroundImage:
									"url(https://cdn.easyfrontend.com/pictures/contact/contact_3.png)",
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
