'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from '@/hooks/useInView';
import { SectionTag } from '@/components/ui';
import { INTEGRATIONS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Integrations() {
  const t = useTranslations('integrations');
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="integrations"
      className="relative z-10 bg-[var(--black-soft)] px-[60px] py-[160px] text-center max-md:px-5 max-md:py-[80px]"
    >
      {/* Header */}
      <motion.div
        className="mb-[60px]"
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

      {/* Integration Grid */}
      <motion.div
        ref={ref}
        className="mx-auto grid max-w-[1000px] grid-cols-6 gap-[20px] max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2"
        variants={staggerContainer}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      >
        {INTEGRATIONS.map((integration, index) => (
          <motion.div
            key={integration.name}
            variants={fadeInUp}
            custom={index}
            className="group flex cursor-pointer flex-col items-center justify-center gap-[15px] rounded-[20px] border border-[var(--black-border)] bg-[var(--black-card)] p-[30px] transition-all duration-[400ms] hover:-translate-y-[5px] hover:border-[var(--accent)] hover:shadow-[0_15px_40px_rgba(0,255,136,0.1)]"
          >
            <span className="text-[40px] text-[var(--gray)] transition-colors duration-300 group-hover:text-white">
              {integration.icon}
            </span>
            <span className="text-[12px] font-[500] text-[var(--gray)] transition-colors duration-300 group-hover:text-white">
              {integration.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
