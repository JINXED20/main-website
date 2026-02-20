import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import {
  Package, Link2, ClipboardList, Truck, DollarSign, RotateCcw,
  Warehouse, BarChart3, Bell, ArrowRight, ArrowLeft,
} from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../components/LanguageContext";

export function Features() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const modules = [
    {
      icon: Package,
      title: t("Shipping Management", "إدارة الشحن"),
      desc: t("End-to-end shipment lifecycle management from creation to delivery.", "إدارة دورة حياة الشحنة من الإنشاء حتى التسليم."),
      color: "#00C896",
      features: [
        t("One-click label generation across all carriers", "إنشاء بوليصات بنقرة واحدة لجميع الشركات"),
        t("Multi-carrier rate comparison at checkout", "مقارنة أسعار متعددة عند الدفع"),
        t("Bulk shipment creation for large volumes", "إنشاء شحنات جماعية للأحجام الكبيرة"),
        t("Automated shipping rules based on order attributes", "قواعد شحن تلقائية بناءً على خصا��ص الطلب"),
      ],
    },
    {
      icon: Link2,
      title: t("Carrier Integration", "تكامل شركات التوصيل"),
      desc: t("Connect to all your carriers through a single unified API.", "اتصل بكل شركات التوصيل عبر واجهة برمجة موحدة."),
      color: "#60A5FA",
      features: [
        t("Pre-built integrations with major Syrian carriers", "تكاملات جاهزة مع شركات التوصيل الرئيسية"),
        t("Custom carrier onboarding support", "دعم إضافة شركات مخصصة"),
        t("Unified API for all carrier operations", "واجهة موحدة لجميع عمليات الشركات"),
        t("Real-time carrier availability monitoring", "مراقبة توفر الشركات بالوقت الحقيقي"),
      ],
    },
    {
      icon: ClipboardList,
      title: t("Order Management", "إدارة الطلبات"),
      desc: t("Centralized order intake from every sales channel.", "استقبال مركزي للطلبات من كل قنوات البيع."),
      color: "#5CE1E6",
      features: [
        t("Multi-channel order aggregation", "تجميع طلبات متعددة القنوات"),
        t("Automated order-to-shipment workflow", "سير عمل تلقائي من الطلب للشحن"),
        t("Order prioritization and smart queuing", "ترتيب أولويات الطلبات وقوائم ذكية"),
        t("Custom order statuses and workflows", "حالات طلبات وسير عمل مخصصة"),
      ],
    },
    {
      icon: Truck,
      title: t("Driver & Fleet Management", "إدارة السائقين والأسطول"),
      desc: t("Complete fleet operations software for delivery companies.", "برنامج عمليات أسطول متكامل لشركات التوصيل."),
      color: "#00C896",
      features: [
        t("Driver mobile app with GPS tracking", "تطبيق سائق مع تتبع GPS"),
        t("Auto-dispatch and route optimization", "توزيع تلقائي وتحسين المسارات"),
        t("Proof of delivery with photo capture", "إثبات التسليم بالتصوير"),
        t("Driver performance scoring and analytics", "تقييم أداء السائق وتحليلاته"),
      ],
    },
    {
      icon: DollarSign,
      title: t("COD & Financial Reconciliation", "مطابقة الدفع عند الاستلام والمالية"),
      desc: t("Every penny tracked from collection to merchant payout.", "كل قرش يُتتبّع من التحصيل حتى الدفع للتاجر."),
      color: "#60A5FA",
      features: [
        t("Real-time COD collection tracking", "تتبع تحصيل COD بالوقت الحقيقي"),
        t("Automated driver settlement workflows", "سير عمل تسوية السائق التلقائية"),
        t("Merchant payout scheduling and execution", "جدولة وتنفيذ مدفوعات التجار"),
        t("Financial reporting and audit trails", "تقارير مالية ومسارات تدقيق"),
      ],
    },
    {
      icon: RotateCcw,
      title: t("Returns Management", "إدارة الإرجاع"),
      desc: t("Make returns painless for merchants and their customers.", "اجعل الإرجاع سلساً للتجار وعملائهم."),
      color: "#5CE1E6",
      features: [
        t("Self-service return portal for end customers", "بوابة إرجاع ذاتية للعملاء"),
        t("Reverse logistics carrier assignment", "تعيين شركة لوجستيات عكسية"),
        t("Automated refund triggers", "محفزات استرداد تلقائية"),
        t("Return analytics and pattern detection", "تحليلات وكشف أنماط الإرجاع"),
      ],
    },
    {
      icon: Warehouse,
      title: t("Warehouse Operations", "عمليات المستودعات"),
      desc: t("Fulfillment and warehouse tools for high-volume merchants.", "أدوات التنفيذ والمستودعات للتجار ذوي الحجم الكبير."),
      color: "#00C896",
      features: [
        t("Pick-pack-ship workflows", "سير عمل الانتقاء والتعبئة والشحن"),
        t("Inventory sync with e-commerce platforms", "مزامنة المخزون مع منصات التجارة"),
        t("Barcode scanning and verification", "مسح الباركود والتحقق"),
        t("Multi-warehouse support", "دعم مستودعات متعددة"),
      ],
    },
    {
      icon: BarChart3,
      title: t("Analytics & Reporting", "التحليلات والتقارير"),
      desc: t("Data-driven insights to optimize your delivery operations.", "رؤى مبنية على البيانات لتحسين عمليات التوصيل."),
      color: "#60A5FA",
      features: [
        t("Carrier performance benchmarking", "مقارنة أداء شركات التوصيل"),
        t("Cost-per-shipment analysis", "تحليل التكلفة لكل شحنة"),
        t("Delivery success rate tracking", "تتبع نسبة نجاح التوصيل"),
        t("Custom report builder and scheduled exports", "منشئ تقارير مخصص وتصدير مجدول"),
      ],
    },
    {
      icon: Bell,
      title: t("Notifications System", "نظام الإشعارات"),
      desc: t("Keep everyone informed at every milestone.", "أبقِ الجميع على اطلاع عند كل مرحلة."),
      color: "#5CE1E6",
      features: [
        t("Automated SMS and WhatsApp updates", "تحديثات SMS وواتساب تلقائية"),
        t("Branded tracking page for customers", "صفحة تتبع بعلامتك للعملاء"),
        t("Configurable notification triggers", "محفزات إشعارات قابلة للتخصيص"),
        t("Multi-language notification templates", "قوالب إشعارات متعددة اللغات"),
      ],
    },
  ];

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0F1D32] to-[#0A1628]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00C896]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
              {t("Features", "المزايا")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E4DF] mb-6 max-w-4xl mx-auto">
              {t("Everything You Need to", "كل ما تحتاجه لـ")}{" "}
              <span className="bg-gradient-to-r from-[#00C896] to-[#5CE1E6] bg-clip-text text-transparent">
                {t("Ship & Deliver", "الشحن والتوصيل")}
              </span>
            </h1>
            <p className="text-lg text-[#D4D0C8]/50 max-w-2xl mx-auto">
              {t(
                "Nine powerful modules covering every aspect of the delivery lifecycle. Each one designed to eliminate friction and give you full control.",
                "تسع وحدات قوية تغطي كل جانب من دورة حياة التوصيل. كل واحدة مصممة لإزالة العقبات ومنحك التحكم الكامل."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Modules */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {modules.map((module, i) => (
            <AnimatedSection
              key={module.title}
              direction={i % 2 === 0 ? "left" : "right"}
              className="mb-16 last:mb-0"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${module.color}15` }}
                  >
                    <module.icon size={26} style={{ color: module.color }} />
                  </div>
                  <h2 className="text-2xl md:text-3xl text-[#E8E4DF] mb-3">{module.title}</h2>
                  <p className="text-[#D4D0C8]/50 mb-6">{module.desc}</p>
                  <div className="space-y-3">
                    {module.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: module.color }}
                        />
                        <span className="text-sm text-[#D4D0C8]/60">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <motion.div
                    className="p-6 rounded-2xl bg-[#1A2A42]/40 border border-white/5"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                      <div className="ms-auto text-xs text-[#D4D0C8]/20">{module.title}</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-6 w-24 rounded bg-white/5" />
                        <div className="h-6 w-16 rounded bg-white/5" />
                        <div className="h-6 flex-1 rounded bg-white/5" />
                      </div>
                      {[1, 2, 3, 4].map((row) => (
                        <div key={row} className="flex gap-3 items-center">
                          <div
                            className="h-8 rounded"
                            style={{
                              width: `${20 + row * 8}%`,
                              backgroundColor: `${module.color}08`,
                              borderInlineStart: `2px solid ${module.color}30`,
                            }}
                          />
                          <div className="h-8 rounded bg-white/[0.02] flex-1" />
                          <div
                            className="h-6 w-16 rounded-full flex items-center justify-center text-[10px]"
                            style={{ backgroundColor: `${module.color}10`, color: `${module.color}80` }}
                          >
                            {t("Active", "نشط")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {i < modules.length - 1 && (
                <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#0F1D32] to-[#0A1628]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[#E8E4DF] mb-6">
              {t("Ready to See It in Action?", "مستعد لرؤيته أثناء العمل؟")}
            </h2>
            <p className="text-[#D4D0C8]/50 mb-8">
              {t(
                "Book a personalized demo and see how Odrex can transform your delivery operations.",
                "احجز عرضاً شخصياً واكتشف كيف يمكن لأودركس تحويل عمليات التوصيل لديك."
              )}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C896] text-[#0A1628] rounded-xl hover:bg-[#00C896]/90 transition-all"
            >
              {t("Book a Demo", "احجز عرضاً")}
              <Arrow size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
