import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ArrowLeft, Play } from "lucide-react";
import { useLanguage } from "../LanguageContext";

function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#00C896]/20"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

function AnimatedFlow() {
  const { t } = useLanguage();

  const chaosItems = [
    { label: t("Phone Calls", "مكالمات هاتفية"), x: 10, y: 20 },
    { label: t("WhatsApp", "واتساب"), x: 70, y: 10 },
    { label: t("Manual Logs", "سجلات يدوية"), x: 30, y: 70 },
    { label: t("No Tracking", "بلا تتبع"), x: 80, y: 60 },
    { label: t("Cash Chaos", "فوضى نقدية"), x: 50, y: 40 },
  ];

  const orderLabels = [
    t("Tracked", "متتبّع"),
    t("On Time", "في الوقت"),
    t("Reconciled", "مطابق"),
    t("Automated", "مؤتمت"),
    t("Insights", "تحليلات"),
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto h-72 md:h-80">
      {/* Chaos side */}
      <div className="absolute left-0 top-0 w-2/5 h-full">
        {chaosItems.map((item, i) => (
          <motion.div
            key={item.label}
            className="absolute bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-xs text-red-400/80"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
          >
            {item.label}
          </motion.div>
        ))}
      </div>

      {/* Center gateway */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[#00C896] to-[#00C896]/60 flex items-center justify-center shadow-xl shadow-[#00C896]/20"
          animate={{ boxShadow: ["0 0 20px rgba(0,200,150,0.2)", "0 0 40px rgba(0,200,150,0.4)", "0 0 20px rgba(0,200,150,0.2)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-[#0A1628] text-sm md:text-base tracking-wider">O</span>
        </motion.div>

        {/* Flow lines */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`line-left-${i}`}
            className="absolute right-full top-1/2 h-px bg-gradient-to-l from-[#00C896]/60 to-transparent"
            style={{ width: 60 + i * 20, top: `${40 + i * 10}%` }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`line-right-${i}`}
            className="absolute left-full top-1/2 h-px bg-gradient-to-r from-[#00C896]/60 to-transparent"
            style={{ width: 60 + i * 20, top: `${40 + i * 10}%` }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 0.5 }}
          />
        ))}
      </div>

      {/* Order side */}
      <div className="absolute right-0 top-0 w-2/5 h-full">
        {orderLabels.map((label, i) => (
          <motion.div
            key={label}
            className="absolute bg-[#00C896]/10 border border-[#00C896]/20 rounded-lg px-3 py-2 text-xs text-[#00C896]/80"
            style={{ left: `${10 + (i % 3) * 25}%`, top: `${15 + i * 16}%` }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
          >
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-18">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0A1628] to-[#0F1D32]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C896]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#60A5FA]/5 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,200,150,0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={6} />
      <FloatingParticle delay={1} x="85%" y="30%" size={4} />
      <FloatingParticle delay={2} x="70%" y="70%" size={8} />
      <FloatingParticle delay={0.5} x="20%" y="80%" size={5} />
      <FloatingParticle delay={1.5} x="60%" y="15%" size={7} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 text-[#00C896] text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00C896] animate-pulse" />
          {t("Syria's First Delivery-as-a-Service Platform", "أول منصة توصيل كخدمة في سوريا")}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#E8E4DF] tracking-tight max-w-5xl mx-auto mb-6"
        >
          {t("We Don't Just Connect Carriers", "لا نربط شركات التوصيل فقط")}{" "}
          <span className="bg-gradient-to-r from-[#00C896] to-[#5CE1E6] bg-clip-text text-transparent">
            {t("— We Build Them", "— بل نبنيها")}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-[#D4D0C8]/60 max-w-2xl mx-auto mb-10"
        >
          {t(
            "The all-in-one platform that modernizes delivery companies and connects them to merchants. Ship, track, analyze, and grow — from a single dashboard.",
            "المنصة المتكاملة التي تحدّث شركات التوصيل وتربطها بالتجار. اشحن، تتبّع، حلّل، وانمُ — من لوحة تحكم واحدة."
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/pricing"
            className="group flex items-center gap-2 px-8 py-4 bg-[#00C896] text-[#0A1628] rounded-xl hover:bg-[#00C896]/90 transition-all duration-300 hover:shadow-xl hover:shadow-[#00C896]/20 hover:-translate-y-0.5"
          >
            {t("Start Shipping", "ابدأ الشحن")}
            <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="group flex items-center gap-2 px-8 py-4 text-[#E8E4DF] border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            <Play size={16} className="text-[#00C896]" />
            {t("Book a Demo", "احجز عرضاً")}
          </Link>
        </motion.div>

        {/* Animated Flow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <AnimatedFlow />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#00C896]"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
