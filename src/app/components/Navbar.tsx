import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { OdrexLogo } from "./OdrexLogo";
import { useLanguage } from "./LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t, isRTL } = useLanguage();

  const navLinks = [
    { label: t("Home", "الرئيسية"), path: "/" },
    { label: t("About", "من نحن"), path: "/about" },
    { label: t("Features", "المزايا"), path: "/features" },
    { label: t("For Carriers", "لشركات التوصيل"), path: "/carriers" },
    { label: t("Integrations", "التكاملات"), path: "/integrations" },
    { label: t("Pricing", "الأسعار"), path: "/pricing" },
    { label: t("Contact", "تواصل معنا"), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1628]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link to="/" className="flex items-center gap-2 group">
            <OdrexLogo className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-[#00C896]"
                    : "text-[#D4D0C8]/70 hover:text-[#E8E4DF] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-[#D4D0C8]/70 hover:text-[#00C896] transition-colors duration-200 rounded-lg hover:bg-white/5"
              title={t("Switch to Arabic", "التحويل إلى الإنجليزية")}
            >
              <Globe size={15} />
              <span>{lang === "en" ? "عربي" : "EN"}</span>
            </button>

            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm text-[#E8E4DF] hover:text-[#00C896] transition-colors duration-200"
            >
              {t("Book a Demo", "احجز عرضاً")}
            </Link>
            <Link
              to="/pricing"
              className="px-5 py-2.5 text-sm bg-[#00C896] text-[#0A1628] rounded-lg hover:bg-[#00C896]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#00C896]/20"
            >
              {t("Start Shipping", "ابدأ الشحن")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#E8E4DF] hover:text-[#00C896] transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0A1628]/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm transition-all ${
                    location.pathname === link.path
                      ? "text-[#00C896] bg-[#00C896]/10"
                      : "text-[#D4D0C8]/70 hover:text-[#E8E4DF] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                {/* Mobile Language toggle */}
                <button
                  onClick={toggleLang}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm text-[#D4D0C8]/70 border border-white/10 rounded-lg hover:text-[#00C896] transition-colors"
                >
                  <Globe size={15} />
                  {lang === "en" ? "العربية" : "English"}
                </button>
                <Link
                  to="/contact"
                  className="block text-center px-5 py-3 text-sm text-[#E8E4DF] border border-white/10 rounded-lg"
                >
                  {t("Book a Demo", "احجز عرضاً")}
                </Link>
                <Link
                  to="/pricing"
                  className="block text-center px-5 py-3 text-sm bg-[#00C896] text-[#0A1628] rounded-lg"
                >
                  {t("Start Shipping", "ابدأ الشحن")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
