# Ordex Website — Where every asset and element lives

Quick map for adding or replacing images, brand assets, and page elements.

## Images & static files → `public/`

| Asset | Path | Notes |
|---|---|---|
| Logo mark (source file) | `public/brand/ordex-logo.svg` | The full "OX." icon artwork. Referenced by JSON-LD. Served at `https://site/brand/ordex-logo.svg` |
| Any new brand images | `public/brand/…` | e.g. `public/brand/banner.png` → served at `/brand/banner.png` |
| Photos / section images | `public/images/…` | Use with `next/image`: `<Image src="/images/x.webp" width={..} height={..} alt="…" />`. Prefer WebP/AVIF |
| Favicon | `app/icon.svg` | Auto-served by Next as `/icon.svg` (browser tab icon). Replace the file, keep the name |
| Social share image (OG) | `app/[locale]/opengraph-image.tsx` | Generated as PNG at build/request time. Edit the JSX to change the design — no image file needed |

The topbar/footer logo is **drawn in code**, not an image: `components/ui/Logo.tsx`.
Change colors/shape there once and it updates everywhere.

## Page elements → `components/`

| Element | File |
|---|---|
| Sticky header, nav links, mobile menu | `components/layout/Topbar.tsx` |
| Language switcher (EN ⇄ عربي) | `components/layout/LanguageSwitcher.tsx` |
| Footer + big CTA band | `components/layout/Footer.tsx` |
| Hero (headline, neon rope art, orbit badge) | `components/sections/Hero.tsx` |
| Metrics strip (count-up numbers) | `components/sections/Metrics.tsx` |
| "We're not the trains. We're the rails." | `components/sections/Strategy.tsx` |
| 4 platform cards (One API / Carrier OS / …) | `components/sections/Flows.tsx` |
| Black "Built for anyone selling anywhere" | `components/sections/Audience.tsx` |
| Code sample + live orders dashboard | `components/sections/ApiZone.tsx` |
| Pricing cards | `components/sections/Pricing.tsx` |
| FAQ accordion | `components/sections/Faq.tsx` |
| SVG icons + card pictograms | `components/ui/icons.tsx` |
| Scroll-reveal animation wrapper | `components/motion/Reveal.tsx` |

Section order is set in `app/[locale]/page.tsx`.

## Text & translations → `messages/`

**All copy** (both languages) lives in `messages/en.json` and `messages/ar.json`.
Never hardcode user-facing strings in components — add the key to **both** files.

## Design tokens → `app/globals.css`

Brand colors, fonts, buttons, and helper classes:
`--color-lime: #bbff00`, `--color-purple: #a550ff`, `--color-ink: #000000`.

⚠️ Custom CSS must go inside `@layer base { … }` or `@layer components { … }`.
Unlayered CSS overrides Tailwind utilities (e.g. breaks `hidden`, `md:flex`).

## SEO

| What | File |
|---|---|
| Titles, descriptions, hreflang | `app/[locale]/layout.tsx` (`generateMetadata`) |
| Sitemap / robots / PWA manifest | `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` |
| 404 page | `app/[locale]/not-found.tsx` |
