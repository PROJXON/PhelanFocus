'use client';

import { useState } from 'react';
import Link from 'next/link';
import "./sessions.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CoachingSessions() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sessionTypes = [
    {
      id: 'career', icon: '💼', title: 'Career Coaching',
      description: 'Navigate your career path with confidence. Get strategic guidance on job transitions, leadership development, and professional growth.',
      duration: '60 minutes', format: '1-on-1', delivery: 'Online/In-person', price: '$150/session'
    },
    {
      id: 'life', icon: '🌟', title: 'Life Coaching',
      description: 'Create balance and fulfillment in all areas of your life. Focus on personal growth, relationships, and life transitions.',
      duration: '75 minutes', format: '1-on-1', delivery: 'Online/In-person', price: '$120/session'
    },
    {
      id: 'executive', icon: '👔', title: 'Executive Coaching',
      description: 'Enhance your leadership skills and executive presence. Perfect for C-suite executives and senior managers.',
      duration: '90 minutes', format: '1-on-1', delivery: 'Online/In-person', price: '$300/session'
    },
    {
      id: 'business', icon: '🚀', title: 'Business Coaching',
      description: 'Scale your business and overcome entrepreneurial challenges. Strategic planning, team building, and growth acceleration.',
      duration: '120 minutes', format: '1-on-1', delivery: 'Online/In-person', price: '$250/session'
    },
    {
      id: 'group', icon: '👥', title: 'Group Coaching',
      description: 'Learn and grow with like-minded individuals. Dynamic group sessions with peer support and collaborative learning.',
      duration: '90 minutes', format: '4-8 people', delivery: 'Online/In-person', price: '$75/person'
    }
  ];

  const features = [
    {
      icon: '🎯', title: 'Personalized Approach',
      description: 'Every session is tailored to your unique goals and challenges'
    },
    {
      icon: '📈', title: 'Proven Results',
      description: 'Track your progress with measurable outcomes and actionable insights'
    },
    {
      icon: '🤝', title: 'Expert Guidance',
      description: 'Work with certified coaches who have years of experience'
    },
    {
      icon: '🔄', title: 'Ongoing Support',
      description: 'Continuous support between sessions to maintain momentum'
    }
  ];

  const openBookingModal = (session) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSession(null);
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="sessions-hero" style={{ backgroundImage: "url('/sessions/sessions.jpeg')" }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Sessions</h1>
        </div>
      </section>

      <div className="sessions-container">
        <main className="sessions-main">
          <section className="hero">
            <h1>Transform Your Potential</h1>
            <p>Professional coaching sessions designed to unlock your full potential and achieve your goals</p>
          </section>

          <section id="sessions" className="sessions-grid">
            {sessionTypes.map((session) => (
              <div key={session.id} className="session-card">
                <div className="session-icon">{session.icon}</div>
                <h3>{session.title}</h3>
                <p className="session-description">{session.description}</p>
                <div className="session-details">
                  <span>📅 {session.duration}</span>
                  <span>🎯 {session.format}</span>
                  <span>💻 {session.delivery}</span>
                </div>
                <div className="price">{session.price}</div>
                <button className="btn" onClick={() => openBookingModal(session)}>
                  <span>Book Session</span><span></span>
                </button>
              </div>
            ))}
          </section>

          <section className="features">
            <h2>Why Choose Our Coaching?</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Book Your Session</h2>
              <p className="session-title">{selectedSession?.title}</p>
              <form
                action="https://formspree.io/f/yourFormID" // Replace with your actual Formspree ID
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="Session Type" value={selectedSession?.title || ''} />
                <input type="text" name="Full Name" placeholder="Full Name" required />
                <input type="email" name="Email" placeholder="Email Address" required />
                <input type="tel" name="Phone" placeholder="Phone Number" required />
                <input
                  type="datetime-local"
                  name="Preferred Date and Time"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />

                <textarea name="Goals" rows="4" placeholder="Tell us about your goals..." />
                <button type="submit" className="btn"><span>Confirm Booking</span><span></span></button>
              </form>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
