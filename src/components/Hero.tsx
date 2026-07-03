'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ImagePath } from '@/types/types';
import { PageLink } from '@/types/types';
import { useThrottledScroll } from '@/hooks/useThrottledScroll';

const Hero = ({
  bgImage,
  header,
  alt = 'Hero background',
  objectPosition = 'center',
  fadeTo = '#ffffff',
  subtitle,
  ctaText,
  ctaHref,
}: {
  bgImage: ImagePath;
  header: string;
  alt?: string;
  objectPosition?: string;
  fadeTo?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: PageLink;
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
          className="object-cover"
          style={{ zIndex: 0, position: 'absolute', objectPosition }}
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 55%, ${fadeTo} 100%)` }}
        ></div>
        <div className="relative z-20 flex flex-col items-center px-4 max-w-3xl">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
            {header}
          </h1>
          {subtitle && (
            <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl text-center max-w-xl">
              {subtitle}
            </p>
          )}
          {ctaText && ctaHref && (
            <Link
              href={ctaHref}
              className="pointer-events-auto mt-6 inline-block bg-[var(--gold)] hover:bg-white text-[var(--slateBlue)] font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </motion.div>
      <div style={{ height: '50vh' }} />
    </>
  );
};

export default Hero;
