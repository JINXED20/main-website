import { cn } from '@/lib/utils';
import type { SectionTagProps } from '@/types';

export function SectionTag({ children, className }: SectionTagProps) {
  return (
    <span
      className={cn(
        'mb-[20px] inline-block rounded-full bg-[rgba(0,255,136,0.1)] px-[16px] py-[8px] text-[12px] font-[600] uppercase tracking-[4px] text-[var(--accent)]',
        className
      )}
    >
      {children}
    </span>
  );
}
