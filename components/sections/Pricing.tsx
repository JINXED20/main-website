import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/motion/Reveal';
import { ArrowUpRight } from '@/components/ui/icons';

const FEATURE_KEYS = ['1', '2', '3', '4'] as const;

export async function Pricing() {
  const t = await getTranslations('pricing');

  const tiers = [
    {
      key: 't1',
      featured: false,
      priced: true,
      btn: 'btn inline-flex border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
    },
    {
      key: 't2',
      featured: true,
      priced: true,
      btn: 'btn btn-ink inline-flex',
    },
    {
      key: 't3',
      featured: false,
      priced: false,
      btn: 'btn inline-flex border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
    },
  ] as const;

  return (
    <section id="pricing" className="wrap py-16 lg:py-24">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <h2 className="display text-[clamp(34px,4.4vw,56px)]">
          {t('headingA')}
          <br />
          <span className="marker-lime">{t('headingB')}</span>
        </h2>
        <span className="mono-label text-muted">{t('label')}</span>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-3">
        {tiers.map(({ key, featured, priced, btn }, i) => (
          <Reveal key={key} delay={i * 0.08} className="h-full">
            <article
              className={`relative flex h-full min-h-[420px] flex-col border-2 border-ink p-8 transition-transform duration-300 hover:-translate-y-1 ${
                featured ? 'bg-lime lg:-translate-y-2 lg:hover:-translate-y-3' : 'bg-card'
              }`}
            >
              {featured && (
                <span className="mono-label absolute -top-4 start-6 border-2 border-ink bg-ink px-3 py-1.5 text-lime">
                  {t('featured')}
                </span>
              )}

              <span className="mono-label text-ink/70">{t(`${key}.tier`)}</span>
              <h3 className="display mt-3 text-[30px]">{t(`${key}.title`)}</h3>

              <div className="mt-7 flex items-baseline gap-2">
                {priced ? (
                  <>
                    <span dir="ltr" className="text-5xl font-black tracking-tight tabular-nums">
                      {t(`${key}.price`)}
                    </span>
                    <span className="mono-label text-ink/60">{t('perDelivery')}</span>
                  </>
                ) : (
                  <>
                    <span className="text-5xl font-black tracking-tight">{t('custom')}</span>
                    <span className="mono-label text-ink/60">{t('quote')}</span>
                  </>
                )}
              </div>

              <ul className="mt-7 space-y-2.5">
                {FEATURE_KEYS.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm font-medium">
                    <ArrowUpRight
                      className={`mt-0.5 h-3.5 w-3.5 flex-none ${featured ? 'text-ink' : 'text-purple'}`}
                    />
                    {t(`${key}.features.${f}`)}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`${btn} mt-auto w-fit`}>
                {t(`${key}.cta`)}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
