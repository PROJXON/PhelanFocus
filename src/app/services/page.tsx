'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Link from 'next/link';
import './services.css';
import { useState } from 'react';
import ScrollToTopButton from '@/components/ScrollToTop';
import Image from 'next/image';
import { ServiceType, TitleAndDesc } from '@/types/interfaces';

export default function ServicesPage() {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('our-services');

  // Function to handle tab switching
  const handleTabClick = (tab: string) => setActiveTab(tab);

  const services: ServiceType[] = [
    {
      href: '/coaching',
      title: 'Coaching',
      description:
        'Executive coaching focused on leadership skills and strategic thinking, built around your specific goals.',
    },
    {
      href: '/speaking',
      title: 'Speaking',
      description:
        'Keynotes and workshops on leadership, strategy, and personal growth, built to actually land with a room instead of just filling time.',
    },
    {
      href: '/consulting',
      title: 'Consulting',
      description:
        'Strategic consulting to work through business challenges and improve performance, with recommendations you can actually act on.',
    },
  ];

  const tabs = [
    {
      tab: 'our-services',
      text: 'Why Need Our Services?',
    },
    {
      tab: 'choose-us',
      text: 'Why Choose Us',
    },
    {
      tab: 'how-works',
      text: 'How it Works',
    },
  ];

  const howItWorks: TitleAndDesc[] = [
    {
      title: 'Discovery',
      description:
        'We start by getting a clear picture of your goals and what’s standing in the way.',
    },
    {
      title: 'Strategy & Planning',
      description:
        'We build a plan together, pulling from coaching, speaking, and consulting depending on what the situation calls for.',
    },
    {
      title: 'Execute & Refine',
      description:
        'You put the plan into action with our support. We check in, adjust what isn’t working, and track the results.',
    },
  ];

  return (
    <div className="service-page">
      <Navbar />

      {/* Hero Section */}
      <Hero bgImage="/service.jpeg" header="" objectPosition="center 25%" fadeTo="#f9f9f9" />

      {/* Service Detail Section */}
      <section className="project-three-area relative z-10 pt-130 pb-130">
        <div className="project-three__wrp">
          <div className="row g-4">
            {services.map((service, i) => (
              <div className="col-lg-6 col-xl-4" key={i}>
                <div className="project-three__item">
                  <div className="project-three__content">
                    <div className="shape">
                      <Image
                        src="/services/services-background.png"
                        width={100}
                        height={100}
                        alt="shape"
                      />
                    </div>
                    <div className="content">
                      <h4>
                        <Link className="hover-link-light" href={service.href}>
                          {i + 1} {service.title}
                        </Link>
                      </h4>
                      <p className="mt-15 mb-25">{service.description}</p>
                      <Link href={service.href} className="arry-btn">
                        <i className="fa-light fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="image">
                    <Image src="/coaching.jpeg" width={446} height={250} alt="image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose area */}
      <section className="choose-one-area relative z-10 bg-sub pt-130">
        <div className="container">
          <div className="row g-0">
            <div className="col-xl-7 order-2 order-xl-1">
              <div className="choose-one__wrp">
                <div className="section-header mb-50">
                  <h2 className="wow splt-txt" data-splitting>
                    Our Services <br /> What We Help
                  </h2>
                </div>
                <div className="choose__tab">
                  <ul className="nav nav-tabs" role="tablist">
                    {tabs.map((tab, i) => (
                      <li className="nav-item" role="presentation" key={i}>
                        <button
                          className={activeTab === tab.tab ? 'nav-link active' : 'nav-link'}
                          onClick={() => handleTabClick(tab.tab)}
                        >
                          {tab.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tab-content mt-50">
                  {activeTab === 'our-services' && (
                    <div className="choose-one__content">
                      <p>
                        Most people hit a wall trying to grow their career, win over a room, or
                        shift their business strategy on their own. That's where{' '}
                        <strong>coaching</strong>, <strong>speaking training</strong>, and{' '}
                        <strong>consulting</strong> come in, combined into one approach instead of
                        three separate services.
                      </p>
                      <div className="item">
                        <div className="icon">{/* icon_globe */}</div>
                        <div className="box-content">
                          <h4 className="box-title">Mission Statement</h4>
                          <p>
                            We help individuals and teams figure out what they're good at and put
                            it to work, through one-on-one coaching, public speaking training, and
                            practical business strategy.
                          </p>
                        </div>
                      </div>
                      <div className="divider h14"></div>
                      <div className="item">
                        <div className="icon mt4">{/* icon_wallet */}</div>
                        <div className="box-content">
                          <h4 className="box-title">Our Commitment</h4>
                          <p>
                            Whether you're prepping for your first keynote, at a career crossroads,
                            or scaling your organization, we build the plan around your specific
                            situation and stay involved until you see results.
                          </p>
                          <ul className="mt-25">
                            <li>Tailored Coaching Programs</li>
                            <li>Transformative Speaking Workshops</li>
                            <li>Strategic Consulting Roadmaps</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'choose-us' && (
                    <div className="choose-one__content">
                      <p>
                        The right partner makes a real difference here. We combine{' '}
                        <strong>coaching</strong>, <strong>public speaking training</strong>, and{' '}
                        <strong>consulting</strong> so you're not piecing together three different
                        vendors, whether you're leading a team, addressing an audience, or
                        rethinking your business.
                      </p>
                      <ul className="mb-40 list-check">
                        <li>Decades of experience across industries and stages</li>
                        <li>Programs built around your specific goals, not a template</li>
                        <li>Support from the first mindset shift through execution and follow-through</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'how-works' && (
                    <div className="choose-one__content">
                      <p>
                        Three phases take you from idea to execution: discovery, strategy, and
                        hands-on delivery.
                      </p>
                      <div className="work-ten__wrp">
                        {howItWorks.map((step, i) => (
                          <div className="work-ten__item text-start" key={i}>
                            <h4>
                              {String(i + 1).padStart(2, '0')}. {step.title}
                            </h4>
                            <p>{step.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-xl-5 order-1 order-xl-2">
              <div className="choose-one__image gsap__parallax">
                <Image
                  src="/services/choose-one-image.jpg"
                  width={429}
                  height={287}
                  alt="Financial Solutions"
                />
                <div className="choose-one__rectangle">
                  <div className="item wow"></div>
                  <div className="item-dark wow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
