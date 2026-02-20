import { Link } from "react-router";
import { OdrexLogo } from "./OdrexLogo";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    [t("Product", "المنتج")]: [
      { label: t("Features", "المزايا"), path: "/features" },
      { label: t("For Carriers", "لشركات التوصيل"), path: "/carriers" },
      { label: t("Integrations", "التكاملات"), path: "/integrations" },
      { label: t("Pricing", "الأسعار"), path: "/pricing" },
    ],
    [t("Company", "الشركة")]: [
      { label: t("About", "من نحن"), path: "/about" },
      { label: t("Blog", "المدونة"), path: "/blog" },
      { label: t("Careers", "الوظائف"), path: "#" },
      { label: t("Contact", "تواصل معنا"), path: "/contact" },
    ],
    [t("Resources", "الموارد")]: [
      { label: t("Documentation", "التوثيق"), path: "#" },
      { label: t("API Reference", "مرجع API"), path: "#" },
      { label: t("Help Center", "مركز المساعدة"), path: "#" },
      { label: t("Status", "حالة النظام"), path: "#" },
    ],
    [t("Legal", "قانوني")]: [
      { label: t("Privacy Policy", "سياسة الخصوصية"), path: "#" },
      { label: t("Terms of Service", "شروط الخدمة"), path: "#" },
      { label: t("Cookie Policy", "سياسة ملفات تعريف الارتباط"), path: "#" },
    ],
  };

  return (
    <footer className="bg-[#060E1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <OdrexLogo className="h-8 w-auto mb-4" />
            <p className="text-[#D4D0C8]/60 text-sm max-w-xs mb-6">
              {t(
                "Building the delivery infrastructure for markets that need it most.",
                "نبني البنية التحتية للتوصيل في الأسواق التي تحتاجها أكثر."
              )}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#D4D0C8]/50">
                <MapPin size={14} className="text-[#00C896] shrink-0" />
                <span>{t("Damascus, Syria", "دمشق، سوريا")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#D4D0C8]/50">
                <Mail size={14} className="text-[#00C896] shrink-0" />
                <span>hello@odrex.io</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#D4D0C8]/50">
                <Phone size={14} className="text-[#00C896] shrink-0" />
                <span>+963 XXX XXX XXX</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#E8E4DF] text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-[#D4D0C8]/50 hover:text-[#00C896] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#D4D0C8]/40">
            {t(
              "© 2026 Odrex. All rights reserved.",
              "© 2026 أودركس. جميع الحقوق محفوظة."
            )}
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-[#D4D0C8]/40 hover:text-[#00C896] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
