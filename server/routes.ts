import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sawalhimw@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendEmailNotification(name: string, phone: string, message: string) {
  try {
    await transporter.sendMail({
      from: '"Sawalhi Dent Website" <sawalhimw@gmail.com>',
      to: "sawalhimw@gmail.com",
      subject: `رسالة جديدة من الموقع - ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #152238;">رسالة جديدة من موقع صوالحي دنت</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">الاسم</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">الهاتف</td>
              <td style="padding: 10px; border: 1px solid #ddd;" dir="ltr">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">الرسالة</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
          <p style="color: #888; margin-top: 20px; font-size: 12px;">تم إرسال هذه الرسالة من نموذج التواصل في موقع صوالحي دنت</p>
        </div>
      `,
    });
    console.log("Email notification sent successfully");
  } catch (err) {
    console.error("Failed to send email notification:", err);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);

      sendEmailNotification(input.name, input.phone, input.message);

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error("Failed to create contact message", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
