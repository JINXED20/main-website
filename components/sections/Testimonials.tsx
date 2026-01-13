'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from '@/hooks/useInView';
import { SectionTag, StarRating } from '@/components/ui';
import { TESTIMONIALS } from '@/lib/constants';
import { Marquee } from '@/components/animations';

export function Testimonials() {
  const t = useTranslations('testimonials');
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="relative z-10 overflow-hidden bg-[var(--black)] px-[60px] py-[160px] max-md:px-5 max-md:py-[80px]">
      {/* Background Gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0, 255, 136, 0.05), transparent)',
        }}
      />

      <div ref={ref} className="relative z-[2]">
        {/* Header */}
        <motion.div
          className="mb-[80px] text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTag>{t('tag')}</SectionTag>
          <h2 className="mb-[20px] text-[52px] font-[800] tracking-[-3px] max-lg:text-[40px] max-md:text-[28px]">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-[600px] text-[18px] leading-[1.7] text-[var(--gray-light)]">
            {t('subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Testimonials Track Wrapper */}
      <div className="relative mx-[-60px] overflow-hidden px-[60px] max-md:mx-[-20px] max-md:px-[20px]">
        <Marquee speed={40} className="gap-[30px]">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="mx-[15px] w-[400px] flex-shrink-0 rounded-[24px] border border-[var(--black-border)] bg-[var(--black-card)] p-[40px] transition-all duration-[400ms] hover:-translate-y-[5px] hover:border-[rgba(0,255,136,0.4)] max-md:w-[320px] max-md:p-[30px]">
      {/* Stars */}
      <div className="mb-[20px] flex gap-[4px]">
        <StarRating rating={5} />
      </div>

      {/* Text */}
      <p className="mb-[30px] text-[16px] leading-[1.8] text-[var(--gray-light)]">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-[15px] rtl:flex-row-reverse">
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-cyan)] text-[18px] font-[700] text-black">
          {testimonial.initials}
        </div>
        <div className="rtl:text-right">
          <h4 className="mb-[4px] text-[15px] font-[600]">{testimonial.author}</h4>
          <span className="text-[13px] text-[var(--gray)]">
            {testimonial.role}, {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
}
