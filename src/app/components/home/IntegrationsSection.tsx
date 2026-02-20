import { motion } from "motion/react";
import { AnimatedSection } from "../AnimatedSection";
import { useLanguage } from "../LanguageContext";

const integrations = {
  platforms: [
    { name: "Shopify" }, { name: "Salla" }, { name: "Zid" },
    { name: "WooCommerce" }, { name: "Magento" }, { name: "Custom API" },
  ],
  carriers: [
    { name: "Aramex" }, { name: "DHL" }, { name: "Haram Express" },
    { name: "FastShip" }, { name: "SpeedMail" }, { name: "Zajel" },
    { name: "SwiftPost" }, { name: "NileShip" },
  ],
};

function OrbitingLogo({ name, index, total, radius }: { name: string; index: number; total: number; radius: number }) {
  const angle = (index / total) * 360;

  return (
    <motion.div
      className="absolute"
      style={{ left: "50%", top: "50%" }}
      animate={{
        x: [
          Math.cos(((angle + 0) * Math.PI) / 180) * radius - 30,
          Math.cos(((angle + 360) * Math.PI) / 180) * radius - 30,
        ],
        y: [
          Math.sin(((angle + 0) * Math.PI) / 180) * radius - 16,
          Math.sin(((angle + 360) * Math.PI) / 180) * radius - 16,
        ],
      }}
      transition={{ duration: 30 + index * 2, repeat: Infinity, ease: "linear" }}
    >
      <div className="w-[60px] h-[32px] rounded-lg bg-[#1A2A42]/80 border border-white/5 flex items-center justify-center hover:border-[#00C896]/20 hover:bg-[#1A2A42] transition-all duration-300 cursor-default">
        <span className="text-[10px] text-[#D4D0C8]/50 whitespace-nowrap">{name}</span>
      </div>
    </motion.div>
  );
}

export function IntegrationsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-[#0A1628] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
            {t("Integrations", "التكاملات")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E8E4DF] max-w-3xl mx-auto mb-6">
            {t("Connects to Everything", "يتصل بكل شيء")}{" "}
            <span className="text-[#D4D0C8]/40">{t("You Already Use", "تستخدمه بالفعل")}</span>
          </h2>
          <p className="text-lg text-[#D4D0C8]/50 max-w-2xl mx-auto">
            {t(
              "Plug into your existing e-commerce platform, carriers, and tools. One API to rule them all.",
              "اتصل بمنصة التجارة الإلكترونية وشركات التوصيل والأدوات الحالية. واجهة واحدة تحكمها جميعاً."
            )}
          </p>
        </AnimatedSection>

        {/* Orbiting integration logos - Desktop */}
        <div className="hidden md:block relative h-[500px] mb-16">
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C896]/20 to-[#00C896]/5 border border-[#00C896]/30 flex items-center justify-center z-10"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(0,200,150,0)",
                "0 0 40px 15px rgba(0,200,150,0.1)",
                "0 0 0 0 rgba(0,200,150,0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-[#00C896] text-lg">O</span>
          </motion.div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/[0.03]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-white/[0.03]" />

          {integrations.platforms.map((platform, i) => (
            <OrbitingLogo key={platform.name} name={platform.name} index={i} total={integrations.platforms.length} radius={150} />
          ))}
          {integrations.carriers.map((carrier, i) => (
            <OrbitingLogo key={carrier.name} name={carrier.name} index={i} total={integrations.carriers.length} radius={230} />
          ))}
        </div>

        {/* Mobile: Grid */}
        <div className="md:hidden space-y-8">
          <div>
            <h4 className="text-sm text-[#00C896] mb-4">{t("E-commerce Platforms", "منصات التجارة الإلكترونية")}</h4>
            <div className="grid grid-cols-3 gap-3">
              {integrations.platforms.map((p) => (
                <div key={p.name} className="p-3 rounded-lg bg-[#1A2A42]/60 border border-white/5 text-center">
                  <span className="text-xs text-[#D4D0C8]/60">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm text-[#00C896] mb-4">{t("Delivery Carriers", "شركات التوصيل")}</h4>
            <div className="grid grid-cols-4 gap-3">
              {integrations.carriers.map((c) => (
                <div key={c.name} className="p-3 rounded-lg bg-[#1A2A42]/60 border border-white/5 text-center">
                  <span className="text-xs text-[#D4D0C8]/60">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
