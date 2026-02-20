import { motion } from "motion/react";
import { AnimatedSection } from "../AnimatedSection";
import {
  Truck, Smartphone, BarChart3, DollarSign, Route, ShoppingCart,
  ArrowLeftRight, Zap, Package, GitCompare, MapPin, RotateCcw,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function DualLayerSection() {
  const { t } = useLanguage();

  const carrierFeatures = [
    { icon: Truck, label: t("Fleet Management", "إدارة الأسطول") },
    { icon: Smartphone, label: t("Driver Mobile App", "تطبيق السائق") },
    { icon: Route, label: t("Route Optimization", "تحسين المسارات") },
    { icon: DollarSign, label: t("COD Reconciliation", "مطابقة الدفع عند الاستلام") },
    { icon: BarChart3, label: t("Performance Analytics", "تحليلات الأداء") },
    { icon: Zap, label: t("Auto Order Assignment", "توزيع الطلبات التلقائي") },
  ];

  const merchantFeatures = [
    { icon: ShoppingCart, label: t("Multi-Channel Orders", "طلبات متعددة القنوات") },
    { icon: GitCompare, label: t("Rate Comparison", "مقارنة الأسعار") },
    { icon: Package, label: t("One-Click Labels", "بوليصات بنقرة واحدة") },
    { icon: MapPin, label: t("Live Tracking", "تتبع مباشر") },
    { icon: RotateCcw, label: t("Returns Portal", "بوابة الإرجاع") },
    { icon: BarChart3, label: t("Cost Analytics", "تحليلات التكلفة") },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00C896]/[0.02] blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
            {t("Our Unique Approach", "نهجنا الفريد")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E8E4DF] max-w-4xl mx-auto mb-6">
            {t("The Dual-Layer Model", "نموذج الطبقتين")}{" "}
            <span className="text-[#D4D0C8]/40">{t("That Changes Everything", "الذي يغيّر كل شيء")}</span>
          </h2>
          <p className="text-lg text-[#D4D0C8]/50 max-w-2xl mx-auto">
            {t(
              "We don't just aggregate existing carriers. We build carrier infrastructure from the ground up, then connect everything into a single merchant platform.",
              "لا نكتفي بتجميع شركات التوصيل الحالية. نبني البنية التحتية للنقل من الصفر، ثم نربط كل شيء في منصة واحدة للتجار."
            )}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-4 items-start">
          {/* Layer 1 - Carrier Side */}
          <AnimatedSection direction="left" className="relative">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1A2A42]/80 to-[#0F1D32]/80 border border-white/5 hover:border-[#60A5FA]/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#60A5FA]/10 flex items-center justify-center">
                  <Truck size={20} className="text-[#60A5FA]" />
                </div>
                <div>
                  <div className="text-sm text-[#60A5FA] tracking-wider uppercase">{t("Layer 1", "الطبقة ١")}</div>
                  <div className="text-lg text-[#E8E4DF]">{t("For Delivery Companies", "لشركات التوصيل")}</div>
                </div>
              </div>

              <p className="text-sm text-[#D4D0C8]/50 mb-8">
                {t(
                  "Complete software infrastructure to digitize and modernize delivery operations from the inside out.",
                  "بنية تحتية برمجية متكاملة لرقمنة وتحديث عمليات التوصيل من الداخل إلى الخارج."
                )}
              </p>

              <div className="space-y-3">
                {carrierFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-[#60A5FA]/5 transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <feature.icon size={16} className="text-[#60A5FA]/60 shrink-0" />
                    <span className="text-sm text-[#D4D0C8]/70">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Center - The Connection */}
          <AnimatedSection direction="up" delay={0.2} className="flex flex-col items-center justify-center lg:pt-8">
            <div className="hidden lg:flex flex-col items-center gap-4 py-8">
              <motion.div
                className="w-px h-16 bg-gradient-to-b from-[#60A5FA]/40 to-[#00C896]/0"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00C896]/20 to-[#60A5FA]/20 border border-[#00C896]/30 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0,200,150,0)",
                    "0 0 30px 10px rgba(0,200,150,0.1)",
                    "0 0 0 0 rgba(0,200,150,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <ArrowLeftRight size={28} className="text-[#00C896]" />
              </motion.div>
              <motion.div
                className="w-px h-16 bg-gradient-to-b from-[#00C896]/0 to-[#00C896]/40"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>

            {/* Mobile connector */}
            <div className="lg:hidden flex items-center justify-center py-8">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C896]/20 to-[#60A5FA]/20 border border-[#00C896]/30 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0,200,150,0)",
                    "0 0 30px 10px rgba(0,200,150,0.1)",
                    "0 0 0 0 rgba(0,200,150,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <ArrowLeftRight size={24} className="text-[#00C896]" />
              </motion.div>
            </div>

            <div className="text-center px-4">
              <div className="text-[#00C896] text-sm mb-2">{t("Two-Sided Network Effect", "تأثير الشبكة المزدوج")}</div>
              <p className="text-xs text-[#D4D0C8]/40 max-w-[200px]">
                {t(
                  "More carriers make the platform better for merchants. More merchants bring more carriers.",
                  "المزيد من شركات التوصيل يُحسّن المنصة للتجار. والمزيد من التجار يجلب المزيد من الشركات."
                )}
              </p>
            </div>
          </AnimatedSection>

          {/* Layer 2 - Merchant Side */}
          <AnimatedSection direction="right">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1A2A42]/80 to-[#0F1D32]/80 border border-white/5 hover:border-[#00C896]/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00C896]/10 flex items-center justify-center">
                  <ShoppingCart size={20} className="text-[#00C896]" />
                </div>
                <div>
                  <div className="text-sm text-[#00C896] tracking-wider uppercase">{t("Layer 2", "الطبقة ٢")}</div>
                  <div className="text-lg text-[#E8E4DF]">{t("For Merchants", "للتجار")}</div>
                </div>
              </div>

              <p className="text-sm text-[#D4D0C8]/50 mb-8">
                {t(
                  "One dashboard to ship through all carriers. Compare rates, track live, manage returns, reconcile COD.",
                  "لوحة تحكم واحدة للشحن عبر كل الشركات. قارن الأسعار، تتبّع مباشرة، أدر الإرجاع، طابق المدفوعات."
                )}
              </p>

              <div className="space-y-3">
                {merchantFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-[#00C896]/5 transition-colors duration-300"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <feature.icon size={16} className="text-[#00C896]/60 shrink-0" />
                    <span className="text-sm text-[#D4D0C8]/70">{feature.label}</span>
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
