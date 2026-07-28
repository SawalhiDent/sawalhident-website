import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center" data-testid="not-found-page">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="text-8xl font-extrabold text-accent/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-primary mb-4" data-testid="text-not-found-title">{t.not_found_title}</h1>
        <p className="text-lg text-muted-foreground mb-8" data-testid="text-not-found-desc">{t.not_found_desc}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
            data-testid="link-go-home"
          >
            <Home className="w-5 h-5" />
            {t.go_home}
          </Link>
          <a
            href="https://wa.me/970598703536"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
            data-testid="link-whatsapp-404"
          >
            <Phone className="w-5 h-5" />
            {t.whatsapp_book}
          </a>
        </div>
      </div>
    </div>
  );
}
