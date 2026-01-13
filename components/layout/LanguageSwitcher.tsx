'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: 'en' | 'ar') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="group relative">
      {/* Toggle Button */}
      <button className="flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium text-[var(--gray-light)] transition-colors hover:text-white">
        <span>{locale.toUpperCase()}</span>
        <svg
          className="h-3.5 w-3.5 stroke-current transition-transform group-hover:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          'absolute right-0 top-[calc(100%+8px)] z-[100] min-w-[120px] rounded-[10px] border border-[var(--black-border)] bg-[var(--black-card)] p-1.5',
          'invisible translate-y-[-10px] opacity-0 transition-all',
          'group-hover:visible group-hover:translate-y-0 group-hover:opacity-100',
          'rtl:left-0 rtl:right-auto'
        )}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={cn(
              'flex w-full items-center rounded-md px-3.5 py-2.5 text-[13px] transition-colors',
              locale === lang.code
                ? 'text-[var(--accent)]'
                : 'text-[var(--gray-light)] hover:bg-white/5 hover:text-white'
            )}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
