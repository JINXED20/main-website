import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "../AnimatedSection";
import {
  ShoppingCart, ClipboardList, Cpu, Printer, MapPin, Bell, DollarSign, RotateCcw, BarChart3,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function FeaturesJourneySection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const { t } = useLanguage();

  const features = [
    {
      icon: ShoppingCart,
      title: t("Checkout", "إتمام الشراء"),
      desc: t(
        "Delivery options at point of sale with rate comparison and estimated delivery times. Give your customers the best shipping experience from the first click.",
        "خيارات التوصيل عند نقطة البيع مع مقارنة الأسعار وأوقات التسليم المتوقعة. امنح عملاءك أفضل تجربة شحن من أول نقرة."
      ),
      color: "#00C896",
    },
    {
      icon: ClipboardList,
      title: t("Order Management", "إدارة الطلبات"),
      desc: t(
        "Centralized order intake from all channels — e-commerce, social media, manual entry. Every order in one place, automatically organized.",
        "استقبال مركزي للطلبات من جميع القنوات — التجارة الإلكترونية، التواصل الاجتماعي، الإدخال اليدوي. كل طلب في مكان واحد، مُنظم تلقائياً."
      ),
      color: "#60A5FA",
    },
    {
      icon: Cpu,
      title: t("Smart Carrier Selection", "اختيار ذكي للناقل"),
      desc: t(
        "AI-powered routing that picks the best carrier based on location, price, speed, and package type. The smartest route, every time.",
        "توجيه مدعوم بالذكاء الاصطناعي يختار أفضل ناقل بناءً على الموقع والسعر والسرعة ونوع الطرد. أذكى مسار، في كل مرة."
      ),
      color: "#5CE1E6",
    },
    {
      icon: Printer,
      title: t("Shipping & Labels", "الشحن والبوليصات"),
      desc: t(
        "One-click label generation and multi-carrier label printing from one dashboard. Stop switching between carrier portals.",
        "إنشاء بوليصات بنقرة واحدة وطباعة بوليصات متعددة الشركات من لوحة تحكم واحدة. توقف عن التنقل بين بوابات الشركات."
      ),
      color: "#00C896",
    },
    {
      icon: MapPin,
      title: t("Real-Time Tracking", "تتبع مباشر"),
      desc: t(
        "Live shipment tracking with branded tracking pages for your customers. Know where every package is, in real time.",
        "تتبع مباشر للشحنات مع صفحات تتبع تحمل علامتك التجارية. اعرف أين كل طرد، في الوقت الحقيقي."
      ),
      color: "#60A5FA",
    },
    {
      icon: Bell,
      title: t("Customer Notifications", "إشعارات العملاء"),
      desc: t(
        "Automated SMS, WhatsApp, and email updates at every delivery milestone. Keep customers informed without lifting a finger.",
        "رسائل SMS وواتساب وبريد إلكتروني تلقائية عند كل مرحلة توصيل. أبقِ العملاء على اطلاع دون أي مجهود."
      ),
      color: "#5CE1E6",
    },
    {
      icon: DollarSign,
      title: t("COD Reconciliation", "مطابقة الدفع عند الاستلام"),
      desc: t(
        "End-to-end cash-on-delivery tracking, driver settlement, and merchant payouts. Every penny accounted for.",
        "تتبع الدفع عند الاستلام من البداية للنهاية، تسوية السائقين، ومدفوعات التجار. كل قرش محسوب."
      ),
      color: "#00C896",
    },
    {
      icon: RotateCcw,
      title: t("Returns Management", "إدارة الإرجاع"),
      desc: t(
        "Self-service return portal, reverse logistics, and automated refund workflows. Make returns painless for everyone.",
        "بوابة إرجاع ذاتية الخدمة، لوجستيات عكسية، وسير عمل استرداد تلقائي. اجعل الإرجاع سلساً للجميع."
      ),
      color: "#60A5FA",
    },
    {
      icon: BarChart3,
      title: t("Analytics & Insights", "التحليلات والرؤى"),
      desc: t(
        "Carrier performance benchmarking, cost optimization, and delivery success insights. Data-driven decisions at your fingertips.",
        "مقارنة أداء شركات التوصيل، تحسين التكاليف، ورؤى نجاح التوصيل. قرارات مبنية على البيانات بين يديك."
      ),
      color: "#5CE1E6",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0A1628] to-[#0F1D32] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
            {t("The Full Journey", "الرحلة الكاملة")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E8E4DF] max-w-3xl mx-auto mb-6">
            {t("Every Step of the Shipping Journey,", "كل خطوة في رحلة الشحن،")}{" "}
            <span className="text-[#D4D0C8]/40">{t("Covered", "مُغطّاة")}</span>
          </h2>
        </AnimatedSection>

        {/* Desktop: Timeline + Details */}
        <div className="hidden lg:grid grid-cols-12 gap-8">
          {/* Feature tabs */}
          <div className="col-span-5">
            <div className="space-y-1 sticky top-24">
              {features.map((feature, i) => (
                <motion.button
                  key={feature.title}
                  onClick={() => setActiveFeature(i)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                    activeFeature === i
                      ? "bg-white/5 border border-white/10"
                      : "hover:bg-white/[0.02] border border-transparent"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{
                      backgroundColor: activeFeature === i ? `${feature.color}15` : "rgba(255,255,255,0.03)",
                    }}
                  >
                    <feature.icon
                      size={18}
                      style={{ color: activeFeature === i ? feature.color : "rgba(212,208,200,0.3)" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-sm transition-colors duration-300"
                      style={{ color: activeFeature === i ? "#E8E4DF" : "rgba(212,208,200,0.5)" }}
                    >
                      {feature.title}
                    </div>
                    <div className="text-xs text-[#D4D0C8]/30 mt-0.5">{t(`Step ${i + 1}`, `الخطوة ${i + 1}`)}</div>
                  </div>

                  {activeFeature === i && (
                    <motion.div
                      className="ms-auto w-1.5 h-8 rounded-full"
                      style={{ backgroundColor: feature.color }}
                      layoutId="activeFeatureIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Feature detail */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="sticky top-24"
              >
                <div className="p-10 rounded-2xl bg-gradient-to-br from-[#1A2A42]/60 to-[#0F1D32]/60 border border-white/5 min-h-[400px] flex flex-col justify-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                    style={{ backgroundColor: `${features[activeFeature].color}15` }}
                  >
                    {(() => {
                      const Icon = features[activeFeature].icon;
                      return <Icon size={28} style={{ color: features[activeFeature].color }} />;
                    })()}
                  </div>

                  <h3 className="text-2xl md:text-3xl text-[#E8E4DF] mb-4">
                    {features[activeFeature].title}
                  </h3>

                  <p className="text-[#D4D0C8]/60 text-lg mb-8 max-w-lg">
                    {features[activeFeature].desc}
                  </p>

                  {/* Decorative dashboard mockup */}
                  <div className="p-4 rounded-xl bg-[#0A1628]/60 border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                      <div className="ms-3 h-5 w-48 rounded bg-white/5" />
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((row) => (
                        <div key={row} className="flex gap-3">
                          <div
                            className="h-8 rounded"
                            style={{
                              width: `${30 + row * 10}%`,
                              backgroundColor: `${features[activeFeature].color}08`,
                              borderInlineStart: `2px solid ${features[activeFeature].color}30`,
                            }}
                          />
                          <div className="h-8 rounded bg-white/[0.02] flex-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="lg:hidden space-y-4">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.05}>
              <div className="p-6 rounded-xl bg-[#1A2A42]/40 border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon size={18} style={{ color: feature.color }} />
                  </div>
                  <div>
                    <div className="text-sm text-[#E8E4DF]">{feature.title}</div>
                    <div className="text-xs text-[#D4D0C8]/30">{t(`Step ${i + 1}`, `الخطوة ${i + 1}`)}</div>
                  </div>
                </div>
                <p className="text-sm text-[#D4D0C8]/50">{feature.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
