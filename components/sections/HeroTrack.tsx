/**
 * Hero art: a Pac-Man maze track from the store (bottom-left) to the carrier
 * (top-right). Pacman runs the track eating pellets; at the end a parcel pops
 * and "+1 order" rises. Pure SVG/SMIL, so it plays without JavaScript; reduced
 * motion gets a still frame instead (see .track-* rules in globals.css).
 */

import { ArrowUpRight } from '@/components/ui/icons';

type Pt = [number, number];
type Seg =
  | { kind: 'line'; from: Pt; to: Pt }
  | { kind: 'arc'; c: Pt; r: number; a0: number; a1: number };

const R = 40; // corner radius
const H = Math.PI / 2;

// Right-angle maze route with rounded corners, viewBox 700 x 640
const SEGMENTS: Seg[] = [
  { kind: 'line', from: [70, 540], to: [260, 540] },
  { kind: 'arc', c: [260, 500], r: R, a0: H, a1: 0 },
  { kind: 'line', from: [300, 500], to: [300, 370] },
  { kind: 'arc', c: [340, 370], r: R, a0: Math.PI, a1: 3 * H },
  { kind: 'line', from: [340, 330], to: [430, 330] },
  { kind: 'arc', c: [430, 290], r: R, a0: H, a1: 0 },
  { kind: 'line', from: [470, 290], to: [470, 190] },
  { kind: 'arc', c: [510, 190], r: R, a0: Math.PI, a1: 3 * H },
  { kind: 'line', from: [510, 150], to: [600, 150] },
];

const segLength = (s: Seg) =>
  s.kind === 'line'
    ? Math.hypot(s.to[0] - s.from[0], s.to[1] - s.from[1])
    : s.r * Math.abs(s.a1 - s.a0);

const TOTAL = SEGMENTS.reduce((sum, s) => sum + segLength(s), 0);

function pointAt(d: number): Pt {
  for (const s of SEGMENTS) {
    const len = segLength(s);
    if (d <= len) {
      const k = d / len;
      if (s.kind === 'line') {
        return [s.from[0] + (s.to[0] - s.from[0]) * k, s.from[1] + (s.to[1] - s.from[1]) * k];
      }
      const a = s.a0 + (s.a1 - s.a0) * k;
      return [s.c[0] + s.r * Math.cos(a), s.c[1] + s.r * Math.sin(a)];
    }
    d -= len;
  }
  const last = SEGMENTS[SEGMENTS.length - 1];
  return last.kind === 'line' ? last.to : [0, 0];
}

const TRACK_PATH = SEGMENTS.map((s, i) => {
  if (s.kind === 'line') return `${i === 0 ? `M${s.from[0]} ${s.from[1]} ` : ''}L${s.to[0]} ${s.to[1]}`;
  const end = [s.c[0] + s.r * Math.cos(s.a1), s.c[1] + s.r * Math.sin(s.a1)].map((v) => +v.toFixed(2));
  return `A${s.r} ${s.r} 0 0 ${s.a1 > s.a0 ? 1 : 0} ${end[0]} ${end[1]}`;
}).join(' ');

// Timeline (fractions of one loop): run, hand-off, then reset
const DUR = '7s';
const RUN_END = 0.78;
const STOP = (TOTAL - 6) / TOTAL; // pacman halts at the end of the track, nose at the parcel
const PELLET_GAP = 34;
const POWER_AT = 3; // index of the one purple "power pellet"

const PELLETS = Array.from({ length: Math.floor((TOTAL - 40) / PELLET_GAP) }, (_, i) => {
  const d = 36 + i * PELLET_GAP;
  const [x, y] = pointAt(d);
  // Eaten when pacman's mouth reaches it (centre ~10 units behind)
  const eatAt = Math.min(((d - 10) / TOTAL) * RUN_END, RUN_END - 0.01);
  return { x: +x.toFixed(1), y: +y.toFixed(1), eatAt: +eatAt.toFixed(4), power: i === POWER_AT };
}).filter((p) => p.x < 590 || p.y > 160); // keep the last stretch clear for the parcel

const MOUTH_OPEN = 'M0 0 L22.5 -13 A26 26 0 1 0 22.5 13 Z';
const MOUTH_SHUT = 'M0 0 L26 -1 A26 26 0 1 0 26 1 Z';

const k = (...n: number[]) => n.map((v) => +v.toFixed(4)).join(';');

export function HeroTrack({ orbitLabel, orderLabel, rtl }: { orbitLabel: string; orderLabel: string; rtl: boolean }) {
  // Arabic must not be letter-spaced (it breaks the joins) and needs an Arabic face
  const labelFont = rtl ? 'var(--font-arabic), sans-serif' : 'var(--font-geist-mono), monospace';
  const [ex, ey] = pointAt(TOTAL);

  const track = (
    <>
      {/* Hard offset shadow, brutalist style */}
      <path d={TRACK_PATH} fill="none" stroke="#bbff00" strokeWidth="66" strokeLinecap="round" strokeLinejoin="round" transform="translate(10 10)" />
      <path d={TRACK_PATH} fill="none" stroke="#a550ff" strokeWidth="66" strokeLinecap="round" strokeLinejoin="round" />
      <path d={TRACK_PATH} fill="none" stroke="#0d0d0d" strokeWidth="58" strokeLinecap="round" strokeLinejoin="round" />
      {/* Store at the start */}
      <circle cx="70" cy="540" r="11" fill="none" stroke="#a550ff" strokeWidth="3" />
    </>
  );

  const parcel = (popped: boolean) => (
    <g transform={`translate(${ex + 66} ${ey})`}>
      <g>
        {popped ? null : (
          <animateTransform
            attributeName="transform"
            type="scale"
            dur={DUR}
            repeatCount="indefinite"
            keyTimes={k(0, RUN_END, RUN_END + 0.04, RUN_END + 0.08, 1)}
            values="1;1;1.28;1;1"
          />
        )}
        <rect x="-22" y="-22" width="44" height="44" fill="#dfff00" stroke="#0d0d0d" strokeWidth="3" />
        <path d="M-22 -6 H22 M0 -22 V22" stroke="#0d0d0d" strokeWidth="3" />
      </g>
    </g>
  );

  const pellets = (still: boolean) =>
    PELLETS.map((p) => (
      <circle key={`${p.x}-${p.y}`} cx={p.x} cy={p.y} r={p.power ? 11 : 6} fill={p.power ? '#a550ff' : '#bbff00'}>
        {still ? null : (
          <animate
            attributeName="opacity"
            dur={DUR}
            repeatCount="indefinite"
            keyTimes={k(0, p.eatAt, p.eatAt + 0.005, 0.95, 1)}
            values="1;1;0;0;1"
          />
        )}
      </circle>
    ));

  const pacman = (
    <g>
      <path d={MOUTH_OPEN} fill="#bbff00" stroke="#0d0d0d" strokeWidth="3" strokeLinejoin="round">
        <animate attributeName="d" dur="0.32s" repeatCount="indefinite" values={`${MOUTH_OPEN};${MOUTH_SHUT};${MOUTH_OPEN}`} />
      </path>
      <circle cx="5" cy="-13" r="3.6" fill="#0d0d0d" />
    </g>
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative h-full min-h-[360px] select-none md:min-h-[460px] lg:min-h-0 lg:self-stretch"
    >
      {/* Animated version */}
      <svg viewBox="0 0 700 640" className="track-anim absolute inset-0 h-full w-full overflow-visible" role="presentation">
        {track}
        {pellets(false)}
        {parcel(false)}

        {/* +1 order rises off the parcel on hand-off */}
        <g opacity="0">
          <animate attributeName="opacity" dur={DUR} repeatCount="indefinite" keyTimes={k(0, RUN_END, RUN_END + 0.03, 0.93, 0.97, 1)} values="0;0;1;1;0;0" />
          <animateTransform attributeName="transform" type="translate" dur={DUR} repeatCount="indefinite" keyTimes={k(0, RUN_END, 0.95, 1)} values={`0 0;0 0;0 -26;0 -26`} />
          <g transform={`translate(${ex + 18} ${ey - 52})`}>
            <rect x="-6" y="-21" width={rtl ? 76 : 100} height="30" fill="#0d0d0d" />
            <text x={rtl ? 32 : 44} y="0" textAnchor="middle" fill="#bbff00" style={{ fontFamily: labelFont, fontSize: 15, fontWeight: 700, letterSpacing: rtl ? 0 : '0.06em' }}>
              {orderLabel}
            </text>
          </g>
        </g>

        {/* Pacman runs the track, then vanishes until the next lap */}
        <g>
          <animate attributeName="opacity" dur={DUR} repeatCount="indefinite" keyTimes={k(0, 0.03, RUN_END, RUN_END + 0.04, 1)} values="0;1;1;0;0" />
          <animateMotion dur={DUR} repeatCount="indefinite" rotate="auto" path={TRACK_PATH} keyPoints={k(0, STOP, STOP)} keyTimes={k(0, RUN_END, 1)} calcMode="linear" />
          {pacman}
        </g>
      </svg>

      {/* Reduced-motion still: pacman a third of the way in, pellets behind it eaten */}
      <svg viewBox="0 0 700 640" className="track-still absolute inset-0 h-full w-full overflow-visible" role="presentation">
        {track}
        {pellets(true).filter((_, i) => PELLETS[i].eatAt > RUN_END * 0.36)}
        {parcel(true)}
        <g transform={`translate(${pointAt(TOTAL * 0.36).join(' ')}) rotate(-90)`}>
          <path d={MOUTH_OPEN} fill="#bbff00" stroke="#0d0d0d" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="5" cy="-13" r="3.6" fill="#0d0d0d" />
        </g>
      </svg>

      {/* Orbiting badge — physical position + LTR so the textPath renders */}
      <div dir="ltr" className="absolute bottom-6 right-10 hidden h-[118px] w-[118px] md:block">
        <div className="absolute inset-0 rounded-full bg-lime-hot shadow-[0_18px_30px_rgb(0_0_0/0.14)]" />
        <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full">
          <defs>
            <path id="orbit-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
          </defs>
          <text
            style={{
              fontSize: rtl ? '10.5px' : '9.2px',
              fontFamily: labelFont,
              fontWeight: 700,
              letterSpacing: rtl ? '0' : '0.2em',
            }}
            className="fill-ink uppercase"
          >
            <textPath href="#orbit-circle">{orbitLabel}</textPath>
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
