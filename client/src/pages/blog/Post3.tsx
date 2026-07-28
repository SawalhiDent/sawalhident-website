import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
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
    title: "كيف تختار أفضل طبيب أسنان في رام الله؟",
    description: "دليلك الشامل لاختيار طبيب أسنان موثوق ومحترف في رام الله مع نصائح عملية.",
    date: "2024-07-10",
    dateFormatted: "10 يوليو 2024",
    backLabel: "العودة للمدونة",
    breadcrumbs: [
      { label: "الرئيسية", href: "/" },
      { label: "المدونة", href: "/blog" },
      { label: "أفضل طبيب أسنان في رام الله" },
    ],
    intro: "اختيار طبيب الأسنان المناسب هو قرار مهم يؤثر على صحتك وراحتك لسنوات قادمة. في رام الله، تتوفر العديد من العيادات، لكن كيف تعرف أيها الأنسب لك؟ في هذا الدليل نقدم لك أهم المعايير لاختيار طبيب أسنان ممتاز.",
    h2_1: "معايير اختيار طبيب الأسنان",
    criteria: [
      "الشهادات والتخصص: تأكد من أن الطبيب حاصل على شهادات معتمدة وتدريب متقدم.",
      "الخبرة العملية: اسأل عن عدد سنوات الخبرة وعدد الحالات التي عالجها.",
      "التقنيات المستخدمة: العيادات الحديثة تستخدم أجهزة رقمية للتشخيص والعلاج.",
      "معايير التعقيم: يجب أن تلتزم العيادة بأعلى معايير التعقيم العالمية.",
      "آراء المرضى: اقرأ التقييمات والتجارب السابقة للمرضى.",
      "الموقع والمواعيد: اختر عيادة قريبة منك وبمواعيد مناسبة.",
    ],
    h2_2: "أهمية التقنيات الحديثة",
    tech_text: "التقنيات الرقمية الحديثة مثل التصوير ثلاثي الأبعاد والماسحات الرقمية تجعل التشخيص أكثر دقة والعلاج أكثر راحة. ابحث عن عيادة تستثمر في أحدث الأجهزة.",
    h2_3: "لماذا عيادة د. محمد صوالحي؟",
    why_text: "في عيادة د. محمد صوالحي، نجمع بين الخبرة الطبية الواسعة والتقنيات الرقمية المتطورة وأعلى معايير التعقيم. نقدم خطط علاجية مخصصة لكل مريض مع ضمان على العلاجات وخيارات دفع مرنة.",
    callout: "احجز استشارة مجانية مع د. محمد صوالحي لتقييم حالتك والحصول على خطة علاجية مناسبة.",
    faqs: [
      { question: "كيف أعرف أن طبيب الأسنان مؤهل؟", answer: "تحقق من شهاداته الأكاديمية، عضويته في الجمعيات المهنية، وسنوات خبرته العملية." },
      { question: "هل يجب أن أختار طبيب أسنان عام أم متخصص؟", answer: "يعتمد على حاجتك. لعلاجات مثل الزراعة والتقويم يفضل الذهاب لطبيب متخصص." },
      { question: "ما أهمية التعقيم في عيادة الأسنان؟", answer: "التعقيم يمنع انتقال العدوى ويحمي سلامتك. اسأل عن بروتوكولات التعقيم المتبعة." },
      { question: "كيف أقيم جودة العيادة قبل الزيارة؟", answer: "اقرأ تقييمات المرضى عبر الإنترنت، اسأل عن التقنيات المستخدمة، واطلب جولة في العيادة." },
      { question: "هل السعر الأعلى يعني جودة أفضل؟", answer: "ليس بالضرورة. ركز على الخبرة والتقنيات والنتائج بدلاً من السعر فقط." },
      { question: "هل يقدم د. صوالحي استشارة أولية مجانية؟", answer: "نعم، نقدم استشارة أولية لتقييم حالتك ومناقشة خيارات العلاج المتاحة." },
    ],
  },
  he: {
    title: "איך לבחור את רופא השיניים הטוב ביותר ברמאללה?",
    description: "המדריך המלא שלך לבחירת רופא שיניים אמין ומקצועי ברמאללה עם טיפים מעשיים.",
    date: "2024-07-10",
    dateFormatted: "10 ביולי 2024",
    backLabel: "חזור לבלוג",
    breadcrumbs: [
      { label: "ראשי", href: "/" },
      { label: "בלוג", href: "/blog" },
      { label: "רופא השיניים הטוב ביותר ברמאללה" },
    ],
    intro: "בחירת רופא השיניים הנכון היא החלטה חשובה שמשפיעה על הבריאות והנוחות שלך לשנים קדימה. ברמאללה יש מרפאות רבות, אבל איך יודעים מי המתאים ביותר? במדריך זה אנו מציגים את הקריטריונים החשובים ביותר.",
    h2_1: "קריטריונים לבחירת רופא שיניים",
    criteria: [
      "תעודות והתמחות: ודא שלרופא יש תעודות מוכרות והכשרה מתקדמת.",
      "ניסיון מעשי: שאל על שנות הניסיון ומספר המקרים שטופלו.",
      "טכנולוגיות בשימוש: מרפאות מודרניות משתמשות בציוד דיגיטלי לאבחון וטיפול.",
      "תקני עיקור: המרפאה חייבת לעמוד בתקני העיקור הבינלאומיים הגבוהים ביותר.",
      "חוות דעת מטופלים: קרא ביקורות וחוויות קודמות של מטופלים.",
      "מיקום ושעות: בחר מרפאה קרובה אליך עם שעות נוחות.",
    ],
    h2_2: "חשיבות הטכנולוגיות המודרניות",
    tech_text: "טכנולוגיות דיגיטליות מודרניות כמו הדמיה תלת-ממדית וסורקים דיגיטליים הופכות את האבחון למדויק יותר והטיפול לנוח יותר. חפש מרפאה שמשקיעה בציוד מתקדם.",
    h2_3: "למה מרפאת ד״ר מוחמד סוואלחי?",
    why_text: "במרפאת ד״ר מוחמד סוואלחי, אנו משלבים ניסיון רפואי רב עם טכנולוגיות דיגיטליות מתקדמות ותקני עיקור גבוהים. אנו מציעים תוכניות טיפול מותאמות אישית עם אחריות על הטיפולים ואפשרויות תשלום גמישות.",
    callout: "הזמן ייעוץ חינם עם ד״ר מוחמד סוואלחי להערכת מצבך וקבלת תוכנית טיפול מתאימה.",
    faqs: [
      { question: "איך אני יודע שרופא השיניים מוסמך?", answer: "בדוק את התעודות האקדמיות שלו, חברות באיגודים מקצועיים ושנות ניסיון מעשי." },
      { question: "האם עלי לבחור רופא שיניים כללי או מומחה?", answer: "תלוי בצורך שלך. לטיפולים כמו השתלות ויישור עדיף ללכת למומחה." },
      { question: "מה חשיבות העיקור במרפאת שיניים?", answer: "העיקור מונע העברת זיהומים ומגן על בטיחותך. שאל על פרוטוקולי העיקור הנהוגים." },
      { question: "איך מעריכים את איכות המרפאה לפני הביקור?", answer: "קרא ביקורות מטופלים באינטרנט, שאל על הטכנולוגיות ובקש סיור במרפאה." },
      { question: "האם מחיר גבוה יותר אומר איכות טובה יותר?", answer: "לא בהכרח. התמקד בניסיון, בטכנולוגיות ובתוצאות במקום במחיר בלבד." },
      { question: "האם ד״ר סוואלחי מציע ייעוץ ראשוני חינם?", answer: "כן, אנו מציעים ייעוץ ראשוני להערכת מצבך ודיון באפשרויות הטיפול הזמינות." },
    ],
  },
};

export default function Post3() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead title={c.title} description={c.description} path="/blog/best-dentist-ramallah" type="article" />
      <JsonLd
        data={blogPostingSchema({
          title: c.title,
          description: c.description,
          datePublished: "2024-07-10",
          url: siteUrl("/blog/best-dentist-ramallah"),
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
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=600&fit=crop"
          alt={c.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground font-bold">
        <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-full">
          <Calendar className="w-4 h-4 text-accent" /> {c.dateFormatted}
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-8 leading-tight" data-testid="text-post3-title">{c.title}</h1>

      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>{c.intro}</p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">{c.h2_1}</h2>
        <ul className="space-y-3">
          {c.criteria.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">{c.h2_2}</h2>
        <p>{c.tech_text}</p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">{c.h2_3}</h2>
        <p>{c.why_text}</p>

        <div className="bg-accent/10 border-s-4 border-accent p-6 rounded-r-xl mt-10">
          <p className="m-0 font-bold text-primary">{c.callout}</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-6" data-testid="text-post3-faq">{lang === "ar" ? "الأسئلة الشائعة" : "שאלות נפוצות"}</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {c.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-md px-4">
              <AccordionTrigger className="text-start font-bold" data-testid={`accordion-post3-faq-${i}`}>{faq.question}</AccordionTrigger>
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
