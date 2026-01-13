'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { CardProps } from '@/types';

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-[28px] border border-[var(--black-border)] bg-[var(--black-card)] p-[45px]',
        'transition-all duration-500',
        hover && [
          'hover:-translate-y-2 hover:border-[rgba(0,255,136,0.5)]',
          'hover:shadow-[0_30px_60px_rgba(0,255,136,0.15)]',
        ],
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
