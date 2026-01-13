'use client';

import { useTranslations } from 'next-intl';
import { Marquee } from '@/components/animations';

const clientLogos = [
  { name: 'Salla', icon: '🛒' },
  { name: 'Zid', icon: '📦' },
  { name: 'Noon', icon: '🌙' },
  { name: 'Amazon', icon: '📱' },
  { name: 'Jarir', icon: '📚' },
  { name: 'Extra', icon: '💻' },
  { name: 'Namshi', icon: '👗' },
  { name: 'Shein', icon: '✨' },
];

export function Clients() {
  const t = useTranslations('clients');

  return (
    <section className="relative z-10 overflow-hidden border-b border-t border-[var(--black-border)] bg-[var(--black)] py-[80px]">
      <p className="mb-[40px] text-center text-[13px] uppercase tracking-[3px] text-[var(--gray)]">
        {t('title')}
      </p>

      <Marquee speed={30}>
        {clientLogos.map((client) => (
          <div
            key={client.name}
            className="mx-[40px] flex h-[60px] min-w-[180px] items-center justify-center gap-[10px] opacity-40 grayscale transition-all duration-[400ms] hover:opacity-100 hover:grayscale-0"
          >
            <span className="text-[40px]">{client.icon}</span>
            <span className="text-[20px] font-[700] text-white">{client.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
