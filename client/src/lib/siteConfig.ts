/**
 * مصدر مركزي للدومين — يُستخدم في SEO و Schema و Canonical URLs
 *
 * في بيئة الـ Build (production): يقرأ VITE_SITE_URL من .env.production
 * كـ fallback ثابت: https://sawalhident.com
 *
 * هذا المتغير ليس Secret — يمكن وضعه في .env.production أو كمتغير عادي في CI.
 */
export const SITE_URL: string =
  (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://sawalhident.com";

/**
 * يبني رابطاً مطلقاً آمناً من مسار نسبي.
 *
 * - يمنع الشرطتين المتتاليتين //
 * - يضمن وجود / في بداية المسار
 * - لا يكرر الدومين إذا أُعطي رابط كامل بالخطأ
 *
 * @example
 *   siteUrl("/blog/article")  // "https://sawalhident.com/blog/article"
 *   siteUrl("contact")        // "https://sawalhident.com/contact"
 */
export function siteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path; // رابط كامل — لا تعديل
  }
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
