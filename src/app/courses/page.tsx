'use client';
import { MouseEvent, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ScrollToTop from '@/components/ScrollToTop';
import { Module, TitleAndDesc } from '@/types/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faGem,
  faCompass,
  faEye,
  faBinoculars,
  faHandshake,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

function ParallaxCard({ icon, alt }: { icon: IconDefinition; alt: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="parallax-card w-fit"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        aria-label={alt}
        className="parallax-inner rounded-xl shadow-md w-[360px] h-[360px] flex items-center justify-center bg-[var(--slateBlue)]"
      >
        <FontAwesomeIcon icon={icon} className="text-[var(--gold)] text-8xl" />
      </div>
    </div>
  );
}

const pillarsOfTransformation: TitleAndDesc[] = [
  {
    title: 'Self-Awareness & Knowledge',
    description:
      'Clarify your values, understand your purpose and create a vision for the future, based on your goals.',
  },
  {
    title: 'Independent Support',
    description:
      'Receive impartial advice and independent support in a safe and confidential space.',
  },
  {
    title: 'Structured Accountability',
    description:
      'Be held accountable for the steps that you agree to take in order to transform and improve your life.',
  },
];

const sixModules: Module[] = [
  {
    pillar: 'Values',
    bullets: [
      'Life balance and satisfaction in 8 key areas',
      'Understand Foundational vs Motivational Values',
      'Honor your most important values',
    ],
    icon: faGem,
  },
  {
    pillar: 'Purpose',
    bullets: [
      'Articulate your life purpose',
      'Overcome self-limiting beliefs',
      'Build lasting self-confidence',
    ],
    icon: faCompass,
  },
  {
    pillar: 'Vision',
    bullets: [
      'Create your Being and Doing Goals',
      'Develop a personal life vision',
      'Establish clear life direction',
    ],
    icon: faEye,
  },
  {
    pillar: 'Perspectives',
    bullets: [
      'Choose empowering perspectives',
      'Manage negativity with clarity',
      'Channel your best self',
    ],
    icon: faBinoculars,
  },
  {
    pillar: 'Commitment',
    bullets: ['Time management strategies', 'Improve work-life balance', 'Own your next chapter'],
    icon: faHandshake,
  },
  {
    pillar: 'Action',
    bullets: [
      'Apply 5 pillars of effective action',
      'Achieve real results',
      'Stay on track and motivated',
    ],
    icon: faBolt,
  },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <Hero bgImage="/coaching/KC_GroupTraining-13.jpg" header="Courses" />

      <div className="courses-page relative z-10 bg-white text-gray-800">
        {/* Intro Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <p className="text-2xl text-blue-800 font-medium mb-10">
            {
              "If you're ready to make some changes in your life, but don't know where to start, then you probably recognize some of these problems:"
            }
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

        {/* Pullquote */}
        <section className="py-16 px-4 max-w-6xl mx-auto text-center">
          <blockquote className="text-xl italic font-semibold text-gray-700 max-w-3xl mx-auto mb-10">
            {`"Coaching offers a way forward, so you can start transforming your life and turn your dreams into reality."`}
          </blockquote>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            I can help you gain clarity on your purpose, values and priorities, figure out what’s
            holding you back, set clear goals based on what you want most, develop strategies and
            action plans, and help you implement them while providing the support and accountability
            you need to get things done.
          </p>
        </section>

        {/* 3 Pillars Section */}
        <section className="py-20 px-4 text-white" style={{ backgroundColor: '#142c46' }}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">3 Pillars of Transformation</h2>
            <p className="text-xl text-blue-200 mb-12">
              {"Here's my tried and tested formula that's proven to deliver results…"}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {pillarsOfTransformation.map((pillar, index) => (
                <div key={index} className="bg-white text-gray-800 rounded-xl p-6 shadow-md">
                  <h5 className="text-xl font-semibold mb-2">{pillar.title}</h5>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Six Modules Program Section */}
        <section className="py-20 text-white relative z-10 bg-[var(--slateBlue)]">
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
              <strong className="text-[#c9a227]">Co-Active methodology</strong>
              {". Here's what to expect…"}
            </p>
          </div>
        </section>

        {/* Modules 01-06 */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto space-y-24 px-4">
            {sixModules.map((module, index) => (
              <div key={index} className="grid md:grid-cols-2 items-center gap-10">
                <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                  <ParallaxCard icon={module.icon} alt={module.pillar.toLowerCase()} />
                </div>
                <div className={index % 2 === 0 ? '' : 'md:order-1'}>
                  <h4 className="text-2xl font-bold mb-4">
                    Module {String(index + 1).padStart(2, '0')}.{' '}
                    <span className="text-[#c9a227]">{module.pillar}</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                    {module.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}
