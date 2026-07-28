import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import { Search, BookOpen, Users, Library, ChevronLeft, X } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/context/LanguageContext";
import { publishedBooks } from "@/data/publications/books";
import type { BookCategory } from "@/data/publications/types";
import { CATEGORY_LABELS, CATS_ORDERED } from "@/data/publications/categories";
import { LibraryCard, FeaturedCard } from "./components/LibraryCard";

type FilterCat = BookCategory | "all";

// ─────────────────────────────────────────────────────────────────────────────
// Smart phase thresholds
// Phase 1 (1–5):   صفحة واحدة مع بحث وفلاتر
// Phase 2 (6–15):  آخر الإصدارات + أقسام حسب التخصص
// Phase 3 (16+):   مكتبة كاملة (نفس بنية الثانية، grid أكثف)
// ─────────────────────────────────────────────────────────────────────────────
const getPhase = (count: number) =>
  count <= 5 ? 1 : count <= 15 ? 2 : 3;

export default function BooksIndex() {
  const { t, lang } = useLanguage();
  const allBooks = useMemo(() => publishedBooks(), []);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterCat>(() => {
    const p = new URLSearchParams(window.location.search).get("cat");
    return (p && ["implantology", "orthodontics", "esthetic-dentistry"].includes(p))
      ? (p as FilterCat)
      : "all";
  });

  const phase = getPhase(allBooks.length);

  // ── Stats ──
  const totalPages = allBooks.reduce((s, b) => s + (b.pageCount ?? 0), 0);
  const specialtyCount = new Set(allBooks.map((b) => b.category)).size;

  // ── Search + filter (Phase 1 & Phase 3 active filter) ──
  const filtered = useMemo(() => {
    let books =
      activeFilter === "all"
        ? allBooks
        : allBooks.filter((b) => b.category === activeFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      books = books.filter(
        (b) =>
          b.titleAr.includes(q) ||
          b.titleEn.toLowerCase().includes(q) ||
          (b.subtitleAr ?? "").includes(q) ||
          b.keywords.some((k) => k.toLowerCase().includes(q)) ||
          CATEGORY_LABELS[b.category].ar.includes(q) ||
          CATEGORY_LABELS[b.category].en.toLowerCase().includes(q),
      );
    }
    return books;
  }, [allBooks, activeFilter, query]);

  // ── Phase 2+: recent 3 & grouped by specialty ──
  const recentBooks = useMemo(
    () =>
      [...allBooks]
        .sort((a, b) => (b.publicationDate ?? "").localeCompare(a.publicationDate ?? ""))
        .slice(0, 3),
    [allBooks],
  );

  const byCategory = useMemo(
    () =>
      CATS_ORDERED.map((cat) => ({
        cat,
        label: CATEGORY_LABELS[cat].ar,
        books: allBooks.filter((b) => b.category === cat),
      })).filter((g) => g.books.length > 0),
    [allBooks],
  );

  // ── Filter tabs (shown in Phase 1 & 3, and as search refinement in Phase 2) ──
  const filterTabs: { value: FilterCat; label: string }[] = [
    { value: "all", label: lang === "ar" ? "الكل" : "הכל" },
    ...CATS_ORDERED.filter((c) => allBooks.some((b) => b.category === c)).map(
      (c) => ({ value: c as FilterCat, label: CATEGORY_LABELS[c].ar }),
    ),
  ];

  const isSearching = query.trim().length > 0;

  return (
    <>
      <SEOHead
        title={
          lang === "ar"
            ? "المؤلفات العلمية — مكتبة رقمية مجانية في طب الأسنان | د. محمد صوالحي"
            : "פרסומים מדעיים — ספרייה דיגיטלית חינמית | ד״ר מוחמד סוואלחי"
        }
        description={
          lang === "ar"
            ? "مكتبة رقمية مجانية في طب الأسنان: زراعة الأسنان، تقويم الأسنان، تجميل الأسنان. كتب وكتيبات علمية من تأليف د. محمد صوالحي للأطباء والطلاب."
            : "ספרייה דיגיטלית חינמית לרפואת שיניים: השתלות, יישור, אסתטיקה. ספרים ממוחמד סוואלחי לרופאים וסטודנטים."
        }
        path="/publications/books"
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — dark primary background
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-primary pt-28 pb-14 relative overflow-hidden">
        {/* subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs — نسخة مخصصة للخلفية الداكنة */}
          <nav className="flex items-center gap-1 text-sm text-white/50 mb-6 flex-wrap">
            <a href="/" className="hover:text-white transition-colors">{t.breadcrumb_home}</a>
            <span className="text-white/30">›</span>
            <a href="/publications" className="hover:text-white transition-colors">{t.pub_breadcrumb}</a>
            <span className="text-white/30">›</span>
            <span className="text-white/80 font-semibold">{t.pub_books_breadcrumb}</span>
          </nav>

          {/* Icon + Title */}
          <div className="flex items-center gap-3 mt-6 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Library className="w-5 h-5 text-white/80" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t.pub_all_books}
            </h1>
          </div>

          {/* SEO-rich subtitle — visible & indexable */}
          <p className="text-white/70 text-base max-w-2xl leading-relaxed mb-8">
            {lang === "ar"
              ? "مجموعة مجانية من الكتب والكتيبات العلمية في زراعة الأسنان، تقويم الأسنان، وتجميل الأسنان — تهدف إلى دعم التعليم الطبي المستمر باللغة العربية."
              : "אוסף חינמי של ספרים וחוברות מדעיות בהשתלות, יישור שיניים ואסתטיקת שיניים — לתמיכה בהשכלה הרפואית הרציפה בערבית."}
          </p>

          {/* Stats */}
          {allBooks.length > 0 && (
            <div className="flex flex-wrap gap-3">
              <StatChip
                value={allBooks.length.toString()}
                label={lang === "ar" ? "كتاب" : "ספרים"}
              />
              {totalPages > 0 && (
                <StatChip
                  value={`${totalPages}+`}
                  label={lang === "ar" ? "صفحة" : "עמודים"}
                />
              )}
              {specialtyCount > 0 && (
                <StatChip
                  value={specialtyCount.toString()}
                  label={lang === "ar" ? "تخصصات" : "תחומים"}
                />
              )}
              <StatChip
                value={lang === "ar" ? "مجاني" : "חינם"}
                label={lang === "ar" ? "بالكامل" : "לגמרי"}
                highlight
              />
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SEARCH + FILTER BAR
      ═══════════════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                lang === "ar"
                  ? "ابحث في الكتب، الكلمات المفتاحية، التخصص…"
                  : "חפש ספרים, מילות מפתח, תחום…"
              }
              className="w-full ps-9 pe-8 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 bg-slate-50 placeholder:text-muted-foreground/60"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute end-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                aria-label="مسح البحث"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter tabs — shown always; more useful in Phase 1 */}
          {filterTabs.length > 1 && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                    activeFilter === tab.value
                      ? "bg-primary text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════════════════════════════ */}
      <main className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* ── Search results overlay (all phases) ── */}
          {isSearching ? (
            <SearchResults books={filtered} query={query} t={t} lang={lang} />

          ) : allBooks.length === 0 ? (
            /* ── Empty library ── */
            <EmptyLibrary t={t} />

          ) : phase === 1 ? (
            /* ════════════════════════════════════════
               PHASE 1: 1–5 books — all in one flow
            ════════════════════════════════════════ */
            <Phase1
              books={filtered}
              activeFilter={activeFilter}
              t={t}
              lang={lang}
            />

          ) : (
            /* ════════════════════════════════════════
               PHASE 2 & 3: 6+ books — sections
            ════════════════════════════════════════ */
            <Phase2
              allBooks={allBooks}
              recentBooks={recentBooks}
              byCategory={byCategory}
              activeFilter={activeFilter}
              phase={phase}
              t={t}
              lang={lang}
            />
          )}
        </div>
      </main>

      {/* ═══════════════════════════════════════════════════════════════
          AUTHOR STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-slate-100 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Users className="w-7 h-7 text-primary/50" />
          </div>
          <div className="flex-1 text-center sm:text-start">
            <p className="text-sm text-muted-foreground mb-1">
              {lang === "ar" ? "جميع الإصدارات من تأليف" : "כל הפרסומים מאת"}
            </p>
            <p className="font-bold text-primary text-lg">
              {lang === "ar" ? "د. محمد صوالحي" : "ד״ר מוחמד סוואלחי"}
            </p>
            <p className="text-sm text-muted-foreground">
              {lang === "ar"
                ? "أخصائي زراعة وتجميل الأسنان — رام الله، فلسطين"
                : "מומחה להשתלות ואסתטיקת שיניים — רמאללה, פלסטין"}
            </p>
          </div>
          <Link
            href="/publications/author/mohamed-sawalhi"
            className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {lang === "ar" ? "تعرف على المؤلف" : "היכר את המחבר"}
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function StatChip({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline gap-1.5 px-4 py-2 rounded-xl text-sm font-bold ${
        highlight
          ? "bg-accent text-white"
          : "bg-white/10 text-white"
      }`}
    >
      <span className="text-lg leading-none">{value}</span>
      <span className={`font-normal text-xs ${highlight ? "text-white/90" : "text-white/60"}`}>
        {label}
      </span>
    </div>
  );
}

/** Phase 1: صفحة واحدة — بحث + فلاتر + بطاقات مكتبية */
function Phase1({
  books,
  activeFilter,
  t,
  lang,
}: {
  books: ReturnType<typeof publishedBooks>;
  activeFilter: string;
  t: Record<string, string>;
  lang: string;
}) {
  if (books.length === 0) {
    return (
      <div className="py-16 text-center text-muted-foreground">
        {lang === "ar" ? "لا توجد كتب تطابق الفلتر المحدد." : "לא נמצאו ספרים תואמים."}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {books.map((book) => (
        <LibraryCard key={book.id} book={book} />
      ))}
    </div>
  );
}

/** Phase 2/3: آخر الإصدارات + أقسام حسب التخصص */
function Phase2({
  allBooks,
  recentBooks,
  byCategory,
  activeFilter,
  phase,
  t,
  lang,
}: {
  allBooks: ReturnType<typeof publishedBooks>;
  recentBooks: ReturnType<typeof publishedBooks>;
  byCategory: { cat: BookCategory; label: string; books: ReturnType<typeof publishedBooks> }[];
  activeFilter: string;
  phase: number;
  t: Record<string, string>;
  lang: string;
}) {
  return (
    <div className="space-y-14">
      {/* آخر الإصدارات */}
      <section>
        <SectionHeader
          title={lang === "ar" ? "آخر الإصدارات" : "פרסומים אחרונים"}
          subtitle={
            lang === "ar"
              ? "أحدث الكتب الصادرة في المكتبة"
              : "הספרים החדשים ביותר בספרייה"
          }
        />
        <div
          className={`grid gap-5 ${
            recentBooks.length === 1
              ? "grid-cols-1 max-w-sm"
              : recentBooks.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {recentBooks.map((book) => (
            <FeaturedCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* أقسام حسب التخصص */}
      {byCategory.map(({ cat, label, books }) => (
        <section key={cat}>
          <SectionHeader title={label} />
          <div className="flex flex-col gap-4">
            {books.map((book) => (
              <LibraryCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/** نتائج البحث */
function SearchResults({
  books,
  query,
  t,
  lang,
}: {
  books: ReturnType<typeof publishedBooks>;
  query: string;
  t: Record<string, string>;
  lang: string;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground mb-5">
        {lang === "ar"
          ? `نتائج البحث عن "${query}" — ${books.length} كتاب`
          : `תוצאות חיפוש עבור "${query}" — ${books.length} ספרים`}
      </p>
      {books.length === 0 ? (
        <div className="py-16 text-center">
          <BookOpen className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
          <p className="text-muted-foreground">
            {lang === "ar" ? "لا توجد نتائج." : "לא נמצאו תוצאות."}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {books.map((book) => (
            <LibraryCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-5 pb-3 border-b border-slate-200">
      <h2 className="text-lg font-bold text-primary">{title}</h2>
      {subtitle && (
        <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
      )}
    </div>
  );
}

function EmptyLibrary({ t }: { t: Record<string, string> }) {
  return (
    <div className="flex flex-col items-center py-24 text-center">
      <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-6">
        <BookOpen className="w-10 h-10 text-primary/20" />
      </div>
      <h2 className="text-xl font-bold text-primary mb-3">{t.pub_coming_soon}</h2>
      <p className="text-muted-foreground max-w-sm">{t.pub_coming_soon_desc}</p>
    </div>
  );
}
