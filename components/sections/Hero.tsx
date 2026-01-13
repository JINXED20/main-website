'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button, Badge } from '@/components/ui';
import {
  AuroraBlobs,
  ParticleField,
  GradientBlob,
  BlobRings,
  FloatingPackage,
} from '@/components/animations';

export function Hero() {
  const t = useTranslations('hero');
  const [liveCount, setLiveCount] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-[60px] pb-[80px] pt-[140px] max-md:px-5 max-md:pb-[60px] max-md:pt-[120px]">
      {/* Background Effects */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'var(--gradient-hero-bg)' }}
      />

      {/* Animated Grid */}
      <div
        className="pattern-grid absolute inset-0 z-[2]"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 10%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 10%, transparent 60%)',
        }}
      />

      {/* Aurora Blobs */}
      <AuroraBlobs />

      {/* Glowing Orbs */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div
          className="absolute left-[10%] top-[15%] h-[250px] w-[250px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(0, 255, 136, 0.1), transparent 60%)',
            animation: 'orbFloat 25s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[25%] left-[20%] h-[180px] w-[180px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.08), transparent 60%)',
            animation: 'orbFloat 25s ease-in-out infinite',
            animationDelay: '-12s',
          }}
        />
      </div>

      {/* Particles */}
      <ParticleField />

      {/* Noise Overlay */}
      <div className="noise-overlay absolute inset-0 z-[5] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[650px] rtl:text-right">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <Badge pulse className="mb-8">
            {t('badge')}
          </Badge>
        </motion.div>

        {/* Headline */}
        <h1 className="mb-6 text-[80px] font-[800] leading-[1.02] tracking-[-4px] max-lg:text-[64px] max-md:text-[44px] max-md:tracking-[-2px] rtl:tracking-normal">
          {['line1', 'line2', 'line3'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${line === 'line3' ? 'gradient-text' : ''}`}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 2.7 + i * 0.15 }}
              >
                {t(line)}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          className="mb-10 max-w-[500px] text-[18px] leading-[1.8] text-[var(--gray-light)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.1 }}
        >
          {t('description')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 max-md:flex-col rtl:flex-row-reverse rtl:justify-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <Button href="#" size="large">
            {t('cta1')} →
          </Button>
          <Button href="#" variant="outline" size="large">
            {t('cta2')}
          </Button>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          className="mt-[50px] flex gap-[30px] border-t border-[var(--black-border)] pt-[30px] rtl:flex-row-reverse"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.3 }}
        >
          <LiveStat value={liveCount.toLocaleString()} label={t('stat1')} />
          <LiveStat value="99.99%" label={t('stat2')} />
        </motion.div>
      </div>

      {/* Hero Visual */}
      <motion.div
        className="absolute right-[5%] top-1/2 z-[5] h-[600px] w-[600px] -translate-y-1/2 max-lg:hidden rtl:left-[5%] rtl:right-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.8 }}
      >
        <GradientBlob />
        <BlobRings />
        <FloatingPackage />

        {/* Floating Icons */}
        <div
          className="absolute right-[20%] top-[15%]"
          style={{ animation: 'pinFloat 3s ease-in-out infinite' }}
        >
          <svg className="h-8 w-8 fill-[var(--accent)] drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
        <div
          className="absolute bottom-[25%] left-[15%]"
          style={{ animation: 'pinFloat 3s ease-in-out infinite 1s' }}
        >
          <svg className="h-7 w-7 fill-none stroke-[var(--accent-cyan)] drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

function LiveStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass flex items-center gap-2.5 rounded-full border border-[var(--black-border)] px-[18px] py-2.5 transition-all hover:-translate-y-0.5 hover:border-[rgba(0,255,136,0.3)] rtl:flex-row-reverse">
      <span className="relative">
        <span
          className="block h-2 w-2 rounded-full bg-[var(--accent)]"
          style={{ animation: 'pulse 2s infinite' }}
        />
        <span
          className="absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]"
          style={{ animation: 'statPing 2s infinite' }}
        />
      </span>
      <span className="text-[13px] text-[var(--gray)]">
        <strong className="font-mono font-semibold text-white">{value}</strong>{' '}
        {label}
      </span>
    </div>
  );
}
