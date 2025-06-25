import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Podcast from "../components/Podcast";
import ScrollToTopButton from "@/components/ScrollToTop";
import ServiceCarousel from "@/components/ServiceCarousel";
import ProcessSection from "@/components/ProcessSection";
import Books from "@/components/Books";
import Link from "next/link";

const Home = async () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Fixed Navbar */}
      <header className="w-full fixed z-40">
        <Navbar isFooter={false} />
      </header>

      <main className="pt-16 space-y-16">

        {/* 🌟 Hero Section */}
        <section
          className="w-full h-[60vh] bg-center bg-cover flex items-center justify-center text-white text-center relative"
          style={{ backgroundImage: "url('/homepage-hero.png')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 px-4">
            <h1 className="text-5xl font-bold uppercase">Welcome to Phelan Coaching</h1>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              Helping individuals unlock their potential and achieve personal and professional growth.
            </p>
              <div className="mt-6">
                <Link href="/sessions">
                  <button className="btn">
                    <span>Book a Call</span>
                    <span></span>
                  </button>
                </Link>
              </div>
          </div>
        </section>

        {/* ✨ Your Page Sections */}
        <AboutMe id="about" />
        <Services id="services" />
        <ServiceCarousel />
        <ProcessSection />
        <Books/>
        <Podcast id="podcast" />
        <Contact id="contact" />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
