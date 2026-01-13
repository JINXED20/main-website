'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { navLinks } from '@/lib/constants';
import { navbarAnimation } from '@/lib/animations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const t = useTranslations();

  return (
    <motion.nav
      variants={navbarAnimation}
      initial="hidden"
      animate="visible"
      className="fixed left-0 right-0 top-0 z-[1000] flex items-center justify-between border-b border-[var(--black-border)] bg-[rgba(0,0,0,0.8)] px-[60px] py-5 backdrop-blur-[20px] max-md:px-5 max-md:py-[15px]"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 text-[28px] font-extrabold tracking-tight rtl:flex-row-reverse">
        <div
          className="flex h-[42px] w-[42px] items-center justify-center rounded-xl text-[22px]"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent-cyan))',
          }}
        >
          ◈
        </div>
        <span>ORDEX</span>
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-[40px] max-lg:hidden rtl:flex-row-reverse">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="group relative text-[14px] font-medium text-[var(--gray-light)] transition-colors duration-300 hover:text-white"
            >
              {t(link.labelKey)}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-3 rtl:flex-row-reverse">
        <LanguageSwitcher />
        <Button
          href="#"
          variant="outline"
          className="max-md:hidden"
        >
          {t('nav.signin')}
        </Button>
        <Button href="#">
          {t('nav.getstarted')} →
        </Button>
      </div>
    </motion.nav>
  );
}
