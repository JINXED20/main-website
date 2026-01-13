'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { NAV_LINKS, LOCATIONS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="relative" style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0a1210 15%, #0a1f18 30%, #0d2e23 50%, #103d2e 70%, #134a38 85%, #165a42 100%)',
      }}>
        {/* Noise Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.12]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Top Fade */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-[2] h-[200px]"
          style={{ background: 'linear-gradient(180deg, var(--black), transparent)' }}
        />

        {/* Top Bar */}
        <div className="relative z-10 flex items-center justify-between p-[30px_60px] max-md:flex-col max-md:gap-4 max-md:p-[20px]">
          <div className="flex gap-[24px]">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] text-white opacity-80 transition-all duration-300 hover:-translate-y-[2px] hover:opacity-100"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <span className="text-[20px] font-[700]">ORDEX</span>
          <div /> {/* Spacer for flexbox */}
        </div>

        {/* CTA Section */}
        <div className="relative z-10 p-[80px_60px_120px] text-center max-md:p-[40px_20px_60px]">
          <h2 className="mb-[50px] text-[90px] font-[800] leading-[1] tracking-[-5px] max-lg:text-[70px] max-md:text-[40px] max-md:tracking-[-2px]">
            <span className="text-white">Let&apos;s Ship </span>
            <span className="text-[rgba(255,255,255,0.35)]">Smarter</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-[12px] rounded-full bg-white px-[50px] py-[22px] text-[16px] font-[600] text-black transition-all duration-[400ms] hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]"
          >
            Start Free Trial
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 p-[60px_60px_40px] max-md:p-[40px_20px_30px]">
          {/* Content Row */}
          <div className="mb-[80px] flex justify-between max-lg:flex-col max-lg:gap-[40px] rtl:flex-row-reverse">
            {/* Left Side */}
            <div className="flex flex-col gap-[40px]">
              <a
                href="#"
                className="inline-flex w-fit rounded-full border border-[rgba(255,255,255,0.3)] px-[28px] py-[14px] text-[12px] font-[600] uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)]"
              >
                Contact Us
              </a>

              {/* Locations */}
              <div className="flex gap-[80px] max-md:flex-col max-md:gap-[30px]">
                {LOCATIONS.map((location, index) => (
                  <div key={index}>
                    <h4 className="mb-[16px] border-b border-[rgba(255,255,255,0.2)] pb-[12px] text-[15px] font-[600]">
                      {t(`locationItems.${location.cityKey}`)}
                    </h4>
                    <p className="text-[14px] leading-[1.8] text-[rgba(255,255,255,0.6)]">
                      {t(`locationItems.${location.addressKey}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-end gap-[30px] text-right max-lg:items-start max-lg:text-left rtl:items-start rtl:text-right">
              <div className="flex flex-col items-end gap-[12px] max-lg:items-start">
                <a
                  href="mailto:hello@ordex.io"
                  className="border-b border-[rgba(255,255,255,0.2)] pb-[6px] text-[15px] text-[rgba(255,255,255,0.7)] transition-colors duration-300 hover:text-white"
                >
                  hello@ordex.io
                </a>
                <a
                  href="tel:+966555123456"
                  className="border-b border-[rgba(255,255,255,0.2)] pb-[6px] text-[15px] text-[rgba(255,255,255,0.7)] transition-colors duration-300 hover:text-white"
                >
                  +966 555 123 456
                </a>
              </div>

              {/* Social Bottom */}
              <div className="mt-[20px] flex gap-[20px]">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] text-[rgba(255,255,255,0.6)] transition-all duration-300 hover:text-white"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between border-t border-[rgba(255,255,255,0.1)] pt-[30px] max-md:flex-col max-md:gap-4 max-md:text-center">
            <p className="text-[13px] text-[rgba(255,255,255,0.5)]">
              © {currentYear} ORDEX. {t('rights')}
            </p>
            <div className="flex gap-[30px]">
              <Link
                href="#"
                className="border-b border-[rgba(255,255,255,0.2)] pb-[4px] text-[13px] text-[rgba(255,255,255,0.5)] transition-colors hover:text-white"
              >
                {t('privacy')}
              </Link>
              <Link
                href="#"
                className="border-b border-[rgba(255,255,255,0.2)] pb-[4px] text-[13px] text-[rgba(255,255,255,0.5)] transition-colors hover:text-white"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="pointer-events-none absolute bottom-[-20px] left-0 right-0 z-[5] h-[200px] overflow-hidden">
          <span
            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[280px] font-[900] tracking-[-15px] text-[rgba(255,255,255,0.04)] max-lg:text-[180px] max-md:text-[100px]"
            style={{ animation: 'watermarkPulse 8s ease-in-out infinite' }}
          >
            ORDEX
          </span>
          <span
            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[280px] font-[900] tracking-[-15px] text-transparent blur-[10px] max-lg:text-[180px] max-md:text-[100px]"
            style={{ WebkitTextStroke: '1px rgba(0, 255, 136, 0.08)' }}
          >
            ORDEX
          </span>
        </div>
      </div>
    </footer>
  );
}
