"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Footer = () => {
  const socialIcons = [
    { icon: faInstagram, href: "https://www.instagram.com/The.Phelan.Focus/" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/phelanmarkw/" },
    { icon: faFacebook, href: "https://www.facebook.com/profile.php?id=100009307890107&ref=ig_profile_ac" },
    { icon: faTwitter, href: "https://x.com/The.Phelan.Focus" },
  ];

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="px-6">
        <hr className="max-w-7xl mx-auto border-gray-600" />
      </div>
      <motion.footer
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className={`py-16 px-6 transition-colors duration-500 ${
          mounted && resolvedTheme === "light" ? "bg-white text-black" : "bg-[#144a8f] text-white"
        }`}
      >
        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#FFD700]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FFD700]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#FFD700]">Services</Link></li>
              <li><Link href="/podcast" className="hover:text-[#FFD700]">Podcast</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFD700]">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Contact Us</h3>
            <p className="my-2">818-606-2451</p>
            <p>
              <a href="mailto:phelan@projxon.com" className="hover:text-[#FFD700] transition duration-300">
                phelan@projxon.com
              </a>
            </p>
            <div className="flex space-x-6 mt-6">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition duration-300"
                >
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Subscribe For Our Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full p-3 rounded-lg mb-4 border ${
                mounted && resolvedTheme === "light"
                  ? "bg-white text-black placeholder-gray-600 border-gray-400"
                  : "bg-[#0e2a47] text-white placeholder-gray-300 border-[#355776]"
              }`}
            />
            <button
              className={`w-full border py-3 rounded-lg transition duration-300 ${
                mounted && resolvedTheme === "light"
                  ? "border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white"
                  : "border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
              }`}
            >
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        {/* Horizontal Line perfectly aligned */}
        <hr className="max-w-7xl mx-auto border-gray-600 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © 2025 <span className="font-semibold">Phelan Focus</span>. All rights reserved.
        </div>
      </motion.footer>
    </>
  );
};
