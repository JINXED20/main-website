'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { track } from '@vercel/analytics';
import { ArrowUpRight } from '@/components/ui/icons';
import { GOVERNORATES, whatsappUrl } from '@/lib/site';

type LeadType = 'merchant' | 'carrier';
type FieldName = 'name' | 'phone' | 'business' | 'city';
type FieldError = 'name' | 'phone' | 'phoneInvalid' | 'business' | 'city';
type Errors = Partial<Record<FieldName, FieldError>>;

const TYPES: readonly LeadType[] = ['merchant', 'carrier'];
const FIELD_ORDER: readonly FieldName[] = ['name', 'phone', 'business', 'city'];

const FIELD =
  'w-full min-h-13 border border-white/25 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 transition-colors focus:border-lime focus:outline-none aria-invalid:border-[#ff9d9d]';

// Literal colors: the native dropdown stays readable in light and dark themes
const OPTION = 'bg-white text-black';

/**
 * Arabic keyboards type ٠١٢ digits, and numbers pasted from contacts can carry
 * invisible direction marks and non-breaking spaces. Reduce all of it to plain text.
 */
function normalizePhone(value: string) {
  return value
    .replace(/\p{Cf}/gu, '')
    .replace(/\p{Zs}/gu, ' ')
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
    .trim();
}

function validateField(name: FieldName, raw: string): FieldError | undefined {
  if (name !== 'phone') return raw.trim() ? undefined : name;
  const phone = normalizePhone(raw);
  if (!phone) return 'phone';
  const digits = phone.replace(/\D/g, '').length;
  return /^[+0-9 ()-]{7,20}$/.test(phone) && digits >= 7 ? undefined : 'phoneInvalid';
}

/**
 * Lead form that delivers through WhatsApp: submitting opens a chat with the
 * details pre-filled. `#join` links preselect the carrier path.
 */
export function LeadForm() {
  const t = useTranslations('start');
  const id = useId();
  const [type, setType] = useState<LeadType>('merchant');
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const radios = useRef<Partial<Record<LeadType, HTMLButtonElement | null>>>({});

  function selectType(next: LeadType) {
    setType(next);
    setSentUrl(null);
  }

  useEffect(() => {
    const sync = () => {
      const next = window.location.hash === '#join' ? 'carrier' : window.location.hash === '#start' ? 'merchant' : null;
      if (next) selectType(next);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  function onRadioKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, current: LeadType) {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    // Two options: every arrow moves to the other one, in LTR and RTL alike
    const next =
      e.key === 'Home' ? TYPES[0] : e.key === 'End' ? TYPES[1] : current === 'merchant' ? 'carrier' : 'merchant';
    selectType(next);
    radios.current[next]?.focus();
  }

  // Errors appear on submit, then update as the visitor fixes each field
  function recheck(e: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>) {
    const field = e.currentTarget.name as FieldName;
    const value = e.currentTarget.value;
    // The retry link holds the submitted details, so an edit makes it stale
    setSentUrl(null);
    setErrors((prev) => (prev[field] ? { ...prev, [field]: validateField(field, value) } : prev));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: FieldName) => String(data.get(k) ?? '').trim();

    const found: Errors = {};
    for (const field of FIELD_ORDER) {
      const error = validateField(field, get(field));
      if (error) found[field] = error;
    }
    setErrors(found);

    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      setSentUrl(null);
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const city = get('city');
    const text = [
      t(`msg.${type}`),
      `${t('name')}: ${get('name')}`,
      `${t('phone')}: ${normalizePhone(get('phone'))}`,
      `${t(`business.${type}`)}: ${get('business')}`,
      `${t('city')}: ${t(`gov.${city}`)}`,
    ].join('\n');

    const url = whatsappUrl(text);
    track('lead_submit', { type });
    setSentUrl(url);
    window.open(url, '_blank', 'noopener');
  }

  const errorText = (field: FieldName) => {
    const error = errors[field];
    if (!error) return null;
    return error === 'business' ? t(`errors.business.${type}`) : t(`errors.${error}`);
  };

  const fieldProps = (field: FieldName) => ({
    id: `${id}-${field}`,
    name: field,
    required: true,
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${id}-${field}-error` : undefined,
    onInput: recheck,
    onChange: recheck,
  });

  const errorNode = (field: FieldName) => {
    const text = errorText(field);
    return text ? (
      <span id={`${id}-${field}-error`} role="alert" className="text-sm text-[#ff9d9d]">
        {text}
      </span>
    ) : null;
  };

  return (
    <div className="bg-ink p-6 text-white shadow-[12px_12px_0_var(--color-lime)] sm:p-8 rtl:shadow-[-12px_12px_0_var(--color-lime)]">
      <div role="radiogroup" aria-label={t('typeLabel')} className="grid grid-cols-2 border border-white/25">
        {TYPES.map((k) => (
          <button
            key={k}
            ref={(el) => {
              radios.current[k] = el;
            }}
            type="button"
            role="radio"
            aria-checked={type === k}
            tabIndex={type === k ? 0 : -1}
            onClick={() => selectType(k)}
            onKeyDown={(e) => onRadioKeyDown(e, k)}
            className={`mono-label min-h-12 cursor-pointer px-3 transition-colors ${
              type === k ? 'bg-lime text-ink' : 'text-white/70 hover:text-white'
            }`}
          >
            {t(`type.${k}`)}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} noValidate className="mt-6 grid items-start gap-4 sm:grid-cols-2">
        <label className="grid gap-2" htmlFor={`${id}-name`}>
          <span className="mono-label text-white/60">{t('name')}</span>
          <input {...fieldProps('name')} autoComplete="name" className={FIELD} />
          {errorNode('name')}
        </label>
        <label className="grid gap-2" htmlFor={`${id}-phone`}>
          <span className="mono-label text-white/60">{t('phone')}</span>
          <input
            {...fieldProps('phone')}
            type="tel"
            dir="ltr"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+963 9XX XXX XXX"
            className={`${FIELD} text-left`}
          />
          {errorNode('phone')}
        </label>
        <label className="grid gap-2" htmlFor={`${id}-business`}>
          <span className="mono-label text-white/60">{t(`business.${type}`)}</span>
          <input {...fieldProps('business')} autoComplete="organization" className={FIELD} />
          {errorNode('business')}
        </label>
        <label className="grid gap-2" htmlFor={`${id}-city`}>
          <span className="mono-label text-white/60">{t('city')}</span>
          <select {...fieldProps('city')} defaultValue="" className={`${FIELD} cursor-pointer`}>
            <option value="" disabled className={OPTION}>
              {t('cityPlaceholder')}
            </option>
            {GOVERNORATES.map((g) => (
              <option key={g} value={g} className={OPTION}>
                {t(`gov.${g}`)}
              </option>
            ))}
          </select>
          {errorNode('city')}
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
