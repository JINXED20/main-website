import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Ordex — Every order. Every carrier. One gateway.';

export default function OpengraphImage() {
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
