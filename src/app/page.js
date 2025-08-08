import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Podcast from "../components/Podcast";
import ScrollToTopButton from "@/components/ScrollToTop";
import ServiceCarousel from "@/components/ServiceCarousel";
import ProcessSection from "@/components/ProcessSection";
import Books from "@/components/Books";
import Link from "next/link";
import Hero from "@/components/Hero";

const Home = async () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Fixed Navbar */}
      <header className="w-full fixed z-40">
        <Navbar isFooter={false} />
      </header>

      {/* 🌟 Hero Section */}
      <Hero
        sectionClass="home-hero h-[60vh] flex items-center justify-center text-white text-center"
        bgImage="/homepage-hero.png"
        header="Welcome to Phelan Coaching"
        alt="Phelan Coaching Hero Background"
      />

      <main className="relative z-10 pt-16 space-y-16 bg-white">
        {/* Call to Action Section */}
        <section className="text-center py-8">
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

        {/* ✨ Your Page Sections */}
        <AboutMe id="about" />
        <Services id="services" />
        <ServiceCarousel />
        <ProcessSection />
        <Books />
        <Podcast id="podcast" />
        <Contact id="contact" />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
