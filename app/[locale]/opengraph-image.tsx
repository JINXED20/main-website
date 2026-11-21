import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';

const size = { width: 1200, height: 630 };

// One image per locale, with alt text in that locale (the page title).
export async function generateImageMetadata({ params }: { params: { locale: string } }) {
  // Read messages directly: this also runs at build time, outside a request
  const alt = (params.locale === 'ar' ? ar : en).meta.title;
  return [{ id: 'og', alt, size, contentType: 'image/png' }];
}

// Pre-rendered in a real browser: the brand fonts, the logo and Arabic shaping
// are not available to next/og.
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
  id: Promise<string>;
}) {
  const { locale } = await params;
  const file = locale === 'ar' ? 'og-ar.png' : 'og-en.png';
  const png = await readFile(join(process.cwd(), 'app/[locale]', file));
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
