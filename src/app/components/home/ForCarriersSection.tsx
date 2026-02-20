import { motion } from "motion/react";
import { AnimatedSection } from "../AnimatedSection";
import { Link } from "react-router";
import { Truck, Smartphone, Route, DollarSign, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function ForCarriersSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const features = [
    { icon: Truck, title: t("Fleet Management", "إدارة الأسطول"), desc: t("Track every vehicle and driver in real-time from a single dashboard", "تتبع كل مركبة وسائق بالوقت الحقيقي من لوحة واحدة") },
    { icon: Smartphone, title: t("Driver App", "تطبيق السائق"), desc: t("Mobile app for order acceptance, navigation, and proof of delivery", "تطبيق للقبول والتنقل وإثبات التسليم") },
    { icon: Route, title: t("Smart Routing", "توجيه ذكي"), desc: t("AI-powered route optimization that saves fuel and delivery time", "تحسين المسارات بالذكاء الاصطناعي لتوفير الوقود ووقت التوصيل") },
    { icon: DollarSign, title: t("COD Tracking", "تتبع الدفع"), desc: t("Every pound tracked from customer to driver to settlement", "كل ليرة تُتتبّع من العميل إلى السائق إلى التسوية") },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0A1628] to-[#0F1D32] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#60A5FA]/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="inline-block text-sm text-[#60A5FA] mb-4 tracking-widest uppercase">
              {t("For Delivery Companies", "لشركات التوصيل")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E8E4DF] mb-6">
              {t("We Don't Just Use Your Service", "لا نستخدم خدمتك فقط")}{" "}
              <span className="text-[#60A5FA]">{t("— We Upgrade It", "— بل نطوّرها")}</span>
            </h2>
            <p className="text-[#D4D0C8]/50 mb-8">
              {t(
                "Get complete fleet management software, a driver mobile app, automated dispatch, and COD reconciliation. Digitize your operations and connect to hundreds of merchants.",
                "احصل على برنامج إدارة أسطول متكامل، تطبيق سائق، توزيع تلقائي، ومطابقة مالية. رقمن عملياتك واتصل بمئات التجار."
              )}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="p-4 rounded-xl bg-[#1A2A42]/40 border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <feature.icon size={20} className="text-[#60A5FA] mb-2" />
                  <div className="text-sm text-[#E8E4DF] mb-1">{feature.title}</div>
                  <div className="text-xs text-[#D4D0C8]/40">{feature.desc}</div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/carriers"
              className="group inline-flex items-center gap-2 text-[#60A5FA] hover:underline"
            >
              {t("Power Your Fleet with Odrex", "طوّر أسطولك مع أودركس")}
              <Arrow size={16} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right">
            {/* Fleet dashboard mockup */}
            <div className="p-6 rounded-2xl bg-[#1A2A42]/60 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                <span className="ms-auto text-xs text-[#D4D0C8]/20">{t("Fleet Dashboard", "لوحة الأسطول")}</span>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: t("Active Drivers", "سائقون نشطون"), val: "12" },
                  { label: t("Orders Today", "طلبات اليوم"), val: "87" },
                  { label: t("Success Rate", "نسبة النجاح"), val: "96%" },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg bg-[#0A1628]/60">
                    <div className="text-lg text-[#E8E4DF]">{stat.val}</div>
                    <div className="text-[10px] text-[#D4D0C8]/30">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Map area */}
              <div className="h-48 rounded-xl bg-[#0A1628]/60 relative overflow-hidden">
                {[1, 2, 3, 4, 5, 6].map((dot) => (
                  <motion.div
                    key={dot}
                    className="absolute"
                    style={{ left: `${10 + dot * 13}%`, top: `${15 + (dot % 3) * 28}%` }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: dot * 0.4 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#60A5FA]/40 ring-4 ring-[#60A5FA]/10" />
                  </motion.div>
                ))}
                <svg className="absolute inset-0 w-full h-full opacity-10">
                  <line x1="15%" y1="20%" x2="40%" y2="50%" stroke="#60A5FA" strokeWidth="1" />
                  <line x1="40%" y1="50%" x2="65%" y2="30%" stroke="#60A5FA" strokeWidth="1" />
                  <line x1="65%" y1="30%" x2="85%" y2="60%" stroke="#60A5FA" strokeWidth="1" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs text-[#D4D0C8]/15">
                  {t("Live Fleet Map", "خريطة الأسطول المباشرة")}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
