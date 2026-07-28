import type { Book } from "@/data/publications/types";
import type { Author } from "@/data/publications/types";

export function bookSchema(
  book: Book,
  author: Author | undefined,
  pageUrl: string
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.titleAr,
    alternateName: book.titleEn,
    description: book.shortDescriptionAr,
    inLanguage: book.language || "ar",
    url: pageUrl,
    keywords: book.keywords.join(", "),
  };

  if (book.coverImage) {
    schema.image = book.coverImage;
  }

  if (book.pageCount) {
    schema.numberOfPages = book.pageCount;
  }

  if (book.publicationDate) {
    schema.datePublished = book.publicationDate;
  }

  if (book.updatedAt) {
    schema.dateModified = book.updatedAt;
  }

  if (author) {
    schema.author = {
      "@type": "Person",
      name: author.nameEn,
      alternateName: author.nameAr,
    };
  }

  if (book.pdfUrl) {
    schema.encoding = {
      "@type": "MediaObject",
      encodingFormat: "application/pdf",
      contentUrl: book.pdfUrl,
    };
    schema.offers = {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    };
  }

  return schema;
}

export function personSchema(
  author: Author,
  authorUrl: string
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.nameEn,
    alternateName: author.nameAr,
    jobTitle: author.titleEn,
    url: authorUrl,
    ...(author.photo ? { image: author.photo } : {}),
    ...(author.clinicUrl ? { worksFor: { "@type": "Organization", name: "Sawalhi Dent", url: author.clinicUrl } } : {}),
    knowsAbout: author.specializationsAr,
  };
}
