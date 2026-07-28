import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd, blogPostingSchema, faqSchema } from "@/components/JsonLd";
import { siteUrl } from "@/lib/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const content = {
  ar: {
    title: "كم مدة تقويم الأسنان؟ دليل شامل لفترات العلاج",
    description: "تعرف على المدة المتوقعة لعلاج تقويم الأسنان حسب نوع التقويم وحالة الأسنان.",
    date: "2024-09-01",
    dateFormatted: "01 سبتمبر 2024",
    backLabel: "العودة للمدونة",
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "المدونة", href: "/blog" },
      { label: "كم مدة تقويم الأسنان؟" },
    ],
    intro: "من أكثر الأسئلة شيوعاً عند التفكير بتقويم الأسنان هو: \"كم سيستغرق العلاج؟\" الإجابة تعتمد على عدة عوامل مهمة. في هذا المقال نشرح بالتفصيل المدة المتوقعة لكل نوع من أنواع التقويم.",
    h2_1: "العوامل المؤثرة على مدة التقويم",
    factors: [
      "شدة سوء الإطباق: الحالات البسيطة تحتاج 6-12 شهراً بينما الحالات المعقدة قد تصل لـ 24-36 شهراً.",
      "عمر المريض: الأطفال والمراهقون يستجيبون أسرع من البالغين لأن عظام الفك لا تزال في مرحلة النمو.",
      "نوع التقويم المستخدم: كل نوع له مدة مختلفة حسب التقنية.",
      "التزام المريض: الالتزام بتعليمات الطبيب يؤثر بشكل كبير على سرعة النتائج.",
    ],
    h2_2: "مدة كل نوع من أنواع التقويم",
    types: [
      { name: "التقويم المعدني التقليدي", duration: "18 - 36 شهراً", desc: "الأكثر فعالية للحالات المعقدة. قوي ومتين ويعطي نتائج ممتازة." },
      { name: "التقويم الشفاف (Invisalign)", duration: "12 - 18 شهراً", desc: "مناسب للحالات الخفيفة والمتوسطة. شفاف وقابل للإزالة أثناء الأكل." },
      { name: "التقويم الخزفي", duration: "18 - 30 شهراً", desc: "مشابه للمعدني لكن بلون الأسنان. جمالي أكثر لكن يحتاج عناية إضافية." },
      { name: "التقويم اللغوي (الداخلي)", duration: "18 - 36 شهراً", desc: "يُثبت خلف الأسنان. غير مرئي تماماً لكنه يحتاج تأقلم أطول." },
    ],
    h2_3: "نصائح لتسريع العلاج",
    speed_tips: [
      "التزم بمواعيد المراجعة الدورية مع طبيبك",
      "اتبع تعليمات ارتداء المطاطات إذا وصفها الطبيب",
      "تجنب الأطعمة الصلبة والقاسية التي قد تكسر الأقواس",
      "حافظ على نظافة الأسنان لمنع مشاكل تؤخر العلاج",
      "في حالة التقويم الشفاف، ارتدِه 20-22 ساعة يومياً",
    ],
    callout: "في عيادة د. محمد صوالحي، نقدم جميع أنواع التقويم ونضع خطة علاجية مخصصة لتحقيق أفضل النتائج في أقصر وقت ممكن.",
    faqs: [
      { question: "هل يمكن تقصير مدة التقويم؟", answer: "نعم، الالتزام بتعليمات الطبيب وحضور المواعيد بانتظام يساعد في تسريع العلاج." },
      { question: "هل التقويم الشفاف أسرع من المعدني؟", answer: "في الحالات البسيطة والمتوسطة، قد يكون التقويم الشفاف أسرع. لكن للحالات المعقدة، المعدني أكثر فعالية." },
      { question: "ما هو العمر المناسب لبدء التقويم؟", answer: "يمكن بدء التقويم في أي عمر، لكن الفترة المثالية هي بين 10-14 سنة. البالغون يمكنهم الاستفادة أيضاً." },
      { question: "هل يجب ارتداء مثبت بعد التقويم؟", answer: "نعم، ارتداء المثبت ضروري للحفاظ على النتائج. يُرتدى بشكل دائم في البداية ثم ليلاً فقط." },
      { question: "كم مرة يجب زيارة الطبيب أثناء فترة التقويم؟", answer: "عادة كل 4-6 أسابيع لتعديل الأسلاك أو استلام الأقواس الشفافة الجديدة." },
      { question: "هل التقويم يؤلم؟", answer: "قد تشعر بضغط وانزعاج خفيف بعد كل تعديل، لكنه يزول خلال يومين ويمكن استخدام مسكنات عادية." },
    ],
  },
  he: {
    title: "כמה זמן לוקח יישור שיניים? מדריך מלא לתקופות הטיפול",
    description: "גלו את משך הטיפול הצפוי ליישור שיניים לפי סוג היישור ומצב השיניים.",
    date: "2024-09-01",
    dateFormatted: "01 בספטמבר 2024",
    backLabel: "חזור לבלוג",
    breadcrumbs: [
      { label: "ראשי", href: "/" },
      { label: "בלוג", href: "/blog" },
      { label: "כמה זמן לוקח יישור שיניים?" },
    ],
    intro: "אחת השאלות הנפוצות ביותר כשחושבים על יישור שיניים היא: \"כמה זמן ייקח הטיפול?\" התשובה תלויה במספר גורמים חשובים. במאמר זה אנו מסבירים בפירוט את המשך הצפוי לכל סוג יישור.",
    h2_1: "גורמים המשפיעים על משך היישור",
    factors: [
      "חומרת הבעיה: מקרים קלים דורשים 6-12 חודשים בעוד מקרים מורכבים עשויים להגיע ל-24-36 חודשים.",
      "גיל המטופל: ילדים ומתבגרים מגיבים מהר יותר ממבוגרים כי עצמות הלסת עדיין בשלבי גדילה.",
      "סוג היישור בשימוש: לכל סוג יש משך שונה בהתאם לטכניקה.",
      "שיתוף פעולה של המטופל: מעקב אחר הוראות הרופא משפיע מאוד על מהירות התוצאות.",
    ],
    h2_2: "משך כל סוג יישור",
    types: [
      { name: "יישור מתכתי מסורתי", duration: "18 - 36 חודשים", desc: "היעיל ביותר למקרים מורכבים. חזק ועמיד ונותן תוצאות מצוינות." },
      { name: "יישור שקוף (Invisalign)", duration: "12 - 18 חודשים", desc: "מתאים למקרים קלים ובינוניים. שקוף וניתן להסרה בזמן אכילה." },
      { name: "יישור קרמי", duration: "18 - 30 חודשים", desc: "דומה למתכתי אך בצבע השיניים. אסתטי יותר אך דורש טיפול נוסף." },
      { name: "יישור לינגואלי (פנימי)", duration: "18 - 36 חודשים", desc: "מותקן מאחורי השיניים. בלתי נראה לחלוטין אך דורש הסתגלות ארוכה יותר." },
    ],
    h2_3: "טיפים לזירוז הטיפול",
    speed_tips: [
      "הקפד על תורי מעקב תקופתיים אצל הרופא שלך",
      "עקוב אחר הוראות ענידת הגומיות אם נרשמו על ידי הרופא",
      "הימנע ממזון קשה ודביק שעלול לשבור את הסוגריים",
      "שמור על היגיינת הפה כדי למנוע בעיות שמעכבות את הטיפול",
      "במקרה של יישור שקוף, ענוד אותו 20-22 שעות ביום",
    ],
    callout: "במרפאת ד״ר מוחמד סוואלחי, אנו מציעים את כל סוגי היישור ומכינים תוכנית טיפול מותאמת אישית להשגת תוצאות מיטביות בזמן הקצר ביותר.",
    faqs: [
      { question: "האם ניתן לקצר את משך היישור?", answer: "כן, מעקב אחר הוראות הרופא והגעה קבועה לתורים מסייעים לזרז את הטיפול." },
      { question: "האם יישור שקוף מהיר יותר ממתכתי?", answer: "במקרים קלים ובינוניים, היישור השקוף עשוי להיות מהיר יותר. אך למקרים מורכבים, המתכתי יעיל יותר." },
      { question: "מה הגיל המתאים להתחלת יישור?", answer: "ניתן להתחיל בכל גיל, אך התקופה האידיאלית היא בין 10-14 שנה. גם מבוגרים יכולים ליהנות מהטיפול." },
      { question: "האם צריך לענוד ריטיינר לאחר היישור?", answer: "כן, עניית הריטיינר חיונית לשמירה על התוצאות. בהתחלה עונדים באופן קבוע ואח״כ רק בלילה." },
      { question: "כל כמה זמן צריך לבקר את הרופא במהלך היישור?", answer: "בדרך כלל כל 4-6 שבועות לכוונון החוטים או קבלת פלטות שקופות חדשות." },
      { question: "האם יישור שיניים כואב?", answer: "ייתכן שתרגיש לחץ ואי-נוחות קלה לאחר כל כוונון, אך זה חולף תוך יומיים וניתן להשתמש במשככי כאבים רגילים." },
    ],
  },
};

export default function Post5() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead title={c.title} description={c.description} path="/blog/braces-duration" type="article" />
      <JsonLd
        data={blogPostingSchema({
          title: c.title,
          description: c.description,
          datePublished: "2024-09-01",
          url: siteUrl("/blog/braces-duration"),
          authorName: lang === "ar" ? "د. محمد صوالحي" : "ד״ר מוחמד סוואלחי",
        })}
      />
      <JsonLd data={faqSchema(c.faqs)} />

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

      <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 leading-tight" data-testid="text-post5-title">{c.title}</h1>

      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>{c.intro}</p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">{c.h2_1}</h2>
        <ul className="list-disc ps-6 space-y-2">
          {c.factors.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-6">{c.h2_2}</h2>
        <div className="grid sm:grid-cols-2 gap-4 not-prose">
          {c.types.map((type, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="font-bold text-primary text-lg mb-2">{type.name}</h3>
                <div className="flex items-center gap-2 text-accent font-bold mb-3">
                  <Clock className="w-4 h-4" />
                  {type.duration}
                </div>
                <p className="text-muted-foreground text-sm">{type.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">{c.h2_3}</h2>
        <ul className="list-disc ps-6 space-y-2">
          {c.speed_tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>

        <div className="bg-accent/10 border-s-4 border-accent p-6 rounded-r-xl mt-10">
          <p className="m-0 font-bold text-primary">{c.callout}</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-6" data-testid="text-post5-faq">{lang === "ar" ? "الأسئلة الشائعة" : "שאלות נפוצות"}</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {c.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-md px-4">
              <AccordionTrigger className="text-start font-bold" data-testid={`accordion-post5-faq-${i}`}>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
