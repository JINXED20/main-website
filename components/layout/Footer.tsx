import { getTranslations } from 'next-intl/server';
import { Logo } from '@/components/ui/Logo';
import { ArrowUpRight } from '@/components/ui/icons';

const FOOTER_LINKS = [
  { key: 'platform', href: '#platform' },
  { key: 'audience', href: '#audience' },
  { key: 'developers', href: '#api' },
  { key: 'pricing', href: '#pricing' },
  { key: 'faq', href: '#faq' },
] as const;

export async function Footer() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink text-white">
      {/* CTA band */}
      <div className="wrap grid gap-10 py-20 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:py-28">
        <h2 className="display max-w-[11ch] text-[clamp(44px,7vw,96px)]">
          {t('footer.big')}
          <span className="text-purple">.</span>
        </h2>
        <div className="flex flex-col items-start gap-6">
          <a href="#api" className="btn btn-lime inline-flex">
            {t('nav.cta')}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${t('footer.ctaEmail')}`}
            dir="ltr"
            className="mono-label cursor-pointer text-base text-white/80 transition-colors hover:text-lime"
          >
            {t('footer.ctaEmail')}
          </a>
        </div>
      </div>

      {/* Meta row */}
      <div className="border-t border-white/15">
        <div className="wrap grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_auto]">
          <div className="flex flex-col items-start gap-4">
            <Logo inverted className="text-[26px]" />
            <p className="text-sm leading-relaxed text-white/60">{t('footer.tagline')}</p>
          </div>

          <div>
            <h3 className="mono-label mb-4 text-lime">{t('footer.contactLabel')}</h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a
                  href={`mailto:${t('footer.ctaEmail')}`}
                  dir="ltr"
                  className="cursor-pointer transition-colors hover:text-lime"
                >
                  {t('footer.ctaEmail')}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t('footer.phone').replace(/\s/g, '')}`}
                  dir="ltr"
                  className="inline-block cursor-pointer tabular-nums transition-colors hover:text-lime"
                >
                  {t('footer.phone')}
                </a>
              </li>
              <li>{t('footer.city')}</li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label mb-4 text-lime">{t('footer.linksLabel')}</h3>
            <ul className="space-y-2 text-sm text-white/75">
              {FOOTER_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <a href={href} className="cursor-pointer transition-colors hover:text-lime">
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#top"
            aria-label={t('footer.backToTop')}
            className="arrow-chip self-start"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <div className="wrap flex flex-wrap items-center justify-between gap-3 border-t border-white/15 py-6">
          <p className="text-xs text-white/50">
            © {year} Ordex. {t('footer.rights')}
          </p>
          <span className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-lime" />
            <span className="h-2 w-2 rounded-full bg-purple" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
          </span>
        </div>
      </div>
    </footer>
  );
}
