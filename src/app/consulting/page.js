"use client";
import "./consulting.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faChevronDown,
  faBriefcase,
  faChartLine,
  faLaptopCode,
  faDollarSign,
  faUsers,
  faTasks,
  faIndustry,
  faUniversity,
  faHeartbeat,
  faGraduationCap,
  faShoppingCart,
  faPlane,
  faCog,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ConsultingPage() {
  return (
    <div className="consulting-page">
      <Navbar isFooter={false} />

      {/* Hero Section*/}
      <section className="consulting-hero" style={{ backgroundImage: "url('/consulting.jpeg')" }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Consulting</h1>
        </div>
      </section>

      <main className="consulting-main">
        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="section-header">
            <h2>
              <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
              Our Consulting Services
            </h2>
            <p className="section-subtitle">Comprehensive solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="service-title">Management Consulting</h3>
              <p className="service-description">
                We help organizations improve performance, operations, and efficiency through strategic planning and implementation.
              </p>
              <a href="#" className="service-link">
                Learn more →
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h3 className="service-title">IT Consulting</h3>
              <p className="service-description">
                Our technology experts assist with digital transformation, system implementation, and IT optimization.
              </p>
              <a href="#" className="service-link">
                Learn more →
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <h3 className="service-title">Financial Consulting</h3>
              <p className="service-description">
                Expert advice on financial planning, investment strategies, and comprehensive risk management solutions.
              </p>
              <a href="#" className="service-link">
                Learn more →
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="service-title">HR Consulting</h3>
              <p className="service-description">
                Strategic human resources planning, talent management, and organizational development tailored to your needs.
              </p>
              <a href="#" className="service-link">
                Learn more →
              </a>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="approach-section">
          <div className="section-header">
            <h2>
              <FontAwesomeIcon icon={faTasks} className="section-icon" />
              Our Proven Approach
            </h2>
            <p className="section-subtitle">A structured methodology for delivering measurable results</p>
          </div>
          <div className="approach-steps">
            <div className="approach-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Discovery & Analysis</h3>
                <p>
                  We begin by thoroughly understanding your business, identifying problems, and spotting key opportunities for improvement and growth.
                </p>
              </div>
            </div>
            <div className="approach-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Strategy Development</h3>
                <p>
                  Our team creates custom strategies and action plans designed to address your specific challenges and capitalize on opportunities.
                </p>
              </div>
            </div>
            <div className="approach-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Implementation & Support</h3>
                <p>
                  We work alongside your team to implement solutions, providing guidance and support throughout the entire process.
                </p>
              </div>
            </div>
            <div className="approach-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Evaluation & Optimization</h3>
                <p>
                  Continuous monitoring of results allows us to measure success, make necessary adjustments, and optimize strategies for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="industries-section">
          <div className="section-header">
            <h2>
              <FontAwesomeIcon icon={faIndustry} className="section-icon" />
              Industries We Serve
            </h2>
            <p className="section-subtitle">
              Our consultants bring specialized expertise across a wide range of industries, helping organizations achieve their strategic objectives.
            </p>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h3>Technology</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <FontAwesomeIcon icon={faUniversity} />
              </div>
              <h3>Finance</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <FontAwesomeIcon icon={faHeartbeat} />
              </div>
              <h3>Healthcare</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3>Education</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              <h3>Retail</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <FontAwesomeIcon icon={faPlane} />
              </div>
              <h3>Travel</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <FontAwesomeIcon icon={faCog} />
              </div>
              <h3>Manufacturing</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <FontAwesomeIcon icon={faSeedling} />
              </div>
              <h3>Energy</h3>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="cta-section">
          <div className="cta-container">
            <div className="cta-content">
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Schedule a free consultation with our experts and discover how we can help you achieve your business goals.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Get Started Now
              </a>
              <a href="/contact" className="cta-button secondary">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}