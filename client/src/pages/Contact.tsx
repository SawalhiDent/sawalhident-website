import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/contactSchema";
import { useSubmitContact } from "@/hooks/use-contact";
import { MapPin, Phone, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Contact() {
  const { t, lang } = useLanguage();
  const { toast } = useToast();
  const submitMutation = useSubmitContact();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", phone: "", message: "" }
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: t.form_success,
          description: t.form_success_desc,
          variant: "default",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: t.form_error,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title={lang === "ar" ? "اتصل بنا | صوالحي دنت – رام الله" : "צור קשר | סוואלחי דנט – רמאללה"}
        description={lang === "ar" ? "تواصل مع عيادة د. محمد صوالحي في رام الله. احجز موعدك عبر الهاتف أو الواتساب." : "צור קשר עם מרפאת ד״ר מוחמד סוואלחי ברמאללה. הזמן תור בטלפון או בוואטסאפ."}
        path="/contact"
      />
      <JsonLd data={localBusinessSchema(lang)} />

      <Breadcrumbs items={[
        { label: t.breadcrumb_home, href: "/" },
        { label: t.contact_title },
      ]} />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-primary mb-6" data-testid="text-contact-title">{t.contact_title}</h1>
        <p className="text-xl text-muted-foreground" data-testid="text-contact-subtitle">{t.contact_subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-black/5 border border-border">
            <h3 className="text-2xl font-bold mb-8" data-testid="text-contact-info">{t.contact_info}</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm text-muted-foreground">{t.contact_address_label}</p>
                  <p className="font-semibold text-lg">{t.address_full}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm text-muted-foreground">{t.contact_phone_label}</p>
                  <a href="tel:+970598703536" className="font-semibold text-lg hover:text-accent transition-colors" dir="ltr" data-testid="link-phone">{t.phone}</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm text-muted-foreground">{t.contact_hours_label}</p>
                  <p className="font-semibold text-lg">{t.working_hours_short}</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://wa.me/970598703536"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2"
                data-testid="link-whatsapp-contact"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766 0 1.252.326 2.474.945 3.553l-1.025 3.748 3.839-1.008c1.037.562 2.203.859 3.404.86h.004c3.181 0 5.768-2.586 5.768-5.766 0-3.181-2.587-5.768-5.767-5.768z"/></svg>
                {t.whatsapp_book}
              </a>
              <a
                href="tel:+970598703536"
                className="bg-primary text-white px-6 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2"
                data-testid="link-call-contact"
              >
                <Phone className="w-5 h-5" />
                {t.call_now}
              </a>
            </div>
          </div>

          <div className="bg-muted w-full h-64 rounded-[2rem] overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108252.1264426543!2d35.25016147285157!3d31.896791200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce5ca19bf08db%3A0xc331ec38ef4c2e64!2sRamallah!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Ramallah"
            />
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground bg-primary/5 p-4 rounded-xl">
            <Shield className="w-5 h-5 text-accent shrink-0" />
            <p>{t.contact_privacy}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 bg-white p-8 sm:p-12 rounded-[2rem] shadow-xl shadow-black/5 border border-border"
        >
          <h3 className="text-3xl font-bold mb-8 text-primary" data-testid="text-send-message">{t.send_message}</h3>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
            <div>
              <label className="block text-sm font-bold text-primary mb-2">{t.form_name}</label>
              <input
                {...form.register("name")}
                className="w-full px-5 py-4 rounded-xl bg-muted border-2 border-transparent focus:border-accent focus:bg-white focus:outline-none transition-all"
                placeholder={lang === "ar" ? "أدخل اسمك الكريم" : "הכנס את שמך"}
                data-testid="input-name"
              />
              {form.formState.errors.name && <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-primary mb-2">{t.form_phone}</label>
              <input
                {...form.register("phone")}
                dir="ltr"
                className="w-full px-5 py-4 rounded-xl bg-muted border-2 border-transparent focus:border-accent focus:bg-white focus:outline-none transition-all text-end"
                placeholder="059-000-0000"
                data-testid="input-phone"
              />
              {form.formState.errors.phone && <p className="text-destructive text-sm mt-1">{form.formState.errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-primary mb-2">{t.form_msg}</label>
              <textarea
                {...form.register("message")}
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-muted border-2 border-transparent focus:border-accent focus:bg-white focus:outline-none transition-all resize-none"
                placeholder={lang === "ar" ? "كيف يمكننا مساعدتك؟" : "איך נוכל לעזור לך?"}
                data-testid="input-message"
              />
              {form.formState.errors.message && <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitMutation.isPending}
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all disabled:opacity-70"
              data-testid="button-submit"
            >
              {submitMutation.isPending ? t.form_sending : t.form_submit}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
