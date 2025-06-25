"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import "./speaking.css";
import ScrollToTopButton from "@/components/ScrollToTop";

export default function SpeakingPage() {
  return (
    <div className="bg-white dark:bg-[#0b1727] text-gray-800 dark:text-white">
      <Navbar isFooter={false} />

      {/* Hero Section */}
      <section className="speaking-hero" style={{ backgroundImage: "url('/PublicSPeakking.png')" }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Speaking</h1>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-20 px-6 bg-white dark:bg-[#f8f9fa] text-gray-900 dark:text-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase mb-2">
                Recent Keynote Clients
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Just a few of the 500 brands who've entrusted their audiences to Mark Phelan
              </h2>
            </div>

            {/* Right: Logo grid */}
            <div className="bg-[#f4f1f1] rounded-xl p-6 shadow relative border-t-4 border-pink-500">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 items-center justify-items-center">
                {[...Array(9)].map((_, i) => (
                  <img
                    key={i}
                    src={`/speaking/school${i + 1}.png`}
                    alt={`school${i + 1}`}
                    className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                ))}
              </div>
            </div>
        </div>
      </section>

        {/* The Power of Storytelling */}
        <section className="py-20 px-6 text-center bg-white dark:bg-[#0b1727]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            The Power of Storytelling
        </h2>



        <p className="text-md text-gray-600 dark:text-gray-300 mb-8">
            Dive into Mark's approach to storytelling and learn how he captivates audiences in under 4 minutes.
        </p>

        <div className="max-w-4xl mx-auto aspect-video">
            <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://drive.google.com/file/d/1Bzen3obegQ0SxDmNKaXqkMO9-WWG4ACb/view?t=79"
            title="Mark Phelan Keynote Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
        </section>

        {/* Keynote Speeches Section */}
        <section className="py-20 px-6 bg-[#f9f7f6] text-gray-900 dark:bg-[#1c1c1c] dark:text-white">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mark’s Most Popular Coaching Sessions</h2>
        </div>

        <div className="space-y-16">
            {/* Keynote 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/Phalen, Mark -78.jpg" alt="Keynote 1" className="rounded-lg shadow-xl" />
            <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
                <p className="text-sm font-bold text-cyan-600 uppercase mb-2">Fan Favorite of 2023</p>
                <h3 className="text-2xl font-semibold mb-2">The Cube of Creativity</h3>
                <p className="mb-4">
                Why adding constraints sparks innovation, action, & builds business. Discover how Mark turns limitations into launchpads for success using stories of grit and invention.
                </p>
                <button className="border border-blue-400 text-blue-500 px-5 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
                Step Into The Cube of Creativity
                </button>
            </div>
            </div>

            {/* Keynote 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-white dark:bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
                <p className="text-sm font-bold text-pink-600 uppercase mb-2">Expanded for 2025</p>
                <h3 className="text-2xl font-semibold mb-2">Artificial Influence</h3>
                <p className="mb-4">
                How savvy brands are safely using the magic of AI. Learn how to navigate AI’s potential without sacrificing authenticity or trust in your brand journey.
                </p>
                <button className="border border-pink-400 text-pink-500 px-5 py-2 rounded-md hover:bg-pink-500 hover:text-white transition">
                Uncover the Magic of AI
                </button>
            </div>
            <img src="/Phalen, Mark -21.jpg" alt="Keynote 2" className="rounded-lg shadow-xl order-1 md:order-2" />
            </div>

            {/* Keynote 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/Phalen, Mark -39.jpg" alt="Keynote 3" className="rounded-lg shadow-xl" />
            <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-lg shadow-lg">
                <p className="text-sm font-bold text-yellow-600 uppercase mb-2">Most Booked Keynote All Time</p>
                <h3 className="text-2xl font-semibold mb-2">The Loyalty Loop</h3>
                <p className="mb-4">
                How small things add up to big business. Learn how small moments can build trust, anticipation, and transformation in your customer relationships.
                </p>
                <button className="border border-yellow-400 text-yellow-600 px-5 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition">
                Loop Me In!
                </button>
            </div>
            </div>
        </div>
        </section>



      {/* Testimonial Carousel - Placeholder */}
      <section className="py-16 text-center bg-[#ffe6cc] dark:bg-[#2a1e13]">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mark’s Most Popular Keynote Speeches</h2>
        </div>
        <h3 className="text-xl font-bold mb-4">Don't Take Our Word For It</h3>
        <p className="italic max-w-xl mx-auto">
          "Mark’s coaching sessions are the most impactful of any program I’ve participated in  —
          insightful, energizing, and life-changing."
        </p>
        <p className="mt-2 font-semibold">— Global Leadership Summit Participant</p>
      </section>

      {/* What's Included */}
    <section className="py-20 px-6 bg-[#fcfbfa] text-gray-900 dark:bg-[#0b1727] dark:text-white">
    <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
        What Makes a Great Coaching Experience?
        </h2>
        <p className="max-w-3xl mx-auto text-lg opacity-80">
        A transformational coaching session empowers individuals to challenge their own thinking and approach. It inspires clients to take actionable steps towards their goals. A great coaching experience should be engaging, insightful, memorable, and motivating. That’s exactly what Mark delivers. Every Single Time.
        </p>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
        <Image
            src="/Phalen, Mark -37.jpg"
            alt="Mark speaking on stage"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
        />
        </div>

        <div>
        <h3 className="text-2xl font-bold mb-4">What’s Included In Every Speech?</h3>
        <ul className="space-y-4 text-lg">
            {[
            "One-on-one sessions",
            "Group coaching sessions",
            "Access to resources and workbooks",
            "Personal feedback and development",
            "Goal tracking and accountability"
            ].map((item, i) => (
            <li key={i} className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-4 bg-cyan-500 rounded-full flex-shrink-0"></span>
                {item}
            </li>
            ))}
        </ul>
        </div>
    </div>
    </section>


      {/* Call To Action */}
      <section className="bg-yellow-500 py-16 text-center text-black">
        <h3 className="text-2xl font-bold mb-4">
          Have a question that hasn’t been answered, yet?
        </h3>
        <Link href="/contact">
          <button className="btn-book">
            <span>Book a Discovery Call</span><span></span>
          </button>
        </Link>
      </section>

      <Footer />
      <ScrollToTopButton />

    </div>
  );
}
