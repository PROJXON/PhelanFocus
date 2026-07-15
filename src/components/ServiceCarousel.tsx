'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { FaChartLine, FaBriefcase, FaHandshake, FaSeedling } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface ServiceCarouselItem {
  title: string;
  lessons: string;
  icon: IconType;
}

// Services to display
const services: ServiceCarouselItem[] = [
  {
    title: 'Performance Coaching',
    lessons: '10+ Lessons',
    icon: FaChartLine,
  },
  {
    title: 'Career Coaching',
    lessons: '10+ Lessons',
    icon: FaBriefcase,
  },
  {
    title: 'Consulting',
    lessons: '10+ Lessons',
    icon: FaHandshake,
  },
  {
    title: 'Personal Development',
    lessons: '10+ Lessons',
    icon: FaSeedling,
  },
];

const responsiveSlider = [
  { breakpoint: 1024, settings: { slidesToShow: 2 } },
  { breakpoint: 640, settings: { slidesToShow: 1 } },
];

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
        <Slider
          dots={false}
          arrows={false}
          infinite={true}
          autoplay={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={responsiveSlider}
        >
          {services.map((item, index) => (
            <div key={index} className="px-4">
              <Link href="/coaching">
                <div className="rounded-xl shadow-lg bg-white transition hover:shadow-2xl group">
                  <div className="rounded-xl overflow-hidden">
                    {/* Icon Block */}
                    <div className="h-64 flex items-center justify-center bg-[var(--slateBlue)] transition-colors duration-300 group-hover:bg-[#1a3a5c]">
                      <item.icon className="text-[var(--gold)] text-6xl" />
                    </div>

                    {/* Badge */}
                    <div className="p-4 -mt-8 relative z-10">
                      <span className="inline-block px-3 py-1 text-sm font-medium text-white rounded-full bg-[var(--slateBlue)]">
                        {item.lessons}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="p-4 bg-white">
                      <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServiceCarousel;
