'use client';

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  direction?: 'left' | 'right';
}

export function Marquee({
  children,
  speed = 30,
  pauseOnHover = true,
  className,
  direction = 'left',
}: MarqueeProps) {
  const animationDirection = direction === 'left' ? 'normal' : 'reverse';

  return (
    <div
      className={cn(
        'group flex overflow-hidden',
        pauseOnHover && 'hover:[&>*]:pause',
        className
      )}
    >
      <div
        className="flex shrink-0"
        style={{
          animation: `marqueeClients ${speed}s linear infinite`,
          animationDirection,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
