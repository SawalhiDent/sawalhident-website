import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteUrl } from "@/lib/siteConfig";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

export function SEOHead({ title, description, path, type = "website" }: SEOHeadProps) {
  const { lang } = useLanguage();
  const fullUrl = siteUrl(path);

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", fullUrl, true);
    setMeta("og:type", type, true);
    setMeta("og:locale", lang === "ar" ? "ar_SA" : "he_IL", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    const setLink = (rel: string, href: string, attrs?: Record<string, string>) => {
      const selector = attrs
        ? `link[rel="${rel}"]${Object.entries(attrs).map(([k, v]) => `[${k}="${v}"]`).join("")}`
        : `link[rel="${rel}"]`;
      let el = document.querySelector(selector) as HTMLLinkElement;
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        if (attrs) Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.href = href;
    };

    setLink("canonical", fullUrl);
    setLink("alternate", fullUrl, { hreflang: lang });
    setLink("alternate", fullUrl, { hreflang: lang === "ar" ? "he" : "ar" });

    return () => {};
  }, [title, description, fullUrl, lang, type]);

  return null;
}
