import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Award, HeartPulse } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title={lang === "ar" ? "عن العيادة | صوالحي دنت – رام الله" : "אודות המרפאה | סוואלחי דנט – רמאללה"}
        description={lang === "ar" ? "تعرف على عيادة د. محمد صوالحي لطب وزراعة الأسنان في رام الله. خبرة واسعة وتقنيات حديثة." : "הכירו את מרפאת ד״ר מוחמד סוואלחי לרפואת שיניים והשתלות ברמאללה. ניסיון רב וטכנולוגיות מתקדמות."}
        path="/about"
      />
      <JsonLd data={localBusinessSchema(lang)} />

      <Breadcrumbs items={[
        { label: t.breadcrumb_home, href: "/" },
        { label: t.about_title },
      ]} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-5xl font-bold text-primary mb-6" data-testid="text-about-title">{t.about_title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-about-intro">
          {t.about_intro}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-accent rounded-[3rem] transform -rotate-3 scale-105 opacity-20" />
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=1000&fit=crop"
            alt={t.about_dr_name}
            className="relative z-10 rounded-[3rem] w-full shadow-2xl"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-primary" data-testid="text-dr-name">{t.about_dr_name}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-dr-desc">
            {t.about_dr_desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-6">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <Award className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">{t.about_cert}</h3>
              <p className="text-sm text-muted-foreground">{t.about_cert_desc}</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <HeartPulse className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">{t.about_care}</h3>
              <p className="text-sm text-muted-foreground">{t.about_care_desc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
