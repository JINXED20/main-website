import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "merchant",
    message: "",
  });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-18">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0F1D32] to-[#0A1628]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-sm text-[#00C896] mb-4 tracking-widest uppercase">
              {t("Contact Us", "تواصل معنا")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#E8E4DF] mb-6">
              {t("Let's Build", "لنبنِ")}{" "}
              <span className="text-[#D4D0C8]/40">{t("Together", "معاً")}</span>
            </h1>
            <p className="text-lg text-[#D4D0C8]/50 max-w-2xl mx-auto">
              {t(
                "Whether you're a merchant, delivery company, or investor — we'd love to hear from you.",
                "سواء كنت تاجراً أو شركة توصيل أو مستثمراً — يسعدنا التواصل معك."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl text-[#E8E4DF] mb-8">{t("Get in Touch", "تواصل معنا")}</h2>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: t("Office", "المكتب"), value: t("Damascus, Syria", "دمشق، سوريا") },
                    { icon: Mail, label: t("Email", "البريد"), value: "hello@odrex.io" },
                    { icon: Phone, label: t("Phone", "الهاتف"), value: "+963 XXX XXX XXX" },
                    { icon: Clock, label: t("Hours", "ساعات العمل"), value: t("Sun-Thu, 9:00-18:00 (Damascus Time)", "الأحد-الخميس، ٩:٠٠-١٨:٠٠ (توقيت دمشق)") },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#00C896]/10 flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-[#00C896]" />
                      </div>
                      <div>
                        <div className="text-sm text-[#D4D0C8]/40 mb-0.5">{item.label}</div>
                        <div className="text-[#E8E4DF]">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-xl bg-[#1A2A42]/40 border border-white/5">
                  <h3 className="text-[#E8E4DF] mb-2">{t("For Investors", "للمستثمرين")}</h3>
                  <p className="text-sm text-[#D4D0C8]/40 mb-4">
                    {t(
                      "Interested in Syria's logistics infrastructure opportunity? We're open to conversations about our pre-Series A round.",
                      "مهتم بفرصة البنية التحتية اللوجستية في سوريا؟ نرحب بالحوار حول جولتنا التمويلية قبل السلسلة أ."
                    )}
                  </p>
                  <a href="mailto:investors@odrex.io" className="text-sm text-[#00C896] hover:underline">
                    investors@odrex.io
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 rounded-2xl bg-[#1A2A42]/40 border border-[#00C896]/20 text-center"
                  >
                    <CheckCircle size={48} className="text-[#00C896] mx-auto mb-6" />
                    <h3 className="text-2xl text-[#E8E4DF] mb-3">{t("Message Sent!", "تم إرسال الرسالة!")}</h3>
                    <p className="text-[#D4D0C8]/50 mb-6">
                      {t(
                        "Thank you for reaching out. Our team will get back to you within 24 hours.",
                        "شكراً لتواصلك. سيعاود فريقنا الاتصال بك خلال ٢٤ ساعة."
                      )}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", company: "", type: "merchant", message: "" });
                      }}
                      className="text-sm text-[#00C896] hover:underline"
                    >
                      {t("Send another message", "إرسال رسالة أخرى")}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#1A2A42]/40 border border-white/5">
                    <h3 className="text-xl text-[#E8E4DF] mb-6">{t("Send Us a Message", "أرسل لنا رسالة")}</h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm text-[#D4D0C8]/50 mb-2">{t("Full Name", "الاسم الكامل")}</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0A1628]/60 border border-white/5 text-[#E8E4DF] placeholder:text-[#D4D0C8]/20 focus:outline-none focus:border-[#00C896]/20 transition-colors"
                          placeholder={t("Your name", "اسمك")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#D4D0C8]/50 mb-2">{t("Email", "البريد الإلكتروني")}</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0A1628]/60 border border-white/5 text-[#E8E4DF] placeholder:text-[#D4D0C8]/20 focus:outline-none focus:border-[#00C896]/20 transition-colors"
                          placeholder={t("you@company.com", "بريدك@الشركة.com")}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm text-[#D4D0C8]/50 mb-2">{t("Company", "الشركة")}</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0A1628]/60 border border-white/5 text-[#E8E4DF] placeholder:text-[#D4D0C8]/20 focus:outline-none focus:border-[#00C896]/20 transition-colors"
                          placeholder={t("Company name", "اسم الشركة")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#D4D0C8]/50 mb-2">{t("I am a...", "أنا...")}</label>
                        <select
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0A1628]/60 border border-white/5 text-[#E8E4DF] focus:outline-none focus:border-[#00C896]/20 transition-colors"
                        >
                          <option value="merchant">{t("Merchant", "تاجر")}</option>
                          <option value="carrier">{t("Delivery Company", "شركة توصيل")}</option>
                          <option value="investor">{t("Investor", "مستثمر")}</option>
                          <option value="partner">{t("Partner", "شريك")}</option>
                          <option value="other">{t("Other", "آخر")}</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm text-[#D4D0C8]/50 mb-2">{t("Message", "الرسالة")}</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0A1628]/60 border border-white/5 text-[#E8E4DF] placeholder:text-[#D4D0C8]/20 focus:outline-none focus:border-[#00C896]/20 transition-colors resize-none"
                        placeholder={t("Tell us about your needs...", "أخبرنا عن احتياجاتك...")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3.5 bg-[#00C896] text-[#0A1628] rounded-xl hover:bg-[#00C896]/90 transition-all hover:shadow-lg hover:shadow-[#00C896]/20"
                    >
                      <Send size={16} />
                      {t("Send Message", "إرسال الرسالة")}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
