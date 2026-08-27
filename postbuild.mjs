/* The concept page has no interactivity by design, so the React runtime is
   dead weight on exactly the connections this page argues about. Strip the
   scripts, inline the stylesheet so the page is a single request, then
   measure what is actually left rather than claiming a number. */
import { readFileSync, writeFileSync, readdirSync, rmSync, statSync, existsSync } from "fs";
import { join } from "path";

const htmlPath = join("out", "index.html");
let s = readFileSync(htmlPath, "utf8");
const before = Buffer.byteLength(s);

/* 1. inline the emitted stylesheet, then drop the link */
const cssDir = join("out", "_next", "static", "css");
let css = "";
if (existsSync(cssDir)) {
  for (const f of readdirSync(cssDir).filter((f) => f.endsWith(".css"))) {
    css += readFileSync(join(cssDir, f), "utf8");
  }
}
if (!css) throw new Error("no stylesheet found to inline, aborting rather than shipping an unstyled page");
s = s.replace(/<link[^>]+href="\/_next\/static\/css\/[^"]+"[^>]*\/?>/g, "");
s = s.replace("</head>", `<style>${css}</style></head>`);

/* 2. remove every script: external, inline runtime, and preloads */
s = s.replace(/<script[^>]*>[\s\S]*?<\/script>/g, "");
s = s.replace(/<link[^>]+as="script"[^>]*\/?>/g, "");

writeFileSync(htmlPath, s);

/* 3. the _next payload is now entirely unreferenced */
rmSync(join("out", "_next"), { recursive: true, force: true });
rmSync(join("out", "index.txt"), { force: true });

const bytes = statSync(htmlPath).size;
const kb = (bytes / 1024).toFixed(0);
console.log(`html before : ${(before / 1024).toFixed(1)}KB`);
console.log(`html after  : ${kb}KB  (css inlined, all scripts removed)`);
console.log(`scripts left: ${(s.match(/<script/g) || []).length}`);
console.log(`css inlined : ${(Buffer.byteLength(css) / 1024).toFixed(1)}KB`);

/* 4. write the measured figure back into the page, so the number the
      document quotes about itself is the number it actually weighs */
s = s.replace(/__WEIGHT__/g, `${kb}KB`);
writeFileSync(htmlPath, s);
writeFileSync("weight.txt", kb);
console.log(`stamped      : __WEIGHT__ -> ${kb}KB`);
