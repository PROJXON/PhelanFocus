"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Podcast = () => {
  const shapes = [
    {
      classes: "left-0 top-0",
      width: 370,
      height: 534,
      viewBox: "0 0 370 534",
      cx: 0.5,
      cy: 164.5,
    },
    {
      classes: "right-0 bottom-0",
      width: 344,
      height: 370,
      viewBox: "0 0 344 470",
      cx: 369.5,
      cy: 369.5,
    },
  ];

  return (
    <section
      id="podcast"
      className="bg-[#f5faff] dark:bg-[var(--slateBlue)] text-[var(--slateBlue)] dark:text-white py-20 md:py-24 px-4 relative mb-24 transition-colors duration-500"
    >
      {shapes.map((shape, i) => (
        <svg
          key={i}
          className={`text-blue-200 dark:text-[#1E2735] absolute hidden sm:block -z-[1] ${shape.classes}`}
          width={shape.width}
          height={shape.height}
          viewBox={shape.viewBox}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={shape.cx} cy={shape.cy} r="369.5" fill="currentColor" />
        </svg>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-7xl mx-auto grid grid-cols-12 items-center"
      >
        {/* Left Column - Text */}
        <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-2">Podcast</h2>
          <h3 className="text-3xl font-semibold mb-4">Listen. Learn. Lead.</h3>
          <p className="text-lg opacity-80 dark:opacity-90">
            Dive into insightful conversations on leadership, mindset, and growth.
            New episodes coming soon!
          </p>
          <div className="mt-6 inline-block">
            <Link href="/podcast">
              <button className="btn">
                <span>Visit Podcast</span>
                <span></span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0 text-center pt-10 lg:pt-20">
          <div className="relative inline-block group">
            <Image
              src="/podcast.png"
              width={796}
              height={796}
              alt="Podcast Coming Soon"
              className="rounded-xl shadow-lg group-hover:opacity-80 transition"
            />
            <Link
              href="/podcast"
              className="absolute inset-0 flex justify-center items-center"
            >
              <div className="bg-white dark:bg-gray-100 bg-opacity-70 dark:bg-opacity-20 p-4 rounded-full hover:bg-opacity-100 transition">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Podcast;
