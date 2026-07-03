'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './podcast.css';
import ScrollToTopButton from '@/components/ScrollToTop';
import { PodcastQuote } from '@/types/interfaces';
import PodcastEpisode from '@/components/PodcastEpisode';
import PodcastHero from './PodcastHero';
import ContactModal from '@/components/ContactModal';
import { useContactModal } from '@/context/ContactModalContext';
import SocialCarousel from './SocialMedia';
import SpotifyPhoneMockup from './SpotifyPhoneMockup';

export default function PodcastPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const { openModal } = useContactModal();

  const quotes: PodcastQuote[] = [
    {
      text: 'I’m a podcast fanatic – and this is my new obsession! So many life skills tucked in the fun conversations...',
      author: '— iTunes Review',
    },
    {
      text: "Mark's coaching helped me finally get clarity in my business.",
      author: '— Entrepreneur Weekly',
    },
    {
      text: 'Every episode delivers pure value. Highly recommend!',
      author: '— FounderCast',
    },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="bg-white dark:bg-[#0b1727] text-gray-800 dark:text-white">
      <Navbar />
      <PodcastHero />

      {/* NOW STREAMING */}
      <section
        className="bg-white dark:bg-[#0f1419] py-20 px-6"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
          <SpotifyPhoneMockup />
          <div className="text-center md:text-left max-w-sm">
            <p className="text-[var(--gold)] text-sm uppercase font-semibold tracking-widest mb-3">
              Now Streaming
            </p>
            <h2 className="text-3xl font-bold mb-4 text-[var(--slateBlue)] dark:text-white">
              Tune in on Spotify
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              New episodes of The Phelan Focus drop every week. Follow along wherever you listen.
            </p>
            <a
              href="https://open.spotify.com/show/1hsQ9TSkvmuzkbnrE27ho7?si=95e611acecfa4385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1DB954] text-white font-semibold hover:bg-[#1ed760] transition"
            >
              Listen on Spotify
            </a>
          </div>
        </div>
      </section>

      {/* QUOTE CAROUSEL */}
      <section
        className="bg-slate-800 text-white py-16 px-6 text-center"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h3 className="text-3xl font-bold mb-12">What Listeners Say</h3>
        <div className="relative max-w-3xl mx-auto h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              <div className="bg-slate-700 p-6 rounded-xl shadow-md">
                <p className="italic text-lg mb-4">“{quotes[quoteIndex].text}”</p>
                <p className="text-[var(--gold)] text-sm uppercase font-semibold tracking-widest">
                  {quotes[quoteIndex].author}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    <SocialCarousel />
      <section
        className="bg-slate-800 text-white py-20 px-6 text-center"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h3 className="text-3xl font-bold mb-4">Podcast With Our Featured Guest</h3>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Here is a podcast episode with our featured guest
        </p>
        <PodcastEpisode
          embedSrc={
            new URL(
              'https://www.podbean.com/player-v2/?from=embed&i=v3h3u-18f2618-pb&square=1&share=1&download=1&fonts=Verdana&skin=1b1b1b&font-color=auto&rtl=0&logo_link=podcast_page&btn-skin=ff6d00&size=300'
            )
          }
          width="100%"
          height={300}
        />
        <button
          className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold transition duration-300 border-2 ${
            mounted && resolvedTheme === 'light'
              ? 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white hover:shadow-md'
              : 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black hover:shadow-md'
          }`}
          onClick={() =>
            window.open(
              'https://thejobseekersjourney.podbean.com/e/entrepreneurshipandthemomentuminternshipprogram/',
              '_blank'
            )
          }
        >
          Listen to Podcast
        </button>
      </section>
      <section
        className="bg-[#0b1727] py-20 px-6 text-center"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h3 className="text-3xl font-semibold mb-10">First TPF Episode</h3>
        <PodcastEpisode
          embedSrc={
            new URL(
              'https://open.spotify.com/embed/episode/0RFqaTngo8JSXrVBlhIGaV/video?utm_source=generator&t=0'
            )
          }
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          width={624}
          height={351}
          dataTestid="embed-iframe"
        />
        <button
          className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold transition duration-300 border-2 ${
            mounted && resolvedTheme === 'light'
              ? 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white hover:shadow-md'
              : 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black hover:shadow-md'
          }`}
          onClick={() =>
            window.open('https://open.spotify.com/episode/0RFqaTngo8JSXrVBlhIGaV', '_blank')
          }
        >
          All Episodes
        </button>
      </section>
      {/* CTA SECTION */}
      <section
        className="bg-slate-800 text-white py-20 px-6 text-center"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h3 className="text-4xl font-bold mb-4">Join us in turning chaos into opportunity</h3>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          {
            "Schedule a no-cost discovery call to learn if I'm the right person to help you move forward."
          }
        </p>
        <div className="max-w-xs mx-auto">
          <ContactModal />
          <button
            className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold transition duration-300 border-2 ${
              mounted && resolvedTheme === 'light'
                ? 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white hover:shadow-md'
                : 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black hover:shadow-md'
            }`}
            onClick={openModal}
          >
            Book a Call
          </button>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
