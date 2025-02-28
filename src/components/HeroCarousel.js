// components/HeroCarousel.js
"use client";
import { motion } from "framer-motion";
export const HeroCarousel = () => (
  <section className="relative">
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileOutOfView={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
      className="relative w-full h-auto"
    >
      {/* Full-screen Background Iframe */}
      <div className="relative w-full h-[33vw] min-h-[333px]">
        <iframe
          src="https://www.youtube.com/embed/9y9UEAkB2VA?si=oIYp_RsC9YGQIkDv&autoplay=1&mute=1&loop=1&playlist=9y9UEAkB2VA"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </motion.div>
  </section>


  );
  