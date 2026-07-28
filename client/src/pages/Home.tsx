import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Star, Shield, Clock, HeartHandshake, Award, CreditCard, Sparkles, Quote, Info, ChevronDown, MapPin } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd, localBusinessSchema, faqSchema, reviewSchema } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMemo } from "react";
import { localPageHref } from "@/pages/local/LocalSEOPage";

export default function Home() {
  const { t, lang } = useLanguage();
  const isRtl = true;

  const whyUsItems = [
    { title: t.why_1, desc: t.why_1_desc, icon: Star },
    { title: t.why_2, desc: t.why_2_desc, icon: Shield },
    { title: t.why_3, desc: t.why_3_desc, icon: Clock },
    { title: t.why_4, desc: t.why_4_desc, icon: Award },
    { title: t.why_5, desc: t.why_5_desc, icon: CreditCard },
    { title: t.why_6, desc: t.why_6_desc, icon: Sparkles },
  ];

  const testimonials = [
    { name: t.test_1_name, text: t.test_1_text, rating: 5 },
    { name: t.test_2_name, text: t.test_2_text, rating: 5 },
    { name: t.test_3_name, text: t.test_3_text, rating: 5 },
    { name: t.test_4_name, text: t.test_4_text, rating: 5 },
    { name: t.test_5_name, text: t.test_5_text, rating: 5 },
    { name: t.test_6_name, text: t.test_6_text, rating: 5 },
  ];

  const faqs = Array.from({ length: 12 }, (_, i) => ({
    question: (t as Record<string, string>)[`faq_${i + 1}_q`],
    answer: (t as Record<string, string>)[`faq_${i + 1}_a`],
  }));

  const beforeAfterCases = [
    {
      before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop&q=60",
      after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop&q=60",
      label: lang === "ar" ? "زراعة أسنان" : "השתלת שיניים",
    },
    {
      before: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop&q=60",
      after: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?w=400&h=300&fit=crop&q=60&crop=faces",
      label: lang === "ar" ? "ابتسامة هوليود" : "חיוך הוליוודי",
    },
    {
      before: "https://images.unsplash.com/photo-1626908013943-df94de54984c?w=400&h=300&fit=crop&q=60",
      after: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&q=60",
      label: lang === "ar" ? "تبييض الأسنان" : "הלبנת שיניים",
    },
  ];

  const faqSchemaData = useMemo(() => faqSchema(faqs), [lang]);
  // reviewSchemaData: مبني من شهادات حقيقية — يُراجَع في مرحلة SEO لاحقاً
  const reviewSchemaData = useMemo(() => reviewSchema(testimonials.map(r => ({ author: r.name, text: r.text, rating: r.rating }))), [lang]);
  const localBizData = useMemo(() => localBusinessSchema(lang), [lang]);

  const seoTitle = lang === "ar"
    ? "صوالحي دنت – عيادة أسنان في رام الله | زراعة وتجميل"
    : "סוואלחי דנט – מרפאת שיניים ברמאללה | השתלות ואסתטיקה";
  const seoDesc = lang === "ar"
    ? "عيادة د. محمد صوالحي لزراعة وتجميل الأسنان في رام الله. خدمات زراعة، تقويم، تبييض، ابتسامة هوليود. احجز استشارة مجانية."
    : "מרפאת ד״ר מוחמד סוואלחי להשתלות ואסתטיקת שיניים ברמאללה. השתלות, יישור, הלבנה, חיוך הוליוודי. הזמן ייעוץ חינם.";

  return (
    <div className="flex flex-col gap-24 pb-12">
      <SEOHead title={seoTitle} description={seoDesc} path="/" />
      <JsonLd data={localBizData} />
      <JsonLd data={faqSchemaData} />
      <JsonLd data={reviewSchemaData} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold mb-6">
                <Star className="w-4 h-4 fill-accent" />
                <span>{t.hero_badge}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-6" data-testid="text-hero-title">
                {t.hero_title.split(' ').map((word, i, arr) =>
                  i === arr.length - 2 || i === arr.length - 1 ? <span key={i} className="text-accent">{word} </span> : <span key={i}>{word} </span>
                )}
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                {t.hero_subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center gap-2 text-lg"
                  data-testid="link-hero-cta"
                >
                  {t.hero_cta}
                  <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
                </Link>
                <Link
                  href="/services/implants"
                  className="bg-white text-primary border-2 border-border px-8 py-4 rounded-full font-bold hover:border-primary hover:bg-primary/5 transition-all text-lg"
                  data-testid="link-hero-services"
                >
                  {t.nav_services}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-[3rem] transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop"
                alt={lang === "ar" ? "مريض سعيد - عيادة صوالحي دنت" : "מטופל מרוצה - מרפאת סוואלחי דנט"}
                className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-white"
              />

              <div className="absolute -start-6 top-20 z-20 glass-panel p-4 rounded-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm" data-testid="text-patient-count">+397</p>
                    <p className="text-xs text-muted-foreground">{t.hero_patients}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI QUICK ANSWER BOX */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 sm:p-8 border-accent/30 shadow-lg" data-testid="section-quick-answer">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">{t.quick_title}</h2>
            </div>
            <ul className="space-y-3">
              {[t.quick_1, t.quick_2, t.quick_3, t.quick_4, t.quick_5, t.quick_6].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="text-services-title">{t.services_title}</h2>
          <p className="text-lg text-muted-foreground">{t.services_subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: t.srv_implants, desc: t.srv_implants_desc, icon: Shield, link: "/services/implants", color: "text-blue-500", bg: "bg-blue-50" },
            { title: t.srv_cosmetic, desc: t.srv_cosmetic_desc, icon: Star, link: "/services/cosmetic", color: "text-accent", bg: "bg-accent/10" },
            { title: t.srv_ortho, desc: t.srv_ortho_desc, icon: HeartHandshake, link: "/services/orthodontics", color: "text-purple-500", bg: "bg-purple-50" },
          ].map((srv, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-white rounded-[2rem] p-8 shadow-lg shadow-black/5 border border-border/50 hover:shadow-xl hover:border-accent/30 transition-all group"
            >
              <div className={`w-16 h-16 ${srv.bg} ${srv.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <srv.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{srv.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-2">{srv.desc}</p>
              <Link href={srv.link} className="inline-flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all" data-testid={`link-service-${i}`}>
                {t.learn_more} <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOCAL PAGES LINKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-bold text-primary" data-testid="text-local-title">
              {lang === "ar" ? "خدماتنا في رام الله" : "השירותים שלנו ברמאללה"}
            </h2>
          </div>
          <p className="text-muted-foreground">
            {lang === "ar" ? "اكتشف خدمات طب الأسنان المتخصصة في رام الله" : "גלו את שירותי רפואת השיניים המתמחים ברמאללה"}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { slug: "dentist-ramallah", label: t.local_dentist },
            { slug: "dental-clinic-ramallah", label: lang === "ar" ? "عيادة أسنان في رام الله" : "מרפאת שיניים ברמאללה" },
            { slug: "dental-implants-ramallah", label: lang === "ar" ? "زراعة أسنان في رام الله" : "השתלות שיניים ברמאללה" },
            { slug: "implant-cost-ramallah", label: lang === "ar" ? "تكلفة زراعة الأسنان" : "עלות השתלת שיניים" },
            { slug: "orthodontics-ramallah", label: lang === "ar" ? "تقويم أسنان في رام الله" : "יישור שיניים ברמאללה" },
            { slug: "teeth-whitening-ramallah", label: lang === "ar" ? "تبييض الأسنان في رام الله" : "הלבנת שיניים ברמאללה" },
          ].map((page, i) => (
            <Link
              key={i}
              href={localPageHref(page.slug, lang)}
              className="flex items-center gap-2 p-4 rounded-xl border border-border bg-white shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              data-testid={`link-local-${i}`}
            >
              <ArrowLeft className="w-4 h-4 text-accent shrink-0 rtl:rotate-180" />
              <span className="font-medium text-sm">{page.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US - 6 POINTS */}
      <section className="bg-primary text-white py-24 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://pixabay.com/get/ga74ae85b6dc20766db4da612eb881894ac210468ba189c7454dc4097169b9f291129ccd5737985d668a9efe0d538dad2fea1e7d3bce540e9c96202feacbcc668_1280.jpg')] bg-cover bg-center" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center text-white" data-testid="text-why-title">{t.why_title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyUsItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 items-start"
              >
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="text-before-after-title">{t.before_after_title}</h2>
          <p className="text-muted-foreground">{t.before_after_disclaimer}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {beforeAfterCases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-visible p-4" data-testid={`card-before-after-${i}`}>
                <p className="text-sm font-bold text-center mb-3">{item.label}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="relative rounded-md overflow-hidden aspect-[4/3] bg-muted">
                      <img src={item.before} alt={`${t.before_label} - ${item.label}`} className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 start-1 bg-black/60 text-white text-xs px-2 py-0.5 rounded-md">{t.before_label}</span>
                    </div>
                  </div>
                  <div>
                    <div className="relative rounded-md overflow-hidden aspect-[4/3] bg-muted">
                      <img src={item.after} alt={`${t.after_label} - ${item.label}`} className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 start-1 bg-accent/80 text-white text-xs px-2 py-0.5 rounded-md">{t.after_label}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all"
            data-testid="link-before-after-cta"
          >
            {t.before_after_cta}
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="text-testimonials-title">{t.test_title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="p-6 h-full flex flex-col" data-testid={`card-testimonial-${i}`}>
                <Quote className="w-8 h-8 text-accent/30 mb-3 shrink-0" />
                <p className="text-muted-foreground flex-1 mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between gap-2 pt-3 border-t border-border/50 flex-wrap">
                  <span className="font-bold text-sm">{review.name}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="text-faq-title">{t.faq_title}</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3" data-testid="accordion-faq">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-md px-4">
              <AccordionTrigger className="text-start font-bold hover:no-underline" data-testid={`faq-trigger-${i}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed" data-testid={`faq-content-${i}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FINAL CTA */}
      <CTASection />
    </div>
  );
}
