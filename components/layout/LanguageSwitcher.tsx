'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations();

  const target = locale === 'en' ? 'ar' : 'en';

  return (
    <Link
      href={pathname}
      locale={target}
      aria-label={t('a11y.langSwitch')}
      className={`mono-label min-h-11 cursor-pointer items-center gap-2 border border-ink/20 px-4 transition-colors duration-200 hover:border-ink hover:bg-lime ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-purple" aria-hidden="true" />
      {t('lang.label')}
    </Link>
  );
}
