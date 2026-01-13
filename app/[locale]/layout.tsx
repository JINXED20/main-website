import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Inter, JetBrains_Mono, Tajawal } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { Navbar, PageLoader, ScrollProgress, BackToTop } from '@/components/layout';
import { MouseSpotlight } from '@/components/animations';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  const isRtl = locale === 'ar';
  const fontClass = isRtl
    ? `${tajawal.variable} ${jetbrainsMono.variable}`
    : `${inter.variable} ${jetbrainsMono.variable}`;

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className={fontClass}>
      <body className="min-h-screen bg-[var(--black)] font-sans text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <PageLoader />
          <ScrollProgress />
          <MouseSpotlight />
          <Navbar />
          <main>{children}</main>
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
