import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/motion/Reveal';
import { LeadForm } from '@/components/forms/LeadForm';
import { ArrowUpRight } from '@/components/ui/icons';
import { whatsappUrl } from '@/lib/site';

/** Conversion section: merchants start shipping, carriers join. Leads go to WhatsApp. */
export async function Start() {
  const t = await getTranslations('start');

  return (
    <section id="start" className="relative border-t border-line py-20 lg:py-28">
      {/* `#join` lands here too and preselects the carrier path */}
      <span id="join" aria-hidden="true" className="absolute top-0 scroll-mt-24" />
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16">
        <Reveal>
          <span className="mono-label text-muted">{t('label')}</span>
          <h2 className="display mt-4 text-[clamp(40px,5.4vw,80px)]">
            {t('headingA')}
            <br />
            <span className="marker-lime">{t('headingB')}</span>
          </h2>
          <p className="mt-6 max-w-[420px] font-medium leading-relaxed text-ink-soft">{t('sub')}</p>
          <a
            href={whatsappUrl(t('waHello'))}
            target="_blank"
            rel="noopener"
            data-cta="whatsapp_direct"
            className="mono-label group mt-8 inline-flex min-h-12 cursor-pointer items-center gap-2 py-2"
          >
            <span className="marker-lime">{t('whatsappDirect')}</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-lime transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
