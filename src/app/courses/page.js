"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "./courses.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from 'react';
import { FaGraduationCap, FaUsers, FaBook, FaLaptop, FaCertificate, FaClock } from 'react-icons/fa';

function ParallaxCard({ src, alt }) {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = imageRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = imageRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div className="parallax-card w-fit" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div ref={imageRef} className="parallax-inner rounded-xl shadow-md">
        <Image src={src} alt={alt} width={360} height={360} className="rounded-xl" />
      </div>
    </div>
  );
}

const CoursesPage = () => {
  const benefits = [
    {
      icon: <FaGraduationCap />,
      title: "Expert-Led Learning",
      description: "Learn from industry experts with years of experience in their fields."
    },
    {
      icon: <FaUsers />,
      title: "Community Support",
      description: "Join a community of like-minded individuals and grow together."
    },
    {
      icon: <FaBook />,
      title: "Comprehensive Curriculum",
      description: "Access well-structured content designed for optimal learning."
    },
    {
      icon: <FaLaptop />,
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to course materials."
    },
    {
      icon: <FaCertificate />,
      title: "Certification",
      description: "Earn a certificate upon completion to showcase your skills."
    },
    {
      icon: <FaClock />,
      title: "Lifetime Access",
      description: "Get lifetime access to course materials and future updates."
    }
  ];

  return (
    <>
      <Navbar />

      <section className="courses-hero" style={{ backgroundImage: "url('/courses/courses.jpeg')" }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Transform Your Future with Our Courses</h1>
          <p>Discover our comprehensive courses designed to help you achieve your goals and unlock your potential.</p>
        </div>
      </section>

      <div className="courses-page bg-white text-gray-800">

        {/* Intro Section */}
        <section className="intro-section">
          <div className="intro-content">
            <h2 className="intro-title">Transform Your Learning Journey</h2>
            <p className="intro-description">
              Our courses are designed to provide you with the knowledge, skills, and tools you need to succeed in your chosen field. Whether you're looking to advance your career, start a new business, or simply learn something new, we have a course for you.
            </p>
            <div className="problems-grid">
              <div className="challenge-card">
                <h3>Common Challenges We Address</h3>
                <ul className="problems-list">
                  <li>Struggling to find a clear learning path</li>
                  <li>Difficulty in staying motivated and consistent</li>
                  <li>Limited access to expert knowledge and guidance</li>
                  <li>Insufficient practical, hands-on experience</li>
                  <li>Uncertainty about career direction</li>
                </ul>
              </div>
              <div className="solution-card">
                <h3>How We Help You Succeed</h3>
                <ul className="problems-list">
                  <li>Personalized step-by-step learning roadmap</li>
                  <li>Regular progress tracking and feedback</li>
                  <li>One-on-one expert mentorship sessions</li>
                  <li>Real-world hands-on projects</li>
                  <li>Career guidance and support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Round Images & Pullquote */}
        <section className="py-16 px-4 max-w-6xl mx-auto text-center">
          <div className="round-images-grid">
            <div className="round-image">
              <img src="/courses/round1.jpeg" alt="Round 1" />
            </div>
            <div className="round-image">
              <img src="/courses/round2.jpeg" alt="Round 2" />
            </div>
            <div className="round-image">
              <img src="/courses/round3.jpeg" alt="Round 3" />
            </div>
          </div>
          <p className="quote">
            "Education is not the filling of a pail, but the lighting of a fire." - William Butler Yeats
          </p>
        </section>

        {/* 3 Pillars Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Our Learning Pillars</h2>
            <p className="text-xl text-blue-200 mb-12">We believe in a comprehensive approach to education that combines theory with practice.</p>

            <div className="pillars-grid">
              <div className="pillar-card">
                <h5>Expert Knowledge</h5>
                <p>Learn from industry experts with years of experience.</p>
              </div>
              <div className="pillar-card">
                <h5>Practical Skills</h5>
                <p>Apply what you learn through hands-on projects.</p>
              </div>
              <div className="pillar-card">
                <h5>Community Support</h5>
                <p>Join a community of learners and grow together.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Six Modules Program Section */}
        <section className="stripe-memphis-bg semicircle-bg py-20 text-white relative z-10">
          <div className="absolute inset-0 bg-[#00294d]/60 z-0"></div> {/* Blue overlay */}

          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Course Modules</h2>
            <p className="text-xl text-blue-100 mb-6">Our courses are structured into comprehensive modules designed for optimal learning.</p>
            <p className="text-lg text-white mb-4">
              Based on the tried and tested <strong className="text-[#FFD700]">Co-Active methodology</strong>. Here's what to expect…
            </p>
          </div>
        </section>

        {/* Modules 01–06 */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto space-y-24 px-4">

            {/* Module 01 */}
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div><ParallaxCard src="/images/module-1.jpg" alt="Module 1" /></div>
              <div>
                <h4 className="text-2xl font-bold mb-4">Foundation</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                  <li>Core concepts and principles</li>
                  <li>Essential tools and techniques</li>
                  <li>Basic project setup</li>
                </ul>
              </div>
            </div>

            {/* Module 02 */}
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div className="md:order-2"><ParallaxCard src="/images/module-2.jpg" alt="Module 2" /></div>
              <div className="md:order-1">
                <h4 className="text-2xl font-bold mb-4">Advanced Topics</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                  <li>Complex problem-solving</li>
                  <li>Advanced techniques</li>
                  <li>Real-world applications</li>
                </ul>
              </div>
            </div>

            {/* Module 03 */}
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div><ParallaxCard src="/images/module-3.jpg" alt="Module 3" /></div>
              <div>
                <h4 className="text-2xl font-bold mb-4">Mastery</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                  <li>Expert-level skills</li>
                  <li>Industry best practices</li>
                  <li>Portfolio development</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className="benefits-section">
          <div className="benefits-content">
            <h2>Why Choose Our Courses</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default CoursesPage;
