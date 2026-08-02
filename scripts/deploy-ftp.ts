/**
 * نشر مباشر إلى Hostinger عبر FTP
 * الاستخدام: npm run deploy
 * يتطلب: متغير البيئة FTP_PASSWORD في Replit Secrets
 */

import * as ftp from "basic-ftp";
import * as fs from "fs";
import * as path from "path";

const FTP_HOST = "195.35.51.165";
const FTP_PORT = 21;
const FTP_USER = "u873901083";
const LOCAL_DIR = "./dist/public";

async function uploadDir(
  client: ftp.Client,
  localDir: string,
  remoteDir: string
) {
  const entries = fs.readdirSync(localDir, { withFileTypes: true });

  for (const entry of entries) {
    const localPath = path.join(localDir, entry.name);
    const remotePath = `${remoteDir}/${entry.name}`;

    if (entry.isDirectory()) {
      try {
        await client.ensureDir(remotePath);
      } catch {}
      await uploadDir(client, localPath, remotePath);
      // العودة للمجلد الأصلي بعد كل subdirectory
      await client.cd(remoteDir === "/" ? "/" : remoteDir);
    } else {
      process.stdout.write(`  ↑ ${remotePath}\n`);
      await client.uploadFrom(localPath, remotePath);
    }
  }
}

async function deploy() {
  const password = process.env.FTP_PASSWORD;
  if (!password) {
    console.error(
      "\n❌ FTP_PASSWORD غير موجود.\nأضفه في Replit Secrets باسم: FTP_PASSWORD\n"
    );
    process.exit(1);
  }

  if (!fs.existsSync(LOCAL_DIR)) {
    console.error(
      `\n❌ مجلد البناء غير موجود: ${LOCAL_DIR}\nشغّل: npm run build:client أولاً\n`
    );
    process.exit(1);
  }

  const client = new ftp.Client();
  client.ftp.verbose = false;

  try {
    console.log(`\n🔌 جاري الاتصال بـ ${FTP_HOST}:${FTP_PORT}...`);
    await client.access({
      host: FTP_HOST,
      port: FTP_PORT,
      user: FTP_USER,
      password,
      secure: false,
    });
    console.log("✅ متصل");

    console.log(`\n📤 رفع الملفات من ${LOCAL_DIR} → /\n`);
    const start = Date.now();

    await uploadDir(client, LOCAL_DIR, "/");

    const seconds = ((Date.now() - start) / 1000).toFixed(1);
    console.log(`\n🎉 اكتمل النشر في ${seconds} ثانية`);
    console.log("🌐 https://sawalhident.com\n");
  } catch (err) {
    console.error("\n❌ فشل النشر:", err);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
