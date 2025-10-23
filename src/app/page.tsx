"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Podcast from "@/components/Podcast";
import ScrollToTopButton from "@/components/ScrollToTop";
import ServiceCarousel from "@/components/ServiceCarousel";
import ProcessSection from "@/components/ProcessSection";
import Hero from "@/components/Hero";
import Books from "@/components/Books";
import ContactModal from "@/components/ContactModal";
import { useContactModal } from "@/context/ContactModalContext";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faArrowRight,
  faUsers,
  faBrain,
  faBriefcase,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import useIsVisible from "@/hooks/useIsVisible";
import "./home.css";

const CircleProgress = ({
  percentage,
  label,
}: {
  percentage: number;
  label: string;
}) => {
  const strokeDasharray = 283;
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(circleRef);

  useEffect(() => {
    if (isVisible) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev < percentage ? prev + 1 : percentage));
      }, 15);

      const countInterval = setInterval(() => {
        setCount((prev) => (prev < percentage ? prev + 1 : percentage));
      }, 25);

      return () => {
        clearInterval(progressInterval);
        clearInterval(countInterval);
      };
    }
  }, [isVisible, percentage]);

  return (
    <div className="circle-container" ref={circleRef}>
      <svg width="140" height="140">
        <circle
          cx="70"
          cy="70"
          r="45"
          stroke="#ddd"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="70"
          cy="70"
          r="45"
          stroke="#13395c"
          strokeWidth="10"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={
            strokeDasharray - (progress / 100) * strokeDasharray
          }
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.3s linear" }}
        />
        <text
          x="70"
          y="75"
          textAnchor="middle"
          fontSize="24"
          fill="#13395c"
          fontWeight="700"
        >
          {count}%
        </text>
      </svg>
      <p className="circle-label">{label}</p>
    </div>
  );
};

// Counter Component
const Counter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (isVisible && count === 0) {
      let start = 0;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 50));
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, 50);
    }
  }, [isVisible, end, count]);

  return (
    <div className="counter-item" ref={ref}>
      <h2>{count.toLocaleString()}+</h2>
      <p>{label}</p>
    </div>
  );
};

const Home = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => setMounted(true), []);

  return (
    <div
      className={`home-page ${mounted && resolvedTheme === "light" ? "light" : "dark"}`}
      style={{ backgroundColor: "#fff" }}
    >
      <header className="w-full fixed z-40">
        <Navbar />
      </header>
      <Hero bgImage="/homeHero.jpg" header="" />
      <section className="z-20 relative text-center py-8 bg-white">
        <p className="text-lg max-w-xl mx-auto mb-6">
          Helping individuals unlock their potential and achieve personal and
          professional growth.
        </p>
        <Link href="/sessions">
          <button className="btn">
            <span>Book a Call</span>
            <span></span>
          </button>
        </Link>
      </section>
      <section
        className="about-section relative z-20 my-0 px-[64px] pb-20 bg-white overflow-hidden"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="about-container">
          <div className="about-images">
            <Image
              src="/about-1.jpg"
              width={400}
              height={400}
              alt="About Main"
              className="img1"
            />
            <Image
              src="/about-2.jpg"
              width={280}
              height={280}
              alt="About Overlay"
              className="img2"
              style={{ marginBottom: 30 }}
            />
          </div>
          <div className="about-text">
            <h6>Empowering Change</h6>
            <h2>Leading the Way in Personal Growth</h2>
            <p>
              We help individuals unlock their full potential, overcome
              obstacles, and achieve their goals.
            </p>
            <hr />
            <div className="contact-info">
              <p>
                <a href="https://projxon.com" className="link-gold-hover">
                  <FontAwesomeIcon icon={faGlobe} className="icon" />{" "}
                  projxon.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/phelanmarkw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gold-hover flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                  Linkedin
                </a>
              </p>
            </div>
            <Link href="/sessions" className="btn-read">
              <span>Read More</span>
              <span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us (About) */}
      <section className="why-section relative z-20 bg-white">
        <div className="why-left">
          <h6>Create the Life</h6>
          <h3>Unlock Your Potential Life</h3>
          <p>Embark on a transformative journey with our life coaching team.</p>

          <div className="circle-progress-section">
            <CircleProgress percentage={85} label="Professionals" />
            <CircleProgress percentage={90} label="Holistic Approach" />
            <CircleProgress percentage={93} label="Empathetic Support" />
            <CircleProgress percentage={95} label="Proven Results" />
          </div>
        </div>
        <div className="why-right">
          <Image
            src="/about-1.jpg"
            width={400}
            height={400}
            alt="Why Us"
            className="why-image"
          />
          <div className="years-badge">
            <h3>
              15<sup>+</sup>
            </h3>
            <span>Years Experience</span>
          </div>
        </div>
      </section>

      {/* ✨ Home Additional Content Sections merged below */}
      <main className="relative z-10 pt-16 bg-white">
        <AboutMe />
        <Services />
        <ServiceCarousel />
        {/* only remove gap between ProcessSection and Podcast */}
        <div className="no-gap-between">
          <ProcessSection />
          <Podcast />
        </div>

        <Contact />
      </main>

      {/* CTA Section (About) */}
      <section
        className="cta-section relative z-20 position-relative bg-white"
        style={{ backgroundImage: "url('phelan-mark-39.jpg')" }}
      >
        <div className="image-overlay"></div>
        <div
          className="r-container position-relative py-5"
          style={{ zIndex: 2 }}
        >
          <div
            className="d-flex flex-column mx-auto text-center align-items-center text-white gap-4"
            style={{ maxWidth: "900px" }}
          >
            <h6 className="accent-color-2 fw-semibold">Invest in Yourself</h6>
            <h3 className="font-1 text-white">
              Create the Life You Want, Get Personalized Coaching Today!
            </h3>
            <p className="col-9 col-lg-9">
              Elevate your life with personalized coaching tailored to your
              unique needs. Start your journey to self-discovery and growth
              today by booking a session with our experienced life coach.
            </p>
            <ContactModal />
            <div className="cta-button-container" onClick={openModal}>
              <span>CONTACT US</span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Podcast Section (About) */}
      <section className="founder-podcast-section relative z-20 bg-white">
        <h2 className="team-title">Meet Our Founder</h2>
        <div className="founder-podcast-container">
          {/* Mark Phelan Card */}
          <div className="team-card">
            <div className="team-img-wrapper">
              <Image
                src="/team/phelan-mark-41.jpg"
                alt="Mark Phelan"
                width={280}
                height={280}
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3>Mark Phelan</h3>
            <p className="title">CEO & Founder</p>
            <p className="department">
              <a
                href="https://projxon.com/"
                className="link-gold-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                PROJXON
              </a>
            </p>
            <div className="team-socials">
              <a
                href="https://www.linkedin.com/in/phelanmarkw/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-gold-hover"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          {/* Podcast Block */}
          <div className="podcast-card">
            <a
              href="https://www.thephelanfocus.com/podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-link"
            >
              <div className="podcast-img-wrapper">
                <Image
                  src="/podcast.png"
                  alt="The Phelan Focus Podcast"
                  width={280}
                  height={280}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="podcast-info">
                <h4>The Phelan Focus Podcast</h4>
                <p>
                  Discover insights and stories with Mark Phelan. Listen now!
                </p>
                <span className="btn">Explore Podcast</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Counter Section (About) */}
      <section
        className="counter-section relative z-20 bg-white"
        style={{ padding: "48px 0" }}
      >
        <Counter end={15} label="Years Experience" />
        <Counter end={2500} label="Satisfied Clients" />
        <Counter end={300} label="Problem Solved" />
        <Counter end={50} label="Expert Team" />
      </section>

      {/* Services Section (About) */}
      <section
        className="services-section relative z-20 bg-white"
        style={{ padding: "64px 0" }}
      >
        <h6>Master Your Mindset</h6>
        <h2>Professional Life Coaching Support</h2>
        <Link href="/services" className="all-service-btn">
          <span>ALL SERVICE</span>
          <span></span>
        </Link>
        <div className="service-cards">
          <div className="service-card">
            <FontAwesomeIcon icon={faUsers} className="service-icon" />
            <h4>Personalized Coaching</h4>
            <p>
              Our services are tailored to your unique needs, providing
              personalized guidance and support.
            </p>
            <Link href="/services" className="learn-more">
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="service-card">
            <FontAwesomeIcon icon={faBrain} className="service-icon" />
            <h4>Mindfulness Techniques</h4>
            <p>
              Learn practical mindfulness exercises to enhance focus, reduce
              stress, and promote well-being.
            </p>
            <Link href="/services" className="learn-more">
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="service-card">
            <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
            <h4>Career Development</h4>
            <p>
              This coaching service provides guidance and support to individuals
              at various career stages.
            </p>
            <Link href="/services" className="learn-more">
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
