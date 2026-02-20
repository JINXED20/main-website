import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, ArrowRight, ArrowLeft, Clock } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";

export function Blog() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [activeCategory, setActiveCategory] = useState(0);

  const posts = [
    {
      title: t("Why Syria's E-commerce Boom Needs a Delivery Revolution", "لماذا تحتاج طفرة التجارة الإلكترونية في سوريا ثورة توصيل"),
      excerpt: t(
        "As digital commerce surges in Syria, the delivery infrastructure hasn't kept pace. Here's why that's both a challenge and an enormous opportunity.",
        "مع تصاعد التجارة الرقمية في سوريا، لم تواكب البنية التحتية للتوصيل. إليك لماذا يمثل هذا تحدياً وفرصة هائلة."
      ),
      category: t("Market Insights", "رؤى السوق"),
      date: t("Feb 15, 2026", "١٥ فبراير ٢٠٢٦"),
      readTime: t("5 min read", "٥ دقائق قراءة"),
      image: "https://images.unsplash.com/photo-1762251374590-64962c1a451c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwbG9naXN0aWNzJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc3MTU3NTUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: true,
    },
    {
      title: t("COD Reconciliation: The Hidden Cost Killing Syrian Merchants", "مطابقة الدفع عند الاستلام: التكلفة الخفية التي تقتل التجار السوريين"),
      excerpt: t(
        "Cash-on-delivery accounts for 85% of transactions in Syria. Without proper tracking, merchants lose thousands monthly.",
        "الدفع عند الاستلام يمثل ٨٥٪ من المعاملات في سوريا. بدون تتبع مناسب، يخسر التجار آلافاً شهرياً."
      ),
      category: t("Logistics Tips", "نصائح لوجستية"),
      date: t("Feb 10, 2026", "١٠ فبراير ٢٠٢٦"),
      readTime: t("4 min read", "٤ دقائق قراءة"),
      image: "https://images.unsplash.com/photo-1625197409744-569dc0515e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtZXJjaGFudCUyMHNtYWxsJTIwYnVzaW5lc3MlMjBvd25lcnxlbnwxfHx8fDE3NzE1NzU1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false,
    },
    {
      title: t("How to Choose the Right Carrier for Every Shipment", "كيف تختار شركة التوصيل المناسبة لكل شحنة"),
      excerpt: t("Not all carriers are created equal. Here's a framework for matching the right carrier to every order type.", "ليست كل شركات التوصيل متساوية. إليك إطار عمل لاختيار الشركة المناسبة لكل نوع طلب."),
      category: t("Logistics Tips", "نصائح لوجستية"),
      date: t("Feb 5, 2026", "٥ فبراير ٢٠٢٦"),
      readTime: t("6 min read", "٦ دقائق قراءة"),
      image: null,
      featured: false,
    },
    {
      title: t("Odrex Platform Update: Returns Management is Here", "تحديث منصة أودركس: إدارة الإرجاع متاحة الآن"),
      excerpt: t("We're excited to announce our new self-service returns portal. Make returns painless for your customers.", "يسعدنا الإعلان عن بوابة الإرجاع الذاتية الجديدة. اجعل الإرجاع سلساً لعملائك."),
      category: t("Product Updates", "تحديثات المنتج"),
      date: t("Jan 28, 2026", "٢٨ يناير ٢٠٢٦"),
      readTime: t("3 min read", "٣ دقائق قراءة"),
      image: null,
      featured: false,
    },
    {
      title: t("The Dual-Layer Model: How We're Building Delivery Infrastructure", "نموذج الطبقتين: كيف نبني البنية التحتية للتوصيل"),
      excerpt: t("Most shipping aggregators just connect existing carriers. We take a fundamentally different approach.", "معظم مُجمّعي الشحن يربطون الشركات الحالية فقط. نحن نتبع نهجاً مختلفاً جذرياً."),
      category: t("Company", "الشركة"),
      date: t("Jan 20, 2026", "٢٠ يناير ٢٠٢٦"),
      readTime: t("7 min read", "٧ دقائق قراءة"),
      image: null,
      featured: false,
    },
    {
      title: t("5 Metrics Every E-commerce Merchant Should Track", "٥ مقاييس يجب أن يتتبعها كل تاجر إلكتروني"),
      excerpt: t("From delivery success rates to cost-per-shipment, these are the numbers that separate growing businesses from stagnating ones.", "من نسب نجاح التوصيل إلى تكلفة الشحنة، هذه الأرقام تفصل الأعمال النامية عن الراكدة."),
      category: t("Logistics Tips", "نصائح لوجستية"),
      date: t("Jan 15, 2026", "١٥ يناير ٢٠٢٦"),
      readTime: t("4 min read", "٤ دقائق قراءة"),
      image: null,
      featured: false,
    },
  ];

  const categories = [
    t("All", "الكل"),
    t("Market Insights", "رؤى السوق"),
    t("Logistics Tips", "نصائح لوجستية"),
    t("Product Updates", "تحديثات المنتج"),
    t("Company", "الشركة"),
  ];

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0F1D32] to-[#0A1628]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
              {t("Blog", "المدونة")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E4DF] mb-6">
              {t("Insights & Updates", "رؤى وتحديثات")}
            </h1>
            <p className="text-lg text-[#D4D0C8]/50 max-w-2xl mx-auto">
              {t(
                "Logistics tips, product updates, and market insights from the Odrex team.",
                "نصائح لوجستية، تحديثات المنتج، ورؤى السوق من فريق أودركس."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 bg-[#0A1628] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(i)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                  i === activeCategory
                    ? "bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/20"
                    : "text-[#D4D0C8]/50 border border-white/5 hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-16 bg-[#0A1628]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-8 p-6 rounded-2xl bg-[#1A2A42]/40 border border-white/5">
                <div className="h-64 lg:h-auto rounded-xl overflow-hidden bg-[#0A1628]">
                  {featured.image && (
                    <ImageWithFallback
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center py-4">
                  <span className="inline-block w-fit text-xs text-[#00C896] bg-[#00C896]/10 px-3 py-1 rounded-full mb-4">
                    {featured.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl text-[#E8E4DF] mb-3">{featured.title}</h2>
                  <p className="text-[#D4D0C8]/50 mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-[#D4D0C8]/30">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {featured.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {featured.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.05}>
                <motion.div
                  className="p-6 rounded-xl bg-[#1A2A42]/40 border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex flex-col cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  {post.image && (
                    <div className="h-40 rounded-lg overflow-hidden mb-4 -mx-2 -mt-2">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <span className="inline-block w-fit text-[10px] text-[#00C896] bg-[#00C896]/10 px-2.5 py-0.5 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-[#E8E4DF] mb-2">{post.title}</h3>
                  <p className="text-sm text-[#D4D0C8]/40 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#D4D0C8]/30">
                    <div className="flex items-center gap-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Arrow size={14} className="text-[#00C896]" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#0F1D32]/50">
        <div className="max-w-xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl text-[#E8E4DF] mb-3">{t("Stay Updated", "ابقَ على اطلاع")}</h2>
            <p className="text-sm text-[#D4D0C8]/50 mb-6">
              {t(
                "Get the latest logistics insights and product updates delivered to your inbox.",
                "احصل على أحدث الرؤى اللوجستية وتحديثات المنتج في بريدك الإلكتروني."
              )}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t("Enter your email", "أدخل بريدك الإلكتروني")}
                className="flex-1 px-4 py-3 rounded-xl bg-[#1A2A42]/80 border border-white/5 text-[#E8E4DF] placeholder:text-[#D4D0C8]/30 focus:outline-none focus:border-[#00C896]/20"
              />
              <button className="px-6 py-3 bg-[#00C896] text-[#0A1628] rounded-xl hover:bg-[#00C896]/90 transition-colors text-sm">
                {t("Subscribe", "اشترك")}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
