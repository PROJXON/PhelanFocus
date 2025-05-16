"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./podcast.css";

export default function PodcastPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "I’m a podcast fanatic – and this is my new obsession! So many life skills tucked in the fun conversations...",
      author: "— iTunes Review",
    },
    {
      text: "Mark's coaching helped me finally get clarity in my business.",
      author: "— Entrepreneur Weekly",
    },
    {
      text: "Every episode delivers pure value. Highly recommend!",
      author: "— FounderCast",
    },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="bg-white dark:bg-[#0b1727] text-gray-800 dark:text-white">
      <Navbar isFooter={false} />

      {/* HERO */}
      <section className="podcast-hero" style={{ backgroundImage: "url('/podcast2.jpeg')" }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Podcast</h1>
          <p>
            <Link href="/">Home</Link> / Podcast
          </p>
        </div>
      </section>

      {/* MARK PHELAN STORY */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="/Phelancoaching.jpg"
            alt="Podcast Hosts"
            width={400}
            height={400}
            className="rounded-xl shadow-2xl border-4 border-white dark:border-gray-700"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Meet Mark Phelan</h3>
          <p className="text-lg leading-relaxed opacity-80">
            Mark Phelan is a dynamic public speaker and strategic consultant
            known for transforming complexity into clarity. With a foundation in
            military logistics and a career spanning project management,
            e-commerce, IT, and engineering, Mark brings a unique blend of
            precision, discipline, and forward-thinking innovation.
          </p>
          <p className="text-lg leading-relaxed opacity-80 mt-4">
            He has led high-impact initiatives across multimillion-dollar
            organizations, building scalable systems and empowering teams to
            perform at their best. Whether he's on stage or in the boardroom,
            Mark delivers insights that inspire action and drive measurable
            results — all while staying grounded in authenticity and service.
          </p>
        </div>
      </section>

      {/* QUOTE CAROUSEL */}
      <section className="bg-slate-800 text-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">What Listeners Say</h3>
        <div className="relative max-w-3xl mx-auto h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              <div className="bg-slate-700 p-6 rounded-xl shadow-md">
                <p className="italic text-lg mb-4">“{quotes[quoteIndex].text}”</p>
                <p className="text-yellow-400 text-sm uppercase font-semibold tracking-widest">
                  {quotes[quoteIndex].author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* LISTEN ON */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-10">
          Listen wherever you find your favorite podcasts:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {["apple-podcast", "youtube", "spotify", "google-podcast"].map((platform, i) => (
            <a
              key={i}
              href="https://www.youtube.com/watch?v=962eYqe--Yc"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-lg"
            >
              <Image
                src={`/podcast/${platform}.png`}
                alt={`${platform} logo`}
                width={200}
                height={50}
              />
            </a>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-800 text-white py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Are you ready to take action?</h3>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Schedule a no-cost discovery call to learn if I'm the right person to help you move forward.
        </p>
        <div className="max-w-xs mx-auto">
          <Link href="/contact">
            <button
              className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold transition duration-300 border-2 ${
                mounted && resolvedTheme === "light"
                  ? "border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white hover:shadow-md"
                  : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-md"
              }`}
            >
              Book a Call
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
