'use client';

import { useRef } from 'react';
import { useMousePosition } from '@/hooks';

export function MouseSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const position = useMousePosition(containerRef);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-[3] opacity-0 transition-opacity hover:opacity-100"
      style={{
        background: `radial-gradient(
          circle at ${position.x}% ${position.y}%,
          rgba(0, 255, 136, 0.06) 0%,
          transparent 35%
        )`,
      }}
    />
  );
}
