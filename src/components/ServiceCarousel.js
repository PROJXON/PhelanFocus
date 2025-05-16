"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

// Services to display
const services = [
  {
    title: "Performance Coaching",
    lessons: "10+ Lessons",
    badgeColor: "bg-blue-500",
    image: "performance-coaching.jpg",
  },
  {
    title: "Career Coaching",
    lessons: "10+ Lessons",
    badgeColor: "bg-pink-500",
    image: "career-coaching.jpg",
  },
  {
    title: "Consulting",
    lessons: "10+ Lessons",
    badgeColor: "bg-green-500",
    image: "consulting.jpg",
  },
  {
    title: "Personal Development",
    lessons: "10+ Lessons",
    badgeColor: "bg-yellow-500",
    image: "personal-development.jpg",
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const ServiceCarousel = () => {
  return (
    <section className="bg-white py-20 md:py-24 px-4 mb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Explore How I Can Help You
          </h2>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {services.map((item, index) => (
            <div key={index} className="px-4">
              <div className="rounded-xl shadow-lg bg-white overflow-hidden transition hover:shadow-2xl">
                {/* Image Block */}
                <div className="relative group overflow-hidden">
                  <Link href="/service-detail">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-80"
                      unoptimized
                    />
                  </Link>
                </div>

                {/* Badge */}
                <div className="p-4 -mt-8 relative z-10">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full ${item.badgeColor}`}
                  >
                    {item.lessons}
                  </span>
                </div>

                {/* Title */}
                <div className="p-4 bg-white">
                  <h4 className="text-xl font-semibold text-gray-800">
                    <Link href="/service-detail">{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServiceCarousel;
