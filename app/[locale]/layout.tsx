import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { Archivo, Archivo_Black, Cairo, Geist_Mono, Noto_Kufi_Arabic } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { Topbar } from '@/components/layout/Topbar';
import { Footer } from '@/components/layout/Footer';

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-geist-mono',
  display: 'swap',
});

// Arabic display: Noto Kufi Arabic — geometric Kufi, weight 900 pairs with Archivo Black
const kufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic-display',
  display: 'swap',
});

// Arabic body/UI: Cairo — modern geometric sans, the Levant e-commerce standard
const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
});

const BASE_URL = 'https://tryordex.com';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(BASE_URL),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', ar: '/ar', 'x-default': '/en' },
    },
    openGraph: {
      type: 'website',
      siteName: 'Ordex',
      locale: locale === 'ar' ? 'ar_SY' : 'en_US',
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6f6f1',
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'a11y' });
  const isRtl = locale === 'ar';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ordex',
    url: BASE_URL,
    logo: `${BASE_URL}/brand/ordex-logo.svg`,
    email: 'hello@tryordex.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Damascus', addressCountry: 'SY' },
  };

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${archivoBlack.variable} ${archivo.variable} ${geistMono.variable} ${kufiArabic.variable} ${cairo.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <a href="#main" className="skip-link">
            {t('skip')}
          </a>
          <Topbar />
          <main id="main">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
