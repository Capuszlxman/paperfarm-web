class A {
  constructor(t, a) {
    ((this.w = t), (this.h = a), (this.data = new Array(t * a).fill(null)));
  }
  px(t, a, i) {
    ((t = Math.round(t)),
      (a = Math.round(a)),
      !(t < 0 || a < 0 || t >= this.w || a >= this.h) &&
        (this.data[a * this.w + t] = i));
  }
  get(t, a) {
    return t < 0 || a < 0 || t >= this.w || a >= this.h
      ? null
      : this.data[a * this.w + t];
  }
  rect(t, a, i, e, s) {
    for (let h = 0; h < e; h++)
      for (let n = 0; n < i; n++) this.px(t + n, a + h, s);
  }
  hline(t, a, i, e) {
    for (let s = Math.min(t, a); s <= Math.max(t, a); s++) this.px(s, i, e);
  }
  vline(t, a, i, e) {
    for (let s = Math.min(a, i); s <= Math.max(a, i); s++) this.px(t, s, e);
  }
  ellipse(t, a, i, e, s) {
    for (let h = Math.floor(a - e); h <= Math.ceil(a + e); h++)
      for (let n = Math.floor(t - i); n <= Math.ceil(t + i); n++) {
        const r = (n + 0.5 - t) / i,
          l = (h + 0.5 - a) / e;
        r * r + l * l <= 1 && this.px(n, h, s);
      }
  }
  line(t, a, i, e, s) {
    const h = Math.max(Math.abs(i - t), Math.abs(e - a)) || 1;
    for (let n = 0; n <= h; n++)
      this.px(t + ((i - t) * n) / h, a + ((e - a) * n) / h, s);
  }
  tri(t, a, i, e, s, h, n) {
    const r = Math.floor(Math.min(t, i, s)),
      l = Math.ceil(Math.max(t, i, s)),
      m = Math.floor(Math.min(a, e, h)),
      v = Math.ceil(Math.max(a, e, h)),
      M = (f, d, c, p, u, g) => (f - u) * (p - g) - (c - u) * (d - g);
    for (let f = m; f <= v; f++)
      for (let d = r; d <= l; d++) {
        const c = [d + 0.5, f + 0.5],
          p = M(c[0], c[1], t, a, i, e),
          u = M(c[0], c[1], i, e, s, h),
          g = M(c[0], c[1], s, h, t, a),
          I = p < 0 || u < 0 || g < 0,
          R = p > 0 || u > 0 || g > 0;
        (I && R) || this.px(d, f, n);
      }
  }
  grid(t, a, i = 0, e = 0) {
    t.forEach((s, h) => {
      for (let n = 0; n < s.length; n++) {
        const r = s[n];
        if (r === "." || r === " ") continue;
        const l = a[r];
        l && this.px(i + n, e + h, l);
      }
    });
  }
  shift(t, a, i, e, s, h) {
    const n = [];
    for (let r = 0; r < e; r++)
      for (let l = 0; l < i; l++) n.push(this.get(t + l, a + r));
    this.rect(t, a, i, e, null);
    for (let r = 0; r < e; r++)
      for (let l = 0; l < i; l++) {
        const m = n[r * i + l];
        m && this.px(t + l + s, a + r + h, m);
      }
  }
  replace(t, a) {
    for (let i = 0; i < this.data.length; i++)
      this.data[i] === t && (this.data[i] = a);
  }
  outline(t, a = []) {
    const i = [];
    for (let e = 0; e < this.h; e++)
      for (let s = 0; s < this.w; s++) {
        if (this.get(s, e)) continue;
        [
          this.get(s - 1, e),
          this.get(s + 1, e),
          this.get(s, e - 1),
          this.get(s, e + 1),
        ].some((n) => n && n !== t && !a.includes(n)) && i.push(e * this.w + s);
      }
    for (const e of i) this.data[e] = t;
  }
  clone() {
    const t = new A(this.w, this.h);
    return ((t.data = this.data.slice()), t);
  }
  toCanvas() {
    const t = document.createElement("canvas");
    ((t.width = this.w), (t.height = this.h));
    const a = t.getContext("2d"),
      i = a.createImageData(this.w, this.h);
    for (let e = 0; e < this.data.length; e++) {
      const s = this.data[e];
      if (!s) continue;
      const [h, n, r, l] = E(s);
      ((i.data[e * 4] = h),
        (i.data[e * 4 + 1] = n),
        (i.data[e * 4 + 2] = r),
        (i.data[e * 4 + 3] = l));
    }
    return (a.putImageData(i, 0, 0), t);
  }
}
const w = new Map();
function E(o) {
  let t = w.get(o);
  if (t) return t;
  if (o[0] === "#") {
    const a = o.slice(1),
      i = parseInt(a.slice(0, 2), 16),
      e = parseInt(a.slice(2, 4), 16),
      s = parseInt(a.slice(4, 6), 16),
      h = a.length >= 8 ? parseInt(a.slice(6, 8), 16) : 255;
    t = [i, e, s, h];
  } else t = [0, 0, 0, 255];
  return (w.set(o, t), t);
}
function C(o, t = 6) {
  const a = document.createElement("canvas");
  ((a.width = o.width * t), (a.height = o.height * t));
  const i = a.getContext("2d");
  return (
    (i.imageSmoothingEnabled = !1),
    i.drawImage(o, 0, 0, a.width, a.height),
    a
  );
}
function L(o, t, a) {
  const i = o.toCanvas();
  return { w: o.w, h: o.h, raw: i, img: C(i), ax: t ?? o.w / 2, ay: a ?? o.h };
}
function S(o, t, a, i, e = {}) {
  const s = (e.sx ?? 1) * (e.flip ? -1 : 1),
    h = e.sy ?? 1;
  (o.save(),
    e.alpha !== void 0 && (o.globalAlpha *= e.alpha),
    o.translate(a, i),
    e.rot && o.rotate(e.rot),
    o.scale(s, h),
    o.drawImage(t.img, -t.ax * 2, -t.ay * 2, t.w * 2, t.h * 2),
    o.restore());
}
function U(o, t = 1) {
  return t === 6 ? o.img.toDataURL() : C(o.raw, t).toDataURL();
}
export { A as P, S as d, L as m, U as t, C as u };
