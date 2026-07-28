import type { BookCategory } from "./types";

/** ترتيب التخصصات المعتمد في الواجهة */
export const CATS_ORDERED: BookCategory[] = [
  "implantology",
  "orthodontics",
  "esthetic-dentistry",
];

/** تسميات التخصصات — عربي وإنجليزي */
export const CATEGORY_LABELS: Record<BookCategory, { ar: string; en: string }> = {
  implantology:         { ar: "زراعة الأسنان",  en: "Implantology" },
  orthodontics:         { ar: "تقويم الأسنان",  en: "Orthodontics" },
  "esthetic-dentistry": { ar: "تجميل الأسنان",  en: "Esthetic Dentistry" },
};
