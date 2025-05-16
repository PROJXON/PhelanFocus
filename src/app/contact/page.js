"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./contact.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelopeOpenText,
  faMapMarkerAlt,
  faClock,
  faMapMarker,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="contact-page">
      {/* Navbar */}
      <Navbar isFooter={false} />

      {/* Hero Section */}
      <section
        className="relative w-full h-[50vh] bg-center bg-cover flex items-center justify-center text-white text-center mt-20"
        style={{
          backgroundImage: "url('/contact-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold uppercase">Contact</h1>
          <div className="w-24 h-1 bg-yellow-500 my-4 mx-auto"></div>
          <h3 className="text-lg mb-2">Get in Touch with Phelan</h3>
        </div>
      </section>

      {/* Contact Info Section */}
      <div className="bg-[#FFFFFF] dark:bg-[#13395c]">
        <section className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <div className="flex flex-col items-center">
            {mounted && (
              <FontAwesomeIcon icon={faPhoneAlt} className="w-10 h-10 text-yellow-500 dark:text-yellow-400 mb-4" />
            )}
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Phone No.</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">818-606-2451</p>
          </div>

          <div className="flex flex-col items-center">
            {mounted && (
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="w-10 h-10 text-yellow-500 dark:text-yellow-400 mb-4" />
            )}
            <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">E-mail</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">phelan@projxon.com</p>
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

      {/* Contact Form + Image Section */}
      <section className="contact-section">
        <div className="contact-left">
          <h2>Contact Us or Visit Us</h2>

          <div className="contact-detail">
            {mounted && <FontAwesomeIcon icon={faMapMarker} className="icon" />}
            <p>United States of America</p>
          </div>

          <div className="contact-detail">
            {mounted && <FontAwesomeIcon icon={faEnvelope} className="icon" />}
            <a href="mailto:phelan@projxon.com" className="hover:text-[#FFD700] transition duration-300">
              phelan@projxon.com
            </a>
          </div>

          <form className="contact-form-box">
            <div className="form-group">
              <input type="text" placeholder="Enter Name" required />
              <input type="email" placeholder="E-mail address" required />
            </div>
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-right">
          <img src="/contact-form.jpeg" alt="Contact Visual" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
