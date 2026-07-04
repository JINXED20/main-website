'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowUpRight } from '@/components/ui/icons';

const ROPE_PATH =
  'M150 500 C190 395, 118 336, 205 274 C270 228, 335 318, 299 379 C263 440, 310 524, 413 505 C545 482, 568 366, 500 309 C435 254, 470 135, 586 122';

function RopeArt({ float }: { float: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none relative h-full min-h-[360px] select-none md:min-h-[460px] lg:min-h-0 lg:self-stretch"
      animate={float ? { y: [0, -12, 0] } : undefined}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 700 640"
        className="absolute inset-0 h-full w-full overflow-visible"
        role="presentation"
      >
        <defs>
          <linearGradient id="ropeGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#bbff00" />
            <stop offset=".3" stopColor="#a550ff" />
            <stop offset=".55" stopColor="#151515" />
            <stop offset=".78" stopColor="#bbff00" />
            <stop offset="1" stopColor="#a550ff" />
          </linearGradient>
          <linearGradient id="ropeCore" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#a550ff" />
            <stop offset=".26" stopColor="#141414" />
            <stop offset=".5" stopColor="#dfff00" />
            <stop offset=".78" stopColor="#bbff00" />
            <stop offset="1" stopColor="#a550ff" />
          </linearGradient>
          <filter id="neonBlur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1.6 0 0 0 0  0 1.4 0 0 0  0 0 2.2 0 0  0 0 0 .85 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#000" floodOpacity=".28" />
          </filter>
          <pattern id="speckles" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#050505" />
            <circle cx="12" cy="16" r=".9" fill="#bbff00" />
            <circle cx="19" cy="7" r=".7" fill="#fff" />
          </pattern>
        </defs>

        {/* Shadow pass */}
        <path
          d={ROPE_PATH}
          fill="none"
          stroke="#010101"
          strokeWidth="92"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'blur(18px)', opacity: 0.32, mixBlendMode: 'multiply' }}
        />
        {/* Neon glow pass */}
        <path
          d={ROPE_PATH}
          fill="none"
          stroke="url(#ropeGrad)"
          strokeWidth="94"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#neonBlur)"
          opacity=".95"
        />
        {/* Core */}
        <path
          d={ROPE_PATH}
          fill="none"
          stroke="url(#ropeCore)"
          strokeWidth="70"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#softShadow)"
        />
        {/* Speckle texture */}
        <path
          d={ROPE_PATH}
          fill="none"
          stroke="url(#speckles)"
          strokeWidth="74"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.14, mixBlendMode: 'multiply' }}
        />
        {/* Parcel flow — dashes traveling from merchant to carrier */}
        <path
          d={ROPE_PATH}
          fill="none"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          className="rope-flow"
          opacity=".85"
        />

        {/* Floating accents */}
        <circle cx="330" cy="146" r="22" fill="#a550ff" filter="url(#neonBlur)" />
        <circle cx="112" cy="525" r="10" fill="#050505" opacity=".7" />
        <circle cx="592" cy="222" r="12" fill="#bbff00" opacity=".9" />

        {/* Lime pacman — merchant end */}
        <g transform="translate(96 486) rotate(-20)">
          <path d="M0 0 L74 -40 A84 84 0 1 0 74 40 Z" fill="#bbff00" filter="url(#softShadow)" />
          <circle cx="30" cy="-36" r="9" fill="#050505" />
        </g>
        {/* Ink pacman — carrier end */}
        <g transform="translate(606 128) rotate(160)">
          <path d="M0 0 L78 -42 A88 88 0 1 0 78 42 Z" fill="#050505" filter="url(#softShadow)" />
          <circle
            cx="30"
            cy="-38"
            r="9"
            fill="#bbff00"
            style={{ filter: 'drop-shadow(0 0 10px rgba(187,255,0,.85))' }}
          />
        </g>
      </svg>

      {/* Wire globe ornament */}
      <svg
        viewBox="0 0 160 160"
        className="absolute start-4 top-4 hidden h-36 w-36 opacity-45 xl:block"
      >
        <circle cx="80" cy="80" r="72" fill="none" stroke="#111" strokeWidth="1.1" />
        <ellipse cx="80" cy="80" rx="30" ry="72" fill="none" stroke="#111" strokeWidth="1" />
        <ellipse cx="80" cy="80" rx="58" ry="72" fill="none" stroke="#111" strokeWidth="1" />
        <path d="M8 80h144M18 45h124M18 115h124M80 8v144" fill="none" stroke="#111" strokeWidth="1" />
      </svg>

      {/* Orbiting badge */}
      <div className="absolute bottom-6 end-10 hidden h-[118px] w-[118px] md:block">
        <div className="absolute inset-0 rounded-full bg-lime-hot shadow-[0_18px_30px_rgb(0_0_0/0.14)]" />
        <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
          <defs>
            <path
              id="orbit-circle"
              d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
            />
          </defs>
          <text
            style={{
              fontSize: '9.2px',
              fontFamily: 'var(--font-geist-mono), monospace',
              fontWeight: 700,
              letterSpacing: '0.2em',
            }}
            className="fill-ink uppercase"
          >
            <textPath href="#orbit-circle">Ship with Ordex • Carrier OS • One API •</textPath>
          </text>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-lime">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const t = useTranslations();
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const line = {
    hidden: { opacity: 0, y: reduce ? 0 : 46 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

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
      <div className="wrap relative grid gap-8 py-10 lg:min-h-[calc(100dvh-76px)] lg:grid-cols-[46%_54%] lg:items-center lg:py-6">
        <div className="relative z-10 flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mono-label inline-flex items-center gap-2.5 bg-lime-hot px-3.5 py-2 text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
            {t('hero.eyebrow')}
          </motion.span>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="display mt-6 text-[clamp(48px,min(8.6vw,8.5vh),124px)]"
          >
            <motion.span variants={line} className="block">
              {t('hero.line1')}
            </motion.span>
            <motion.span variants={line} className="block">
              {t('hero.line2')}
            </motion.span>
            <motion.span variants={line} className="block">
              <span className="marker-lime">{t('hero.line3')}</span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-6 max-w-[400px] text-[17px] font-medium leading-relaxed text-ink-soft"
          >
            {t('hero.sub')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#api" className="btn btn-ink inline-flex">
              {t('hero.cta1')}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#platform"
              className="mono-label group inline-flex min-h-12 cursor-pointer items-center gap-2 py-2"
            >
              <span className="marker-lime">{t('hero.cta2')}</span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-lime transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </motion.div>
        </div>

        <RopeArt float={!reduce} />
      </div>
    </section>
  );
}
