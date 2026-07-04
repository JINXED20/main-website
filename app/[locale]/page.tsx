import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { Metrics } from '@/components/sections/Metrics';
import { Strategy } from '@/components/sections/Strategy';
import { Flows } from '@/components/sections/Flows';
import { Audience } from '@/components/sections/Audience';
import { ApiZone } from '@/components/sections/ApiZone';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Metrics />
      <Strategy />
      <Flows />
      <Audience />
      <ApiZone />
      <Pricing />
      <Faq />
    </>
  );
}
