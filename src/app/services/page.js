"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Link from "next/link";
import "./services.css";
import { useState } from 'react';
import ScrollToTopButton from "@/components/ScrollToTop";
import Image from "next/image";

export default function ServicesPage() {
    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState("our-services");

    // Function to handle tab switching
    const handleTabClick = (tab) => setActiveTab(tab);

    const services = [
        {
            href: "/coaching",
            heading: "1 Coaching",
            paragraph: "Unlock your full potential with personalized executive coaching. Develop leadership skills, enhance strategic thinking, and achieve your professional aspirations with tailored guidance and support.",
        },
        {
            href: "/speaking",
            heading: "2 Speaking",
            paragraph: "Inspire and motivate your audience with engaging presentations. From keynote speeches to workshops, our dynamic speaking engagements deliver impactful messages on leadership, strategy, and personal growth.",
        },
        {
            href: "/consulting",
            heading: "3 Consulting",
            paragraph: "Drive business growth and overcome challenges with expert strategic consulting. We provide actionable insights and innovative solutions to optimize performance and achieve sustainable success.",
        },
    ];

    const tabs = [
        {
            tab: "our-services",
            text: "Why Need Our Services?",
        },
        {
            tab: "choose-us",
            text: "Why Choose Us",
        },
        {
            tab: "how-works",
            text: "How it Works",
        },
    ];

    return (
        <div className="service-page">
            <Navbar isFooter={false} />

            {/* Hero Section */}
            <Hero sectionClass="service-hero" bgImage="/service.jpeg" header="SERVICE" />

            {/* Service Detail Section */}
            <section className="project-three-area pt-130 pb-130">
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
                                            <h4><Link className="hover-link-light" href={service.href}>
                                                {service.heading}
                                            </Link></h4>
                                            <p className="mt-15 mb-25">{service.paragraph}</p>
                                            <Link href={service.href} className="arry-btn">
                                                <i className="fa-light fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <Image 
                                            src="/coaching.jpeg"
                                            width={446}
                                            height={250} 
                                            alt="image" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Choose area */}
            <section className="choose-one-area bg-sub pt-130">
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
                                                    className={activeTab === tab.tab ? "nav-link active" : "nav-link"}
                                                    onClick={() => handleTabClick(tab.tab)}
                                                >
                                                    {tab.text}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="tab-content mt-50">
                                    {activeTab === "our-services" && (
                                        <div className="choose-one__content">
                                            <p>
                                                In today’s fast-paced world, everyone faces challenges in reaching their full potential—whether that’s advancing your career, winning over an audience, or pivoting your business strategy. Our three-fold approach of <strong>personalized coaching</strong>, <strong>dynamic public speaking training</strong>, and <strong>strategic consulting</strong> ensures you get the confidence, clarity, and roadmap you need to succeed.
                                            </p>
                                            <div className="item">
                                                <div className="icon">
                                                    {/* icon_globe */}
                                                </div>
                                                <div className="box-content">
                                                    <h4 className="box-title">Mission Statement</h4>
                                                    <p>
                                                        We empower individuals and teams to unlock their strengths, articulate their vision, and drive meaningful change—through one-on-one guidance, impactful stage presence, and data-driven business insights.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divider h14"></div>
                                            <div className="item">
                                                <div className="icon mt4">
                                                    {/* icon_wallet */}
                                                </div>
                                                <div className="box-content">
                                                    <h4 className="box-title">Our Commitment</h4>
                                                    <p>
                                                        Whether you’re preparing for your first keynote, navigating a career crossroads, or scaling your organization, we pledge to deliver tailored solutions, unwavering support, and measurable results every step of the way.
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

                                    {activeTab === "choose-us" && (
                                        <div className="choose-one__content">
                                            <p>
                                                Choosing the right partner is key to unlocking your full potential.{" "}
                                                We combine <strong>personalized coaching</strong>,{" "}
                                                <strong>impactful public speaking training</strong>, and{" "}
                                                <strong>strategic consulting</strong> to give you the clarity, confidence,
                                                and roadmap you need to excel—whether you’re leading a team, addressing
                                                an audience, or redefining your business.
                                            </p>
                                            <ul className="mb-40 list-check">
                                                <li>Proven Expertise: Decades of experience across industries and stages</li>
                                                <li>Tailored Solutions: Programs built around your goals and challenges</li>
                                                <li>End-to-End Support: From mindset shifts to execution and follow-through</li>
                                            </ul>
                                        </div>
                                    )}

                                    {activeTab === "how-works" && (
                                        <div className="choose-one__content">
                                            <p>
                                                Our three-phase approach ensures you move confidently from idea to impact—every step built to deliver real, measurable results.
                                            </p>
                                            <div className="work-ten__wrp">
                                                <div className="work-ten__item text-start">
                                                    <h4>01. Discovery</h4>
                                                    <p>We begin by diving deep into your goals and challenges—uncovering what success looks like for you.</p>
                                                </div>
                                                <div className="work-ten__item text-start">
                                                    <h4>02. Strategy & Planning</h4>
                                                    <p>Together we co-create a customized roadmap—combining coaching techniques, speaking frameworks, and consulting best practices.</p>
                                                </div>
                                                <div className="work-ten__item text-start">
                                                    <h4>03. Execute & Refine</h4>
                                                    <p>You put the plan into action with our support, then we measure, adjust, and celebrate your wins.</p>
                                                </div>
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
