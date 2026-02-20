import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Link } from "react-router";
import { Check, Minus, ArrowRight, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const plans = [
    {
      name: t("Free", "مجاني"),
      price: { monthly: "0", annual: "0" },
      desc: t("Perfect for testing the waters", "مثالي للتجربة"),
      features: [
        t("Up to 100 orders/month", "حتى ١٠٠ طلب/شهر"),
        t("2 carrier connections", "اتصال بشركتي توصيل"),
        t("Basic shipment tracking", "تتبع شحنات أساسي"),
        t("Email notifications", "إشعارات بريد إلكتروني"),
        t("Standard support (email)", "دعم عادي (بريد إلكتروني)"),
        t("Basic analytics dashboard", "لوحة تحليلات أساسية"),
      ],
      cta: t("Start Free", "ابدأ مجاناً"),
      highlight: false,
    },
    {
      name: t("Growth", "نمو"),
      price: { monthly: "49", annual: "39" },
      desc: t("For scaling e-commerce businesses", "للأعمال الإلكترونية المتنامية"),
      features: [
        t("Up to 2,000 orders/month", "حتى ٢,٠٠٠ طلب/شهر"),
        t("Unlimited carrier connections", "شركات توصيل غير محدودة"),
        t("Branded tracking pages", "صفحات تتبع بعلامتك"),
        t("SMS + WhatsApp notifications", "إشعارات SMS + واتساب"),
        t("Full COD reconciliation", "مطابقة COD كاملة"),
        t("Returns management portal", "بوابة إدارة الإرجاع"),
        t("Advanced analytics", "تحليلات متقدمة"),
        t("Priority support (chat)", "دعم ذو أولوية (محادثة)"),
        t("Rate comparison engine", "محرك مقارنة الأسعار"),
        t("Multi-user access (5 seats)", "وصول متعدد المستخدمين (٥ مقاعد)"),
      ],
      cta: t("Start Growing", "ابدأ النمو"),
      highlight: true,
    },
    {
      name: t("Enterprise", "المؤسسات"),
      price: { monthly: t("Custom", "مخصص"), annual: t("Custom", "مخصص") },
      desc: t("For large-scale operations", "للعمليات واسعة النطاق"),
      features: [
        t("Unlimited orders", "طلبات غير محدودة"),
        t("Custom carrier integrations", "تكاملات مخصصة"),
        t("White-label tracking pages", "صفحات تتبع بعلامتك الخاصة"),
        t("Dedicated account manager", "مدير حساب مخصص"),
        t("Full API access", "وصول API كامل"),
        t("Custom analytics & reports", "تحليلات وتقارير مخصصة"),
        t("SLA guarantee (99.9%)", "ضمان SLA (٩٩.٩٪)"),
        t("Phone support", "دعم هاتفي"),
        t("Custom workflows", "سير عمل مخصص"),
        t("Unlimited user seats", "مقاعد مستخدمين غير محدودة"),
        t("On-premise deployment option", "خيار نشر محلي"),
      ],
      cta: t("Contact Sales", "تواصل مع المبيعات"),
      highlight: false,
    },
  ];

  const comparisonFeatures = [
    { feature: t("Monthly Orders", "الطلبات الشهرية"), free: "100", growth: "2,000", enterprise: t("Unlimited", "غير محدود") },
    { feature: t("Carrier Connections", "اتصالات الشركات"), free: "2", growth: t("Unlimited", "غير محدود"), enterprise: t("Unlimited + Custom", "غير محدود + مخصص") },
    { feature: t("Tracking Pages", "صفحات التتبع"), free: t("Basic", "أساسي"), growth: t("Branded", "بعلامتك"), enterprise: t("White-label", "بعلامتك الخاصة") },
    { feature: t("SMS Notifications", "إشعارات SMS"), free: false, growth: true, enterprise: true },
    { feature: t("WhatsApp Notifications", "إشعارات واتساب"), free: false, growth: true, enterprise: true },
    { feature: t("COD Reconciliation", "مطابقة COD"), free: false, growth: true, enterprise: true },
    { feature: t("Returns Portal", "بوابة الإرجاع"), free: false, growth: true, enterprise: true },
    { feature: t("Analytics", "التحليلات"), free: t("Basic", "أساسي"), growth: t("Advanced", "متقدم"), enterprise: t("Custom", "مخصص") },
    { feature: t("API Access", "وصول API"), free: false, growth: t("Limited", "محدود"), enterprise: t("Full", "كامل") },
    { feature: t("User Seats", "مقاعد المستخدمين"), free: "1", growth: "5", enterprise: t("Unlimited", "غير محدود") },
    { feature: t("Support", "الدعم"), free: t("Email", "بريد إلكتروني"), growth: t("Chat", "محادثة"), enterprise: t("Phone + Dedicated", "هاتفي + مخصص") },
    { feature: "SLA", free: false, growth: false, enterprise: "99.9%" },
  ];

  const faqs = [
    {
      q: t("Can I switch plans later?", "هل يمكنني تغيير الخطة لاحقاً؟"),
      a: t("Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.", "بالتأكيد. يمكنك ترقية أو تخفيض خطتك في أي وقت. التغييرات تسري في بداية دورة الفوترة التالية."),
    },
    {
      q: t("What happens if I exceed my order limit?", "ماذا يحدث إذا تجاوزت حد الطلبات؟"),
      a: t("We'll notify you when you're approaching your limit. You can upgrade your plan or pay a small per-order fee for overages.", "سنُبلغك عند اقترابك من الحد. يمكنك ترقية خطتك أو دفع رسوم صغيرة لكل طلب إضافي."),
    },
    {
      q: t("Is there a contract or commitment?", "هل هناك عقد أو التزام؟"),
      a: t("No long-term contracts. All plans are month-to-month (or annual with a discount). Cancel anytime.", "لا عقود طويلة الأمد. جميع الخطط شهرية (أو سنوية بخصم). إلغاء في أي وقت."),
    },
    {
      q: t("Do you offer discounts for Syrian startups?", "هل تقدمون خصومات للشركات الناشئة السورية؟"),
      a: t("Yes! We have special pricing for early-stage startups and social enterprises based in Syria. Contact us for details.", "نعم! لدينا أسعار خاصة للشركات الناشئة والمؤسسات الاجتماعية في سوريا. تواصلوا معنا للتفاصيل."),
    },
    {
      q: t("What payment methods do you accept?", "ما طرق الدفع التي تقبلونها؟"),
      a: t("We accept major credit cards, bank transfers, and select mobile payment options available in Syria.", "نقبل بطاقات الائتمان الرئيسية والتحويلات البنكية وبعض خيارات الدفع المتاحة في سوريا."),
    },
    {
      q: t("Can I try the Growth plan for free?", "هل يمكنني تجربة خطة النمو مجاناً؟"),
      a: t("Yes, we offer a 14-day free trial of the Growth plan. No credit card required to start.", "نعم، نقدم تجربة مجانية لمدة ١٤ يوماً لخطة النمو. لا حاجة لبطاقة ائتمان للبدء."),
    },
  ];

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0F1D32] to-[#0A1628]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
              {t("Pricing", "الأسعار")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E4DF] mb-6">
              {t("Simple, Transparent", "بسيطة وشفافة")}{" "}
              <span className="text-[#D4D0C8]/40">{t("Pricing", "الأسعار")}</span>
            </h1>
            <p className="text-lg text-[#D4D0C8]/50 max-w-2xl mx-auto mb-8">
              {t("Start free, upgrade when you're ready. No hidden fees, no surprises.", "ابدأ مجاناً، ترقّى عندما تكون جاهزاً. بدون رسوم خفية أو مفاجآت.")}
            </p>

            <div className="inline-flex items-center gap-4 p-1 rounded-xl bg-[#1A2A42]/60 border border-white/5">
              <button
                onClick={() => setAnnual(false)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${!annual ? "bg-[#00C896]/10 text-[#00C896]" : "text-[#D4D0C8]/50"}`}
              >
                {t("Monthly", "شهري")}
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${annual ? "bg-[#00C896]/10 text-[#00C896]" : "text-[#D4D0C8]/50"}`}
              >
                {t("Annual", "سنوي")}
                <span className="ms-1.5 text-xs text-[#00C896]">-20%</span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 bg-[#0A1628]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <motion.div
                  className={`relative p-8 rounded-2xl h-full flex flex-col ${
                    plan.highlight
                      ? "bg-gradient-to-b from-[#00C896]/10 to-[#1A2A42]/40 border border-[#00C896]/20"
                      : "bg-[#1A2A42]/40 border border-white/5"
                  }`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00C896] text-[#0A1628] text-xs rounded-full">
                      {t("Most Popular", "الأكثر شعبية")}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg text-[#E8E4DF] mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      {plan.price.monthly === t("Custom", "مخصص") ? (
                        <span className="text-3xl text-[#E8E4DF]">{plan.price.monthly}</span>
                      ) : (
                        <>
                          <span className="text-sm text-[#D4D0C8]/50">$</span>
                          <span className="text-4xl text-[#E8E4DF]">
                            {annual ? plan.price.annual : plan.price.monthly}
                          </span>
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
                    to={plan.price.monthly === t("Custom", "مخصص") ? "/contact" : "#"}
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm transition-all duration-300 ${
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

      {/* Feature Comparison */}
      <section className="py-20 bg-[#0F1D32]/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl text-[#E8E4DF] mb-4">{t("Feature Comparison", "مقارنة المزايا")}</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-start py-4 px-4 text-sm text-[#D4D0C8]/50 w-1/3">{t("Feature", "الميزة")}</th>
                    <th className="text-center py-4 px-4 text-sm text-[#D4D0C8]/50">{t("Free", "مجاني")}</th>
                    <th className="text-center py-4 px-4 text-sm text-[#00C896]">{t("Growth", "نمو")}</th>
                    <th className="text-center py-4 px-4 text-sm text-[#D4D0C8]/50">{t("Enterprise", "المؤسسات")}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className="border-b border-white/[0.03]">
                      <td className="py-3 px-4 text-sm text-[#D4D0C8]/60">{row.feature}</td>
                      {[row.free, row.growth, row.enterprise].map((value, j) => (
                        <td key={j} className="text-center py-3 px-4">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check size={16} className="text-[#00C896] mx-auto" />
                            ) : (
                              <Minus size={16} className="text-[#D4D0C8]/20 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-[#D4D0C8]/50">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl text-[#E8E4DF] mb-4">{t("Frequently Asked Questions", "الأسئلة الشائعة")}</h2>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-start p-5 rounded-xl bg-[#1A2A42]/40 border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#E8E4DF]">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp size={18} className="text-[#00C896] shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-[#D4D0C8]/30 shrink-0" />
                    )}
                  </div>
                  {openFaq === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-sm text-[#D4D0C8]/50"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
