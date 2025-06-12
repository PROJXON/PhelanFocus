'use client';

import { useState } from 'react';
import { FaClock, FaVideo, FaUserFriends, FaCheckCircle, FaLightbulb, FaChartLine, FaHandshake, FaComments } from 'react-icons/fa';
import './sessions.css';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CoachingSessions() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const sessionTypes = [
    {
      id: 1,
      title: "One-on-One Coaching",
      description: "Personalized coaching sessions tailored to your specific goals and challenges. Get undivided attention and customized strategies.",
      duration: "60 min",
      format: "1-on-1",
      delivery: "Video Call",
      price: "$150",
      icon: <FaUserFriends />
    },
    {
      id: 2,
      title: "Group Coaching",
      description: "Join a small group of like-minded individuals for collaborative learning and shared experiences. Perfect for accountability and peer support.",
      duration: "90 min",
      format: "Group",
      delivery: "Video Call",
      price: "$75",
      icon: <FaUserFriends />
    },
    {
      id: 3,
      title: "Intensive Workshop",
      description: "Deep dive into specific topics with hands-on exercises and immediate feedback. Ideal for rapid skill development and breakthrough moments.",
      duration: "3 hours",
      format: "Workshop",
      delivery: "Video Call",
      price: "$250",
      icon: <FaChartLine />
    }
  ];

  const features = [
    {
      id: 1,
      title: "Personalized Approach",
      description: "Each session is tailored to your unique needs and goals, ensuring maximum impact and results.",
      icon: <FaUserFriends />
    },
    {
      id: 2,
      title: "Expert Guidance",
      description: "Learn from experienced coaches who have helped hundreds of clients achieve their goals.",
      icon: <FaLightbulb />
    },
    {
      id: 3,
      title: "Proven Results",
      description: "Our coaching methods are backed by research and have delivered consistent results for our clients.",
      icon: <FaChartLine />
    },
    {
      id: 4,
      title: "Ongoing Support",
      description: "Get continuous support between sessions with email access and progress tracking tools.",
      icon: <FaHandshake />
    },
    {
      id: 5,
      title: "Actionable Strategies",
      description: "Walk away from each session with clear, actionable steps to move forward in your journey.",
      icon: <FaCheckCircle />
    },
    {
      id: 6,
      title: "Regular Check-ins",
      description: "Stay on track with regular progress reviews and adjustments to your coaching plan.",
      icon: <FaComments />
    }
  ];

  const handleBookSession = (session) => {
    setSelectedSession(session);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSession(null);
  };

  return (
    <>
      <Navbar />
      <div className="sessions-container">
        <section className="sessions-hero" style={{ backgroundImage: "url('/sessions/sessions.jpeg')" }}>
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>Transform Your Life Through Coaching</h1>
            <p>Discover personalized coaching sessions designed to help you achieve your goals and unlock your full potential.</p>
          </div>
        </section>

        <main className="sessions-main">
          <div className="hero">
            <h1>Choose Your Coaching Journey</h1>
            <p>Select the coaching format that best suits your needs and schedule. Each option is designed to provide maximum value and support for your personal growth journey.</p>
          </div>

          <div className="sessions-grid">
            {sessionTypes.map((session) => (
              <div key={session.id} className="session-card">
                <div className="session-icon">{session.icon}</div>
                <h3>{session.title}</h3>
                <p className="session-description">{session.description}</p>
                <div className="session-details">
                  <span>
                    <FaClock />
                    {session.duration}
                  </span>
                  <span>
                    <FaVideo />
                    {session.format}
                  </span>
                  <span>
                    <FaUserFriends />
                    {session.delivery}
                  </span>
                </div>
                <div className="price">{session.price}</div>
                <button className="btn" onClick={() => handleBookSession(session)}>
                  Book Now
                </button>
              </div>
            ))}
          </div>

          <section className="features">
            <h2>Why Choose Our Coaching</h2>
            <div className="features-grid">
              {features.map((feature) => (
                <div key={feature.id} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {showModal && selectedSession && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>Book Your Session</h2>
              <p className="session-title">{selectedSession.title}</p>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Your Phone" />
                <select required>
                  <option value="">Select Preferred Date</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                </select>
                <select required>
                  <option value="">Select Preferred Time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (1PM - 4PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                </select>
                <textarea placeholder="Any specific goals or topics you'd like to discuss?" rows="4"></textarea>
                <button type="submit" className="btn">Confirm Booking</button>
              </form>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
