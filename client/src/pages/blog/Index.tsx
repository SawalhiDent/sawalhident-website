import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { ArrowLeft, Calendar } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const postsData = {
  ar: [
    {
      id: "implant-cost-ramallah",
      title: "تكلفة زراعة الأسنان في رام الله: دليلك الشامل",
      excerpt: "تعرف على العوامل التي تؤثر على تكلفة زراعة الأسنان ولماذا تعتبر استثماراً طويل الأمد في صحتك.",
      date: "2024-05-15",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    },
    {
      id: "hollywood-smile",
      title: "ابتسامة هوليود: كل ما تحتاج معرفته عن قشور الفينير",
      excerpt: "كيف تحصل على الابتسامة المثالية التي طالما حلمت بها باستخدام قشور الفينير التجميلية الرقيقة.",
      date: "2024-06-02",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    },
    {
      id: "best-dentist-ramallah",
      title: "كيف تختار أفضل طبيب أسنان في رام الله؟",
      excerpt: "دليلك الشامل لاختيار طبيب أسنان موثوق ومحترف في رام الله مع نصائح عملية.",
      date: "2024-07-10",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    },
    {
      id: "is-implant-painful",
      title: "هل زراعة الأسنان مؤلمة؟ الحقيقة الكاملة",
      excerpt: "تعرف على حقيقة الألم أثناء وبعد زراعة الأسنان وكيف نضمن تجربة مريحة بدون ألم.",
      date: "2024-08-05",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    },
    {
      id: "braces-duration",
      title: "كم مدة تقويم الأسنان؟ دليل شامل لفترات العلاج",
      excerpt: "تعرف على المدة المتوقعة لعلاج تقويم الأسنان حسب نوع التقويم وحالة الأسنان.",
      date: "2024-09-01",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    },
  ],
  he: [
    {
      id: "implant-cost-ramallah",
      title: "עלות השתלת שיניים ברמאללה: המדריך המלא שלך",
      excerpt: "גלו את הגורמים המשפיעים על עלות השתלת שיניים ולמה מדובר בהשקעה לטווח ארוך בבריאותך.",
      date: "2024-05-15",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    },
    {
      id: "hollywood-smile",
      title: "חיוך הוליוודי: כל מה שצריך לדעת על ציפויי חרסינה",
      excerpt: "איך להשיג את החיוך המושלם שתמיד חלמתם עליו באמצעות ציפויי חרסינה אסתטיים דקים.",
      date: "2024-06-02",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    },
    {
      id: "best-dentist-ramallah",
      title: "איך לבחור את רופא השיניים הטוב ביותר ברמאללה?",
      excerpt: "המדריך המלא שלך לבחירת רופא שיניים אמין ומקצועי ברמאללה עם טיפים מעשיים.",
      date: "2024-07-10",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    },
    {
      id: "is-implant-painful",
      title: "האם השתלת שיניים כואבת? האמת המלאה",
      excerpt: "גלו את האמת על כאב במהלך ואחרי השתלת שיניים וכיצד אנו מבטיחים חוויה נוחה וללא כאב.",
      date: "2024-08-05",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    },
    {
      id: "braces-duration",
      title: "כמה זמן לוקח יישור שיניים? מדריך מלא לתקופות הטיפול",
      excerpt: "גלו את משך הטיפול הצפוי ליישור שיניים לפי סוג היישור ומצב השיניים.",
      date: "2024-09-01",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    },
  ],
};

const pageContent = {
  ar: {
    title: "المدونة",
    seoTitle: "مدونة عيادة د. محمد صوالحي – مقالات طب الأسنان",
    seoDesc: "مقالات ونصائح طبية للحفاظ على صحة وجمال أسنانك من عيادة د. محمد صوالحي في رام الله.",
    subtitle: "مقالات ونصائح طبية للحفاظ على صحة وجمال أسنانك.",
    readMore: "اقرأ المزيد",
  },
  he: {
    title: "בלוג",
    seoTitle: "בלוג מרפאת ד״ר מוחמד סוואלחי – מאמרי רפואת שיניים",
    seoDesc: "מאמרים וטיפים רפואיים לשמירה על בריאות ויופי השיניים שלך ממרפאת ד״ר מוחמד סוואלחי ברמאללה.",
    subtitle: "מאמרים וטיפים רפואיים לשמירה על בריאות ויופי השיניים שלך.",
    readMore: "קרא עוד",
  },
};

export default function BlogIndex() {
  const { lang } = useLanguage();
  const posts = postsData[lang];
  const pc = pageContent[lang];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead title={pc.seoTitle} description={pc.seoDesc} path="/blog" />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-primary mb-6" data-testid="text-blog-title">{pc.title}</h1>
        <p className="text-xl text-muted-foreground">{pc.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border group h-full flex flex-col" data-testid={`card-blog-${post.id}`}>
              <div className="h-52 overflow-hidden relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 start-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> {post.date}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{post.title}</h2>
                <p className="text-muted-foreground mb-4 flex-grow text-sm">{post.excerpt}</p>
                <div className="text-accent font-bold flex items-center gap-2 text-sm">
                  {pc.readMore} <ArrowLeft className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
