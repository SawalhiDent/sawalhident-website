---
name: Book Page Design
description: التصميم المعتمد لصفحة الكتاب (Book Experience Polish) — القرارات والتسلسل والحقول الجديدة
---

# Book Page Design — القرارات المعتمدة

## الفلسفة
المحتوى هو البطل. هدوء، فخامة، مساحة للتنفس. جمهور طبي يقرأ لا يتفرج.

## التسلسل المعتمد
Hero → Opening + Quote → Info Card (8 حقول) → عن الكتاب → ماذا ستتعلم → معاينة → الفهرس → المؤلف (مع Credentials) → شارك → أكمل رحلتك → الاستشهاد (APA) → الإصدار والتغييرات

## قرارات تصميمية رئيسية
- لا Sidebar، لا Sticky Strip
- الغلاف: w-72 sm:w-80 lg:w-96، يعرض الصورة الحقيقية، CSS mockup كـ fallback
- شارة السلسلة: ثنائية اللغة `سلسلة X | X Series`
- badge: "إصدار مجاني" (لا "مجاني" وحدها)
- لا animations في المحتوى

## حقول جديدة في Book type (types.ts)
- `openingParagraphAr?` — فقرة افتتاحية بعد Hero
- `quoteAr?` — اقتباس للـ Quote Box
- `version?` — رقم الإصدار (e.g. "1.0")
- `changelog?` — مصفوفة {version, date, descriptionAr}
- `seriesName?` — اسم السلسلة

## حقل جديد في Author type (types.ts)
- `credentialsAr?` — مصفوفة مؤهلات وشهادات

**Why:** هذه الحقول تمكّن كل كتاب من الوقوف وحده كمرجع علمي كامل مع citation وchangelog.

## ملفات الكتاب في public/
- PDF: `/publications/pdfs/{slug}.pdf`
- Cover: `/publications/covers/{slug}.jpg`
- Previews: `/publications/previews/{slug}/{n:02d}-{label}.jpg`
