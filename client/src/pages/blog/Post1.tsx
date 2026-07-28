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
    title: "تكلفة زراعة الأسنان في رام الله: دليلك الشامل",
    description: "تعرف على العوامل التي تؤثر على تكلفة زراعة الأسنان ولماذا تعتبر استثماراً طويل الأمد في صحتك.",
    dateFormatted: "15 مايو 2024",
    backLabel: "العودة للمدونة",
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "المدونة", href: "/blog" },
      { label: "تكلفة زراعة الأسنان في رام الله" },
    ],
  },
  he: {
    title: "עלות השתלת שיניים ברמאללה: המדריך המלא שלך",
    description: "גלו את הגורמים המשפיעים על עלות השתלת שיניים ולמה מדובר בהשקעה לטווח ארוך בבריאותך.",
    dateFormatted: "15 במאי 2024",
    backLabel: "חזור לבלוג",
    breadcrumbs: [
      { label: "ראשי", href: "/" },
      { label: "בלוג", href: "/blog" },
      { label: "עלות השתלת שיניים ברמאללה" },
    ],
  },
};

const bodyContent = {
  ar: {
    intro: "زراعة الأسنان أصبحت اليوم من أهم التطورات في عالم طب الأسنان، فهي تقدم حلاً دائماً وثابتاً للأسنان المفقودة، ما يعيد للمريض القدرة على المضغ بشكل طبيعي ويحسن من مظهره وثقته بنفسه.",
    h3_1: "ما هي العوامل التي تؤثر على تكلفة الزراعة؟",
    factors: [
      { bold: "نوع الغرسة والشركة المصنعة:", text: " الغرسات السويسرية والألمانية والأمريكية تعتبر الأعلى جودة وبالتالي أعلى سعراً." },
      { bold: "حالة عظم الفك:", text: " إذا كان هناك حاجة لزراعة عظم قبل وضع الغرسة، فإن ذلك يضيف إلى التكلفة الإجمالية." },
      { bold: "نوع التركيبة النهائية (التاج):", text: " تيجان الزيركون والبورسلين تختلف في أسعارها وجماليتها." },
      { bold: "خبرة الطبيب المعالج:", text: " الطبيب المختص ذو الخبرة الطويلة يقدم نتائج أكثر أماناً وضماناً." },
    ],
    h3_2: "لماذا الزراعة استثمار ناجح؟",
    invest_text: "على الرغم من أن تكلفة زراعة الأسنان قد تبدو أعلى من البدائل الأخرى (مثل الأطقم المتحركة أو الجسور)، إلا أنها تدوم مدى الحياة إذا تم الاعتناء بها بشكل صحيح. كما أنها لا تتطلب برد أو نحت الأسنان المجاورة السليمة.",
    callout: "في عيادة د. محمد صوالحي، نقدم خطط علاجية مرنة وأسعار تنافسية مع الحفاظ على أعلى معايير الجودة العالمية لضمان ابتسامة تدوم.",
  },
  he: {
    intro: "השתלות שיניים הפכו היום לאחד הפיתוחים החשובים ביותר בעולם רפואת השיניים, והן מציעות פתרון קבוע ויציב לשיניים חסרות, המחזיר למטופל את היכולת ללעוס באופן טבעי ומשפר את המראה ואת הביטחון העצמי.",
    h3_1: "מה הגורמים המשפיעים על עלות ההשתלה?",
    factors: [
      { bold: "סוג השתל והיצרן:", text: " שתלים שוויצריים, גרמניים ואמריקאים נחשבים לאיכותיים ביותר ולכן גם יקרים יותר." },
      { bold: "מצב עצם הלסת:", text: " אם יש צורך בהשתלת עצם לפני הנחת השתל, הדבר מוסיף לעלות הכוללת." },
      { bold: "סוג השיקום הסופי (כתר):", text: " כתרי זירקוניה ופורצלן שונים במחיריהם ובאסתטיקה שלהם." },
      { bold: "ניסיון הרופא המטפל:", text: " רופא מומחה עם ניסיון רב מספק תוצאות בטוחות יותר עם אחריות." },
    ],
    h3_2: "למה השתלה היא השקעה מוצלחת?",
    invest_text: "למרות שעלות השתלת שיניים עשויה להיראות גבוהה יותר מחלופות אחרות (כמו תותבות נשלפות או גשרים), היא מחזיקה לכל החיים כשמטפלים בה כראוי. בנוסף, היא לא דורשת שחיקה או חיתוך של שיניים סמוכות בריאות.",
    callout: "במרפאת ד״ר מוחמד סוואלחי, אנו מציעים תוכניות טיפול גמישות ומחירים תחרותיים תוך שמירה על תקני האיכות הבינלאומיים הגבוהים ביותר להבטחת חיוך מתמשך.",
  },
};

export default function Post1() {
  const { lang } = useLanguage();
  const c = content[lang];
  const b = bodyContent[lang];
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead title={c.title} description={c.description} path="/blog/implant-cost-ramallah" type="article" />
      <JsonLd
        data={blogPostingSchema({
          title: c.title,
          description: c.description,
          datePublished: "2024-05-15",
          url: siteUrl("/blog/implant-cost-ramallah"),
          authorName: lang === "ar" ? "د. محمد صوالحي" : "ד״ר מוחמד סוואלחי",
        })}
      />

      <Breadcrumbs items={c.breadcrumbs} />

      <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 font-bold transition-colors" data-testid="link-blog-back">
        <ArrowRight className="w-4 h-4 rtl:rotate-180" /> {c.backLabel}
      </Link>

      <div className="rounded-[3rem] overflow-hidden h-[400px] mb-12 shadow-2xl relative">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop"
          alt={c.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground font-bold">
        <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
          <Calendar className="w-4 h-4 text-accent" /> {c.dateFormatted}
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 leading-tight" data-testid="text-post1-title">{c.title}</h1>

      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>{b.intro}</p>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4">{b.h3_1}</h3>
        <ul className="list-disc ps-6 space-y-2">
          {b.factors.map((f, i) => (
            <li key={i}><strong>{f.bold}</strong>{f.text}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold text-primary mt-10 mb-4">{b.h3_2}</h3>
        <p>{b.invest_text}</p>

        <div className="bg-accent/10 border-s-4 border-accent p-6 rounded-r-xl mt-10">
          <p className="m-0 font-bold text-primary">{b.callout}</p>
        </div>
      </div>

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
