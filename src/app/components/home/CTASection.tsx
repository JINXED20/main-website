import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export function CTASection() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0F1D32] to-[#0A1628] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,200,150,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#E8E4DF] mb-6">
            {t("Transform the Way", "غيّر طريقة")}{" "}
            <span className="bg-gradient-to-r from-[#00C896] to-[#5CE1E6] bg-clip-text text-transparent">
              {t("You Ship & Deliver", "شحنك وتوصيلك")}
            </span>
          </h2>
          <p className="text-lg text-[#D4D0C8]/50 max-w-xl mx-auto mb-10">
            {t(
              "Join hundreds of merchants and carriers already using Odrex to power their delivery operations.",
              "انضم لمئات التجار وشركات التوصيل الذين يستخدمون أودركس بالفعل لتشغيل عمليات التوصيل."
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/pricing"
              className="group flex items-center gap-2 px-8 py-4 bg-[#00C896] text-[#0A1628] rounded-xl hover:bg-[#00C896]/90 transition-all duration-300 hover:shadow-xl hover:shadow-[#00C896]/20"
            >
              {t("Start Shipping Free", "ابدأ الشحن مجاناً")}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 text-[#E8E4DF] border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              {t("Book a Demo", "احجز عرضاً")}
            </Link>
          </div>

          {/* Email signup */}
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("Enter your email", "أدخل بريدك الإلكتروني")}
                className="flex-1 px-4 py-3 rounded-xl bg-[#1A2A42]/80 border border-white/5 text-[#E8E4DF] placeholder:text-[#D4D0C8]/30 focus:outline-none focus:border-[#00C896]/30 transition-colors"
              />
              <button className="px-6 py-3 bg-[#00C896] text-[#0A1628] rounded-xl hover:bg-[#00C896]/90 transition-colors text-sm whitespace-nowrap">
                {t("Get Started", "ابدأ الآن")}
              </button>
            </div>
            <p className="text-xs text-[#D4D0C8]/30 mt-3">
              {t("Free to start. No credit card required.", "مجاني للبدء. لا حاجة لبطاقة ائتمان.")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
