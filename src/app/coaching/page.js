"use client";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullseye, 
  faChartLine, 
  faHandsHelping,
  faLightbulb,
  faBrain,
  faTasks,
  faBalanceScale,
  faUserFriends,
  faHeart,
  faFileDownload,
  faVideo,
  faHeadset,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import "./coaching.css";

export default function CoachingPage() {
  return (
    <div className="coaching-page">
      <Navbar isFooter={false} />

      {/* Hero Section */}
      <section
        className="coaching-hero"
        style={{ backgroundImage: "url('/coaching.jpeg')" }}
      >
        <div className="overlay" />
        <div className="hero-content">
          <h1>COACHING</h1>
          <p>
            <Link href="/">Home</Link> / Coaching
          </p>
        </div>
      </section>

      {/* About Our Coaching Section */}
      <section className="about-coaching-section">
        <div className="container">
          <div className="section-title">
            <h2>About Our Coaching</h2>
            <p>We believe everyone has the potential to create meaningful change in their lives. Our approach combines proven methodologies with personalized strategies.</p>
          </div>
          <div className="about-content">
            <div className="about-img">
              <img src="/coaching-about.jpg" alt="Coaching session" />
            </div>
            <div className="about-text">
              <h3>Why Choose Our Coaching Programs</h3>
              <p>With over 15 years of experience helping clients from all walks of life, our certified coaches provide the guidance, tools, and accountability you need to break through barriers and achieve extraordinary results.</p>
              <p>We don't believe in one-size-fits-all solutions. Each coaching relationship is unique, tailored to your specific needs, goals, and personality.</p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faBullseye} />
                  </div>
                  <div className="feature-text">
                    <h4>Goal-Oriented Approach</h4>
                    <p>Clear, measurable objectives with actionable steps</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                  <div className="feature-text">
                    <h4>Proven Results</h4>
                    <p>90% of clients achieve their primary goals within 6 months</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={faHandsHelping} />
                  </div>
                  <div className="feature-text">
                    <h4>Ongoing Support</h4>
                    <p>Dedicated check-ins and progress tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Coaching Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Coaching Services</h2>
            <p>We offer specialized coaching programs designed to address different aspects of personal and professional growth.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img">
                <img src="/life-coaching.jpg" alt="Life Coaching" />
              </div>
              <div className="service-content">
                <h3>Life Coaching</h3>
                <p>Gain clarity on your life purpose, improve relationships, and create balance in all areas of your life with our transformative life coaching program.</p>
                <a href="#" className="btn"><span>Learn More</span><span></span></a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
                <img src="/career-coaching.jpg" alt="Career Coaching" />
              </div>
              <div className="service-content">
                <h3>Career Coaching</h3>
                <p>Navigate career transitions, develop leadership skills, and achieve professional success with our expert career coaching services.</p>
                <a href="#" className="btn"><span>Learn More</span><span></span></a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img">
                <img src="/executive-coaching.jpg" alt="Executive Coaching" />
              </div>
              <div className="service-content">
                <h3>Executive Coaching</h3>
                <p>Enhance your leadership presence, improve decision-making, and drive organizational success with our executive coaching program.</p>
                <a href="#" className="btn"><span>Learn More</span><span></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>Client Success Stories</h2>
            <p>Hear from people who have transformed their lives through our coaching programs.</p>
          </div>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="client-img">
                <img src="/client1.jpg" alt="Chase Heien" />
              </div>
              <p className="testimonial-text">Working with my coach completely changed my perspective on what I could achieve. In just 3 months, I doubled my income and found the confidence to pursue my dream career.</p>
              <div className="client-info">
                <h4>Chase Heien</h4>
                <p>Marketing Director</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="client-img">
                <img src="/client2.jpg" alt="Caleb Contreas" />
              </div>
              <p className="testimonial-text">The executive coaching program helped me develop crucial leadership skills that led to my promotion to VP. I learned how to communicate more effectively and build high-performing teams.</p>
              <div className="client-info">
                <h4>Caleb Contreas</h4>
                <p>Vice President, Tech Company</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="client-img">
                <img src="/client3.jpg" alt="De La Cruz" />
              </div>
              <p className="testimonial-text">After just a few life coaching sessions, I gained clarity about what I truly wanted. My coach helped me create an action plan that led to better work-life balance and happier relationships.</p>
              <div className="client-info">
                <h4>De La Cruz</h4>
                <p>Small Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Success Principles Section */}
      <section className="principles-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Success Principles</h2>
            <p>These foundational principles guide all of our coaching methodologies and client transformations.</p>
          </div>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h3>Clarity of Vision</h3>
              <p>Success begins with crystal-clear understanding of what you truly want to achieve in all areas of your life.</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h3>Mindset Mastery</h3>
              <p>Developing a growth mindset and eliminating limiting beliefs is essential for breakthrough results.</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <FontAwesomeIcon icon={faTasks} />
              </div>
              <h3>Action Orientation</h3>
              <p>Consistent, purposeful action aligned with your goals creates measurable progress and momentum.</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <FontAwesomeIcon icon={faBalanceScale} />
              </div>
              <h3>Holistic Balance</h3>
              <p>True success integrates all life areas - career, relationships, health, and personal growth.</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <h3>Accountability</h3>
              <p>Having support and accountability dramatically increases your chances of success.</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h3>Purpose Alignment</h3>
              <p>When your actions align with your core values and purpose, fulfillment follows naturally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="resources-section">
        <div className="container">
          <div className="section-title">
            <h2>Free Resources</h2>
            <p>Access our collection of free tools and resources to start your transformation journey today.</p>
          </div>
          <div className="resources-container">
            <div className="resources-content">
              <h3>Empower Yourself With Our Free Tools</h3>
              <p>We believe in making powerful transformation tools available to everyone. These free resources have helped thousands of people create positive change in their lives.</p>
              <div className="resources-list">
                <div className="resource-item">
                  <FontAwesomeIcon icon={faFileDownload} />
                  <div>
                    <h4>Goal Setting Workbook</h4>
                    <p>Our step-by-step guide to creating meaningful, achievable goals</p>
                  </div>
                </div>
                <div className="resource-item">
                  <FontAwesomeIcon icon={faVideo} />
                  <div>
                    <h4>Masterclass Videos</h4>
                    <p>Access our library of free training videos on personal development</p>
                  </div>
                </div>
                <div className="resource-item">
                  <FontAwesomeIcon icon={faHeadset} />
                  <div>
                    <h4>Guided Meditation Series</h4>
                    <p>Reduce stress and increase focus with our audio meditations</p>
                  </div>
                </div>
                <div className="resource-item">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  <div>
                    <h4>Productivity Planner</h4>
                    <p>Our proven system for maximizing your daily productivity</p>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-accent">Download All Resources</a>
            </div>
            <div className="resources-img">
              <img src="/free-resources.jpg" alt="Free resources" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}