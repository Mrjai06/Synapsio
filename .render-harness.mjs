// Headless-Chrome driver over CDP: navigate, evaluate JS, screenshot a specific element.
// usage: node shot.mjs <out.png> [--eval "<js>"] [--sel "<css>"] [--wait ms] [--w px] [--h px] [--click "<css>"]
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const out = args[0];
const opt = (n, d) => { const i = args.indexOf("--" + n); return i === -1 ? d : args[i + 1]; };
const URL_ = opt("url", "http://localhost:4321/");
const SEL = opt("sel", null);
const EVAL = opt("eval", null);
const CLICK = opt("click", null);
const WAIT = +opt("wait", 4000);
const W = +opt("w", 1600), H = +opt("h", 900);
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const profile = mkdtempSync(join(tmpdir(), "cdp-"));
const port = 9333 + Math.floor(Math.random() * 400);
const chrome = spawn(CHROME, [
  "--headless=new", "--disable-gpu", "--enable-unsafe-swiftshader", "--hide-scrollbars",
  "--no-first-run", "--no-default-browser-check", "--disable-extensions",
  `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
  `--window-size=${W},${H}`, "about:blank",
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

const wsUrl = await targetWs();
const ws = new WebSocket(wsUrl);
await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });

let id = 0;
const pending = new Map();
const logs = [];
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  if (m.method === "Runtime.consoleAPICalled") logs.push("[" + m.params.type + "] " + m.params.args.map((a) => a.value ?? a.description ?? a.type).join(" "));
  if (m.method === "Runtime.exceptionThrown") logs.push("[EXCEPTION] " + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text));
};
const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });

await send("Runtime.enable");
await send("Page.enable");
await send("Log.enable");
await send("Page.navigate", { url: URL_ });
await sleep(WAIT);

// Grow the viewport to the whole document FIRST, so in-view logic (scroll listeners,
// IntersectionObservers, lazy rAF loops) has already fired before we click or probe.
if (SEL) {
  const dh0 = await send("Runtime.evaluate", { expression: "document.documentElement.scrollHeight", returnByValue: true });
  await send("Emulation.setDeviceMetricsOverride", {
    width: W, height: Math.min(dh0.result?.result?.value || H, 30000), deviceScaleFactor: 1, mobile: false,
  });
  await sleep(1500);
}

if (CLICK) {
  await send("Runtime.evaluate", { expression: `document.querySelector(${JSON.stringify(CLICK)})?.click()` });
  await sleep(+opt("clickwait", 1500));
}

if (EVAL) {
  const r = await send("Runtime.evaluate", { expression: EVAL, returnByValue: true, awaitPromise: true });
  console.log("EVAL:", JSON.stringify(r.result?.result?.value ?? r.result?.result?.description ?? r.result, null, 1));
}

let clip;
if (SEL) {
  const r = await send("Runtime.evaluate", {
    expression: `(()=>{const e=document.querySelector(${JSON.stringify(SEL)});if(!e)return null;const b=e.getBoundingClientRect();return {x:b.x+scrollX,y:b.y+scrollY,width:b.width,height:b.height};})()`,
    returnByValue: true,
  });
  const b = r.result?.result?.value;
  if (b) clip = { x: Math.round(b.x), y: Math.round(b.y), width: Math.round(b.width), height: Math.round(b.height), scale: 1 };
  // --settle 0 is what lets a MID-TRANSITION frame be captured: the default settle lands after
  // any ~1s ease has already finished, so an eased morph could never be seen, only its endpoints.
  await sleep(+opt("settle", 600));
}

const shot = await send("Page.captureScreenshot", clip ? { format: "png", clip, captureBeyondViewport: true } : { format: "png" });
writeFileSync(out, Buffer.from(shot.result.data, "base64"));
if (logs.length) console.log("CONSOLE:\n" + logs.slice(-40).join("\n"));
console.log("saved", out, clip ? `clip ${clip.width}x${clip.height}` : "");

ws.close(); chrome.kill();
try { rmSync(profile, { recursive: true, force: true }); } catch {}
process.exit(0);
