import { getTranslations } from 'next-intl/server';
import { ArrowUpRight } from '@/components/ui/icons';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <section className="wrap flex min-h-[70dvh] flex-col items-start justify-center py-20">
      <span className="mono-label bg-lime-hot px-3.5 py-2 text-ink">{t('code')}</span>
      <h1 className="display mt-6 max-w-[14ch] text-[clamp(40px,7vw,96px)]">{t('title')}</h1>
      <p className="mt-6 max-w-[46ch] font-medium leading-relaxed text-muted">{t('desc')}</p>
      <a href="#top" className="btn btn-ink inline-flex mt-9">
        {t('cta')}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </section>
  );
}
