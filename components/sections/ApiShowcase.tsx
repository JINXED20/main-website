'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from '@/hooks/useInView';
import { SectionTag, Button } from '@/components/ui';

const CODE_SAMPLES = {
  nodejs: `const ordex = require('@ordex/sdk');

const client = new ordex.Client({
  apiKey: process.env.ORDEX_API_KEY
});

// Create a shipment
const shipment = await client.shipments.create({
  from: { city: 'Riyadh', country: 'SA' },
  to: { city: 'Jeddah', country: 'SA' },
  packages: [{ weight: 2.5, dimensions: { l: 30, w: 20, h: 15 } }]
});

console.log(\`Tracking: \${shipment.trackingNumber}\`);`,

  python: `import ordex

client = ordex.Client(api_key=os.environ["ORDEX_API_KEY"])

# Create a shipment
shipment = client.shipments.create(
    from_address={"city": "Riyadh", "country": "SA"},
    to_address={"city": "Jeddah", "country": "SA"},
    packages=[{"weight": 2.5, "dimensions": {"l": 30, "w": 20, "h": 15}}]
)

print(f"Tracking: {shipment.tracking_number}")`,

  curl: `curl -X POST https://api.ordex.sa/v1/shipments \\
  -H "Authorization: Bearer $ORDEX_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": { "city": "Riyadh", "country": "SA" },
    "to": { "city": "Jeddah", "country": "SA" },
    "packages": [{
      "weight": 2.5,
      "dimensions": { "l": 30, "w": 20, "h": 15 }
    }]
  }'`,
} as const;

type Language = keyof typeof CODE_SAMPLES;

const SDK_TAGS = ['Node.js', 'Python', 'Go', 'Ruby', 'PHP', 'Java'];

export function ApiShowcase() {
  const t = useTranslations('api');
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<Language>('nodejs');

  const tabs: { id: Language; label: string }[] = [
    { id: 'nodejs', label: 'Node.js' },
    { id: 'python', label: 'Python' },
    { id: 'curl', label: 'cURL' },
  ];

  return (
    <section
      id="api"
      className="relative z-10 bg-[var(--black-soft)] px-[60px] py-[160px] max-md:px-5 max-md:py-[80px]"
      dir="ltr"
    >
      <motion.div
        ref={ref}
        className="grid grid-cols-2 items-center gap-[100px] max-lg:grid-cols-1 max-lg:gap-[50px]"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
      >
        {/* Text Content */}
        <div className="max-w-[500px] rtl:text-right" dir="auto">
          <SectionTag>{t('tag')}</SectionTag>
          <h2 className="mb-[20px] text-[52px] font-[800] tracking-[-3px] max-lg:text-[40px] max-md:text-[28px]">
            {t('title')}
          </h2>
          <p className="text-[18px] leading-[1.7] text-[var(--gray-light)]">
            {t('subtitle')}
          </p>

          {/* SDK Tags */}
          <div className="my-[30px] flex flex-wrap gap-[12px] rtl:justify-start">
            {SDK_TAGS.map((tag) => (
              <span
                key={tag}
                className="cursor-pointer rounded-[10px] border border-[var(--black-border)] bg-[var(--black-card)] px-[20px] py-[10px] text-[13px] transition-all duration-300 hover:-translate-y-[2px] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Features List */}
          <ul className="mb-[30px] space-y-[12px]">
            {['feature1', 'feature2', 'feature3', 'feature4'].map((key) => (
              <li key={key} className="flex items-center gap-[12px] rtl:flex-row-reverse">
                <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[rgba(0,255,136,0.1)]">
                  <svg
                    className="h-[12px] w-[12px] text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[15px] text-[var(--gray-light)]">{t(key)}</span>
              </li>
            ))}
          </ul>

          <Button href="#" variant="primary">
            {t('cta')} →
          </Button>
        </div>

        {/* Code Window */}
        <div className="overflow-hidden rounded-[24px] border border-[var(--black-border)] bg-[var(--black-card)] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
          {/* Tabs */}
          <div className="flex border-b border-[var(--black-border)]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 px-[28px] py-[18px] font-mono text-[13px] transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-[var(--accent)] bg-[rgba(0,255,136,0.05)] text-[var(--accent)]'
                    : 'border-transparent text-[var(--gray)] hover:bg-[rgba(255,255,255,0.02)] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code Content */}
          <div className="p-[35px]">
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-[13px] leading-[2]"
              >
                <code>
                  {CODE_SAMPLES[activeTab].split('\n').map((line, i) => (
                    <div key={i}>
                      {line.split(/(\b(?:const|let|var|import|from|async|await|require|new|process|console|print|curl|if|else|return)\b|'[^']*'|"[^"]*"|`[^`]*`|\/\/.*)/).map((part, j) => {
                        if (/^(const|let|var|import|from|async|await|require|new|if|else|return)$/.test(part)) {
                          return <span key={j} className="text-[#c678dd]">{part}</span>;
                        }
                        if (/^('.*'|".*"|`.*`)$/.test(part)) {
                          return <span key={j} className="text-[var(--accent)]">{part}</span>;
                        }
                        if (/^\/\/.*$/.test(part) || /^#.*$/.test(part)) {
                          return <span key={j} className="text-[#5c6370]">{part}</span>;
                        }
                        if (/\.(create|log|Client|shipments)/.test(part)) {
                          return <span key={j} className="text-[#61afef]">{part}</span>;
                        }
                        return <span key={j}>{part}</span>;
                      })}
                    </div>
                  ))}
                </code>
              </motion.pre>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
