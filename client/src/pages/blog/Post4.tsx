import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd, blogPostingSchema, faqSchema } from "@/components/JsonLd";
import { siteUrl } from "@/lib/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const content = {
  ar: {
    title: "هل زراعة الأسنان مؤلمة؟ الحقيقة الكاملة",
    description: "تعرف على حقيقة الألم أثناء وبعد زراعة الأسنان وكيف نضمن تجربة مريحة بدون ألم.",
    date: "2024-08-05",
    dateFormatted: "05 أغسطس 2024",
    backLabel: "العودة للمدونة",
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "المدونة", href: "/blog" },
      { label: "هل زراعة الأسنان مؤلمة؟" },
    ],
    intro: "السؤال الأكثر شيوعاً الذي نتلقاه من المرضى هو: \"هل زراعة الأسنان مؤلمة؟\" الإجابة المختصرة هي: لا! بفضل التقنيات الحديثة والتخدير الموضعي الفعال، أصبحت عملية زراعة الأسنان إجراءً مريحاً وبدون ألم.",
    h2_1: "أثناء العملية: تخدير كامل",
    during_text: "يتم استخدام تخدير موضعي فعال جداً قبل البدء بالعملية. لن تشعر بأي ألم أثناء الإجراء، فقط ضغط خفيف. العملية نفسها تستغرق عادة 30-60 دقيقة لكل غرسة.",
    h2_2: "بعد العملية: انزعاج بسيط يمكن التحكم به",
    after_text: "بعد زوال تأثير التخدير، قد تشعر بانزعاج خفيف وتورم بسيط. هذا أمر طبيعي ويمكن التحكم به بسهولة باستخدام مسكنات الألم العادية. معظم المرضى يعودون لحياتهم الطبيعية خلال يوم أو يومين.",
    h2_3: "نصائح لتقليل الانزعاج بعد الزراعة",
    tips: [
      "تناول مسكنات الألم كما وصفها الطبيب",
      "ضع كمادات باردة على الخد لتخفيف التورم",
      "تجنب الأطعمة الساخنة والصلبة في أول 48 ساعة",
      "لا تدخن لمدة أسبوع على الأقل بعد العملية",
      "نم مع رفع الرأس قليلاً في الليلة الأولى",
      "اتبع تعليمات الطبيب بدقة للحصول على أفضل نتيجة",
    ],
    h2_4: "مقارنة الألم مع إجراءات أخرى",
    compare_text: "يصف معظم المرضى أن ألم الزراعة أقل بكثير من ألم خلع الأسنان العادي. في الواقع، كثير من المرضى يفاجأون بسهولة الإجراء مقارنة بتوقعاتهم.",
    callout: "في عيادة د. محمد صوالحي، نستخدم أحدث تقنيات التخدير ونتابع المريض بعد العملية لضمان أقصى درجات الراحة.",
    faqs: [
      { question: "هل أشعر بألم أثناء عملية الزراعة؟", answer: "لا، يتم استخدام تخدير موضعي فعال يمنع الشعور بأي ألم أثناء العملية." },
      { question: "كم يستمر الألم بعد العملية؟", answer: "عادة يستمر الانزعاج الخفيف لمدة 3-5 أيام ويمكن التحكم به بالمسكنات." },
      { question: "هل يمكنني العودة للعمل في نفس اليوم؟", answer: "معظم المرضى يعودون لعملهم في اليوم التالي للعملية." },
      { question: "ماذا أفعل إذا شعرت بألم شديد بعد العملية؟", answer: "اتصل بطبيبك فوراً. الألم الشديد غير طبيعي وقد يشير لمشكلة تحتاج متابعة." },
      { question: "هل التخدير العام خيار متاح؟", answer: "نعم، في بعض الحالات يمكن إجراء الزراعة تحت التخدير العام حسب رغبة المريض." },
      { question: "هل المرضى الذين يخافون من طبيب الأسنان يمكنهم إجراء الزراعة؟", answer: "بالتأكيد! نتفهم خوف المرضى ونوفر بيئة مريحة وهادئة مع تخدير فعال." },
    ],
  },
  he: {
    title: "האם השתלת שיניים כואבת? האמת המלאה",
    description: "גלו את האמת על כאב במהלך ואחרי השתלת שיניים וכיצד אנו מבטיחים חוויה נוחה וללא כאב.",
    date: "2024-08-05",
    dateFormatted: "05 באוגוסט 2024",
    backLabel: "חזור לבלוג",
    breadcrumbs: [
      { label: "ראשי", href: "/" },
      { label: "בלוג", href: "/blog" },
      { label: "האם השתלת שיניים כואבת?" },
    ],
    intro: "השאלה הנפוצה ביותר שאנו מקבלים מהמטופלים היא: \"האם השתלת שיניים כואבת?\" התשובה הקצרה היא: לא! בזכות הטכנולוגיות המודרניות וההרדמה המקומית היעילה, השתלת שיניים הפכה להליך נוח וללא כאב.",
    h2_1: "במהלך ההליך: הרדמה מלאה",
    during_text: "משתמשים בהרדמה מקומית יעילה מאוד לפני תחילת ההליך. לא תרגיש כאב כלל במהלך הפרוצדורה, רק לחץ קל. ההליך עצמו אורך בדרך כלל 30-60 דקות לכל שתל.",
    h2_2: "אחרי ההליך: אי-נוחות קלה שניתן לשלוט בה",
    after_text: "לאחר שתסתיים ההרדמה, ייתכן שתרגיש אי-נוחות קלה ונפיחות מינימלית. זה טבעי לחלוטין וניתן לשלוט בכך בקלות באמצעות משככי כאבים רגילים. רוב המטופלים חוזרים לשגרה תוך יום-יומיים.",
    h2_3: "טיפים להפחתת אי-נוחות לאחר ההשתלה",
    tips: [
      "קח משככי כאבים כפי שנרשמו על ידי הרופא",
      "הנח קומפרסים קרים על הלחי להפחתת הנפיחות",
      "הימנע ממזון חם וקשה ב-48 השעות הראשונות",
      "אל תעשן במשך שבוע לפחות לאחר ההליך",
      "ישן עם הראש מורם קלות בלילה הראשון",
      "עקוב אחר הוראות הרופא בדייקנות לתוצאה הטובה ביותר",
    ],
    h2_4: "השוואת כאב עם הליכים אחרים",
    compare_text: "רוב המטופלים מתארים שהכאב מההשתלה קל בהרבה מכאב עקירת שן רגילה. למעשה, מטופלים רבים מופתעים מקלות ההליך בהשוואה לציפיותיהם.",
    callout: "במרפאת ד״ר מוחמד סוואלחי, אנו משתמשים בטכניקות ההרדמה החדישות ביותר ועוקבים אחר המטופל לאחר ההליך כדי להבטיח נוחות מרבית.",
    faqs: [
      { question: "האם ארגיש כאב במהלך ההשתלה?", answer: "לא, משתמשים בהרדמה מקומית יעילה שמונעת כל כאב במהלך ההליך." },
      { question: "כמה זמן נמשך הכאב לאחר ההליך?", answer: "בדרך כלל אי-הנוחות הקלה נמשכת 3-5 ימים וניתן לשלוט בה באמצעות משככי כאבים." },
      { question: "האם אוכל לחזור לעבודה באותו היום?", answer: "רוב המטופלים חוזרים לעבודתם ביום שלאחר ההליך." },
      { question: "מה עלי לעשות אם ארגיש כאב חזק לאחר ההליך?", answer: "התקשר לרופא שלך מיד. כאב חזק אינו תקין ועלול להצביע על בעיה שדורשת מעקב." },
      { question: "האם הרדמה כללית היא אפשרות זמינה?", answer: "כן, במקרים מסוימים ניתן לבצע את ההשתלה תחת הרדמה כללית לפי רצון המטופל." },
      { question: "האם מטופלים שפוחדים מרופא שיניים יכולים לעבור השתלה?", answer: "בהחלט! אנו מבינים את הפחד ומספקים סביבה נוחה ושקטה עם הרדמה יעילה." },
    ],
  },
};

export default function Post4() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead title={c.title} description={c.description} path="/blog/is-implant-painful" type="article" />
      <JsonLd
        data={blogPostingSchema({
          title: c.title,
          description: c.description,
          datePublished: "2024-08-05",
          url: siteUrl("/blog/is-implant-painful"),
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

      <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 leading-tight" data-testid="text-post4-title">{c.title}</h1>

      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>{c.intro}</p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">{c.h2_1}</h2>
        <p>{c.during_text}</p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">{c.h2_2}</h2>
        <p>{c.after_text}</p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">{c.h2_3}</h2>
        <ul className="list-disc ps-6 space-y-2">
          {c.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">{c.h2_4}</h2>
        <p>{c.compare_text}</p>

        <div className="bg-accent/10 border-s-4 border-accent p-6 rounded-r-xl mt-10">
          <p className="m-0 font-bold text-primary">{c.callout}</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-6" data-testid="text-post4-faq">{lang === "ar" ? "الأسئلة الشائعة" : "שאלות נפוצות"}</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {c.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-md px-4">
              <AccordionTrigger className="text-start font-bold" data-testid={`accordion-post4-faq-${i}`}>{faq.question}</AccordionTrigger>
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
