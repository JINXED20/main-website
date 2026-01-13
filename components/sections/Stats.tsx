'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from '@/hooks/useInView';
import { useCounter } from '@/hooks/useCounter';
import { STATS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Stats() {
  const t = useTranslations('stats');
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section className="relative z-10 bg-[var(--black-soft)] px-[60px] py-[120px] max-md:px-5 max-md:py-[80px]">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.1), transparent 70%)',
        }}
      />

      <motion.div
        ref={ref}
        className="relative grid grid-cols-4 gap-[30px] max-lg:grid-cols-2 max-md:grid-cols-1"
        variants={staggerContainer}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      >
        {STATS.map((stat, index) => (
          <StatItem
            key={stat.labelKey}
            stat={stat}
            label={t(stat.labelKey)}
            inView={inView}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
}

interface StatItemProps {
  stat: (typeof STATS)[number];
  label: string;
  inView: boolean;
  index: number;
}

function StatItem({ stat, label, inView, index }: StatItemProps) {
  const count = useCounter({
    end: stat.target,
    duration: 2000,
    start: inView,
    decimals: 'decimals' in stat ? stat.decimals : 0,
  });

  return (
    <motion.div
      className="group relative overflow-hidden rounded-[24px] border border-[var(--black-border)] bg-[var(--black-card)] px-[30px] py-[50px] text-center transition-all duration-[400ms] hover:-translate-y-[10px] hover:border-[rgba(0,255,136,0.4)] hover:shadow-[0_20px_60px_rgba(0,255,136,0.15)]"
      variants={fadeInUp}
      custom={index}
    >
      {/* Top Accent Line */}
      <div className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-cyan)] transition-transform duration-[400ms] group-hover:scale-x-100" />

      <div
        className="mb-[10px] text-[64px] font-[800] leading-none tracking-[-3px]"
        style={{
          background: 'linear-gradient(135deg, var(--white), var(--gray-light))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {'prefix' in stat && stat.prefix}
        {count}
        {'suffix' in stat && stat.suffix}
      </div>
      <div className="text-[14px] uppercase tracking-[2px] text-[var(--gray)]">
        {label}
      </div>
    </motion.div>
  );
}
