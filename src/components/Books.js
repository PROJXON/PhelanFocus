"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex mb-3">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#half-star)" />
          <defs>
            <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Books() {
  const [expandedBooks, setExpandedBooks] = useState([false, false, false]);

  const toggleReadMore = (index) => {
    const newExpandedBooks = [...expandedBooks];
    newExpandedBooks[index] = !newExpandedBooks[index];
    setExpandedBooks(newExpandedBooks);
  };

  return (
    <section id="books" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Books
          </h2>
            <Link href="/books">
              <button className="btn">
                <span>View all Books</span>
                <span></span>
              </button>
            </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Book 1 */}
          <div className="bg-[#F3F0FF] border border-gray-200 rounded-lg shadow-md p-6 flex flex-col hover:shadow-lg transition-all duration-300">

            <Image 
              src="books/bendtobendblur.png" 
              alt="Bend to Bend" 
              width={300} 
              height={450} 
              className="rounded-md mb-4 mx-auto transition-transform duration-500 hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {/* Bend to Bend */}
            </h3>
            <StarRating rating={4.5} />
            <p className="text-gray-600 mb-4">
              {expandedBooks[0] 
                ? "The course of Volume, Velocity and Veracity "
                : "The course of Volume, Velocity and Veracity "}
            </p>
            <div className="flex mt-auto space-x-2">
            <button onClick={() => toggleReadMore(2)} className="btn">
              <span>{expandedBooks[2] ? "Read Less" : "Read More"}</span>
              <span></span>
            </button>
            </div>
          </div>

          {/* Book 2 */}
          <div className="bg-[#FFF0F3] border border-gray-200 rounded-lg shadow-md p-6 flex flex-col hover:shadow-lg transition-all duration-300">

            <Image 
              src="books/peaktopeakblur.png" 
              alt="Peak to Peak" 
              width={300} 
              height={450} 
              className="rounded-md mb-4 mx-auto transition-transform duration-500 hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {/* Peak to Peak */}
            </h3>
            <StarRating rating={4.5} />
            <p className="text-gray-600 mb-4">
              {expandedBooks[1] 
                ? "The journey of Purpose, progress and perspective."
                : "The journey of Purpose, progress and perspective."}
            </p>
            <div className="flex mt-auto space-x-2">
            <button onClick={() => toggleReadMore(2)} className="btn">
              <span>{expandedBooks[2] ? "Read Less" : "Read More"}</span>
              <span></span>
            </button>
            </div>
          </div>

          {/* Book 3 */}
          <div className="bg-[#FFF9EC] border border-gray-200 rounded-lg shadow-md p-6 flex flex-col hover:shadow-lg transition-all duration-300">

            <Image 
              src="books/shoretoshoreblur.png" 
              alt="Shore to Shore" 
              width={300} 
              height={450} 
              className="rounded-md mb-4 mx-auto transition-transform duration-500 hover:scale-105"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {/* Shore to Shore */}
            </h3>
            <StarRating rating={4.5} />
            <p className="text-gray-600 mb-4">
              {expandedBooks[2] 
                ? "The building of a Captain, crew and Courses."
                : "The building of a Captain, crew and Courses."}
            </p>
            <div className="flex mt-auto space-x-2">
            <button onClick={() => toggleReadMore(2)} className="btn">
              <span>{expandedBooks[2] ? "Read Less" : "Read More"}</span>
              <span></span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}