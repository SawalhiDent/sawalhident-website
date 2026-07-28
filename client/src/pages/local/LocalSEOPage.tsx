import { useLanguage } from "@/context/LanguageContext";
import { useRoute, Link } from "wouter";
import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd, faqSchema, localBusinessSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, HelpCircle, LinkIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { localPages, type LocalPageData } from "./localData";

export function localPageHref(slug: string, lang: "ar" | "he") {
  return `/${lang}/${slug}.html`;
}

function LocalSEOPageContent({ pageData, forceLang }: { pageData: LocalPageData; forceLang: "ar" | "he" }) {
  const { lang, t, setLang } = useLanguage();

  useEffect(() => {
    if (lang !== forceLang) {
      setLang(forceLang);
    }
  }, [forceLang, lang, setLang]);

  const data = pageData[forceLang];

  const faqSchemaData = faqSchema(
    data.faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <div className="flex flex-col gap-16 pb-12">
      <SEOHead
        title={data.title}
        description={data.metaDescription}
        path={`/${forceLang}/${pageData.slug}.html`}
      />
      <JsonLd data={faqSchemaData} />
      <JsonLd data={localBusinessSchema(forceLang)} />

      <section className="pt-32 pb-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Breadcrumbs
          items={[
            { label: t.breadcrumb_home, href: "/" },
            { label: data.h1 },
          ]}
        />

        <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-bold rounded-full mb-6 text-sm" data-testid="local-page-badge">
          {forceLang === "ar" ? "رام الله" : "רמאללה"}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6" data-testid="local-page-h1">
          {data.h1}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="local-page-intro">
          {data.intro}
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-8">
          {data.contentSections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-primary mb-3" data-testid={`content-heading-${i}`}>
                {section.heading}
              </h2>
              <p className="text-muted-foreground leading-relaxed" data-testid={`content-text-${i}`}>
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Card className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-primary mb-6" data-testid="practical-points-title">
            {forceLang === "ar" ? "نقاط عملية" : "נקודות מעשיות"}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {data.practicalPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3" data-testid={`practical-point-${i}`}>
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-primary" data-testid="faq-title">
            {t.faq_title}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {data.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-right" data-testid={`faq-question-${i}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent data-testid={`faq-answer-${i}`}>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center gap-3 mb-6">
          <LinkIcon className="w-5 h-5 text-accent" />
          <h2 className="text-2xl font-bold text-primary" data-testid="related-links-title">
            {t.related_services}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {data.relatedLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="flex items-center gap-3 p-4 rounded-md border border-border hover-elevate transition-colors"
              data-testid={`related-link-${i}`}
            >
              <ArrowLeft className="w-4 h-4 text-accent shrink-0 rtl:rotate-180" />
              <span className="font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-lg font-bold text-muted-foreground">
            {forceLang === "ar" ? "هذه الصفحة متوفرة أيضاً بالعبرية:" : "עמוד זה זמין גם בערבית:"}
          </h3>
        </div>
        <Link
          href={localPageHref(pageData.slug, forceLang === "ar" ? "he" : "ar")}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border font-bold text-primary hover-elevate transition-colors"
          data-testid="link-alternate-lang"
        >
          {forceLang === "ar" ? "עברית" : "العربية"}
        </Link>
      </section>

      <CTASection />
    </div>
  );
}

export default function LocalSEOPage() {
  const [matchedAr, paramsAr] = useRoute("/ar/:page");
  const [matchedHe, paramsHe] = useRoute("/he/:page");

  let slug: string | undefined;
  let forceLang: "ar" | "he" = "ar";

  if (matchedAr && paramsAr?.page) {
    slug = paramsAr.page.replace(/\.html$/, "");
    forceLang = "ar";
  } else if (matchedHe && paramsHe?.page) {
    slug = paramsHe.page.replace(/\.html$/, "");
    forceLang = "he";
  }

  const pageData = slug ? localPages.find((p) => p.slug === slug) : undefined;

  if (!pageData) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          {forceLang === "ar" ? "الصفحة غير موجودة" : "העמוד לא נמצא"}
        </h1>
        <Link href="/" className="text-accent font-bold">
          {forceLang === "ar" ? "العودة للرئيسية" : "חזרה לדף הבית"}
        </Link>
      </div>
    );
  }

  return <LocalSEOPageContent pageData={pageData} forceLang={forceLang} />;
}
