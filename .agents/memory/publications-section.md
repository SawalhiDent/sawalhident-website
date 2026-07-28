---
name: Publications Section
description: قسم المؤلفات العلمية الذي أُضيف إلى موقع Sawalhi Dent — بنيته وطريقة توسيعه
---

## القرارات الأساسية

**البنية**: SPA routes إضافية داخل نفس Vite/React/wouter دون أي framework جديد.

**Why**: الموقع static SPA بالكامل — أي إضافة يجب أن تكون React components فقط.

**How to apply**: أي كتاب جديد يُضاف فقط في `client/src/data/publications/books.ts` مع تغيير status إلى `'published'`، وإضافة رابطه في `client/public/sitemap.xml`.

## الملفات الجديدة
- `client/src/data/publications/types.ts` — Book/Author interfaces
- `client/src/data/publications/books.ts` — مصدر بيانات الكتب
- `client/src/data/publications/author.ts` — بيانات المؤلف
- `client/src/lib/publicationSchema.ts` — دوال Schema.org للكتاب والمؤلف
- `client/src/pages/publications/PublicationsIndex.tsx` — /publications
- `client/src/pages/publications/BooksIndex.tsx` — /publications/books
- `client/src/pages/publications/BookPage.tsx` — /publications/books/:slug
- `client/src/pages/publications/AuthorPage.tsx` — /publications/author/mohamed-sawalhi
- `client/src/pages/publications/components/BookCard.tsx` — بطاقة الكتاب

## الملفات المُعدَّلة
- `client/src/App.tsx` — routes جديدة
- `client/src/components/layout/Navbar.tsx` — رابط المؤلفات مع highlight
- `client/src/components/layout/Footer.tsx` — رابط في روابط مفيدة
- `client/src/lib/translations.ts` — مفاتيح pub_* للعربية والعبرية
- `client/public/sitemap.xml` — صفحات publications

## مكان وضع ملفات الكتب الحقيقية
- صور الأغلفة: `public/publications/covers/`
- ملفات PDF: `public/publications/pdfs/`
