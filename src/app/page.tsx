import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Podcast from "../components/Podcast";
import ScrollToTopButton from "@/components/ScrollToTop";
import ServiceCarousel from "@/components/ServiceCarousel";
import ProcessSection from "@/components/ProcessSection";
import Hero from "@/components/Hero";
import Books from "@/components/Books";
import Link from "next/link";

const Home = async () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Fixed Navbar */}
      <header className="w-full fixed z-40">
        <Navbar />
      </header>

      {/* 🌟 Hero Section */}
      <Hero
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
        <AboutMe />
        <Services />
        <ServiceCarousel />
        <ProcessSection />
        <Books linkToBooksPage={true} bookClasses="bg-[#F3F0FF] border border-gray-200 shadow-md" />
        <Podcast />
        <Contact />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;