import { motion } from "motion/react";
import { AnimatedSection } from "../AnimatedSection";
import { Link } from "react-router";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function PricingPreviewSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const plans = [
    {
      name: t("Free", "مجاني"),
      price: "0",
      desc: t("For merchants just getting started", "للتجار في بداية الطريق"),
      features: [
        t("Up to 100 orders/month", "حتى ١٠٠ طلب/شهر"),
        t("2 carrier connections", "اتصال بشركتي توصيل"),
        t("Basic tracking", "تتبع أساسي"),
        t("Email notifications", "إشعارات بريد إلكتروني"),
        t("Standard support", "دعم عادي"),
      ],
      cta: t("Start Free", "ابدأ مجاناً"),
      highlight: false,
    },
    {
      name: t("Growth", "نمو"),
      price: "49",
      desc: t("For scaling e-commerce businesses", "للأعمال التجارية الإلكترونية المتنامية"),
      features: [
        t("Up to 2,000 orders/month", "حتى ٢,٠٠٠ طلب/شهر"),
        t("Unlimited carriers", "شركات توصيل غير محدودة"),
        t("Branded tracking pages", "صفحات تتبع بعلامتك"),
        t("SMS + WhatsApp notifications", "إشعارات SMS + واتساب"),
        t("COD reconciliation", "مطابقة الدفع عند الاستلام"),
        t("Returns management", "إدارة الإرجاع"),
        t("Priority support", "دعم ذو أولوية"),
      ],
      cta: t("Start Growing", "ابدأ النمو"),
      highlight: true,
    },
    {
      name: t("Enterprise", "المؤسسات"),
      price: t("Custom", "مخصص"),
      desc: t("For large-scale operations", "للعمليات واسعة النطاق"),
      features: [
        t("Unlimited orders", "طلبات غير محدودة"),
        t("Custom carrier integrations", "تكاملات مخصصة"),
        t("White-label solution", "حل بعلامتك التجارية"),
        t("Dedicated account manager", "مدير حساب مخصص"),
        t("API access", "وصول API"),
        t("Custom analytics", "تحليلات مخصصة"),
        t("SLA guarantee", "ضمان مستوى الخدمة"),
      ],
      cta: t("Contact Sales", "تواصل مع المبيعات"),
      highlight: false,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A1628] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
            {t("Pricing", "الأسعار")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E8E4DF] max-w-3xl mx-auto mb-6">
            {t("Simple, Transparent", "بسيطة وشفافة")}{" "}
            <span className="text-[#D4D0C8]/40">{t("Pricing", "الأسعار")}</span>
          </h2>
          <p className="text-lg text-[#D4D0C8]/50 max-w-2xl mx-auto">
            {t(
              "Start free, scale as you grow. No hidden fees, no surprises.",
              "ابدأ مجاناً، وتوسّع مع نموك. بدون رسوم خفية أو مفاجآت."
            )}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <motion.div
                className={`relative p-8 rounded-2xl h-full flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#00C896]/10 to-[#1A2A42]/40 border border-[#00C896]/20"
                    : "bg-[#1A2A42]/40 border border-white/5"
                }`}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00C896] text-[#0A1628] text-xs rounded-full">
                    {t("Most Popular", "الأكثر شعبية")}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg text-[#E8E4DF] mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    {plan.price === t("Custom", "مخصص") ? (
                      <span className="text-3xl text-[#E8E4DF]">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-sm text-[#D4D0C8]/50">$</span>
                        <span className="text-4xl text-[#E8E4DF]">{plan.price}</span>
                        <span className="text-sm text-[#D4D0C8]/50">/{t("month", "شهر")}</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-[#D4D0C8]/40">{plan.desc}</p>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={16} className="text-[#00C896] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#D4D0C8]/60">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={plan.price === t("Custom", "مخصص") ? "/contact" : "/pricing"}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm transition-all duration-300 ${
                    plan.highlight
                      ? "bg-[#00C896] text-[#0A1628] hover:bg-[#00C896]/90 hover:shadow-lg hover:shadow-[#00C896]/20"
                      : "border border-white/10 text-[#E8E4DF] hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                  <Arrow size={14} />
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
