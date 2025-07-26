"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import "./about.css";
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
import ScrollToTopButton from "@/components/ScrollToTop";


// Circle Progress Component
const CircleProgress = ({ percentage, label }) => {
  const strokeDasharray = 283;
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.5 }
    );
    if (circleRef.current) observer.observe(circleRef.current);
    return () => circleRef.current && observer.unobserve(circleRef.current);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev < percentage ? prev + 1 : percentage));
        if (progress === percentage) clearInterval(progressInterval);
      }, 15);
      const countInterval = setInterval(() => {
        setCount((prev) => (prev < percentage ? prev + 1 : percentage));
        if (count === percentage) clearInterval(countInterval);
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
        <circle cx="70" cy="70" r="45" stroke="#ddd" strokeWidth="10" fill="none" />
        <circle
          cx="70"
          cy="70"
          r="45"
          stroke="#13395c"
          strokeWidth="10"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDasharray - (progress / 100) * strokeDasharray}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.3s linear" }}
        />
        <text x="70" y="75" textAnchor="middle" fontSize="24" fill="#13395c" fontWeight="700">
          {count}%
        </text>
      </svg>
      <p className="circle-label">{label}</p>
    </div>
  );
};

// Counter Component
const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  useEffect(() => {
    if (isVisible && count === 0) {
      let start = 0;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 50)); // Every 5s
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

export default function AboutPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className={`about-page ${mounted && resolvedTheme === "light" ? "light" : "dark"}`}>
      <Navbar isFooter={false} />

      {/* Hero Section */}
      <Hero sectionClass="about-hero" bgImage="/About.png" header="About" />

      {/* About Us Section */}
      <section className="about-section">
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
            />
          </div>
          <div className="about-text">
            <h6>Empowering Change</h6>
            <h2>Leading the Way in Personal Growth</h2>
            <p>We help individuals unlock their full potential, overcome obstacles, and achieve their goals.</p>
            <hr />
            <div className="contact-info">
              <p>
                <a href="https://projxon.com" className="hover:text-[#FFD700]">
                  <FontAwesomeIcon icon={faGlobe} className="icon" /> projxon.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/phelanmarkw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                  Linkedin
                </a>
              </p>
            </div>
            <Link href="/sessions" className="btn-read"><span>Read More</span><span></span></Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partner-section">
        <div className="logos">
          <div className="logos-slide">
            <span>PROJXON</span><span>PROJXON</span><span>PROJXON</span><span>PROJXON</span><span>PROJXON</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
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
            className="why-image" />
          <div className="years-badge">
            <h3>15<sup>+</sup></h3>
            <span>Years Experience</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section position-relative" style={{ backgroundImage: "url('Phalen, Mark -39.jpg')" }}>
        <div className="image-overlay"></div>
        <div className="r-container position-relative py-5" style={{ zIndex: 2 }}>
          <div className="d-flex flex-column mx-auto text-center align-items-center text-white gap-4" style={{ maxWidth: '900px' }}>
            <h6 className="accent-color-2 fw-semibold">Invest in Yourself</h6>
            <h3 className="font-1 text-white">Create the Life You Want, Get Personalized Coaching Today!</h3>
            <p className="col-9 col-lg-9">
              Elevate your life with personalized coaching tailored to your unique needs. Start your journey to self-discovery and growth today by booking a session with our experienced life coach.
            </p>
            <div className="cta-button-container">
              <Link href="/contact" className="btn"><span>CONTACT US</span><span></span></Link>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="team-cards-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-cards-container">
          {[
            {
              name: "Mark Phelan",
              role: "Senior Consultant, E-Commerce Solutions",
              img: "team/Phalen, Mark -41.jpg",
              socials: {
                linkedin: "https://www.linkedin.com/in/phelanmarkw/"
              }
            },
            {
              name: "Kathy Seaton",
              role: "Senior Consultant, Non Profit Development",
              img: "team/kathy.webp",
              socials: {
                linkedin: "https://www.linkedin.com/in/klseaton/"
              }
            },
            {
              name: "Melissa Eboli",
              role: "Senior Consultant, Tech + Software Solutions",
              img: "team/melissa.webp",
              socials: {
                linkedin: "https://www.linkedin.com/in/viamelissa/"
              }
            },
            {
              name: "Donavon Roberson",
              role: "Senior Consultant, Health + Wellness Solutions",
              img: "team/donavon.webp",
              socials: {
                linkedin: "https://www.linkedin.com/in/donavonroberson/"
              }
            }
          ].map((member, idx) => {
            const [title, dept] = member.role.split(",");
            return (
              <div key={idx} className="team-card">
                <div className="team-img-wrapper">
                  <img src={member.img} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="title">{title}</p>
                <p className="department">{dept}</p>
                <div className="team-socials">
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F9C705]"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>



      {/* Counter Section */}
      <section className="counter-section">
        <Counter end={15} label="Years Experience" />
        <Counter end={2500} label="Satisfied Clients" />
        <Counter end={300} label="Problem Solved" />
        <Counter end={50} label="Expert Team" />
      </section>

      {/* Services Section */}
      <section className="services-section">
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
            <p>Our services are tailored to your unique needs, providing personalized guidance and support.</p>
            <Link href="/services" className="learn-more">Learn More <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>

          <div className="service-card">
            <FontAwesomeIcon icon={faBrain} className="service-icon" />
            <h4>Mindfulness Techniques</h4>
            <p>Learn practical mindfulness exercises to enhance focus, reduce stress, and promote well-being.</p>
            <Link href="/services" className="learn-more">Learn More <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>

          <div className="service-card">
            <FontAwesomeIcon icon={faBriefcase} className="service-icon" />
            <h4>Career Development</h4>
            <p>This coaching service provides guidance and support to individuals at various career stages.</p>
            <Link href="/services" className="learn-more">Learn More <FontAwesomeIcon icon={faArrowRight} /></Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
