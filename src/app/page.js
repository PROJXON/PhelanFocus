import { fetchMenuLinks } from "../services/fetchMenuLinks"; // Import the data fetching service
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroCarousel } from "../components/HeroCarousel";
import { ImageCarousel } from "../components/ImageCarousel";
import AboutMe from "../components/AboutMe";
import { YouTubeSection } from "../components/YoutubeSection";
import { ImageGrid } from "../components/ImageGrid";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Podcast from "../components/Podcast";
import MovingDotsBackground from "../components/MovingDotsBackground";

const Home = async () => {

  return (
    <div>
      <MovingDotsBackground />
      {/* Header with Navbar */}
      <header className="w-full">
        <div className="w-full fixed flex mx-0 px-0 z-40">
          <Navbar isFooter={false} />
        </div>
      </header>

      <main className="pt-[48px] flex flex-col space-y-8 relative z-1">
        <HeroCarousel />
        <div className="max-w-6xl w-full mx-auto px-4">
          <AboutMe id="about" />
          <Services id="services" />
          <Podcast id="podcast" />
          <Contact id="contact" />
          {/* <YouTubeSection /> */}
          {/* <ImageGrid /> */}
        </div>
        <Footer />
      </main>

      {/* Footer with Navbar */}
      
    </div>
  );
};

export default Home;
