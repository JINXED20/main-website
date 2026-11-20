'use client';

import { useEffect, useId, useState } from 'react';
import { useTranslations } from 'next-intl';
import { track } from '@vercel/analytics';
import { ArrowUpRight } from '@/components/ui/icons';
import { GOVERNORATES, whatsappUrl } from '@/lib/site';

type LeadType = 'merchant' | 'carrier';

const FIELD =
  'w-full min-h-13 border border-white/25 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 transition-colors focus:border-lime focus:outline-none';

/**
 * Lead form that delivers through WhatsApp: submitting opens a chat with the
 * details pre-filled. `#join` links preselect the carrier path.
 */
export function LeadForm() {
  const t = useTranslations('start');
  const id = useId();
  const [type, setType] = useState<LeadType>('merchant');
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      if (window.location.hash === '#join') setType('carrier');
      else if (window.location.hash === '#start') setType('merchant');
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? '').trim();
    const city = get('city');

    const text = [
      t(`msg.${type}`),
      `${t('name')}: ${get('name')}`,
      `${t('phone')}: ${get('phone')}`,
      `${t(`business.${type}`)}: ${get('business')}`,
      `${t('city')}: ${city ? t(`gov.${city}`) : '-'}`,
    ].join('\n');

    const url = whatsappUrl(text);
    track('lead_submit', { type });
    setSentUrl(url);
    window.open(url, '_blank', 'noopener');
  }

  return (
    <div className="bg-ink p-6 text-white shadow-[12px_12px_0_var(--color-lime)] sm:p-8 rtl:shadow-[-12px_12px_0_var(--color-lime)]">
      <div role="radiogroup" aria-label={t('typeLabel')} className="grid grid-cols-2 border border-white/25">
        {(['merchant', 'carrier'] as const).map((k) => (
          <button
            key={k}
            type="button"
            role="radio"
            aria-checked={type === k}
            onClick={() => {
              setType(k);
              setSentUrl(null);
            }}
            className={`mono-label min-h-12 cursor-pointer px-3 transition-colors ${
              type === k ? 'bg-lime text-ink' : 'text-white/70 hover:text-white'
            }`}
          >
            {t(`type.${k}`)}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2" htmlFor={`${id}-name`}>
          <span className="mono-label text-white/60">{t('name')}</span>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={FIELD} />
        </label>
        <label className="grid gap-2" htmlFor={`${id}-phone`}>
          <span className="mono-label text-white/60">{t('phone')}</span>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            dir="ltr"
            inputMode="tel"
            autoComplete="tel"
            pattern="[+0-9 ()-]{7,20}"
            placeholder="+963 9XX XXX XXX"
            className={`${FIELD} text-left`}
          />
        </label>
        <label className="grid gap-2" htmlFor={`${id}-business`}>
          <span className="mono-label text-white/60">{t(`business.${type}`)}</span>
          <input
            id={`${id}-business`}
            name="business"
            required
            autoComplete="organization"
            className={FIELD}
          />
        </label>
        <label className="grid gap-2" htmlFor={`${id}-city`}>
          <span className="mono-label text-white/60">{t('city')}</span>
          <select id={`${id}-city`} name="city" required defaultValue="" className={`${FIELD} cursor-pointer`}>
            <option value="" disabled className="text-ink">
              {t('cityPlaceholder')}
            </option>
            {GOVERNORATES.map((g) => (
              <option key={g} value={g} className="text-ink">
                {t(`gov.${g}`)}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4 sm:col-span-2">
          <button type="submit" className="btn btn-lime inline-flex">
            {t(`submit.${type}`)}
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <span className="text-sm text-white/55">{t('note')}</span>
        </div>

        {sentUrl && (
          <p role="status" className="border-s-2 border-lime ps-4 text-sm text-white/80 sm:col-span-2">
            {t('sent')}{' '}
            <a href={sentUrl} target="_blank" rel="noopener" className="text-lime underline underline-offset-4">
              {t('sentRetry')}
            </a>
          </p>
        )}
      </form>
    </div>
  );
}
