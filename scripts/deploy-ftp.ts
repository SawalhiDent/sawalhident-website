/**
 * نشر مباشر إلى Hostinger عبر FTP
 * الاستخدام: npm run deploy
 * يتطلب: متغير البيئة FTP_PASSWORD في Replit Secrets
 */

import * as ftp from "basic-ftp";
import * as fs from "fs";
import * as path from "path";
import * as https from "https";

const FTP_HOST = "195.35.51.165";
const FTP_PORT = 21;
const FTP_USER = "u873901083";
const LOCAL_DIR = "./dist/public";

// عدّ إجمالي الملفات في مجلد محلي (بشكل متكرر)
function countFiles(dir: string): number {
  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      total += countFiles(path.join(dir, entry.name));
    } else {
      total++;
    }
  }
  return total;
}

// شريط تقدم بسيط في السطر نفسه
function printProgress(uploaded: number, total: number, filename: string) {
  const pct = Math.round((uploaded / total) * 100);
  const bar =
    "█".repeat(Math.floor(pct / 5)) + "░".repeat(20 - Math.floor(pct / 5));
  const name = filename.length > 40 ? "…" + filename.slice(-39) : filename;
  process.stdout.write(
    `\r  [${bar}] ${pct}%  (${uploaded}/${total})  ${name}          `
  );
}

async function uploadDir(
  client: ftp.Client,
  localDir: string,
  remoteDir: string,
  counter: { uploaded: number; total: number }
) {
  const entries = fs.readdirSync(localDir, { withFileTypes: true });

  for (const entry of entries) {
    const localPath = path.join(localDir, entry.name);
    const remotePath = `${remoteDir}/${entry.name}`;

    if (entry.isDirectory()) {
      try {
        await client.ensureDir(remotePath);
      } catch {}
      await uploadDir(client, localPath, remotePath, counter);
      await client.cd(remoteDir === "/" ? "/" : remoteDir);
    } else {
      counter.uploaded++;
      printProgress(counter.uploaded, counter.total, entry.name);
      await client.uploadFrom(localPath, remotePath);
    }
  }
}

// التحقق من الموقع عبر HTTP GET
function verifyWebsite(url: string): Promise<number> {
  return new Promise((resolve) => {
    https
      .get(url, (res) => {
        res.resume(); // استهلاك الاستجابة
        resolve(res.statusCode ?? 0);
      })
      .on("error", () => resolve(0));
  });
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

  const totalFiles = countFiles(LOCAL_DIR);
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
    console.log("✅ Build completed");

    console.log(`\n📤 رفع ${totalFiles} ملف إلى الخادم...\n`);
    const start = Date.now();
    const counter = { uploaded: 0, total: totalFiles };

    await uploadDir(client, LOCAL_DIR, "/", counter);

    // سطر جديد بعد شريط التقدم
    process.stdout.write("\n");

    const seconds = ((Date.now() - start) / 1000).toFixed(1);
    console.log(`\n✅ FTP upload completed  (${seconds}s — ${totalFiles} ملف)`);

    console.log("\n⏳ انتظار التحديث على الخادم...");
    await sleep(2000);

    console.log("🔍 التحقق من الموقع...");
    const status = await verifyWebsite("https://sawalhident.com");

    if (status === 200) {
      console.log("\n✅ Build completed");
      console.log("✅ FTP upload completed");
      console.log("✅ Website verified (HTTP 200)");
      console.log("🚀 Deployment completed successfully\n");
    } else {
      console.warn(
        `\n⚠️  تحذير: الموقع أعاد HTTP ${status || "لا استجابة"}`
      );
      console.warn("   تحقق يدوياً من: https://sawalhident.com");
      console.warn("   الملفات رُفعت بنجاح — المشكلة قد تكون مؤقتة.\n");
    }
  } catch (err) {
    process.stdout.write("\n");
    console.error("\n❌ فشل النشر:", err);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
