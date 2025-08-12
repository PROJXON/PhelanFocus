'use client';
import './consulting.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ScrollToTopButton from '@/components/ScrollToTop';
import { ConsultingIndustry, ConsultingService, TitleAndDesc } from '@/types/interfaces';
import PaddedNumsTimeline from '@/components/PaddedNumsTimeline';

export default function ConsultingPage() {
  const consultingServices: ConsultingService[] = [
    {
      title: 'Management Consulting',
      description:
        'We help organizations improve performance, operations, and efficiency through strategic planning and implementation.',
      icon: faChartLine,
      link: '/sessions',
    },
    {
      title: 'IT Consulting',
      description:
        'Our technology experts assist with digital transformation, system implementation, and IT optimization.',
      icon: faLaptopCode,
      link: '/sessions',
    },
    {
      title: 'Financial Consulting',
      description:
        'Expert advice on financial planning, investment strategies, and comprehensive risk management solutions.',
      icon: faDollarSign,
      link: '/sessions',
    },
    {
      title: 'HR Consulting',
      description:
        'Strategic human resources planning, talent management, and organizational development tailored to your needs.',
      icon: faUsers,
      link: '/sessions',
    },
  ];

  const approachSteps: TitleAndDesc[] = [
    {
      title: 'Discovery & Analysis',
      description:
        'We begin by thoroughly understanding your business, identifying problems, and spotting key opportunities for improvement and growth.',
    },
    {
      title: 'Strategy Development',
      description:
        'Our team creates custom strategies and action plans designed to address your specific challenges and capitalize on opportunities.',
    },
    {
      title: 'Implementation & Support',
      description:
        'We work alongside your team to implement solutions, providing guidance and support throughout the entire process.',
    },
    {
      title: 'Evaluation & Optimization',
      description:
        'Continuous monitoring of results allows us to measure success, make necessary adjustments, and optimize strategies for maximum impact.',
    },
  ];

  const consultingIndustries: ConsultingIndustry[] = [
    {
      name: 'Technology',
      icon: faLaptopCode,
    },
    {
      name: 'Finance',
      icon: faUniversity,
    },
    {
      name: 'Healthcare',
      icon: faHeartbeat,
    },
    {
      name: 'Education',
      icon: faGraduationCap,
    },
    {
      name: 'Retail',
      icon: faShoppingCart,
    },
    {
      name: 'Travel',
      icon: faPlane,
    },
    {
      name: 'Manufacturing',
      icon: faCog,
    },
    {
      name: 'Energy',
      icon: faSeedling,
    },
  ];

  return (
    <div className="consulting-page">
      <Navbar />

      {/* Hero Section*/}
      <Hero bgImage="/Consult.png" header="Consulting" />

      <main className="consulting-main">
        <div className="consulting-inner">
          {/* Services Section */}
          <section id="services" className="consulting-services-section">
            <div className="consulting-section-header">
              <h2>
                <FontAwesomeIcon icon={faBriefcase} className="consulting-section-icon" />
                Our Consulting Services
              </h2>
              <p className="consulting-section-subtitle">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>
            <div className="consulting-services-grid">
              {consultingServices.map((service, index) => (
                <div key={index} className="consulting-service-card">
                  <div className="consulting-service-icon">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <h3 className="consulting-service-title">{service.title}</h3>
                  <p className="consulting-service-description">{service.description}</p>
                  <Link href={service.link} className="consulting-service-link">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Approach Section */}
          <section id="approach" className="approach-section">
            <div className="consulting-section-header">
              <h2>
                <FontAwesomeIcon icon={faTasks} className="consulting-section-icon" />
                Our Proven Approach
              </h2>
              <p className="consulting-section-subtitle">
                A structured methodology for delivering measurable results
              </p>
            </div>
            <div className="approach-steps">
              {approachSteps.map((step, index) => (
                <div key={index} className="approach-step">
                  <PaddedNumsTimeline
                    num={index + 1}
                    h3={step.title}
                    p={step.description}
                    class1="step-number"
                    class2="step-content"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section id="industries" className="industries-section">
            <div className="consulting-section-header">
              <h2>
                <FontAwesomeIcon icon={faIndustry} className="consulting-section-icon" />
                Industries We Serve
              </h2>
              <p className="consulting-section-subtitle">
                Our consultants bring specialized expertise across a wide range of industries,
                helping organizations achieve their strategic objectives.
              </p>
            </div>
            <div className="consulting-industries-grid">
              {consultingIndustries.map((industry, index) => (
                <div key={index} className="consulting-industry-card">
                  <div className="consulting-industry-icon">
                    <FontAwesomeIcon icon={industry.icon} />
                  </div>
                  <h3>{industry.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="consulting-cta-section">
            <div className="consulting-cta-container">
              <div className="consulting-cta-content">
                <h2>Ready to Transform Your Business?</h2>
                <p>
                  Schedule a free consultation with our experts and discover how we can help you
                  achieve your business goals.
                </p>
              </div>
              <div className="consulting-cta-buttons">
                <a href="/sessions" className="cta-button primary">
                  Get Started Now
                </a>
                <a href="/contact" className="cta-button secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
