import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Link } from "react-router";
import { Search, ArrowRight, ArrowLeft, Code2 } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";

type IntegrationType = "all" | "ecommerce" | "carrier" | "erp";

const integrations = [
  { name: "Shopify", type: "ecommerce", status: "live", descEn: "Sync orders, products, and fulfillment data automatically.", descAr: "مزامنة الطلبات والمنتجات وبيانات التنفيذ تلقائياً." },
  { name: "Salla", type: "ecommerce", status: "live", descEn: "Native integration with the leading Arab e-commerce platform.", descAr: "تكامل أصلي مع أكبر منصة تجارة إلكترونية عربية." },
  { name: "Zid", type: "ecommerce", status: "live", descEn: "Connect your Zid store for seamless order flow.", descAr: "ربط متجرك على زد لتدفق سلس للطلبات." },
  { name: "WooCommerce", type: "ecommerce", status: "live", descEn: "WordPress + WooCommerce shipping made simple.", descAr: "شحن ووردبريس + ووكومرس بسهولة." },
  { name: "Magento", type: "ecommerce", status: "beta", descEn: "Enterprise-grade Magento integration.", descAr: "تكامل ماجنتو بمستوى المؤسسات." },
  { name: "Custom API", type: "ecommerce", status: "live", descEn: "RESTful API for any custom integration.", descAr: "واجهة RESTful لأي تكامل مخصص." },
  { name: "Aramex", type: "carrier", status: "live", descEn: "Syria and MENA delivery coverage.", descAr: "تغطية توصيل سوريا والشرق الأوسط." },
  { name: "DHL Express", type: "carrier", status: "live", descEn: "International express shipping.", descAr: "شحن دولي سريع." },
  { name: "Haram Express", type: "carrier", status: "live", descEn: "Syria's fastest local delivery network.", descAr: "أسرع شبكة توصيل محلية في سوريا." },
  { name: "FastShip", type: "carrier", status: "live", descEn: "Same-day delivery in Damascus and Aleppo.", descAr: "توصيل في نفس اليوم في دمشق وحلب." },
  { name: "SpeedMail", type: "carrier", status: "live", descEn: "Nationwide postal and parcel service.", descAr: "خدمة بريد وطرود وطنية." },
  { name: "Zajel", type: "carrier", status: "live", descEn: "Pan-Syria courier service.", descAr: "خدمة بريد سريع لعموم سوريا." },
  { name: "SwiftPost", type: "carrier", status: "beta", descEn: "Premium express delivery service.", descAr: "خدمة توصيل سريع متميزة." },
  { name: "NileShip", type: "carrier", status: "coming", descEn: "Cross-border Syria-Iraq shipping.", descAr: "شحن عبر الحدود سوريا-العراق." },
  { name: "SAP", type: "erp", status: "coming", descEn: "Enterprise ERP integration.", descAr: "تكامل نظام ERP للمؤسسات." },
  { name: "Odoo", type: "erp", status: "beta", descEn: "Open-source ERP connector.", descAr: "موصل ERP مفتوح المصدر." },
  { name: "QuickBooks", type: "erp", status: "coming", descEn: "Accounting and invoicing sync.", descAr: "مزامنة المحاسبة والفوترة." },
];

export function Integrations() {
  const [filter, setFilter] = useState<IntegrationType>("all");
  const [search, setSearch] = useState("");
  const { t, lang, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const filterLabels: Record<IntegrationType, string> = {
    all: t("All", "الكل"),
    ecommerce: t("E-commerce", "التجارة الإلكترونية"),
    carrier: t("Carriers", "شركات التوصيل"),
    erp: t("ERP / Tools", "أنظمة ERP / أدوات"),
  };

  const statusColors: Record<string, { bg: string; text: string; label: string }> = {
    live: { bg: "bg-[#00C896]/10", text: "text-[#00C896]", label: t("Connected", "متصل") },
    beta: { bg: "bg-[#60A5FA]/10", text: "text-[#60A5FA]", label: t("Beta", "تجريبي") },
    coming: { bg: "bg-white/5", text: "text-[#D4D0C8]/40", label: t("Coming Soon", "قريباً") },
  };

  const filtered = integrations.filter((i) => {
    const matchesFilter = filter === "all" || i.type === filter;
    const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0F1D32] to-[#0A1628]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
              {t("Integrations", "التكاملات")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E4DF] mb-6 max-w-4xl mx-auto">
              {t("Connects to", "يتصل بـ")}{" "}
              <span className="bg-gradient-to-r from-[#00C896] to-[#5CE1E6] bg-clip-text text-transparent">
                {t("Everything", "كل شيء")}
              </span>
            </h1>
            <p className="text-lg text-[#D4D0C8]/50 max-w-2xl mx-auto">
              {t(
                "Pre-built integrations with leading e-commerce platforms and carriers. Plus a powerful API for custom connections.",
                "تكاملات جاهزة مع منصات التجارة الإلكترونية وشركات التوصيل الرائدة. بالإضافة لواجهة قوية للتكاملات المخصصة."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <div className="flex gap-2 flex-wrap">
              {(Object.entries(filterLabels) as [IntegrationType, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    filter === key
                      ? "bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/20"
                      : "text-[#D4D0C8]/50 border border-white/5 hover:border-white/10"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="relative sm:ms-auto">
              <Search size={16} className="absolute start-3 top-1/2 -translate-y-1/2 text-[#D4D0C8]/30" />
              <input
                type="text"
                placeholder={t("Search integrations...", "ابحث عن التكاملات...")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="ps-10 pe-4 py-2 rounded-lg bg-[#1A2A42]/60 border border-white/5 text-sm text-[#E8E4DF] placeholder:text-[#D4D0C8]/30 focus:outline-none focus:border-[#00C896]/20 w-64"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((integration, i) => {
              const status = statusColors[integration.status];
              return (
                <motion.div
                  key={integration.name}
                  className="p-6 rounded-xl bg-[#1A2A42]/40 border border-white/5 hover:border-[#00C896]/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xs text-[#D4D0C8]/40">
                      {integration.name.slice(0, 2)}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] ${status.bg} ${status.text}`}>
                      {status.label}
                    </span>
                  </div>
                  <h3 className="text-[#E8E4DF] mb-1">{integration.name}</h3>
                  <p className="text-sm text-[#D4D0C8]/40">{lang === "ar" ? integration.descAr : integration.descEn}</p>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#D4D0C8]/30">
              {t("No integrations found matching your search.", "لم يتم العثور على تكاملات مطابقة لبحثك.")}
            </div>
          )}
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-[#0F1D32]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="w-14 h-14 rounded-xl bg-[#00C896]/10 flex items-center justify-center mb-6">
                <Code2 size={26} className="text-[#00C896]" />
              </div>
              <h2 className="text-3xl md:text-4xl text-[#E8E4DF] mb-4">
                {t("Build Your Own Integration", "ابنِ تكاملك الخاص")}
              </h2>
              <p className="text-[#D4D0C8]/50 mb-6">
                {t(
                  "Our RESTful API gives you full access to every Odrex feature. Create shipments, track orders, manage carriers, and more — all programmatically.",
                  "واجهة RESTful الخاصة بنا تمنحك وصولاً كاملاً لكل مزايا أودركس. أنشئ شحنات، تتبع الطلبات، أدر الشركات، والمزيد — كل ذلك برمجياً."
                )}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#00C896] hover:underline"
              >
                {t("View API Documentation", "عرض توثيق الواجهة البرمجية")}
                <Arrow size={16} />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="p-6 rounded-2xl bg-[#0A1628] border border-white/5 font-mono text-sm" dir="ltr">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-[#D4D0C8]/30">{"// Create a shipment"}</div>
                  <div>
                    <span className="text-[#60A5FA]">const</span>{" "}
                    <span className="text-[#E8E4DF]">shipment</span>{" "}
                    <span className="text-[#D4D0C8]/40">=</span>{" "}
                    <span className="text-[#60A5FA]">await</span>{" "}
                    <span className="text-[#E8E4DF]">odrex</span>
                    <span className="text-[#D4D0C8]/40">.</span>
                    <span className="text-[#00C896]">shipments</span>
                    <span className="text-[#D4D0C8]/40">.</span>
                    <span className="text-[#00C896]">create</span>
                    <span className="text-[#D4D0C8]/40">{"({"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#E8E4DF]">carrier</span>
                    <span className="text-[#D4D0C8]/40">: </span>
                    <span className="text-[#5CE1E6]">"auto"</span>
                    <span className="text-[#D4D0C8]/40">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#E8E4DF]">origin</span>
                    <span className="text-[#D4D0C8]/40">: </span>
                    <span className="text-[#5CE1E6]">"Damascus"</span>
                    <span className="text-[#D4D0C8]/40">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#E8E4DF]">destination</span>
                    <span className="text-[#D4D0C8]/40">: </span>
                    <span className="text-[#5CE1E6]">"Aleppo"</span>
                    <span className="text-[#D4D0C8]/40">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#E8E4DF]">cod_amount</span>
                    <span className="text-[#D4D0C8]/40">: </span>
                    <span className="text-[#00C896]">25000</span>
                  </div>
                  <div>
                    <span className="text-[#D4D0C8]/40">{"})"}</span>
                    <span className="text-[#D4D0C8]/40">;</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
