"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StarRating from "@/components/StarRating";

export default function Books({sectionClasses, headingClasses, linkToBooksPage, bookClasses}: {
  sectionClasses?: string;
  headingClasses?: string;
  linkToBooksPage: boolean;
  bookClasses: string;
}) {
  const [expandedBooks, setExpandedBooks] = useState([false, false, false]);

  const toggleReadMore = (index: number) => {
    const newExpandedBooks = [...expandedBooks];
    newExpandedBooks[index] = !newExpandedBooks[index];
    setExpandedBooks(newExpandedBooks);
  };

  const books = [
    {
      image: "/books/bendtobendblur.png",
      title: "Bend to Bend",
      subtitle: "The course of Volume, Velocity and Veracity.",
      rating: 4.5,
    },
    {
      image: "/books/peaktopeakblur.png",
      title: "Peak to Peak",
      subtitle: "The journey of Purpose, progress and perspective.",
      rating: 4.5,
    },
    {
      image: "/books/shoretoshoreblur.png",
      title: "Shore to Shore",
      subtitle: "The building of a Captain, crew and Courses.",
      rating: 4.5,
    },
  ];

  return (
    <section id="books" className={`py-16 bg-white ${sectionClasses}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className={`text-3xl font-bold text-gray-900 ${headingClasses}`}>
            Books
          </h2>
          {linkToBooksPage && (
            <Link href="/books">
              <button className="btn">
                <span>View all Books</span>
                <span></span>
              </button>
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <div
              key={i}
              className={`rounded-lg p-6 flex flex-col transition-all duration-300 hover:shadow-lg ${bookClasses}`}
            >
              <Image
                src={book.image}
                alt={book.title}
                width={300}
                height={450}
                className="rounded-md mb-4 mx-auto transition-transform duration-500 hover:scale-105"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {/* Bend to Bend */}
              </h3>
              <StarRating rating={book.rating} />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {expandedBooks[i] ? book.subtitle : book.subtitle}
              </p>
              <div className="flex mt-auto space-x-2">
                <button onClick={() => toggleReadMore(i)} className="btn">
                  <span>{expandedBooks[i] ? "Read Less" : "Read More"}</span>
                  <span></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}