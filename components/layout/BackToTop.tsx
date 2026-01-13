'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-10 right-10 z-[1000] flex h-[50px] w-[50px] items-center justify-center rounded-full transition-all duration-300',
        'bg-[var(--accent)] shadow-[0_10px_30px_rgba(0,255,136,0.3)]',
        'hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,255,136,0.4)]',
        isVisible
          ? 'visible translate-y-0 opacity-100'
          : 'invisible translate-y-5 opacity-0'
      )}
      aria-label="Back to top"
    >
      <svg
        className="h-6 w-6 stroke-black"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2.5"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
