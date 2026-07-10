"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuLink, SocialIcon } from "@/types/interfaces";
import { useContactModal } from "@/context/ContactModalContext";
import ContactModal from "./ContactModal";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const { openModal } = useContactModal();

  useEffect(() => setMounted(true), []);

  const handleSubscribe = async () => {
    if (!subscriberEmail || !subscriberEmail.includes("@")) {
      setSubscribeMessage("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscriberEmail }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubscribeMessage("Thank you for subscribing!");
        setSubscriberEmail("");
      } else {
        setSubscribeMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSubscribeMessage("Something went wrong. Please try again.");
    }
  };

  const quickLinks: MenuLink[] = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Podcast",
      href: "/podcast",
    },
    {
      text: "Coaching",
      href: "/coaching",
    },
    {
      text: "Consulting",
      href: "/consulting",
    },
    {
      text: "Speaking",
      href: "/speaking",
    },
    {
      text: "Contact",
      href: "#",
    },
  ];

  const socialLinks: SocialIcon[] = [
    {
      icon: faInstagram,
      label: "Instagram",
      href: new URL("https://www.instagram.com/The.Phelan.Focus/"),
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      href: new URL(
        "https://www.linkedin.com/company/the-phelan-focus/?viewAsMember=true"
      ),
    },
    {
      icon: faFacebook,
      label: "Facebook",
      href: new URL(
        "https://www.facebook.com/profile.php?id=100009307890107&ref=ig_profile_ac"
      ),
    },
    {
      icon: faXTwitter,
      label: "X",
      href: new URL("https://x.com/The.Phelan.Focus"),
    },
  ];

  return (
    <>
      <ContactModal />
      <motion.footer
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className={`z-10 relative py-16 px-6 transition-colors duration-500 ${
          mounted && resolvedTheme === "light"
            ? "bg-white text-black"
            : "bg-[var(--slateBlue)] text-white"
        }`}
      >
        {/* Top Row: Logo Only (social removed) */}
        <div className="max-w-7xl mx-auto flex justify-center md:justify-start border-b border-gray-600 pb-8">
          <h2 className="text-2xl font-bold text-[var(--gold)]">Phelan Focus</h2>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pt-8 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  {link.text === "Contact" ? (
                    <button
                      type="button"
                      className="link-gold-hover bg-transparent border-none p-0 m-0 text-inherit cursor-pointer"
                      onClick={openModal}
                    >
                      Contact
                    </button>
                  ) : (
                    <Link href={link.href} className="link-gold-hover">
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-base mb-4 font-medium tracking-wide text-center w-full">
              Subscribe For Our Newsletter
            </h3>
            <input
              type="email"
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full max-w-xs p-3 rounded-lg mb-2 border text-sm text-center ${
                mounted && resolvedTheme === "light"
                  ? "bg-white text-black placeholder-gray-600 border-gray-400"
                  : "bg-[#0e2a47] text-white placeholder-gray-300 border-[#355776]"
              }`}
            />
            <button
              onClick={handleSubscribe}
              className="w-full max-w-xs border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black py-2 rounded-full text-sm font-semibold transition duration-300"
            >
              SUBSCRIBE NOW
            </button>
            {subscribeMessage && (
              <p className="mt-2 text-sm">{subscribeMessage}</p>
            )}
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg mb-4 font-semibold">Follow Us</h3>

            <div className="flex flex-col items-center md:items-start gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href.toString()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gold-hover inline-flex items-center gap-2 text-sm"
                >
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="max-w-7xl mx-auto border-gray-600 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Phelan Focus</span>. All rights
          reserved • Powered by{" "}
          <a
            href="https://www.projxon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:underline"
          >
            PROJXON
          </a>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
