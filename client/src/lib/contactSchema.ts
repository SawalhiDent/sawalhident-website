import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "الاسم مطلوب"),
  phone: z.string().min(1, "رقم الهاتف مطلوب"),
  message: z.string().min(1, "الرسالة مطلوبة"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
