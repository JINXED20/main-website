import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/motion/Reveal';

const ROWS = [
  { key: 'r1', dot: 'bg-lime' },
  { key: 'r2', dot: 'bg-purple' },
  { key: 'r3', dot: 'bg-purple' },
  { key: 'r4', dot: 'bg-white ring-1 ring-ink' },
] as const;

/* Syntax palette on ink: keyword lime · string amber · property purple · comment gray */
const C = {
  kw: 'text-lime',
  str: 'text-[#ffd75e]',
  prop: 'text-[#c9a2ff]',
  com: 'text-[#8f8f86]',
  punc: 'text-white/60',
} as const;

function CodeCard({ comment1, comment2 }: { comment1: string; comment2: string }) {
  return (
    <div
      className="force-ltr min-h-[380px] overflow-x-auto bg-ink p-7 font-mono text-[13px] leading-[1.9] text-[#dddddd] shadow-[12px_12px_0_var(--color-lime)]"
      role="img"
      aria-label="Ordex API code example: create a delivery in one call"
    >
      <pre className="font-mono">
        <code>
          <span className={C.com}>{'// '}{comment1}</span>{'\n'}
          <span className={C.kw}>const</span> order = <span className={C.kw}>await</span>{' '}
          ordex.orders.<span className={C.prop}>create</span>
          <span className={C.punc}>{'({'}</span>{'\n'}
          {'  '}<span className={C.prop}>store_id</span>
          <span className={C.punc}>:</span> <span className={C.str}>&quot;sham-store&quot;</span>
          <span className={C.punc}>,</span>{'\n'}
          {'  '}<span className={C.prop}>pickup</span>
          <span className={C.punc}>:</span> <span className={C.str}>&quot;Damascus · Old City&quot;</span>
          <span className={C.punc}>,</span>{'\n'}
          {'  '}<span className={C.prop}>dropoff</span>
          <span className={C.punc}>:</span> <span className={C.str}>&quot;Aleppo · Sulaymaniyah&quot;</span>
          <span className={C.punc}>,</span>{'\n'}
          {'  '}<span className={C.prop}>cod_amount</span>
          <span className={C.punc}>:</span> <span className={C.kw}>450000</span>
          <span className={C.punc}>,</span>{'\n'}
          {'  '}<span className={C.prop}>customer</span>
          <span className={C.punc}>{': { '}</span>
          <span className={C.prop}>phone</span>
          <span className={C.punc}>:</span> <span className={C.str}>&quot;+963 9XX XXX XXX&quot;</span>
          <span className={C.punc}>{' }'}</span>{'\n'}
          <span className={C.punc}>{'});'}</span>{'\n\n'}
          <span className={C.com}>{'// '}{comment2}</span>{'\n'}
          console.<span className={C.prop}>log</span>
          <span className={C.punc}>(</span>order.<span className={C.prop}>tracking_url</span>
          <span className={C.punc}>);</span>
        </code>
      </pre>
    </div>
  );
}

export async function ApiZone() {
  const t = await getTranslations('api');

  return (
    <section id="api" className="wrap py-20 lg:py-28">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="mono-label text-muted">{t('label')}</span>
          <h2 className="display mt-3 text-[clamp(36px,4.6vw,60px)]">{t('heading')}</h2>
          <p className="mt-4 max-w-[420px] font-medium text-ink-soft">{t('sub')}</p>
        </div>
        <Image
          src="/brand/icon-3d.png"
          alt=""
          aria-hidden="true"
          width={640}
          height={640}
          className="hidden w-24 rotate-6 drop-shadow-[0_16px_24px_rgb(0_0_0/0.18)] md:block lg:w-28"
        />
      </Reveal>

      <div className="grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <Reveal className="min-w-0">
          <CodeCard comment1={t('comment1')} comment2={t('comment2')} />
        </Reveal>

        <Reveal delay={0.12} className="min-w-0">
          <div className="flex h-full flex-col gap-4 border border-line bg-paper p-7">
            <div className="flex items-center justify-between gap-4">
              <h3 className="display text-[clamp(26px,3vw,38px)]">{t('dash.title')}</h3>
              <span className="mono-label flex items-center gap-2.5 border border-ink bg-lime px-3 py-2">
                <span className="pulse-dot" aria-hidden="true" />
                {t('dash.live')}
              </span>
            </div>

            <div className="mt-2 border-t-2 border-ink" role="table" aria-label={t('dash.title')}>
              {ROWS.map(({ key, dot }) => (
                <div
                  key={key}
                  role="row"
                  className="grid grid-cols-2 gap-x-4 gap-y-1 border-b border-line py-4 text-sm sm:grid-cols-[1.1fr_1fr_1.4fr_auto] sm:items-center"
                >
                  <strong role="cell" dir="ltr" className="text-start font-extrabold tabular-nums">
                    {t(`dash.rows.${key}.id`)}
                  </strong>
                  <span role="cell" className="text-ink-soft">
                    {t(`dash.rows.${key}.store`)}
                  </span>
                  <span role="cell" className="text-muted">
                    {t(`dash.rows.${key}.route`)}
                  </span>
                  <span role="cell" className="mono-label flex items-center gap-2">
                    <span className={`h-2 w-2 flex-none rounded-full ${dot}`} aria-hidden="true" />
                    {t(`dash.rows.${key}.status`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
