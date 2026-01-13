'use client';

import { useScrollProgress } from '@/hooks';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed left-0 top-0 z-[9999] h-[3px] transition-[width] duration-100"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, var(--accent), var(--accent-cyan))',
      }}
    />
  );
}
