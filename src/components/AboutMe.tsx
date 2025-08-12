"use client";
import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "@/types/interfaces";
const social: SocialIcon[] = [
  {
    icon: faLinkedinIn,
    href: new URL("https://www.linkedin.com/in/phelanmarkw/"),
  },
];

const Social = ({ item }: { item: SocialIcon }) => {
  const { href, icon } = item;
  return (
    <li className="inline-block">
      <a
        href={href.toString()}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-400 flex justify-center items-center rounded-full w-9 h-9 transition hover:bg-blue-500 hover:border-blue-500 hover:text-white hover:scale-110 duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
      </a>
    </li>
  );
};

Social.propTypes = {
  item: PropTypes.object.isRequired,
};

const AboutMe = () => {
  return (
    <section id="about" className="pt-20 md:pt-28 pb-20 bg-white text-gray-800 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image section */}
          <div className="w-full md:w-5/12 flex justify-center">
            <Image
              src="/phelan-mark-77.jpg"
              width={256}
              height={256}
              alt="Mark Phelan"
              className="w-64 sm:w-72 md:w-full max-w-sm rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Text section */}
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Hi, I'm Mark.</h2>
            <p className="text-[#cf443c] font-medium mb-4">
              I believe that each of us has the potential to create the change we want to see in the world.
              But too often we get stuck feeling like we can’t. I want to change that.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The world needs people like you. People gifted with compassion and a desire to make a difference.
              People who see a problem and look for a solution.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              And you need people like me. Someone who’ll not only help you find the confidence to step up
              and make that difference, but also support you as you create a life you love.
            </p>

            {/* Social & Button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <ul className="flex gap-2">{social.map((item, i) => <Social item={item} key={i} />)}</ul>
                <Link href="/about">
                  <button className="btn">
                    <span>About Phelan</span>
                    <span></span>
                  </button>
                </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;