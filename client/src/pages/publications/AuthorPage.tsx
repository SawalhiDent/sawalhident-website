import { motion } from "framer-motion";
import { Link } from "wouter";
import { User, ExternalLink } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/lib/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";
import { DR_SAWALHI } from "@/data/publications/author";
import { publishedBooks } from "@/data/publications/books";
import { BookCard } from "./components/BookCard";
import { personSchema } from "@/lib/publicationSchema";

export default function AuthorPage() {
  const { t, lang } = useLanguage();
  const books = publishedBooks().filter((b) => b.authorId === "mohamed-sawalhi");
  const authorUrl = siteUrl("/publications/author/mohamed-sawalhi");

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${DR_SAWALHI.nameAr} (${DR_SAWALHI.nameEn})`,
    url: authorUrl,
    mainEntity: personSchema(DR_SAWALHI, authorUrl)["mainEntity"] ?? personSchema(DR_SAWALHI, authorUrl),
  };

  return (
    <>
      <SEOHead
        title={
          lang === "ar"
            ? "د. محمد صوالحي – مؤلف ومرجع في طب الأسنان"
            : "ד״ר מוחמד סוואלחי – מחבר ומומחה ברפואת שיניים"
        }
        description={
          lang === "ar"
            ? "صفحة المؤلف د. محمد صوالحي. طبيب أسنان مختص ومؤلف كتب علمية مجانية في زراعة الأسنان والتجميل والتقويم."
            : "עמוד המחבר ד״ר מוחמד סוואלחי. רופא שיניים מומחה ומחבר ספרים מדעיים חינמיים בתחומי ההשתלות, האסתטיקה והיישור."
        }
        path="/publications/author/mohamed-sawalhi"
      />
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-white pt-32 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: t.breadcrumb_home, href: "/" },
              { label: t.pub_breadcrumb, href: "/publications" },
              { label: DR_SAWALHI.nameAr },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-8 items-center sm:items-start"
          >
            {/* Photo */}
            <div className="shrink-0">
              {DR_SAWALHI.photo ? (
                <img
                  src={DR_SAWALHI.photo}
                  alt={DR_SAWALHI.nameAr}
                  className="w-36 h-36 rounded-full object-cover shadow-xl border-4 border-white"
                  loading="eager"
                  width={144}
                  height={144}
                />
              ) : (
                <div className="w-36 h-36 rounded-full bg-primary/10 flex items-center justify-center border-4 border-white shadow-xl">
                  <User className="w-16 h-16 text-primary/30" />
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="text-sm text-accent font-semibold mb-1">{t.pub_author_label}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                {DR_SAWALHI.nameAr}
              </h1>
              <p className="text-lg text-muted-foreground mt-1 mb-1">{DR_SAWALHI.nameEn}</p>
              <p className="text-muted-foreground">{DR_SAWALHI.titleAr}</p>

              {/* Visit clinic */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-4 text-accent hover:underline font-semibold text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                {lang === "ar" ? "زيارة موقع العيادة" : "בקר באתר המרפאה"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {lang === "ar" ? "نبذة مهنية" : "פרופיל מקצועי"}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p>{DR_SAWALHI.bioAr}</p>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-10 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-primary mb-5">{t.pub_specializations}</h2>
          <div className="flex flex-wrap gap-3">
            {DR_SAWALHI.specializationsAr.map((s) => (
              <span key={s} className="bg-white text-primary border border-primary/10 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">{t.pub_all_publications}</h2>

          {books.length === 0 ? (
            <div className="flex flex-col items-center py-16 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                <User className="w-10 h-10 text-primary/20" />
              </div>
              <p className="text-muted-foreground">{t.pub_coming_soon_desc}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book, i) => (
                <BookCard key={book.id} book={book} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
