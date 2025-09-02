"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ImagePath } from "@/types/types";

interface ListenOn {
  href: string;
  src: string;
  alt: string;
}

const listenOn: ListenOn[] = [
  {
    href: "https://www.tiktok.com/@the.phelan.focus",
    src: "/podcast/tiktok.png",
    alt: "TikTok logo",
  },
  {
    href: "https://www.youtube.com/@ThePhelanFocus",
    src: "/podcast/youtube.png",
    alt: "YouTube logo",
  },
  {
    href: "https://open.spotify.com/show/1hsQ9TSkvmuzkbnrE27ho7?si=95e611acecfa4385",
    src: "/podcast/spotify.png",
    alt: "Spotify logo",
  },
  {
    href: "https://www.instagram.com/The.Phelan.Focus/",
    src: "/podcast/Instagram.png",
    alt: "Instagram logo",
  },
];

const PodcastHero = ({
  bgImage,
  alt = "Hero background",
}: {
  bgImage: ImagePath;
  alt?: string;
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const measureHeight = () => {
      if (heroRef.current) setHeroHeight(heroRef.current.offsetHeight);
    };
    measureHeight();
    window.addEventListener("resize", measureHeight);
    return () => window.removeEventListener("resize", measureHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= heroHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight]);

  return (
    <>
      <motion.div
        ref={heroRef}
        className="fixed top-0 left-0 w-screen h-[50vh] z-0 overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Background Image */}
        <Image
          src={bgImage}
          alt={alt}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/..."
          style={{ zIndex: -1, position: "absolute" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content */}
        <section
          className="relative mt-8 py-20 px-6 text-center mx-auto max-w-4xl z-10"
        >
          <h3 className="text-4xl font-semibold mb-10">
            Listen wherever you find your favorite podcasts:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {listenOn.map((place, i) => (
              <a
                key={i}
                href={place.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded-lg"
              >
                <Image
                  src={place.src}
                  alt={place.alt}
                  width={200}
                  height={50}
                />
              </a>
            ))}
          </div>
        </section>
      </motion.div>
      <div style={{ height: "50vh" }} />
    </>
  );
};

export default PodcastHero;
