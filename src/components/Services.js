"use client";
import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faStar, faRandom } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const colorMap = {
  blue: "bg-blue-600 text-blue-600",
  red: "bg-red-600 text-red-600",
  green: "bg-green-600 text-green-600",
};

const serviceList = [
  {
    color: "blue",
    icon: faStar,
    title: "Performance Coaching",
    description:
      "Empowering individuals and teams to maximize their potential through tailored coaching strategies. We focus on skill development, goal setting, and performance optimization to help you achieve long-term success.",
  },
  {
    color: "blue",
    icon: faRandom,
    title: "Business Optimization",
    description:
      "Streamlining processes, improving efficiency, and implementing strategic solutions to drive business growth. We analyze workflows, eliminate bottlenecks, and enhance productivity to ensure operational excellence.",
  },
  {
    color: "blue",
    icon: faCamera,
    title: "Program Development",
    description:
      "Designing and implementing structured programs that align with your business goals. From employee training to leadership development, we create customized programs that foster growth, engagement, and long-term success.",
  },
];

const ServiceItem = ({ service }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileOutOfView={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white dark:bg-slate-800 text-gray-800 dark:text-white h-full shadow-xl rounded-[20px] p-6 lg:px-6 lg:py-12 transition-transform duration-300 hover:scale-105"
  >
    <div
      className={`w-24 h-24 rounded-full text-3xl inline-flex justify-center items-center mb-6 bg-opacity-10 shadow-md ${colorMap[service.color]}`}
    >
      <FontAwesomeIcon icon={service.icon} />
    </div>
    <h4 className="font-medium text-2xl mb-4">{service.title}</h4>
    <p className="opacity-80">{service.description}</p>
  </motion.div>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

const Services = () => {
  return (
    <section className="bg-white dark:bg-[#13395c] py-20 md:py-24 px-4 mb-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileOutOfView={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-3xl md:text-[45px] font-bold mb-4 text-gray-800 dark:text-white"
          >
            Services We Provide
          </motion.h2>
          <p className="text-lg opacity-80 text-gray-700 dark:text-gray-300">
            We deliver full services to make your brand reach the clients you want.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {serviceList.map((service, i) => (
            <ServiceItem service={service} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
