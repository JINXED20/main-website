'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowUpRight } from '@/components/ui/icons';

// The road: merchant (bottom-left) → carrier (top-right)
const ROAD_PATH =
  'M80 520 C250 520, 210 330, 350 330 C490 330, 440 160, 560 160';
const PARCEL_GAP = 34;
const TRAVEL_MS = 6000;
const HANDOFF_MS = 1400; // carrier takes the order, "+1 order" pops
const LOOP_MS = TRAVEL_MS + HANDOFF_MS;
const CARRIER_GAP = 58; // pacman stops this far before the carrier

function pacmanPath(r: number, mouth: number) {
  const x = r * Math.cos(mouth);
  const y = r * Math.sin(mouth);
  return `M0 0 L${x.toFixed(2)} ${(-y).toFixed(2)} A${r} ${r} 0 1 0 ${x.toFixed(2)} ${y.toFixed(2)} Z`;
}

function RopeArt({ animate }: { animate: boolean }) {
  // Road points sampled once (1 unit apart) so render never touches the DOM
  const [samples, setSamples] = useState<{ x: number; y: number }[]>([]);
  const len = Math.max(samples.length - 1, 0);
  // Position in the loop; reduced motion freezes it mid-road
  const [elapsed, setElapsed] = useState(TRAVEL_MS * 0.55);

  const measureRoad = useCallback((road: SVGPathElement | null) => {
    if (!road) return;
    const total = Math.floor(road.getTotalLength());
    const pts = [];
    for (let l = 0; l <= total; l++) {
      const q = road.getPointAtLength(l);
      pts.push({ x: q.x, y: q.y });
    }
    setSamples(pts);
  }, []);

  useEffect(() => {
    if (!animate || !len) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      setElapsed((now - start) % LOOP_MS);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate, len]);

  const progress = Math.min(elapsed / TRAVEL_MS, 1);
  // 0 → 1 across the hand-off; 0 while the merchant is still on the road
  const handoff = Math.max((elapsed - TRAVEL_MS) / HANDOFF_MS, 0);
  const chomp = (period: number) => 0.08 + 0.55 * Math.abs(Math.sin(elapsed / period));
  const merchantMouth = animate && handoff === 0 ? chomp(110) : 0.5;
  const carrierMouth = handoff > 0 && handoff < 0.5 ? chomp(70) : 0.62;
  // Merchant fades in at the start of a lap and out once it hands over
  const merchantOpacity = Math.min(elapsed / 300, 1) * (1 - Math.min(handoff * 2, 1));

  const travel = Math.max(len - CARRIER_GAP, 0);
  const at = progress * travel;
  const point = (l: number) => samples[Math.round(l)] ?? { x: 0, y: 0 };
  const p = point(at);
  const ahead = point(Math.min(at + 1, len));
  const angle = (Math.atan2(ahead.y - p.y, ahead.x - p.x) * 180) / Math.PI;
  const end = point(len);

  const parcels: { l: number; x: number; y: number }[] = [];
  if (len) {
    for (let l = PARCEL_GAP; l < travel; l += PARCEL_GAP) {
      const q = point(l);
      parcels.push({ l, x: q.x, y: q.y });
    }
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative h-full min-h-[360px] select-none md:min-h-[460px] lg:min-h-0 lg:self-stretch"
    >
      <svg
        viewBox="0 0 700 640"
        className="absolute inset-0 h-full w-full overflow-visible"
        role="presentation"
      >
        <defs>
          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000" floodOpacity=".22" />
          </filter>
        </defs>

        {/* Road: shadow, asphalt, curb, centre line */}
        <path
          d={ROAD_PATH}
          fill="none"
          stroke="#000"
          strokeWidth="78"
          strokeLinecap="round"
          style={{ filter: 'blur(16px)', opacity: 0.18 }}
          transform="translate(0 18)"
        />
        <path
          d={ROAD_PATH}
          fill="none"
          stroke="#a550ff"
          strokeWidth="88"
          strokeLinecap="round"
          opacity=".45"
          style={{ filter: 'blur(10px)' }}
        />
        <path
          ref={measureRoad}
          d={ROAD_PATH}
          fill="none"
          stroke="#a550ff"
          strokeWidth="80"
          strokeLinecap="round"
        />
        <path
          d={ROAD_PATH}
          fill="none"
          stroke="#0b0b0b"
          strokeWidth="72"
          strokeLinecap="round"
        />
        <path
          d={ROAD_PATH}
          fill="none"
          stroke="#a550ff"
          strokeWidth="3"
          strokeLinecap="round"
          className="rope-flow"
          opacity=".9"
        />

        {/* Parcels waiting on the road — eaten as the merchant pacman passes */}
        {parcels.map((d) =>
          d.l > at + 6 ? (
            <g key={d.l} transform={`translate(${d.x} ${d.y})`}>
              <rect x="-8" y="-7" width="16" height="14" rx="2" fill="#bbff00" />
              <path d="M0 -7v14M-8 -2h16" stroke="#050505" strokeWidth="1.6" opacity=".55" />
            </g>
          ) : null,
        )}

        {/* Ink pacman — the carrier, mouth open towards the road */}
        <g transform={`translate(${end.x + 22} ${end.y}) rotate(180)`} filter="url(#softShadow)">
          <path d={pacmanPath(64, carrierMouth)} fill="#050505" stroke="#bbff00" strokeWidth="3" />
          <circle cx="16" cy="32" r="8" fill="#bbff00" />
        </g>

        {/* Hand-off: the carrier just received an order */}
        {handoff > 0 && (
          <g
            transform={`translate(${end.x + 22} ${end.y - 82 - handoff * 34})`}
            opacity={handoff < 0.75 ? 1 : (1 - handoff) * 4}
          >
            <rect x="-62" y="-20" width="124" height="40" fill="#bbff00" stroke="#050505" strokeWidth="2.5" />
            <text
              textAnchor="middle"
              dy="7"
              style={{
                fontSize: '19px',
                fontFamily: 'var(--font-geist-mono), monospace',
                fontWeight: 700,
                letterSpacing: '0.06em',
              }}
              fill="#050505"
            >
              +1 ORDER
            </text>
          </g>
        )}

        {/* Lime pacman — the merchant, chomping along the road */}
        {len > 0 && (
          <g
            transform={`translate(${p.x} ${p.y}) rotate(${angle})`}
            filter="url(#softShadow)"
            opacity={merchantOpacity}
          >
            <path d={pacmanPath(46, merchantMouth)} fill="#bbff00" stroke="#050505" strokeWidth="3" />
            <circle cx="10" cy="-24" r="6" fill="#050505" />
          </g>
        )}
      </svg>

      {/* Orbiting badge — physical position + LTR so the textPath renders */}
      <div dir="ltr" className="absolute bottom-6 right-10 hidden h-[118px] w-[118px] md:block">
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
    </div>
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
      <div className="wrap relative grid grid-cols-[minmax(0,1fr)] gap-8 py-10 lg:min-h-[calc(100dvh-76px)] lg:grid-cols-[46%_54%] lg:items-center lg:py-6">
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

        <RopeArt animate={!reduce} />
      </div>
    </section>
  );
}
