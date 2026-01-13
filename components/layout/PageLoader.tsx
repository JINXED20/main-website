'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 15;
        const newProgress = prev + increment;

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 300);
          return 100;
        }

        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black transition-all duration-500',
        isLoaded && 'pointer-events-none opacity-0'
      )}
    >
      {/* Logo */}
      <div className="mb-10 flex items-center gap-4 text-5xl font-black tracking-tight">
        <div
          className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl text-3xl"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent-cyan))',
            animation: 'loaderPulse 1.5s ease-in-out infinite',
          }}
        >
          ◈
        </div>
        <span>ORDEX</span>
      </div>

      {/* Progress Bar */}
      <div className="h-[3px] w-[200px] overflow-hidden rounded-sm bg-[var(--black-border)]">
        <div
          className="h-full rounded-sm transition-all duration-300"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--accent), var(--accent-cyan))',
          }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-5 font-mono text-sm text-[var(--gray)]">
        {Math.floor(progress)}%
      </div>
    </div>
  );
}
