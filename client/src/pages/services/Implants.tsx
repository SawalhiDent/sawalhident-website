import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { CheckCircle2, ArrowLeft, Phone, Users, Clock, ShieldCheck, HeartPulse } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, faqSchema } from "@/components/JsonLd";
import { CTASection } from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const content = {
  ar: {
    seoTitle: "زراعة الأسنان في رام الله | د. محمد صوالحي – صوالحي دنت",
    seoDesc: "زراعة أسنان بأحدث تقنيات التيتانيوم في رام الله. نسبة نجاح تتجاوز 98٪ مع ضمان. احجز استشارتك المجانية مع د. محمد صوالحي.",
    intro: "تعتبر زراعة الأسنان الحل الأمثل والأكثر ديمومة لاستعاضة الأسنان المفقودة. نستخدم في عيادتنا أحدث غرسات التيتانيوم المتوافقة حيوياً مع الجسم، لتعيد لك وظيفة المضغ والمظهر الطبيعي بنسبة 100٪.",
    featuresTitle: "مميزات الزراعة لدينا:",
    features: [
      "غرسات من أفضل الشركات العالمية",
      "عملية جراحية دقيقة بدون ألم",
      "نسبة نجاح تتجاوز 98٪",
      "استعادة المظهر الطبيعي والثقة بالنفس",
    ],
    whoItems: [
      "من فقد سناً أو أكثر بسبب حادث أو تسوس أو أمراض اللثة",
      "من يعاني من أطقم أسنان متحركة غير مريحة",
      "من يبحث عن حل دائم وطبيعي المظهر",
      "مرضى السكري المنضبط بعد تقييم الحالة",
    ],
    steps: [
      { title: "الفحص والتشخيص", desc: "تصوير شعاعي ثلاثي الأبعاد وفحص سريري شامل لتقييم العظم واللثة." },
      { title: "وضع الغرسة", desc: "زرع غرسة التيتانيوم في عظم الفك تحت تخدير موضعي بدون ألم." },
      { title: "فترة الالتحام", desc: "ننتظر 3-4 أشهر حتى تلتحم الغرسة بالعظم بشكل كامل." },
      { title: "التركيبة النهائية", desc: "تركيب السن الدائم (التاج) المصمم ليطابق أسنانك الطبيعية تماماً." },
    ],
    duration: "تستغرق العملية الكاملة من 3 إلى 6 أشهر، تشمل وضع الغرسة وفترة الالتحام والتركيبة النهائية. في بعض الحالات البسيطة يمكن تنفيذ زراعة فورية في يوم واحد.",
    aftercareItems: [
      "تناول أطعمة لينة خلال الأيام الأولى بعد العملية",
      "تجنب المشروبات الساخنة والتدخين لمدة 48 ساعة",
      "استخدام غسول الفم الموصوف من الطبيب",
      "الالتزام بزيارات المتابعة الدورية",
      "تنظيف الأسنان بفرشاة ناعمة حول منطقة الزراعة",
    ],
    faqs: [
      { q: "هل زراعة الأسنان مؤلمة؟", a: "لا، نستخدم تخدير موضعي فعال يجعل العملية بدون ألم تماماً. قد يكون هناك انزعاج خفيف بعد العملية يزول خلال أيام قليلة بالمسكنات العادية." },
      { q: "كم تدوم الزراعة؟", a: "غرسات الأسنان مصممة لتدوم مدى الحياة مع العناية الجيدة. التاج (التركيبة) قد يحتاج استبدال بعد 10-15 سنة." },
      { q: "هل يمكن لمرضى السكري إجراء زراعة؟", a: "نعم، بشرط أن يكون مستوى السكر مضبوطاً. يتم تقييم الحالة بشكل فردي لضمان سلامة العلاج." },
      { q: "ما تكلفة زراعة الأسنان؟", a: "تختلف التكلفة حسب نوع الغرسة وحالة العظم وعدد الأسنان المطلوب زراعتها. يتم تحديد السعر بعد الفحص السريري والتشخيص الدقيق." },
      { q: "هل هناك ضمان على الزراعة؟", a: "نعم، نقدم ضمان على الغرسات والتركيبات. المدة تعتمد على نوع الغرسة المستخدمة ويتم توضيحها قبل بدء العلاج." },
      { q: "ما الفرق بين الزراعة الفورية والتقليدية؟", a: "الزراعة التقليدية تتطلب فترة التحام 3-4 أشهر، بينما الزراعة الفورية تسمح بتركيب سن مؤقت في نفس الجلسة في حالات معينة." },
    ],
  },
  he: {
    seoTitle: "השתלות שיניים ברמאללה | ד״ר מוחמד סוואלחי – סוואלחי דנט",
    seoDesc: "השתלות שיניים בטכנולוגיית טיטניום מתקדמת ברמאללה. שיעור הצלחה של מעל 98% עם אחריות. הזמן ייעוץ חינם עם ד״ר מוחמד סוואלחי.",
    intro: "השתלות שיניים הן הפתרון האופטימלי והעמיד ביותר להחלפת שיניים חסרות. אנו משתמשים במרפאתנו בשתלי טיטניום מתקדמים ומתאימים ביולוגית, כדי להחזיר לך את תפקוד הלעיסה והמראה הטבעי ב-100%.",
    featuresTitle: "יתרונות ההשתלה אצלנו:",
    features: [
      "שתלים מחברות המובילות בעולם",
      "ניתוח מדויק ללא כאב",
      "שיעור הצלחה של מעל 98%",
      "שחזור המראה הטבעי והביטחון העצמי",
    ],
    whoItems: [
      "מי שאיבד שן אחת או יותר עקב תאונה, עששת או מחלות חניכיים",
      "מי שסובל מתותבות נשלפות לא נוחות",
      "מי שמחפש פתרון קבוע ובעל מראה טבעי",
      "חולי סוכרת מאוזנת לאחר הערכת המקרה",
    ],
    steps: [
      { title: "בדיקה ואבחון", desc: "צילום תלת-ממדי ובדיקה קלינית מקיפה להערכת העצם והחניכיים." },
      { title: "הנחת השתל", desc: "השתלת שתל טיטניום בעצם הלסת תחת הרדמה מקומית ללא כאב." },
      { title: "תקופת ההתגברות", desc: "ממתינים 3-4 חודשים עד שהשתל מתמזג עם העצם באופן מלא." },
      { title: "שיקום סופי", desc: "התקנת השן הקבועה (כתר) המעוצבת להתאים לשיניך הטבעיות בדיוק." },
    ],
    duration: "התהליך המלא אורך 3 עד 6 חודשים, כולל הנחת השתל, תקופת ההתגברות והשיקום הסופי. במקרים פשוטים ניתן לבצע השתלה מיידית ביום אחד.",
    aftercareItems: [
      "אכילת מזון רך בימים הראשונים לאחר הניתוח",
      "הימנעות ממשקאות חמים ומעישון למשך 48 שעות",
      "שימוש בשטיפת פה שנרשמה על ידי הרופא",
      "הקפדה על ביקורי מעקב תקופתיים",
      "צחצוח שיניים במברשת רכה סביב אזור ההשתלה",
    ],
    faqs: [
      { q: "האם השתלת שיניים כואבת?", a: "לא, אנו משתמשים בהרדמה מקומית יעילה שהופכת את הפרוצדורה לנטולת כאב לחלוטין. ייתכן אי-נוחות קלה לאחר הפרוצדורה שחולפת תוך ימים עם משככי כאבים רגילים." },
      { q: "כמה זמן מחזיקה ההשתלה?", a: "שתלי שיניים מעוצבים להחזיק לכל החיים עם טיפול נכון. הכתר (השיקום) עשוי להצריך החלפה לאחר 10-15 שנים." },
      { q: "האם חולי סוכרת יכולים לעבור השתלה?", a: "כן, בתנאי שרמת הסוכר מאוזנת. המקרה מוערך באופן אישי כדי להבטיח בטיחות הטיפול." },
      { q: "מה עלות השתלת שיניים?", a: "העלות משתנה בהתאם לסוג השתל, מצב העצם ומספר השיניים הנדרשות. המחיר נקבע לאחר בדיקה קלינית ואבחון מדויק." },
      { q: "האם יש אחריות על ההשתלה?", a: "כן, אנו מציעים אחריות על השתלים והשיקומים. משך האחריות תלוי בסוג השתל ומוסבר לפני תחילת הטיפול." },
      { q: "מה ההבדל בין השתלה מיידית לקונבנציונלית?", a: "השתלה קונבנציונלית דורשת תקופת התגברות של 3-4 חודשים, בעוד השתלה מיידית מאפשרת התקנת שן זמנית באותה ישיבה במקרים מסוימים." },
    ],
  },
};

export default function Implants() {
  const { t, lang } = useLanguage();
  const c = content[lang];

  const faqJsonLd = faqSchema(c.faqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div className="pt-32 pb-24">
      <SEOHead title={c.seoTitle} description={c.seoDesc} path="/services/implants" />
      <JsonLd data={faqJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: t.breadcrumb_home, href: "/" },
            { label: t.breadcrumb_services, href: "/#services" },
            { label: t.srv_implants },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-bold rounded-full mb-6 text-sm">
              {t.nav_services}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6" data-testid="text-implants-title">{t.srv_implants}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{c.intro}</p>

            <h3 className="text-2xl font-bold mb-4">{c.featuresTitle}</h3>
            <ul className="space-y-4 mb-10">
              {c.features.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1" data-testid="link-implants-contact">
              {t.book_now} <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://pixabay.com/get/gdb709542e51e6bcfc93a7d60a1f540018e2da9dadd906a0abbd1826d598d4867d1834ce8ac82ae78862fbe7006062a33070102892d8509d318d7a36b4d209919_1280.jpg"
              alt={t.srv_implants}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          </div>
        </div>

        <section className="mb-20" data-testid="section-who">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-7 h-7 text-accent" />
            <h2 className="text-3xl font-bold">{t.who_title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.whoItems.map((item, i) => (
              <Card key={i} className="p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20" data-testid="section-how">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-7 h-7 text-accent" />
            <h2 className="text-3xl font-bold">{t.how_title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.steps.map((step, i) => (
              <Card key={i} className="p-6 text-center relative">
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20" data-testid="section-duration">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-7 h-7 text-accent" />
            <h2 className="text-3xl font-bold">{t.duration_title}</h2>
          </div>
          <Card className="p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{c.duration}</p>
          </Card>
        </section>

        <section className="mb-20" data-testid="section-aftercare">
          <div className="flex items-center gap-3 mb-6">
            <HeartPulse className="w-7 h-7 text-accent" />
            <h2 className="text-3xl font-bold">{t.aftercare_title}</h2>
          </div>
          <Card className="p-6">
            <ul className="space-y-3">
              {c.aftercareItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <section className="mb-20" data-testid="section-cost">
          <h2 className="text-3xl font-bold mb-4">{t.cost_title}</h2>
          <Card className="p-6">
            <p className="text-lg text-muted-foreground">{t.cost_note}</p>
          </Card>
        </section>

        <section className="mb-20" data-testid="section-faq-implants">
          <h2 className="text-3xl font-bold mb-6">{t.faq_title}</h2>
          <Accordion type="single" collapsible className="w-full">
            {c.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-right font-semibold" data-testid={`faq-trigger-implants-${i}`}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <CTASection />
      </div>
    </div>
  );
}