import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, Download, ArrowLeft, User } from "lucide-react";
import { ImplantIcon, OrthodonticsIcon, EstheticIcon } from "./components/DentalIcons";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/lib/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useLanguage } from "@/context/LanguageContext";
import { publishedBooks } from "@/data/publications/books";
import { DR_SAWALHI } from "@/data/publications/author";
import { BookCard } from "./components/BookCard";

export default function PublicationsIndex() {
  const { t, lang } = useLanguage();
  const books = publishedBooks();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: lang === "ar" ? "المؤلفات العلمية – د. محمد صوالحي" : "פרסומים מדעיים – ד״ר מוחמד סוואלחי",
    description:
      lang === "ar"
        ? "كتب ومصادر علمية مجانية في طب الأسنان من تأليف د. محمد صوالحي"
        : "ספרים ומקורות מדעיים חינמיים ברפואת שיניים מאת ד״ר מוחמד סוואלחי",
    url: siteUrl("/publications"),
    author: {
      "@type": "Person",
      name: "Dr. Mohamed Sawalhi",
      url: siteUrl("/publications/author/mohamed-sawalhi"),
    },
  };

  return (
    <>
      <SEOHead
        title={
          lang === "ar"
            ? "المؤلفات العلمية – كتب مجانية في طب الأسنان | د. محمد صوالحي"
            : "פרסומים מדעיים – ספרים חינמיים ברפואת שיניים | ד״ר מוחמד סוואלחי"
        }
        description={
          lang === "ar"
            ? "كتب ومصادر علمية مجانية في مجالات زراعة الأسنان والتقويم والتجميل، من تأليف د. محمد صوالحي من رام الله."
            : "ספרים ומקורות מדעיים חינמיים בתחומי השתלות, יישור ואסתטיקה, מאת ד״ר מוחמד סוואלחי מרמאללה."
        }
        path="/publications"
      />
      <JsonLd data={schemaData} />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 to-white pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsl(var(--accent)/0.15) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: t.breadcrumb_home, href: "/" },
              { label: t.pub_breadcrumb },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <BookOpen className="w-4 h-4" />
              {t.pub_free}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
              {t.pub_title}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">{t.pub_subtitle}</p>
            <p className="text-muted-foreground leading-relaxed">{t.pub_desc}</p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/publications/books"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-accent/30 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                {t.pub_all_books}
              </Link>
              <Link
                href="/publications/author/mohamed-sawalhi"
                className="bg-primary/5 hover:bg-primary/10 text-primary px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                {t.pub_author_page}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Books section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-primary">
              {books.length > 0
                ? (lang === "ar" ? "آخر الإصدارات" : "גרסאות אחרונות")
                : t.pub_all_books}
            </h2>
            {books.length > 0 && (
              <Link href="/publications/books" className="text-accent hover:underline font-semibold text-sm flex items-center gap-1">
                {t.pub_all_books}
                <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              </Link>
            )}
          </div>

          {books.length === 0 ? (
            <EmptyState t={t} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.slice(0, 3).map((book, i) => (
                <BookCard key={book.id} book={book} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About author strip */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {DR_SAWALHI.photo ? (
              <img
                src={DR_SAWALHI.photo}
                alt={DR_SAWALHI.nameAr}
                className="w-24 h-24 rounded-full object-cover shrink-0 shadow-lg"
                loading="lazy"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <User className="w-10 h-10 text-primary/40" />
              </div>
            )}
            <div className="text-center sm:text-start">
              <p className="text-sm text-muted-foreground mb-1">{t.pub_author_label}</p>
              <h3 className="text-xl font-bold text-primary">{DR_SAWALHI.nameAr}</h3>
              <p className="text-muted-foreground text-sm mt-1">{DR_SAWALHI.titleAr}</p>
            </div>
            <div className="sm:me-auto" />
            <Link
              href="/publications/author/mohamed-sawalhi"
              className="bg-white text-primary border border-primary/20 px-5 py-2.5 rounded-full font-semibold hover:border-accent hover:text-accent transition-colors text-sm shrink-0 flex items-center gap-2"
            >
              {t.pub_author_page}
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Coming soon categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-4">{t.pub_categories}</h2>
          <p className="text-muted-foreground mb-8">{t.pub_coming_soon_desc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: t.pub_cat_implantology, Icon: ImplantIcon,       slug: "implantology" },
              { label: t.pub_cat_orthodontics, Icon: OrthodonticsIcon,  slug: "orthodontics" },
              { label: t.pub_cat_esthetic,     Icon: EstheticIcon,      slug: "esthetic-dentistry" },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/publications/books?cat=${cat.slug}`}
                className="p-6 rounded-2xl border border-primary/10 bg-primary/3 hover:border-accent/30 hover:shadow-md transition-all flex flex-col items-center text-center group"
              >
                <cat.Icon size={64} className="text-accent mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{cat.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to clinic */}
      <div className="bg-primary/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-muted-foreground text-sm">{lang === "ar" ? "موقع عيادة د. محمد صوالحي" : "אתר מרפאת ד״ר מוחמד סוואלחי"}</p>
          <Link href="/" className="text-accent hover:underline font-semibold text-sm flex items-center gap-1">
            <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
            {lang === "ar" ? "العودة إلى موقع العيادة" : "חזרה לאתר המרפאה"}
          </Link>
        </div>
      </div>
    </>
  );
}

function EmptyState({ t }: { t: Record<string, string> }) {
  return (
    <div className="col-span-3 flex flex-col items-center py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-6">
        <BookOpen className="w-10 h-10 text-primary/30" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{t.pub_coming_soon}</h3>
      <p className="text-muted-foreground max-w-sm">{t.pub_coming_soon_desc}</p>
      <div className="mt-6">
        <Download className="w-5 h-5 text-accent inline-block me-2" />
        <span className="text-sm text-muted-foreground">{t.pub_no_books}</span>
      </div>
    </div>
  );
}
