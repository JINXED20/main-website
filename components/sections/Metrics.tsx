'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const KEYS = ['m1', 'm2', 'm3', 'm4'] as const;

function CountUp({
  target,
  decimals,
  active,
  instant,
}: {
  target: number;
  decimals: number;
  active: boolean;
  instant: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || instant) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, instant]);

  // Reduced motion: skip the animation and show the final value immediately.
  return <>{(instant ? target : value).toFixed(decimals)}</>;
}

export function Metrics() {
  const t = useTranslations('metrics');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();

  return (
    <section aria-label="Ordex key metrics" className="border-y border-line">
      <div
        ref={ref}
        className="wrap grid grid-cols-2 divide-line max-lg:gap-y-px lg:grid-cols-4 lg:divide-x"
      >
        {KEYS.map((key) => {
          const raw = t(`${key}.value`);
          const target = parseFloat(raw);
          const decimals = raw.includes('.') ? 1 : 0;
          return (
            <div key={key} className="min-h-28 px-1 py-7 lg:px-8 lg:first:ps-0 lg:last:pe-0">
              <strong
                dir="ltr"
                className="block text-4xl font-extrabold tracking-tight tabular-nums lg:text-[40px]"
              >
                {t(`${key}.prefix`)}
                <CountUp
                  target={target}
                  decimals={decimals}
                  active={inView}
                  instant={!!reduce}
                />
                <span className="text-purple">{t(`${key}.suffix`)}</span>
              </strong>
              <span className="mono-label mt-3 block max-w-[140px] leading-snug text-muted">
                {t(`${key}.label`)}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
