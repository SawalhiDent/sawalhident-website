# دليل النشر — صوالحي دنت

## البيئات

| البيئة | الدور |
|--------|-------|
| **Replit** | بيئة التطوير — هنا يتم كتابة الكود وتشغيله واختباره |
| **GitHub** | حفظ الكود (Source Control) فقط — لا يُستخدم للنشر |
| **Hostinger** | الاستضافة الإنتاجية — يستقبل الملفات المبنية |

---

## أمر النشر الرسمي

```bash
npm run publish
```

يُنفَّذ هذا الأمر **داخل Replit** فقط (Terminal أو Workflow "Publish Website").

---

## ما يفعله أمر النشر

```
npm run publish
  └── npm run deploy
        ├── npm run build:client   ← يبني الموقع في dist/public/
        └── tsx scripts/deploy-ftp.ts  ← يرفع الملفات إلى Hostinger عبر FTP
```

---

## الملفات المرفوعة

محتويات مجلد `dist/public/` بالكامل، وهي الملفات المبنية النهائية:
- `index.html`
- `assets/` (JS، CSS)
- `images/`
- `publications/`
- `sitemap.xml`، `robots.txt`، `.htaccess`

---

## إعدادات FTP

| الإعداد | القيمة |
|---------|--------|
| Host | `195.35.51.165` |
| Port | `21` |
| Username | `u873901083` |
| Password | محفوظة في **Replit Secrets** باسم `FTP_PASSWORD` — لا تُكتب في الكود |
| وجهة الرفع | جذر حساب FTP (`/`) الذي يمثل `public_html` على Hostinger |

---

## ما لا يُستخدم للنشر

- ❌ **GitHub Actions** — غير مُفعَّل للنشر
- ❌ **Hostinger Git Deploy** — غير مُستخدَم
- ❌ **ملفات ZIP** — لا يتم ضغط الملفات قبل الرفع

---

## ملاحظات

- تأكد من وجود `FTP_PASSWORD` في Replit Secrets قبل تشغيل النشر.
- إذا فشل النشر بسبب انتهاء مهلة الاتصال، أعد المحاولة — المشكلة عادةً مؤقتة.
- الـ Workflow **"Publish Website"** داخل Replit يُشغّل `npm run publish` مباشرة.
