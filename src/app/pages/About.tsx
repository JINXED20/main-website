import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Calendar, Users, Target, Rocket, Globe } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const timeline = [
    { year: "2024", title: t("The Idea", "الفكرة"), desc: t("Identified the massive gap in Syria's delivery infrastructure", "تحديد الفجوة الهائلة في البنية التحتية للتوصيل في سوريا") },
    { year: "2024", title: t("Product Development", "تطوير المنتج"), desc: t("Built the carrier automation platform from the ground up", "بناء منصة أتمتة الناقل من الصفر") },
    { year: "2025", title: t("Beta Launch", "إطلاق تجريبي"), desc: t("Onboarded first carriers and merchants in Damascus", "انضمام أول شركات التوصيل والتجار في دمشق") },
    { year: "2025", title: t("Product-Market Fit", "ملاءمة السوق"), desc: t("Reached 500+ merchants and 25+ carrier connections", "الوصول لأكثر من ٥٠٠ تاجر و٢٥ شركة توصيل") },
    { year: "2026", title: t("Scaling", "التوسع"), desc: t("Expanding across Syria and preparing for Iraq market entry", "التوسع في سوريا والتحضير لدخول السوق العراقي") },
    { year: "2027", title: t("MENA Expansion", "التوسع في المنطقة"), desc: t("Targeting emerging markets across the region", "استهداف الأسواق الناشئة في المنطقة") },
  ];

  const teamMembers = [
    {
      name: t("Founding Team", "فريق التأسيس"),
      role: t("Engineering & Product", "الهندسة والمنتج"),
      image: "https://images.unsplash.com/photo-1758874574397-e56dfcfc116d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwbWFuJTIwdGVjaCUyMHN0YXJ0dXB8ZW58MXx8fHwxNzcxNTc1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("Operations Lead", "قائد العمليات"),
      role: t("Logistics & Partnerships", "اللوجستيات والشراكات"),
      image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTQ5NzgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("Growth Lead", "قائدة النمو"),
      role: t("Marketing & Sales", "التسويق والمبيعات"),
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNTQ3MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: t("Finance Lead", "قائدة المالية"),
      role: t("Finance & Strategy", "المالية والاستراتيجية"),
      image: "https://images.unsplash.com/photo-1612116144183-d1ba477239f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGFyYWIlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzE1NzU1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const values = [
    { icon: Target, title: t("Infrastructure First", "البنية التحتية أولاً"), desc: t("We build the foundations, not just the interface. Real problems need real solutions.", "نبني الأساسات، لا الواجهة فقط. المشاكل الحقيقية تحتاج حلولاً حقيقية.") },
    { icon: Users, title: t("Community-Driven", "بقيادة المجتمع"), desc: t("Every carrier and merchant we serve makes the entire network stronger.", "كل شركة توصيل وتاجر نخدمه يجعل الشبكة بأكملها أقوى.") },
    { icon: Rocket, title: t("Move Fast", "تحرّك بسرعة"), desc: t("Syria's market is evolving rapidly. We ship daily and iterate weekly.", "سوق سوريا يتطور بسرعة. ننشر يومياً ونحسّن أسبوعياً.") },
    { icon: Globe, title: t("Think Global", "فكّر عالمياً"), desc: t("Built for Syria, designed for MENA. Our architecture scales across borders.", "مبني لسوريا، مصمم للشرق الأوسط. بنيتنا تتوسع عبر الحدود.") },
  ];

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0F1D32] to-[#0A1628]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00C896]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
              {t("About Odrex", "عن أودركس")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E4DF] mb-6">
              {t("Building Delivery Infrastructure", "بناء البنية التحتية للتوصيل")}{" "}
              <span className="text-[#D4D0C8]/40">{t("for Markets That Need It Most", "للأسواق التي تحتاجها أكثر")}</span>
            </h1>
            <p className="text-lg text-[#D4D0C8]/50 max-w-2xl">
              {t(
                "Founded in Damascus, Odrex is on a mission to build the delivery ecosystem that Syria's digital economy deserves. We believe that reliable logistics infrastructure is the backbone of commerce.",
                "تأسست في دمشق، أودركس في مهمة لبناء منظومة التوصيل التي يستحقها الاقتصاد الرقمي في سوريا. نؤمن أن البنية التحتية اللوجستية الموثوقة هي العمود الفقري للتجارة."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20 bg-[#0F1D32]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-4xl text-[#E8E4DF] mb-6">
                {t("Why Syria, Why Now", "لماذا سوريا، لماذا الآن")}
              </h2>
              <div className="space-y-4 text-[#D4D0C8]/50">
                <p>
                  {t(
                    "Syria is at an inflection point. With sanctions being reconsidered, SWIFT re-entry discussions underway, and international payment networks exploring entry, the country is poised for a digital commerce revolution.",
                    "سوريا في نقطة تحول. مع إعادة النظر في العقوبات، ومناقشات العودة لنظام SWIFT، واستكشاف شبكات الدفع الدولية للدخول، البلد مهيأ لثورة تجارة رقمية."
                  )}
                </p>
                <p>
                  {t(
                    "But there's a critical gap: delivery infrastructure. E-commerce can't scale without reliable, trackable, affordable delivery. That's the gap Odrex fills.",
                    "لكن هناك فجوة حرجة: البنية التحتية للتوصيل. التجارة الإلكترونية لا يمكن أن تنمو بدون توصيل موثوق وقابل للتتبع وبأسعار معقولة. هذه هي الفجوة التي تسدّها أودركس."
                  )}
                </p>
                <p>
                  {t(
                    "Unlike other markets where delivery companies are already digitized, Syria's carriers still run on paper, phone calls, and WhatsApp groups. We don't just connect them — we give them the software to modernize, then aggregate them into a single platform for merchants.",
                    "على عكس الأسواق الأخرى حيث شركات التوصيل رقمية بالفعل، شركات التوصيل في سوريا لا تزال تعمل بالورق والمكالمات ومجموعات واتساب. لا نربطها فقط — بل نمنحها البرنامج للتحديث، ثم نجمعها في منصة واحدة للتجار."
                  )}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MapPin, label: t("Damascus HQ", "مقر دمشق"), value: t("Founded 2024", "تأسست ٢٠٢٤") },
                  { icon: Users, label: t("Team Size", "حجم الفريق"), value: t("Growing Fast", "ينمو بسرعة") },
                  { icon: Target, label: t("Markets", "الأسواق"), value: t("Syria + MENA", "سوريا + المنطقة") },
                  { icon: Calendar, label: t("Stage", "المرحلة"), value: t("Pre-Series A", "ما قبل الجولة أ") },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="p-6 rounded-xl bg-[#1A2A42]/60 border border-white/5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <stat.icon size={20} className="text-[#00C896] mb-3" />
                    <div className="text-sm text-[#D4D0C8]/40 mb-1">{stat.label}</div>
                    <div className="text-[#E8E4DF]">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#E8E4DF] mb-4">{t("Our Values", "قيمنا")}</h2>
            <p className="text-[#D4D0C8]/50 max-w-lg mx-auto">
              {t("The principles that guide everything we build.", "المبادئ التي توجّه كل ما نبنيه.")}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-[#1A2A42]/40 border border-white/5 hover:border-[#00C896]/10 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#00C896]/10 flex items-center justify-center mb-4">
                    <value.icon size={22} className="text-[#00C896]" />
                  </div>
                  <h3 className="text-[#E8E4DF] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#D4D0C8]/40">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0F1D32]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#E8E4DF] mb-4">{t("Our Journey", "رحلتنا")}</h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00C896]/30 via-[#00C896]/10 to-transparent" />
              
              {timeline.map((item, i) => (
                <AnimatedSection
                  key={`${item.year}-${item.title}`}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <div className={`flex items-start gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-end" : "md:text-start"} hidden md:block`}>
                      <div className="p-4 rounded-xl bg-[#1A2A42]/40 border border-white/5 inline-block">
                        <div className="text-sm text-[#00C896] mb-1">{item.year}</div>
                        <div className="text-[#E8E4DF] mb-1">{item.title}</div>
                        <div className="text-sm text-[#D4D0C8]/40">{item.desc}</div>
                      </div>
                    </div>
                    <div className="relative shrink-0">
                      <div className="w-8 h-8 rounded-full bg-[#0A1628] border-2 border-[#00C896]/30 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00C896]" />
                      </div>
                    </div>
                    <div className="flex-1 md:hidden">
                      <div className="p-4 rounded-xl bg-[#1A2A42]/40 border border-white/5">
                        <div className="text-sm text-[#00C896] mb-1">{item.year}</div>
                        <div className="text-[#E8E4DF] mb-1">{item.title}</div>
                        <div className="text-sm text-[#D4D0C8]/40">{item.desc}</div>
                      </div>
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#E8E4DF] mb-4">{t("The Team", "الفريق")}</h2>
            <p className="text-[#D4D0C8]/50 max-w-lg mx-auto">
              {t("A passionate team building Syria's delivery future.", "فريق شغوف يبني مستقبل التوصيل في سوريا.")}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="group p-6 rounded-xl bg-[#1A2A42]/40 border border-white/5 text-center hover:border-[#00C896]/10 transition-all duration-300">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-white/5 group-hover:border-[#00C896]/20 transition-colors"
                  />
                  <div className="text-[#E8E4DF] mb-1">{member.name}</div>
                  <div className="text-sm text-[#D4D0C8]/40">{member.role}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
