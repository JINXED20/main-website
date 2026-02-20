import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "../AnimatedSection";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useLanguage } from "../LanguageContext";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t(
        "Before Odrex, we were managing 4 different carrier portals and tracking everything in WhatsApp. Now it's one dashboard, one click, done. Our shipping costs dropped 30%.",
        "قبل أودركس، كنا ندير ٤ بوابات لشركات توصيل مختلفة ونتتبع كل شيء عبر واتساب. الآن لوحة واحدة، نقرة واحدة، انتهى. انخفضت تكاليف الشحن ٣٠٪."
      ),
      name: t("Ahmad Al-Hassan", "أحمد الحسن"),
      role: t("E-commerce Manager", "مدير التجارة الإلكترونية"),
      company: "StyleSY",
      image: "https://images.unsplash.com/photo-1758874574397-e56dfcfc116d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwbWFuJTIwdGVjaCUyMHN0YXJ0dXB8ZW58MXx8fHwxNzcxNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      quote: t(
        "Odrex didn't just connect us to merchants — they gave us the software to run our fleet properly. Our delivery success rate went from 78% to 96% in three months.",
        "أودركس لم تربطنا بالتجار فقط — بل أعطتنا البرنامج لإدارة أسطولنا بشكل صحيح. ارتفع معدل نجاح التوصيل من ٧٨٪ إلى ٩٦٪ في ثلاثة أشهر."
      ),
      name: t("Sara Mahmoud", "سارة محمود"),
      role: t("Operations Director", "مديرة العمليات"),
      company: "Haram Express",
      image: "https://images.unsplash.com/photo-1612116144183-d1ba477239f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGFyYWIlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE1NzU1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      quote: t(
        "The COD reconciliation alone saved us hundreds of hours per month. We finally know exactly where every Syrian pound is. Game changer for our business.",
        "مطابقة الدفع عند الاستلام وحدها وفّرت لنا مئات الساعات شهرياً. أخيراً نعرف أين كل ليرة سورية. نقلة نوعية لأعمالنا."
      ),
      name: t("Khaled Nouri", "خالد نوري"),
      role: t("Founder", "المؤسس"),
      company: "DamascusGoods",
      image: "https://images.unsplash.com/photo-1758874573562-5bf0c1a7fc72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMG1hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzcxNTc1NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0F1D32] to-[#0A1628] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
            {t("Success Stories", "قصص النجاح")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E8E4DF] max-w-3xl mx-auto">
            {t("Trusted by Merchants", "يثق بنا التجار")}{" "}
            <span className="text-[#D4D0C8]/40">{t("Across Syria", "في جميع أنحاء سوريا")}</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#1A2A42]/60 to-[#0F1D32]/60 border border-white/5"
            >
              <Quote size={40} className="text-[#00C896]/10 absolute top-8 start-8" />
              
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-[#E8E4DF]/80 mb-8 italic">
                  "{testimonials[active].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#00C896]/20"
                  />
                  <div>
                    <div className="text-[#E8E4DF]">{testimonials[active].name}</div>
                    <div className="text-sm text-[#D4D0C8]/50">
                      {testimonials[active].role}, {testimonials[active].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#D4D0C8]/50 hover:text-[#00C896] hover:border-[#00C896]/30 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-[#00C896] w-6" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#D4D0C8]/50 hover:text-[#00C896] hover:border-[#00C896]/30 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
