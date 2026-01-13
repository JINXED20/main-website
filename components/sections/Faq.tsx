'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from '@/hooks/useInView';
import { SectionTag, Button } from '@/components/ui';
import { FAQ_ITEMS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Faq() {
  const t = useTranslations('faq');
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-10 bg-[var(--black)] px-[60px] py-[160px] max-md:px-5 max-md:py-[80px]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_1.2fr] gap-[80px] max-lg:grid-cols-1 max-lg:gap-[40px]">
        {/* Left - Header (Sticky) */}
        <motion.div
          className="sticky top-[120px] h-fit max-lg:static"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTag>{t('tag')}</SectionTag>
          <h2 className="mb-[20px] text-left text-[52px] font-[800] tracking-[-3px] max-lg:text-[40px] max-md:text-[28px]">
            {t('title')}
          </h2>
          <p className="mb-[30px] text-[16px] leading-[1.7] text-[var(--gray-light)]">
            {t('subtitle')}
          </p>
          <Button href="#" variant="primary">
            Contact Support
          </Button>
        </motion.div>

        {/* Right - FAQ Items */}
        <motion.div
          ref={ref}
          className="flex flex-col gap-[16px]"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
        >
          {FAQ_ITEMS.map((item, index) => (
            <motion.div key={item.questionKey} variants={fadeInUp} custom={index}>
              <FaqItem
                question={t(`items.${item.questionKey}.question`)}
                answer={t(`items.${item.questionKey}.answer`)}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div
      className={`overflow-hidden rounded-[16px] border bg-[var(--black-card)] transition-all duration-300 ${
        isOpen ? 'border-[var(--accent)]' : 'border-[var(--black-border)] hover:border-[rgba(0,255,136,0.3)]'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-[24px_28px] text-left text-[16px] font-[600] transition-colors duration-300 rtl:flex-row-reverse"
        style={{ color: isOpen ? 'var(--accent)' : 'var(--white)' }}
      >
        <span>{question}</span>
        <svg
          className={`h-[24px] w-[24px] flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'rotate-45 stroke-[var(--accent)]' : 'stroke-[var(--gray)]'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="px-[28px] pb-[24px] text-[15px] leading-[1.8] text-[var(--gray-light)]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
