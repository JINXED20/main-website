import { motion } from "motion/react";
import { AnimatedSection } from "../AnimatedSection";
import { Phone, MessageSquare, FileText, AlertTriangle, DollarSign } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function ProblemSection() {
  const { t } = useLanguage();

  const painPoints = [
    { icon: Phone, label: t("Endless Phone Calls", "مكالمات لا تنتهي"), desc: t("Coordinating deliveries over phone calls with no records", "تنسيق التوصيل عبر مكالمات هاتفية بدون سجلات") },
    { icon: MessageSquare, label: t("WhatsApp Chaos", "فوضى واتساب"), desc: t("Managing orders across dozens of WhatsApp groups", "إدارة الطلبات عبر عشرات مجموعات واتساب") },
    { icon: FileText, label: t("Manual Tracking", "تتبع يدوي"), desc: t("Paper logs, spreadsheets, and guesswork", "سجلات ورقية وجداول وتخمينات") },
    { icon: AlertTriangle, label: t("No Visibility", "انعدام الرؤية"), desc: t("Customers asking 'Where is my order?' with no answer", "العملاء يسألون 'أين طلبي؟' بلا إجابة") },
    { icon: DollarSign, label: t("Cash Confusion", "فوضى المال"), desc: t("COD reconciliation done on paper with frequent errors", "مطابقة الدفع عند الاستلام على الورق مع أخطاء متكررة") },
  ];

  const solutions = [
    { label: t("One Dashboard", "لوحة واحدة"), desc: t("All carriers, all orders, one view", "كل الشركات، كل الطلبات، رؤية واحدة") },
    { label: t("Live Tracking", "تتبع مباشر"), desc: t("Real-time GPS tracking for every shipment", "تتبع GPS مباشر لكل شحنة") },
    { label: t("Auto-Assignment", "توزيع تلقائي"), desc: t("Smart routing picks the best carrier", "التوجيه الذكي يختار أفضل ناقل") },
    { label: t("COD Reconciliation", "مطابقة الدفع"), desc: t("Every penny tracked and reconciled", "كل قرش يُتتبّع ويُطابق") },
    { label: t("Analytics", "التحليلات"), desc: t("Data-driven decisions, not guesswork", "قرارات مبنية على البيانات لا التخمين") },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0F1D32] to-[#0A1628] relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-red-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
            {t("The Problem", "المشكلة")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E8E4DF] max-w-3xl mx-auto mb-6">
            {t("Delivery in Syria Is Broken.", "التوصيل في سوريا معطّل.")}{" "}
            <span className="text-[#D4D0C8]/40">{t("We're Fixing It.", "ونحن نصلحه.")}</span>
          </h2>
          <p className="text-lg text-[#D4D0C8]/50 max-w-2xl mx-auto">
            {t(
              "Merchants juggle multiple carriers through phone calls and WhatsApp. Carriers run fleets on paper. Nobody has visibility. Everyone loses money.",
              "التجار يتعاملون مع شركات توصيل متعددة عبر المكالمات والواتساب. الشركات تدير أساطيلها على الورق. لا أحد يرى الصورة كاملة. والكل يخسر."
            )}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Before - The Chaos */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="text-sm text-red-400/80 tracking-wider uppercase">
                  {t("Before Odrex", "قبل أودركس")}
                </span>
              </div>
              <div className="space-y-3">
                {painPoints.map((point, i) => (
                  <motion.div
                    key={point.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <point.icon size={18} className="text-red-400/60" />
                    </div>
                    <div>
                      <div className="text-sm text-[#E8E4DF]/80 mb-0.5">{point.label}</div>
                      <div className="text-xs text-[#D4D0C8]/40">{point.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* After - The Solution */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#00C896]" />
                <span className="text-sm text-[#00C896] tracking-wider uppercase">
                  {t("With Odrex", "مع أودركس")}
                </span>
              </div>
              <div className="space-y-3">
                {solutions.map((point, i) => (
                  <motion.div
                    key={point.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#00C896]/5 border border-[#00C896]/10"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#00C896]/10 flex items-center justify-center shrink-0">
                      <motion.div
                        className="w-2.5 h-2.5 rounded-full bg-[#00C896]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    </div>
                    <div>
                      <div className="text-sm text-[#E8E4DF]/80 mb-0.5">{point.label}</div>
                      <div className="text-xs text-[#D4D0C8]/40">{point.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
