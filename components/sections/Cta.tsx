'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui';

export function Cta() {
  const t = useTranslations('cta');
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section className="relative z-10 overflow-hidden bg-[var(--black)] px-[60px] py-[160px] text-center max-md:px-5 max-md:py-[80px]">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.15), transparent 60%)',
        }}
      />

      <motion.div
        ref={ref}
        className="relative z-[2]"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-[24px] text-[64px] font-[800] leading-[1.1] tracking-[-3px] max-lg:text-[48px] max-md:text-[32px]">
          {t('title')}
        </h2>
        <p className="mx-auto mb-[40px] max-w-[500px] text-[18px] leading-[1.7] text-[var(--gray-light)]">
          {t('subtitle')}
        </p>

        <div className="flex justify-center gap-[16px] max-md:flex-col rtl:flex-row-reverse">
          <Button href="#" size="large">
            {t('cta1')} →
          </Button>
          <Button href="#" variant="outline" size="large">
            {t('cta2')}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
