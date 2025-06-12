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
      <section className="coaching-hero" style={{ backgroundImage: "url('/coaching.jpeg')" }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Transform Your Life Through Coaching</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">Unlock your potential and achieve extraordinary results with personalized guidance</p>
          <div className="mt-8">
            <Link href="/contact" className="btn">
              <span>Start Your Journey</span>
              <span></span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Our Coaching Section */}
      <section className="about-coaching-section bg-white py-20">
        <div className="container">
          <div className="section-title">
            <h2>About Our Coaching</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We believe everyone has the potential to create meaningful change in their lives. Our approach combines proven methodologies with personalized strategies.</p>
          </div>
          <div className="about-content grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="about-img relative">
              <img src="/coaching-about.jpg" alt="Coaching session" className="rounded-lg shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-[#F9C705] text-white p-6 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold">15+</h4>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="about-text">
              <h3 className="text-3xl font-bold text-[#13395c] mb-6">Why Choose Our Coaching Programs</h3>
              <p className="text-gray-600 mb-6">With over 15 years of experience helping clients from all walks of life, our certified coaches provide the guidance, tools, and accountability you need to break through barriers and achieve extraordinary results.</p>
              <p className="text-gray-600 mb-8">We don't believe in one-size-fits-all solutions. Each coaching relationship is unique, tailored to your specific needs, goals, and personality.</p>
              <div className="about-features grid grid-cols-1 gap-6">
                <div className="coaching-feature-item">
                  <div className="coaching-feature-icon">
                    <FontAwesomeIcon icon={faBullseye} />
                  </div>
                  <div className="coaching-feature-text">
                    <h4>Goal-Oriented Approach</h4>
                    <p>Clear, measurable objectives with actionable steps</p>
                  </div>
                </div>
                <div className="coaching-feature-item">
                  <div className="coaching-feature-icon">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                  <div className="coaching-feature-text">
                    <h4>Proven Results</h4>
                    <p>90% of clients achieve their primary goals within 6 months</p>
                  </div>
                </div>
                <div className="coaching-feature-item">
                  <div className="coaching-feature-icon">
                    <FontAwesomeIcon icon={faHandsHelping} />
                  </div>
                  <div className="coaching-feature-text">
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
      <section className="services-section bg-gray-50 py-20">
        <div className="container">
          <div className="section-title">
            <h2>Our Coaching Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We offer specialized coaching programs designed to address different aspects of personal and professional growth.</p>
          </div>
          <div className="services-grid grid md:grid-cols-3 gap-8 mt-16">
            <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="service-img h-48 overflow-hidden">
                <img src="/life-coaching.jpg" alt="Life Coaching" className="w-full h-full object-cover" />
              </div>
              <div className="service-content p-6">
                <h3 className="text-2xl font-bold text-[#13395c] mb-4">Life Coaching</h3>
                <p className="text-gray-600 mb-6">Gain clarity on your life purpose, improve relationships, and create balance in all areas of your life with our transformative life coaching program.</p>
                <Link href="/contact" className="btn">
                  <span>Learn More</span>
                  <span></span>
                </Link>
              </div>
            </div>
            <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="service-img h-48 overflow-hidden">
                <img src="/career-coaching.jpg" alt="Career Coaching" className="w-full h-full object-cover" />
              </div>
              <div className="service-content p-6">
                <h3 className="text-2xl font-bold text-[#13395c] mb-4">Career Coaching</h3>
                <p className="text-gray-600 mb-6">Navigate career transitions, develop leadership skills, and achieve professional success with our expert career coaching services.</p>
                <Link href="/contact" className="btn">
                  <span>Learn More</span>
                  <span></span>
                </Link>
              </div>
            </div>
            <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="service-img h-48 overflow-hidden">
                <img src="/executive-coaching.jpg" alt="Executive Coaching" className="w-full h-full object-cover" />
              </div>
              <div className="service-content p-6">
                <h3 className="text-2xl font-bold text-[#13395c] mb-4">Executive Coaching</h3>
                <p className="text-gray-600 mb-6">Enhance your leadership presence, improve decision-making, and drive organizational success with our executive coaching program.</p>
                <Link href="/contact" className="btn">
                  <span>Learn More</span>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="testimonials-section bg-white py-20">
        <div className="container">
          <div className="section-title">
            <h2>Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from people who have transformed their lives through our coaching programs.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="client-img">
                <img src="/images/chase.jpg" alt="Chase Heien" />
              </div>
              <p className="testimonial-text">
                "Working with Phelan has been transformative. His coaching helped me clarify my vision and take decisive action towards my goals."
              </p>
              <div className="client-info">
                <h4>Chase Heien</h4>
                <p>Entrepreneur</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="client-img">
                <img src="/images/caleb.jpg" alt="Caleb Contreas" />
              </div>
              <p className="testimonial-text">
                "The strategies and insights I gained through coaching have been invaluable. I've seen significant growth in both my personal and professional life."
              </p>
              <div className="client-info">
                <h4>Caleb Contreas</h4>
                <p>Business Owner</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="client-img">
                <img src="/images/delacruz.jpg" alt="De La Cruz" />
              </div>
              <p className="testimonial-text">
                "Phelan's approach to coaching is unique and effective. He helped me break through barriers I didn't even know existed."
              </p>
              <div className="client-info">
                <h4>De La Cruz</h4>
                <p>Executive</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="client-img">
                <img src="/images/chase.jpg" alt="Chase Heien" />
              </div>
              <p className="testimonial-text">
                "Working with Phelan has been transformative. His coaching helped me clarify my vision and take decisive action towards my goals."
              </p>
              <div className="client-info">
                <h4>Chase Heien</h4>
                <p>Entrepreneur</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="client-img">
                <img src="/images/caleb.jpg" alt="Caleb Contreas" />
              </div>
              <p className="testimonial-text">
                "The strategies and insights I gained through coaching have been invaluable. I've seen significant growth in both my personal and professional life."
              </p>
              <div className="client-info">
                <h4>Caleb Contreas</h4>
                <p>Business Owner</p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="client-img">
                <img src="/images/delacruz.jpg" alt="De La Cruz" />
              </div>
              <p className="testimonial-text">
                "Phelan's approach to coaching is unique and effective. He helped me break through barriers I didn't even know existed."
              </p>
              <div className="client-info">
                <h4>De La Cruz</h4>
                <p>Executive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Success Principles Section */}
      <section className="principles-section bg-gray-50 py-20">
        <div className="container">
          <div className="section-title">
            <h2>Our Success Principles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">These foundational principles guide all of our coaching methodologies and client transformations.</p>
          </div>
          <div className="principles-grid grid md:grid-cols-3 gap-8 mt-16">
            <div className="principle-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="principle-icon text-[#F9C705] text-4xl mb-6">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h3 className="text-xl font-bold text-[#13395c] mb-4">Clarity of Vision</h3>
              <p className="text-gray-600">Success begins with crystal-clear understanding of what you truly want to achieve in all areas of your life.</p>
            </div>
            <div className="principle-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="principle-icon text-[#F9C705] text-4xl mb-6">
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h3 className="text-xl font-bold text-[#13395c] mb-4">Mindset Mastery</h3>
              <p className="text-gray-600">Developing a growth mindset and eliminating limiting beliefs is essential for breakthrough results.</p>
            </div>
            <div className="principle-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="principle-icon text-[#F9C705] text-4xl mb-6">
                <FontAwesomeIcon icon={faTasks} />
              </div>
              <h3 className="text-xl font-bold text-[#13395c] mb-4">Action Orientation</h3>
              <p className="text-gray-600">Consistent, purposeful action aligned with your goals creates measurable progress and momentum.</p>
            </div>
            <div className="principle-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="principle-icon text-[#F9C705] text-4xl mb-6">
                <FontAwesomeIcon icon={faBalanceScale} />
              </div>
              <h3 className="text-xl font-bold text-[#13395c] mb-4">Holistic Balance</h3>
              <p className="text-gray-600">True success integrates all life areas - career, relationships, health, and personal growth.</p>
            </div>
            <div className="principle-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="principle-icon text-[#F9C705] text-4xl mb-6">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <h3 className="text-xl font-bold text-[#13395c] mb-4">Accountability</h3>
              <p className="text-gray-600">Having support and accountability dramatically increases your chances of success.</p>
            </div>
            <div className="principle-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="principle-icon text-[#F9C705] text-4xl mb-6">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h3 className="text-xl font-bold text-[#13395c] mb-4">Purpose Alignment</h3>
              <p className="text-gray-600">When your actions align with your core values and purpose, fulfillment follows naturally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="resources-section bg-white py-20">
        <div className="container">
          <div className="section-title">
            <h2>Free Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Access our collection of free tools and resources to start your transformation journey today.</p>
          </div>
          <div className="resources-container grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="resources-content">
              <h3 className="text-3xl font-bold text-[#13395c] mb-6">Empower Yourself With Our Free Tools</h3>
              <p className="text-gray-600 mb-8">We believe in making powerful transformation tools available to everyone. These free resources have helped thousands of people create positive change in their lives.</p>
              <div className="resources-list space-y-6">
                <div className="resource-item flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="resource-icon text-[#F9C705] text-2xl">
                    <FontAwesomeIcon icon={faFileDownload} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#13395c] mb-2">Goal Setting Workbook</h4>
                    <p className="text-gray-600">Our step-by-step guide to creating meaningful, achievable goals</p>
                  </div>
                </div>
                <div className="resource-item flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="resource-icon text-[#F9C705] text-2xl">
                    <FontAwesomeIcon icon={faVideo} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#13395c] mb-2">Masterclass Videos</h4>
                    <p className="text-gray-600">Access our library of free training videos on personal development</p>
                  </div>
                </div>
                <div className="resource-item flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="resource-icon text-[#F9C705] text-2xl">
                    <FontAwesomeIcon icon={faHeadset} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#13395c] mb-2">Guided Meditation Series</h4>
                    <p className="text-gray-600">Reduce stress and increase focus with our audio meditations</p>
                  </div>
                </div>
                <div className="resource-item flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="resource-icon text-[#F9C705] text-2xl">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#13395c] mb-2">Productivity Planner</h4>
                    <p className="text-gray-600">Our proven system for maximizing your daily productivity</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn">
                  <span>Download All Resources</span>
                  <span></span>
                </Link>
              </div>
            </div>
            <div className="resources-img">
              <img src="/free-resources.jpg" alt="Free resources" className="rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
