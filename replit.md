# Dr. Sawalhi Dental Clinic (صوالحي دنت)

## Overview
A bilingual (Arabic/Hebrew) dental clinic website for Dr. Muhammad Sawalhi in Ramallah, Palestine. Built with React, Vite, Express, and PostgreSQL. Optimized for Local SEO, AI Search, and high conversion.

## Architecture
- **Frontend**: React (Vite) + TailwindCSS + shadcn/ui + Framer Motion
- **Backend**: Express.js + PostgreSQL (Drizzle ORM)
- **Languages**: Arabic (AR) and Hebrew (HE), both RTL
- **Fonts**: Cairo (Arabic), Heebo (Hebrew)
- **Colors**: Dark Navy Blue (primary), Bright Cyan (accent/CTA)

## Key Features
- Bilingual RTL support with language toggle
- Contact form saving to PostgreSQL database
- JSON-LD structured data (LocalBusiness, FAQPage, BlogPosting, BreadcrumbList, AggregateRating, Review)
- SEO meta tags dynamically set per page
- Floating WhatsApp CTA button
- 20 Local SEO pages (10 Arabic + 10 Hebrew) targeting Ramallah keywords
- 5 Blog articles with BlogPosting schema
- FAQ accordions with FAQPage schema
- Before/After gallery
- Testimonials with review schema
- sitemap.xml with hreflang alternates and robots.txt

## Pages Structure
- `/` - Home (Hero, Quick Answer, Services, Local Pages, Why Us, Before/After, Testimonials, FAQ, CTA)
- `/about` - About the clinic
- `/contact` - Contact form + Google Maps + WhatsApp/Phone
- `/services/implants` - Dental Implants
- `/services/cosmetic` - Cosmetic Dentistry
- `/services/orthodontics` - Orthodontics
- `/blog` - Blog index
- `/blog/implant-cost-ramallah` - Article
- `/blog/hollywood-smile` - Article
- `/blog/best-dentist-ramallah` - Article
- `/blog/is-implant-painful` - Article
- `/blog/braces-duration` - Article
- `/ar/:slug.html` - 10 Arabic Local SEO pages (dentist-ramallah, dental-clinic-ramallah, etc.)
- `/he/:slug.html` - 10 Hebrew Local SEO pages (same slugs, Hebrew content)

## Local SEO Page Slugs
dentist-ramallah, dental-clinic-ramallah, dental-implants-ramallah, implant-cost-ramallah, orthodontics-ramallah, teeth-whitening-ramallah, hollywood-smile-ramallah, root-canal-ramallah, gum-treatment-ramallah, emergency-dentist-ramallah

## Key Files
- `client/src/lib/translations.ts` - All bilingual content
- `client/src/context/LanguageContext.tsx` - Language provider
- `client/src/components/SEOHead.tsx` - Dynamic meta tags
- `client/src/components/JsonLd.tsx` - JSON-LD schema helpers
- `client/src/components/Breadcrumbs.tsx` - Breadcrumb component
- `client/src/components/CTASection.tsx` - Reusable CTA section
- `client/src/pages/local/localData.ts` - Local SEO page content (10 pages × 2 languages)
- `client/src/pages/local/LocalSEOPage.tsx` - Local SEO page template + localPageHref helper
- `shared/routes.ts` - API route definitions
- `shared/schema.ts` - Database schema + Zod validation

## Database
- Table: `contact_messages` (id, name, phone, message, created_at)
- API: POST `/api/contact`
