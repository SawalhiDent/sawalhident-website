import type { Book } from "./types";

/**
 * قائمة الكتب المنشورة.
 *
 * لإضافة كتاب جديد:
 * 1. انسخ نموذج الكتاب أدناه.
 * 2. عدّل جميع الحقول ببيانات الكتاب الحقيقية.
 * 3. ضع ملف PDF في مجلد: public/publications/pdfs/
 * 4. ضع صورة الغلاف في: public/publications/covers/
 * 5. غيّر status إلى 'published'.
 */
export const BOOKS: Book[] = [

  // ======================================================
  // الكتاب الأول: Diagnostic Records Mastery
  // ======================================================
  {
    id: "diagnostic-records-mastery",
    slug: "diagnostic-records-mastery",

    titleAr: "إتقان سجلات التشخيص في زراعة الأسنان",
    titleEn: "Diagnostic Records Mastery",
    subtitleAr: "الزراعة الناجحة بتبدأ قبل ما تفتح الـ CBCT",
    subtitleEn: "Successful Implantology Starts Before You Open the CBCT",
    seriesName: "Mastery of Implant Cases",

    shortDescriptionAr:
      "دليل سريري عملي لتقييم حالات زراعة الأسنان تقييماً منهجياً — من التاريخ الطبي إلى قراءة الـ CBCT — بأسلوب مباشر قابل للتطبيق الفوري في العيادة.",

    openingParagraphAr:
      "معظم الأطباء يبدأون التخطيط بفتح صورة الـ CBCT — هذا الكتاب يُعلّمك أن تبدأ قبلها. سجلات التشخيص ليست ملفاً تجمعه روتينياً قبل الجراحة؛ هي القرار بعينه. كل سؤال تطرحه قبل أن تفتح الصورة يحميك من خطأ لن تتمكن من التراجع عنه على طاولة العمليات.",

    quoteAr:
      "الطبيب الخبير يفتح الـ CBCT ويسأل: وين ممكن أغلط؟ — هون بتبدأ السلامة.",

    fullDescriptionAr:
      "الزراعة الناجحة لا تبدأ بالـ CBCT — تبدأ بالأسئلة الصحيحة التي تطرحها قبل أن تفتحه.\n\n" +
      "يُقدّم هذا الكتاب منهجية سريرية متكاملة لتقييم مرضى زراعة الأسنان، مبنية على سبعة أسئلة جوهرية: هل المريض مناسب؟ هل التوقيت مناسب؟ هل عنده خطر طبي؟ هل عنده خطر إطباقي؟ هل العظم كافٍ؟ هل العظم ذو جودة جيدة؟ وهل القياسات على الـ CBCT دقيقة ومحددة؟\n\n" +
      "من خلال 24 درساً سريرياً مصوّراً، يأخذك الكتاب من الغلطة الأولى الشائعة التي يقع فيها كثير من الأطباء، حتى قراءة الـ CBCT كخريطة تشريحية كاملة لا مجرد صورة قياسية. يتناول الكتاب مواضيع دقيقة كتأثير Bisphosphonates، وتقييم الإطباق، وفهم مريض الـ Bruxer، وقياس العظم من نقطته الحقيقية لا من الكريست، وتحديد البنى التشريحية الخطرة بما فيها Lingual Canal وSublingual Artery والـ Anterior Loop.",

    coverImage: "/publication-assets/covers/diagnostic-records-mastery.jpg",
    pdfUrl: "/publication-assets/pdfs/diagnostic-records-mastery.pdf",
    pdfSizeMB: 12.9,

    previewImages: [
      "/publication-assets/previews/diagnostic-records-mastery/01-real-starting-point.jpg",
      "/publication-assets/previews/diagnostic-records-mastery/02-clinical-pearl.jpg",
      "/publication-assets/previews/diagnostic-records-mastery/03-golden-rule.jpg",
      "/publication-assets/previews/diagnostic-records-mastery/04-anatomical-atlas.jpg",
      "/publication-assets/previews/diagnostic-records-mastery/05-summary.jpg",
      "/publication-assets/previews/diagnostic-records-mastery/06-where-mastery-begins.jpg",
    ],

    authorId: "mohamed-sawalhi",
    category: "implantology",
    language: "العربية",
    pageCount: 26,
    publicationDate: "2026-06-30",
    edition: "الإصدار الأول",
    version: "1.0",

    changelog: [
      {
        version: "1.0",
        date: "2026-06-30",
        descriptionAr: "أول إصدار رقمي — First Digital Publication.",
      },
    ],

    targetAudienceAr:
      "أطباء الأسنان المهتمون بزراعة الأسنان، والمقيمون في تخصص الزراعة، وطلاب الدراسات العليا في طب الأسنان.",

    learningObjectivesAr: [
      "تمييز الخطأ الأول الشائع في تقييم حالات الزراعة: البدء بالـ CBCT قبل إكمال التقييم السريري",
      "بناء منهجية تشخيصية متكاملة تبدأ بالمريض لا بالصورة",
      "قراءة الملف الطبي بكفاءة وتحديد موانع الزراعة أو المخاطر الجهازية (Bisphosphonates، السكري، ضعف المناعة)",
      "تقييم الإطباق وكشف علامات Bruxism وأثرها على قرار الزراعة وتصميم البروتيز",
      "قياس العظم بطريقة صحيحة على الـ CBCT — من العظم الحقيقي لا من الكريست",
      "تقييم جودة العظم وكثافته وانعكاسهما على بروتوكول الحفر والزرع",
      "التعرف على البنى التشريحية الخطرة في الـ CBCT: Inferior Alveolar Nerve، Lingual Canal، Sublingual Artery، Maxillary Sinus",
      "تطبيق قائمة قرار سريرية من 7 أسئلة جوهرية قبل كل حالة زراعة",
    ],

    tableOfContents: [
      { title: "أول غلطة", titleEn: "The First Mistake", page: 2 },
      { title: "البداية الحقيقية", titleEn: "The Real Starting Point", page: 3 },
      { title: "السؤال الأول", titleEn: "Question #1", page: 4 },
      { title: "شغلتك كطبيب", titleEn: "Your Role as a Clinician", page: 5 },
      { title: "الـ Medical History", titleEn: "More Than a Routine Form", page: 6 },
      { title: "ليس الآن", titleEn: "Not Now ≠ Never", page: 7 },
      { title: "هشاشة العظام", titleEn: "Bisphosphonates — Stop & Ask", page: 8 },
      { title: "كلينيكال بيرل", titleEn: "Risk Increases with Bone Involvement", page: 9 },
      { title: "الإطباق يحكي", titleEn: "The Occlusion Speaks Before the Patient", page: 10 },
      { title: "السن vs الزرعة", titleEn: "PDL Feedback vs Silent Overload", page: 11 },
      { title: "مريض الـ Bruxer", titleEn: "Think Differently — Plan Differently", page: 12 },
      { title: "الطول والعرض", titleEn: "When in Doubt — Width Wins", page: 13 },
      { title: "افهم شكل العظم", titleEn: "Ridge Morphology — Not Just a Box", page: 14 },
      { title: "كيف تقيس صح", titleEn: "The Correct CBCT Measurement", page: 15 },
      { title: "القاعدة الذهبية في القياس", titleEn: "Measure from Real Bone — Not the Image", page: 16 },
      { title: "جودة العظم", titleEn: "Density Matters — Not Just Volume", page: 17 },
      { title: "اقرأ الخريطة", titleEn: "CBCT is a Map — Learn to Read It", page: 18 },
      { title: "أطلس التشريح", titleEn: "Anatomical Atlas on CBCT", page: 19 },
      { title: "مش دايماً آمنة — Lower Anterior", titleEn: "The Hidden Danger Zone", page: 20 },
      { title: "تتبع العصب", titleEn: "Trace the Nerve — Slice by Slice", page: 21 },
      { title: "Cortical Niche Sign", titleEn: "Indirect Landmark for the IAN", page: 22 },
      { title: "تدرّب عينك", titleEn: "Train Your Eye — Every CBCT Counts", page: 23 },
      { title: "الخلاصة", titleEn: "Diagnostic Records — Build a Decision", page: 24 },
      { title: "وهون بتبدأ السلامة", titleEn: "Where Mastery Begins", page: 25 },
    ],

    keywords: [
      "سجلات التشخيص",
      "زراعة الأسنان",
      "CBCT",
      "تقييم ما قبل الزراعة",
      "قياس العظم",
      "جودة العظم",
      "التشريح على الـ CBCT",
      "Bisphosphonates وزراعة الأسنان",
      "Bruxism والزراعة",
      "Inferior Alveolar Nerve",
      "د. محمد صوالحي",
      "Diagnostic Records Mastery",
    ],

    relatedBookIds: ["mastery-of-physics-implant-protocol"],
    status: "published",
    updatedAt: "2026-06-30",
  },

  // ======================================================
  // الكتاب الثاني: Mastery of Physics & Implant Protocol
  // ======================================================
  {
    id: "mastery-of-physics-implant-protocol",
    slug: "mastery-of-physics-implant-protocol",

    titleAr: "إتقان فيزياء وبروتوكول الزراعة",
    titleEn: "Mastery of Physics & Implant Protocol",
    subtitleAr: "دليل العيادة الذكي: من الفيزياء للممارسة.. كيف تضمن صفر فشل؟",
    subtitleEn: "Clinical Smart Guide — Zero Failure Protocol",
    seriesName: "Mastery of Implant Cases",

    shortDescriptionAr:
      "دليل سريري مصوّر يُعلّمك الفيزياء الصحيحة خلف كل خطوة في بروتوكول زراعة الأسنان — من اختيار الـ Physiodispenser والكونترا الصحيح، إلى برمجة الجهاز وضمان صفر فشل.",

    openingParagraphAr:
      "الزراعة مش مجرد براغي، هي تعامل مع نسيج حي (Living Tissue). الشطارة هي الـ Success Rate على المدى البعيد. لأنو العظم بحس، لازم نفهم لغته.",

    quoteAr:
      "الفهم الصحيح + التطبيق الدقيق = صفر فشل.",

    fullDescriptionAr:
      "نجاح الزراعة لا يبدأ بالحفر — يبدأ بفهم الفيزياء التي تحكم كل خطوة تقوم بها.\n\n" +
      "يأخذك هذا الكتاب في رحلة عملية عميقة داخل بروتوكول الزراعة الصحيح: لماذا الزراعة تختلف جذرياً عن أي إجراء تقليدي آخر؟ كيف يعمل الـ Physiodispenser ولماذا هو قلب النظام؟ ما الفرق بين الكونترا الأحمر والأزرق والأخضر وكيف يؤثر اختيارك على نجاح الزرعة؟\n\n" +
      "من خلال 8 صفحات مكثفة مصورة، يتناول الكتاب: آلية عمل الـ Physiodispenser وأهمية الـ Steady Torque ونظام ضخ المحلول الملحي 100%، جدول التروس الثلاثة (1:5 / 1:1 / 20:1) وتطبيق كل منها، برمجة 3 برامج أساسية في الجهاز (Drilling / Insertion / Densah Expansion)، أسئلة شائعة عملية مع إجابات مباشرة، و8 إرشادات ذهبية قابلة للتطبيق الفوري في كل عملية زراعة.",

    coverImage: "/publication-assets/covers/mastery-of-physics-implant-protocol.jpg",
    pdfUrl: "/publication-assets/pdfs/mastery-of-physics-implant-protocol.pdf",
    pdfSizeMB: 1.6,

    previewImages: [
      "/publication-assets/previews/mastery-of-physics-implant-protocol/01-introduction.jpg",
      "/publication-assets/previews/mastery-of-physics-implant-protocol/02-physiodispenser.jpg",
      "/publication-assets/previews/mastery-of-physics-implant-protocol/03-gear-ratio.jpg",
      "/publication-assets/previews/mastery-of-physics-implant-protocol/04-programming-console.jpg",
      "/publication-assets/previews/mastery-of-physics-implant-protocol/05-faq.jpg",
      "/publication-assets/previews/mastery-of-physics-implant-protocol/06-golden-tips.jpg",
    ],

    authorId: "mohamed-sawalhi",
    category: "implantology",
    language: "العربية",
    pageCount: 8,
    publicationDate: "2026-06-27",
    edition: "الإصدار الأول",
    version: "2.0",

    changelog: [
      {
        version: "2.0",
        date: "2026-06-27",
        descriptionAr: "النسخة الثانية المحدّثة — Version 2 Digital Publication.",
      },
    ],

    targetAudienceAr:
      "أطباء الأسنان الممارسون لزراعة الأسنان، والمقبلون على تعلّم بروتوكول الزراعة الصحيح لأول مرة.",

    learningObjectivesAr: [
      "فهم لماذا الزراعة تختلف عن الإجراءات التقليدية وضرورة التعامل مع العظم كنسيج حي",
      "معرفة آلية عمل الـ Physiodispenser ودوره في ضمان Steady Torque وتعقيم 100% بالمحلول الملحي",
      "التمييز بين الكونترات الثلاث (أحمر 1:5 / أزرق 1:1 / أخضر 20:1) واختيار الصحيح لكل خطوة",
      "برمجة 3 برامج أساسية في الجهاز: Drilling وInsertion وDensah/Expansion",
      "تطبيق معايير الـ Drilling الآمنة (800-1200 RPM، 30-40 Ncm، Irrigation 100%)",
      "فهم خطر تجاوز 47°C وكيف يؤدي إلى Bone Necrosis وفشل الزرعة",
      "تطبيق بروتوكول Insertion الصحيح (20-40 RPM، البدء بـ 15 Ncm حماية للكونترا)",
      "تطبيق 8 إرشادات ذهبية قابلة للتنفيذ الفوري في كل عملية زراعة",
    ],

    tableOfContents: [
      { title: "الغلاف", titleEn: "Cover", page: 1 },
      { title: "المقدمة", titleEn: "Introduction — Bone is Living Tissue", page: 2 },
      { title: "قلب النظام — الـ Physiodispenser", titleEn: "The Heart of the System", page: 3 },
      { title: "جدول التروس", titleEn: "The Gear Ratio", page: 4 },
      { title: "برمج جهازك صح", titleEn: "Programming the Console", page: 5 },
      { title: "الأسئلة الشائعة", titleEn: "FAQ", page: 6 },
      { title: "نصائح وإرشادات ذهبية", titleEn: "Golden Tips", page: 7 },
      { title: "عن المؤلف", titleEn: "About the Author", page: 8 },
    ],

    keywords: [
      "زراعة الأسنان",
      "بروتوكول الزراعة",
      "Physiodispenser",
      "Implant Protocol",
      "فيزياء الزراعة",
      "Gear Ratio",
      "Steady Torque",
      "Bone Necrosis",
      "د. محمد صوالحي",
      "Mastery of Implant Cases",
      "Zero Failure Protocol",
    ],

    relatedBookIds: ["diagnostic-records-mastery"],
    status: "published",
    updatedAt: "2026-06-27",
  },

];

/** الكتب المنشورة فقط */
export const publishedBooks = (): Book[] =>
  BOOKS.filter((b) => b.status === "published");

/**
 * كتاب منشور بالـ slug — للواجهة العامة فقط.
 * الكتب ذات status 'draft' أو 'coming-soon' لا تُعاد → تُعرض صفحة 404.
 */
export const publishedBookBySlug = (slug: string): Book | undefined =>
  BOOKS.find((b) => b.slug === slug && b.status === "published");

/**
 * bookBySlug — يعيد أي كتاب بصرف النظر عن حالته.
 * للاستخدام الداخلي فقط (أدوات الإدارة). لا تستخدمه في الواجهة العامة.
 * @internal
 */
export const bookBySlug = (slug: string): Book | undefined =>
  BOOKS.find((b) => b.slug === slug);

/** تصنيف الكتب حسب الفئة */
export const booksByCategory = (cat: Book["category"]): Book[] =>
  publishedBooks().filter((b) => b.category === cat);

// ─────────────────────────────────────────────────────────────────────────────
// Sorting utilities — بنية تحتية للتوسع مستقبلاً (Scientific Archive)
// تدعم: حسب التخصص، السلسلة، تاريخ النشر، آخر تحديث
// ─────────────────────────────────────────────────────────────────────────────

/** الكتب المنشورة مرتبة حسب تاريخ النشر (الأحدث أولاً) */
export const booksSortedByDate = (): Book[] =>
  publishedBooks().sort((a, b) =>
    (b.publicationDate ?? "").localeCompare(a.publicationDate ?? ""),
  );

/** الكتب المنشورة مرتبة حسب آخر تحديث (الأحدث أولاً) */
export const booksSortedByUpdated = (): Book[] =>
  publishedBooks().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

/** تجميع الكتب حسب السلسلة — قيمة "_none" للكتب بلا سلسلة */
export const booksBySeries = (): Map<string, Book[]> => {
  const map = new Map<string, Book[]>();
  for (const book of publishedBooks()) {
    const key = book.seriesName ?? "_none";
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(book);
  }
  return map;
};

/** الكتب المنشورة مجمعة حسب سنة النشر (الأحدث أولاً) */
export const booksByYear = (): Map<string, Book[]> => {
  const map = new Map<string, Book[]>();
  for (const book of publishedBooks()) {
    const year = (book.publicationDate ?? "").slice(0, 4) || "unknown";
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(book);
  }
  // ترتيب تنازلي حسب السنة
  return new Map(Array.from(map.entries()).sort((a, b) => b[0].localeCompare(a[0])));
};
