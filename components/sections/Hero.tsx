import type { CSSProperties } from 'react';
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowUpRight } from '@/components/ui/icons';
import { HeroTrack } from './HeroTrack';

/** Stagger delay for the CSS entrance (.hero-rise in globals.css) */
const at = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties;

export async function Hero() {
  const t = await getTranslations();
  const rtl = (await getLocale()) === 'ar';

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 88% 6%, rgb(187 255 0 / 0.16), transparent 22rem), radial-gradient(circle at 6% 96%, rgb(165 80 255 / 0.12), transparent 24rem)',
        }}
      />

      {/* Fits in one viewport on desktop: headline scales with vw AND vh */}
      <div className="wrap relative grid grid-cols-[minmax(0,1fr)] gap-8 py-10 lg:min-h-[calc(100dvh-76px)] lg:grid-cols-[46%_54%] lg:items-center lg:py-6">
        <div className="relative z-10 flex flex-col items-start">
          {/* Entrance is pure CSS: plays at first paint, before (or without) JS */}
          <span
            style={{ ...at(0), '--rise': '12px' } as CSSProperties}
            className="hero-rise mono-label inline-flex items-center gap-2.5 bg-lime-hot px-3.5 py-2 text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
            {t('hero.eyebrow')}
          </span>

          <h1 className="display mt-6 text-[clamp(48px,min(8.6vw,8.5vh),124px)]">
            <span style={at(0.1)} className="hero-rise block">
              {t('hero.line1')}
            </span>
            <span style={at(0.19)} className="hero-rise block">
              {t('hero.line2')}
            </span>
            <span style={at(0.28)} className="hero-rise block">
              <span className="marker-lime">{t('hero.line3')}</span>
            </span>
          </h1>

          <p
            style={{ ...at(0.45), '--rise': '0px' } as CSSProperties}
            className="hero-rise mt-6 max-w-[400px] text-[17px] font-medium leading-relaxed text-ink-soft"
          >
            {t('hero.sub')}
          </p>

          <div
            style={{ ...at(0.6), '--rise': '0px' } as CSSProperties}
            className="hero-rise mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#start" data-cta="hero_merchant" className="btn btn-ink inline-flex">
              {t('hero.cta1')}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#join"
              data-cta="hero_carrier"
              className="mono-label group inline-flex min-h-12 cursor-pointer items-center gap-2 py-2"
            >
              <span className="marker-lime">{t('hero.cta2')}</span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-lime transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>

        <HeroTrack orbitLabel={t('hero.orbit')} orderLabel={t('hero.order')} rtl={rtl} />
      </div>
    </section>
  );
}
