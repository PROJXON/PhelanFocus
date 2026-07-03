'use client';
import { useEffect, useRef } from 'react';

// Runs onScroll at most once per animation frame, always with the latest
// scrollY, regardless of how many scroll events fire in between.
export function useThrottledScroll(onScroll: (scrollY: number) => void) {
  const callback = useRef(onScroll);
  callback.current = onScroll;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        callback.current(window.scrollY);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
