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
        'How savvy brands are safely using the magic of AI. Learn how to navigate AIs potential without sacrificing authenticity or trust in your brand journey.',
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
      
      {/* Recent Keynote Clients - Using CSS file styles */}
      <section className="recent-keynote-section">
        <div className="keynote-clients-container">
          <div className="clients-heading">
            Recent Keynote Clients
          </div>
          <div className="logos-card">
            <div className="logos-grid">
              {[...Array(6)].map((_, i) => (
                <div className="logo-item" key={i}>
                  <Image
                    src={`/speaking/school${i + 1}.png`}
                    alt={`Client ${i + 1} logo`}
                    width={115}
                    height={48}
                    className=""
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Speeches Section - Improved */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#0f1419] dark:via-[#1a2332] dark:to-[#0f1419]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mark's Most Popular Coaching Sessions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transform your team with powerful, actionable insights
            </p>
          </div>

          <div className="space-y-24">
            {keynotes.map((keynote, index) => (
              <div 
                key={index} 
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={`relative group ${index % 2 === 0 ? '' : 'md:order-2'}`}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <Image
                    src={keynote.image}
                    alt={keynote.title}
                    width={700}
                    height={700}
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
                <div className={`${index % 2 === 0 ? '' : 'md:order-1'}`}>
                  <div className="bg-white dark:bg-[#1c2535] p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300">
                    <div className={`inline-block ${keynote.preHeadingColor} bg-opacity-10 px-4 py-2 rounded-full mb-4`}>
                      <p className={`text-xs font-bold ${keynote.preHeadingColor} uppercase tracking-wide`}>
                        {keynote.preHeading}
                      </p>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {keynote.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                      {keynote.description}
                    </p>
                    <button
                      className={`border-2 ${keynote.buttonColors} px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                    >
                      {keynote.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Improved */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-[#2a1e13] dark:to-[#1a1410]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Mark's Most Popular Keynote Speeches
          </h2>
          <div className="bg-white dark:bg-[#1c1410] rounded-2xl shadow-2xl p-10 md:p-14 border-t-4 border-yellow-500">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Don't Take Our Word For It
            </h3>
            <svg className="w-12 h-12 mx-auto mb-6 text-yellow-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
              "Mark's coaching sessions are the most impactful of any program I've participated in — insightful, energizing, and life-changing."
            </p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              — Global Leadership Summit Participant
            </p>
          </div>
        </div>
      </section>

      {/* What's Included - Improved */}
      <section className="py-24 px-6 bg-white dark:bg-[#0b1727]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              What Makes a Great Coaching Experience?
            </h2>
            <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A transformational coaching session empowers individuals to challenge their own thinking
              and approach. It inspires clients to take actionable steps towards their goals. A great
              coaching experience should be engaging, insightful, memorable, and motivating. That's
              exactly what Mark delivers. Every Single Time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <Image
                src="/phelan-mark-37.jpg"
                alt="Mark speaking on stage"
                width={600}
                height={600}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                What's Included In Every Speech?
              </h3>
              <ul className="space-y-5">
                {[
                  'One-on-one sessions',
                  'Group coaching sessions',
                  'Access to resources and workbooks',
                  'Personal feedback and development',
                  'Goal tracking and accountability',
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-200 pt-0.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action - Improved */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 py-20 px-6 text-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Have a question that hasn't been answered, yet?
          </h3>
          <p className="text-lg md:text-xl text-gray-800 mb-8">
            Let's discuss how Mark can transform your next event
          </p>
          <Link href="/contact">
            <button className="btn-book bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:bg-gray-800 hover:scale-105 transition-all duration-300">
              <span>Book a Discovery Call</span>
            </button>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}