"use client";
import { useState, useReducer, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { EmailFormAction, EmailFormActionType, EmailFieldsOptional } from "@/types/types";
import { Email } from "@/types/interfaces";

const initialEmailState: Email = { name: "", email: "", message: "" };

const reducer = (state: Email, action: EmailFormAction): Email => {
  switch (action.type) {
    case 'NAME':
      return {...state, name: action.text};
    case 'EMAIL':
      return {...state, email: action.text};
    case 'MESSAGE':
      return {...state, message: action.text};
    case 'RESET':
      return {name: '', email: '', message: ''};
    case 'DEFAULT':
      return state;
  }
}

const ContactForm = () => {
  const [emailState, dispatch] = useReducer(reducer, initialEmailState);
  const [errors, setErrors] = useState<EmailFieldsOptional>({});
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const action = name.toUpperCase() as EmailFormActionType;
    dispatch({ type: action, text: value }); //
    setErrors({ ...errors, [name]: value.trim() ? "" : errors[name as keyof Email] });
  };

  const validateForm = () => {
    const newErrors: EmailFieldsOptional = {};
    if (!emailState.name.trim()) newErrors.name = "Please enter your name";
    if (!emailState.email.trim()) newErrors.email = "Please enter your email";
    if (!emailState.message.trim()) newErrors.message = "Please enter your message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailState),
      });

      if (!res.ok) {
        setStatusMessage("❌ There was an error. Please try again.");
      } else {
        setStatusMessage("✅ Your message has been sent!");
        dispatch({type: 'RESET'});
        setErrors({});
      }
    } catch (error) {
      setStatusMessage("❌ There was an error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      {["name", "email", "message"].map((field) => {
        const key = field as keyof Email;
        return (
          <div className="mb-4" key={key}>
            {field !== "message" ? (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={emailState[key]}
                onChange={handleChange}
                className="min-h-[48px] w-full px-5 py-3 rounded-xl border bg-[#0e2a47] text-white placeholder-gray-400 focus:ring focus:ring-blue-500/40"
                placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              />
            ) : (
              <textarea
                name={field}
                value={emailState[key]}
                onChange={handleChange}
                className="min-h-[120px] w-full px-5 py-3 rounded-xl border bg-[#0e2a47] text-white placeholder-gray-400 resize-none focus:ring focus:ring-blue-500/40"
                placeholder="Enter Message"
              />
            )}
            {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
          </div>
        );
      })}
      {statusMessage && <p className="text-green-600 pb-2">{statusMessage}</p>}
      <div className="text-end">
        <button
          type="submit"
          disabled={loading}
          className={`btn-gold relative ${loading ? "disabled-btn" : ""}`}
        >
          <span>{loading ? "Submitting..." : "Send Message"}</span>
          <span></span>
        </button>
      </div>
    </form>
  );
};

const ContactFormCard = () => (
  <div className="h-full flex flex-col justify-center bg-[var(--slateBlue)] text-white p-8 rounded-3xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
    <p className="text-lg mb-8 opacity-90 text-center">Send me a message!</p>
    <ContactForm />
  </div>
);

const FaqSection = () => {
  const faqs = [
    {
      question: "What is life coaching?",
      answer:
        "Life coaching is a collaborative process between a trained professional and an individual aimed at helping the client achieve personal and/or professional goals, overcome obstacles, and maximize their potential.",
    },
    {
      question: "What can I expect from life coaching sessions?",
      answer:
        "You can expect personalized goal-setting, accountability, and support to help you move forward confidently in your personal or professional life.",
    },
    {
      question: "How is life coaching different from therapy?",
      answer:
        "Therapy focuses on healing and addressing past trauma. Life coaching focuses on taking action toward goals and future achievements.",
    },
    {
      question: "Is life coaching confidential?",
      answer: "Yes, all coaching sessions are private and confidential.",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Your Path to Success Starts Here</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="group border-b border-gray-300 pb-4 cursor-pointer">
            <summary className="text-lg font-semibold text-gray-900 flex justify-between items-center">
              {faq.question}
              <span className="ml-2 text-blue-500 group-open:rotate-180 transition-transform">+</span>
            </summary>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      id="contact"
      className="py-12 px-5 bg-white text-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ContactFormCard />
          <div className="lg:pl-10">
            <FaqSection />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;