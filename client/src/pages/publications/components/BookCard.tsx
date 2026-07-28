import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, Download, FileText } from "lucide-react";
import type { Book } from "@/data/publications/types";
import { useLanguage } from "@/context/LanguageContext";

const CATEGORY_LABELS: Record<Book["category"], { ar: string; he: string }> = {
  implantology: { ar: "زراعة الأسنان", he: "השתלות שיניים" },
  orthodontics: { ar: "تقويم الأسنان", he: "יישור שיניים" },
  "esthetic-dentistry": { ar: "تجميل الأسنان", he: "אסתטיקת שיניים" },
};

interface BookCardProps {
  book: Book;
  index?: number;
}

export function BookCard({ book, index = 0 }: BookCardProps) {
  const { t, lang } = useLanguage();
  const catLabel = CATEGORY_LABELS[book.category]?.[lang] ?? book.category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/publications/books/${book.slug}`} className="group block h-full">
        <div className="h-full bg-white rounded-2xl border border-primary/10 shadow-sm hover:shadow-md hover:border-accent/30 transition-all overflow-hidden flex flex-col">
          {/* Cover */}
          <div className="relative bg-primary/5 flex items-center justify-center" style={{ aspectRatio: "3/4", maxHeight: 260 }}>
            {book.coverImage ? (
              <img
                src={book.coverImage}
                alt={book.titleAr}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                width={300}
                height={400}
              />
            ) : (
              <div className="flex flex-col items-center gap-3 p-8 text-center">
                <BookOpen className="w-16 h-16 text-primary/20" />
                <span className="text-xs text-muted-foreground font-medium">{book.titleAr}</span>
              </div>
            )}
            {/* Category badge */}
            <span className="absolute top-3 start-3 bg-white/90 text-primary px-2 py-1 rounded-full text-xs font-bold shadow">
              {catLabel}
            </span>
            {/* Free badge */}
            <span className="absolute top-3 end-3 bg-accent text-white px-2 py-1 rounded-full text-xs font-bold shadow">
              {t.pub_free}
            </span>
          </div>

          {/* Body */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-bold text-primary text-lg leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
              {book.titleAr}
            </h3>
            {book.subtitleAr && (
              <p className="text-sm text-muted-foreground mb-2">{book.subtitleAr}</p>
            )}
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
              {book.shortDescriptionAr}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground flex-wrap">
              {book.pageCount && (
                <span className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  {book.pageCount} {t.pub_pages}
                </span>
              )}
              {book.language && <span>{book.language}</span>}
            </div>

            {/* CTA */}
            <div className="mt-4 flex items-center gap-2 text-accent font-semibold text-sm">
              <Download className="w-4 h-4" />
              {t.pub_download_free}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
