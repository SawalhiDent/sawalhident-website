import { Link } from "wouter";
import { BookOpen, Download, FileText, Clock } from "lucide-react";
import type { Book } from "@/data/publications/types";
import { useLanguage } from "@/context/LanguageContext";
import { CATEGORY_LABELS } from "@/data/publications/categories";

const MONTHS_AR = [
  "يناير","فبراير","مارس","أبريل","مايو","يونيو",
  "يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر",
];

/** "2026-06-30" → "يونيو 2026" */
function fmtMonthYear(iso: string): string {
  const [year, month] = iso.split("-");
  const m = parseInt(month, 10) - 1;
  return `${MONTHS_AR[m] ?? ""} ${year}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// LibraryCard — بطاقة مكتبية أفقية (المرحلة الأولى)
// ─────────────────────────────────────────────────────────────────────────────
export function LibraryCard({ book }: { book: Book }) {
  const { t } = useLanguage();
  const catLabel = CATEGORY_LABELS[book.category].ar;
  // تسمية الإصدار: "الإصدار الأول" أو "v1.0" — تُعطي طابعاً علمياً بدلاً من "مجاني"
  const editionLabel = book.edition ?? (book.version ? `v${book.version}` : null);

  return (
    <div className="group bg-white border border-slate-200 rounded-xl hover:border-primary/25 hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="flex">

        {/* ── Cover — تكبير ~10%: w-32 sm:w-40 ── */}
        <Link
          href={`/publications/books/${book.slug}`}
          className="shrink-0 w-32 sm:w-40 bg-primary/5"
          aria-label={book.titleAr}
        >
          {book.coverImage ? (
            <img
              src={book.coverImage}
              alt={book.titleAr}
              loading="lazy"
              className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
              style={{ minHeight: 156 }}
              width={160}
              height={213}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ minHeight: 156 }}>
              <BookOpen className="w-10 h-10 text-primary/20" />
            </div>
          )}
        </Link>

        {/* ── Content ── */}
        <div className="flex flex-col flex-1 p-4 sm:p-5 min-w-0">

          {/* Category + series */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs font-semibold text-accent tracking-wide uppercase">
              {catLabel}
            </span>
            {book.seriesName && (
              <span className="text-xs text-muted-foreground">· {book.seriesName}</span>
            )}
          </div>

          {/* Title */}
          <Link href={`/publications/books/${book.slug}`}>
            <h3 className="font-bold text-primary text-base sm:text-lg leading-snug mb-1 group-hover:text-accent transition-colors line-clamp-2">
              {book.titleAr}
            </h3>
          </Link>

          {/* Subtitle */}
          {book.subtitleAr && (
            <p className="text-xs sm:text-sm text-muted-foreground mb-2 line-clamp-1">
              {book.subtitleAr}
            </p>
          )}

          {/* Description — 3 أسطر مع "اقرأ المزيد" */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {book.shortDescriptionAr}
            </p>
            <Link
              href={`/publications/books/${book.slug}`}
              className="text-xs text-accent hover:underline mt-0.5 inline-block"
            >
              {t.pub_read_more ?? "اقرأ المزيد ←"}
            </Link>
          </div>

          {/* ── Meta row — نظيف وبدون تكرار ── */}
          <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground flex-wrap">
            {book.pageCount && (
              <span className="flex items-center gap-1">
                <FileText className="w-3 h-3 shrink-0" />
                {book.pageCount} {t.pub_pages}
              </span>
            )}
            {book.updatedAt && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 shrink-0" />
                {fmtMonthYear(book.updatedAt)}
              </span>
            )}
            {editionLabel && (
              <span className="text-slate-400 font-medium">{editionLabel}</span>
            )}
          </div>

          {/* ── Actions — "قراءة" هو الفعل الأساسي، PDF أخف وضوحاً ── */}
          <div className="flex items-center gap-4 mt-3">
            <Link
              href={`/publications/books/${book.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary/90 px-3.5 py-1.5 rounded-lg transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              {t.pub_read ?? "قراءة"}
            </Link>
            {book.pdfUrl && (
              <a
                href={book.pdfUrl}
                download
                title={book.pdfSizeMB ? `تحميل PDF · ${book.pdfSizeMB} MB` : "تحميل PDF"}
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                PDF
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FeaturedCard — بطاقة مميزة عمودية (المرحلة الثانية: "آخر الإصدارات")
// ─────────────────────────────────────────────────────────────────────────────
export function FeaturedCard({ book }: { book: Book }) {
  const { t } = useLanguage();
  const catLabel = CATEGORY_LABELS[book.category].ar;
  const editionLabel = book.edition ?? (book.version ? `v${book.version}` : null);

  return (
    <div className="group bg-white border border-slate-200 rounded-2xl hover:border-primary/25 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col">
      {/* Cover */}
      <Link
        href={`/publications/books/${book.slug}`}
        className="block bg-primary/5 overflow-hidden"
        style={{ aspectRatio: "16/9", maxHeight: 200 }}
      >
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={book.titleAr}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookOpen className="w-16 h-16 text-primary/20" />
          </div>
        )}
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-semibold text-accent tracking-wide uppercase mb-2">
          {catLabel}
        </span>
        <Link href={`/publications/books/${book.slug}`}>
          <h3 className="font-bold text-primary text-lg leading-snug mb-1 group-hover:text-accent transition-colors line-clamp-2">
            {book.titleAr}
          </h3>
        </Link>
        {book.subtitleAr && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{book.subtitleAr}</p>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {book.shortDescriptionAr}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {book.pageCount && (
              <span className="flex items-center gap-1">
                <FileText className="w-3 h-3" />
                {book.pageCount} {t.pub_pages}
              </span>
            )}
            {editionLabel && <span className="text-slate-400">{editionLabel}</span>}
          </div>
          <Link
            href={`/publications/books/${book.slug}`}
            className="text-xs font-semibold text-accent hover:underline"
          >
            {t.pub_read_more ?? "اقرأ الكتاب ←"}
          </Link>
        </div>
      </div>
    </div>
  );
}
