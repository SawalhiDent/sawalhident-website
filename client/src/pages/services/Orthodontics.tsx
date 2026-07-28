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
    seoTitle: "تقويم الأسنان في رام الله | تقويم شفاف ومعدني – د. محمد صوالحي",
    seoDesc: "تقويم أسنان للأطفال والكبار في رام الله. تقويم شفاف، معدني، وInvisalign. احجز استشارتك المجانية مع د. محمد صوالحي.",
    intro: "تصحيح ارتصاف الأسنان لا يمنحك ابتسامة جميلة فحسب، بل يحسن من وظيفة المضغ ويحافظ على صحة اللثة. نوفر أنواعاً متعددة من التقويم تناسب جميع الأعمار والحالات.",
    featuresTitle: "خيارات التقويم المتوفرة:",
    features: [
      "التقويم المعدني التقليدي",
      "التقويم الخزفي (الشفاف) غير المرئي",
      "التقويم المتحرك (Invisalign)",
      "تقويم الأطفال الوقائي",
    ],
    whoItems: [
      "من يعاني من تزاحم أو فراغات بين الأسنان",
      "من لديه سوء إطباق (العضة المفتوحة أو العميقة أو المعكوسة)",
      "الأطفال من عمر 7 سنوات للتقويم الوقائي المبكر",
      "البالغين الذين يرغبون بتحسين ابتسامتهم بالتقويم الشفاف",
    ],
    steps: [
      { title: "الفحص والتشخيص", desc: "صور شعاعية بانورامية وسيفالومترية وفحص سريري شامل لتحديد خطة العلاج." },
      { title: "تركيب التقويم", desc: "تركيب الأقواس أو القوالب الشفافة بحسب الخطة العلاجية المختارة." },
      { title: "زيارات المتابعة", desc: "زيارات شهرية لتعديل الأسلاك وتقييم تقدم العلاج." },
      { title: "إزالة التقويم والمثبت", desc: "إزالة التقويم بعد الوصول للنتيجة وتركيب مثبت دائم أو متحرك." },
    ],
    duration: "تتراوح مدة التقويم بين 12 إلى 24 شهراً حسب حالة الأسنان ونوع التقويم المستخدم. الحالات البسيطة قد تحتاج 6-12 شهراً فقط. يجب ارتداء المثبت بعد العلاج لضمان استقرار النتيجة.",
    aftercareItems: [
      "تنظيف الأسنان بعناية حول الأقواس بعد كل وجبة",
      "تجنب الأطعمة اللزجة والقاسية التي قد تكسر الأقواس",
      "ارتداء المثبت بانتظام بعد إزالة التقويم حسب تعليمات الطبيب",
      "استخدام الشمع الواقي في حال وجود احتكاك مع الخد",
      "الالتزام بمواعيد المتابعة الشهرية",
    ],
    faqs: [
      { q: "ما هو العمر المناسب لبدء التقويم؟", a: "يمكن بدء التقويم الوقائي من عمر 7 سنوات. التقويم الشامل عادة يبدأ بعد اكتمال الأسنان الدائمة (12-14 سنة). كما يمكن للبالغين في أي عمر الاستفادة من التقويم." },
      { q: "هل التقويم مؤلم؟", a: "قد يكون هناك ضغط خفيف وانزعاج في الأيام الأولى بعد كل تعديل، لكنه يزول سريعاً. التقويم الشفاف عادة أقل إزعاجاً من المعدني." },
      { q: "ما الفرق بين التقويم المعدني والشفاف؟", a: "التقويم المعدني أكثر فعالية في الحالات المعقدة وأقل تكلفة. التقويم الشفاف (Invisalign) غير مرئي ومريح أكثر لكن مناسب للحالات البسيطة والمتوسطة." },
      { q: "كم تكلفة التقويم؟", a: "تختلف التكلفة حسب نوع التقويم ومدة العلاج وصعوبة الحالة. يتم تحديد السعر بعد الفحص والتشخيص الكامل." },
      { q: "هل يمكن تقويم الأسنان للبالغين؟", a: "نعم بالتأكيد. كثير من البالغين يجرون التقويم بنجاح. التقويم الشفاف خيار ممتاز للبالغين الذين يفضلون مظهراً غير ملحوظ." },
      { q: "كم مرة يجب زيارة العيادة أثناء التقويم؟", a: "عادة كل 4-6 أسابيع لتعديل الأسلاك ومتابعة تقدم العلاج. مع التقويم الشفاف قد تكون الزيارات أقل تواتراً." },
    ],
  },
  he: {
    seoTitle: "יישור שיניים ברמאללה | פלטות שקופות ומתכתיות – ד״ר מוחמד סוואלחי",
    seoDesc: "יישור שיניים לילדים ומבוגרים ברמאללה. פלטות שקופות, מתכתיות ו-Invisalign. הזמן ייעוץ חינם עם ד״ר מוחמד סוואלחי.",
    intro: "תיקון יישור השיניים לא רק נותן לך חיוך יפה, אלא גם משפר את תפקוד הלעיסה ושומר על בריאות החניכיים. אנו מציעים מגוון סוגי יישור המתאימים לכל הגילאים והמקרים.",
    featuresTitle: "אפשרויות היישור הזמינות:",
    features: [
      "יישור מתכתי מסורתי",
      "יישור קרמי (שקוף) בלתי נראה",
      "יישור נשלף (Invisalign)",
      "יישור מונע לילדים",
    ],
    whoItems: [
      "מי שסובל מצפיפות או רווחים בין השיניים",
      "מי שיש לו נשיכה לא תקינה (פתוחה, עמוקה או הפוכה)",
      "ילדים מגיל 7 ליישור מונע מוקדם",
      "מבוגרים שרוצים לשפר את החיוך שלהם עם יישור שקוף",
    ],
    steps: [
      { title: "בדיקה ואבחון", desc: "צילומים פנורמיים וצפאלומטריים ובדיקה קלינית מקיפה לקביעת תוכנית טיפול." },
      { title: "התקנת היישור", desc: "התקנת הסוגריים או התבניות השקופות בהתאם לתוכנית הטיפול שנבחרה." },
      { title: "ביקורי מעקב", desc: "ביקורים חודשיים להתאמת חוטים והערכת התקדמות הטיפול." },
      { title: "הסרה ומייצב", desc: "הסרת היישור לאחר השגת התוצאה והתקנת מייצב קבוע או נשלף." },
    ],
    duration: "משך היישור נע בין 12 ל-24 חודשים בהתאם למצב השיניים ולסוג היישור. מקרים פשוטים עשויים לדרוש 6-12 חודשים בלבד. יש לענוד את המייצב לאחר הטיפול להבטחת יציבות התוצאה.",
    aftercareItems: [
      "צחצוח שיניים בקפדנות סביב הסוגריים לאחר כל ארוחה",
      "הימנעות ממזון דביק וקשה שעלול לשבור את הסוגריים",
      "עניבת המייצב באופן סדיר לאחר הסרת היישור לפי הוראות הרופא",
      "שימוש בשעווה מגינה במקרה של חיכוך עם הלחי",
      "הקפדה על תורי מעקב חודשיים",
    ],
    faqs: [
      { q: "מה הגיל המתאים להתחלת יישור?", a: "ניתן להתחיל יישור מונע מגיל 7. יישור מקיף מתחיל בדרך כלל לאחר השלמת השיניים הקבועות (12-14). גם מבוגרים בכל גיל יכולים ליהנות מיישור." },
      { q: "האם היישור כואב?", a: "ייתכן לחץ קל ואי-נוחות בימים הראשונים לאחר כל התאמה, אך זה חולף מהר. יישור שקוף בדרך כלל פחות מפריע ממתכתי." },
      { q: "מה ההבדל בין יישור מתכתי לשקוף?", a: "יישור מתכתי יעיל יותר במקרים מורכבים ופחות יקר. יישור שקוף (Invisalign) בלתי נראה ונוח יותר אך מתאים למקרים פשוטים ובינוניים." },
      { q: "מה עלות היישור?", a: "העלות משתנה בהתאם לסוג היישור, משך הטיפול ורמת הקושי של המקרה. המחיר נקבע לאחר בדיקה ואבחון מלא." },
      { q: "האם ניתן ליישר שיניים למבוגרים?", a: "כן, בהחלט. מבוגרים רבים עוברים יישור בהצלחה. יישור שקוף הוא אפשרות מצוינת למבוגרים שמעדיפים מראה לא בולט." },
      { q: "כמה פעמים צריך לבקר במרפאה במהלך היישור?", a: "בדרך כלל כל 4-6 שבועות להתאמת חוטים ומעקב אחר התקדמות הטיפול. עם יישור שקוף הביקורים עשויים להיות פחות תכופים." },
    ],
  },
};

export default function Orthodontics() {
  const { t, lang } = useLanguage();
  const c = content[lang];

  const faqJsonLd = faqSchema(c.faqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div className="pt-32 pb-24">
      <SEOHead title={c.seoTitle} description={c.seoDesc} path="/services/orthodontics" />
      <JsonLd data={faqJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: t.breadcrumb_home, href: "/" },
            { label: t.breadcrumb_services, href: "/#services" },
            { label: t.srv_ortho },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-bold rounded-full mb-6 text-sm">
              {t.nav_services}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6" data-testid="text-ortho-title">{t.srv_ortho}</h1>
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

            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1" data-testid="link-ortho-contact">
              {t.book_now} <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=800&h=1000&fit=crop"
              alt={t.srv_ortho}
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

        <section className="mb-20" data-testid="section-faq-ortho">
          <h2 className="text-3xl font-bold mb-6">{t.faq_title}</h2>
          <Accordion type="single" collapsible className="w-full">
            {c.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-right font-semibold" data-testid={`faq-trigger-ortho-${i}`}>
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