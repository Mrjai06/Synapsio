// Section shooter: one browser session, one width, many element clips.
// usage: node shots.mjs --w 620 --out F:/tmp/w620 --sels ".hero,.ctrl,.figs-pin" [--url ...]
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf("--" + n); return i === -1 ? d : args[i + 1]; };
const URL_ = opt("url", "http://localhost:4321/");
const W = +opt("w", 620);
const OUT = opt("out", ".");
const SCALE = +opt("scale", 1);
const SELS = opt("sels", "main").split(",");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

mkdirSync(OUT, { recursive: true });
const profile = mkdtempSync(join(tmpdir(), "cdp-"));
const port = 9333 + Math.floor(Math.random() * 400);
const chrome = spawn(CHROME, ["--headless=new", "--disable-gpu", "--enable-unsafe-swiftshader", "--hide-scrollbars",
  "--no-first-run", "--no-default-browser-check", "--disable-extensions",
  `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, `--window-size=${W},900`, "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
async function targetWs() {
  for (let i = 0; i < 60; i++) {
    try { const l = await fetch(`http://127.0.0.1:${port}/json/list`).then(r => r.json()); const p = l.find(t => t.type === "page"); if (p?.webSocketDebuggerUrl) return p.webSocketDebuggerUrl; } catch {}
    await sleep(250);
  }
  throw new Error("no devtools");
}
const ws = new WebSocket(await targetWs());
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
let id = 0; const pending = new Map();
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
const send = (m, p = {}) => new Promise(res => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method: m, params: p })); });
const ev = async (e) => (await send("Runtime.evaluate", { expression: e, returnByValue: true })).result?.result?.value;

await send("Runtime.enable"); await send("Page.enable");
await send("Page.navigate", { url: URL_ });
await sleep(4000);
// Grow the viewport to the whole document so every in-view reveal has fired before we clip.
const dh = await ev("document.documentElement.scrollHeight");
await send("Emulation.setDeviceMetricsOverride", { width: W, height: Math.min(dh, 30000), deviceScaleFactor: 1, mobile: false });
await sleep(2200);

for (const sel of SELS) {
  const b = await ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)});if(!e)return null;const r=e.getBoundingClientRect();return{x:r.x+scrollX,y:r.y+scrollY,w:r.width,h:r.height};})()`);
  if (!b) { console.log("MISS", sel); continue; }
  const clip = { x: 0, y: Math.round(b.y), width: W, height: Math.min(Math.round(b.h), 6000), scale: SCALE };
  const shot = await send("Page.captureScreenshot", { format: "png", clip, captureBeyondViewport: true });
  const name = sel.replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "") || "el";
  const file = join(OUT, `${W}-${name}.png`);
  writeFileSync(file, Buffer.from(shot.result.data, "base64"));
  console.log("saved", file, `${clip.width}x${clip.height}`);
}
ws.close(); chrome.kill();
try { rmSync(profile, { recursive: true, force: true }); } catch {}
process.exit(0);
