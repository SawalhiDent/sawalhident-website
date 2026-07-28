import { Link, useLocation } from "wouter";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/pp_1772668661989.png";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav_home },
    { href: "/services/implants", label: t.nav_services },
    { href: "/about", label: t.nav_about },
    { href: "/blog", label: t.nav_blog },
    { href: "/publications", label: t.pub_nav, highlight: true },
    { href: "/contact", label: t.nav_contact },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden p-1 group-hover:scale-105 transition-transform">
              <img src={logoImg} alt="Dr. Sawalhi Logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-xl leading-tight ${isScrolled ? 'text-primary' : 'text-primary drop-shadow-md'}`}>
                د. محمد صوالحي
              </h1>
              <p className={`text-xs font-semibold tracking-wider ${isScrolled ? 'text-accent' : 'text-accent drop-shadow'}`}>
                DENTAL CLINIC
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-semibold text-sm transition-colors hover:text-accent ${
                  location === link.href || location.startsWith(link.href + "/")
                    ? "text-accent"
                    : isScrolled ? "text-primary/80" : "text-primary"
                } ${link.highlight ? "border-b-2 border-accent/40 pb-0.5" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'ar' ? 'he' : 'ar')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold transition-colors ${
                isScrolled ? 'bg-primary/5 text-primary hover:bg-primary/10' : 'bg-white/50 text-primary hover:bg-white/80'
              }`}
            >
              <Globe className="w-4 h-4" />
              {lang === 'ar' ? 'עברית' : 'عربي'}
            </button>
            
            <Link 
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {t.book_now}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-border/50 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-semibold text-primary ${
                    link.highlight
                      ? "hover:bg-accent/10 text-accent border border-accent/20"
                      : "hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <div className="flex justify-between items-center px-4 py-2">
                <button 
                  onClick={() => { setLang(lang === 'ar' ? 'he' : 'ar'); setMobileMenuOpen(false); }}
                  className="flex items-center gap-2 font-bold text-primary"
                >
                  <Globe className="w-5 h-5" />
                  {lang === 'ar' ? 'עברית' : 'عربي'}
                </button>
                <Link 
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-accent text-white px-6 py-2 rounded-full font-bold text-sm"
                >
                  {t.book_now}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
