import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { CheckCircle2, ArrowLeft, Phone, Users, Clock, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
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
    seoTitle: "تجميل الأسنان في رام الله | ابتسامة هوليود – د. محمد صوالحي",
    seoDesc: "تجميل الأسنان وابتسامة هوليود في رام الله. فينير، تبييض بالليزر، وحشوات تجميلية. احجز استشارتك المجانية مع د. محمد صوالحي.",
    intro: "ابتسامتك هي سر جاذبيتك. نقدم لك حلول تجميل الأسنان المتقدمة مثل قشور الفينير (ابتسامة هوليود) وتبييض الأسنان بالليزر للحصول على أسنان ناصعة البياض وابتسامة لا تُنسى.",
    featuresTitle: "ماذا نقدم في تجميل الأسنان:",
    features: [
      "ابتسامة هوليود (الفينير واللومينير)",
      "تبييض الأسنان الاحترافي بالليزر",
      "قص وتجميل اللثة",
      "الحشوات التجميلية المطابقة للون السن",
    ],
    whoItems: [
      "من يعاني من تصبغات أو اصفرار الأسنان",
      "من لديه فراغات أو تشققات في الأسنان الأمامية",
      "من يرغب بابتسامة متناسقة وجذابة (ابتسامة هوليود)",
      "من يريد تحسين شكل اللثة غير المتساوية",
    ],
    steps: [
      { title: "الاستشارة والتصميم", desc: "فحص شامل ومحاكاة رقمية لتصميم ابتسامتك المثالية قبل البدء." },
      { title: "التحضير", desc: "تحضير الأسنان بشكل دقيق (برد خفيف) أو بدون برد في حالة اللومينير." },
      { title: "التصنيع", desc: "تصنيع القشور الخزفية في مختبر متخصص بدقة عالية لمطابقة اللون والشكل." },
      { title: "التركيب النهائي", desc: "تثبيت القشور على الأسنان وتعديلها للحصول على نتيجة طبيعية مثالية." },
    ],
    duration: "تبييض الأسنان يتم في جلسة واحدة (45-60 دقيقة). ابتسامة هوليود (الفينير) تحتاج عادة 2-3 زيارات خلال أسبوعين. الحشوات التجميلية تنتهي في جلسة واحدة.",
    aftercareItems: [
      "تجنب الأطعمة والمشروبات الملونة لمدة 48 ساعة بعد التبييض",
      "عدم قضم الأطعمة القاسية جداً مع الفينير",
      "تنظيف الأسنان بانتظام واستخدام الخيط",
      "زيارة العيادة كل 6 أشهر للفحص والتلميع",
      "ارتداء واقي الأسنان الليلي إذا كنت تضغط على أسنانك أثناء النوم",
    ],
    faqs: [
      { q: "ما الفرق بين الفينير واللومينير؟", a: "الفينير يتطلب برد خفيف للأسنان، بينما اللومينير أرق ولا يحتاج لبرد. كلاهما يعطي نتائج ممتازة ويختار الطبيب الأنسب حسب حالتك." },
      { q: "كم يدوم تبييض الأسنان؟", a: "يدوم تأثير التبييض من 6 أشهر إلى سنتين حسب نمط الحياة والعناية بالأسنان. يمكن تجديده بجلسات دورية." },
      { q: "هل التبييض يضر بالأسنان؟", a: "لا، التبييض تحت إشراف طبي آمن تماماً ولا يؤثر على طبقة المينا. قد تحدث حساسية مؤقتة تزول خلال يومين." },
      { q: "كم يدوم الفينير؟", a: "الفينير الخزفي يدوم عادة 10-15 سنة مع العناية الجيدة. يمكن أن يستمر لفترة أطول حسب العناية." },
      { q: "ما تكلفة ابتسامة هوليود؟", a: "تختلف التكلفة حسب عدد الأسنان ونوع القشور المستخدمة. يتم تحديد السعر بعد الاستشارة والفحص." },
    ],
  },
  he: {
    seoTitle: "רפואת שיניים אסתטית ברמאללה | חיוך הוליוודי – ד״ר מוחמד סוואלחי",
    seoDesc: "רפואת שיניים אסתטית וחיוך הוליוודי ברמאללה. ציפויי חרסינה, הלבנה בלייזר ושיקומים אסתטיים. הזמן ייעוץ חינם עם ד״ר מוחמד סוואלחי.",
    intro: "החיוך שלך הוא סוד הקסם שלך. אנו מציעים לך פתרונות אסתטיים מתקדמים כמו ציפויי חרסינה (חיוך הוליוודי) והלבנת שיניים בלייזר לקבלת שיניים לבנות וחיוך בלתי נשכח.",
    featuresTitle: "מה אנו מציעים באסתטיקה:",
    features: [
      "חיוך הוליוודי (ציפויי חרסינה ולומינירס)",
      "הלבנת שיניים מקצועית בלייזר",
      "עיצוב וטיפול חניכיים",
      "סתימות אסתטיות בצבע השן",
    ],
    whoItems: [
      "מי שסובל מכתמים או הצהבת שיניים",
      "מי שיש לו רווחים או סדקים בשיניים הקדמיות",
      "מי שרוצה חיוך מאוזן ומושך (חיוך הוליוודי)",
      "מי שרוצה לשפר את צורת החניכיים הלא אחידות",
    ],
    steps: [
      { title: "ייעוץ ועיצוב", desc: "בדיקה מקיפה וסימולציה דיגיטלית לעיצוב החיוך המושלם שלך לפני ההתחלה." },
      { title: "הכנה", desc: "הכנת השיניים בדיוק (שיוף קל) או ללא שיוף במקרה של לומינירס." },
      { title: "ייצור", desc: "ייצור ציפויי החרסינה במעבדה מתמחה בדיוק גבוה להתאמת צבע וצורה." },
      { title: "התקנה סופית", desc: "הדבקת הציפויים על השיניים והתאמתם לקבלת תוצאה טבעית מושלמת." },
    ],
    duration: "הלבנת שיניים מתבצעת בישיבה אחת (45-60 דקות). חיוך הוליוודי (ציפויים) דורש בדרך כלל 2-3 ביקורים במשך שבועיים. סתימות אסתטיות מסתיימות בישיבה אחת.",
    aftercareItems: [
      "הימנעות ממזון ומשקאות צבעוניים 48 שעות לאחר הלבנה",
      "הימנעות מנגיסת מזון קשה מאוד עם ציפויים",
      "צחצוח שיניים סדיר ושימוש בחוט דנטלי",
      "ביקור במרפאה כל 6 חודשים לבדיקה וליטוש",
      "שימוש בסד לילי אם אתה לוחץ על השיניים בשינה",
    ],
    faqs: [
      { q: "מה ההבדל בין ציפויי חרסינה ללומינירס?", a: "ציפויי חרסינה דורשים שיוף קל של השיניים, בעוד לומינירס דקים יותר ואינם דורשים שיוף. שניהם נותנים תוצאות מצוינות והרופא בוחר את המתאים ביותר לפי מצבך." },
      { q: "כמה זמן מחזיקה הלבנה?", a: "אפקט ההלבנה מחזיק מ-6 חודשים עד שנתיים בהתאם לאורח החיים והטיפול בשיניים. ניתן לרענן בטיפולים תקופתיים." },
      { q: "האם ההלבנה מזיקה לשיניים?", a: "לא, הלבנה בפיקוח רפואי בטוחה לחלוטין ואינה פוגעת באמייל. ייתכנו רגישויות זמניות שחולפות תוך יומיים." },
      { q: "כמה זמן מחזיקים ציפויי חרסינה?", a: "ציפויי חרסינה מחזיקים בדרך כלל 10-15 שנים עם טיפול נכון. יכולים להחזיק יותר בהתאם לטיפול." },
      { q: "מה עלות חיוך הוליוודי?", a: "העלות משתנה בהתאם למספר השיניים ולסוג הציפויים. המחיר נקבע לאחר ייעוץ ובדיקה." },
    ],
  },
};

export default function Cosmetic() {
  const { t, lang } = useLanguage();
  const c = content[lang];

  const faqJsonLd = faqSchema(c.faqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div className="pt-32 pb-24">
      <SEOHead title={c.seoTitle} description={c.seoDesc} path="/services/cosmetic" />
      <JsonLd data={faqJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: t.breadcrumb_home, href: "/" },
            { label: t.breadcrumb_services, href: "/#services" },
            { label: t.srv_cosmetic },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1 relative h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=1000&fit=crop"
              alt={t.srv_cosmetic}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-bold rounded-full mb-6 text-sm">
              {t.nav_services}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6" data-testid="text-cosmetic-title">{t.srv_cosmetic}</h1>
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

            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1" data-testid="link-cosmetic-contact">
              {t.book_now} <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            </Link>
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
            <Sparkles className="w-7 h-7 text-accent" />
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

        <section className="mb-20" data-testid="section-faq-cosmetic">
          <h2 className="text-3xl font-bold mb-6">{t.faq_title}</h2>
          <Accordion type="single" collapsible className="w-full">
            {c.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-right font-semibold" data-testid={`faq-trigger-cosmetic-${i}`}>
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