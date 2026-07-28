/**
 * BookPage.tsx — صفحة الكتاب الحقيقية (Book Experience Polish)
 * ─────────────────────────────────────────────────────────────────
 * تستخدم التصميم المعتمد من BookPageTemplate.tsx مع ربطه ببيانات
 * حقيقية من publishedBookBySlug().
 *
 * التسلسل:
 *   Hero → Opening + Quote → Info Card → لماذا هذا الكتاب؟ →
 *   ماذا ستتعلم → معاينة → الفهرس → المؤلف → شارك →
 *   أكمل رحلتك → الاستشهاد → الإصدار والتغييرات
 */

import { useState } from "react";
import { Link, useParams } from "wouter";
import {
  Download, BookOpen, CheckCircle, Copy, Check,
  BookMarked, Calendar, Globe, Users, Tag, Clock,
  ChevronLeft, User, ArrowLeft, AlertCircle,
  Facebook, Linkedin, Twitter, MessageCircle, Award,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { useLanguage } from "@/context/LanguageContext";
import { publishedBookBySlug, publishedBooks } from "@/data/publications/books";
import { AUTHORS } from "@/data/publications/author";
import { bookSchema, personSchema } from "@/lib/publicationSchema";
import { siteUrl } from "@/lib/siteConfig";

// ─── Share Button ─────────────────────────────────────────────────
function ShareBtn({
  icon, label, href, bg,
}: {
  icon: React.ReactNode; label: string; href: string; bg: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-85 ${bg}`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────
export default function BookPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);

  const book = publishedBookBySlug(slug ?? "");
  const pageUrl = siteUrl(`/publications/books/${slug}`);

  // ── 404 ──────────────────────────────────────────────────────────
  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-24">
        <AlertCircle className="w-16 h-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold text-primary">{t.not_found_title}</h1>
        <p className="text-muted-foreground">{t.not_found_desc}</p>
        <Link href="/publications/books" className="text-accent hover:underline font-semibold">
          {t.pub_back_to_books}
        </Link>
      </div>
    );
  }

  const author = AUTHORS[book.authorId];
  const allPublished = publishedBooks();
  const related = (book.relatedBookIds ?? [])
    .map((id) => allPublished.find((b) => b.id === id))
    .filter(Boolean) as ReturnType<typeof publishedBooks>;

  const schemaData = [
    bookSchema(book, author, pageUrl),
    ...(author ? [personSchema(author, siteUrl("/publications/author/mohamed-sawalhi"))] : []),
  ];

  // ── Share helpers ─────────────────────────────────────────────────
  const handleCopy = async () => {
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(book.titleAr + " — " + pageUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(book.titleAr)}&url=${encodeURIComponent(pageUrl)}`,
  };

  // ── Citation (APA style) ──────────────────────────────────────────
  const pubYear = book.publicationDate
    ? new Date(book.publicationDate).getFullYear()
    : new Date().getFullYear();
  const citationAPA = `Sawalhi, M. (${pubYear}). ${book.titleAr}${book.subtitleAr ? ": " + book.subtitleAr : ""}${book.version ? " (Version " + book.version + ")" : ""}. Sawalhi Dental Clinic. ${pageUrl}`;

  return (
    <>
      <SEOHead
        title={`${book.titleAr} — إصدار مجاني | د. محمد صوالحي`}
        description={book.shortDescriptionAr}
        path={`/publications/books/${book.slug}`}
        type="book"
      />
      <JsonLd data={schemaData} />

      <div className="min-h-screen bg-background" dir="rtl">

        {/* ══════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════ */}
        <section className="bg-gradient-to-b from-primary/6 to-background pt-24 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-10" aria-label="breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors">{t.breadcrumb_home}</Link>
              <ChevronLeft className="w-3 h-3" />
              <Link href="/publications" className="hover:text-primary transition-colors">{t.pub_breadcrumb}</Link>
              <ChevronLeft className="w-3 h-3" />
              <Link href="/publications/books" className="hover:text-primary transition-colors">{t.pub_books_breadcrumb}</Link>
              <ChevronLeft className="w-3 h-3" />
              <span className="text-primary/70 truncate max-w-[180px]">{book.titleAr}</span>
            </nav>

            {/* Hero layout */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">

              {/* Cover */}
              <div className="flex-shrink-0">
                <div className="relative w-72 sm:w-80 lg:w-96 mx-auto">
                  {/* Shadow */}
                  <div className="absolute -bottom-4 left-8 right-4 h-8 bg-black/20 blur-xl rounded-full" />
                  {/* Book */}
                  <div className="relative rounded-r-lg overflow-hidden shadow-2xl" style={{ aspectRatio: "3/4" }}>
                    {book.coverImage ? (
                      <img
                        src={book.coverImage}
                        alt={`غلاف كتاب ${book.titleAr}`}
                        className="w-full h-full object-cover"
                        width={384}
                        height={512}
                      />
                    ) : (
                      /* CSS Fallback — غلاف بـ CSS إذا لم تتوفر صورة */
                      <div className="w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
                        <div className="h-4 bg-accent flex-shrink-0" />
                        <div className="flex-1 flex flex-col items-center justify-center gap-3 p-5">
                          <BookOpen className="w-12 h-12 text-primary/20" />
                          <p className="text-primary/30 text-sm text-center">{book.titleAr}</p>
                        </div>
                        <div className="h-8 bg-primary/8 flex-shrink-0" />
                      </div>
                    )}
                  </div>
                  {/* Free badge */}
                  <div className="absolute top-3 end-3 z-20 bg-accent text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    إصدار مجاني
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col gap-6 text-center lg:text-start">

                {/* Series badge — bilingual */}
                {book.seriesName && (
                  <div className="flex justify-center lg:justify-start">
                    <span className="inline-flex items-center gap-2 border border-accent/30 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                      <span>سلسلة {book.seriesName}</span>
                      <span className="text-accent/35 select-none">|</span>
                      <span className="tracking-widest uppercase font-medium opacity-75">{book.seriesName}</span>
                    </span>
                  </div>
                )}

                {/* Title block */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-primary leading-tight">
                    {book.titleAr}
                  </h1>
                  <p className="text-base text-muted-foreground/80 mt-1">{book.titleEn}</p>
                  {book.subtitleAr && (
                    <p className="text-accent font-semibold mt-2.5">{book.subtitleAr}</p>
                  )}
                </div>

                {/* Short description */}
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  {book.shortDescriptionAr}
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <a
                    href={book.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent/90 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-accent/20 transition-all hover:shadow-accent/35 hover:-translate-y-px"
                  >
                    <BookOpen className="w-5 h-5" />
                    {t.pub_read_online}
                  </a>
                  <a
                    href={book.pdfUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 text-primary/70 hover:text-primary font-medium text-sm px-5 py-3.5 rounded-xl border border-primary/15 hover:border-primary/30 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    {t.pub_download_free}
                    {book.pdfSizeMB ? ` (${book.pdfSizeMB} MB)` : ""}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            OPENING — فقرة افتتاحية + اقتباس
        ══════════════════════════════════════════════════════ */}
        {(book.openingParagraphAr || book.quoteAr) && (
          <section className="bg-primary/3 border-b border-primary/8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
                  لماذا هذا الكتاب؟
                </p>

                {book.openingParagraphAr && (
                  <p className="text-[17px] text-primary/80 leading-relaxed mb-10">
                    {book.openingParagraphAr}
                  </p>
                )}

                {book.quoteAr && (
                  <blockquote className="relative border-r-4 border-accent bg-white rounded-xl px-7 py-6 shadow-sm">
                    <span
                      className="absolute top-3 start-5 text-6xl text-accent/15 font-serif leading-none select-none pointer-events-none"
                      aria-hidden="true"
                    >
                      "
                    </span>
                    <p className="text-[16px] font-semibold text-primary leading-relaxed relative z-10 pt-3">
                      {book.quoteAr}
                    </p>
                    {author && (
                      <footer className="mt-4 text-sm text-muted-foreground font-medium">
                        — {author.nameAr}
                        {lang === "ar" ? "، من مقدمة الكتاب" : "، from the book's introduction"}
                      </footer>
                    )}
                  </blockquote>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ① بطاقة معلومات الكتاب */}
          <section className="py-12 border-b border-primary/8">
            <div className="bg-white rounded-2xl border border-primary/10 shadow-sm overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-y divide-x-reverse divide-primary/8 sm:divide-y-0 sm:divide-x sm:divide-x-reverse">
                {[
                  { icon: <BookMarked className="w-4 h-4" />, label: t.pub_pages, value: book.pageCount ? `${book.pageCount} صفحة` : "—" },
                  { icon: <Globe className="w-4 h-4" />, label: t.pub_language, value: book.language },
                  { icon: <Tag className="w-4 h-4" />, label: t.pub_specialty, value: lang === "ar" ? "زراعة الأسنان" : "Implantology" },
                  { icon: <Users className="w-4 h-4" />, label: t.pub_target, value: "متخصصون وطلاب" },
                  {
                    icon: <Calendar className="w-4 h-4" />,
                    label: t.pub_published,
                    value: book.publicationDate
                      ? new Intl.DateTimeFormat("ar-EG", { year: "numeric", month: "long" }).format(new Date(book.publicationDate))
                      : "—",
                  },
                  { icon: <Clock className="w-4 h-4" />, label: t.pub_updated, value: book.updatedAt ? new Intl.DateTimeFormat("ar-EG", { year: "numeric", month: "long" }).format(new Date(book.updatedAt)) : "—" },
                  { icon: <BookOpen className="w-4 h-4" />, label: t.pub_edition, value: book.edition ?? "—" },
                  { icon: <span className="text-sm">🆓</span>, label: "السعر", value: "مجاني تماماً" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 py-5 px-4 text-center border-b sm:border-b-0 border-primary/8 last:border-b-0">
                    <span className="text-accent">{item.icon}</span>
                    <span className="text-[11px] text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-bold text-primary leading-snug">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ② لماذا هذا الكتاب — التفصيل الكامل */}
          {book.fullDescriptionAr && (
            <section className="py-16 border-b border-primary/8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-primary mb-6">عن هذا الكتاب</h2>
                <div className="space-y-4">
                  {book.fullDescriptionAr.split("\n\n").map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-[15px]">{para}</p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ③ ماذا ستتعلم */}
          {book.learningObjectivesAr.length > 0 && (
            <section className="py-16 border-b border-primary/8">
              <h2 className="text-2xl font-bold text-primary mb-8">{t.pub_learning}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {book.learningObjectivesAr.map((obj, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-[15px] text-primary/85 leading-snug">{obj}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ④ معاينة من الكتاب */}
          {book.previewImages && book.previewImages.length > 0 && (
            <section className="py-16 border-b border-primary/8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-2">{t.pub_preview}</h2>
                <p className="text-sm text-muted-foreground">
                  {lang === "ar"
                    ? "صفحات مختارة تمثّل أبرز محتويات الكتاب."
                    : "Selected pages representing the book's highlights."}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {book.previewImages.map((img, i) => (
                  <div key={i} className="group rounded-sm shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-slate-200/80" style={{ aspectRatio: "3/4" }}>
                    <img
                      src={img}
                      alt={`${lang === "ar" ? "معاينة" : "Preview"} ${i + 1} — ${book.titleAr}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                {lang === "ar"
                  ? "الكتاب الكامل متاح عند الضغط على «قراءة الكتاب» أو «تحميل PDF»."
                  : "Full book available via Read or Download."}
              </p>
            </section>
          )}

          {/* ⑤ الفهرس */}
          {book.tableOfContents.length > 0 && (
            <section className="py-16 border-b border-primary/8">
              <h2 className="text-2xl font-bold text-primary mb-8">{t.pub_toc}</h2>
              <div className="bg-white rounded-xl border border-primary/10 shadow-sm overflow-hidden">
                {book.tableOfContents.slice(0, tocOpen ? undefined : 6).map((ch, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 px-6 py-4 hover:bg-primary/2 transition-colors ${
                      i < book.tableOfContents.length - 1 ? "border-b border-primary/6" : ""
                    }`}
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-md bg-primary/6 text-primary/50 text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="flex-1 text-[15px] text-primary/85">{ch.title}</span>
                    {ch.titleEn && (
                      <span className="hidden sm:inline text-xs text-muted-foreground/60 italic">{ch.titleEn}</span>
                    )}
                    {ch.page && (
                      <span className="flex-shrink-0 text-xs text-muted-foreground font-mono">ص {ch.page}</span>
                    )}
                  </div>
                ))}
                {book.tableOfContents.length > 6 && (
                  <button
                    onClick={() => setTocOpen(!tocOpen)}
                    className="w-full py-3.5 text-center text-sm text-accent font-semibold hover:bg-accent/4 transition-colors border-t border-primary/6"
                  >
                    {tocOpen
                      ? "عرض أقل"
                      : `عرض باقي الفصول (${book.tableOfContents.length - 6})`}
                  </button>
                )}
              </div>
            </section>
          )}

          {/* ⑥ عن المؤلف */}
          {author && (
            <section className="py-16 border-b border-primary/8">
              <h2 className="text-2xl font-bold text-primary mb-8">{t.pub_about_author}</h2>
              <div className="bg-white rounded-2xl border border-primary/10 shadow-sm p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                  {/* Photo */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-3">
                    <div className="w-28 h-28 rounded-2xl bg-primary/6 border border-primary/12 flex items-center justify-center overflow-hidden">
                      {author.photo ? (
                        <img src={author.photo} alt={author.nameAr} className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-12 h-12 text-primary/20" />
                      )}
                    </div>
                    <Link href="/publications/author/mohamed-sawalhi">
                      <button className="text-xs text-accent font-semibold hover:underline flex items-center gap-1">
                        <BookMarked className="w-3.5 h-3.5" />
                        {t.pub_author_page}
                      </button>
                    </Link>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center sm:text-start">
                    <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">{t.pub_author_label}</p>
                    <h3 className="text-2xl font-extrabold text-primary">{author.nameAr}</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-4">{author.nameEn} · {author.titleAr}</p>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">{author.bioAr}</p>

                    {/* Credentials */}
                    {author.credentialsAr && author.credentialsAr.length > 0 && (
                      <div className="mb-5">
                        <p className="text-xs font-semibold text-primary/50 uppercase tracking-widest mb-2">المؤهلات والشهادات</p>
                        <ul className="space-y-1.5">
                          {author.credentialsAr.map((c, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-primary/75">
                              <Award className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Specializations */}
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {author.specializationsAr.map((s, i) => (
                        <span key={i} className="text-xs bg-primary/6 text-primary/70 border border-primary/12 px-3 py-1 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ⑦ شارك الكتاب */}
          <section className="py-16 border-b border-primary/8">
            <h2 className="text-2xl font-bold text-primary mb-3">{t.pub_share_book}</h2>
            <p className="text-sm text-muted-foreground mb-7">
              {lang === "ar"
                ? "شارك هذا الكتاب مع زملائك — المعرفة للجميع."
                : "Share this book with your colleagues — knowledge is for everyone."}
            </p>
            <div className="flex flex-wrap gap-3">
              <ShareBtn icon={<MessageCircle className="w-4 h-4" />} label="WhatsApp" bg="bg-[#25D366]" href={shareLinks.whatsapp} />
              <ShareBtn icon={<Facebook className="w-4 h-4" />} label="Facebook" bg="bg-[#1877F2]" href={shareLinks.facebook} />
              <ShareBtn icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" bg="bg-[#0A66C2]" href={shareLinks.linkedin} />
              <ShareBtn icon={<Twitter className="w-4 h-4" />} label="X" bg="bg-primary" href={shareLinks.twitter} />
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/6 hover:bg-primary/10 text-primary/80 text-sm font-medium transition-colors border border-primary/12"
              >
                {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                {copied ? t.pub_link_copied : t.pub_copy_link}
              </button>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-8 max-w-lg">{t.pub_legal_note}</p>
          </section>

          {/* ⑧ أكمل رحلتك التعليمية */}
          {related.length > 0 && (
            <section className="py-16 border-b border-primary/8">
              <h2 className="text-2xl font-bold text-primary mb-2">{t.pub_continue_journey}</h2>
              <p className="text-sm text-muted-foreground mb-8">
                {lang === "ar" ? "مؤلفات أخرى للدكتور محمد صوالحي" : "Other publications by Dr. Mohamed Sawalhi"}
              </p>
              <div className="flex flex-col gap-3 mb-8 max-w-xl">
                {related.map((rb, i) => (
                  <Link key={i} href={`/publications/books/${rb.slug}`}>
                    <div className="group flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-white hover:border-accent/25 transition-colors cursor-pointer">
                      <div className="flex-shrink-0 w-10 h-14 rounded bg-gradient-to-b from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center overflow-hidden">
                        {rb.coverImage ? (
                          <img src={rb.coverImage} alt={rb.titleAr} className="w-full h-full object-cover" loading="lazy" />
                        ) : (
                          <BookOpen className="w-4 h-4 text-primary/25" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors">{rb.titleAr}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{rb.titleEn}</p>
                      </div>
                      <ArrowLeft className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent transition-colors flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/publications/books">
                  <button className="inline-flex items-center gap-2 text-sm text-accent font-semibold hover:underline">
                    <BookOpen className="w-4 h-4" />
                    {t.pub_all_books}
                  </button>
                </Link>
                <Link href="/publications/author/mohamed-sawalhi">
                  <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <User className="w-4 h-4" />
                    {t.pub_all_by_author}
                  </button>
                </Link>
              </div>
            </section>
          )}

          {/* ⑨ كيفية الاستشهاد بهذا الكتاب */}
          <section className="py-16 border-b border-primary/8">
            <h2 className="text-2xl font-bold text-primary mb-3">كيفية الاستشهاد بهذا الكتاب</h2>
            <p className="text-sm text-muted-foreground mb-6">
              {lang === "ar"
                ? "إذا استخدمت هذا الكتاب في بحثك أو عملك الأكاديمي، يُرجى الاستشهاد به على النحو التالي:"
                : "If you use this book in your research or academic work, please cite it as follows:"}
            </p>
            <div className="bg-white rounded-xl border border-primary/10 shadow-sm p-6">
              <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-3">APA Style</p>
              <blockquote className="text-[14px] text-primary/80 leading-relaxed font-mono bg-primary/3 rounded-lg px-5 py-4 border-r-2 border-accent/30">
                {citationAPA}
              </blockquote>
              <button
                onClick={() => { navigator.clipboard.writeText(citationAPA); }}
                className="mt-4 inline-flex items-center gap-2 text-xs text-accent font-semibold hover:underline"
              >
                <Copy className="w-3.5 h-3.5" />
                نسخ الاستشهاد
              </button>
            </div>
          </section>

          {/* ⑩ الإصدار والتغييرات */}
          {(book.version || (book.changelog && book.changelog.length > 0)) && (
            <section className="py-16">
              <h2 className="text-2xl font-bold text-primary mb-8">الإصدار والتغييرات</h2>
              <div className="bg-white rounded-xl border border-primary/10 shadow-sm overflow-hidden">
                {/* Current version */}
                {book.version && (
                  <div className="flex items-center gap-4 px-6 py-4 border-b border-primary/6 bg-accent/3">
                    <span className="flex-shrink-0 inline-flex items-center gap-1.5 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      v{book.version}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {lang === "ar" ? "الإصدار الحالي" : "Current Version"}
                    </span>
                  </div>
                )}
                {/* Changelog */}
                {book.changelog && book.changelog.map((entry, i) => (
                  <div key={i} className={`px-6 py-4 ${i < (book.changelog?.length ?? 0) - 1 ? "border-b border-primary/6" : ""}`}>
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 text-xs font-mono text-muted-foreground mt-0.5 w-16">v{entry.version}</span>
                      <div className="flex-1">
                        <p className="text-[14px] text-primary/85">{entry.descriptionAr}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Intl.DateTimeFormat("ar-EG", { year: "numeric", month: "long", day: "numeric" }).format(new Date(entry.date))}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* ══════════════════════════════════════════════════════
            MOBILE STICKY BAR
        ══════════════════════════════════════════════════════ */}
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-primary/10 shadow-xl px-4 py-3">
          <div className="flex gap-3 max-w-lg mx-auto">
            <a
              href={book.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-4 py-3 rounded-xl shadow-md shadow-accent/20 text-sm"
            >
              <BookOpen className="w-4 h-4" />
              {t.pub_read_online}
            </a>
            <a
              href={book.pdfUrl}
              download
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-primary/70 font-medium px-4 py-3 rounded-xl border border-primary/20 text-sm"
            >
              <Download className="w-4 h-4" />
              {t.pub_download_free}
            </a>
          </div>
        </div>

        <div className="h-20 lg:h-0" />
      </div>
    </>
  );
}
