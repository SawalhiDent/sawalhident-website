import { useEffect, useRef } from "react";
import { SITE_URL } from "@/lib/siteConfig";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  const ref = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    ref.current = script;
    return () => {
      if (ref.current && document.head.contains(ref.current)) {
        document.head.removeChild(ref.current);
      }
    };
  }, [data]);

  return null;
}

export function localBusinessSchema(lang: "ar" | "he") {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Physician"],
    name: lang === "ar" ? "صوالحي دنت – د. محمد صوالحي" : "סוואלחי דנט – ד״ר מוחמד סוואלחי",
    description: lang === "ar"
      ? "عيادة د. محمد صوالحي التخصصية لطب وزراعة الأسنان في رام الله"
      : "מרפאת ד״ר מוחמד סוואלחי לרפואת שיניים והשתלות ברמאללה",
    url: SITE_URL,
    telephone: "+970598703536",
    address: {
      "@type": "PostalAddress",
      addressLocality: lang === "ar" ? "رام الله" : "רמאללה",
      addressCountry: lang === "ar" ? "فلسطين" : "פלסטין",
    },
    openingHours: ["Sa 11:00-21:00", "Mo 11:00-21:00", "Th 11:00-21:00"],
    priceRange: "$$",
    image: "",
    areaServed: {
      "@type": "City",
      name: lang === "ar" ? "رام الله" : "רמאללה",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  datePublished: string;
  url: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished,
    url: opts.url,
    author: { "@type": "Person", name: opts.authorName },
    publisher: {
      "@type": "Organization",
      name: "Sawalhi Dent",
    },
  };
}

export function reviewSchema(reviews: { author: string; text: string; rating: number }[]) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewBody: r.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
    },
    itemReviewed: {
      "@type": "Dentist",
      name: "صوالحي دنت – د. محمد صوالحي",
    },
  }));
}
