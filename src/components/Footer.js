"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const socialIcons = [
    { icon: faFacebook, href: "#" },
    { icon: faTwitter, href: "#" },
    { icon: faInstagram, href: "#" },
    { icon: faLinkedin, href: "#" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }} // Start fully hidden below the screen
      whileInView={{ opacity: 1, y: 0 }} // Fly in and fade in when in view
      whileOutOfView={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.9, ease: "easeOut" }} // Smooth transition
      viewport={{ once: false, amount: 0.1 }} // Trigger when 10% of text is visible
      className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Side - Logo & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-blue-500">Phelan Focus</h2>
          <p className="text-sm text-gray-700 dark:text-gray-400">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Center - Navigation Links */}
        <ul className="flex space-x-4 text-sm text-gray-700 dark:text-gray-300">
          {["About", "Services", "Contact"].map((link, index) => (
            <li key={index}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-500">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side - Social Media Icons */}
        <div className="flex space-x-4 text-xl text-blue-500">
          {socialIcons.map((item, index) => (
            <a key={index} href={item.href} className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300">
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};
