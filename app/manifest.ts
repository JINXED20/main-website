import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ordex',
    short_name: 'Ordex',
    description: 'Every order. Every carrier. One gateway.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f6f1',
    theme_color: '#bbff00',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/brand/icon-3d.png', sizes: '640x640', type: 'image/png' },
    ],
  };
}
