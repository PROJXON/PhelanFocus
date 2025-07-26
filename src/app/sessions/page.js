'use client';
import { useState } from 'react';
import './sessions.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollToTopButton from '@/components/ScrollToTop';

export default function CoachingSessions() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sessionTypes = [
    {
      id: 'performance',
      icon: '💼',
      title: 'Performance Coaching',
      bullets: ['✔️ Life', '✔️ Career', '✔️ Wellness'],
      description: 'Empowering individuals to thrive across all areas of life with clarity, focus, and momentum.',
      duration: '60 minutes',
      format: '1-on-1',
      delivery: 'Online/In-person',
      price: '$300/session',
    },
    {
      id: 'executive',
      icon: '👔',
      title: 'Executive Performance',
      bullets: ['✔️ Packages Available', '✔️ Business', '✔️ Entrepreneur'],
      description: 'Enhance leadership and entrepreneurial performance through strategic coaching and guidance.',
      duration: '90 minutes',
      format: '1-on-1',
      delivery: 'Online/In-person',
      price: '$600/session',
    },
    {
      id: 'group',
      icon: '👥',
      title: 'Group Performance',
      bullets: ['✔️ Peer Coaching', '✔️ Team Dynamics', '✔️ Collaborative Learning'],
      description: 'Dynamic group sessions designed to foster growth and accountability among like-minded individuals.',
      duration: '90 minutes',
      format: '4–8 people',
      delivery: 'Online/In-person',
      price: '$150/person',
    },
  ];

  const features = [
    {
      icon: '🎯',
      title: 'Personalized Approach',
      description: 'Every session is tailored to your unique goals and challenges',
    },
    {
      icon: '📈',
      title: 'Proven Results',
      description: 'Track your progress with measurable outcomes and actionable insights',
    },
    {
      icon: '🤝',
      title: 'Expert Guidance',
      description: 'Work with certified coaches who have years of experience',
    },
    {
      icon: '🔄',
      title: 'Ongoing Support',
      description: 'Continuous support between sessions to maintain momentum',
    },
  ];

  const openBookingModal = (session) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSession(null);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const bookingData = {
      name: form['Full Name'].value,
      email: form['Email'].value,
      phone: form['Phone'].value,
      dateTime: form['Preferred Date and Time'].value,
      goals: form['Goals'].value,
      people: form['people'].value,
      sessionType: selectedSession?.title,
    };

    try {
      // 1. Send email via Resend
      const emailRes = await fetch('/api/book-and-pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (!emailRes.ok) throw new Error('Failed to send booking email');

      // 2. Redirect to custom Stripe Elements payment form
      const params = new URLSearchParams({
        sessionType: bookingData.sessionType,
        people: bookingData.people,
        name: bookingData.name,
        email: bookingData.email,
      });

      window.location.href = `/book-and-pay?${params.toString()}`;
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero sectionClass="sessions-hero" bgImage="/sessions/sessions.jpeg" header="Sessions" />

      <div className="sessions-container">
        <main className="sessions-main">
          <section className="hero">
            <h1>Transform Your Potential</h1>
            <p>Explore tailored coaching packages built for personal, executive, and group success.</p>
          </section>

          <section id="sessions" className="sessions-grid">
            {sessionTypes.map((session) => (
              <div key={session.id} className="session-card">
                <div className="session-icon">{session.icon}</div>
                <h3>{session.title}</h3>
                <ul className="session-bullets">
                  {session.bullets.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
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

        {/* Modal */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Book Your Session</h2>
              <p className="session-title">{selectedSession?.title}</p>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <input type="hidden" name="Session Type" value={selectedSession?.title || ''} />
                <input type="text" name="Full Name" placeholder="Full Name" required />
                <input type="email" name="Email" placeholder="Email Address" required />
                <input type="tel" name="Phone" placeholder="Phone Number" required />
                <input type="datetime-local" name="Preferred Date and Time" required />
                <textarea name="Goals" rows="4" placeholder="Tell us about your goals..." />
                <label htmlFor="people" className="block mb-1 font-medium text-gray-700">
                  How many people will attend?
                </label>
                <input
                  type="number"
                  name="people"
                  placeholder="Number of People"
                  min="1"
                  defaultValue="1"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full bg-[#F9C705] hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Confirm Booking & Pay
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <section className="coaching-process">
        <h2>Our Coaching Process</h2>
        <p className="section-intro">
          We follow a proven step-by-step approach to ensure each session delivers lasting impact and clarity.
        </p>
        <div className="process-steps">
          <div className="sessions-step">
            <div className="sessions-step-number">1</div>
            <h3>Discovery Call</h3>
            <p>We start with a free 20-minute consultation to understand your goals and challenges.</p>
          </div>
          <div className="sessions-step">
            <div className="sessions-step-number">2</div>
            <h3>Goal Setting</h3>
            <p>We define clear, actionable goals and outline a roadmap for success tailored to your needs.</p>
          </div>
          <div className="sessions-step">
            <div className="sessions-step-number">3</div>
            <h3>Coaching Sessions</h3>
            <p>Engage in dynamic 1-on-1 or group sessions focused on strategy, mindset, and accountability.</p>
          </div>
          <div className="sessions-step">
            <div className="sessions-step-number">4</div>
            <h3>Progress Review</h3>
            <p>We track your growth, make adjustments, and ensure continued momentum toward your outcomes.</p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />

    </>
  );
}
