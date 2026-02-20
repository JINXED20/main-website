import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Link } from "react-router";
import { Truck, Smartphone, Route, DollarSign, BarChart3, Shield, ArrowRight, ArrowLeft, AlertTriangle } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";

export function Carriers() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const painPoints = [
    { icon: AlertTriangle, text: t("Managing fleets with phone calls and WhatsApp", "إدارة الأساطيل بالمكالمات والواتساب") },
    { icon: AlertTriangle, text: t("No real-time visibility on driver locations", "انعدام الرؤية الفورية لمواقع السائقين") },
    { icon: AlertTriangle, text: t("Manual order assignment and routing", "توزيع الطلبات والتوجيه يدوياً") },
    { icon: AlertTriangle, text: t("COD cash tracking done on paper", "تتبع النقد عند الاستلام على الورق") },
    { icon: AlertTriangle, text: t("No data to optimize operations", "لا بيانات لتحسين العمليات") },
    { icon: AlertTriangle, text: t("Losing merchants to digitized competitors", "خسارة التجار لصالح المنافسين الرقميين") },
  ];

  const solutions = [
    {
      icon: Smartphone,
      title: t("Driver Mobile App", "تطبيق السائق"),
      desc: t("Give every driver a powerful mobile app for accepting orders, navigating routes, collecting payments, and capturing proof of delivery.", "امنح كل سائق تطبيقاً قوياً لقبول الطلبات والتنقل وتحصيل المدفوعات وتوثيق التسليم."),
    },
    {
      icon: Route,
      title: t("Smart Dispatch & Routing", "التوزيع والتوجيه الذكي"),
      desc: t("Automatically assign orders to the nearest available driver with optimized routes that save fuel and time.", "توزيع الطلبات تلقائياً لأقرب سائق متاح مع مسارات محسّنة توفر الوقود والوقت."),
    },
    {
      icon: Truck,
      title: t("Fleet Tracking", "تتبع الأسطول"),
      desc: t("Real-time GPS tracking for your entire fleet. Know where every vehicle and driver is, right now.", "تتبع GPS مباشر لأسطولك بالكامل. اعرف أين كل مركبة وسائق الآن."),
    },
    {
      icon: DollarSign,
      title: t("COD Management", "إدارة الدفع عند الاستلام"),
      desc: t("Track every pound from customer to driver to office. Automated settlement reports and reconciliation.", "تتبع كل ليرة من العميل للسائق للمكتب. تقارير تسوية ومطابقة تلقائية."),
    },
    {
      icon: BarChart3,
      title: t("Performance Analytics", "تحليلات الأداء"),
      desc: t("Driver scorecards, delivery success rates, average delivery times, and cost-per-delivery insights.", "بطاقات أداء السائقين ونسب النجاح ومتوسط أوقات التوصيل وتكلفة التوصيل."),
    },
    {
      icon: Shield,
      title: t("API Integration", "تكامل API"),
      desc: t("Connect to the Odrex merchant network and receive orders directly into your dispatch system.", "اتصل بشبكة تجار أودركس واستقبل الطلبات مباشرة في نظام التوزيع."),
    },
  ];

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0F1D32] to-[#0A1628]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#60A5FA]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-sm text-[#60A5FA] mb-4 tracking-widest uppercase">
                {t("For Delivery Companies", "لشركات التوصيل")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E4DF] mb-6">
                {t("We Don't Just Use Your Service", "لا نستخدم خدمتك فقط")}{" "}
                <span className="text-[#60A5FA]">{t("— We Upgrade It", "— بل نطوّرها")}</span>
              </h1>
              <p className="text-lg text-[#D4D0C8]/50 mb-8">
                {t(
                  "Get the complete software infrastructure to digitize your delivery operations. Fleet management, driver apps, automated dispatch, and COD tracking — everything you need to run a modern delivery company.",
                  "احصل على البنية التحتية البرمجية الكاملة لرقمنة عمليات التوصيل. إدارة الأسطول، تطبيقات السائقين، التوزيع التلقائي، وتتبع COD — كل ما تحتاجه لإدارة شركة توصيل حديثة."
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#60A5FA] text-[#0A1628] rounded-xl hover:bg-[#60A5FA]/90 transition-all"
                >
                  {t("Digitize Your Fleet", "رقمن أسطولك")}
                  <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-[#E8E4DF] rounded-xl hover:bg-white/5 transition-all"
                >
                  {t("Book a Demo", "احجز عرضاً")}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="p-6 rounded-2xl bg-[#1A2A42]/60 border border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  <span className="ms-auto text-xs text-[#D4D0C8]/20">{t("Dispatcher Dashboard", "لوحة التوزيع")}</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: t("Active Drivers", "سائقون نشطون"), val: "12" },
                    { label: t("Pending Orders", "طلبات معلقة"), val: "34" },
                    { label: t("On Route", "في الطريق"), val: "28" },
                  ].map((item) => (
                    <div key={item.label} className="p-3 rounded-lg bg-[#0A1628]/60">
                      <div className="text-lg text-[#E8E4DF]">{item.val}</div>
                      <div className="text-[10px] text-[#D4D0C8]/30">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="h-40 rounded-lg bg-[#0A1628]/60 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <motion.div
                        key={dot}
                        className="absolute w-2 h-2 rounded-full bg-[#60A5FA]"
                        style={{ left: `${15 + dot * 15}%`, top: `${20 + (dot % 3) * 25}%` }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: dot * 0.3 }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-[#D4D0C8]/20">
                    {t("Live Fleet Map", "خريطة الأسطول المباشرة")}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#0F1D32]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#E8E4DF] mb-4">
              {t("Running a Delivery Company Shouldn't Be This Hard", "إدارة شركة توصيل لا يجب أن تكون بهذه الصعوبة")}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {painPoints.map((point, i) => (
              <AnimatedSection key={point.text} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <point.icon size={16} className="text-red-400/50 mt-0.5 shrink-0" />
                  <span className="text-sm text-[#D4D0C8]/60">{point.text}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#E8E4DF] mb-4">
              {t("Your Complete Fleet Operations Software", "برنامج عمليات أسطولك المتكامل")}
            </h2>
            <p className="text-[#D4D0C8]/50 max-w-xl mx-auto">
              {t("Everything you need to run a modern, efficient delivery company.", "كل ما تحتاجه لإدارة شركة توصيل حديثة وفعالة.")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <AnimatedSection key={solution.title} delay={i * 0.08}>
                <motion.div
                  className="p-6 rounded-xl bg-[#1A2A42]/40 border border-white/5 h-full hover:border-[#60A5FA]/20 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#60A5FA]/10 flex items-center justify-center mb-4">
                    <solution.icon size={22} className="text-[#60A5FA]" />
                  </div>
                  <h3 className="text-[#E8E4DF] mb-2">{solution.title}</h3>
                  <p className="text-sm text-[#D4D0C8]/40">{solution.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0F1D32] to-[#0A1628]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[#E8E4DF] mb-4">
              {t("Ready to Power Your Fleet?", "مستعد لتمكين أسطولك؟")}
            </h2>
            <p className="text-[#D4D0C8]/50 mb-8">
              {t(
                "Join the growing network of carriers using Odrex to modernize their operations and connect to hundreds of merchants.",
                "انضم لشبكة شركات التوصيل المتنامية التي تستخدم أودركس لتحديث عملياتها والاتصال بمئات التجار."
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#60A5FA] text-[#0A1628] rounded-xl hover:bg-[#60A5FA]/90 transition-all"
              >
                {t("Get Started", "ابدأ الآن")}
                <Arrow size={18} />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-[#E8E4DF] rounded-xl hover:bg-white/5 transition-all"
              >
                {t("View Pricing", "عرض الأسعار")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
