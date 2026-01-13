'use client';

import { useEffect, useState } from 'react';

interface UseCounterOptions {
  target?: number;
  end?: number;
  duration?: number;
  decimals?: number;
  enabled?: boolean;
  start?: boolean;
}

export function useCounter({
  target,
  end,
  duration = 2000,
  decimals = 0,
  enabled = true,
  start,
}: UseCounterOptions): string {
  const finalTarget = target ?? end ?? 0;
  const isEnabled = start !== undefined ? start : enabled;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isEnabled) {
      setCount(0);
      return;
    }

    const startTime = performance.now();
    let animationFrame: number;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(finalTarget * easeOut);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [finalTarget, duration, isEnabled]);

  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();
}
