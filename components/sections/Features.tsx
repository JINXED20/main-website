'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from '@/hooks/useInView';
import { SectionTag } from '@/components/ui';
import { FEATURES } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Features() {
  const t = useTranslations('features');
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="features"
      className="relative z-10 overflow-hidden bg-[var(--black)] px-[60px] py-[160px] max-md:px-5 max-md:py-[80px]"
    >
      {/* Rotating Circle Background Right */}
      <div
        className="pointer-events-none absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full border border-[rgba(0,255,136,0.1)]"
        style={{ animation: 'rotateCircle 30s linear infinite' }}
      />
      {/* Rotating Circle Background Left */}
      <div
        className="pointer-events-none absolute bottom-[10%] left-[-150px] h-[400px] w-[400px] rounded-full border border-[rgba(0,212,255,0.1)]"
        style={{ animation: 'rotateCircle 25s linear infinite reverse' }}
      />

      {/* Header */}
      <motion.div
        className="relative z-[2] mb-[80px]"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTag>{t('tag')}</SectionTag>
        <h2 className="max-w-[700px] text-[52px] font-[300] leading-[1.3] text-[var(--gray)] max-lg:text-[40px] max-md:text-[28px]">
          <strong className="font-[800] text-white">{t('title')}</strong>
        </h2>
        <p className="mt-5 max-w-[600px] text-[18px] leading-[1.7] text-[var(--gray-light)]">
          {t('subtitle')}
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        ref={ref}
        className="relative z-[2] grid grid-cols-3 gap-[24px] max-lg:grid-cols-2 max-md:grid-cols-1"
        variants={staggerContainer}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      >
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            title={t(`items.${feature.id}.title`)}
            description={t(`items.${feature.id}.description`)}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
}

interface FeatureCardProps {
  feature: (typeof FEATURES)[number];
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ feature, title, description, index }: FeatureCardProps) {
  const isLarge = 'size' in feature && feature.size === 'large';

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-[28px] border border-[var(--black-border)] bg-[var(--black-card)] p-[45px] transition-all duration-500 hover:-translate-y-[8px] hover:border-[rgba(0,255,136,0.5)] hover:shadow-[0_30px_60px_rgba(0,255,136,0.15)] ${isLarge ? 'col-span-2 grid grid-cols-2 gap-[40px] p-[50px] max-lg:col-span-1 max-lg:grid-cols-1' : ''}`}
      variants={fadeInUp}
      custom={index}
      style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      {/* Pattern Icon */}
      <div className={`mb-[30px] flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-[24px] ${getPatternBgClass(feature.pattern)}`}>
        <PatternBackground pattern={feature.pattern} />
        <FeatureIcon pattern={feature.pattern} />
      </div>

      {/* Content */}
      <div className={isLarge ? 'flex flex-col justify-center' : ''}>
        <h3 className="mb-[12px] text-[26px] font-[700]">{title}</h3>
        <p className="mb-[24px] text-[15px] leading-[1.7] text-[var(--gray-light)]">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-[8px] text-[14px] font-[600] text-[var(--accent)] transition-all duration-300 hover:gap-[12px] rtl:flex-row-reverse"
        >
          Learn more
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[4px] rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

function getPatternBgClass(pattern: string): string {
  const patterns: Record<string, string> = {
    waves: 'bg-gradient-to-br from-[#0a2a1a] to-[#0d3d2a]',
    circles: 'bg-gradient-to-br from-[#1a0a2e] to-[#2d1b4e]',
    grid: 'bg-gradient-to-br from-[#0a1a2e] to-[#0d2d4e]',
    dots: 'bg-gradient-to-br from-[#1a1a0a] to-[#2e2d0a]',
    blob: 'bg-gradient-to-br from-[#2e0a1a] to-[#4e1b2d]',
    lines: 'bg-gradient-to-br from-[#0a2e1a] to-[#1b4e2d]',
  };
  return patterns[pattern] || patterns.waves;
}

function FeatureIcon({ pattern }: { pattern: string }) {
  const iconClass = 'relative z-[2] h-[42px] w-[42px] transition-all duration-[400ms] group-hover:scale-110';
  const getIconColor = () => {
    const colors: Record<string, string> = {
      waves: '#00ff88',
      circles: '#a78bfa',
      grid: '#00d4ff',
      dots: '#fbbf24',
      blob: '#f472b6',
      lines: '#00ff88',
    };
    return colors[pattern] || '#00ff88';
  };

  const iconColor = getIconColor();

  switch (pattern) {
    case 'waves':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" style={{ filter: `drop-shadow(0 0 10px ${iconColor}66)` }}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case 'circles':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" style={{ filter: `drop-shadow(0 0 10px ${iconColor}66)` }}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case 'grid':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" style={{ filter: `drop-shadow(0 0 10px ${iconColor}66)` }}>
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        </svg>
      );
    case 'dots':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" style={{ filter: `drop-shadow(0 0 10px ${iconColor}66)` }}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 8h.01M6 12h.01M6 16h.01M10 8h8M10 12h8M10 16h8" />
        </svg>
      );
    case 'blob':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" style={{ filter: `drop-shadow(0 0 10px ${iconColor}66)` }}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case 'lines':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" style={{ filter: `drop-shadow(0 0 10px ${iconColor}66)` }}>
          <path d="M3 3v18h18" />
          <path d="M18 17V9M13 17V5M8 17v-3" />
        </svg>
      );
    default:
      return null;
  }
}

function PatternBackground({ pattern }: { pattern: string }) {
  switch (pattern) {
    case 'waves':
      return (
        <svg className="h-full w-full" viewBox="0 0 400 300">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent-cyan)" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M0,${150 + i * 20} Q100,${130 + i * 20} 200,${150 + i * 20} T400,${150 + i * 20}`}
              fill="none"
              stroke="url(#waveGrad)"
              strokeWidth="1"
              opacity={0.3 - i * 0.05}
            />
          ))}
        </svg>
      );
    case 'circles':
      return (
        <svg className="h-full w-full" viewBox="0 0 400 300">
          {[80, 120, 160, 200].map((r, i) => (
            <circle
              key={i}
              cx="200"
              cy="150"
              r={r}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1"
              opacity={0.3 - i * 0.05}
            />
          ))}
        </svg>
      );
    case 'grid':
      return (
        <svg className="h-full w-full" viewBox="0 0 400 300">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      );
    case 'dots':
      return (
        <svg className="h-full w-full" viewBox="0 0 400 300">
          {Array.from({ length: 100 }).map((_, i) => (
            <circle
              key={i}
              cx={(i % 10) * 40 + 20}
              cy={Math.floor(i / 10) * 30 + 15}
              r="2"
              fill="var(--accent)"
              opacity={0.2}
            />
          ))}
        </svg>
      );
    case 'blob':
      return (
        <div
          className="absolute right-[-20%] top-[-20%] h-[80%] w-[80%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,136,0.15), transparent 60%)',
          }}
        />
      );
    case 'lines':
      return (
        <svg className="h-full w-full" viewBox="0 0 400 300">
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={i * 20}
              y1="0"
              x2={i * 20}
              y2="300"
              stroke="var(--accent)"
              strokeWidth="1"
              opacity={0.1}
            />
          ))}
        </svg>
      );
    default:
      return null;
  }
}
