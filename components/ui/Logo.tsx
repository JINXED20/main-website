/**
 * Ordex wordmark — "Ordex" in Archivo Black with the purple full stop.
 * Text-only: crisp at any size, no image assets.
 */

interface LogoProps {
  /** Tailwind classes controlling overall size, e.g. text-3xl */
  className?: string;
  /** White wordmark for dark surfaces */
  inverted?: boolean;
}

export function Logo({ className = '', inverted = false }: LogoProps) {
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
