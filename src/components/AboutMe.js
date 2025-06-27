"use client";
import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import Link from "next/link";

const social = [
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/phelanmarkw/",
  },
];

const Social = ({ item }) => {
  const { link, icon } = item;
  return (
    <li className="inline-block m-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-400 flex justify-center items-center rounded-full w-9 h-9 transition hover:bg-blue-500 hover:border-blue-500 hover:text-white hover:scale-110 duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={icon} style={{ fontSize: "1rem", width: "1rem", height: "1rem" }} />
      </a>
    </li>
  );
};

Social.propTypes = {
  item: PropTypes.object.isRequired,
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="pt-20 md:pt-28 pb-20 bg-white text-gray-800 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileOutOfView={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-12 gap-10 items-center">
          {/* Image section */}
          <div className="col-span-12 sm:col-span-5 flex justify-center items-center">
            <img
              src="Phalen, Mark -77.jpg"
              alt="Mark Phelan"
              className="w-full max-w-xs sm:max-w-sm h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Text section */}
          <div className="col-span-12 sm:col-span-7">
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
              <ul className="flex">
                {social.map((item, i) => (
                  <Social item={item} key={i} />
                ))}
              </ul>

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
