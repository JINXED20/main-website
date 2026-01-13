'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { AccordionItemProps } from '@/types';

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border bg-[var(--black-card)] transition-colors',
        isOpen
          ? 'border-[var(--accent)]'
          : 'border-[var(--black-border)] hover:border-[rgba(0,255,136,0.3)]'
      )}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className={cn(
          'flex w-full items-center justify-between p-6 text-left text-base font-semibold transition-colors',
          'rtl:flex-row-reverse rtl:text-right',
          isOpen && 'text-[var(--accent)]'
        )}
      >
        <span>{question}</span>
        <svg
          className={cn(
            'h-6 w-6 shrink-0 stroke-[var(--gray)] transition-all duration-300',
            isOpen && 'rotate-45 stroke-[var(--accent)]'
          )}
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="px-6 pb-6 text-[15px] leading-relaxed text-[var(--gray-light)]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
