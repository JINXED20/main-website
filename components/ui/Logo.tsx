/**
 * Ordex wordmark.
 * Light surfaces: the SVG lockup (Pacman-O "ORDEX." artwork, /brand/ordex-wordmark.svg).
 * Dark surfaces (inverted): still the text version — the SVG has black shapes
 * that vanish on ink; swap once an inverted SVG export exists.
 */

interface LogoProps {
  /** Tailwind classes controlling overall size, e.g. text-3xl */
  className?: string;
  /** White wordmark for dark surfaces */
  inverted?: boolean;
}

export function Logo({ className = '', inverted = false }: LogoProps) {
  if (!inverted) {
    // Two exports; CSS shows the one matching the theme (no flash before hydration)
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand SVG, no optimization needed */}
        <img
          src="/brand/ordex-mark.svg"
          alt="Ordex"
          dir="ltr"
          className={`logo-light inline-block h-[1.4em] w-auto ${className}`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- static brand SVG, no optimization needed */}
        <img
          src="/brand/ordex-mark-dark.svg"
          alt="Ordex"
          dir="ltr"
          className={`logo-dark h-[1.4em] w-auto ${className}`}
        />
      </>
    );
  }
  return (
    // Always LTR — the latin lockup must not mirror on the Arabic site.
    <span
      dir="ltr"
      className={`inline-block leading-none tracking-[-0.05em] ${inverted ? 'text-white' : 'text-ink'} ${className}`}
      style={{ fontFamily: 'var(--font-archivo-black), sans-serif' }}
    >
      Ordex<span className="text-purple">.</span>
    </span>
  );
}
