// Overflow probe: loads a URL once, then measures which elements exceed the viewport
// at a series of widths. Reports grouped by a stable selector path so a fix can be aimed.
// usage: node overflow.mjs [--url http://localhost:4321/] [--widths 1500,1200,980,820,620,390]
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf("--" + n); return i === -1 ? d : args[i + 1]; };
const URL_ = opt("url", "http://localhost:4321/");
const WIDTHS = opt("widths", "1500,1200,980,820,620,390").split(",").map(Number);
const TOP = +opt("top", 12);
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const profile = mkdtempSync(join(tmpdir(), "cdp-"));
const port = 9333 + Math.floor(Math.random() * 400);
const chrome = spawn(CHROME, [
  "--headless=new", "--disable-gpu", "--enable-unsafe-swiftshader", "--hide-scrollbars",
  "--no-first-run", "--no-default-browser-check", "--disable-extensions",
  `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
  "--window-size=1600,900", "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function targetWs() {
  for (let i = 0; i < 60; i++) {
    try {
      const list = await fetch(`http://127.0.0.1:${port}/json/list`).then((r) => r.json());
      const page = list.find((t) => t.type === "page");
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error("chrome devtools never came up");
}
const ws = new WebSocket(await targetWs());
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
let id = 0; const pending = new Map();
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
const evaluate = async (expr) => (await send("Runtime.evaluate", { expression: expr, returnByValue: true })).result?.result?.value;

await send("Runtime.enable");
await send("Page.enable");
await send("Page.navigate", { url: URL_ });
await sleep(4500);

// The probe. Runs inside the page. body{overflow-x:hidden} hides the damage visually, so we
// measure geometry, not scroll width. We report the OUTERMOST offender in each subtree:
// if a parent already overflows, its children are symptoms, not causes.
const PROBE = `(() => {
  const W = document.documentElement.clientWidth;
  const path = (el) => {
    let s = el.tagName.toLowerCase();
    if (el.id) s += "#" + el.id;
    const cls = (el.getAttribute("class") || "").trim().split(/\\s+/).filter(Boolean).slice(0, 3);
    if (cls.length) s += "." + cls.join(".");
    return s;
  };
  const over = [];
  for (const el of document.body.querySelectorAll("*")) {
    if (el.closest("svg") && el.tagName.toLowerCase() !== "svg") continue;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    const right = r.right - W, left = -r.left;
    const amt = Math.max(right, left);
    if (amt > 1) over.push({ el, amt, right: Math.round(r.right - W), left: Math.round(r.left) });
  }
  const set = new Set(over.map(o => o.el));
  const roots = over.filter(o => {
    let p = o.el.parentElement;
    while (p && p !== document.body) { if (set.has(p)) return false; p = p.parentElement; }
    return true;
  });
  // An offender inside a clipping/scrolling ancestor is contained, not a page-breaking bug.
  const clipped = (el) => {
    let p = el.parentElement;
    while (p && p !== document.documentElement) {
      const ox = getComputedStyle(p).overflowX;
      if (ox === "hidden" || ox === "clip" || ox === "auto" || ox === "scroll") return p;
      p = p.parentElement;
    }
    return null;
  };
  const groups = new Map();
  for (const o of roots) {
    const c = clipped(o.el);
    const k = path(o.el) + (c ? "   [clipped by " + path(c) + "]" : "");
    const g = groups.get(k) || { sel: k, n: 0, max: 0, side: "" };
    g.n++; if (o.amt > g.max) { g.max = Math.round(o.amt); g.side = o.right > o.left ? "R" : "L"; }
    groups.set(k, g);
  }
  return { total: over.length, roots: roots.length,
    scrollW: document.documentElement.scrollWidth, clientW: W,
    groups: [...groups.values()].sort((a, b) => b.max - a.max) };
})()`;

for (const w of WIDTHS) {
  await send("Emulation.setDeviceMetricsOverride", { width: w, height: 900, deviceScaleFactor: 1, mobile: false });
  await sleep(900);
  const r = await evaluate(PROBE);
  console.log(`\n=== ${w}px === total overflowing: ${r.total} (outermost causes: ${r.roots})  scrollW=${r.scrollW}`);
  for (const g of r.groups.slice(0, TOP)) console.log(`   ${String(g.max).padStart(5)}px ${g.side}  x${g.n}  ${g.sel}`);
  if (r.groups.length > TOP) console.log(`   ... +${r.groups.length - TOP} more`);
}

ws.close(); chrome.kill();
try { rmSync(profile, { recursive: true, force: true }); } catch {}
process.exit(0);
