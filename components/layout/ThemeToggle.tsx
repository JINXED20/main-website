'use client';

import { useSyncExternalStore } from 'react';
import { useTranslations } from 'next-intl';

/** Runs in <head> before paint: saved choice, else the OS setting. */
export const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}})();`;

// The <html class="dark"> flag is the single source of truth
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
};
const isDark = () => document.documentElement.classList.contains('dark');

export function ThemeToggle({ className = '' }: { className?: string }) {
  const t = useTranslations('a11y');
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  const toggle = () => {
    const next = !isDark();
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t(dark ? 'themeLight' : 'themeDark')}
      aria-pressed={dark}
      className={`grid h-11 w-11 cursor-pointer place-items-center border border-ink/20 transition-colors duration-200 hover:border-ink hover:bg-lime ${className}`}
    >
      {/* Both icons render; CSS shows the right one so there's no flash before hydration */}
      <svg viewBox="0 0 24 24" className="theme-icon-moon h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg viewBox="0 0 24 24" className="theme-icon-sun h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
