"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { MenuLink, SocialIcon } from "@/types/interfaces";
import { useContactModal } from "@/context/ContactModalContext";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const { openModal } = useContactModal();

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

  const mutedText = "text-gray-300";
  const socialBtn =
    "bg-white/10 text-white hover:bg-[var(--gold)] hover:text-[var(--slateBlue)]";
  const inputCls =
    "bg-[#0e2a47] text-white placeholder-gray-400 border-[#355776]";

  return (
    <>
      <ContactModal />
      <motion.footer
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="z-10 relative pt-16 pb-8 px-6 bg-[var(--slateBlue)] text-white"
      >
        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start sm:col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold text-[var(--gold)]">Phelan Focus</h2>
            <p className={`mt-3 text-sm max-w-xs ${mutedText}`}>
              Coaching, speaking, and consulting to help you create the change
              you want to see.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href.toString()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${socialBtn}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>

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
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg mb-2 font-semibold">Stay in the loop</h3>
            <p className={`text-sm mb-4 max-w-xs ${mutedText}`}>
              Get new episodes and coaching insights in your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
              }}
              className="w-full max-w-sm flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                placeholder="Enter your email"
                className={`flex-1 p-3 rounded-lg border text-sm ${inputCls}`}
              />
              <button
                type="submit"
                className="border border-[var(--gold)] bg-[var(--gold)] text-black hover:bg-transparent hover:text-[var(--gold)] px-5 py-3 rounded-lg text-sm font-semibold transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {subscribeMessage && (
              <p className={`mt-2 text-sm ${mutedText}`}>{subscribeMessage}</p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm ${mutedText}`}
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Phelan Focus</span>. All rights
            reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://www.projxon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--gold)] hover:underline"
            >
              PROJXON
            </a>
          </p>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
