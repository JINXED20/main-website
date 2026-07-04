'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Logo } from '@/components/ui/Logo';
import { ArrowUpRight, Close, Menu } from '@/components/ui/icons';
import { LanguageSwitcher } from './LanguageSwitcher';

const NAV_ITEMS = [
  { key: 'platform', href: '#platform' },
  { key: 'audience', href: '#audience' },
  { key: 'developers', href: '#api' },
  { key: 'pricing', href: '#pricing' },
  { key: 'faq', href: '#faq' },
] as const;

export function Topbar() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll while the mobile menu is open; close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-card/85 backdrop-blur-xl">
      <div className="wrap flex min-h-[76px] items-center justify-between gap-4">
        <a
          href="#top"
          aria-label={t('a11y.home')}
          className="flex items-center py-3 text-[27px]"
        >
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV_ITEMS.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="mono-label cursor-pointer py-2 text-ink/85 transition-opacity hover:text-ink hover:opacity-100"
                >
                  <span className="hover:marker-lime">{t(`nav.${key}`)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <a href="#api" className="btn btn-ink hidden md:inline-flex">
            {t('nav.cta')}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="grid h-12 w-12 cursor-pointer place-items-center border border-ink/20 transition-colors hover:bg-lime lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('a11y.menuClose') : t('a11y.menuOpen')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-ink/10 bg-card lg:hidden"
      >
        <nav aria-label="Mobile" className="wrap py-6">
          <ul className="flex flex-col">
            {NAV_ITEMS.map(({ key, href }) => (
              <li key={key} className="border-b border-line last:border-0">
                <a
                  href={href}
                  onClick={close}
                  className="display flex min-h-14 cursor-pointer items-center justify-between py-4 text-2xl transition-colors hover:text-purple"
                >
                  {t(`nav.${key}`)}
                  <ArrowUpRight className="h-5 w-5 flex-none" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a href="#api" onClick={close} className="btn btn-lime flex flex-1 justify-center">
              {t('nav.cta')}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <LanguageSwitcher className="inline-flex" />
          </div>
        </nav>
      </div>
    </header>
  );
}
