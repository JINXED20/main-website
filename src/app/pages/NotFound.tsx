import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { useLanguage } from "../components/LanguageContext";

export function NotFound() {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="pt-18 min-h-screen flex items-center justify-center">
      <AnimatedSection className="text-center px-6">
        <div className="text-8xl text-[#00C896]/20 mb-6">404</div>
        <h1 className="text-3xl md:text-4xl text-[#E8E4DF] mb-4">
          {t("Page Not Found", "الصفحة غير موجودة")}
        </h1>
        <p className="text-[#D4D0C8]/50 mb-8 max-w-md mx-auto">
          {t(
            "The page you're looking for doesn't exist or has been moved.",
            "الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
          )}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00C896] text-[#0A1628] rounded-xl hover:bg-[#00C896]/90 transition-all"
        >
          <Arrow size={16} />
          {t("Back to Home", "العودة للرئيسية")}
        </Link>
      </AnimatedSection>
    </div>
  );
}
