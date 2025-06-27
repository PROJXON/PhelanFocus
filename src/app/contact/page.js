"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMapMarkerAlt,
  faClock,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import ScrollToTopButton from "@/components/ScrollToTop";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: value.trim() ? "" : "Required" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) newErrors.email = "Please enter your email";
    if (!formData.message.trim()) newErrors.message = "Please enter your message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatusMessage("✅ Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      setStatusMessage("❌ There was an error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-page">
      <Navbar isFooter={false} />

      <section
        className="relative w-full h-[50vh] bg-center bg-cover flex items-center justify-center text-white text-center mt-20"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold uppercase">Contact</h1>
          <div className="w-24 h-1 bg-yellow-500 my-4 mx-auto"></div>
          <h3 className="text-lg mb-2">Get in Touch with Phelan</h3>
        </div>
      </section>

      <div className="bg-[#FFFFFF] dark:bg-[#13395c]">
        <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <div className="flex flex-col items-center">
            {mounted && (
              <FontAwesomeIcon icon={faYoutube} className="w-10 h-10 text-yellow-500 dark:text-yellow-400 mb-4" />
            )}
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Youtube</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              <a
                href="https://www.youtube.com/@ThePhelanFocus"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                The Phelan Focus
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            {mounted && (
              <FontAwesomeIcon icon={faGlobe} className="w-10 h-10 text-yellow-500 dark:text-yellow-400 mb-4" />
            )}
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Website</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              <a
                href="https://www.projxon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.projxon.com
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            {mounted && (
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-10 h-10 text-yellow-500 dark:text-yellow-400 mb-4" />
            )}
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Address</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">United States</p>
          </div>

          <div className="flex flex-col items-center">
            {mounted && (
              <FontAwesomeIcon icon={faClock} className="w-10 h-10 text-yellow-500 dark:text-yellow-400 mb-4" />
            )}
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Opening Hours</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Monday - Friday (9:00 AM to 5:00 PM)</p>
          </div>
        </section>
      </div>

      <section className="contact-section">
        <div className="contact-left">
          <h2>Contact Us or Visit Us</h2>

          <div className="contact-detail">
            {mounted && <FontAwesomeIcon icon={faMapMarker} className="icon" />}
            <p>United States of America</p>
          </div>

          <div className="contact-detail">
            {mounted && <FontAwesomeIcon icon={faGlobe} className="icon" />}
            <a
              href="https://www.projxon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition duration-300"
            >
              www.projxon.com
            </a>
          </div>

          <form className="contact-form-box" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="email"
                name="email"
                placeholder="E-mail address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            {statusMessage && <p className="text-green-600 mt-2">{statusMessage}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="contact-right">
          <img src="contact-form.jpeg" alt="Contact Visual" />
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />

    </div>
  );
}
