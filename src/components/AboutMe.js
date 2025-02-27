// components/AboutMe.js
"use client";
import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import MovingRipplesBackground from "./MovingRipplesBackground"; // Import the ripple background

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
        className="border flex justify-center items-center rounded-full w-9 h-9 transition hover:bg-blue-500 hover:border-blue-500 hover:text-white"
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
      className="ezy__about17 light pt-32 md:pt-40 pb-10 lg:pb-80 bg-white rounded-3xl rounded-t-none dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-[1] scroll-mt-20"
    >
      {/* Background ripples */}
      <MovingRipplesBackground /> {/* Add ripple background component */}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileOutOfView={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="max-w-6xl mx-auto px-4 relative z-[2]"
      >
        <div className="grid grid-cols-12 gap-8">
          {/* Image section */}
          <div className="col-span-12 sm:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full sm:max-w-[350px] h-[350px] sm:h-[350px] sm:overflow-visible overflow-hidden rounded-full">
              <img
                src="/PhelanFocus/Phelan.png"
                alt="Mark Phelan"
                className="absolute top-0 left-0 w-full h-full object-cover object-top rounded-full sm:rounded-none sm:max-w-[350px] sm:h-[350px] sm:overflow-visible overflow-hidden"
              />
            </div>
          </div>

          {/* Text section */}
          <div className="col-span-12 sm:col-span-7 flex flex-col justify-center items-center text-center sm:text-left">
            <h2 className="text-xl md:text-3xl font-semibold leading-tight mt-4">
              Mark Phelan's Story
            </h2>
            <p className="text-base sm:text-lg leading-relaxed opacity-80 my-4 md:my-6 lg:pr-12">
              With a background in military logistics and project management, I bring a unique perspective to consulting, blending discipline with innovation. Over the years, I've spearheaded complex projects in e-commerce, IT, and engineering, managed multimillion-dollar assets, and developed scalable frameworks that have shaped PROJXON’s success.
            </p>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row mt-8">
              <div className="flex justify-center md:ml-12 mt-4 sm:mt-0">
                <ul className="flex items-center justify-center sm:justify-end">
                  {social.map((item, i) => (
                    <Social item={item} key={i} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
