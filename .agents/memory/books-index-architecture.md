---
name: Books Index Architecture
description: بنية صفحة فهرس الكتب — المراحل الثلاث، ملفات البيانات، والقرار المعتمد بتوسعة Book Object
---

# Books Index Architecture

## المراحل الثلاث (في BooksIndex.tsx)
- Phase 1 (≤5 كتب): بحث + فلاتر + LibraryCards في تدفق واحد بدون أقسام
- Phase 2 (6–15): "آخر الإصدارات" (FeaturedCards) + أقسام حسب التخصص
- Phase 3 (16+): نفس Phase 2 بكثافة أعلى — threshold يتغير في `getPhase()`

## ملفات البنية التحتية
- `data/publications/categories.ts` — CATEGORY_LABELS, CATS_ORDERED (مشترك بين المكوّنات والبيانات)
- `data/publications/books.ts` — sort utilities جاهزة: `booksSortedByDate`, `booksSortedByUpdated`, `booksBySeries`, `booksByYear`
- `pages/publications/components/LibraryCard.tsx` — LibraryCard (أفقي) + FeaturedCard (عمودي)

## قرار معتمد: Book Object الغني (لم يُنفَّذ بعد)
Book سيُوسَّع ليشمل حقولاً اختيارية (optional) في types.ts:
- `seo`: { canonicalUrl, ogImage, structuredData }
- `relatedArticles`: string[] — slugs للمقالات المرتبطة
- `relatedVideos`: { url, title }[]
- `faqs`: { questionAr, answerAr }[]

**Why:** القرار أُخذ لتجنب إعادة هيكلة المشروع عند بناء المرحلة التالية (مقالات، فيديوهات، SEO متقدم). الحقول optional لا تكسر الكتب الحالية.

**How to apply:** عند إضافة أي من هذه الحقول، يُضاف في types.ts كـ `fieldName?: Type` ثم يُستخدم في BookPage.tsx مباشرة.

## تصميم LibraryCard
- غلاف: w-32 sm:w-40 (14% أكبر من النسخة الأولى)
- وصف: line-clamp-3 + "اقرأ المزيد ←"
- ترتيب الأزرار: "قراءة" primary · PDF icon-only link
- Meta: pageCount + updatedAt (شهر/سنة) + edition/version
- لا badge "مجاني" في البطاقة — "مجاني بالكامل" في Hero فقط
