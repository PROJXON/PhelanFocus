'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ImagePath } from '@/types/types';
import { useThrottledScroll } from '@/hooks/useThrottledScroll';

const Hero = ({
  bgImage,
  header,
  alt = 'Hero background',
}: {
  bgImage: ImagePath;
  header: string;
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
    window.addEventListener('resize', measureHeight);
    return () => window.removeEventListener('resize', measureHeight);
  }, []);

  useThrottledScroll((scrollY) => {
    const next = scrollY < heroHeight;
    setIsVisible((prev) => (prev === next ? prev : next));
  });

  return (
    <>
      <motion.div
        ref={heroRef}
        className="fixed top-0 left-0 w-screen h-[50vh] z-0 overflow-hidden pointer-events-none flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Image
          src={bgImage}
          alt={alt}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
          style={{ zIndex: 0, position: 'absolute' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <h1 className="relative z-20 text-white font-bold text-6xl text-center px-4 max-w-4xl">{header}</h1>
      </motion.div>
      <div style={{ height: '50vh' }} />
    </>
  );
};

export default Hero;
