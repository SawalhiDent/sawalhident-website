import { useMutation } from "@tanstack/react-query";
import type { ContactFormData } from "@/lib/contactSchema";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await fetch("https://formsubmit.co/ajax/sawalhimw@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          message: data.message,
          _subject: `رسالة جديدة من الموقع - ${data.name}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      return res.json();
    },
  });
}
