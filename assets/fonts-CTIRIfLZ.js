import { a as Rt } from "./index-Buxy_O7c.js";
import {
  easeInOut as G,
  clock as h,
  clamp as C,
  lerp as $,
  rng as E,
  easeOutBack as ot,
  quadBezier as yt,
  easeOut as _,
  hash2 as Q,
  makeRng as xt,
  since as A,
  popScale as J,
  bump as ht,
  easeInOutSine as gt,
} from "./core-Dv3-PHk5.js";
import { a as T } from "./audio-DDOa6zyH.js";
import { d as S, P as Bt, u as Lt } from "./pixel-CYIPeh-K.js";
import {
  addRes as K,
  toast as U,
  store as m,
  banner as Ot,
  updateDisplay as $t,
  closePanel as tt,
  openPanel as Tt,
  resetStore as Gt,
} from "./store-DeYfal31.js";
import { getAtlas as _t } from "./sprites-DoU9b1eg.js";
import { g as Ut } from "./farmart-Bcn3kAJE.js";
const N = 600,
  st = 1640,
  B = 540,
  R = 960,
  St = 16,
  lt = 17,
  dt = 27,
  vt = 26,
  I = { x: 44, y: 1018, w: 512, font: 22, ls: 1, lh: 40 },
  ut = {
    write: { x: 300, y: 966, zoom: 0.9 },
    farm: { x: 338, y: 752, zoom: 1.32 },
    overview: { x: 300, y: 752, zoom: 0.605 },
  },
  it = { x: 24, y: 668, cols: 14 },
  ct = 36,
  X = (() => {
    const l = [];
    for (let a = 0; a < 3; a++)
      for (let o = 0; o < 2; o++)
        l.push({ x: 288 + o * 42 + ct / 2, y: 700 + a * 42 + ct / 2 });
    return l;
  })(),
  v = { x: 438, y: 800 },
  L = { x: 488, y: 812 },
  j = { x: 400, y: 826 };
class Ht {
  constructor() {
    ((this.x = 300),
      (this.y = 1262),
      (this.zoom = 1.25),
      (this.from = null),
      (this.to = null),
      (this.t0 = 0),
      (this.dur = 1),
      (this.ease = G),
      (this.drift = 0),
      (this.vx = 0),
      (this.vy = 0),
      (this.clampOn = !1));
  }
  get busy() {
    return !!this.to;
  }
  set(t) {
    ((this.x = t.x), (this.y = t.y), (this.zoom = t.zoom), (this.to = null));
  }
  tween(t, s, e = G) {
    ((this.from = { x: this.x, y: this.y, zoom: this.zoom }),
      (this.to = { ...t }),
      (this.t0 = h.t),
      (this.dur = s),
      (this.ease = e),
      (this.vx = this.vy = 0));
  }
  stop() {
    this.to = null;
  }
  update(t) {
    if (this.to && this.from) {
      const s = C((h.t - this.t0) / this.dur),
        e = this.ease(s),
        i = Math.exp($(Math.log(this.from.zoom), Math.log(this.to.zoom), e));
      ((this.x = $(this.from.x, this.to.x, e)),
        (this.y = $(this.from.y, this.to.y, e)),
        (this.zoom = i),
        s >= 1 && (this.to = null));
    } else if (this.vx || this.vy) {
      ((this.x += this.vx * t), (this.y += this.vy * t));
      const s = Math.pow(0.02, t);
      ((this.vx *= s),
        (this.vy *= s),
        Math.abs(this.vx) < 2 &&
          Math.abs(this.vy) < 2 &&
          (this.vx = this.vy = 0));
    }
    this.clampOn && this.applyClamp();
  }
  applyClamp() {
    const t = B / 2 / this.zoom,
      s = R / 2 / this.zoom,
      e = 40;
    ((this.x =
      N / 2 +
      C(
        this.x - N / 2,
        -(N / 2 - t + e) * (t * 2 < N ? 1 : 0) - 1e-4,
        (N / 2 - t + e) * (t * 2 < N ? 1 : 0) + 1e-4,
      )),
      (this.y = C(
        this.y,
        Math.min(s - e, st / 2),
        Math.max(st - s + e, st / 2),
      )));
  }
  pose() {
    if (!this.drift) return { x: this.x, y: this.y, zoom: this.zoom };
    const t = h.t;
    return {
      x: this.x + Math.sin(t * 0.37) * 2.2 * this.drift,
      y: this.y + Math.sin(t * 0.29 + 1.3) * 1.6 * this.drift,
      zoom: this.zoom * (1 + Math.sin(t * 0.21) * 0.004 * this.drift),
    };
  }
  w2s(t, s, e = this.pose()) {
    return { x: (t - e.x) * e.zoom + B / 2, y: (s - e.y) * e.zoom + R / 2 };
  }
  s2w(t, s, e = this.pose()) {
    return { x: (t - B / 2) / e.zoom + e.x, y: (s - R / 2) / e.zoom + e.y };
  }
}
const y = new Ht(),
  Ct = {},
  Yt = {};
class Xt {
  constructor() {
    ((this.parts = []), (this.floats = []), (this.flyers = []));
  }
  add(t) {
    this.parts.push({
      vx: 0,
      vy: 0,
      g: 0,
      drag: 1,
      life: 1,
      age: 0,
      size: 3,
      rot: 0,
      vr: 0,
      color: "#fff",
      ...t,
    });
  }
  dust(t, s, e = 6, i = "#e8dcc6", a = 24, o = 5) {
    for (let n = 0; n < e; n++) {
      const d = E.range(Math.PI * 1.05, Math.PI * 1.95),
        r = E.range(0.4, 1) * a;
      this.add({
        kind: "dust",
        x: t + E.range(-6, 6),
        y: s + E.range(-2, 2),
        vx: Math.cos(d) * r * 1.6,
        vy: Math.sin(d) * r * 0.7,
        drag: 0.04,
        life: E.range(0.5, 0.9),
        size: E.range(o * 0.6, o * 1.2),
        color: i,
      });
    }
  }
  sparks(t, s, e = 6, i, a = 40, o = !0) {
    for (let n = 0; n < e; n++) {
      const d = (n / e) * Math.PI * 2 + E.range(-0.3, 0.3),
        r = E.range(0.5, 1) * a;
      this.add({
        kind: "spark",
        x: t,
        y: s,
        vx: Math.cos(d) * r,
        vy: Math.sin(d) * r - 10,
        drag: 0.08,
        life: E.range(0.45, 0.8),
        size: E.range(0.7, 1.1),
        sprite: i,
        front: o,
      });
    }
  }
  hearts(t, s, e = 1, i) {
    for (let a = 0; a < e; a++)
      this.add({
        kind: "heart",
        x: t + E.range(-6, 6),
        y: s,
        vx: E.range(-6, 6),
        vy: -28 - E.range(0, 10),
        drag: 0.6,
        life: 1.2,
        size: 0.8,
        sprite: i,
        front: !0,
        delay: a * 0.18,
      });
  }
  confetti(t, s, e = 30, i = 160) {
    const a = [
      "#f39bb0",
      "#ffd36b",
      "#9ccf6e",
      "#8fc6e8",
      "#f6a57a",
      "#c7a6f0",
      "#fff4dc",
    ];
    for (let o = 0; o < e; o++) {
      const n = E.range(Math.PI * 1.1, Math.PI * 1.9),
        d = E.range(0.4, 1) * i;
      this.add({
        kind: "confetti",
        x: t,
        y: s,
        vx: Math.cos(n) * d,
        vy: Math.sin(n) * d,
        g: 220,
        drag: 0.25,
        life: E.range(1.2, 2),
        size: E.range(2.5, 4.5),
        rot: E.range(0, 6),
        vr: E.range(-10, 10),
        color: E.pick(a),
        front: !0,
      });
    }
  }
  ring(t, s, e = 40, i = "#fff6d8", a = 0.6, o = !0) {
    this.add({
      kind: "ring",
      x: t,
      y: s,
      size: e,
      color: i,
      life: a,
      front: o,
    });
  }
  glow(t, s, e = 30, i = "rgba(255,226,140,", a = 0.8) {
    this.add({
      kind: "glow",
      x: t,
      y: s,
      size: e,
      color: i,
      life: a,
      front: !1,
    });
  }
  float(t, s, e, i = "#7a5a2a", a = 13, o, n = 1.3) {
    this.floats.push({
      text: t,
      x: s,
      y: e,
      t0: h.t,
      dur: n,
      color: i,
      size: a,
      icon: o,
    });
  }
  fly(t, s, e, i, a, o = 0.85, n = 1.6) {
    const d = typeof i == "string" ? () => Ct[i] ?? { x: 270, y: 40 } : i;
    this.flyers.push({
      sprite: t,
      sx: s,
      sy: e,
      target: d,
      t0: h.t,
      dur: o,
      arc: E.range(60, 120),
      scale: n,
      done: !1,
      onArrive: () => {
        (typeof i == "string" && (Yt[i] = h.t), a == null || a());
      },
    });
  }
  update(t) {
    var s;
    for (const e of this.parts) {
      if (e.delay && e.delay > 0) {
        e.delay -= t;
        continue;
      }
      ((e.age += t), (e.vy += e.g * t));
      const i = Math.pow(e.drag, t);
      ((e.vx *= i),
        (e.vy *= e.kind === "heart" ? 1 : i),
        (e.x += e.vx * t),
        (e.y += e.vy * t),
        (e.rot += e.vr * t));
    }
    ((this.parts = this.parts.filter((e) => e.age < e.life)),
      (this.floats = this.floats.filter((e) => h.t - e.t0 < e.dur)));
    for (const e of this.flyers)
      !e.done &&
        h.t - e.t0 >= e.dur &&
        ((e.done = !0), (s = e.onArrive) == null || s.call(e));
    this.flyers = this.flyers.filter((e) => !e.done);
  }
  drawParticles(t, s) {
    for (const e of this.parts) {
      if (!!e.front !== s || (e.delay && e.delay > 0)) continue;
      const i = e.age / e.life;
      switch ((t.save(), e.kind)) {
        case "dust": {
          ((t.globalAlpha = (1 - i) * 0.85), (t.fillStyle = e.color));
          const a = e.size * (0.6 + i * 0.9);
          (t.beginPath(), t.arc(e.x, e.y, a, 0, Math.PI * 2), t.fill());
          break;
        }
        case "dot": {
          ((t.globalAlpha = 1 - i),
            (t.fillStyle = e.color),
            t.fillRect(e.x - e.size / 2, e.y - e.size / 2, e.size, e.size));
          break;
        }
        case "spark":
        case "sprite": {
          if (!e.sprite) break;
          const a =
            e.size * (i < 0.2 ? ot(i / 0.2) : 1 - ((i - 0.2) / 0.8) * 0.6);
          S(t, e.sprite, e.x, e.y, {
            sx: a,
            sy: a,
            rot: e.rot,
            alpha: i > 0.6 ? (1 - i) / 0.4 : 1,
          });
          break;
        }
        case "heart": {
          if (!e.sprite) break;
          const a = e.size * (i < 0.15 ? ot(i / 0.15) : 1);
          S(t, e.sprite, e.x + Math.sin(e.age * 6) * 3, e.y, {
            sx: a,
            sy: a,
            alpha: i > 0.65 ? (1 - i) / 0.35 : 1,
          });
          break;
        }
        case "confetti": {
          ((t.globalAlpha = i > 0.75 ? (1 - i) / 0.25 : 1),
            t.translate(e.x, e.y),
            t.rotate(e.rot),
            t.scale(1, Math.cos(e.age * 9 + e.rot)),
            (t.fillStyle = e.color),
            t.fillRect(-e.size / 2, -e.size / 3, e.size, e.size * 0.66));
          break;
        }
        case "ring": {
          const a = _(i);
          ((t.globalAlpha = (1 - i) * 0.9),
            (t.strokeStyle = e.color),
            (t.lineWidth = 3 * (1 - i) + 0.6),
            t.beginPath(),
            t.ellipse(
              e.x,
              e.y,
              e.size * a,
              e.size * a * 0.55,
              0,
              0,
              Math.PI * 2,
            ),
            t.stroke());
          break;
        }
        case "glow": {
          const a = Math.sin(Math.PI * i),
            o = t.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size);
          (o.addColorStop(0, e.color + (0.55 * a).toFixed(3) + ")"),
            o.addColorStop(1, e.color + "0)"),
            (t.fillStyle = o),
            t.fillRect(e.x - e.size, e.y - e.size, e.size * 2, e.size * 2));
          break;
        }
        case "fiber": {
          ((t.globalAlpha = (1 - i) * 0.8),
            (t.strokeStyle = e.color),
            (t.lineWidth = 0.8),
            t.beginPath(),
            t.moveTo(e.x, e.y),
            t.lineTo(
              e.x + Math.cos(e.rot) * e.size,
              e.y + Math.sin(e.rot) * e.size,
            ),
            t.stroke());
          break;
        }
      }
      t.restore();
    }
  }
  drawFloats(t) {
    for (const s of this.floats) {
      const e = (h.t - s.t0) / s.dur,
        i = _(C(e * 1.4)) * 22,
        a = e < 0.12 ? e / 0.12 : e > 0.7 ? (1 - e) / 0.3 : 1,
        o = e < 0.18 ? ot(e / 0.18, 3) : 1;
      (t.save(),
        (t.globalAlpha = C(a)),
        t.translate(s.x, s.y - i),
        t.scale(o, o),
        (t.font = `700 ${s.size}px "LXGW WenKai", serif`),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"));
      const n = t.measureText(s.text).width;
      let d = 0;
      (s.icon &&
        ((d = (s.icon.w * 2 * 0.8) / 2 + 1),
        S(t, s.icon, -n / 2 - 1, 0 + (s.icon.h - s.icon.ay) * 0, {
          sx: 0.8,
          sy: 0.8,
        })),
        (t.lineJoin = "round"),
        (t.lineWidth = 4),
        (t.strokeStyle = "#fffaf0"),
        t.strokeText(s.text, d, 0),
        (t.fillStyle = s.color),
        t.fillText(s.text, d, 0),
        t.restore());
    }
  }
  drawFlyers(t) {
    for (const s of this.flyers) {
      const e = C((h.t - s.t0) / s.dur),
        i = G(e),
        a = s.target(),
        o = (s.sx + a.x) / 2 + (s.sx < a.x ? -30 : 30),
        n = Math.min(s.sy, a.y) - s.arc,
        d = yt(s.sx, o, a.x, i),
        r = yt(s.sy, n, a.y, i),
        w =
          s.scale *
          (e < 0.15 ? ot(e / 0.15, 3) : 1 - G(C((e - 0.7) / 0.3)) * 0.45);
      t.save();
      for (let p = 1; p <= 3; p++) {
        const f = C(e - p * 0.035),
          M = G(f);
        ((t.globalAlpha = 0.18 / p),
          (t.fillStyle = "#ffe9a0"),
          t.beginPath(),
          t.arc(
            yt(s.sx, o, a.x, M),
            yt(s.sy, n, a.y, M) - 4,
            6 * w * 0.6,
            0,
            Math.PI * 2,
          ),
          t.fill());
      }
      (t.restore(),
        S(t, s.sprite, d, r + (s.sprite.h - s.sprite.ay) * 0, {
          sx: w,
          sy: w,
          rot: Math.sin(e * 8) * 0.15,
        }));
    }
  }
}
const b = new Xt(),
  Nt = "，。、；：？！…—“”‘’（）《》,.;:?!",
  jt = (l) => Nt.includes(l);
function qt(l, t) {
  const s = [];
  let e = 2,
    i = 0;
  const a = Array.from(l);
  for (let o = 0; o < a.length; o++) {
    const n = a[o];
    if (
      n ===
      `
`
    ) {
      (i++, (e = 2));
      continue;
    }
    if (e >= t) {
      if (jt(n) && e === t) {
        (s.push({ ch: n, lx: e * lt + lt / 2 - 3, ly: vt + i * dt + dt / 2 }),
          e++);
        continue;
      }
      (i++, (e = 0));
    }
    (s.push({ ch: n, lx: e * lt + lt / 2, ly: vt + i * dt + dt / 2 }), e++);
  }
  return { items: s, lines: i + 1 };
}
let Kt = 1;
function kt(l, t, s, e, i, a = 14) {
  const { items: o, lines: n } = qt(l, a);
  return {
    id: "b" + Kt++,
    date: t,
    weather: s,
    glyphs: o.map((d, r) => ({
      ...d,
      dx: 0,
      dy: 0,
      dsize: 0,
      tidyT: null,
      punctFixT: null,
      wobSeed: r * 1.37 + e * 0.01,
      appearT: -99,
      glowT: null,
    })),
    ox: e,
    oy: i,
    cols: a,
    lines: n,
    width: a * lt,
    height: vt + n * dt,
    landedT: -99,
  };
}
const Pt = 2;
function pt(l, t, s) {
  const e = Math.floor(l),
    i = Math.floor(t),
    a = l - e,
    o = t - i,
    n = a * a * (3 - 2 * a),
    d = o * o * (3 - 2 * o),
    r = Q(e, i, s),
    w = Q(e + 1, i, s),
    p = Q(e, i + 1, s),
    f = Q(e + 1, i + 1, s);
  return r + (w - r) * n + (p - r) * d + (r - w - p + f) * n * d;
}
function Zt() {
  const l = N * Pt,
    t = st * Pt,
    s = document.createElement("canvas");
  ((s.width = l), (s.height = t));
  const e = s.getContext("2d"),
    i = e.createImageData(l, t),
    a = [251, 247, 237];
  for (let n = 0; n < t; n++)
    for (let d = 0; d < l; d++) {
      const r = pt(d / 180, n / 180, 1) - 0.5,
        w = pt(d / 40, n / 40, 2) - 0.5,
        p = Q(d, n, 3) - 0.5,
        f = Math.min(d, l - d) / l,
        M = Math.min(n, t - n) / t,
        x = Math.max(0, 0.05 - Math.min(f, M * 0.45)) * 60,
        c = r * 7 + w * 3.2 + p * 4.5 - x,
        u = (n * l + d) * 4;
      ((i.data[u] = a[0] + c),
        (i.data[u + 1] = a[1] + c * 0.96 - x * 0.3),
        (i.data[u + 2] = a[2] + c * 0.85 - x * 0.9),
        (i.data[u + 3] = 255));
    }
  e.putImageData(i, 0, 0);
  const o = xt(7);
  e.lineCap = "round";
  for (let n = 0; n < 2600; n++) {
    const d = o.range(0, l),
      r = o.range(0, t),
      w = o.range(0, Math.PI * 2),
      p = o.range(4, 18);
    ((e.strokeStyle =
      o.next() < 0.5 ? "rgba(160,130,90,0.07)" : "rgba(255,255,255,0.35)"),
      (e.lineWidth = o.range(0.6, 1.4)),
      e.beginPath(),
      e.moveTo(d, r),
      e.quadraticCurveTo(
        d + Math.cos(w + 0.6) * p * 0.5,
        r + Math.sin(w + 0.6) * p * 0.5,
        d + Math.cos(w) * p,
        r + Math.sin(w) * p,
      ),
      e.stroke());
  }
  for (let n = 0; n < 900; n++)
    ((e.fillStyle = `rgba(140,110,80,${o.range(0.05, 0.14)})`),
      e.fillRect(
        o.range(0, l),
        o.range(0, t),
        o.range(0.8, 2),
        o.range(0.8, 2),
      ));
  return s;
}
function Jt() {
  const s = document.createElement("canvas");
  ((s.width = 512), (s.height = 512));
  const e = s.getContext("2d"),
    i = e.createImageData(512, 512);
  for (let a = 0; a < 512; a++)
    for (let o = 0; o < 512; o++) {
      const n = (Math.sin(o * 0.9) + Math.sin(a * 0.9)) * 1.2,
        d = (Q(o, a, 9) - 0.5) * 6 + (pt(o / 60, a / 60, 4) - 0.5) * 8,
        r = (a * 512 + o) * 4;
      ((i.data[r] = 226 + n + d),
        (i.data[r + 1] = 214 + n + d),
        (i.data[r + 2] = 192 + n * 0.8 + d),
        (i.data[r + 3] = 255));
    }
  return (e.putImageData(i, 0, 0), s);
}
const Qt = {
    base: "#d7e8ae",
    light: "#e6f0c4",
    dark: "#c3dc98",
    rim: "#a9cb7f",
    shadow: "#e8dcc3",
  },
  Vt = {
    base: "#efdfbd",
    light: "#f6ead0",
    dark: "#e2cda4",
    rim: "#d6bd91",
    shadow: "#ede3cd",
  };
function Z(l, t, s, e, i, a = "grass", o = [], n, d) {
  const r = Math.ceil(s / 2),
    w = Math.ceil(e / 2) + 2,
    p = new Bt(r, w),
    f = a === "path" ? Vt : Qt,
    M = (c, u) => {
      const k = c * 2 + 1,
        g = u * 2 + 1;
      for (const [D, F, V, mt] of o) {
        const nt = l + k,
          rt = t + g,
          et = 10,
          Mt = Math.max(D + et - nt, 0, nt - (D + V - et)),
          At = Math.max(F + et - rt, 0, rt - (F + mt - et));
        if (Mt * Mt + At * At < et * et) return !1;
      }
      const P = (pt(c / 5, u / 5, i.seed) - 0.5) * 0.35;
      for (const [D, F, V, mt] of i.blobs) {
        const nt = (l + k - D) / V,
          rt = (t + g - F) / mt;
        if (nt * nt + rt * rt < 1 + P) return !0;
      }
      return !1;
    };
  for (let c = 0; c < w - 2; c++)
    for (let u = 0; u < r; u++)
      if (M(u, c)) {
        const k = pt(u / 7, c / 7, i.seed + 5),
          g = Q(u, c, i.seed);
        let P = f.base;
        (k > 0.62 ? (P = f.light) : k < 0.3 && (P = f.dark),
          g > 0.965
            ? (P = a === "path" ? f.dark : "#bcd78f")
            : g < 0.025 && (P = f.light),
          p.px(u, c, P));
      }
  const x = [];
  for (let c = 0; c < w; c++)
    for (let u = 0; u < r; u++)
      p.get(u, c) &&
        (!p.get(u - 1, c) ||
          !p.get(u + 1, c) ||
          !p.get(u, c - 1) ||
          !p.get(u, c + 1)) &&
        x.push(c * r + u);
  for (const c of x) p.data[c] = f.rim;
  for (let c = w - 1; c >= 1; c--)
    for (let u = 0; u < r; u++)
      !p.get(u, c) &&
        p.get(u, c - 1) &&
        p.get(u, c - 1) !== f.shadow &&
        p.px(u, c, f.shadow);
  if (a !== "path") {
    const c = xt(i.seed * 13 + 1);
    for (let u = 0; u < (r * w) / 60; u++) {
      const k = c.int(1, r - 2),
        g = c.int(2, w - 4);
      p.get(k, g) &&
        p.get(k, g) !== f.rim &&
        p.get(k, g - 1) &&
        p.get(k, g + 1) &&
        p.get(k, g + 1) !== f.rim &&
        (p.px(k, g, "#b2d083"), p.px(k, g - 1, "#c3dc98"));
    }
  }
  return {
    x: l,
    y: t,
    w: s,
    h: e,
    img: Lt(p.toCanvas(), 4),
    appearT: -99,
    cx: n ?? l + s / 2,
    cy: d ?? t + e / 2,
    kind: a,
  };
}
const W = xt(4242),
  zt = "#47372c",
  H = '"LXGW WenKai", "Kaiti SC", "STKaiti", serif';
class O {
  constructor(t, s, e, i, a) {
    ((this.kind = t),
      (this.facing = 1),
      (this.target = null),
      (this.onArrive = null),
      (this.act = "idle"),
      (this.actT0 = 0),
      (this.actDur = 0),
      (this.onActDone = null),
      (this.walkDist = W.range(0, 50)),
      (this.wander = !0),
      (this.nextWander = W.range(0.5, 3)),
      (this.level = 1),
      (this.levelUpT = -99),
      (this.appearT = -99),
      (this.back = !1),
      (this.busy = !1),
      (this.blinkAt = W.range(1, 4)),
      (this.jumpT = -99),
      (this.hidden = !1),
      (this.tag = ""),
      (this.x = s),
      (this.y = e),
      (this.zone = i),
      (this.scale =
        a ??
        (t === "cow" ? 1.2 : t === "sheep" ? 1.1 : t === "chick" ? 0.95 : 1)),
      (this.baseSpeed =
        t === "cow" ? 34 : t === "sheep" ? 38 : t === "chick" ? 46 : 52),
      (this.speed = this.baseSpeed),
      (this.facing = W.sign()));
  }
  goTo(t, s, e, i) {
    ((this.target = { x: t, y: s }),
      (this.speed = e ?? this.baseSpeed),
      (this.onArrive = i ?? null),
      (this.act = "walk"));
  }
  doAct(t, s, e) {
    ((this.act = t),
      (this.actT0 = h.t),
      (this.actDur = s),
      (this.onActDone = e ?? null),
      (this.target = null));
  }
  get moving() {
    return this.act === "walk" && !!this.target;
  }
  update(t) {
    if (this.target) {
      const s = this.target.x - this.x,
        e = this.target.y - this.y,
        i = Math.hypot(s, e),
        a = this.speed * t;
      if (
        (Math.abs(s) > 0.6 && (this.facing = s > 0 ? 1 : -1),
        this.kind === "cow" && (this.back = e < -Math.abs(s) * 1.2),
        i <= a)
      ) {
        ((this.x = this.target.x),
          (this.y = this.target.y),
          (this.walkDist += i),
          (this.target = null),
          (this.act = "idle"),
          (this.actT0 = h.t));
        const o = this.onArrive;
        ((this.onArrive = null), o == null || o());
      } else
        ((this.x += (s / i) * a),
          (this.y += (e / i) * a),
          (this.walkDist += a));
      return;
    }
    if (this.act !== "idle" && this.act !== "walk") {
      if (h.t - this.actT0 >= this.actDur) {
        ((this.act = "idle"), (this.actT0 = h.t));
        const s = this.onActDone;
        ((this.onActDone = null), s == null || s());
      }
      return;
    }
    if (
      this.wander &&
      !this.busy &&
      this.zone &&
      ((this.nextWander -= t), this.nextWander <= 0)
    ) {
      const s = this.zone,
        e = W.next();
      if (e < 0.22 && this.kind !== "cow")
        this.doAct(
          this.kind === "sheep" ? "graze" : "peck",
          this.kind === "sheep" ? 1.6 : 0.7,
        );
      else if (e < 0.32 && this.kind === "cow") this.doAct("graze", 2.2);
      else {
        const i = C(this.x + W.range(-70, 70), s.x0, s.x1),
          a = C(this.y + W.range(-30, 30), s.y0, s.y1);
        this.goTo(i, a);
      }
      this.nextWander = W.range(1.2, 3.8);
    }
  }
  frame(t) {
    const s = h.t;
    if (this.kind === "chickenW" || this.kind === "chickenB") {
      const i = this.kind === "chickenW" ? t.chickenW : t.chickenB;
      if (this.act === "walk" && this.target)
        return i.walk[Math.floor(this.walkDist / 5) % 4];
      if (this.act === "peck" || this.act === "eat") {
        const a = (s - this.actT0) / 0.32;
        return i.peck[Math.floor(a * 3) % 3 === 0 ? 0 : 1];
      }
      return this.act === "happy"
        ? i.happy
        : (s + this.blinkAt) % 3.7 < 0.13
          ? i.blink
          : i.idle;
    }
    if (this.kind === "chick")
      return this.act === "walk" && this.target
        ? t.chick.walk[Math.floor(this.walkDist / 3.5) % 4]
        : t.chick.idle;
    if (this.kind === "cow" && this.back && this.target)
      return t.cow.back[Math.floor(this.walkDist / 9) % 2];
    const e = this.kind === "sheep" ? t.sheep : t.cow;
    return this.act === "walk" && this.target
      ? e.walk[Math.floor(this.walkDist / (this.kind === "cow" ? 7 : 6)) % 4]
      : this.act === "graze" || this.act === "eat"
        ? e.graze
        : (s + this.blinkAt) % 4.3 < 0.14
          ? e.blink
          : e.idle;
  }
  draw(t, s) {
    if (this.hidden) return;
    const e = A(this.appearT, 0.5);
    if (e <= 0) return;
    const i = J(e),
      a = this.frame(s);
    let o = 0;
    if (this.act === "walk" && this.target) {
      const f = this.kind === "cow" ? 14 : this.kind === "sheep" ? 12 : 10;
      o =
        -Math.abs(Math.sin((this.walkDist / f) * Math.PI)) *
        (this.kind === "chick" ? 1.6 : 1.2);
    }
    const n = A(this.jumpT, 0.45);
    (n > 0 && n < 1 && (o -= ht(n) * 10),
      this.act === "happy" &&
        (o -= Math.abs(Math.sin((h.t - this.actT0) * 12)) * 4));
    let d = 1,
      r = 1;
    if (this.act === "idle") {
      const f = Math.sin(h.t * 2.2 + this.blinkAt * 3) * 0.018;
      ((d = 1 - f), (r = 1 + f));
    }
    n > 0.85 && n < 1 && ((d = 1.1), (r = 0.9));
    const w = this.scale * i.sx;
    S(t, a, this.x, this.y + o, {
      flip: this.facing < 0 && !(this.back && this.target),
      sx: w * d,
      sy: this.scale * i.sy * r,
    });
    const p = A(this.levelUpT, 1.4);
    p > 0 &&
      p < 1 &&
      (t.save(),
      (t.globalAlpha = 1 - p),
      (t.strokeStyle = "#ffd96b"),
      (t.lineWidth = 2),
      t.beginPath(),
      t.ellipse(
        this.x,
        this.y - 2,
        10 + p * 22,
        (10 + p * 22) * 0.4,
        0,
        0,
        Math.PI * 2,
      ),
      t.stroke(),
      t.restore());
  }
  shadowR() {
    return this.kind === "cow"
      ? 20
      : this.kind === "sheep"
        ? 15
        : this.kind === "chick"
          ? 5
          : 9;
  }
}
const Et =
    "院子里的桂花开了，风一吹，整条小巷都是甜甜的味道。妈妈打来电话，问我最近有没有好好吃饭。",
  Ft =
    "第一次自己做了番茄炒蛋，虽然有点咸，但还是吃得干干净净。晚上散步时，看见月亮又圆又亮。",
  Dt =
    "今天下班回家的时候,夕阳刚好落在街道尽头.路过那家熟悉的面包店,闻到了刚出炉的香味.我突然觉得,原来生活中有这么多值得记录的小事.",
  bt = { ",": "，", ".": "。", ";": "；", "?": "？", "!": "！", ":": "：" },
  ts = 1034,
  Y = { x: 548, y: 762 };
class ss {
  constructor() {
    ((this.A = _t()),
      (this.F = Ut()),
      (this.paper = Zt()),
      (this.desk = null),
      (this.animals = []),
      (this.grains = []),
      (this.blocks = []),
      (this.patches = []),
      (this.props = []),
      (this.fences = []),
      (this.plots = []),
      (this.oldPlots = []),
      (this.coop = {
        level: 1,
        satiety: 0.18,
        prod: 0,
        eggs: 0,
        chickens: 3,
        upgradeT: null,
        upgradeDur: 2.8,
        upgradedT: -99,
        feedT: -99,
        bumpT: -99,
      }),
      (this.mill = { angle: 0, speed: 0.7, busyT: -99, busyDur: 1.4 }),
      (this.title = { t0: -99, out: 1e9 }),
      (this.endT = -99),
      (this.writers = []),
      (this.yard = []),
      (this.today = null),
      (this.phase = "idle"),
      (this.phaseT = 0),
      (this.draftBottom = I.y + 20),
      (this.typedCount = 0),
      (this.grainEvery = 6),
      (this.draftHidden = !1),
      (this.draftFadeT = -99),
      (this.landT = -99),
      (this.ruleT = -99),
      (this.slotsUsed = 0),
      (this.expandT = -99),
      (this.ambientT = 0),
      (this.butterflies = []),
      (this.smokeT = 0),
      (this.hint = { text: "", t0: -99 }),
      (this.onLanded = null),
      (this.speed = 1),
      (this.decorA = 0),
      (this.coopInfoTick = 0),
      (this.milling = !1));
    const t = Jt(),
      s = document.createElement("canvas").getContext("2d");
    ((this.desk = s.createPattern(t, "repeat")), this.build());
  }
  build() {
    const t = this.A,
      s = kt(Et, "10月7日 · 晴", "sun", 36, 92, 12),
      e = kt(Ft, "10月9日 · 多云", "cloud", 336, 352, 14);
    this.blocks.push(s, e);
    const i = (g) => [g.ox - 10, g.oy - 6, g.width + 20, g.height + 12],
      a = i(s),
      o = i(e),
      n = [it.x - 10, it.y - 6, 14 * 17 + 20, 26 + 5 * 27 + 12];
    this.patches.push(
      Z(
        250,
        52,
        350,
        290,
        {
          seed: 11,
          blobs: [
            [450, 160, 170, 110],
            [330, 230, 90, 70],
            [520, 270, 110, 70],
            [560, 110, 70, 70],
          ],
        },
        "grass",
        [a, o],
      ),
      Z(
        0,
        236,
        330,
        420,
        {
          seed: 23,
          blobs: [
            [150, 440, 160, 150],
            [80, 330, 90, 90],
            [230, 560, 110, 90],
            [40, 560, 60, 80],
            [150, 280, 120, 50],
          ],
        },
        "grass",
        [a, o, n],
      ),
      Z(
        320,
        488,
        280,
        175,
        {
          seed: 37,
          blobs: [
            [460, 575, 145, 75],
            [360, 600, 60, 55],
            [560, 560, 60, 70],
          ],
        },
        "grass",
        [o, n],
      ),
      Z(
        368,
        640,
        232,
        222,
        {
          seed: 51,
          blobs: [
            [488, 760, 122, 100],
            [560, 700, 60, 70],
            [420, 830, 70, 40],
          ],
        },
        "grass",
        [n],
      ),
      Z(0, 846, 600, 84, { seed: 63, blobs: [[300, 888, 330, 34]] }, "path"),
    );
    for (const g of this.patches) g.appearT = -99;
    const d = [
      Z(
        258,
        650,
        136,
        210,
        {
          seed: 71,
          blobs: [
            [330, 760, 72, 108],
            [300, 700, 40, 45],
          ],
        },
        "grass",
        [n],
        330,
        760,
      ),
      Z(
        0,
        640,
        290,
        40,
        { seed: 73, blobs: [[140, 660, 150, 18]] },
        "grass",
        [n],
        140,
        660,
      ),
      Z(
        0,
        820,
        300,
        50,
        { seed: 79, blobs: [[150, 845, 160, 24]] },
        "grass",
        [n],
        150,
        845,
      ),
    ];
    for (const g of d) ((g.appearT = 1e9), (g.today = !0));
    this.patches.push(...d);
    const r = (g, P, D, F = {}) =>
      this.props.push({ sprite: g, x: P, y: D, scale: 1, appearT: -99, ...F });
    (r(t.cabin, 446, 204, { shadow: 46 }),
      r(t.apple, 548, 168, { sway: 1, shadow: 22 }),
      r(t.apple2, 300, 168, { sway: 1, shadow: 22, scale: 0.9 }),
      r(t.tree, 575, 318, { sway: 1, shadow: 20, scale: 0.85 }),
      r(t.mailbox, 365, 210),
      r(t.pond, 486, 282, { shadow: 0 }),
      r(t.bush, 300, 296),
      r(t.berryBush, 410, 300),
      r(t.barn, 150, 468, { shadow: 54 }),
      r(t.hay, 52, 470),
      r(t.hay, 252, 456, { flip: !0 }),
      r(t.troughFull, 210, 622),
      r(t.tree, 30, 300, { sway: 1, scale: 0.8, shadow: 18 }),
      r(t.orange, 300, 640, { sway: 1, scale: 0.85, shadow: 18 }),
      r(t.scarecrow, 528, 548),
      r(t.windmill, Y.x, Y.y, { shadow: 30, tag: "mill" }),
      r(t.sign, 70, 900, { tag: "stripSign" }),
      r(t.hay, 36, 912, { scale: 0.85 }),
      r(t.hay, 568, 912, { scale: 0.85, flip: !0 }),
      r(t.trough, j.x, j.y, { tag: "trough" }),
      r(t.nest, L.x, L.y, { tag: "nest" }),
      [
        [280, 120],
        [335, 128],
        [392, 248],
        [262, 250],
        [575, 108],
        [430, 330],
        [560, 340],
        [24, 250],
        [300, 350],
        [350, 655],
        [590, 640],
        [380, 640],
        [586, 840],
        [392, 852],
      ].forEach(([g, P], D) => r(t.flowers[D % 5], g, P, { sway: 0.6 })),
      [
        [262, 330],
        [340, 512],
        [24, 400],
        [590, 470],
      ].forEach(([g, P]) => r(t.mushroom, g, P)),
      [
        [588, 520],
        [318, 286],
        [12, 610],
      ].forEach(([g, P]) => r(t.stone, g, P)));
    for (let g = 0; g < 5; g++)
      r(this.F.sunflower, 470 + g * 24, 618 - (g % 2) * 6, {
        sway: 1.2,
        scale: 0.8,
      });
    ([
      [270, 210],
      [520, 220],
      [395, 120],
      [110, 360],
      [60, 520],
      [270, 600],
      [180, 640],
      [470, 590],
      [420, 700],
      [590, 780],
      [380, 790],
      [130, 896],
      [470, 900],
      [300, 920],
    ].forEach(([g, P], D) => r(this.F.tufts[D % 3], g, P, { sway: 0.8 })),
      this.fences.push({
        pts: [
          [24, 490],
          [24, 642],
          [292, 642],
          [292, 520],
        ],
        appearT: -99,
      }),
      this.fences.push({
        pts: [
          [380, 120],
          [380, 70],
          [520, 70],
        ],
        appearT: -99,
      }),
      (this.oldPlots = [
        { x: 372, y: 548 },
        { x: 412, y: 548 },
        { x: 452, y: 548 },
      ]),
      (this.plots = X.map((g) => ({
        x: g.x,
        y: g.y,
        state: "locked",
        progress: 0,
        stage: 0,
        stageT: -99,
        appearT: 1e9,
        plantT: -99,
        harvestT: -99,
      }))));
    const f = { x0: 60, y0: 1180, x1: 540, y1: 1450 },
      M = new O("chickenW", -30, 1468, f);
    M.busy = !0;
    const x = new O("chickenB", 640, 1330, f);
    ((x.busy = !0), (this.writers = [M, x]));
    const c = { x0: 386, y0: 806, x1: 584, y1: 846 };
    ((this.yard = [
      new O("chickenW", 412, 818, c),
      new O("chickenB", 470, 838, c),
      new O("chickenW", 540, 826, c),
    ]),
      (this.sheep = new O("sheep", 120, 892, {
        x0: 100,
        y0: 880,
        x1: 200,
        y1: 905,
      })),
      (this.cow = new O("cow", 470, 895, {
        x0: 430,
        y0: 884,
        x1: 520,
        y1: 905,
      })),
      (this.cow.wander = !1));
    const u = { x0: 50, y0: 520, x1: 270, y1: 630 },
      k = [
        new O("cow", 96, 580, u),
        new O("cow", 224, 612, u),
        new O("sheep", 160, 540, u),
        new O("sheep", 240, 548, u),
        new O("sheep", 90, 620, u),
        new O("chickenB", 330, 280, { x0: 280, y0: 260, x1: 420, y1: 320 }),
      ];
    this.animals.push(M, x, ...this.yard, this.sheep, this.cow, ...k);
    for (let g = 0; g < 4; g++)
      this.butterflies.push({
        x: 0,
        y: 0,
        ph: g * 1.7,
        c: g % 2,
        cx: [460, 160, 420, 330][g],
        cy: [140, 420, 600, 760][g],
        r: [60, 80, 70, 50][g],
      });
  }
  startTitle() {
    this.title.t0 = h.t;
    const t = this.writers[0];
    ((t.x = -30), (t.y = 1606), t.goTo(250, 1606, 34));
  }
  onTyped(t, s, e) {
    this.draftBottom = e;
    for (let i = 0; i < t; i++)
      (this.typedCount++,
        this.typedCount % this.grainEvery === 0 &&
          this.spawnGrain(s.x, s.y, e));
    this.updateWriterZone();
  }
  updateWriterZone() {
    const t = Math.min(1400, this.draftBottom + 34);
    for (const s of this.writers) s.zone && (s.zone.y0 = t);
  }
  spawnGrain(t, s, e) {
    const i = C(e + 26 + W.range(0, 34), 1060, 1440);
    (this.grains.push({
      x: t,
      y: s - 6,
      vx: W.range(-50, 50),
      vy: -70,
      landY: i,
      landed: !1,
      t0: h.t,
      claimed: null,
      gone: !1,
    }),
      b.sparks(t, s - 8, 5, this.A.sparkleGold, 26),
      T("grain", 0.8, (t - 300) / 300));
  }
  updateGrains(t) {
    for (const s of this.grains)
      s.gone ||
        s.landed ||
        ((s.vy += 340 * t),
        (s.x += s.vx * t),
        (s.y += s.vy * t),
        (s.x = C(s.x, 60, 540)),
        s.y >= s.landY &&
          s.vy > 0 &&
          (s.vy > 90
            ? ((s.vy *= -0.32), (s.vx *= 0.5), (s.y = s.landY))
            : ((s.y = s.landY), (s.landed = !0), (s.t0 = h.t))));
    for (const s of this.writers) {
      if (s.busy || s.target || s.act !== "idle") continue;
      let e = null,
        i = 1e9;
      for (const a of this.grains) {
        if (a.gone || !a.landed || a.claimed) continue;
        const o = Math.hypot(a.x - s.x, a.y - s.y);
        o < i && ((i = o), (e = a));
      }
      if (e) {
        const a = e;
        a.claimed = s;
        const o = s.x < a.x ? -1 : 1;
        s.goTo(a.x + o * 11, a.y + 1, 95, () => {
          ((s.facing = -o),
            s.doAct("peck", 0.34, () => this.collectGrain(a, s)),
            T("peck", 0.6));
        });
      }
    }
  }
  collectGrain(t, s) {
    t.gone = !0;
    const e = y.w2s(t.x, t.y - 4);
    (b.sparks(t.x, t.y - 4, 4, this.A.sparkle, 18),
      b.fly(this.A.ink, e.x, e.y, "ink", () => {
        (K("ink", 3), T("collect", 0.7));
      }),
      W.next() < 0.5 && b.hearts(s.x, s.y - 22, 1, this.A.heart),
      W.next() < 0.35 && T("cluck", 0.5));
  }
  startTidy(t, s = "10月11日 · 晴") {
    if (this.phase !== "idle" || t.length === 0) return !1;
    const e = this.nextSlot();
    if (!e) return (U("这一页写满啦（Demo 仅支持一篇新日记）"), !1);
    const i = t
        .map((f) => bt[f.ch] ?? f.ch)
        .join("")
        .replace(/\n/g, ""),
      a = t.filter(
        (f) =>
          f.ch !==
            `
` && f.ch !== " ",
      ),
      o = kt(i.replace(/ /g, ""), s, "sun", it.x, ts, it.cols);
    ((o.landedT = null),
      o.glyphs.forEach((f, M) => {
        const x = a[M];
        ((f.ch = x ? x.ch : f.ch),
          (f.fixTo = x && bt[x.ch] ? bt[x.ch] : null),
          (f.dx = (x ? x.x : 300) - o.ox),
          (f.dy = (x ? x.y : 1100) - o.oy),
          (f.dsize = I.font),
          (f.appearT = -99));
      }),
      (o.slot = e),
      (this.today = o),
      this.blocks.push(o),
      (this.draftFadeT = h.t),
      this.setPhase("punct"));
    const n = this.sheep;
    ((n.busy = !0),
      (n.wander = !1),
      n.goTo(18, this.sheepLineY(), 90, () => {
        n.facing = 1;
      }));
    const d = o.glyphs.filter((f) => f.fixTo),
      r = [[], []];
    d.forEach((f, M) => r[M % 2].push(f));
    let w = 2;
    const p = () => {
      --w === 0 && this.startSheep();
    };
    return (
      this.writers.forEach((f, M) => {
        f.busy = !0;
        const x = r[M].slice(),
          c = () => {
            const u = x.shift();
            if (!u) {
              ((f.busy = !1), p());
              return;
            }
            const k = o.ox + u.dx,
              g = o.oy + u.dy,
              P = f.x < k ? -1 : 1;
            f.goTo(k + P * 10, g + 14, 230, () => {
              ((f.facing = -P),
                f.doAct("peck", 0.22, () => {
                  ((u.punctFixT = h.t),
                    b.sparks(k, g, 6, this.A.sparkleGold, 26),
                    T("pop", 0.8, (k - 300) / 300),
                    c());
                }));
            });
          };
        c();
      }),
      !0
    );
  }
  sheepLineY() {
    if (!this.today) return 1100;
    const t = this.today.glyphs.map((s) => s.dy + this.today.oy);
    return (Math.min(...t) + Math.max(...t)) / 2 + 13;
  }
  setPhase(t) {
    ((this.phase = t), (this.phaseT = h.t));
  }
  startSheep() {
    const t = this.today,
      s = this.sheep,
      e = () => {
        (this.setPhase("tidy"),
          (this.ruleT = h.t + 0.2),
          T("baa", 0.8),
          s.goTo(578, this.sheepLineY(), 175, () => {
            (t.glyphs.forEach((i) => {
              i.tidyT === null && (i.tidyT = h.t);
            }),
              s.goTo(150, 892, 70, () => {
                ((s.busy = !1), (s.wander = !0));
              }));
          }));
      };
    if (s.target) {
      const i = s.onArrive;
      s.onArrive = () => {
        (i == null || i(), e());
      };
    } else e();
  }
  nextSlot() {
    return this.slotsUsed >= 1 ? null : { x: it.x, y: it.y };
  }
  updatePipeline(t) {
    const s = this.today;
    if (s) {
      if (this.phase === "tidy") {
        const e = this.sheep.x;
        for (const a of s.glyphs)
          a.tidyT === null &&
            e >= s.ox + a.dx - 8 &&
            ((a.tidyT = h.t),
            Q(a.lx, a.ly) > 0.7 &&
              b.add({
                kind: "spark",
                x: s.ox + a.dx,
                y: s.oy + a.dy,
                vy: -20,
                life: 0.5,
                size: 0.7,
                sprite: this.A.sparkle,
                front: !0,
              }));
        (this.sheep.moving &&
          Math.floor(h.t * 10) !== Math.floor((h.t - t) * 10) &&
          b.dust(this.sheep.x - 14, this.sheep.y, 1, "#f2ead8", 10, 3),
          s.glyphs.every((a) => a.tidyT !== null && h.t - a.tidyT > 0.95) &&
            (this.setPhase("card"),
            (s.cardT = h.t),
            (s.stampT = h.t + 0.45),
            T("sparkle", 0.7),
            z(0.45, () => {
              (T("stamp", 1),
                b.dust(
                  s.ox + s.width - 6,
                  s.oy + s.height - 6,
                  6,
                  "#f4c9be",
                  14,
                  3,
                ));
            }),
            z(0.6, () => this.startCow())));
      }
      if (this.phase === "carry" && s.carry) {
        const e = this.cow,
          i = e.x - s.width / 2,
          a = e.y + 22,
          o = 1 - Math.exp(-t * 9);
        ((s.ox = $(s.ox, i, o)),
          (s.oy = $(s.oy, a, o)),
          Math.floor(h.t * 6) !== Math.floor((h.t - t) * 6) &&
            b.dust(e.x + W.range(-10, 10), e.y + 2, 1, "#eadfca", 10, 3));
      }
    }
  }
  startCow() {
    const t = this.today,
      s = this.cow;
    s.busy = !0;
    const e = t.ox + t.width / 2,
      i = t.oy - 22;
    s.goTo(e, i, 210, () => {
      ((s.facing = -1),
        s.doAct("hook", 0.35, () => {
          (T("moo", 0.9),
            (t.carry = !0),
            (t.liftT = h.t),
            this.setPhase("carry"));
          const a = t.slot,
            o = a.y - 22;
          s.goTo(a.x + t.width / 2, o, 165, () => this.landBlock());
        }));
    });
  }
  landBlock() {
    const t = this.today,
      s = t.slot;
    ((t.carry = !1),
      (t.ox = s.x),
      (t.oy = s.y),
      (t.landedT = h.t),
      this.slotsUsed++,
      this.setPhase("landed"),
      T("land", 1),
      b.dust(t.ox + 10, t.oy + t.height, 6, "#efe5d2", 30, 6),
      b.dust(t.ox + t.width - 10, t.oy + t.height, 6, "#efe5d2", 30, 6),
      b.ring(
        t.ox + t.width / 2,
        t.oy + t.height / 2,
        t.width * 0.7,
        "#fff3c4",
        0.8,
      ));
    const e = this.cow;
    ((e.back = !1),
      z(0.4, () => {
        e.goTo(214, 850, 50, () => {
          ((e.busy = !1),
            (e.zone = { x0: 160, y0: 842, x1: 250, y1: 856 }),
            (e.wander = !0),
            (e.facing = -1));
        });
      }),
      z(0.3, () => this.growLand()));
  }
  growLand() {
    const t = h.t;
    this.landT = t;
    const s = Math.min(20, m.res.ink);
    s > 0 && K("ink", -s);
    const e = this.today;
    (y.w2s(e.ox + e.width - 20, e.oy + 10),
      b.float(
        s > 0 ? `−${s} 墨粒 · 开垦新土地` : "开垦新土地",
        e.ox + e.width / 2,
        e.oy - 14,
        "#8a6a2a",
        12,
        this.A.ink,
        1.8,
      ),
      T("whoosh", 0.7));
    let i = 0;
    for (const o of this.patches) o.today && (o.appearT = t + 0.1 + 0.18 * i++);
    this.plots.forEach((o, n) => {
      ((o.appearT = t + 0.55 + n * 0.12),
        (o.state = "empty"),
        z(0.55 + n * 0.12, () => {
          (T("pop", 0.55, (o.x - 300) / 300),
            b.dust(o.x, o.y + 14, 3, "#e5d3b3", 16, 4));
        }));
    });
    const a = (o, n, d, r, w = {}) =>
      this.props.push({
        sprite: o,
        x: n,
        y: d,
        scale: 1,
        appearT: t + r,
        ...w,
      });
    (a(this.A.sign, 276, 674, 1.2, { scale: 0.9 }),
      a(this.A.flowers[0], 270, 838, 1.4),
      a(this.A.flowers[2], 120, 846, 1.5),
      a(this.A.flowers[3], 40, 662, 1.55),
      a(this.F.tufts[1], 200, 660, 1.6),
      a(this.F.tufts[0], 250, 846, 1.65),
      this.fences.push({
        pts: [
          [275, 690],
          [275, 860],
        ],
        appearT: t + 1.3,
      }),
      z(1.6, () => {
        var o;
        (U("文字落地 · 长出了 6 块新田", "green", 2.4),
          T("sparkle", 0.8),
          (o = this.onLanded) == null || o.call(this));
      }));
  }
  plotAt(t, s) {
    return this.plots.findIndex(
      (e) =>
        e.state !== "locked" &&
        Math.abs(t - e.x) < ct / 2 + 2 &&
        Math.abs(s - e.y) < ct / 2 + 2,
    );
  }
  plant(t) {
    const s = this.plots[t];
    return !s || s.state !== "empty"
      ? !1
      : m.res.seed <= 0
        ? (U("种子不够啦"), !1)
        : (K("seed", -1),
          (s.state = "growing"),
          (s.progress = 0),
          (s.stage = 0),
          (s.stageT = h.t),
          (s.plantT = h.t),
          b.dust(s.x, s.y + 10, 4, "#d9bf98", 16, 4),
          b.sparks(s.x, s.y, 4, this.A.sparkle, 20),
          b.float("−1 种子", s.x, s.y - 22, "#7a5a2a", 11),
          T("plant", 0.9, (s.x - 300) / 300),
          !0);
  }
  harvest(t) {
    const s = this.plots[t];
    if (!s || s.state !== "ripe") return !1;
    ((s.state = "empty"),
      (s.stage = 0),
      (s.progress = 0),
      (s.harvestT = h.t),
      T("harvest", 0.9, (s.x - 300) / 300),
      b.confetti(s.x, s.y, 0, 0));
    for (let i = 0; i < 6; i++)
      b.add({
        kind: "sprite",
        sprite: this.F.straw,
        x: s.x + W.range(-12, 12),
        y: s.y,
        vx: W.range(-50, 50),
        vy: W.range(-110, -60),
        g: 320,
        drag: 0.6,
        life: 0.8,
        size: 1,
        rot: W.range(0, 6),
        vr: W.range(-8, 8),
        front: !0,
      });
    const e = y.w2s(s.x, s.y - 14);
    return (
      b.fly(
        this.A.wheat,
        e.x,
        e.y,
        "wheat",
        () => {
          (K("wheat", 3), T("collect", 0.6));
        },
        0.8,
        1.5,
      ),
      b.float("+3", s.x, s.y - 26, "#a8742a", 13, void 0, 1.1),
      !0
    );
  }
  mill9() {
    if (m.res.wheat < 9 || this.milling)
      return (this.milling || U("小麦不够 9 束"), !1);
    ((this.milling = !0),
      K("wheat", -9),
      (this.mill.busyT = h.t),
      T("mill", 1));
    for (let t = 0; t < 3; t++)
      z(0.3 + t * 0.42, () => {
        (b.dust(Y.x - 4, Y.y - 6, 5, "#fbf3e1", 22, 5), T("pop", 0.6, 0.6));
        const s = y.w2s(Y.x - 8, Y.y - 20);
        b.fly(
          this.A.feed,
          s.x,
          s.y,
          "feed",
          () => {
            (K("feed", 2), T("collect", 0.6));
          },
          0.8,
          1.5,
        );
      });
    return (
      z(this.mill.busyDur + 0.1, () => {
        this.milling = !1;
      }),
      !0
    );
  }
  feedChickens() {
    if (m.res.feed < 2) return (U("饲料不够啦"), !1);
    (K("feed", -2),
      (this.coop.feedT = h.t),
      T("pop", 0.8),
      b.dust(j.x, j.y - 4, 5, "#f6dd94", 14, 4));
    const t = this.props.find((e) => e.tag === "trough");
    t && (t.sprite = this.A.troughFull);
    const s = [
      [j.x - 22, j.y + 4, 1],
      [j.x + 22, j.y + 4, -1],
      [j.x - 4, j.y + 14, 1],
    ];
    return (
      this.yard.forEach((e, i) => {
        e.busy = !0;
        const [a, o, n] = s[i % 3];
        e.goTo(a, o, 110, () => {
          ((e.facing = n),
            e.doAct("eat", 1.6, () => {
              ((e.busy = !1),
                e.doAct("happy", 0.5),
                b.hearts(e.x, e.y - 24, 2, this.A.heart));
            }),
            T("eat", 0.6));
        });
      }),
      !0
    );
  }
  collectEggs() {
    const t = this.coop.eggs;
    if (t <= 0) return !1;
    this.coop.eggs = 0;
    for (let s = 0; s < t; s++) {
      const e = L.x - 8 + s * 8;
      z(s * 0.12, () => {
        const i = y.w2s(e, L.y - 6);
        b.fly(
          this.A.egg,
          i.x,
          i.y,
          "egg",
          () => {
            (K("egg", 1), T("collect", 0.7));
          },
          0.8,
          1.8,
        );
      });
    }
    return (
      T("egg", 0.8),
      b.float(`+${t} 鸡蛋`, L.x, L.y - 26, "#a8742a", 12),
      !0
    );
  }
  upgradeCoop() {
    if (this.coop.level >= 2 || this.coop.upgradeT !== null) return !1;
    if (m.res.coin < 150) return (U("金币不够"), !1);
    (K("coin", -150),
      (this.coop.upgradeT = h.t),
      T("whoosh", 0.6),
      b.dust(v.x, v.y, 10, "#efe5d2", 40, 7));
    const t = 7;
    for (let s = 0; s < t; s++)
      z(0.35 + s * 0.4, () => {
        T("hammer", 0.9, (v.x - 300) / 300);
        const e = v.x + [-28, 24, -10, 30, -24, 6, 20][s],
          i = v.y - [50, 30, 70, 58, 24, 78, 44][s];
        (b.dust(e, i, 3, "#f1e6d0", 16, 4),
          b.add({
            kind: "sprite",
            sprite: this.F.plank,
            x: e,
            y: i,
            vx: W.range(-60, 60),
            vy: -80,
            g: 300,
            drag: 0.7,
            life: 0.7,
            size: 1,
            rot: W.range(0, 3),
            vr: W.range(-9, 9),
            front: !0,
          }));
      });
    return (z(this.coop.upgradeDur, () => this.finishUpgrade()), !0);
  }
  finishUpgrade() {
    const t = this.coop;
    ((t.level = 2),
      (t.upgradeT = null),
      (t.upgradedT = h.t),
      T("upgrade", 1),
      b.dust(v.x, v.y - 10, 14, "#ffffff", 60, 9),
      b.ring(v.x, v.y - 30, 80, "#fff3c4", 0.9),
      b.glow(v.x, v.y - 40, 110, "rgba(255,230,160,", 1.2),
      b.confetti(v.x, v.y - 60, 46, 190),
      Ot("鸡舍升级 · Lv.2", "简陋木棚 → 温馨红顶鸡舍"),
      z(1.05, () => {
        (T("levelup", 0.9),
          this.yard.forEach((s, e) => {
            z(e * 0.18, () => {
              ((s.level = 2),
                (s.levelUpT = h.t),
                (s.jumpT = h.t),
                b.float("Lv.2 ↑", s.x, s.y - 30, "#d9822b", 12, void 0, 1.6),
                b.sparks(s.x, s.y - 14, 6, this.A.sparkleGold, 30));
            });
          }));
        for (let s = 0; s < 2; s++) {
          const e = new O("chick", v.x + 2, v.y + 2, {
            x0: 392,
            y0: 812,
            x1: 560,
            y1: 848,
          });
          ((e.appearT = h.t + 0.5 + s * 0.25),
            (e.busy = !0),
            this.animals.push(e),
            z(0.5 + s * 0.25, () => {
              (T("pop", 0.6),
                e.goTo(v.x - 30 + s * 60, 832 + s * 6, 60, () => {
                  e.busy = !1;
                }));
            }));
        }
        U("小鸡升到 Lv.2 · 产蛋效率 +50%", "gold", 2.6);
      }));
  }
  expand() {
    const t = h.t;
    this.expandT = t;
    const s = (a, o, n, d, r = {}) => {
      (this.props.push({
        sprite: a,
        x: o,
        y: n,
        scale: 1,
        appearT: t + d,
        ...r,
      }),
        z(d, () => T("pop", 0.35, (o - 300) / 300)));
    };
    (s(this.F.sunflower, 360, 690, 0.2, { sway: 1.2, scale: 0.8 }),
      s(this.A.berryBush, 255, 842, 0.4),
      s(this.A.flowers[1], 15, 845, 0.5),
      s(this.A.flowers[4], 180, 662, 0.55),
      s(this.A.mushroom, 268, 650, 0.65),
      this.fences.push({
        pts: [
          [384, 862],
          [596, 862],
        ],
        appearT: t + 0.3,
      }));
    const e = new O("sheep", 310, 880, { x0: 260, y0: 872, x1: 380, y1: 908 });
    ((e.appearT = t + 0.8), this.animals.push(e));
    const i = new O("chickenW", 120, 1300, {
      x0: 60,
      y0: 1200,
      x1: 540,
      y1: 1440,
    });
    ((i.appearT = t + 1), this.animals.push(i));
  }
  update(t) {
    this.decorA +=
      ((m.mode === "title" ? 0 : 1) - this.decorA) * (1 - Math.exp(-t * 3));
    for (const n of this.animals) n.update(t);
    (this.updateGrains(t), this.updatePipeline(t), is());
    const s = m.speedUp ? 8 : 1;
    for (const n of this.plots) {
      if (n.state !== "growing") continue;
      n.progress = Math.min(1, n.progress + (t * s) / 30);
      const d =
        n.progress >= 1
          ? 4
          : n.progress >= 0.7
            ? 3
            : n.progress >= 0.42
              ? 2
              : n.progress >= 0.16
                ? 1
                : 0;
      d !== n.stage &&
        ((n.stage = d),
        (n.stageT = h.t),
        b.sparks(
          n.x,
          n.y - 8,
          d === 4 ? 8 : 3,
          d === 4 ? this.A.sparkleGold : this.A.sparkle,
          d === 4 ? 30 : 16,
        ),
        T(
          d === 4 ? "sparkle" : "grow",
          d === 4 ? 0.5 : 0.35,
          (n.x - 300) / 300,
        ),
        d === 4 && (n.state = "ripe"));
    }
    const e = this.coop;
    if (e.feedT > 0 && h.t - e.feedT > 0) {
      const n = A(e.feedT, 1.6);
      n < 1 && (e.satiety = Math.max(e.satiety, $(0.18, 1, G(n))));
    }
    if (
      !(e.satiety < 0.3) &&
      e.upgradeT === null &&
      e.eggs < 6 &&
      h.t - e.feedT > 1.2 &&
      ((e.prod += (t * s * (e.level === 2 ? 1.5 : 1)) / 9),
      (e.satiety = Math.max(0, e.satiety - t * s * 0.004)),
      e.prod >= 1)
    ) {
      e.prod = 0;
      const n = e.chickens;
      for (let d = 0; d < n; d++)
        z(d * 0.16, () => {
          (e.eggs++,
            (e.bumpT = h.t),
            b.sparks(
              L.x - 8 + (e.eggs - 1) * 8,
              L.y - 6,
              4,
              this.A.sparkle,
              16,
            ),
            T("egg", 0.7, 0.6));
        });
    }
    const a = A(this.mill.busyT, this.mill.busyDur),
      o = a > 0 && a < 1 ? 7 : 0.7;
    ((this.mill.speed += (o - this.mill.speed) * (1 - Math.exp(-t * 3))),
      (this.mill.angle += this.mill.speed * t),
      (this.smokeT += t),
      this.smokeT > 0.55 &&
        ((this.smokeT = 0),
        b.add({
          kind: "dust",
          x: 474 + W.range(-1, 1),
          y: 110,
          vx: W.range(4, 10),
          vy: -16,
          drag: 0.6,
          life: 2.4,
          size: W.range(3, 5),
          color: "#ebe6dc",
        })));
    for (const n of this.butterflies)
      ((n.ph += t),
        (n.x = n.cx + Math.sin(n.ph * 0.7) * n.r + Math.sin(n.ph * 2.3) * 8),
        (n.y =
          n.cy +
          Math.cos(n.ph * 0.53) * n.r * 0.45 +
          Math.sin(n.ph * 3.1) * 6));
  }
  render(t, s) {
    const e = y.pose();
    (t.setTransform(s, 0, 0, s, 0, 0),
      t.save(),
      t.translate(B / 2 - e.x * e.zoom, R / 2 - e.y * e.zoom),
      t.scale(e.zoom, e.zoom));
    const i = y.s2w(0, 0, e),
      a = y.s2w(B, R, e);
    ((i.x < 0 || i.y < 0 || a.x > N || a.y > st) &&
      ((t.fillStyle = this.desk),
      t.fillRect(i.x - 4, i.y - 4, a.x - i.x + 8, a.y - i.y + 8),
      t.save(),
      (t.shadowColor = "rgba(90,64,40,0.28)"),
      (t.shadowBlur = 26 * e.zoom * s),
      (t.shadowOffsetY = 8 * e.zoom * s),
      (t.fillStyle = "#fbf7ed"),
      t.fillRect(0, 0, N, st),
      t.restore()),
      (t.imageSmoothingEnabled = !0),
      (t.imageSmoothingQuality = "high"),
      t.drawImage(this.paper, 0, 0, N, st),
      this.drawPaperDecor(t));
    for (const r of this.patches) this.drawPatch(t, r);
    (this.drawPlotsGround(t), this.drawOldPlots(t));
    for (const r of this.blocks) this.drawBlock(t, r);
    this.drawTitle(t);
    for (const r of this.grains) {
      if (r.gone) continue;
      const w = C(1 - (r.landY - r.y) / 80);
      ((t.fillStyle = `rgba(150,110,50,${0.18 * w})`),
        t.beginPath(),
        t.ellipse(r.x, r.landY + 2, 5, 2, 0, 0, Math.PI * 2),
        t.fill());
      const p = r.landed ? Math.sin((h.t - r.t0) * 4) * 0.08 : 0,
        f = t.createRadialGradient(r.x, r.y - 5, 0, r.x, r.y - 5, 14);
      (f.addColorStop(0, `rgba(255,214,90,${0.45 + p})`),
        f.addColorStop(1, "rgba(255,214,90,0)"),
        (t.fillStyle = f),
        t.fillRect(r.x - 14, r.y - 19, 28, 28),
        S(t, this.A.ink, r.x, r.y - 5, { sx: 1.15 + p, sy: 1.15 + p }));
    }
    const o = [];
    for (const r of this.animals)
      r.hidden ||
        A(r.appearT, 0.5) <= 0 ||
        o.push({ y: r.y, d: () => r.draw(t, this.A) });
    for (const r of this.props) {
      const w = A(r.appearT, 0.55);
      w <= 0 || o.push({ y: r.y, d: () => this.drawProp(t, r, w) });
    }
    (this.plots.forEach((r) => {
      (r.state === "growing" || r.state === "ripe" || A(r.harvestT, 0.5) < 1) &&
        o.push({ y: r.y + ct / 2 - 2, d: () => this.drawCrop(t, r) });
    }),
      this.oldPlots.forEach((r, w) =>
        o.push({
          y: r.y + 14,
          d: () =>
            S(t, this.F.cabbage, r.x, r.y + 15, {
              sx: 1,
              sy: 1 + Math.sin(h.t * 1.5 + w) * 0.02,
            }),
        }),
      ));
    for (const r of this.fences) this.collectFence(t, r, o);
    (o.push({ y: v.y, d: () => this.drawCoop(t) }),
      o.push({ y: Y.y + 1, d: () => this.drawBlades(t) }),
      o.push({ y: L.y + 1, d: () => this.drawEggs(t) }),
      (t.fillStyle = "rgba(110,80,50,0.16)"));
    for (const r of this.animals) {
      if (r.hidden || A(r.appearT, 0.5) <= 0) continue;
      const w = r.shadowR() * r.scale;
      (t.beginPath(),
        t.ellipse(r.x, r.y, w, w * 0.32, 0, 0, Math.PI * 2),
        t.fill());
    }
    for (const r of this.props)
      !r.shadow ||
        A(r.appearT, 0.55) <= 0 ||
        (t.beginPath(),
        t.ellipse(
          r.x,
          r.y - 1,
          r.shadow * r.scale,
          r.shadow * r.scale * 0.22,
          0,
          0,
          Math.PI * 2,
        ),
        t.fill());
    (t.beginPath(),
      t.ellipse(
        v.x,
        v.y - 1,
        this.coop.level === 2 ? 46 : 34,
        7,
        0,
        0,
        Math.PI * 2,
      ),
      t.fill(),
      o.sort((r, w) => r.y - w.y));
    for (const r of o) r.d();
    this.drawRope(t);
    for (const r of this.butterflies) {
      const w =
        this.A[r.c ? "butterflyB" : "butterflyA"][
          Math.floor(h.t * 9 + r.ph) % 2
        ];
      S(t, w, r.x, r.y, { sx: 0.8, sy: 0.8 });
    }
    (this.drawIndicators(t),
      b.drawParticles(t, !1),
      b.drawParticles(t, !0),
      b.drawFloats(t),
      t.restore());
    const n = t.createRadialGradient(B * 0.3, -80, 40, B * 0.3, -80, R * 0.9);
    (n.addColorStop(0, "rgba(255,236,190,0.22)"),
      n.addColorStop(1, "rgba(255,236,190,0)"),
      (t.fillStyle = n),
      t.fillRect(0, 0, B, R));
    const d = t.createRadialGradient(
      B / 2,
      R / 2,
      R * 0.38,
      B / 2,
      R / 2,
      R * 0.75,
    );
    (d.addColorStop(0, "rgba(80,50,20,0)"),
      d.addColorStop(1, "rgba(80,50,20,0.16)"),
      (t.fillStyle = d),
      t.fillRect(0, 0, B, R));
  }
  drawPaperDecor(t) {
    const s = (e, i, a, o) => {
      (t.save(),
        t.translate(e, i),
        t.rotate(a),
        (t.fillStyle = o),
        (t.globalAlpha = 0.82),
        t.fillRect(-34, -10, 68, 20),
        (t.globalAlpha = 0.35),
        (t.fillStyle = "#ffffff"));
      for (let n = -30; n < 34; n += 10) t.fillRect(n, -10, 4, 20);
      t.restore();
    };
    (s(14, 14, -0.75, "#b9d8a8"),
      s(586, 14, 0.75, "#f3c1b4"),
      (t.fillStyle = "rgba(176,150,118,0.38)"));
    for (let e = 14; e < N - 10; e += 9)
      (t.beginPath(), t.arc(e, 928, 1.5, 0, Math.PI * 2), t.fill());
    ((t.strokeStyle = "rgba(178,150,112,0.16)"), (t.lineWidth = 1));
    for (let e = 0; e < 11; e++) {
      const i = I.y + I.lh * (e + 1) - 3;
      (t.beginPath(), t.moveTo(40, i), t.lineTo(560, i), t.stroke());
    }
    ((t.strokeStyle = "rgba(232,140,120,0.22)"),
      t.beginPath(),
      t.moveTo(32, 950),
      t.lineTo(32, 1480),
      t.stroke(),
      t.save(),
      (t.globalAlpha = this.decorA),
      (t.fillStyle = "#9b8268"),
      (t.font = `15px ${H}`),
      (t.textBaseline = "middle"),
      (t.textAlign = "left"),
      t.fillText("10月11日  星期六", 44, 978),
      (t.fillStyle = "#c4ad8f"),
      (t.font = `13px ${H}`),
      t.fillText("· 今天的日记", 168, 979),
      S(t, this.A.sparkleGold, 548, 978, { sx: 1.1, sy: 1.1 }),
      t.beginPath(),
      (t.fillStyle = "#ffd96b"),
      t.arc(530, 978, 7, 0, Math.PI * 2),
      t.fill(),
      (t.strokeStyle = "#d9a03b"),
      (t.lineWidth = 1.4),
      t.stroke());
    for (let e = 0; e < 8; e++) {
      const i = (e / 8) * Math.PI * 2 + h.t * 0.4;
      (t.beginPath(),
        t.moveTo(530 + Math.cos(i) * 10, 978 + Math.sin(i) * 10),
        t.lineTo(530 + Math.cos(i) * 13, 978 + Math.sin(i) * 13),
        t.stroke());
    }
    if (
      (t.restore(),
      (t.fillStyle = "rgba(155,130,104,0.75)"),
      (t.font = `11px ${H}`),
      (t.textAlign = "center"),
      t.fillText("· 小动物整理站 ·", 300, 912),
      this.phase === "landed")
    ) {
      const e = A(this.landT + 2.5, 1.2);
      e > 0 &&
        ((t.globalAlpha = e * 0.55),
        (t.fillStyle = "#a8957f"),
        (t.font = `20px ${H}`),
        (t.textAlign = "left"),
        t.fillText("明天，还想写点什么？", 46, I.y + 20),
        (t.globalAlpha = 1));
    }
  }
  drawPatch(t, s) {
    if (s.appearT > h.t) return;
    const e = A(s.appearT, 1);
    if (e >= 1 || s.appearT < 0) {
      t.drawImage(s.img, s.x, s.y, s.w, s.h + 4);
      return;
    }
    const i = _(e),
      a = Math.hypot(s.w, s.h) * i;
    (t.save(), t.beginPath());
    for (let o = 0; o <= 28; o++) {
      const n = (o / 28) * Math.PI * 2,
        d = a * (1 + Math.sin(n * 5 + s.x) * 0.08),
        r = s.cx + Math.cos(n) * d,
        w = s.cy + Math.sin(n) * d;
      o ? t.lineTo(r, w) : t.moveTo(r, w);
    }
    (t.clip(), t.drawImage(s.img, s.x, s.y, s.w, s.h + 4), t.restore());
  }
  drawPlotsGround(t) {
    for (const s of this.plots) {
      if (s.state === "locked") continue;
      const e = A(s.appearT, 0.5);
      if (e <= 0) continue;
      const i = J(e),
        a = s.state === "growing" || s.state === "ripe";
      S(t, a ? this.F.soilWet : this.F.soil, s.x, s.y, { sx: i.sx, sy: i.sy });
      const o = A(s.plantT, 0.4);
      o > 0 &&
        o < 1 &&
        (t.save(),
        (t.globalAlpha = 1 - o),
        (t.strokeStyle = "#fff2c4"),
        (t.lineWidth = 2),
        t.strokeRect(
          s.x - 18 - o * 4,
          s.y - 18 - o * 4,
          36 + o * 8,
          36 + o * 8,
        ),
        t.restore());
    }
  }
  drawOldPlots(t) {
    for (const s of this.oldPlots)
      S(t, this.F.soilWet, s.x, s.y + 4, { sx: 1, sy: 0.9 });
  }
  drawCrop(t, s) {
    const e = A(s.harvestT, 0.5);
    if (s.state === "empty" && e > 0 && e < 1) {
      S(t, this.F.wheat[4], s.x, s.y + 14 - _(e) * 16, {
        sx: 1 + e * 0.2,
        sy: 1 + e * 0.2,
        alpha: 1 - e,
      });
      return;
    }
    if (s.state !== "growing" && s.state !== "ripe") return;
    const i = A(s.stageT, 0.45),
      a = i < 1 ? J(0.35 + i * 0.65) : { sx: 1, sy: 1 },
      o = Math.sin(h.t * 2.1 + s.x * 0.07) * (s.stage >= 3 ? 0.05 : 0.025);
    (S(t, this.F.wheat[s.stage], s.x, s.y + 14, { sx: a.sx, sy: a.sy, rot: o }),
      s.state === "ripe" &&
        Math.sin(h.t * 3 + s.x) > 0.6 &&
        S(t, this.A.sparkle, s.x + 10 * Math.sin(s.y + h.t), s.y - 20, {
          sx: 0.7,
          sy: 0.7,
          alpha: 0.9,
        }));
  }
  drawProp(t, s, e) {
    const i = J(e);
    let a = 0,
      o = 1;
    (s.sway &&
      ((a = Math.sin(h.t * 1.3 + s.x * 0.05) * 0.018 * s.sway),
      (o = 1 + Math.sin(h.t * 1.1 + s.y) * 0.01 * s.sway)),
      S(t, s.sprite, s.x, s.y, {
        flip: s.flip,
        sx: s.scale * i.sx * o,
        sy: s.scale * i.sy,
        rot: a,
      }));
  }
  collectFence(t, s, e) {
    const i = A(s.appearT, 0.6);
    if (i <= 0) return;
    const a = [];
    for (let n = 0; n < s.pts.length - 1; n++) {
      const [d, r] = s.pts[n],
        [w, p] = s.pts[n + 1],
        f = Math.max(1, Math.round(Math.hypot(w - d, p - r) / 22));
      for (let M = 0; M < f; M++) a.push([$(d, w, M / f), $(r, p, M / f)]);
    }
    a.push(s.pts[s.pts.length - 1]);
    const o = Math.ceil(a.length * i);
    for (let n = 0; n < o; n++) {
      const [d, r] = a[n],
        w = n + 1 < o ? a[n + 1] : null;
      e.push({
        y: r,
        d: () => {
          if (w) {
            ((t.strokeStyle = "#5b3f33"),
              (t.lineWidth = 4),
              (t.lineCap = "round"));
            for (const p of [11, 5])
              (t.beginPath(),
                t.moveTo(d, r - p),
                t.lineTo(w[0], w[1] - p),
                t.stroke());
            ((t.strokeStyle = "#dcae74"), (t.lineWidth = 2));
            for (const p of [11, 5])
              (t.beginPath(),
                t.moveTo(d, r - p),
                t.lineTo(w[0], w[1] - p),
                t.stroke());
          }
          S(t, this.A.post, d, r + 1);
        },
      });
    }
  }
  drawCoop(t) {
    const s = this.coop,
      e = A(s.bumpT, 0.3),
      i = e > 0 && e < 1 ? 1 + ht(e) * 0.03 : 1;
    if (s.upgradeT !== null) {
      const a = (h.t - s.upgradeT) / s.upgradeDur,
        o = Math.sin(h.t * 40) * 0.8;
      S(t, this.A.coop1, v.x + o, v.y, { sx: 1, sy: 1 });
      const n = A(s.upgradeT, 0.4);
      S(t, this.A.scaffold, v.x, v.y + 2, {
        sx: J(n).sx,
        sy: J(n).sy,
        alpha: 0.95,
      });
      for (let r = 0; r < 2; r++) {
        const w = v.x + (r ? 30 : -30),
          p = v.y - (r ? 60 : 40),
          f = Math.sin(h.t * 14 + r * 2);
        S(t, this.A.hammer, w, p, { rot: f * 0.7 - 0.3, flip: r === 1 });
      }
      const d = 70;
      ((t.fillStyle = "rgba(91,63,51,0.85)"),
        ft(t, v.x - d / 2 - 2, v.y - 104, d + 4, 11, 5),
        t.fill(),
        (t.fillStyle = "#ffe08a"),
        ft(t, v.x - d / 2, v.y - 102, d * C(a), 7, 3.5),
        t.fill(),
        (t.fillStyle = "#5b3f33"),
        (t.font = `bold 11px ${H}`),
        (t.textAlign = "center"),
        t.fillText("施工中…", v.x, v.y - 114));
      return;
    }
    if (s.level === 1) S(t, this.A.coop1, v.x, v.y, { sx: i, sy: i });
    else {
      const a = A(s.upgradedT, 0.7),
        o = J(a);
      S(t, this.A.coop2, v.x, v.y, { sx: o.sx * i, sy: o.sy * i });
    }
  }
  drawBlades(t) {
    S(t, this.A.blades, Y.x, Y.y - 78, { rot: this.mill.angle });
  }
  drawEggs(t) {
    for (let s = 0; s < this.coop.eggs; s++)
      S(t, this.A.egg, L.x - 8 + s * 8, L.y - 1 - (s % 2) * 2, {
        sx: 0.9,
        sy: 0.9,
      });
  }
  drawRope(t) {
    const s = this.today;
    if (!s || !s.carry) return;
    const e = this.cow,
      i = e.x,
      a = e.y - 4,
      o = s.ox + s.width / 2,
      n = s.oy - 12;
    ((t.strokeStyle = "#a5794f"),
      (t.lineWidth = 1.6),
      t.beginPath(),
      t.moveTo(i, a),
      t.quadraticCurveTo((i + o) / 2 + 3, (a + n) / 2 + 6, o, n),
      t.stroke());
  }
  drawBlock(t, s) {
    const e = s === this.today,
      i = s;
    (t.save(), t.translate(s.ox, s.oy));
    const a = !!i.carry;
    a &&
      (t.translate(s.width / 2, 0),
      t.rotate(Math.sin(h.t * 5) * 0.012),
      t.translate(-s.width / 2, 0));
    const o = e ? A(i.cardT, 0.45) : 0,
      n = e && s.landedT !== null ? A(s.landedT, 0.9) : 0,
      d = e ? o * (1 - n) : 0;
    if (d > 0) {
      const f = a ? 1 : e && s.landedT !== null ? 1 - _(n) : o;
      (t.save(),
        (t.globalAlpha = d),
        (t.shadowColor = "rgba(90,64,40,0.25)"),
        (t.shadowBlur = (6 + f * 10) * y.zoom * 2),
        (t.shadowOffsetY = (2 + f * 6) * y.zoom * 2),
        (t.fillStyle = "#fffdf6"),
        ft(t, -12, -10, s.width + 24, s.height + 20, 8),
        t.fill(),
        t.restore(),
        t.save(),
        (t.globalAlpha = d * 0.85),
        t.translate(s.width / 2, -9),
        t.rotate(-0.03),
        (t.fillStyle = "#bfdcae"),
        t.fillRect(-30, -7, 60, 14),
        t.restore());
    }
    if (e && this.ruleT > 0) {
      const f = A(this.ruleT, 0.8) * (1 - n);
      if (f > 0) {
        ((t.strokeStyle = `rgba(150,180,120,${0.35 * f})`),
          t.setLineDash([3, 4]),
          (t.lineWidth = 1));
        for (let M = 0; M < s.lines; M++) {
          const x = 26 + (M + 1) * 27 - 3;
          (t.beginPath(),
            t.moveTo(0, x),
            t.lineTo(s.width * _(f), x),
            t.stroke());
        }
        t.setLineDash([]);
      }
    }
    const r = e ? A(i.cardT, 0.6) : 1;
    if (r > 0) {
      ((t.globalAlpha = r),
        (t.fillStyle = "#a58c70"),
        (t.font = `12px ${H}`),
        (t.textAlign = "left"),
        (t.textBaseline = "middle"),
        t.fillText(s.date, 0, 11));
      const f = t.measureText(s.date).width;
      ((t.strokeStyle = "rgba(165,140,112,0.35)"),
        (t.lineWidth = 1),
        t.beginPath(),
        t.moveTo(f + 6, 11),
        t.lineTo(s.width, 11),
        t.stroke(),
        (t.globalAlpha = 1));
    }
    ((t.textAlign = "center"), (t.textBaseline = "middle"));
    const w = e ? A(this.draftFadeT, 0.12) : 1;
    for (const f of s.glyphs) {
      let M = f.lx,
        x = f.ly,
        c = St,
        u = 0,
        k = zt;
      if (e) {
        if (f.tidyT === null)
          ((M = f.dx), (x = f.dy), (c = f.dsize), (k = "#4f3f33"));
        else {
          const F = C((h.t - f.tidyT) / 0.9),
            V = G(F);
          ((M = $(f.dx, f.lx, V)),
            (x = $(f.dy, f.ly, V) - ht(F) * 16),
            (c = $(f.dsize, St, V)),
            (u = ht(F) * Math.sin(f.wobSeed * 7) * 0.35));
        }
        const g = f.fixTo;
        let P = f.ch,
          D = 1;
        if (f.punctFixT !== null && g) {
          const F = C((h.t - f.punctFixT) / 0.32);
          ((D = Math.abs(Math.cos(F * Math.PI))),
            (P = F >= 0.5 ? g : f.ch),
            F >= 1 && (f.ch = g),
            F < 1 && (x -= ht(F) * 8));
        } else g && f.punctFixT === null && (k = "#c0703c");
        if (s.landedT !== null) {
          const F = A(s.landedT + (f.lx + f.ly) * 0.002, 0.6);
          F < 1 && (k = es(F));
        }
        (t.save(),
          (t.globalAlpha = w),
          t.translate(M, x),
          u && t.rotate(u),
          D !== 1 && t.scale(1, Math.max(0.05, D)),
          (t.fillStyle = k),
          (t.font = `${c.toFixed(2)}px ${H}`),
          t.fillText(P, 0, 0),
          t.restore());
      } else
        ((t.fillStyle = k), (t.font = `${c}px ${H}`), t.fillText(f.ch, M, x));
    }
    const p = e ? A(i.stampT, 0.35) : 1;
    if (p > 0) {
      const f = e ? $(2.4, 1, ot(p, 1.2)) : 1;
      (t.save(),
        t.translate(s.width + 2, s.height - 8),
        t.rotate(-0.12),
        t.scale(f, f),
        (t.globalAlpha = C(p * 1.6) * 0.88),
        (t.strokeStyle = "#d9574a"),
        (t.lineWidth = 1.6),
        ft(t, -11, -11, 22, 22, 4),
        t.stroke(),
        (t.fillStyle = "#d9574a"),
        (t.font = `bold 15px ${H}`),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"),
        t.fillText("整", 0, 1),
        t.restore());
    }
    t.restore();
  }
  drawTitle(t) {
    if (this.title.t0 < 0) return;
    const s = A(this.title.out, 0.9);
    if (s >= 1) return;
    const e = 300,
      i = 1288,
      a = ["字", "里", "有", "田"];
    (t.save(),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      a.forEach((r, w) => {
        const p = A(this.title.t0 + 0.6 + w * 0.32, 0.8);
        if (p <= 0) return;
        const f = e + (w - 1.5) * 76,
          M = i - _(s) * 30 * (1 + w * 0.15);
        (t.save(), (t.globalAlpha = p * (1 - s)), t.translate(f, M));
        const x = $(1.25, 1, ot(p, 1.4));
        (t.scale(x, x),
          (t.fillStyle = `rgba(110,80,50,${0.12 * (1 - p)})`),
          (t.font = `bold 78px ${H}`),
          t.fillText(r, 2, 3),
          (t.fillStyle = zt),
          t.fillText(r, 0, 0),
          t.restore());
      }));
    const o = A(this.title.t0 + 2.1, 0.6);
    if (o > 0) {
      const r = J(o);
      S(t, this.A.sprout, e + 1.5 * 76 + 22, i - 34 - _(s) * 40, {
        sx: r.sx * 1.4,
        sy: r.sy * 1.4,
        alpha: 1 - s,
      });
    }
    const n = A(this.title.t0 + 2.2, 0.8);
    if (n > 0) {
      ((t.globalAlpha = n * (1 - s)),
        (t.fillStyle = "#a58c70"),
        (t.font = `20px ${H}`),
        t.fillText("P a p e r   F a r m", e, i + 72 - _(s) * 30),
        (t.strokeStyle = "rgba(165,140,112,0.6)"),
        (t.lineWidth = 1));
      const r = 150 * _(n);
      (t.beginPath(),
        t.moveTo(e - r, i + 50),
        t.lineTo(e + r, i + 50),
        t.stroke());
    }
    const d = A(this.title.t0 + 3, 0.8);
    (d > 0 &&
      ((t.globalAlpha = d * (1 - s)),
      (t.fillStyle = "#7d6550"),
      (t.font = `19px ${H}`),
      t.fillText("一本会长出农场的日记", e, i + 108 - _(s) * 30)),
      t.restore());
  }
  drawIndicators(t) {
    if (m.mode !== "farm") return;
    const s = h.t;
    for (const e of this.plots)
      e.state === "growing" &&
        (t.save(),
        t.translate(e.x + 13, e.y - 26),
        (t.fillStyle = "rgba(255,253,246,0.92)"),
        t.beginPath(),
        t.arc(0, 0, 6.5, 0, Math.PI * 2),
        t.fill(),
        (t.strokeStyle = "#88bf64"),
        (t.lineWidth = 2.2),
        t.beginPath(),
        t.arc(0, 0, 4.5, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * e.progress),
        t.stroke(),
        t.restore());
    if (this.coop.eggs > 0 && this.coop.upgradeT === null) {
      const e = L.y - 30 + Math.sin(s * 4) * 2.5;
      It(t, L.x, e, () => S(t, this.A.egg, L.x, e + 5, { sx: 0.9, sy: 0.9 }));
    }
    if (this.coop.satiety < 0.3 && this.coop.upgradeT === null) {
      const e = v.y - 72 + Math.sin(s * 3) * 2;
      It(t, v.x + 26, e, () =>
        S(t, this.A.feed, v.x + 26, e + 5, { sx: 0.7, sy: 0.7 }),
      );
    }
  }
  hit(t, s) {
    const e = this.plotAt(t, s);
    if (e >= 0) return { kind: "plot", i: e };
    if (
      Math.abs(t - L.x) < 14 &&
      Math.abs(s - L.y + 4) < 12 &&
      this.coop.eggs > 0
    )
      return { kind: "nest" };
    const i = this.coop.level === 2 ? 92 : 58;
    return Math.abs(t - v.x) < (this.coop.level === 2 ? 44 : 34) &&
      s < v.y + 6 &&
      s > v.y - i
      ? { kind: "coop" }
      : Math.abs(t - Y.x) < 34 && s < Y.y + 4 && s > Y.y - 120
        ? { kind: "mill" }
        : null;
  }
}
function It(l, t, s, e) {
  (l.save(),
    (l.fillStyle = "#fffdf6"),
    (l.strokeStyle = "#5b3f33"),
    (l.lineWidth = 1.4),
    ft(l, t - 10, s - 9, 20, 18, 7),
    l.fill(),
    l.stroke(),
    l.beginPath(),
    l.moveTo(t - 3, s + 9),
    l.lineTo(t, s + 13),
    l.lineTo(t + 3, s + 9),
    l.fill(),
    l.stroke(),
    l.restore(),
    e());
}
function ft(l, t, s, e, i, a) {
  ((a = Math.min(a, e / 2, i / 2)),
    l.beginPath(),
    l.moveTo(t + a, s),
    l.arcTo(t + e, s, t + e, s + i, a),
    l.arcTo(t + e, s + i, t, s + i, a),
    l.arcTo(t, s + i, t, s, a),
    l.arcTo(t, s, t + e, s, a),
    l.closePath());
}
function es(l) {
  const t = [214, 150, 60],
    s = [71, 55, 44],
    e = _(l);
  return `rgb(${Math.round($(t[0], s[0], e))},${Math.round($(t[1], s[1], e))},${Math.round($(t[2], s[2], e))})`;
}
const wt = [];
function z(l, t) {
  wt.push({ t: h.t + l, fn: t, frame: h.frame });
}
function is() {
  const l = wt.filter((t) => t.t <= h.t && t.frame < h.frame);
  for (const t of l) {
    const s = wt.indexOf(t);
    (s >= 0 && wt.splice(s, 1), t.fn());
  }
}
const Wt = 68;
class as {
  constructor(t, s) {
    ((this.lastLen = 0),
      (this.fadeT = -99),
      (this.lastTypeSfx = 0),
      (this.root = t),
      (this.world = s));
    const e = document.createElement("textarea");
    ((e.className = "pf-editor"),
      (e.placeholder = "写下今天的小事…"),
      (e.maxLength = Wt),
      (e.spellcheck = !1),
      e.setAttribute("autocomplete", "off"));
    const i = {
      left: I.x + "px",
      top: I.y + "px",
      width: I.w + "px",
      fontSize: I.font + "px",
      lineHeight: I.lh + "px",
      letterSpacing: I.ls + "px",
    };
    Object.assign(e.style, i, { height: I.lh * 10 + "px" });
    const a = document.createElement("div");
    ((a.className = "pf-editor pf-mirror"),
      Object.assign(a.style, i, { height: "auto" }),
      t.appendChild(a),
      t.appendChild(e),
      (this.ta = e),
      (this.mirror = a),
      e.addEventListener("input", () => this.onInput()),
      e.addEventListener("pointerdown", (o) => o.stopPropagation()));
  }
  get value() {
    return this.ta.value;
  }
  insert(t) {
    const s = this.ta,
      e = Wt - s.value.length;
    if (e <= 0) return;
    const i = s.selectionStart ?? s.value.length,
      a = s.selectionEnd ?? s.value.length,
      o = Array.from(t).slice(0, e).join("");
    s.value = s.value.slice(0, i) + o + s.value.slice(a);
    const n = i + o.length;
    (s.setSelectionRange(n, n), this.onInput());
  }
  onInput() {
    const t = Array.from(this.ta.value).length,
      s = t - this.lastLen;
    if (((this.lastLen = t), s > 0)) {
      const e = this.measure(),
        i = e[e.length - 1];
      if (i) {
        const a = Math.max(...e.map((o) => o.y)) + I.lh / 2;
        this.world.onTyped(s, { x: i.x, y: i.y }, a);
      }
      h.t - this.lastTypeSfx > 0.05 &&
        (T("type", 0.5), (this.lastTypeSfx = h.t));
    }
  }
  measure() {
    const t = this.mirror;
    t.textContent = "";
    const s = Array.from(this.ta.value),
      e = [];
    for (const a of s) {
      const o = document.createElement("span");
      ((o.textContent = a), t.appendChild(o), e.push(o));
    }
    const i = [];
    return (
      e.forEach((a, o) => {
        const n = s[o];
        n !==
          `
` &&
          i.push({
            ch: n,
            x: I.x + a.offsetLeft + a.offsetWidth / 2 - I.ls / 2,
            y: I.y + a.offsetTop + I.lh / 2,
          });
      }),
      i
    );
  }
  clearForTidy() {
    this.fadeT = h.t;
  }
  update() {
    if (
      (this.fadeT < 0 && (this.ta.style.opacity = this.world.decorA.toFixed(3)),
      this.fadeT > 0)
    ) {
      const t = C((h.t - this.fadeT) / 0.15);
      ((this.ta.style.opacity = String(1 - t)),
        t >= 1 &&
          this.ta.value &&
          ((this.ta.value = ""), (this.lastLen = 0), this.ta.blur()),
        h.t - this.fadeT > 4 &&
          this.world.phase === "landed" &&
          ((this.ta.style.opacity = "1"),
          (this.ta.placeholder = ""),
          (this.fadeT = -99),
          (this.ta.readOnly = !0)));
    }
  }
  focus() {
    try {
      this.ta.focus({ preventScroll: !0 });
    } catch {}
  }
}
const os = ["ink", "coin", "seed", "wheat", "feed", "egg"];
os.forEach((l, t) => (Ct[l] = { x: 32 + t * 86, y: 37 }));
class ns {
  constructor() {
    ((this.world = new ss()),
      (this.editor = null),
      (this.dpr = 2),
      (this.uiRender = null),
      (this.hand = { x: 600, y: 1100, visible: 0, pressT: -99, down: !1 }),
      (this.handShow = !1),
      (this.handFrom = { x: 0, y: 0 }),
      (this.handTo = null),
      (this.waiters = []),
      (this.fadeIn = 1),
      (this.lastTypedT = -99),
      (this.ptr = null),
      (this.running = !1),
      (this.tapRipples = []));
  }
  mount(t, s, e) {
    ((this.canvas = t),
      (this.overlay = s),
      (this.worldLayer = e),
      (this.dpr = h.capture
        ? 2
        : Math.min(3, Math.max(2, window.devicePixelRatio || 1))));
    for (const o of [t, s])
      ((o.width = B * this.dpr), (o.height = R * this.dpr));
    ((this.ctx = t.getContext("2d")),
      (this.octx = s.getContext("2d")),
      (this.editor = new as(e, this.world)));
    const i = document.createElement("div");
    ((i.className = "pf-caret"),
      e.appendChild(i),
      (this.caret = i),
      (window.__pfDebug = () => {
        var n;
        const o = this.world.plots[0];
        return {
          mode: m.mode,
          demo: m.demo,
          launcher: m.launcher,
          panel: ((n = m.panel) == null ? void 0 : n.kind) ?? null,
          phase: this.world.phase,
          seed: m.res.seed,
          ink: m.res.ink,
          cam: {
            x: +y.x.toFixed(1),
            y: +y.y.toFixed(1),
            zoom: +y.zoom.toFixed(3),
          },
          plots: this.world.plots.map((d) => d.state),
          plot0: y.w2s(o.x, o.y),
        };
      }));
    const a = this.editor.onInput.bind(this.editor);
    this.editor.onInput = () => {
      (a(), (this.lastTypedT = h.t));
    };
  }
  tick(t) {
    var s;
    ((h.dt = t),
      (h.t += t),
      h.frame++,
      y.update(t),
      m.mode === "farm" && !y.busy && !this.ptr && (y.clampOn = !0),
      this.updateHand(),
      this.world.update(t),
      b.update(t),
      (s = this.editor) == null || s.update(),
      $t());
    for (let e = 0; e < this.waiters.length; e++)
      if (this.waiters[e].cond()) {
        const i = this.waiters.splice(e, 1)[0];
        (e--, i.resolve());
      }
    (this.render(), this.uiRender && Rt.flushSync(this.uiRender));
  }
  until(t) {
    return new Promise((s) => this.waiters.push({ cond: t, resolve: s }));
  }
  at(t) {
    return this.until(() => h.t >= t);
  }
  wait(t) {
    const s = h.t + t;
    return this.until(() => h.t >= s);
  }
  render() {
    this.world.render(this.ctx, this.dpr);
    const t = y.pose();
    ((this.worldLayer.style.transform = `translate(${B / 2 - t.x * t.zoom}px, ${R / 2 - t.y * t.zoom}px) scale(${t.zoom})`),
      this.updateCaret());
    const s = this.octx;
    (s.setTransform(1, 0, 0, 1, 0, 0),
      s.clearRect(0, 0, this.overlay.width, this.overlay.height),
      s.setTransform(this.dpr, 0, 0, this.dpr, 0, 0),
      b.drawFlyers(s),
      this.drawHand(s),
      this.fadeIn > 0 &&
        ((s.fillStyle = `rgba(251,247,237,${this.fadeIn})`),
        s.fillRect(0, 0, B, R)));
  }
  updateCaret() {
    const t = this.editor;
    if (!t) return;
    if (
      !(
        (m.mode === "write" || m.mode === "title") &&
        this.world.phase === "idle" &&
        t.fadeT < 0 &&
        h.t > 7.6
      )
    ) {
      this.caret.style.opacity = "0";
      return;
    }
    const e = t.measure();
    let i = I.x,
      a = I.y + I.lh / 2;
    if (e.length) {
      const d = e[e.length - 1];
      ((i = d.x + I.font / 2 + 1),
        (a = d.y),
        i > I.x + I.w - 4 && ((i = I.x), (a += I.lh)));
    }
    const n = h.t - this.lastTypedT < 0.6 || Math.floor(h.t * 1.8) % 2 === 0;
    ((this.caret.style.opacity = n ? "1" : "0"),
      (this.caret.style.transform = `translate(${i}px, ${a - 14}px)`));
  }
  updateHand() {
    const t = this.handShow ? 1 : 0;
    this.hand.visible += (t - this.hand.visible) * (1 - Math.exp(-h.dt * 10));
    const s = this.handTo;
    if (s) {
      const e = C((h.t - s.t0) / s.dur),
        i = G(e),
        a = Math.sin(Math.PI * e) * 18;
      ((this.hand.x = this.handFrom.x + (s.x - this.handFrom.x) * i),
        (this.hand.y = this.handFrom.y + (s.y - this.handFrom.y) * i - a),
        this.hand.down && this.pointerMove(this.hand.x, this.hand.y),
        e >= 1 && (this.handTo = null));
    }
  }
  handMove(t, s, e = 0.6) {
    return (
      (this.handFrom = { x: this.hand.x, y: this.hand.y }),
      (this.handTo = { x: t, y: s, t0: h.t, dur: e }),
      this.until(() => !this.handTo)
    );
  }
  async handTap(t) {
    ((this.hand.pressT = h.t),
      await this.wait(0.09),
      b.ring(0, 0, 0),
      this.tapRipples.push({ x: this.hand.x, y: this.hand.y, t0: h.t }),
      t
        ? t()
        : (this.pointerDown(this.hand.x, this.hand.y),
          this.pointerUp(this.hand.x, this.hand.y)),
      await this.wait(0.16));
  }
  async handDrag(t, s = 0.22) {
    ((this.hand.pressT = h.t),
      await this.wait(0.08),
      (this.hand.down = !0),
      this.pointerDown(this.hand.x, this.hand.y));
    for (const [e, i] of t) await this.handMove(e, i, s);
    ((this.hand.down = !1), this.pointerUp(this.hand.x, this.hand.y));
  }
  drawHand(t) {
    const s = this.hand;
    this.tapRipples = this.tapRipples.filter((o) => h.t - o.t0 < 0.5);
    for (const o of this.tapRipples) {
      const n = (h.t - o.t0) / 0.5;
      (t.save(),
        (t.globalAlpha = (1 - n) * 0.8),
        (t.strokeStyle = "#fff6d0"),
        (t.lineWidth = 3),
        t.beginPath(),
        t.arc(o.x, o.y, 8 + _(n) * 22, 0, Math.PI * 2),
        t.stroke(),
        (t.strokeStyle = "rgba(122,90,60,0.55)"),
        (t.lineWidth = 1.2),
        t.beginPath(),
        t.arc(o.x, o.y, 8 + _(n) * 22, 0, Math.PI * 2),
        t.stroke(),
        t.restore());
    }
    if (s.visible <= 0.01) return;
    const e = A(s.pressT, 0.3),
      i = s.down ? 1 : e > 0 && e < 1 ? Math.sin(Math.PI * e) : 0,
      a = 1.6 * (1 - i * 0.14);
    (t.save(),
      (t.globalAlpha = s.visible),
      (t.fillStyle = "rgba(80,50,30,0.18)"),
      t.beginPath(),
      t.ellipse(s.x + 9, s.y + 22, 10, 4, 0, 0, Math.PI * 2),
      t.fill(),
      S(
        t,
        i > 0.4 ? this.world.A.handDown : this.world.A.hand,
        s.x + 1,
        s.y + i * 3,
        { sx: a, sy: a, rot: -0.12 },
      ),
      t.restore());
  }
  pointerDown(t, s, e = 0) {
    const i = y.s2w(t, s);
    let a = m.mode === "farm" ? "pan" : "none";
    if (m.mode === "farm") {
      const o = this.world.plotAt(i.x, i.y);
      if (o >= 0) {
        const n = this.world.plots[o];
        n.state === "ripe"
          ? (a = "harvest")
          : n.state === "empty" && m.selectedSeed && (a = "plant");
      }
    }
    ((this.ptr = {
      id: e,
      sx: t,
      sy: s,
      lx: t,
      ly: s,
      moved: !1,
      mode: a,
      t: h.t,
    }),
      (y.vx = y.vy = 0),
      (a === "plant" || a === "harvest") && this.applyBrush(i.x, i.y, a));
  }
  pointerMove(t, s) {
    const e = this.ptr;
    if (!e) return;
    const i = t - e.lx,
      a = s - e.ly;
    if (
      (Math.hypot(t - e.sx, s - e.sy) > 6 && (e.moved = !0),
      e.mode === "pan" &&
        e.moved &&
        !y.busy &&
        ((y.x -= i / y.zoom),
        (y.y -= a / y.zoom),
        (y.vx = -i / y.zoom / Math.max(h.dt, 1 / 120)),
        (y.vy = -a / y.zoom / Math.max(h.dt, 1 / 120)),
        (y.clampOn = !0)),
      e.mode === "plant" || e.mode === "harvest")
    ) {
      const o = y.s2w(t, s);
      this.applyBrush(o.x, o.y, e.mode);
    }
    ((e.lx = t), (e.ly = s));
  }
  pointerUp(t, s) {
    const e = this.ptr;
    ((this.ptr = null),
      e &&
        (e.mode === "plant" ||
          e.mode === "harvest" ||
          (e.moved
            ? e.mode === "pan" &&
              ((y.vx = C(y.vx, -900, 900)), (y.vy = C(y.vy, -900, 900)))
            : this.tapWorld(t, s))));
  }
  applyBrush(t, s, e) {
    const i = this.world.plotAt(t, s);
    if (i < 0) return;
    const a = this.world.plots[i];
    (e === "plant" && a.state === "empty" && this.world.plant(i),
      e === "harvest" && a.state === "ripe" && this.world.harvest(i));
  }
  tapWorld(t, s) {
    var a;
    const e = y.s2w(t, s);
    if (m.mode === "write") {
      e.y < 926
        ? (this.enterFarm(),
          this.world.phase !== "landed" &&
            z(0.5, () =>
              U("可以先逛逛庄园～写完一篇日记，文字旁会长出新田", "green", 2.6),
            ))
        : (a = this.editor) == null || a.focus();
      return;
    }
    if (m.mode !== "farm") return;
    const i = this.world.hit(e.x, e.y);
    if (
      (m.panel &&
        m.panel.closing === void 0 &&
        (!i || i.kind !== m.panel.kind) &&
        (tt(), T("close", 0.5)),
      !!i)
    )
      if ((T("tap", 0.6), i.kind === "plot")) {
        const o = this.world.plots[i.i];
        o.state === "empty"
          ? m.selectedSeed
            ? this.world.plant(i.i)
            : (Tt("crop", i.i), T("open", 0.7))
          : o.state === "ripe"
            ? this.world.harvest(i.i)
            : U("小麦正在努力长大…");
      } else if (i.kind === "coop") {
        if (this.world.coop.upgradeT !== null) {
          U("鸡舍施工中…");
          return;
        }
        (Tt("coop"), T("open", 0.7), (this.world.coop.bumpT = h.t));
      } else
        i.kind === "mill"
          ? (Tt("mill"), T("open", 0.7))
          : i.kind === "nest" && this.world.collectEggs();
  }
  wheel(t, s, e) {
    if (m.mode !== "farm" || y.busy) return;
    const i = y.s2w(t, s);
    y.zoom = C(y.zoom * Math.exp(-e * 0.0015), 0.7, 2.4);
    const a = y.s2w(t, s);
    ((y.x += i.x - a.x), (y.y += i.y - a.y), (y.clampOn = !0));
  }
  enterWrite(t = 1.4) {
    ((m.mode = "write"),
      (m.modeT0 = h.t),
      (m.selectedSeed = null),
      tt(),
      (y.clampOn = !1),
      y.tween(ut.write, t, G),
      T("whoosh", 0.5));
  }
  enterFarm(t = ut.farm, s = 1.3) {
    ((m.mode = "farm"),
      (m.modeT0 = h.t),
      (y.clampOn = !1),
      y.tween(t, s, G),
      T("whoosh", 0.5));
  }
  enterOverview(t = 6.8) {
    ((m.mode = "overview"),
      (m.modeT0 = h.t),
      tt(),
      (y.clampOn = !1),
      y.tween(ut.overview, t, gt));
  }
  act(t) {
    var e;
    const s = this.world;
    switch (((m.pressed = t), (m.pressedT = h.t), t)) {
      case "tidy": {
        const i = this.editor.measure();
        if (i.length < 6) {
          U("再多写几个字吧～");
          return;
        }
        (T("tap", 0.7), s.startTidy(i) && this.editor.clearForTidy());
        return;
      }
      case "toFarm":
        (T("tap", 0.6), this.tapWorld(B / 2, 200));
        return;
      case "back":
        (T("tap", 0.6), this.enterWrite());
        return;
      case "speed":
        ((m.speedUp = !m.speedUp),
          T(m.speedUp ? "levelup" : "tap", 0.6),
          U(
            m.speedUp ? "演示加速 ×8：作物与产蛋加快" : "恢复正常速度",
            "plain",
            1.6,
          ));
        return;
      case "closePanel":
        (tt(), T("close", 0.6));
        return;
      case "seedWheat": {
        const i = ((e = m.panel) == null ? void 0 : e.plot) ?? -1;
        ((m.selectedSeed = "wheat"),
          tt(),
          T("tap", 0.7),
          i >= 0 && s.plant(i),
          z(0.3, () => U("播种模式：点击或划过空地继续播种", "green", 1.8)));
        return;
      }
      case "mill":
        s.mill9();
        return;
      case "feed":
        s.feedChickens();
        return;
      case "eggs":
        s.collectEggs();
        return;
      case "upgrade":
        s.upgradeCoop() &&
          (tt(),
          z(0.25, () => y.tween({ x: 440, y: 744, zoom: 2.05 }, 1.1, G)));
        return;
    }
  }
  startFree() {
    var t;
    ((m.launcher = !1),
      (m.demo = !1),
      (m.mode = "write"),
      (this.fadeIn = 0),
      y.set(ut.write));
    for (const s of this.world.writers) ((s.busy = !1), (s.appearT = -99));
    ((this.world.writers[0].x = 200),
      (this.world.writers[0].y = 1300),
      (this.world.writers[1].x = 420),
      (this.world.writers[1].y = 1360),
      (h.t = Math.max(h.t, 8)),
      (t = this.editor) == null || t.focus());
  }
}
const gs = new ns(),
  q = {
    intro0: { x: 300, y: 1352, zoom: 1.1 },
    intro1: { x: 300, y: 1366, zoom: 1.2 },
    type: { x: 300, y: 1072, zoom: 1.02 },
    tidy: { x: 300, y: 968, zoom: 0.93 },
    farm: { x: 268, y: 770, zoom: 1.42 },
    grow: { x: 300, y: 768, zoom: 1.72 },
    coop: { x: 470, y: 800, zoom: 1.5 },
    overview: { x: 300, y: 800, zoom: 0.6 },
  };
function at(l, t, s, e, i, a = !1) {
  m.caption = { n: l, title: t, sub: s, t0: e, dur: i, bottom: a };
}
function rs(l) {
  const t = document.querySelector(`[data-act="${l}"]`),
    s = document.querySelector(".stage");
  if (!t || !s) return { x: B / 2, y: R - 60 };
  const e = t.getBoundingClientRect(),
    i = s.getBoundingClientRect();
  return {
    x: ((e.left + e.width / 2 - i.left) / i.width) * B,
    y: ((e.top + e.height / 2 - i.top) / i.height) * R,
  };
}
async function ws(l) {
  const t = l.world,
    s = l.editor;
  ((m.launcher = !1),
    (m.demo = !0),
    Gt(),
    (m.mode = "title"),
    (m.hudAlpha = 0));
  const e = h.t,
    i = (c) => l.at(e + c),
    a = (c) => console.log("[demo] " + c + " " + (h.t - e).toFixed(2)),
    o = (c, u, k = 0.55) => l.handMove(c, u, k),
    n = async (c, u = 0.55) => {
      const k = rs(c);
      (await o(k.x + 6, k.y + 4, u), await l.handTap(() => l.act(c)));
    },
    d = async (c, u, k = 0.55) => {
      const g = y.w2s(c, u);
      (await o(g.x, g.y, k), await l.handTap());
    };
  (y.set(q.intro0), y.tween(q.intro1, 7.4, gt), (l.fadeIn = 1));
  const r = () => {
    ((l.fadeIn = Math.max(0, l.fadeIn - h.dt / 1.2)), l.fadeIn > 0 && z(0, r));
  };
  (r(),
    t.startTitle(),
    (l.hand.x = 600),
    (l.hand.y = 1e3),
    z(1.2, () => T("cluck", 0.6, -0.3)),
    z(4.6, () => {
      (t.writers[0].doAct("peck", 0.7), T("peck", 0.5));
    }),
    z(5.4, () => t.writers[0].goTo(330, 1606, 30)),
    await i(7.1),
    (t.title.out = h.t),
    T("whoosh", 0.4),
    await i(7.5),
    y.tween(q.type, 1.5, G),
    (m.mode = "write"),
    (m.modeT0 = h.t));
  const [w, p] = t.writers;
  (p.goTo(452, 1330, 70, () => {
    p.busy = !1;
  }),
    w.goTo(250, 1330, 60, () => {
      w.busy = !1;
    }));
  const f = (c, u) => {
    const k = m.hudAlpha,
      g = h.t,
      P = () => {
        const D = Math.min(1, (h.t - g) / u);
        ((m.hudAlpha = k + (c - k) * G(D)), D < 1 && z(0, P));
      };
    P();
  };
  (f(1, 0.8),
    await i(8.4),
    at("1", "写下今天的日记", "每写 6 个字，纸上落下一粒金色墨粒", h.t, 9.6),
    await i(9),
    s.focus());
  const M = Array.from(Dt);
  for (const c of M) {
    s.insert(c);
    const u = ",.".includes(c);
    await l.wait(u ? 0.3 : 0.098 + ((c.charCodeAt(0) * 7) % 5) * 0.006);
  }
  (await i(17.2),
    (l.handShow = !0),
    (l.hand.x = 470),
    (l.hand.y = 1e3),
    y.tween(q.tidy, 1.6, G),
    await i(17.9),
    at(
      "2",
      "小动物自动排版",
      "小鸡改标点 · 绵羊理行距 · 奶牛搬段落",
      h.t + 0.3,
      11.2,
    ),
    await n("tidy", 0.5),
    z(0.4, () => {
      l.handShow = !1;
    }),
    await l.until(() => t.phase === "landed"),
    a("landed"),
    await l.wait(0.5),
    await i(Math.max(h.t - e, 29.2)),
    at(
      "3",
      "文字旁长出农田",
      "点击土地 → 选择种子 → 小麦发芽成熟",
      h.t + 0.3,
      11.6,
    ),
    (l.handShow = !0),
    l.enterFarm(q.farm, 1.3),
    await l.wait(1.4),
    await d(X[0].x, X[0].y, 0.6),
    await l.wait(0.55),
    await n("seedWheat", 0.6),
    await l.wait(0.4));
  {
    const c = [1, 3, 2, 4, 5].map((k) => y.w2s(X[k].x, X[k].y)),
      u = y.w2s(X[1].x, X[1].y);
    (await o(u.x, u.y, 0.45),
      await l.handDrag(
        c.map((k) => [k.x, k.y]),
        0.24,
      ));
  }
  (await l.wait(0.3),
    await n("speed", 0.6),
    (m.selectedSeed = null),
    y.tween(q.grow, 4.2, gt),
    await o(470, 700, 0.8),
    await l.until(() => t.plots.every((c) => c.state === "ripe")),
    a("ripe"),
    await l.wait(0.35));
  {
    const c = [0, 1, 3, 2, 4, 5],
      u = y.w2s(X[0].x, X[0].y);
    (await o(u.x, u.y, 0.5),
      await l.handDrag(
        c.slice(1).map((k) => {
          const g = y.w2s(X[k].x, X[k].y);
          return [g.x, g.y];
        }),
        0.2,
      ));
  }
  (at(
    "4",
    "收获 · 加工 · 养殖",
    "小麦磨成饲料，喂饱小鸡就会下蛋",
    h.t + 0.5,
    11,
  ),
    await l.wait(0.5),
    await o(420, 470, 0.45));
  {
    const c = (q.coop.x - y.x) * y.zoom,
      u = (q.coop.y - y.y) * y.zoom;
    await l.handDrag(
      [
        [420 - c * 0.5, 470 - u * 0.5],
        [420 - c, 470 - u],
      ],
      0.32,
    );
  }
  (y.tween(q.coop, 0.6, G),
    await l.wait(0.55),
    await d(548, 712, 0.5),
    await l.wait(0.5),
    await n("mill", 0.5),
    await l.wait(1.5),
    await d(v.x, v.y - 26, 0.55),
    await l.wait(0.6),
    await n("feed", 0.55),
    await l.until(() => t.coop.eggs >= 3),
    a("eggs"),
    await l.wait(0.55),
    await n("eggs", 0.5),
    await l.wait(1),
    await i(Math.max(h.t - e, 52.8)),
    at("5", "金币升级鸡舍", "简陋木棚 → 红顶鸡舍，小鸡一起升级", h.t + 0.2, 10),
    await n("upgrade", 0.6),
    await o(520, 900, 0.7),
    (l.handShow = !1),
    await l.until(() => t.coop.level === 2),
    a("upgraded"),
    await l.wait(2.1),
    await i(Math.max(h.t - e, 62.6)),
    a("overview"));
  const x = h.t - e;
  (tt(),
    (m.speedUp = !1),
    f(0, 1),
    at(
      "6",
      "一页日记，一座庄园",
      "文字在中间，生活在四周慢慢长大",
      h.t + 1.2,
      6.6,
      !0,
    ),
    l.enterOverview(0),
    y.tween(q.overview, 7, gt),
    (y.drift = 0),
    t.expand(),
    await i(Math.max(71, x + 7.6)),
    a("end"),
    (m.endT = h.t),
    T("sparkle", 0.8),
    await i(Math.max(71, x + 7.6) + 4.2),
    (m.demo = !1),
    (window.__demoDone = !0));
}
const hs =
  "字里有田PaperFarm一本会长出农场的日记10月7日9日11日星期六今天的日记晴多云·小动物整理站明天还想写点什么？，。；：！？“”0123456789整施工中…墨粒开垦新土地种子小麦饲料鸡蛋金币+−×Lv.↑文字落地长出了块新田写满这一页啦Demo仅支持篇";
async function ms() {
  const t =
      Array.from(new Set(Array.from(Et + Ft + Dt + hs + "，。"))).join("") +
      document.body.innerText,
    s = ['400 16px "LXGW WenKai"', '700 16px "LXGW WenKai"'];
  try {
    (await Promise.all(s.map((e) => document.fonts.load(e, t))),
      await document.fonts.ready);
  } catch {}
}
export { R as S, B as a, gs as g, Yt as h, ms as p, ws as r };
