'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import './coaching.css';
import ScrollToTopButton from '@/components/ScrollToTop';
import Image from 'next/image';
import {
  TitleDescAndEmoji,
  CoachingService,
  CoachingStep,
  TitleAndDesc,
  ClientSuccessStory,
} from '@/types/interfaces';
import { ReactNode } from 'react';
import PaddedNumsTimeline from '@/components/PaddedNumsTimeline';

const CoachingPageSection = ({
  sectionName,
  title,
  paragraph,
  image,
  children,
}: {
  sectionName: string;
  title: string;
  paragraph: string;
  image?: ReactNode;
  children: ReactNode;
}) => {
  const paragraphJSX = <p>{paragraph}</p>;

  return (
    <section className={`section ${sectionName}-section coaching-page`}>
      <div className="container">
        <h2 className={image === undefined ? undefined : `${sectionName}-title`}>{title}</h2>
        {image === undefined ? (
          paragraphJSX
        ) : (
          <div className={`${sectionName}-content`}>
            <div className={`${sectionName}-text`}>{paragraphJSX}</div>
            <div className={`${sectionName}-image`}>{image}</div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default function CoachingPage() {
  const coachingSteps: CoachingStep[] = [
    {
      title: 'Clarity & Vision',
      description:
        'Uncover what you truly want and identify the limiting beliefs holding you back.',
      image: '/coaching/KC_GroupTraining-4.jpg',
    },
    {
      title: 'Strategic Planning',
      description:
        'Create a personalized roadmap with clear milestones and actionable steps toward your goals.',
      image: '/coaching/KC_GroupTraining-221.jpg',
    },
    {
      title: 'Implementation',
      description:
        'Take consistent action with accountability and support to overcome obstacles as they arise.',
      image: '/coaching/KC_GroupTraining-13.jpg',
    },
    {
      title: 'Integration',
      description:
        'Lock in your new habits and mindset shifts to ensure lasting transformation beyond our work together.',
      image: '/coaching/KC_GroupTraining-221.jpg',
    },
  ];

  const coachingServices: CoachingService[] = [
    {
      icon: '⚡',
      title: 'Performance Coaching',
      description:
        'Optimize your mental and physical performance to achieve peak results in all areas of life.',
      features: [
        'Mental performance optimization',
        'Peak state management',
        'Stress and pressure handling',
        'Flow state development',
        'Energy management systems',
      ],
    },
    {
      icon: '🚀',
      title: 'Entrepreneur Coaching',
      description: 'Build and scale your business while maintaining balance and avoiding burnout.',
      features: [
        'Business strategy and planning',
        'Leadership development',
        'Scaling systems and processes',
        'Investor readiness',
        'Work-life integration',
      ],
    },
    {
      icon: '🎯',
      title: 'Career Coaching',
      description:
        'Navigate career transitions and create a path aligned with your values and ambitions.',
      features: [
        'Career transition planning',
        'Personal branding',
        'Interview and negotiation skills',
        'Networking strategies',
        'Purpose and passion discovery',
      ],
    },
  ];

  const outcomes: TitleAndDesc[] = [
    {
      title: 'Clarity & Direction',
      description:
        'Cut through the noise and get clear on your goals, values, and the steps to move forward.',
    },
    {
      title: 'Confidence in Action',
      description:
        'Build self-belief and take bold, aligned action—even in the face of fear or uncertainty.',
    },
    {
      title: 'Sustainable Progress',
      description:
        'Stay consistent, overcome perfectionism, and make steady progress toward meaningful results.',
    },
  ];

  const clientProfiles: TitleDescAndEmoji[] = [
    {
      icon: '🚀',
      title: 'The Ambitious Professional',
      description:
        'You’re successful but feel stuck. You want to break through to the next level in your career or business but don’t know how.',
    },
    {
      icon: '🎯',
      title: 'The Goal-Oriented Achiever',
      description: 'You have big dreams but struggle with consistency. You want to finish strong.',
    },
    {
      icon: '💪',
      title: 'The Life Transformer',
      description: 'You’re ready for a life overhaul—health, relationships, and purpose.',
    },
    {
      icon: '🌟',
      title: 'The High-Potential Individual',
      description: 'You know you’re capable of more and want to unlock that version of yourself.',
    },
  ];

  const tools: TitleAndDesc[] = [
    {
      title: 'Values Discovery Workshop',
      description: 'Identify your core values and align your goals with what truly matters to you.',
    },
    {
      title: 'Limiting Beliefs Assessment',
      description: 'Uncover the hidden thoughts sabotaging your progress.',
    },
    {
      title: 'Energy Management Audit',
      description: 'Optimize your energy for peak performance and focus.',
    },
    {
      title: 'Goal Architecture Framework',
      description: 'Break down your goals into actionable steps with built-in accountability.',
    },
    {
      title: 'Progress Tracking Dashboard',
      description: 'Visual system to track results in real time.',
    },
    {
      title: 'Mindset Shift Protocols',
      description: 'Techniques to rewire your thinking for long-term behavior change.',
    },
  ];

  const clientSuccessStories: ClientSuccessStory[] = [
    {
      avatar: 'C.H.',
      name: 'Chase Heien',
      role: 'Marketing Executive',
      story:
        'I was burned out and considering quitting. I rediscovered my passion and got promoted to VP with a 40% income increase.',
      result: 'Career breakthrough + 40% income increase',
    },
    {
      avatar: 'D.S.',
      name: 'Drey Singer',
      role: 'Entrepreneur',
      story:
        'My business was stuck at $50K. After 4 months, I scaled past $100K and continue to grow.',
      result: 'Business scaled from $50K to $100K+',
    },
    {
      avatar: 'J.R.',
      name: 'Jake Rappleye',
      role: 'Life Transition',
      story: 'After my divorce, I rebuilt my confidence and created a life I actually love living.',
      result: 'Life transformation + confidence restored',
    },
  ];

  const challenges: TitleDescAndEmoji[] = [
    {
      icon: '🔄',
      title: 'Stuck in Cycles',
      description: 'You keep getting the same results and need a fresh approach.',
    },
    {
      icon: '😰',
      title: 'Fear of Failure',
      description: 'You dream big but hesitate to take risks. We’ll build courage with a plan.',
    },
    {
      icon: '⏰',
      title: 'Time Management',
      description: 'Busy but not productive? Let’s create focus and eliminate distractions.',
    },
    {
      icon: '🎭',
      title: 'Imposter Syndrome',
      description: "You doubt your success. We'll build real inner confidence.",
    },
    {
      icon: '⚖️',
      title: 'Work-Life Balance',
      description:
        'You’re thriving professionally but burning out personally. Let’s align your life.',
    },
    {
      icon: '🧭',
      title: 'Lack of Direction',
      description: 'You feel lost. Coaching helps you reconnect with your values and purpose.',
    },
    {
      icon: '🔒',
      title: 'Fear of Visibility',
      description:
        'You’re holding back from putting yourself out there. We’ll build confidence to show up and lead.',
    },
    {
      icon: '🎯',
      title: 'Overwhelmed by Goals',
      description:
        'You have big ambitions but don’t know where to start. Let’s break it down into achievable steps.',
    },
  ];

  const timelineItems: TitleAndDesc[] = [
    {
      title: 'Discovery Call',
      description: '30-minute intro call to explore goals and fit. No pressure.',
    },
    {
      title: 'Deep Dive Assessment',
      description: 'Personalized intake to uncover patterns, blocks, and priorities.',
    },
    {
      title: 'Goal Setting & Strategy',
      description: 'We co-create a roadmap with measurable goals and milestones.',
    },
    {
      title: 'Coaching Sessions',
      description: 'We meet regularly to refine plans, overcome obstacles, and grow.',
    },
    {
      title: 'Ongoing Support',
      description: "You'll have check-ins and resources to keep momentum going.",
    },
    {
      title: 'Integration',
      description: 'We lock in the new mindset and systems to make results permanent.',
    },
  ];

  const philosophies: TitleAndDesc[] = [
    {
      title: 'Growth is Inevitable',
      description: 'With the right support and structure, you will grow. That’s a fact.',
    },
    {
      title: 'Action Creates Clarity',
      description: 'We don’t wait for clarity; we act and let it emerge from progress.',
    },
    {
      title: 'Authenticity Over Perfection',
      description: 'Your best results come from being you—fully and unapologetically.',
    },
    {
      title: 'Partnership, Not Dependency',
      description: 'I equip you to grow independently, long after coaching ends.',
    },
  ];

  return (
    <div className="coaching-page">
      <Navbar />

      {/* Hero Section */}
      <Hero bgImage="/coaching/coaching-hero.png" header="Coaching" />

      {/* Methodology Section */}
      <CoachingPageSection
        sectionName="methodology"
        title="My Coaching Methodology"
        paragraph="This coaching program follows a proven 4 coaching step framework that has helped hundreds of clients create sustainable transformation. It's not just talk therapy – it's a strategic, action-oriented approach designed to deliver real, lasting results."
        image={
          <Image
            src="/coaching/KC_GroupTraining-4.jpg"
            width={350}
            height={220}
            alt="Coaching Methodology"
            className="methodology-img"
          />
        }
      >
        <div className="process-coaching-steps">
          {coachingSteps.map((step, index) => (
            <div key={index} className="coaching-step">
              <div className="coaching-step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </CoachingPageSection>

      {/* Coaching Services */}
      <CoachingPageSection
        sectionName="services"
        title="Coaching Services"
        paragraph="Explore the specialized coaching services designed to help you achieve your goals."
      >
        <div className="coaching-services-grid">
          {coachingServices.map((service, index) => (
            <div key={index} className="coaching-service-card">
              <div className="coaching-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="coaching-service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="/sessions" className="btn-secondary">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </CoachingPageSection>

      {/* Expected Outcomes */}
      <section className="section outcomes-section py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Centered Heading and Description */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-neutral-dark mb-4">What You Can Expect</h2>
            <p className="text-neutral-medium">
              {
                "My clients typically see significant shifts within the first 30 days. Here's what's possible when you commit to the process:"
              }
            </p>
          </div>

          {/* Two Column Layout: Image Left, Outcomes Right */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side: Image */}
            <div className="w-full">
              <Image
                src="/coaching/KC_GroupTraining-221.jpg"
                width={390}
                height={490}
                alt="Expected Outcomes"
                className="rounded-xl shadow-lg w-full object-cover max-h-[600px]"
              />
            </div>

            {/* Right side: Outcomes List */}
            <div className="grid grid-cols-1 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="outcome-item">
                  <h3 className="text-xl font-medium text-neutral-dark">{outcome.title}</h3>
                  <p className="text-neutral-medium">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Clients */}
      <CoachingPageSection
        sectionName="ideal-clients"
        title="Who We Serve"
        paragraph="The coaching team specializes in supporting driven individuals ready to make meaningful changes in their lives. We work with professionals, entrepreneurs, and change-makers who are committed to personal growth, career advancement, and building a life aligned with their values."
        image={
          <Image
            src="/coaching/KC_GroupTraining-13.jpg"
            width={400}
            height={260}
            alt="Ideal Clients"
          />
        }
      >
        <div className="client-profiles">
          {clientProfiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <div className="profile-icon">{profile.icon}</div>
              <h3>{profile.title}</h3>
              <p>{profile.description}</p>
            </div>
          ))}
        </div>
      </CoachingPageSection>

      {/* Tools & Assessments */}
      <CoachingPageSection
        sectionName="tools"
        title="Our Tools & Assessments"
        paragraph="The team integrates evidence-based coaching practices with advanced assessment tools to
            deliver measurable, high-impact outcomes for every client."
      >
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-item">
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </CoachingPageSection>

      {/* Success Stories */}
      <CoachingPageSection
        sectionName="success-stories"
        title="Client Success Stories"
        paragraph="Here are just a few examples of the transformations my clients have achieved:"
      >
        <div className="stories-container">
          {clientSuccessStories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-header">
                <div className="client-avatar">{story.avatar}</div>
                <div className="client-info">
                  <h3>{story.name}</h3>
                  <p>{story.role}</p>
                </div>
              </div>
              <div className="story-content">
                <p>{story.story}</p>
                <div className="story-result">
                  <strong>Result:</strong> {story.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CoachingPageSection>

      {/* Challenges */}
      <CoachingPageSection
        sectionName="challenges"
        title="Common Challenges I Help Solve"
        paragraph="These patterns hold many people back. If they sound familiar, coaching can help:"
      >
        <div className="challenges-grid">
          {challenges.map((challenge, index) => (
            <div key={index} className="challenge-item">
              <div className="challenge-icon">{challenge.icon}</div>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>
      </CoachingPageSection>

      {/* Timeline */}
      <CoachingPageSection
        sectionName="how-it-works"
        title="How The Coaching Process Works"
        paragraph="Here’s what to expect when you work with me, step by step:"
      >
        <div className="process-timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <PaddedNumsTimeline
                num={index + 1}
                h3={item.title}
                p={item.description}
                class1="timeline-number"
              />
            </div>
          ))}
        </div>
      </CoachingPageSection>

      {/* Coaching Philosophy */}
      <CoachingPageSection
        sectionName="philosophy"
        title="My Coaching Philosophy"
        paragraph="The coaching philosophy centers around human potential and personalized empowerment."
      >
        <div className="philosophy-content">
          {philosophies.map((philosophy, index) => (
            <div key={index} className="philosophy-item">
              <div className="philosophy-icon">{philosophy.title.charAt(0)}</div>
              <h3>{philosophy.title}</h3>
              <p>{philosophy.description}</p>
            </div>
          ))}
        </div>
      </CoachingPageSection>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
