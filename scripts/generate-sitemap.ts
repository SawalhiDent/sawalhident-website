/**
 * مولّد Sitemap التلقائي
 * يُشغَّل قبل Vite Build عبر: npm run build:client
 *
 * يقرأ الكتب المنشورة من البيانات، ويولّد client/public/sitemap.xml
 * باستخدام الدومين الحقيقي https://sawalhident.com
 */

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { BOOKS } from "../client/src/data/publications/books";

// ── إعداد المسارات ─────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dirname, "../client/public/sitemap.xml");
const DOMAIN = "https://sawalhident.com";

// نفلتر المنشورة فقط
const publishedBooks = BOOKS.filter((b) => b.status === "published");

// ── السلاقات المحلية للـ SEO ────────────────────────────────
const LOCAL_SLUGS = [
  "dentist-ramallah",
  "dental-clinic-ramallah",
  "dental-implants-ramallah",
  "implant-cost-ramallah",
  "orthodontics-ramallah",
  "teeth-whitening-ramallah",
  "hollywood-smile-ramallah",
  "root-canal-ramallah",
  "gum-treatment-ramallah",
  "emergency-dentist-ramallah",
] as const;

// ── بناء قائمة الـ URLs ──────────────────────────────────────
interface UrlEntry {
  loc: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
  hreflang?: { lang: string; href: string }[];
}

const urls: UrlEntry[] = [
  // الصفحة الرئيسية
  { loc: `${DOMAIN}/`, changefreq: "weekly", priority: "1.0" },

  // الصفحات الثابتة
  { loc: `${DOMAIN}/about`, changefreq: "monthly", priority: "0.8" },
  { loc: `${DOMAIN}/contact`, changefreq: "monthly", priority: "0.9" },

  // الخدمات
  { loc: `${DOMAIN}/services/implants`, changefreq: "monthly", priority: "0.9" },
  { loc: `${DOMAIN}/services/cosmetic`, changefreq: "monthly", priority: "0.9" },
  { loc: `${DOMAIN}/services/orthodontics`, changefreq: "monthly", priority: "0.9" },

  // المدونة
  { loc: `${DOMAIN}/blog`, changefreq: "weekly", priority: "0.7" },
  { loc: `${DOMAIN}/blog/implant-cost-ramallah`, changefreq: "monthly", priority: "0.7", lastmod: "2024-05-15" },
  { loc: `${DOMAIN}/blog/hollywood-smile`, changefreq: "monthly", priority: "0.7", lastmod: "2024-06-02" },
  { loc: `${DOMAIN}/blog/best-dentist-ramallah`, changefreq: "monthly", priority: "0.7", lastmod: "2024-07-10" },
  { loc: `${DOMAIN}/blog/is-implant-painful`, changefreq: "monthly", priority: "0.7", lastmod: "2024-08-05" },
  { loc: `${DOMAIN}/blog/braces-duration`, changefreq: "monthly", priority: "0.7", lastmod: "2024-09-01" },

  // المؤلفات العلمية
  { loc: `${DOMAIN}/publications`, changefreq: "monthly", priority: "0.8" },
  { loc: `${DOMAIN}/publications/books`, changefreq: "monthly", priority: "0.8" },
  { loc: `${DOMAIN}/publications/author/mohamed-sawalhi`, changefreq: "monthly", priority: "0.7" },

  // الكتب المنشورة (ديناميكي من البيانات)
  ...publishedBooks.map((book) => ({
    loc: `${DOMAIN}/publications/books/${book.slug}`,
    changefreq: "monthly",
    priority: "0.9",
    lastmod: book.updatedAt ?? book.publicationDate,
  })),

  // صفحات SEO العربية مع hreflang
  ...LOCAL_SLUGS.map((slug) => ({
    loc: `${DOMAIN}/ar/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.8",
    hreflang: [
      { lang: "ar", href: `${DOMAIN}/ar/${slug}` },
      { lang: "he", href: `${DOMAIN}/he/${slug}` },
    ],
  })),

  // صفحات SEO العبرية مع hreflang
  ...LOCAL_SLUGS.map((slug) => ({
    loc: `${DOMAIN}/he/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.8",
    hreflang: [
      { lang: "ar", href: `${DOMAIN}/ar/${slug}` },
      { lang: "he", href: `${DOMAIN}/he/${slug}` },
    ],
  })),
];

// ── فحص التكرار ─────────────────────────────────────────────
const seen = new Set<string>();
const deduped = urls.filter((u) => {
  if (seen.has(u.loc)) {
    console.warn(`[sitemap] تحذير: رابط مكرر — ${u.loc}`);
    return false;
  }
  seen.add(u.loc);
  return true;
});

// ── توليد XML ───────────────────────────────────────────────
function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const lines: string[] = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
  `        xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
];

for (const u of deduped) {
  lines.push("  <url>");
  lines.push(`    <loc>${escapeXml(u.loc)}</loc>`);
  if (u.hreflang) {
    for (const h of u.hreflang) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${h.lang}" href="${escapeXml(h.href)}"/>`);
    }
  }
  lines.push(`    <changefreq>${u.changefreq}</changefreq>`);
  lines.push(`    <priority>${u.priority}</priority>`);
  if (u.lastmod) lines.push(`    <lastmod>${u.lastmod}</lastmod>`);
  lines.push("  </url>");
}

lines.push("</urlset>");
lines.push("");

const xml = lines.join("\n");
writeFileSync(OUTPUT, xml, "utf-8");
console.log(`[sitemap] ✓ تم توليد sitemap.xml — ${deduped.length} رابط`);
console.log(`[sitemap] المسار: ${OUTPUT}`);
