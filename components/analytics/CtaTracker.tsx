'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';

/** One delegated listener: any click on an element with data-cta sends a `cta_click` event. */
export function CtaTracker() {
  const locale = useLocale();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-cta]');
      if (el?.dataset.cta) track('cta_click', { cta: el.dataset.cta, locale });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [locale]);

  return null;
}
