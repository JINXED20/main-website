import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

/** Diagonal arrow (↗) — flips automatically in RTL via .dir-arrow */
export function ArrowUpRight({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`dir-arrow ${className ?? ''}`}
      {...base}
      {...props}
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function Plus(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

/* ------- Brutalist pictograms for the platform cards ------- */

export function GlyphApi(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} strokeWidth={3} {...props}>
      <circle cx="8" cy="36" r="4" />
      <circle cx="40" cy="12" r="4" />
      <path d="M12 36h12V12h12" />
    </svg>
  );
}

export function GlyphTruck(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} strokeWidth={3} {...props}>
      <path d="M4 12h24v20H4zM28 20h10l6 6v6H28z" />
      <circle cx="12" cy="38" r="4" />
      <circle cx="36" cy="38" r="4" />
    </svg>
  );
}

export function GlyphStore(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} strokeWidth={3} {...props}>
      <path d="M6 18 10 6h28l4 12M6 18h36M6 18v24h36V18M19 42V30h10v12" />
    </svg>
  );
}

export function GlyphTrack(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} strokeWidth={3} {...props}>
      <path d="M24 42c8-9 14-15 14-23a14 14 0 1 0-28 0c0 8 6 14 14 23Z" />
      <circle cx="24" cy="19" r="5" />
    </svg>
  );
}
