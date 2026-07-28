/**
 * BookPageTemplate.tsx — النسخة الثانية (Book Experience Polish)
 * ─────────────────────────────────────────────────────────────────
 * فلسفة التصميم: المحتوى هو البطل. هدوء، فخامة، مساحة للتنفس.
 * جمهور: أطباء أسنان وطلاب يقضون وقتاً في تصفح المحتوى.
 *
 * قرارات رئيسية:
 * • لا Sidebar — يُضيّق القراءة ويُكرر المعلومات
 * • لا Quick Info Strip ثابت — يُشوّش أثناء التمرير
 * • Hero مختصر: غلاف + عنوان + سطران + زرّان فقط
 * • بطاقة معلومات واحدة بعد Hero مباشرة
 * • Placeholder الغلاف يُحاكي كتاباً حقيقياً (spine + pages effect)
 * • Preview تُحاكي صفحات ورقية لا مجرد مستطيلات رمادية
 * • تسلسل يخدم رحلة القارئ، لا عرض البيانات
 *
 * Route: /publications/template-preview  (مؤقت للمراجعة فقط)
 * ─────────────────────────────────────────────────────────────────
 */

import { useState } from "react";
import { Link } from "wouter";
import {
  Download, BookOpen, CheckCircle, Copy, Check,
  BookMarked, Calendar, Globe, Users, Tag, Clock,
  ChevronLeft, User, ArrowLeft,
  Facebook, Linkedin, Twitter, MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ─── Placeholder Data ─────────────────────────────────────────────
const P = {
  seriesBadge: "Clinical Mastery Series",
  titleAr: "إتقان سجلات التشخيص في زراعة الأسنان",
  titleEn: "Diagnostic Records Mastery in Dental Implantology",
  subtitleAr: "المرجع الشامل للتخطيط الجراحي الرقمي المبني على الأدلة",
  shortDescriptionAr:
    "منهجية متكاملة تأخذك من التاريخ المرضي حتى صورة CBCT وخطة العلاج الجراحي — بأسلوب عملي قابل للتطبيق الفوري في العيادة.",
  openingParagraphAr:
    "يسدّ هذا الكتاب فجوة حقيقية في المراجع العربية المتخصصة: منهجية موحّدة وقابلة للتطبيق الفوري في التشخيص قبل الزراعة، دون الحاجة إلى معدات متخصصة أو بروتوكولات معقّدة. كتبه طبيب يعمل في العيادة يومياً، لأطباء يعملون في العيادة يومياً.",
  quoteAr:
    "الاختلاف بين طبيب وآخر لا يُقاس بعدد الحالات التي أجراها، بل بدقة القرار الذي يتخذه قبل أن يمسك المشرط.",
  whyThisBook: [
    "يسدّ هذا الكتاب فجوة حقيقية في المراجع العربية المتخصصة بتقديم منهجية موحّدة وقابلة للتطبيق الفوري، دون الحاجة إلى معدات متخصصة أو بروتوكولات معقّدة.",
    "ستخرج من هذا الكتاب بأدوات عملية: نماذج توثيق، قوائم مراجعة، وخوارزميات قرار تساعدك على اتخاذ قرارات علاجية واثقة ومبنية على الأدلة.",
  ],
  pageCount: 124,
  language: "الإنجليزية",
  category: "زراعة الأسنان",
  targetAudienceAr: "متخصصون وطلاب دراسات عليا",
  publicationDate: "يناير 2024",
  updatedAt: "يونيو 2024",
  edition: "الإصدار الأول",
  pdfUrl: "#",
  learningObjectivesAr: [
    "فهم منهجية التشخيص الشامل قبل الزراعة",
    "إتقان قراءة صور CBCT وتفسيرها سريرياً",
    "بناء خطة علاجية متكاملة قائمة على الأدلة",
    "تقييم الكثافة العظمية ومعاملها التشخيصي",
    "توثيق السجلات التشخيصية بطريقة احترافية",
    "استخدام النماذج الرقمية في التخطيط الجراحي",
  ],
  tableOfContents: [
    { chapter: 1, titleAr: "مقدمة في التشخيص الرقمي", pages: "1–12" },
    { chapter: 2, titleAr: "السجلات الأساسية والتكميلية", pages: "13–28" },
    { chapter: 3, titleAr: "صورة CBCT: معايير الطلب والتفسير", pages: "29–52" },
    { chapter: 4, titleAr: "تحليل الكثافة العظمية (Bone Mapping)", pages: "53–74" },
    { chapter: 5, titleAr: "خطة العلاج متعددة التخصصات", pages: "75–96" },
    { chapter: 6, titleAr: "التوثيق والملف التشخيصي الرقمي", pages: "97–112" },
    { chapter: 7, titleAr: "حالات سريرية تطبيقية", pages: "113–124" },
  ],
  previewPages: [
    { label: "الغلاف", type: "cover" },
    { label: "مقدمة", type: "text" },
    { label: "Infographic", type: "infographic" },
    { label: "جدول مقارنة", type: "table" },
    { label: "خوارزمية قرار", type: "diagram" },
    { label: "خاتمة", type: "text" },
  ],
  relatedBooks: [
    { titleAr: "فلسفة تصميم الرفرف الجراحي", titleEn: "Flap Design Philosophy", slug: "#" },
    { titleAr: "فلسفة الخياطة الجراحية", titleEn: "Suturing Philosophy", slug: "#" },
  ],
};

const AUTHOR = {
  nameAr: "د. محمد صوالحي",
  nameEn: "Dr. Mohamed Sawalhi",
  titleAr: "طبيب أسنان مختص — رام الله",
  bioAr:
    "طبيب أسنان مختص بخبرة تمتد لسنوات في مجالات زراعة الأسنان والتجميل والتقويم. يُقدّم عيادته في رام الله خدمات أسنان متكاملة بأحدث الأجهزة الرقمية. وانطلاقاً من اهتمامه بالتعليم الطبي المستمر، يُصدر مؤلفات علمية مجانية لدعم أطباء وطلاب طب الأسنان.",
  authorPage: "/publications/author/mohamed-sawalhi",
  specializationsAr: ["زراعة الأسنان", "تجميل الأسنان", "تقويم الأسنان"],
};

// ─── Book Cover Mockup ────────────────────────────────────────────
/**
 * يُحاكي شكل كتاب حقيقي بـ CSS فقط — spine + cover + pages edge effect.
 * يُستبدل بصورة الغلاف الحقيقية عند رفعها.
 */
function BookCoverMockup({ size = "lg" }: { size?: "lg" | "sm" }) {
  const isLg = size === "lg";
  return (
    <div className={`relative ${isLg ? "w-72 sm:w-84 lg:w-96" : "w-28"} mx-auto`}>
      {/* Shadow beneath the book */}
      <div className="absolute -bottom-4 left-8 right-4 h-8 bg-black/20 blur-xl rounded-full" />

      {/* Book body */}
      <div
        className="relative rounded-r-lg overflow-hidden shadow-2xl"
        style={{ aspectRatio: "3/4" }}
      >
        {/* Spine */}
        <div className="absolute start-0 top-0 w-7 h-full bg-gradient-to-b from-primary via-primary/90 to-primary/80 z-10 flex items-center justify-center">
          <div
            className="text-white/40 font-bold tracking-widest uppercase"
            style={{ fontSize: "7px", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Sawalhi Dent
          </div>
        </div>

        {/* Cover face */}
        <div className="absolute start-7 top-0 end-0 bottom-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
          {/* Top accent stripe */}
          <div className="h-4 bg-accent flex-shrink-0" />

          {/* Cover content area */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3 p-5">
            {/* Logo / publisher mark placeholder */}
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
              <BookOpen className={`${isLg ? "w-5 h-5" : "w-4 h-4"} text-primary/30`} />
            </div>

            {/* Title lines placeholder */}
            <div className="w-full flex flex-col gap-1.5 items-center">
              <div className="h-2 bg-primary/15 rounded-full w-4/5" />
              <div className="h-2 bg-primary/10 rounded-full w-3/5" />
            </div>

            {/* Subtitle area */}
            <div className="w-full flex flex-col gap-1 items-center mt-2">
              <div className="h-1.5 bg-primary/8 rounded-full w-full" />
              <div className="h-1.5 bg-primary/6 rounded-full w-5/6" />
            </div>

            {isLg && (
              <p className="text-primary/25 text-[10px] text-center mt-3 font-medium">
                صورة الغلاف
              </p>
            )}
          </div>

          {/* Author stripe */}
          <div className="h-8 bg-primary/8 flex-shrink-0 flex items-center px-4">
            <div className="h-1.5 w-20 bg-primary/20 rounded-full" />
          </div>
        </div>

        {/* Right edge — pages effect */}
        <div className="absolute end-0 top-0 w-2 h-full flex flex-col justify-center gap-px px-px">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="h-px bg-slate-300/60 w-full" />
          ))}
        </div>
      </div>

      {/* Free badge */}
      <div className="absolute top-3 end-3 z-20 bg-accent text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
        إصدار مجاني
      </div>
    </div>
  );
}

// ─── Book Page Preview Card ───────────────────────────────────────
/**
 * تُحاكي صفحة كتاب ورقية — أبيض نظيف مع خطوط نصية وعناوين.
 */
function BookPageCard({ page }: { page: typeof P.previewPages[0] }) {
  return (
    <div className="group bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-slate-200/80 overflow-hidden" style={{ aspectRatio: "3/4" }}>
      {/* Page header area */}
      <div className="h-5 bg-primary/4 border-b border-slate-100 flex items-center px-2.5 gap-1.5">
        <div className="w-1 h-2.5 bg-accent/40 rounded-sm flex-shrink-0" />
        <div className="h-1.5 bg-slate-200 rounded-full flex-1" />
      </div>

      {/* Page content simulation */}
      <div className="p-3 flex flex-col gap-2 flex-1 h-full">
        {page.type === "cover" && (
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <div className="w-6 h-6 rounded bg-accent/15 flex items-center justify-center">
              <BookOpen className="w-3 h-3 text-accent/50" />
            </div>
            <div className="w-3/4 h-1.5 bg-primary/20 rounded-full" />
            <div className="w-1/2 h-1 bg-primary/12 rounded-full" />
          </div>
        )}
        {page.type === "text" && (
          <div className="flex flex-col gap-1.5 pt-1">
            <div className="h-2 bg-primary/25 rounded-full w-3/5 mb-1" />
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={`h-1 rounded-full bg-slate-200 ${i === 3 ? "w-2/3" : "w-full"}`} />
            ))}
            <div className="mt-2 h-2 bg-primary/20 rounded-full w-2/5" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={`h-1 rounded-full bg-slate-200 ${i === 4 ? "w-4/5" : "w-full"}`} />
            ))}
          </div>
        )}
        {page.type === "infographic" && (
          <div className="flex flex-col gap-2 pt-1">
            <div className="h-2 bg-primary/25 rounded-full w-4/5" />
            <div className="grid grid-cols-2 gap-1.5 mt-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded bg-accent/8 border border-accent/15 p-1.5 flex flex-col gap-1">
                  <div className="w-3 h-3 rounded-sm bg-accent/20" />
                  <div className="h-1 bg-slate-200 rounded-full w-full" />
                  <div className="h-1 bg-slate-200 rounded-full w-2/3" />
                </div>
              ))}
            </div>
          </div>
        )}
        {page.type === "table" && (
          <div className="flex flex-col gap-1 pt-1">
            <div className="h-2 bg-primary/25 rounded-full w-3/5 mb-1" />
            <div className="h-3 bg-primary/8 rounded flex items-center px-1 gap-1">
              <div className="h-1 bg-primary/20 rounded-full flex-1" />
              <div className="h-1 bg-primary/20 rounded-full flex-1" />
              <div className="h-1 bg-primary/20 rounded-full flex-1" />
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-1">
                <div className="h-2 bg-slate-100 rounded flex-1" />
                <div className="h-2 bg-slate-100 rounded flex-1" />
                <div className="h-2 bg-slate-100 rounded flex-1" />
              </div>
            ))}
          </div>
        )}
        {page.type === "diagram" && (
          <div className="flex flex-col items-center gap-2 pt-1">
            <div className="h-2 bg-primary/25 rounded-full w-4/5" />
            <div className="w-10 h-10 rounded-full border-2 border-accent/30 flex items-center justify-center mt-1">
              <div className="w-5 h-5 rounded-full bg-accent/15" />
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg border border-primary/15 bg-primary/4" />
              <div className="w-8 h-8 rounded-lg border border-primary/15 bg-primary/4" />
            </div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-1 bg-slate-200 rounded-full w-full" />
            ))}
          </div>
        )}

        {/* Page label */}
        <div className="mt-auto pt-1 border-t border-slate-100">
          <p className="text-[9px] text-slate-400 font-medium">{page.label}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Share Button ─────────────────────────────────────────────────
function ShareBtn({ icon, label, href, bg }: { icon: React.ReactNode; label: string; href: string; bg: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-85 ${bg}`}>
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

// ─── Main Template ─────────────────────────────────────────────────
export default function BookPageTemplate() {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(P.titleAr + " — " + pageUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(P.titleAr)}&url=${encodeURIComponent(pageUrl)}`,
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">

      {/* ══════════════════════════════════════════════════════
          HERO — مختصر، هادئ، واضح
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
            <span className="text-primary/70 truncate max-w-[180px]">{P.titleAr}</span>
          </nav>

          {/* Hero layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">

            {/* Cover — أكبر بنسبة 25–30% من النسخة السابقة */}
            <div className="flex-shrink-0">
              <BookCoverMockup size="lg" />
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-start">

              {/* Series badge — bilingual */}
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 border border-accent/30 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                  <span>سلسلة Clinical Mastery</span>
                  <span className="text-accent/35 select-none">|</span>
                  <span className="tracking-widest uppercase font-medium opacity-75">Clinical Mastery Series</span>
                </span>
              </div>

              {/* Title block */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-primary leading-tight">
                  {P.titleAr}
                </h1>
                <p className="text-base text-muted-foreground/80 mt-1">{P.titleEn}</p>
                <p className="text-accent font-semibold mt-2.5">{P.subtitleAr}</p>
              </div>

              {/* Short description — سطران فقط */}
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                {P.shortDescriptionAr}
              </p>

              {/* CTA buttons — تدرج بصري واضح */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                {/* Primary — بارز جداً */}
                <a href={P.pdfUrl}
                  className="inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent/90 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-accent/20 transition-all hover:shadow-accent/35 hover:-translate-y-px">
                  <BookOpen className="w-5 h-5" />
                  {t.pub_read_online}
                </a>
                {/* Secondary — خفيف */}
                <a href={P.pdfUrl} download
                  className="inline-flex items-center justify-center gap-2 text-primary/70 hover:text-primary font-medium text-sm px-5 py-3.5 rounded-xl border border-primary/15 hover:border-primary/30 transition-all">
                  <Download className="w-4 h-4" />
                  {t.pub_download_free}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OPENING — فقرة افتتاحية + اقتباس
          مباشرة بعد Hero، قبل أي بيانات — تُقنع القارئ بالقيمة
      ══════════════════════════════════════════════════════ */}
      <section className="bg-primary/3 border-b border-primary/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-2xl">
            {/* Section label */}
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">لماذا هذا الكتاب؟</p>

            {/* Opening paragraph */}
            <p className="text-[17px] text-primary/80 leading-relaxed mb-10">
              {P.openingParagraphAr}
            </p>

            {/* Quote Box */}
            <blockquote className="relative border-r-4 border-accent bg-white rounded-xl px-7 py-6 shadow-sm">
              {/* Decorative quote mark */}
              <span
                className="absolute top-3 start-5 text-6xl text-accent/15 font-serif leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </span>
              <p className="text-[16px] font-semibold text-primary leading-relaxed relative z-10 pt-3">
                {P.quoteAr}
              </p>
              <footer className="mt-4 text-sm text-muted-foreground font-medium">
                — {AUTHOR.nameAr}، من مقدمة الكتاب
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MAIN CONTENT — تسلسل يخدم القارئ
      ══════════════════════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ① بطاقة معلومات الكتاب — مكان واحد فقط */}
        <section className="py-12 border-b border-primary/8">
          <div className="bg-white rounded-2xl border border-primary/10 shadow-sm overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y divide-x-reverse divide-primary/8 sm:divide-y-0 sm:divide-x sm:divide-x-reverse">
              {[
                { icon: <BookMarked className="w-4 h-4" />, label: t.pub_pages, value: `${P.pageCount} صفحة` },
                { icon: <Globe className="w-4 h-4" />, label: t.pub_language, value: P.language },
                { icon: <Tag className="w-4 h-4" />, label: t.pub_specialty, value: P.category },
                { icon: <Users className="w-4 h-4" />, label: t.pub_target, value: P.targetAudienceAr },
                { icon: <Calendar className="w-4 h-4" />, label: t.pub_published, value: P.publicationDate },
                { icon: <Clock className="w-4 h-4" />, label: t.pub_updated, value: P.updatedAt },
                { icon: <BookOpen className="w-4 h-4" />, label: t.pub_edition, value: P.edition },
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

        {/* ② لماذا هذا الكتاب */}
        <section className="py-16 border-b border-primary/8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-primary mb-6">لماذا هذا الكتاب؟</h2>
            <div className="space-y-4">
              {P.whyThisBook.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-[15px]">{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ③ ماذا ستتعلم */}
        <section className="py-16 border-b border-primary/8">
          <h2 className="text-2xl font-bold text-primary mb-8">{t.pub_learning}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {P.learningObjectivesAr.map((obj, i) => (
              <div key={i} className="flex items-start gap-3.5">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-[15px] text-primary/85 leading-snug">{obj}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ④ معاينة من الكتاب */}
        <section className="py-16 border-b border-primary/8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">{t.pub_preview}</h2>
            <p className="text-sm text-muted-foreground">
              {lang === "ar"
                ? "صفحات مختارة تمثّل أبرز محتويات الكتاب — اضغط للتكبير."
                : "Selected pages representing the book's highlights."}
            </p>
          </div>
          {/* Grid يحاكي رف كتب أو معرض صفحات */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
            {P.previewPages.map((page, i) => (
              <BookPageCard key={i} page={page} />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            {lang === "ar"
              ? "الكتاب الكامل متاح عند الضغط على \"قراءة الكتاب\" أو \"تحميل PDF\"."
              : "Full book available via Read or Download."}
          </p>
        </section>

        {/* ⑤ الفهرس */}
        <section className="py-16 border-b border-primary/8">
          <h2 className="text-2xl font-bold text-primary mb-8">{t.pub_toc}</h2>
          <div className="bg-white rounded-xl border border-primary/10 shadow-sm overflow-hidden">
            {P.tableOfContents.slice(0, tocOpen ? undefined : 4).map((ch, i) => (
              <div key={i}
                className={`flex items-center gap-4 px-6 py-4 hover:bg-primary/2 transition-colors ${
                  i < P.tableOfContents.length - 1 ? "border-b border-primary/6" : ""
                }`}>
                <span className="flex-shrink-0 w-7 h-7 rounded-md bg-primary/6 text-primary/50 text-sm font-bold flex items-center justify-center">
                  {ch.chapter}
                </span>
                <span className="flex-1 text-[15px] text-primary/85">{ch.titleAr}</span>
                <span className="flex-shrink-0 text-xs text-muted-foreground font-mono">{ch.pages}</span>
              </div>
            ))}
            {P.tableOfContents.length > 4 && (
              <button onClick={() => setTocOpen(!tocOpen)}
                className="w-full py-3.5 text-center text-sm text-accent font-semibold hover:bg-accent/4 transition-colors border-t border-primary/6">
                {tocOpen ? "عرض أقل" : `عرض باقي الفصول (${P.tableOfContents.length - 4})`}
              </button>
            )}
          </div>
        </section>

        {/* ⑥ عن المؤلف — مساحة أكبر وتصميم أوضح */}
        <section className="py-16 border-b border-primary/8">
          <h2 className="text-2xl font-bold text-primary mb-8">{t.pub_about_author}</h2>

          <div className="bg-white rounded-2xl border border-primary/10 shadow-sm p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              {/* Photo — larger placeholder */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="w-28 h-28 rounded-2xl bg-primary/6 border border-primary/12 flex items-center justify-center">
                  <User className="w-12 h-12 text-primary/20" />
                </div>
                <Link href={AUTHOR.authorPage}>
                  <button className="text-xs text-accent font-semibold hover:underline flex items-center gap-1">
                    <BookMarked className="w-3.5 h-3.5" />
                    {t.pub_author_page}
                  </button>
                </Link>
              </div>

              {/* Author info */}
              <div className="flex-1 text-center sm:text-start">
                <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-2">{t.pub_author_label}</p>
                <h3 className="text-2xl font-extrabold text-primary">{AUTHOR.nameAr}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-4">{AUTHOR.nameEn} · {AUTHOR.titleAr}</p>

                <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">{AUTHOR.bioAr}</p>

                {/* Specializations */}
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {AUTHOR.specializationsAr.map((s, i) => (
                    <span key={i} className="text-xs bg-primary/6 text-primary/70 border border-primary/12 px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ⑦ شارك الكتاب */}
        <section className="py-16 border-b border-primary/8">
          <h2 className="text-2xl font-bold text-primary mb-3">{t.pub_share_book}</h2>
          <p className="text-sm text-muted-foreground mb-7">
            {lang === "ar"
              ? "شارك هذا الكتاب مع زملائك — المعرفة للجميع."
              : "Share this book with your colleagues."}
          </p>
          <div className="flex flex-wrap gap-3">
            <ShareBtn icon={<MessageCircle className="w-4 h-4" />} label="WhatsApp" bg="bg-[#25D366]" href={shareLinks.whatsapp} />
            <ShareBtn icon={<Facebook className="w-4 h-4" />} label="Facebook" bg="bg-[#1877F2]" href={shareLinks.facebook} />
            <ShareBtn icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" bg="bg-[#0A66C2]" href={shareLinks.linkedin} />
            <ShareBtn icon={<Twitter className="w-4 h-4" />} label="X" bg="bg-primary" href={shareLinks.twitter} />
            <button onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/6 hover:bg-primary/10 text-primary/80 text-sm font-medium transition-colors border border-primary/12">
              {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
              {copied ? t.pub_link_copied : t.pub_copy_link}
            </button>
          </div>

          {/* Legal */}
          <p className="text-xs text-muted-foreground/60 mt-8 max-w-lg">{t.pub_legal_note}</p>
        </section>

        {/* ⑧ أكمل رحلتك التعليمية — خفيف بصرياً */}
        <section className="py-16">
          <h2 className="text-2xl font-bold text-primary mb-2">{t.pub_continue_journey}</h2>
          <p className="text-sm text-muted-foreground mb-8">
            {lang === "ar" ? "مؤلفات أخرى للدكتور محمد صوالحي" : "Other publications by Dr. Mohamed Sawalhi"}
          </p>

          <div className="flex flex-col gap-3 mb-8 max-w-xl">
            {P.relatedBooks.map((book, i) => (
              <Link key={i} href={book.slug}>
                <div className="group flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-white hover:border-accent/25 transition-colors cursor-pointer">
                  {/* Small cover */}
                  <div className="flex-shrink-0 w-10 h-14 rounded bg-gradient-to-b from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary/25" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-primary group-hover:text-accent transition-colors">{book.titleAr}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{book.titleEn}</p>
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
            <Link href={AUTHOR.authorPage}>
              <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <User className="w-4 h-4" />
                {t.pub_all_by_author}
              </button>
            </Link>
          </div>
        </section>

      </div>

      {/* ══════════════════════════════════════════════════════
          MOBILE STICKY BAR — هاتف فقط
      ══════════════════════════════════════════════════════ */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-primary/10 shadow-xl px-4 py-3">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a href={P.pdfUrl}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-4 py-3 rounded-xl shadow-md shadow-accent/20 text-sm">
            <BookOpen className="w-4 h-4" />
            {t.pub_read_online}
          </a>
          <a href={P.pdfUrl} download
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-primary/70 font-medium px-4 py-3 rounded-xl border border-primary/20 text-sm">
            <Download className="w-4 h-4" />
            {t.pub_download_free}
          </a>
        </div>
      </div>

      <div className="h-20 lg:h-0" />
    </div>
  );
}
