'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Image from 'next/image';
import Link from 'next/link';
import './speaking.css';
import ScrollToTopButton from '@/components/ScrollToTop';
import { Keynote } from '@/types/interfaces';

export default function SpeakingPage() {
  const keynotes: Keynote[] = [
    {
      title: 'The Cube of Creativity',
      description:
        'Why adding constraints sparks innovation, action, & builds business. Discover how Mark turns limitations into launchpads for success using stories of grit and invention.',
      image: '/phelan-mark-78.jpg',
      preHeading: 'Fan Favorite of 2023',
      buttonText: 'Step Into The Cube of Creativity',
      preHeadingColor: 'text-cyan-600',
      buttonColors: 'border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white',
    },
    {
      title: 'Artificial Influence',
      description:
        'How savvy brands are safely using the magic of AI. Learn how to navigate AI’s potential without sacrificing authenticity or trust in your brand journey.',
      image: '/phelan-mark-21.jpg',
      preHeading: 'Expanded for 2025',
      buttonText: 'Uncover the Magic of AI',
      preHeadingColor: 'text-pink-600',
      buttonColors: 'border-pink-400 text-pink-500 hover:bg-pink-500 hover:text-white',
    },
    {
      title: 'The Loyalty Loop',
      description:
        'How small things add up to big business. Learn how small moments can build trust, anticipation, and transformation in your customer relationships.',
      image: '/phelan-mark-39.jpg',
      preHeading: 'Most Booked Keynote All Time',
      buttonText: 'Loop Me In!',
      preHeadingColor: 'text-yellow-600',
      buttonColors: 'border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-black',
    },
  ];

  return (
    <div className="bg-white dark:bg-[#0b1727] text-gray-800 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <Hero bgImage="/PublicSPeakking.png" header="Speaking" />

      {/* Brand Logos */}
      <section className="z-10 relative py-20 px-6 bg-white dark:bg-[#f8f9fa] text-gray-900 dark:text-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase mb-2">
              Recent Keynote Clients
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              {"Just a few of the 500 brands who've entrusted their audiences to Mark Phelan"}
            </h2>
          </div>

          {/* Right: Logo grid */}
          <div className="bg-[#f4f1f1] rounded-xl p-6 shadow relative border-t-4 border-pink-500">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 items-center justify-items-center">
              {[...Array(6)].map((_, i) => (
                <Image
                  key={i}
                  src={`/speaking/school${i + 1}.png`}
                  alt={`Client ${i + 1} logo`}
                  width={80}
                  height={48}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Storytelling */}
      <section className="z-10 relative py-20 px-6 text-center bg-white dark:bg-[#0b1727]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          The Power of Storytelling
        </h2>

        <p className="text-md text-gray-600 dark:text-gray-300 mb-8">
          {
            "Dive into Mark's approach to storytelling and learn how he captivates audiences in under 4 minutes."
          }
        </p>

        <div className="max-w-4xl mx-auto aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/GyXiM_O76Vo"
            title="Mark Phelan Keynote Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Keynote Speeches Section */}
      <section className="z-10 relative py-20 px-6 bg-[#f9f7f6] text-gray-900 dark:bg-[#1c1c1c] dark:text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mark’s Most Popular Coaching Sessions
          </h2>
        </div>

        <div className="space-y-16">
          {keynotes.map((keynote, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src={keynote.image}
                alt={`Keynote ${index + 1}`}
                width={700}
                height={700}
                className={`rounded-lg shadow-xl ${index % 2 === 0 ? '' : 'order-1 md:order-2'}`}
              />
              <div
                className={`bg-white dark:bg-[#2a2a2a] p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? '' : 'order-2 md:order-1'
                }`}
              >
                <p className={`text-sm font-bold ${keynote.preHeadingColor} uppercase mb-2`}>
                  {keynote.preHeading}
                </p>
                <h3 className="text-2xl font-semibold mb-2">{keynote.title}</h3>
                <p className="mb-4">{keynote.description}</p>
                <button
                  className={`border ${keynote.buttonColors} px-5 py-2 rounded-md transition`}
                >
                  {keynote.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Carousel - Placeholder */}
      <section className="z-10 relative py-16 text-center bg-[#ffe6cc] dark:bg-[#2a1e13]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mark’s Most Popular Keynote Speeches
          </h2>
        </div>
        <h3 className="text-xl font-bold mb-4">{"Don't Take Our Word For It"}</h3>
        <p className="italic max-w-xl mx-auto">
          {`"Mark’s coaching sessions are the most impactful of any program I’ve participated in — insightful, energizing, and life-changing."`}
        </p>
        <p className="mt-2 font-semibold">— Global Leadership Summit Participant</p>
      </section>

      {/* What's Included */}
      <section className="z-10 relative py-20 px-6 bg-[#fcfbfa] text-gray-900 dark:bg-[#0b1727] dark:text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Makes a Great Coaching Experience?
          </h2>
          <p className="max-w-3xl mx-auto text-lg opacity-80">
            A transformational coaching session empowers individuals to challenge their own thinking
            and approach. It inspires clients to take actionable steps towards their goals. A great
            coaching experience should be engaging, insightful, memorable, and motivating. That’s
            exactly what Mark delivers. Every Single Time.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/phelan-mark-37.jpg"
              alt="Mark speaking on stage"
              width={600}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">What’s Included In Every Speech?</h3>
            <ul className="space-y-4 text-lg">
              {[
                'One-on-one sessions',
                'Group coaching sessions',
                'Access to resources and workbooks',
                'Personal feedback and development',
                'Goal tracking and accountability',
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
      <section className="z-10 relative bg-yellow-500 py-16 text-center text-black">
        <h3 className="text-2xl font-bold mb-4">Have a question that hasn’t been answered, yet?</h3>
        <Link href="/contact">
          <button className="btn-book">
            <span>Book a Discovery Call</span>
            <span></span>
          </button>
        </Link>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
