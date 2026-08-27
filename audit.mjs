import { chromium } from "playwright";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
await p.goto("file://" + process.cwd() + "/out/index.html", { waitUntil: "networkidle" });
await p.waitForTimeout(1500);

const findings = await p.evaluate(() => {
  const px = (c) => { const m = c.match(/[\d.]+/g).map(Number); return m; };
  const sr = (v) => { v /= 255; return v <= .04045 ? v/12.92 : ((v+.055)/1.055)**2.4; };
  const lum = ([r,g,b]) => .2126*sr(r) + .7152*sr(g) + .0722*sr(b);
  const ratio = (f, bg) => { const a = lum(f), c = lum(bg); const hi = Math.max(a,c), lo = Math.min(a,c); return (hi+.05)/(lo+.05); };

  // walk up for the first opaque background actually painted behind the node
  const groundOf = (el) => {
    let n = el;
    while (n && n !== document.documentElement) {
      const bgc = getComputedStyle(n).backgroundColor;
      const c = px(bgc);
      if (c.length >= 3 && (c[3] === undefined || c[3] > .95)) return c.slice(0,3);
      n = n.parentElement;
    }
    return [11,18,16];
  };

  const out = [];
  const nodes = document.querySelectorAll("body *");
  for (const el of nodes) {
    const direct = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
    if (!direct) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none" || +cs.opacity < .3) continue;
    const fg = px(cs.color).slice(0,3);
    const bg = groundOf(el);
    const size = parseFloat(cs.fontSize);
    const weight = +cs.fontWeight || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const need = large ? 3 : 4.5;
    const r = ratio(fg, bg);
    if (r < need) out.push({
      text: el.textContent.trim().slice(0, 58),
      cls: el.className?.toString().slice(0, 34) || el.tagName,
      ratio: +r.toFixed(2), need, size: +size.toFixed(1), weight,
      fg: cs.color, bg: `rgb(${bg.join(",")})`,
    });
  }
  return out;
});

console.log(findings.length ? `FAILURES: ${findings.length}` : "PASS: every rendered text node meets WCAG AA");
for (const f of findings) console.log(JSON.stringify(f));
await b.close();
