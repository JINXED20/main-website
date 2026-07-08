import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/motion/Reveal';
import { GlyphApi, GlyphStore, GlyphTrack, GlyphTruck } from '@/components/ui/icons';

const CARDS = [
  {
    key: 'f1',
    Glyph: GlyphApi,
    surface: 'bg-ink text-white',
    glyph: 'text-lime',
    tag: 'text-lime',
    desc: 'text-white/70',
    shadow: 'hover:shadow-[8px_8px_0_var(--color-lime)]',
  },
  {
    key: 'f2',
    Glyph: GlyphTruck,
    surface: 'bg-lime text-ink',
    glyph: 'text-ink',
    tag: 'text-ink/70',
    desc: 'text-ink/75',
    shadow: 'hover:shadow-[8px_8px_0_var(--color-ink)]',
  },
  {
    key: 'f3',
    Glyph: GlyphStore,
    surface: 'bg-ink-soft text-white',
    glyph: 'text-purple',
    tag: 'text-purple',
    desc: 'text-white/70',
    shadow: 'hover:shadow-[8px_8px_0_var(--color-purple)]',
  },
  {
    key: 'f4',
    Glyph: GlyphTrack,
    surface: 'bg-card text-ink border border-ink/15',
    glyph: 'text-purple',
    tag: 'text-muted',
    desc: 'text-muted',
    shadow: 'hover:shadow-[8px_8px_0_var(--color-lime)]',
  },
] as const;

export async function Flows() {
  const t = await getTranslations('flows');

  return (
    <section id="platform" className="wrap py-16 lg:py-24">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="display text-[clamp(32px,4vw,52px)]">
          {t('heading')}
          <span className="ms-2 inline-block h-3.5 w-3.5 rounded-full bg-lime align-middle" aria-hidden="true" />
        </h2>
        <span className="mono-label text-muted">{t('label')}</span>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {CARDS.map(({ key, Glyph, surface, glyph, tag, desc, shadow }, i) => (
          <Reveal key={key} delay={i * 0.08} className="h-full">
            <article
              className={`group flex h-full min-h-[280px] flex-col p-7 transition-all duration-300 ease-out hover:-translate-y-1 ${surface} ${shadow}`}
            >
              <Glyph className={`h-12 w-12 ${glyph} transition-transform duration-300 group-hover:scale-110`} />
              <h3 className="display mt-auto pt-12 text-[26px]">{t(`${key}.title`)}</h3>
              <p className={`mono-label mt-2 ${tag}`}>{t(`${key}.tag`)}</p>
              <p className={`mt-4 text-sm leading-relaxed ${desc}`}>{t(`${key}.desc`)}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
