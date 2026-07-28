import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import logoImg from "@assets/pp_1772668661989.png";
import { localPageHref } from "@/pages/local/LocalSEOPage";

export function Footer() {
  const { t, lang } = useLanguage();

  const serviceLinks = [
    { href: "/services/implants", label: t.srv_implants },
    { href: "/services/cosmetic", label: t.srv_cosmetic },
    { href: "/services/orthodontics", label: t.srv_ortho },
  ];

  const localLinks = [
    { href: localPageHref("dentist-ramallah", lang), label: t.local_dentist },
    { href: localPageHref("dental-implants-ramallah", lang), label: t.srv_implants },
    { href: localPageHref("orthodontics-ramallah", lang), label: t.srv_ortho },
    { href: localPageHref("teeth-whitening-ramallah", lang), label: t.srv_cosmetic },
    { href: localPageHref("hollywood-smile-ramallah", lang), label: t.hollywood_smile },
    { href: localPageHref("emergency-dentist-ramallah", lang), label: t.local_emergency },
  ];

  const blogLinks = [
    { href: "/blog/implant-cost-ramallah", label: t.blog_implant_cost },
    { href: "/blog/hollywood-smile", label: t.blog_hollywood },
    { href: "/blog/best-dentist-ramallah", label: t.blog_best_dentist },
    { href: "/blog/is-implant-painful", label: t.blog_implant_pain },
    { href: "/blog/braces-duration", label: t.blog_braces_time },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 rounded-t-[3rem] mt-24" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl w-fit">
              <div className="w-10 h-10 bg-white rounded-lg p-1">
                <img src={logoImg} alt="Logo" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none">{t.clinic_name_short}</h3>
                <p className="text-accent text-xs">{t.clinic_subtitle}</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-xs mt-4">
              {t.footer_desc}
            </p>

            <ul className="space-y-3 text-primary-foreground/80 mt-6">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>{t.address_full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+970598703536" dir="ltr" className="hover:text-accent transition-colors">{t.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>{t.working_hours_short}</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center" data-testid="link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors flex items-center justify-center" data-testid="link-facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer_services}</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-bold mb-4 mt-8 text-white">{t.footer_local}</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              {localLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer_blog}</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {blogLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer_useful}</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><Link href="/" className="hover:text-accent transition-colors">{t.nav_home}</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">{t.nav_about}</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">{t.nav_contact}</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">{t.nav_blog}</Link></li>
              <li>
                <Link href="/publications" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span className="text-accent text-xs font-bold border border-accent/40 px-1.5 rounded">
                    {t.pub_free}
                  </span>
                  {t.pub_nav}
                </Link>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-white/10 rounded-2xl">
              <p className="text-sm font-bold mb-2 text-white">{t.book_consultation}</p>
              <a
                href="https://wa.me/970598703536"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-4 py-2 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
                data-testid="footer-whatsapp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766 0 1.252.326 2.474.945 3.553l-1.025 3.748 3.839-1.008c1.037.562 2.203.859 3.404.86h.004c3.181 0 5.768-2.586 5.768-5.766 0-3.181-2.587-5.768-5.767-5.768z"/></svg>
                {t.whatsapp_book}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {t.clinic_name}. {t.all_rights}.</p>
          <p>{t.address_full} | {t.phone}</p>
        </div>
      </div>
    </footer>
  );
}
