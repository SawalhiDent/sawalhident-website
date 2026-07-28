export type BookCategory = 'implantology' | 'orthodontics' | 'esthetic-dentistry';
export type BookStatus = 'published' | 'draft' | 'coming-soon';

export interface TocEntry {
  title: string;
  titleEn?: string;
  page?: number;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  descriptionAr: string;
}

export interface Book {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  subtitleAr?: string;
  subtitleEn?: string;
  seriesName?: string;               // اسم السلسلة (اختياري)
  shortDescriptionAr: string;
  openingParagraphAr?: string;       // فقرة افتتاحية تظهر بعد Hero مباشرة
  quoteAr?: string;                  // اقتباس مميز من الكتاب لـ Quote Box
  fullDescriptionAr: string;
  coverImage: string;                // /publications/covers/ or full URL
  pdfUrl: string;                    // /publications/pdfs/ or full URL
  pdfSizeMB?: number;
  previewImages?: string[];
  authorId: string;
  category: BookCategory;
  language: string;
  pageCount?: number;
  publicationDate?: string;          // ISO date string
  edition?: string;
  version?: string;                  // e.g. "1.0"
  changelog?: ChangelogEntry[];
  targetAudienceAr: string;
  learningObjectivesAr: string[];
  tableOfContents: TocEntry[];
  keywords: string[];
  relatedBookIds?: string[];
  status: BookStatus;
  updatedAt: string;                 // ISO date string
}

export interface Author {
  id: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  bioAr: string;
  photo: string;
  specializationsAr: string[];
  credentialsAr?: string[];          // مؤهلات وشهادات
  clinicUrl?: string;
}
