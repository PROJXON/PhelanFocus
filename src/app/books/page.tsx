'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import StarRating from '@/components/StarRating';
import Books from '@/components/Books';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './books.css';
import ScrollToTopButton from '@/components/ScrollToTop';

export default function BooksPage() {
  // State for testimonials slider
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      quote: "The Bend to Bendd book transformed the way I approach my team's growth.",
      author: 'Latressa',
      rating: 5,
    },
    {
      quote: 'This Peak to Peak book gave me the framework I needed to deliver results.',
      author: 'Jake Rappleye',
      rating: 4.5,
    },
    {
      quote: 'The speaking guide helped me overcome my stage fright.',
      author: 'De La Cruz',
      rating: 4.5,
    },
    {
      quote: 'These books are game-changers for professional development.',
      author: 'Caleb Contreras',
      rating: 5,
    },
    {
      quote: 'Practical advice that I could implement immediately.',
      author: 'Chase Heien',
      rating: 5,
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-white dark:bg-[#0b1727] text-gray-800 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <Hero bgImage="/books.jpeg" header="" />

      {/* Books Section */}
      <Books
        sectionClasses="z-10 relative dark:bg-gray-900"
        headingClasses="mb-8 dark:text-white text-center"
        linkToBooksPage={false}
        bookClasses="bg-gray-50 dark:bg-gray-800 shadow h-full hover:-translate-y-1"
      />

      {/* Testimonials */}
      <section className="z-10 relative py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            What Readers Say
            <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></span>
          </h2>

          <div className="relative h-96 md:h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                  index === activeTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg max-w-3xl mx-4 relative">
                  <div className="absolute top-0 left-8 -mt-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-center mb-2">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  <blockquote className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {`"${testimonial.quote}"`}
                  </blockquote>

                  <div className="flex items-center">
                    <div className="bg-blue-600 dark:bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial
                    ? 'bg-blue-600 dark:bg-blue-400 w-6'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`View testimonial from ${testimonials[index].author}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Read Section */}
      <section className="z-10 relative py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Who Should Read These Books?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1">
              {/* <h3 className="text-xl font-semibold text-blue-600 mb-2">Bend to Bend</h3> */}
              <p>Ideal for leaders, managers, mentors, and anyone fostering growth.</p>
              <ul className="mt-2 pl-5 list-disc text-gray-600 dark:text-gray-300 hidden group-hover:block">
                <li>Team leaders</li>
                <li>HR professionals</li>
                <li>Career coaches</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1">
              {/* <h3 className="text-xl font-semibold text-blue-600 mb-2">Peak to Peak</h3> */}
              <p>Perfect for consultants, advisors, and entrepreneurs enhancing delivery skills.</p>
              <ul className="mt-2 pl-5 list-disc text-gray-600 dark:text-gray-300 hidden group-hover:block">
                <li>Management consultants</li>
                <li>Business analysts</li>
                <li>Startup founders</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1">
              {/* <h3 className="text-xl font-semibold text-blue-600 mb-2">Shore to Shore</h3> */}
              <p>Great for professionals, educators, and creatives mastering public speaking.</p>
              <ul className="mt-2 pl-5 list-disc text-gray-600 dark:text-gray-300 hidden group-hover:block">
                <li>Sales professionals</li>
                <li>Teachers & professors</li>
                <li>Content creators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="z-10 relative py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/phelan-mark-21.jpg"
            alt="Phelan"
            width={200}
            height={200}
            className="rounded-full shadow-lg transition-transform duration-500 hover:scale-105"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              About the Author
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Phelan is a renowned expert in coaching, consulting, and public speaking, with years
              of experience inspiring individuals and organizations worldwide. These books share
              insights and tools to help you excel in leadership and communication.
            </p>
            <Image
              src="/books/sign.png"
              alt="Author Signature"
              width={160}
              height={80}
              className="mx-auto md:mx-0 mt-4 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
