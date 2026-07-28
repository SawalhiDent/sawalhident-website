import { Link } from "wouter";
import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-accent text-white py-16 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary/60 opacity-90" />
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.final_cta_title}</h2>
        <p className="text-white/80 text-lg mb-8">{t.final_cta_subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/970598703536"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
            data-testid="cta-whatsapp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766 0 1.252.326 2.474.945 3.553l-1.025 3.748 3.839-1.008c1.037.562 2.203.859 3.404.86h.004c3.181 0 5.768-2.586 5.768-5.766 0-3.181-2.587-5.768-5.767-5.768zm3.266 8.212c-.179.497-.847.954-1.319 1.02-.429.059-1.042.179-2.923-.591-2.271-.925-3.731-3.23-3.844-3.393-.113-.163-.923-1.229-.923-2.336 0-1.107.576-1.654.779-1.874.203-.22.443-.275.592-.275.149 0 .298.006.429.012.138.006.324-.052.508.358.188.423.639 1.562.696 1.678.056.115.094.25.019.385-.075.135-.113.22-.226.347-.113.127-.235.27-.338.376-.113.115-.233.243-.105.452.128.21.57.932 1.224 1.517.846.757 1.547.99 1.765 1.107.218.115.346.095.474-.05.128-.146.551-.64.698-.86.147-.22.294-.184.498-.108.204.076 1.288.608 1.509.718.22.11.368.165.421.256.054.092.054.53-.125 1.027z"/></svg>
            {t.whatsapp_book}
          </a>
          <a
            href="tel:+970598703536"
            className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
            data-testid="cta-call"
          >
            <Phone className="w-5 h-5" />
            {t.call_now}
          </a>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:-translate-y-0.5 transition-all"
            data-testid="cta-contact"
          >
            {t.book_appointment}
          </Link>
        </div>
      </div>
    </section>
  );
}
