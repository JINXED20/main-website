import { setRequestLocale } from 'next-intl/server';
import {
  Hero,
  Clients,
  Stats,
  Features,
  Integrations,
  Testimonials,
  ApiShowcase,
  Faq,
  Pricing,
  Cta,
  Footer,
} from '@/components/sections';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Clients />
      <Stats />
      <Features />
      <Integrations />
      <Testimonials />
      <ApiShowcase />
      <Faq />
      <Pricing />
      <Cta />
      <Footer />
    </>
  );
}
