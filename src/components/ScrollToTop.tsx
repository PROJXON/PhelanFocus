'use client';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useThrottledScroll } from '@/hooks/useThrottledScroll';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useThrottledScroll((currentScrollY) => {
    const shouldShow =
      (currentScrollY > 300 && currentScrollY > lastScrollY.current) ||
      currentScrollY + window.innerHeight >= document.body.offsetHeight - 1;
    lastScrollY.current = currentScrollY;
    setIsVisible((prev) => (prev === shouldShow ? prev : shouldShow));
  });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 z-[33] right-6 bg-[var(--slateBlue)] text-white p-4 rounded-full shadow-lg flex items-center justify-center text-2xl transition-opacity duration-300 hover:bg-[var(--gold)] hover:text-[var(--slateBlue)] ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTopButton;
