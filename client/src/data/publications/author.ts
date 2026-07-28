import type { Author } from "./types";

export const DR_SAWALHI: Author = {
  id: "mohamed-sawalhi",
  nameAr: "د. محمد صوالحي",
  nameEn: "Dr. Mohamed Sawalhi",
  titleAr: "طبيب أسنان مختص — رام الله",
  titleEn: "Dental Specialist — Ramallah",
  bioAr:
    "طبيب أسنان مختص متخرج من جامعة الأمريكية في جنين، حاصل على رخصة مزاولة المهنة من وزارة الصحة الفلسطينية والبورد الفلسطيني في طب الأسنان العام، وعلى دبلوم في زراعة الأسنان من الجمعية الفلسطينية لزراعة الأسنان. يُقدّم عيادته في رام الله خدمات أسنان متكاملة بأحدث الأجهزة الرقمية، وانطلاقاً من اهتمامه بالتعليم الطبي المستمر، يُصدر مؤلفات علمية مجانية لدعم أطباء وطلاب طب الأسنان في العالم العربي.",
  photo: "", // ضع رابط الصورة الشخصية هنا
  specializationsAr: [
    "زراعة الأسنان (Implantology)",
    "تجميل الأسنان (Esthetic Dentistry)",
    "تقويم الأسنان (Orthodontics)",
  ],
  credentialsAr: [
    "BDS — جامعة الأمريكية في جنين",
    "رخصة مزاولة المهنة — وزارة الصحة الفلسطينية",
    "البورد الفلسطيني في طب الأسنان العام",
    "Dental Implant Practitioner",
    "دبلوم في زراعة الأسنان — الجمعية الفلسطينية لزراعة الأسنان",
  ],
  clinicUrl: "/",
};

export const AUTHORS: Record<string, Author> = {
  "mohamed-sawalhi": DR_SAWALHI,
};
