import { getTranslations } from 'next-intl/server';

type Translate = Awaited<ReturnType<typeof getTranslations<'hero.art'>>>;

// Fixed widths (bar, gap, bar, ...) so server output is stable
const BARS = [6, 2, 4, 2, 8, 3, 2, 6, 2, 4, 7, 2, 3, 5, 2, 8, 3, 4, 2, 6, 2, 5, 3, 7, 2, 4, 6, 2, 3, 5, 2, 7, 4, 2, 6, 3, 2, 8, 3, 4, 2, 5, 6, 2, 3, 4, 7, 2, 5, 3, 2, 6, 4, 2, 8];
const BARS_WIDTH = BARS.reduce((sum, width) => sum + width, 0);
const BAR_RECTS = BARS.map((width, i) => ({
  width,
  x: BARS.slice(0, i).reduce((sum, w) => sum + w, 0),
})).filter((_, i) => i % 2 === 0);

function Barcode() {
  return (
    <svg className="wb-barcode" viewBox={`0 0 ${BARS_WIDTH} 10`} preserveAspectRatio="none">
      {BAR_RECTS.map(({ x, width }) => (
        <rect key={x} x={x} width={width} height="10" />
      ))}
    </svg>
  );
}

function Mark({ o, x }: { o: string; x: string }) {
  return (
    <span className="wb-mark" dir="ltr">
      <svg viewBox="336 272 540 556" fill={o}>
        <use href="#hero-mark-o" />
      </svg>
      <svg viewBox="806 250 582 582" fill={x}>
        <use href="#hero-mark-x" />
      </svg>
    </span>
  );
}

function Waybill({ t, number, carrier, next }: { t: Translate; number: string; carrier: string; next?: boolean }) {
  const route = [
    [t('from'), t('store')],
    [t('via'), t('ordex')],
    [t('to'), carrier],
  ];

  return (
    <div className={`wb-card ${next ? 'wb-card--next' : ''}`}>
      <div className="wb-head">
        <span>{t('waybill')}</span>
        <Mark o="#bbff00" x="#fff" />
      </div>
      <div className="wb-order">
        {t('order')} <span dir="ltr">#{number}</span>
      </div>
      <div className="wb-route">
        {route.map(([label, value]) => (
          <div key={label}>
            <small>{label}</small>
            <b>{value}</b>
          </div>
        ))}
      </div>
      <div className="wb-stamps">
        <span className="wb-stamp">{t('picked')}</span>
        <span className="wb-stamp wb-stamp--purple">{t('transit')}</span>
        <span className="wb-stamp">{t('delivered')}</span>
        <span className="wb-stamp wb-stamp--purple">{t('cod')}</span>
      </div>
      <Barcode />
    </div>
  );
}

/**
 * Hero art: an Ordex printer feeds waybills in one continuous strip, and each
 * label collects its delivery stamps. Pure CSS (see .printer in globals.css),
 * so it plays at first paint; REVEAL_SCRIPT pauses it while off-screen.
 */
export async function HeroPrinter() {
  const t = await getTranslations('hero.art');

  return (
    <div aria-hidden="true" data-nosnippet className="flex items-center justify-center lg:pe-8">
      <svg width="0" height="0" className="absolute">
        <defs>
          <path
            id="hero-mark-o"
            d="M621.61,281.93v198.53l173.07-130.37c221.27,204.94-31.71,561.8-299.48,412.45-229.44-127.98-134.15-481.49,126.41-480.61"
          />
          <path
            id="hero-mark-x"
            d="M942.4,283.59c78.09-13.31,125.18,74.04,180.04,115.9,9.62,1.7,86.28-86.8,103.18-98.91,49.61-35.53,125.62-16.08,147.61,41.84,33.32,87.76-61.64,138.3-108.96,195.63,41.22,60.47,138.82,104.13,111.17,192.11-13.87,44.11-59.22,70.83-104.23,66.21-58.17-5.97-105.09-86.69-149.39-121.23-8.49,0-92.02,102.98-124.21,114.85-92.95,34.3-170.73-70.48-112.67-148.77,12.76-17.2,97.5-91.82,98.93-99.89-38-59.36-135.95-99.58-116.53-183.81,7.72-33.49,40.65-68.06,75.05-73.93"
          />
        </defs>
      </svg>

      {/* The inline script toggles is-offscreen before hydration */}
      <div className="printer" suppressHydrationWarning>
        <div className="printer-inner">
          <div className="printer-feed">
            <Waybill t={t} number="0001" carrier={t('carrierA')} />
            <Waybill t={t} number="0002" carrier={t('carrierB')} next />
          </div>
          <div className="printer-head">
            <Mark o="#000" x="#000" />
            <i className="printer-led" />
            <i className="printer-slot" />
          </div>
        </div>
      </div>
    </div>
  );
}
