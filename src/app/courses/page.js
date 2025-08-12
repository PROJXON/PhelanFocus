'use client';
import Image from 'next/image';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollToTop from '@/components/ScrollToTop';

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
    <div
      className="parallax-card w-fit"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={imageRef} className="parallax-inner rounded-xl shadow-md">
        <Image src={src} alt={alt} width={360} height={360} className="rounded-xl" />
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <Hero sectionClass="courses-hero" bgImage="/courses/courses.jpeg" header="Courses" />

      <div className="courses-page relative z-10 bg-white text-gray-800">
        {/* Intro Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <p className="text-2xl text-blue-800 font-medium mb-10">
            If you're ready to make some changes in your life, but don't know where to start, then
            you probably recognize some of these problems:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="list-disc list-inside space-y-3">
              <li>Struggling to find a clear focus, direction or vision</li>
              <li>Feeling demotivated or uninspired</li>
              <li>Feeling stuck or unsure about your next move</li>
            </ul>
            <ul className="list-disc list-inside space-y-3">
              <li>Frustrated about not fulfilling your true potential</li>
              <li>Paralyzed by a fear of failure or self-doubt</li>
              <li>Stressed about financial stability and security</li>
            </ul>
          </div>
        </section>

        {/* Round Images & Pullquote */}
        <section className="py-16 px-4 max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-10 flex-wrap">
            <Image
              src="/courses/round1.jpeg"
              alt="Round 1"
              width={240}
              height={240}
              className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <Image
              src="/courses/round2.jpeg"
              alt="Round 2"
              width={240}
              height={240}
              className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <Image
              src="/courses/round3.jpeg"
              alt="Round 3"
              width={240}
              height={240}
              className="rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <blockquote className="text-xl italic font-semibold text-gray-700 max-w-3xl mx-auto mb-10">
            "Coaching offers a way forward, so you can start transforming your life and turn your
            dreams into reality."
          </blockquote>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            I can help you gain clarity on your purpose, values and priorities, figure out what’s
            holding you back, set clear goals based on what you want most, develop strategies and
            action plans, and help you implement them while providing the support and accountability
            you need to get things done.
          </p>
        </section>

        {/* 3 Pillars Section */}
        <section className="py-20 px-4 text-white" style={{ backgroundColor: '#144a8f' }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">3 Pillars of Transformation</h2>
            <p className="text-xl text-blue-200 mb-12">
              Here's my tried and tested formula that's proven to deliver results…
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white text-gray-800 rounded-xl p-6 shadow-md">
                <h5 className="text-xl font-semibold mb-2">Self-Awareness & Knowledge</h5>
                <p>
                  Clarify your values, understand your purpose and create a vision for the future,
                  based on your goals.
                </p>
              </div>
              <div className="bg-white text-gray-800 rounded-xl p-6 shadow-md">
                <h5 className="text-xl font-semibold mb-2">Independent Support</h5>
                <p>
                  Receive impartial advice and independent support in a safe and confidential space.
                </p>
              </div>
              <div className="bg-white text-gray-800 rounded-xl p-6 shadow-md">
                <h5 className="text-xl font-semibold mb-2">Structured Accountability</h5>
                <p>
                  Be held accountable for the steps that you agree to take in order to transform and
                  improve your life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Six Modules Program Section */}
        <section
          className="py-20 text-white relative z-10 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('courses/module.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#00294d]/60 z-0"></div>

          <div
            className="absolute top-0 left-0 w-full z-0 opacity-10 pointer-events-none"
            style={{
              height: '200px',
              background: 'radial-gradient(circle at center, white, transparent)',
            }}
          ></div>

          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Six Modules Program</h2>
            <p className="text-xl text-blue-100 mb-6">
              that are proven to deliver immediate outcomes and results
            </p>
            <p className="text-lg text-white mb-4">
              The 6 module program will give you all the <em>knowledge</em>,{' '}
              <em>independent support</em> and <em>structured accountability</em> you need.
            </p>
            <p className="text-lg text-white">
              Based on the tried and tested{' '}
              <strong className="text-[#FFD700]">Co-Active methodology</strong>. Here's what to
              expect…
            </p>
          </div>
        </section>

        {/* Modules 01–06 */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto space-y-24 px-4">
            {/* Module 01 */}
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div>
                <ParallaxCard src="/courses/value.jpeg" alt="values" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4">
                  Module 01. <span className="text-[#FFD700]">Values</span>
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                  <li>Life balance and satisfaction in 8 key areas</li>
                  <li>Understand Foundational vs Motivational Values</li>
                  <li>Honor your most important values</li>
                </ul>
              </div>
            </div>

            {/* Module 02 */}
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div className="md:order-2">
                <ParallaxCard src="/courses/purpose.jpeg" alt="purpose" />
              </div>
              <div className="md:order-1">
                <h4 className="text-2xl font-bold mb-4">
                  Module 02. <span className="text-[#FFD700]">Purpose</span>
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                  <li>Articulate your life purpose</li>
                  <li>Overcome self-limiting beliefs</li>
                  <li>Build lasting self-confidence</li>
                </ul>
              </div>
            </div>

            {/* Module 03 */}
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div>
                <ParallaxCard src="/courses/vision.jpeg" alt="vision" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4">
                  Module 03. <span className="text-[#FFD700]">Vision</span>
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                  <li>Create your Being and Doing Goals</li>
                  <li>Develop a personal life vision</li>
                  <li>Establish clear life direction</li>
                </ul>
              </div>
            </div>

            {/* Module 04 */}
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div className="md:order-2">
                <ParallaxCard src="/courses/Perspectives.jpeg" alt="perspectives" />
              </div>
              <div className="md:order-1">
                <h4 className="text-2xl font-bold mb-4">
                  Module 04. <span className="text-[#FFD700]">Perspectives</span>
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                  <li>Choose empowering perspectives</li>
                  <li>Manage negativity with clarity</li>
                  <li>Channel your best self</li>
                </ul>
              </div>
            </div>

            {/* Module 05 */}
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div>
                <ParallaxCard src="/courses/Commitment.jpeg" alt="commitment" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4">
                  Module 05. <span className="text-[#FFD700]">Commitment</span>
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                  <li>Time management strategies</li>
                  <li>Improve work-life balance</li>
                  <li>Own your next chapter</li>
                </ul>
              </div>
            </div>

            {/* Module 06 */}
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div className="md:order-2">
                <ParallaxCard src="/courses/Action.jpeg" alt="action" />
              </div>
              <div className="md:order-1">
                <h4 className="text-2xl font-bold mb-4">
                  Module 06. <span className="text-[#FFD700]">Action</span>
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                  <li>Apply 5 pillars of effective action</li>
                  <li>Achieve real results</li>
                  <li>Stay on track and motivated</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}
