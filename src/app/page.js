import { fetchMenuLinks } from "../services/fetchMenuLinks"; // Import the data fetching service
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroCarousel } from "../components/HeroCarousel";
import { ImageCarousel } from "../components/ImageCarousel";
import { AboutMe } from "../components/AboutMe";
import { YouTubeSection } from "../components/YoutubeSection";
import { ImageGrid } from "../components/ImageGrid";

const Home = async () => {
  // Fetch menu links server-side
  const menuLinks = await fetchMenuLinks();

  return (
    <div>
      {/* Header with Navbar */}
      <header className="w-full">
        <div className="w-full fixed flex mx-0 px-0 min-h-[vh21] z-40 bg-white">
          <Navbar menuLinks={menuLinks} isFooter={false} />
        </div>
      </header>

      <main className="z-1 translate-y-[11vh] flex flex-col mx-0 space-y-8 z-1">
        <HeroCarousel />
        <ImageCarousel />
        <AboutMe />
        <YouTubeSection />
        <ImageGrid />
        <Footer menuLinks={menuLinks} />
      </main>

      {/* Footer with Navbar */}
      
    </div>
  );
};

export default Home;
