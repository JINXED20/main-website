'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      children,
      href,
      onClick,
      className,
      fullWidth = false,
      type = 'button',
      disabled = false,
    },
    ref
  ) => {
    const baseStyles = cn(
      'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[10px] font-semibold cursor-pointer transition-all duration-300',
      size === 'default' && 'px-6 py-3 text-[14px]',
      size === 'large' && 'px-9 py-[18px] text-[16px]',
      fullWidth && 'w-full',
      disabled && 'pointer-events-none opacity-50',
      'rtl:flex-row-reverse'
    );

    const variantStyles = {
      primary: cn(
        'border-none bg-gradient-to-br from-[var(--accent)] to-[#00cc6a] text-black',
        'shadow-[0_0_20px_rgba(0,255,136,0.25)]',
        'hover:-translate-y-[3px] hover:shadow-[0_0_40px_rgba(0,255,136,0.4)]',
        // Shimmer effect
        'before:absolute before:left-[-100%] before:top-0 before:h-full before:w-full',
        'before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent',
        'before:transition-[left] before:duration-500 hover:before:left-full'
      ),
      outline: cn(
        'border border-[var(--black-border)] bg-transparent text-white',
        'hover:border-[var(--accent)] hover:text-[var(--accent)]'
      ),
    };

    const combinedStyles = cn(baseStyles, variantStyles[variant], className);

    if (href) {
      return (
        <motion.div whileTap={{ scale: 0.98 }}>
          <Link
            href={href}
            className={combinedStyles}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {children}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={combinedStyles}
        ref={ref as React.Ref<HTMLButtonElement>}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
