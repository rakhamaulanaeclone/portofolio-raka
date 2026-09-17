'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Direction = 'up' | 'left' | 'right';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  threshold?: number;
  distance?: number;
  scale?: number;
  duration?: number;
};

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.18,
  distance = 24,
  scale = 0.96,
  duration = 560,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const isVisible = prefersReducedMotion || hasEntered;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updatePreference);
    } else {
      mediaQuery.addListener(updatePreference);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updatePreference);
      } else {
        mediaQuery.removeListener(updatePreference);
      }
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold]);

  const translateX = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
  const translateY = direction === 'up' ? distance : 0;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translate3d(0, 0, 0) scale(1)'
          : `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
        transitionProperty: 'opacity, transform',
        transitionDuration: prefersReducedMotion ? '1ms' : `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}