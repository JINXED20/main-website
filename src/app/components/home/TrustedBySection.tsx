import { motion } from "motion/react";
import { AnimatedSection } from "../AnimatedSection";
import { useLanguage } from "../LanguageContext";

const partners = [
  "Aramex", "DHL Express", "Salla", "Zid", "Shopify",
  "Syriatel", "MTN Syria", "Haram Express", "FastShip",
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-3xl md:text-4xl lg:text-5xl text-[#E8E4DF] mb-2 tabular-nums">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {value.toLocaleString()}{suffix}
        </motion.span>
      </div>
      <div className="text-sm text-[#D4D0C8]/50">{label}</div>
    </motion.div>
  );
}

export function TrustedBySection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#0A1628] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <StatCounter value={25} suffix="+" label={t("Carriers Connected", "شركة توصيل متصلة")} />
            <StatCounter value={500} suffix="+" label={t("Active Merchants", "تاجر نشط")} />
            <StatCounter value={50000} suffix="+" label={t("Orders Processed", "طلب تمت معالجته")} />
            <StatCounter value={99.2} suffix="%" label={t("Delivery Success Rate", "نسبة نجاح التوصيل")} />
          </div>
        </AnimatedSection>

        {/* Partner logos */}
        <AnimatedSection delay={0.2}>
          <p className="text-center text-sm text-[#D4D0C8]/40 mb-8 tracking-widest uppercase">
            {t("Trusted by leading brands across Syria", "تثق بنا العلامات الرائدة في سوريا")}
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A1628] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A1628] to-transparent z-10" />
            <motion.div
              className="flex gap-12 items-center"
              animate={{ x: [0, -600] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner}-${i}`}
                  className="shrink-0 px-6 py-3 rounded-lg border border-white/5 bg-white/[0.02] text-[#D4D0C8]/30 text-sm whitespace-nowrap"
                >
                  {partner}
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
