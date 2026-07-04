import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/motion/Reveal';

const KEYS = ['a1', 'a2', 'a3', 'a4'] as const;

export async function Audience() {
  const t = await getTranslations('audience');

  return (
    <section id="audience" className="bg-ink py-20 text-white lg:py-28">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display max-w-[13ch] text-[clamp(38px,5.6vw,84px)]">
            {t('headingA')} <span className="text-lime">{t('headingB')}</span>
          </h2>
          <span className="mono-label text-lime">{t('label')}</span>
        </Reveal>

        <div className="mt-14 grid border-y border-white/20 sm:grid-cols-2 xl:grid-cols-4">
          {KEYS.map((key, i) => (
            <Reveal
              key={key}
              delay={i * 0.08}
              className="group border-white/15 max-xl:border-b sm:odd:border-e xl:border-e xl:last:border-e-0 max-xl:[&:nth-last-child(-n+2)]:sm:border-b-0 max-sm:last:border-b-0"
            >
              <article className="flex h-full min-h-[280px] flex-col px-6 py-9 transition-colors duration-300 hover:bg-white/5">
                <span className="mono-label text-lime">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <h3 className="display mt-auto pt-16 text-[27px] transition-transform duration-300 group-hover:-translate-y-1">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  {t(`${key}.desc`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
