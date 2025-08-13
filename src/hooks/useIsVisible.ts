import { useState, useEffect, RefObject } from 'react';

export default function useIsVisible(ref: RefObject<HTMLDivElement | null>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, [ref]);

  return isVisible;
}
