import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/motion/Reveal';
import { ArrowUpRight } from '@/components/ui/icons';

/** Pacman chewing a dotted rail — pure decoration */
function RailOrnament() {
  return (
    <svg viewBox="0 0 260 32" aria-hidden="true" className="h-7 w-[230px] rtl:-scale-x-100">
      <defs>
        <mask id="rail-mouth">
          <rect width="260" height="32" fill="#fff" />
          <polygon points="16,16 36,6 36,26" fill="#000" />
        </mask>
      </defs>
      <circle cx="16" cy="16" r="13" fill="#bbff00" mask="url(#rail-mouth)" />
      <circle cx="14" cy="7.5" r="2.6" fill="#000" />
      {[56, 88, 120, 152, 184, 216].map((x) => (
        <circle key={x} cx={x} cy="16" r="4" fill="#000" opacity=".85" />
      ))}
      <circle cx="248" cy="16" r="7" fill="#a550ff" />
    </svg>
  );
}

export async function Strategy() {
  const t = await getTranslations('strategy');

  return (
    <section className="wrap py-20 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <Reveal>
            <span className="mono-label text-muted">{t('label')}</span>
            <div className="mt-5">
              <RailOrnament />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-6 text-[clamp(40px,6.4vw,92px)]">
              {t('titleA')}
              <br />
              <span className="marker-lime">{t('titleB')}</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="max-w-[340px] lg:justify-self-end">
          <p className="font-medium leading-relaxed text-ink-soft">{t('copy')}</p>
          <a href="#platform" className="btn btn-ink inline-flex mt-7">
            {t('cta')}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
