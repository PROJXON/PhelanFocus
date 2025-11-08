"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ImagePath } from "@/types/types";

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
        className="fixed top-0 left-0 w-screen h-[55vh] z-0 overflow-hidden flex flex-col items-center justify-start text-center"
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

        {/* Stronger Overlay for visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"></div>

        {/* Hero Content (logo slightly lower) */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Image
            src="/podcast/phelanfocus.png"
            alt="Phelan Focus logo"
            width={450}
            height={450}
            className="rounded-lg mb-6"
          />
        </div>
      </motion.div>

      {/* Spacer to offset fixed hero */}
      <div style={{ height: "55vh" }} />
    </>
  );
};

export default PodcastHero;
