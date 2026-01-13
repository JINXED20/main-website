import { cn } from '@/lib/utils';
import type { BadgeProps } from '@/types';

export function Badge({ children, pulse = false, className }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full border border-[rgba(0,255,136,0.25)] bg-[rgba(0,255,136,0.08)] px-5 py-2.5 text-[13px] text-[var(--accent)]',
        'rtl:flex-row-reverse',
        className
      )}
    >
      {pulse && (
        <span className="relative">
          <span
            className="block h-2 w-2 rounded-full bg-[var(--accent)]"
            style={{ animation: 'pulse 2s infinite' }}
          />
          <span
            className="absolute left-1/2 top-1/2 block h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]"
            style={{ animation: 'badgePing 2s infinite' }}
          />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
