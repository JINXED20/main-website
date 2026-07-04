/**
 * Ordex brand lockup — Pacman "O" + RDEX + purple full stop.
 * Drawn in code so it stays crisp at any size and inherits theme colors.
 */

function PacmanO({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <defs>
        <mask id="ordex-mouth">
          <rect width="100" height="100" fill="#fff" />
          <polygon points="48,50 60,-10 112,24" fill="#000" />
        </mask>
      </defs>
      <circle cx="46" cy="52" r="44" fill="#bbff00" mask="url(#ordex-mouth)" />
    </svg>
  );
}

interface LogoProps {
  /** Tailwind classes controlling overall size, e.g. text-3xl */
  className?: string;
  /** Wordmark color — defaults to currentColor */
  inverted?: boolean;
}

export function Logo({ className = '', inverted = false }: LogoProps) {
  return (
    // Always LTR — the latin lockup must not mirror on the Arabic site.
    <span
      dir="ltr"
      className={`inline-flex items-end gap-[0.14em] leading-none ${className}`}
      style={{ fontFamily: 'var(--font-archivo-black), sans-serif' }}
    >
      <PacmanO className="h-[0.92em] w-[0.92em] flex-none self-center" />
      <span className={`tracking-[-0.07em] ${inverted ? 'text-white' : 'text-ink'}`}>
        RDEX
      </span>
      <span className="mb-[0.04em] h-[0.22em] w-[0.22em] flex-none rounded-full bg-purple" />
    </span>
  );
}
