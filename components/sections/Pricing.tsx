'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from '@/hooks/useInView';
import { SectionTag, Button } from '@/components/ui';
import { PRICING_PLANS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Pricing() {
  const t = useTranslations('pricing');
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="pricing"
      className="relative z-10 bg-[var(--black-soft)] px-[60px] py-[160px] max-md:px-5 max-md:py-[80px]"
    >
      {/* Header */}
      <motion.div
        className="mb-[80px] text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTag>{t('tag')}</SectionTag>
        <h2 className="mb-[20px] text-[52px] font-[800] tracking-[-3px] max-lg:text-[40px] max-md:text-[28px]">
          {t('title')}
        </h2>
        <p className="mx-auto max-w-[600px] text-[18px] leading-[1.7] text-[var(--gray-light)]">
          {t('subtitle')}
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        ref={ref}
        className="mx-auto grid max-w-[1200px] grid-cols-3 gap-[30px] max-lg:max-w-[450px] max-lg:grid-cols-1"
        variants={staggerContainer}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      >
        {PRICING_PLANS.map((plan, index) => (
          <motion.div key={plan.nameKey} variants={fadeInUp} custom={index}>
            <PricingCard plan={plan} t={t} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

interface PricingCardProps {
  plan: (typeof PRICING_PLANS)[number];
  t: ReturnType<typeof useTranslations>;
}

function PricingCard({ plan, t }: PricingCardProps) {
  const isFeatured = plan.featured;

  return (
    <div
      className={`relative flex flex-col rounded-[28px] border p-[50px_40px] transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[0_30px_60px_rgba(0,255,136,0.1)] max-lg:p-[40px_30px] ${
        isFeatured
          ? 'scale-105 border-[var(--accent)] bg-gradient-to-b from-[rgba(0,255,136,0.1)] to-[var(--black-card)] max-lg:scale-100'
          : 'border-[var(--black-border)] bg-[var(--black-card)]'
      }`}
      style={isFeatured ? {} : { transition: 'all 0.5s' }}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] px-[20px] py-[8px] text-[11px] font-[700] uppercase text-black">
            {t('popular')}
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className="mb-[10px] text-[20px] font-[600]">{t(`plans.${plan.nameKey}.name`)}</h3>

      {/* Price */}
      <div className="mb-[8px]">
        {'price' in plan && plan.price ? (
          <>
            <span className="text-[56px] font-[800] tracking-[-2px]">{plan.price}</span>
            <span className="text-[16px] font-[400] text-[var(--gray)]"> / {t('month')}</span>
          </>
        ) : (
          <span className="text-[56px] font-[800] tracking-[-2px]">{t(`plans.${plan.nameKey}.price`)}</span>
        )}
      </div>

      {/* Description */}
      <p className="mb-[35px] border-b border-[var(--black-border)] pb-[35px] text-[14px] text-[var(--gray)]">
        {t(`plans.${plan.nameKey}.description`)}
      </p>

      {/* Features */}
      <ul className="mb-[35px] flex-1 space-y-[18px]">
        {plan.features.map((_, i) => (
          <li key={i} className="flex items-center gap-[14px] text-[14px] text-[var(--gray-light)] rtl:flex-row-reverse">
            <span className="text-[16px] font-bold text-[var(--accent)]">✓</span>
            {t(`plans.${plan.nameKey}.features.${i}`)}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button href="#" variant={plan.variant} fullWidth className="justify-center">
        {t(`plans.${plan.nameKey}.cta`)}
      </Button>
    </div>
  );
}
