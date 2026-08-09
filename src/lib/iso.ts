/**
 * The isometric drawing engine, extracted from IsoWerkstatt so a new figure does not have to
 * rediscover its rules. Everything in here was paid for by a bug.
 *
 *   x runs down-right, y runs down-left, z is up.
 *   ⚠️ LARGER y is NEARER the viewer. Anything meant to sit BEHIND something needs a SMALLER y.
 *   A face is visible when its normal points along (1,1,1); the same dot product is its depth key.
 *
 * Rules that are not obvious and have each cost a round:
 *  · A LONG FACE keys its depth at its own MIDDLE, so it beats small things standing in front of
 *    it, and the result looks like transparency. Split it into segments, or give it a `lay`.
 *  · A panel standing in a constant-y plane must wind (x0,z0) → (x0,z1) → (x1,z1) → (x1,z0) to
 *    face the viewer. The intuitive order points away and the culler deletes it silently.
 *  · On a surface of revolution the outward normal is cross(tangent, axial), not the reverse, and
 *    the band's own normal must be passed in: its first three points lie on one circle, so a
 *    derived normal would be the ring's plane, not the surface.
 *  · Light lying ON a surface belongs on its own layer between that surface and what stands on it.
 */

export type V3 = [number, number, number];

export const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const mul = (a: V3, k: number): V3 => [a[0] * k, a[1] * k, a[2] * k];
export const cross = (a: V3, b: V3): V3 =>
  [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const len = (a: V3) => Math.hypot(a[0], a[1], a[2]);
export const norm = (a: V3): V3 => mul(a, 1 / (len(a) || 1));
const vdot = (a: V3) => a[0] + a[1] + a[2];

const RX = [0.866, 0.5];
const RY = [-0.866, 0.5];
export const P2 = (p: V3): [number, number] => [
  p[0] * RX[0] + p[1] * RY[0],
  p[0] * RX[1] + p[1] * RY[1] - p[2],
];

export interface Face { p: V3[]; cls: string; bias?: number; lay?: number; n?: V3 }

/** A scene collects faces, then culls, sorts and projects them in one pass. */
export class Scene {
  faces: Face[] = [];

  push(f: Face) { this.faces.push(f); return f; }

  /** Prism from an origin and three edge vectors. All six faces; the culler picks. */
  prism(o: V3, u: V3, v: V3, w: V3, cls: string, lay = 1, capless = false) {
    const k = (a: number, b: number, c: number): V3 =>
      add(add(add(o, mul(u, a)), mul(v, b)), mul(w, c));
    const A = k(0, 0, 0), B = k(1, 0, 0), C = k(1, 1, 0), D = k(0, 1, 0);
    const E = k(0, 0, 1), F = k(1, 0, 1), G = k(1, 1, 1), H = k(0, 1, 1);
    // the underside is wound the other way round, or it carries the same normal as the top cap
    // and gets drawn for nothing on every box in the scene
    this.push({ p: [A, D, C, B], cls, lay });
    if (!capless) this.push({ p: [E, F, G, H], cls: `${cls} lit`, lay });
    this.push({ p: [A, B, F, E], cls, lay });
    this.push({ p: [D, C, G, H], cls, lay });
    this.push({ p: [A, D, H, E], cls, lay });
    this.push({ p: [B, C, G, F], cls, lay });
  }

  /** Axis-aligned box. */
  bx(x: number, y: number, z: number, w: number, d: number, h: number, cls = "face", lay = 1) {
    this.prism([x, y, z], [w, 0, 0], [0, d, 0], [0, 0, h], cls, lay);
  }

  /** A slab along an arbitrary direction, e.g. a chute or an arm. */
  bar(a: V3, b: V3, wide: number, thick: number, cls = "face", lay = 1) {
    const d = sub(b, a);
    let e1 = norm(cross(d, [0, 0, 1] as V3));
    let e2 = norm(cross(d, e1));
    // ⚠️ Flip the CROSS axis, not the thickness axis. A prism's cap normal is cross(u, v), and
    // for any downward-sloping direction cross(d, e1) points down, so BOTH caps get culled and
    // the slab renders as its two long edges: a chute becomes a pair of wires and whatever rests
    // on it appears to float. Negating e1 flips that cap upward; negating e2 does not, because
    // the caps are wound from u and v.
    if (e2[2] < 0) { e1 = mul(e1, -1); e2 = norm(cross(d, e1)); }
    this.prism(add(a, mul(e1, -wide / 2)), d, mul(e1, wide), mul(e2, thick), cls, lay);
  }

  /** A flat panel lying at height z. Winds to +z. */
  pad(x: number, y: number, z: number, w: number, d: number, cls: string, bias = 0.4, lay = 1) {
    this.push({ p: [[x, y, z], [x + w, y, z], [x + w, y + d, z], [x, y + d, z]], cls, bias, lay });
  }

  /** A panel in a constant-y plane, facing the viewer. See the winding warning above. */
  panelY(x0: number, x1: number, z0: number, z1: number, y: number, cls: string, bias = 0.4, lay = 1) {
    this.push({ p: [[x0, y, z0], [x0, y, z1], [x1, y, z1], [x1, y, z0]], cls, bias, lay });
  }

  /** An OPEN tray: walls, an inner floor and a rim. A prism has a lid; a bin must not. */
  tray(x: number, y: number, z: number, w: number, d: number, h: number, fill: string, lay = 1) {
    this.prism([x, y, z], [w, 0, 0], [0, d, 0], [0, 0, h], "face", lay, true);
    this.pad(x + 4, y + 4, z + h - 4.5, w - 8, d - 8, fill, 0.4, lay);
    const t = 1.8;
    this.pad(x, y, z + h, w, t, "face lit", 0.6, lay);
    this.pad(x, y + d - t, z + h, w, t, "face lit", 0.6, lay);
    this.pad(x, y + t, z + h, t, d - 2 * t, "face lit", 0.6, lay);
    this.pad(x + w - t, y + t, z + h, t, d - 2 * t, "face lit", 0.6, lay);
  }

  /** Surface of revolution between two circles, drawn as ONE polygon so it carries one outline. */
  revolve(c0: V3, r0: number, c1: V3, r1: number, e1: V3, e2: V3, cls: string, lay = 1, cap = true) {
    const N = 40;
    const at = (c: V3, r: number, i: number): V3 =>
      add(c, add(mul(e1, r * Math.cos((i / N) * 2 * Math.PI)),
        mul(e2, r * Math.sin((i / N) * 2 * Math.PI))));
    const vis: number[] = [];
    for (let i = 0; i < N; i++) {
      const n = cross(sub(at(c0, r0, i + 1), at(c0, r0, i)), sub(at(c1, r1, i), at(c0, r0, i)));
      if (vdot(n) > 0) vis.push(i);
    }
    if (vis.length) {
      let start = 0;
      for (let k = 0; k < vis.length; k++) {
        if (vis[(k + vis.length - 1) % vis.length] !== (vis[k] + N - 1) % N) { start = k; break; }
      }
      const run = vis.map((_, k) => vis[(start + k) % vis.length]);
      const lo = run.map((i) => at(c0, r0, i));
      lo.push(at(c0, r0, run[run.length - 1] + 1));
      const hi = run.map((i) => at(c1, r1, i));
      hi.push(at(c1, r1, run[run.length - 1] + 1));
      const mid = run[Math.floor(run.length / 2)];
      this.push({
        p: [...lo, ...hi.reverse()], cls, lay,
        n: sub(at(c0, r0 + 1, mid), at(c0, r0, mid)),
      });
    }
    if (cap) {
      this.push({
        p: Array.from({ length: N }, (_, i) => at(c1, r1, i)),
        cls: `${cls} lit`, bias: 0.4, lay,
      });
    }
  }

  cyl(cx: number, cy: number, z: number, r: number, h: number, cls = "face", lay = 1) {
    this.revolve([cx, cy, z], r, [cx, cy, z + h], r, [1, 0, 0], [0, 1, 0], cls, lay);
  }

  /** Cull, sort, project. Returns what a template can map straight into <polygon>. */
  draw() {
    return this.faces
      .map((f) => {
        const n = f.n ?? cross(sub(f.p[1], f.p[0]), sub(f.p[2], f.p[0]));
        const c = f.p.reduce((a, q) => add(a, q), [0, 0, 0] as V3);
        return { f, vis: vdot(n) > 0, lay: f.lay ?? 1, key: vdot(c) / f.p.length + (f.bias ?? 0) };
      })
      .filter((d) => d.vis)
      .sort((a, b) => (a.lay - b.lay) || (a.key - b.key))
      .map((d) => ({
        cls: d.f.cls,
        pts: d.f.p.map((q) => P2(q).map((n) => n.toFixed(1)).join(",")).join(" "),
      }));
  }

  /** viewBox from the real projected extents, so a figure never sits in a corner of its frame. */
  viewBox(margin = 10, extra: V3[] = []) {
    const pj = [...this.faces.flatMap((f) => f.p), ...extra].map(P2);
    const xs = pj.map((p) => p[0]), ys = pj.map((p) => p[1]);
    const x0 = Math.min(...xs), y0 = Math.min(...ys);
    return [x0 - margin, y0 - margin,
      Math.max(...xs) - x0 + margin * 2, Math.max(...ys) - y0 + margin * 2]
      .map((n) => n.toFixed(1)).join(" ");
  }
}

export const line = (p: V3[]) =>
  p.map((v) => P2(v).map((n) => n.toFixed(1)).join(",")).join(" ");
