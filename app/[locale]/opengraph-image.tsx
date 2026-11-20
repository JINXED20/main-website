import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import en from '@/messages/en.json';
import ar from '@/messages/ar.json';

const size = { width: 1200, height: 630 };

// One image per locale, with alt text in that locale (the page title).
export async function generateImageMetadata({ params }: { params: { locale: string } }) {
  // Read messages directly: this also runs at build time, outside a request
  const alt = (params.locale === 'ar' ? ar : en).meta.title;
  return [{ id: 'og', alt, size, contentType: 'image/png' }];
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
  id: Promise<string>;
}) {
  const { locale } = await params;

  // Satori can't shape Arabic, so /ar uses a pre-rendered PNG (og-ar.png, made
  // in a real browser with Noto Kufi Arabic) in the same layout as below.
  if (locale === 'ar') {
    const png = await readFile(join(process.cwd(), 'app/[locale]/og-ar.png'));
    return new ImageResponse(
      (
        <img
          src={`data:image/png;base64,${png.toString('base64')}`}
          width={size.width}
          height={size.height}
          alt=""
        />
      ),
      size
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f6f6f1',
          padding: 72,
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand shapes — lime circle, ink X, purple dot */}
        <div style={{ display: 'flex', position: 'absolute', top: 96, right: 72 }}>
          <div
            style={{
              width: 170,
              height: 170,
              borderRadius: 9999,
              background: '#bbff00',
              display: 'flex',
            }}
          />
          <div
            style={{
              width: 170,
              height: 170,
              marginLeft: 28,
              position: 'relative',
              display: 'flex',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 62,
                top: -8,
                width: 46,
                height: 186,
                borderRadius: 23,
                background: '#000000',
                transform: 'rotate(45deg)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 62,
                top: -8,
                width: 46,
                height: 186,
                borderRadius: 23,
                background: '#000000',
                transform: 'rotate(-45deg)',
              }}
            />
          </div>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 9999,
              background: '#a550ff',
              alignSelf: 'flex-end',
              marginLeft: 20,
              display: 'flex',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 30,
            fontWeight: 700,
            color: '#000',
            letterSpacing: 2,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 9999,
              background: '#bbff00',
              display: 'flex',
            }}
          />
          TRYORDEX.COM
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 130,
              fontWeight: 700,
              color: '#000',
              lineHeight: 1,
            }}
          >
            Ordex<span style={{ color: '#a550ff' }}>.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 44,
              fontWeight: 700,
              color: '#000',
              display: 'flex',
            }}
          >
            We&apos;re not the trains.&nbsp;
            <span style={{ background: '#bbff00', padding: '0 12px', display: 'flex' }}>
              We&apos;re the rails.
            </span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
