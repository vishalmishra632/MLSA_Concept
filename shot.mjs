import { chromium } from "playwright";
import { readdirSync } from "fs";
const url = "file://" + process.cwd() + "/out/index.html";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });

// desktop: full page, then sliced so each section is legible
const p = await b.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
await p.goto(url, { waitUntil: "networkidle" });
await p.waitForTimeout(2500); // let webfonts settle
const h = await p.evaluate(() => document.body.scrollHeight);
console.log("page height:", h);
const SLICE = 1300;
let i = 0;
for (let y = 0; y < h; y += SLICE, i++) {
  await p.screenshot({ path: `shots/d${String(i).padStart(2,"0")}.png`, fullPage: true,
    clip: { x: 0, y, width: 1440, height: Math.min(SLICE, h - y) } });
}
// mobile
const m = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
await m.goto(url, { waitUntil: "networkidle" });
await m.waitForTimeout(2000);
await m.screenshot({ path: "shots/m-top.png", fullPage: false });
await b.close();
console.log("slices:", i, readdirSync("shots").length, "files");
