import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd, blogPostingSchema } from "@/components/JsonLd";
import { siteUrl } from "@/lib/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";

const content = {
  ar: {
    title: "ابتسامة هوليود: كل ما تحتاج معرفته عن قشور الفينير",
    description: "كيف تحصل على الابتسامة المثالية التي طالما حلمت بها باستخدام قشور الفينير التجميلية الرقيقة.",
    dateFormatted: "02 يونيو 2024",
    backLabel: "العودة للمدونة",
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "المدونة", href: "/blog" },
      { label: "ابتسامة هوليود والفينير" },
    ],
  },
  he: {
    title: "חיוך הוליוודי: כל מה שצריך לדעת על ציפויי חרסינה",
    description: "איך להשיג את החיוך המושלם שתמיד חלמתם עליו באמצעות ציפויי חרסינה אסתטיים דקים.",
    dateFormatted: "02 ביוני 2024",
    backLabel: "חזור לבלוג",
    breadcrumbs: [
      { label: "ראשי", href: "/" },
      { label: "בלוג", href: "/blog" },
      { label: "חיוך הוליוודי וציפויי חרסינה" },
    ],
  },
};

const bodyContent = {
  ar: {
    intro: "الابتسامة الجميلة هي مفتاح القلوب، واليوم مع تقنيات تجميل الأسنان المتقدمة، أصبح الحصول على \"ابتسامة هوليود\" أمراً متاحاً للجميع عبر استخدام قشور الفينير الخزفية الرقيقة جداً.",
    h3_1: "ما هو الفينير؟",
    veneer_text: "الفينير عبارة عن قشور رقيقة جداً مصنوعة من مادة البورسلين أو الايماكس (E-max)، يتم لصقها على السطح الأمامي للأسنان لتحسين مظهرها ولونها وشكلها وحجمها.",
    h3_2: "متى نلجأ لابتسامة هوليود (الفينير)؟",
    when_list: [
      "تصبغات الأسنان الشديدة التي لا تستجيب للتبييض العادي.",
      "وجود فراغات (فلجات) بين الأسنان الأمامية.",
      "الأسنان المكسورة أو المتآكلة جزئياً.",
      "تعديل شكل أو حجم الأسنان لتتناسب مع ملامح الوجه.",
    ],
    h3_3: "خطوات العلاج",
    steps_text: "عادة ما يتم الانتهاء من ابتسامة هوليود في 2-3 جلسات فقط. تبدأ الجلسة الأولى بالتشخيص وأخذ الطبعات (المقاسات)، ثم يتم تجهيز السطح الخارجي للأسنان ببرد طبقة رقيقة جداً (وأحياناً بدون برد في حالة اللومينير)، وفي الجلسة الأخيرة يتم لصق القشور بشكل دائم.",
  },
  he: {
    intro: "חיוך יפה הוא המפתח ללבבות, והיום עם טכנולוגיות רפואת שיניים אסתטית מתקדמות, השגת \"חיוך הוליוודי\" הפכה לנגישה לכולם באמצעות ציפויי חרסינה דקים במיוחד.",
    h3_1: "מה זה ציפוי חרסינה?",
    veneer_text: "ציפוי חרסינה הוא ציפויים דקים מאוד העשויים מפורצלן או E-max, המודבקים על פני השיניים הקדמיות לשיפור המראה, הצבע, הצורה והגודל שלהן.",
    h3_2: "מתי פונים לחיוך הוליוודי (ציפויי חרסינה)?",
    when_list: [
      "כתמי שיניים חמורים שאינם מגיבים להלבנה רגילה.",
      "רווחים בין השיניים הקדמיות.",
      "שיניים שבורות או שחוקות חלקית.",
      "התאמת צורת או גודל השיניים לתווי הפנים.",
    ],
    h3_3: "שלבי הטיפול",
    steps_text: "בדרך כלל חיוך הוליוודי מושלם ב-2-3 מפגשים בלבד. המפגש הראשון מתחיל באבחון ולקיחת טביעות, לאחר מכן מכינים את פני השיניים על ידי שחיקת שכבה דקה מאוד (ולפעמים ללא שחיקה במקרה של לומינירס), ובמפגש האחרון מדביקים את הציפויים באופן קבוע.",
  },
};

export default function Post2() {
  const { lang } = useLanguage();
  const c = content[lang];
  const b = bodyContent[lang];
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead title={c.title} description={c.description} path="/blog/hollywood-smile" type="article" />
      <JsonLd
        data={blogPostingSchema({
          title: c.title,
          description: c.description,
          datePublished: "2024-06-02",
          url: siteUrl("/blog/hollywood-smile"),
          authorName: lang === "ar" ? "د. محمد صوالحي" : "ד״ר מוחמד סוואלחי",
        })}
      />

      <Breadcrumbs items={c.breadcrumbs} />

      <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 font-bold transition-colors" data-testid="link-blog-back">
        <ArrowRight className="w-4 h-4 rtl:rotate-180" /> {c.backLabel}
      </Link>

      <div className="rounded-[3rem] overflow-hidden h-[400px] mb-12 shadow-2xl relative">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=600&fit=crop"
          alt={c.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground font-bold">
        <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
          <Calendar className="w-4 h-4 text-accent" /> {c.dateFormatted}
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 leading-tight" data-testid="text-post2-title">{c.title}</h1>

      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>{b.intro}</p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4">{b.h3_1}</h3>
        <p>{b.veneer_text}</p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4">{b.h3_2}</h3>
        <ul className="list-disc ps-6 space-y-2">
          {b.when_list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4">{b.h3_3}</h3>
        <p>{b.steps_text}</p>
      </div>

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
