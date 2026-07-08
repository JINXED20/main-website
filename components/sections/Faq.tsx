import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/motion/Reveal';
import { Plus } from '@/components/ui/icons';

const ITEMS = [1, 2, 3, 4, 5] as const;

export async function Faq() {
  const t = await getTranslations('faq');

  return (
    <section id="faq" className="border-t border-line bg-paper py-20 lg:py-24">
      <div className="wrap">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-[clamp(32px,4vw,48px)]">{t('heading')}</h2>
          <span className="mono-label text-muted">{t('label')}</span>
        </Reveal>

        <div className="border-t-2 border-ink">
          {ITEMS.map((n) => (
            <Reveal key={n} delay={n * 0.04}>
              <details className="faq-item group border-b border-line">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-6">
                  <span className="max-w-[52ch] text-lg font-bold leading-snug md:text-xl">
                    {t(`q${n}`)}
                  </span>
                  <span className="grid h-10 w-10 flex-none place-items-center border border-ink/25 transition-colors group-open:bg-lime group-hover:bg-lime">
                    <Plus className="faq-plus h-4 w-4" />
                  </span>
                </summary>
                <p className="max-w-[68ch] pb-7 leading-relaxed text-muted">{t(`a${n}`)}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
