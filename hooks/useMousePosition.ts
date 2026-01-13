'use client';

import { useEffect, useState, type RefObject } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(
  containerRef?: RefObject<HTMLElement | null>
): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      } else {
        setPosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };

    const target = containerRef?.current ?? window;
    target.addEventListener('mousemove', handleMouseMove as EventListener);

    return () => {
      target.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, [containerRef]);

  return position;
}
