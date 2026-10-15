import { j as k, r as K } from "./index-Buxy_O7c.js";
import { m as le, P as j, t as je } from "./pixel-CYIPeh-K.js";
import { app as ee } from "./app-CQ7Ebbfh.js";
import { ui as J } from "./state-CG0_YQPW.js";
import { unlockAudio as Ne, sfx as re } from "./sound-crrWL_RO.js";
import {
  G as fe,
  f as Se,
  aD as ke,
  aE as ge,
  i as se,
} from "./sim-D2hRsYBy.js";
import { s as Oe, w as be } from "./farmart-Bcn3kAJE.js";
const ie = "#5b3f33",
  V = "#4b6a3a",
  O = "#c49563",
  Pe = "#a57745",
  B = "#ddb27f",
  we = "#8f6542",
  te = "#f1d9a0",
  _ = "#9b6a45",
  $e = "#7d5236",
  oe = "#d2cf7a",
  A = "#fffaf0",
  R = "#ffe066";
function ue(t) {
  return [
    parseInt(t.slice(1, 3), 16),
    parseInt(t.slice(3, 5), 16),
    parseInt(t.slice(5, 7), 16),
  ];
}
function g(t, e, f) {
  const u = ue(t),
    a = ue(e);
  return (
    "#" +
    u
      .map((o, n) =>
        Math.round(o + (a[n] - o) * f)
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
  );
}
function me(t, e, f = 0) {
  let u = (t * 374761393 + e * 668265263 + f * 2246822519) | 0;
  return (
    (u = Math.imul(u ^ (u >>> 13), 1274126177)),
    ((u ^ (u >>> 16)) >>> 0) / 4294967295
  );
}
function z(t, e) {
  for (let f = 0; f < e.data.length; f++) e.data[f] && (t.data[f] = e.data[f]);
}
function U(t, e, f, u, a) {
  t.grid(u, a, e, f);
}
function W(t, e, f, u, a = 0.72) {
  for (let o = 0; o < t.h; o++)
    for (let n = 0; n < t.w; n++)
      t.get(n, o) === e && me(n, o, u) > a && t.px(n, o, f);
}
function q(t, e, f, u) {
  const a = new j(t.w, t.h);
  for (const [l, i, r, s] of e) a.ellipse(l, i, r, s, "#000000");
  const [o, n] = e[0];
  for (let l = 0; l < t.h; l++)
    for (let i = 0; i < t.w; i++) {
      if (!a.get(i, l)) continue;
      const r =
        (i - o) * 0.05 + (l - n) * 0.08 + (me(i >> 1, l >> 1, u) - 0.5) * 0.5;
      t.px(i, l, r < -0.45 ? f[0] : r < 0.15 ? f[1] : f[2]);
    }
}
class Re {
  constructor(e, f) {
    ((this.fruitOut = ie),
      (this.under = new j(e, f)),
      (this.stake = new j(e, f)),
      (this.leaf = new j(e, f)),
      (this.fruit = new j(e, f)),
      (this.top = new j(e, f)));
  }
}
function S(t, e, f) {
  const u = new j(t, e);
  for (const a of f) {
    const o = new Re(t, e);
    (a(o),
      o.stake.outline(ie),
      o.leaf.outline(V),
      o.fruit.outline(o.fruitOut),
      z(u, o.under),
      z(u, o.stake),
      z(u, o.leaf),
      z(u, o.fruit),
      z(u, o.top));
  }
  return u;
}
function M(t, e) {
  return t.map((f) => (u) => f.forEach(([a, o], n) => e(u, a, o, n)));
}
const Q = (t) => [
    [
      [4, t - 6],
      [9, t - 6],
      [14, t - 6],
    ],
    [
      [4, t],
      [9, t],
      [14, t],
    ],
  ],
  C = (t) => [
    [
      [5, t - 6],
      [13, t - 6],
    ],
    [
      [5, t],
      [13, t],
    ],
  ];
function Te(t, e, f, u) {
  (t.top.hline(e - 1, e + 1, f - 1, we),
    t.top.px(e, f - 2, te),
    t.top.px(e - 1, f - 2, g(u.fruit2, te, 0.45)));
}
function N(t, e, f, u) {
  (t.px(e, f - 1, u.leaf2),
    t.px(e, f - 2, u.leaf2),
    t.px(e - 1, f - 3, u.leaf),
    t.px(e - 2, f - 3, u.leaf),
    t.px(e + 1, f - 3, u.leaf),
    t.px(e + 2, f - 4, u.leaf));
}
function ce(t, e, f, u) {
  (t.px(e, f - 1, u.leaf2),
    t.px(e, f - 2, u.leaf),
    t.px(e - 1, f - 3, u.leaf),
    t.px(e + 1, f - 2, u.leaf2));
}
function pe(t, e, f, u, a) {
  (t.rect(e - 1, f - 1, 3, 2, u), t.px(e, f + 1, u), t.px(e, f, a));
}
const D = (t, e) => M(t, (f, u, a) => Te(f, u, a, e));
function Ae(t, e) {
  if (e === 0) return { p: S(18, 26, D(Q(22), t)), base: 22 };
  const a = M(Q(22), (o, n, l) => {
    const i = o.leaf;
    if (e === 1) ce(i, n, l, t);
    else if (e === 2)
      (i.vline(n, l - 5, l - 1, t.leaf2),
        i.line(n - 1, l - 2, n - 2, l - 5, t.leaf),
        i.line(n + 1, l - 2, n + 2, l - 4, t.leaf),
        i.px(n, l - 6, t.leaf));
    else if (e === 3)
      (i.vline(n, l - 8, l - 1, t.leaf2),
        i.line(n - 1, l - 2, n - 2, l - 6, t.leaf),
        i.line(n + 1, l - 2, n + 2, l - 5, t.leaf),
        i.px(n, l - 9, "#c9dc7c"),
        i.px(n + 1, l - 10, "#c9dc7c"),
        i.px(n + 2, l - 9, "#b8cf6a"));
    else {
      (i.vline(n, l - 8, l - 1, t.leaf2),
        i.line(n - 1, l - 2, n - 2, l - 5, t.leaf),
        i.line(n + 1, l - 2, n + 2, l - 4, t.leaf),
        i.px(n - 2, l - 5, oe),
        i.px(n + 2, l - 4, oe),
        (o.fruitOut = "#8a6232"));
      const r = o.fruit;
      ([
        [n, l - 9],
        [n + 1, l - 10],
        [n + 2, l - 10],
        [n + 3, l - 9],
        [n + 3, l - 8],
        [n + 3, l - 7],
      ].forEach(([s, p]) => r.px(s, p, t.fruit)),
        [
          [n + 1, l - 9],
          [n + 2, l - 9],
          [n + 2, l - 8],
          [n + 4, l - 8],
        ].forEach(([s, p]) => r.px(s, p, t.fruit2)),
        r.px(n + 1, l - 10, "#fff3c0"),
        r.px(n + 2, l - 10, "#fff3c0"));
    }
  });
  return { p: S(18, 26, a), base: 22 };
}
function _e(t, e) {
  const a = [
    [
      [4, 25],
      [14, 25],
    ],
    [[9, 30]],
  ];
  if (e === 0) return { p: S(18, 34, D(a, t)), base: 30 };
  const o = (l, i, r, s, p, b, x) => {
      const F = [0, 0, -1, -1, 0, 1];
      for (let d = 1; d <= p; d++)
        l.px(i + d * s, r + F[d], d === p && x ? x : b);
    },
    n = M(a, (l, i, r) => {
      const s = l.leaf;
      if (e === 1)
        (s.px(i, r - 1, t.leaf2),
          s.px(i, r - 2, t.leaf2),
          s.px(i - 1, r - 3, t.leaf),
          s.px(i + 1, r - 4, t.leaf),
          s.px(i, r - 3, t.leaf));
      else if (e === 2)
        (s.vline(i, r - 6, r - 1, t.leaf2),
          o(s, i, r - 3, -1, 3, t.leaf),
          o(s, i, r - 5, 1, 3, t.leaf),
          s.px(i, r - 7, t.leaf));
      else {
        const p = e === 3 ? 13 : 16;
        (s.vline(i, r - p, r - 1, t.leaf2),
          s.vline(
            i + (i > 9 ? -1 : 1),
            r - 4,
            r - 1,
            g(t.leaf2, "#000000", 0.12),
          ));
        const b = e === 4 ? oe : void 0;
        if (
          (o(s, i, r - 3, -1, 5, t.leaf, b),
          o(s, i, r - 6, 1, 4, t.leaf, b),
          o(s, i, r - 9, -1, 4, t.leaf, b),
          o(s, i, r - 12, 1, 3, t.leaf, b),
          e === 3)
        ) {
          (s.px(i, r - 14, "#cfd77a"), (l.fruitOut = V));
          const x = i > 9 ? i - 2 : i + 1;
          (l.fruit.rect(x, r - 9, 2, 3, "#bfdc8a"),
            l.fruit.px(x, r - 10, "#e8d8a0"));
        } else {
          const x = "#d8b56a";
          (s.vline(i, r - 19, r - 17, x),
            s.px(i - 1, r - 18, x),
            s.px(i + 1, r - 19, x),
            s.px(i - 2, r - 17, "#c49a4f"),
            s.px(i + 2, r - 18, "#c49a4f"));
          const F = i > 9 ? i - 2 : i + 1,
            d = l.fruit;
          (d.rect(F, r - 12, 2, 5, t.fruit),
            d.px(F + 1, r - 11, t.fruit2),
            d.px(F, r - 10, t.fruit2),
            d.px(F + 1, r - 9, t.fruit2),
            d.px(F, r - 12, "#fff0a0"),
            d.px(F, r - 13, "#b8794a"),
            d.px(F, r - 7, t.leaf2),
            d.px(F + 1, r - 7, t.leaf2),
            d.px(F + (i > 9 ? -1 : 2), r - 8, t.leaf),
            d.px(F + (i > 9 ? -1 : 2), r - 9, t.leaf));
        }
      }
    });
  return { p: S(18, 34, n), base: 30 };
}
function Qe(t, e, f) {
  if (t === "carrot") {
    if (f === 0) return { p: S(18, 26, D(Q(22), e)), base: 22 };
    const l = M(Q(22), (i, r, s) => {
      const p = i.leaf;
      if (f === 1)
        (p.px(r, s - 1, e.leaf2),
          p.px(r - 1, s - 2, e.leaf),
          p.px(r + 1, s - 2, e.leaf),
          p.px(r, s - 3, e.leaf));
      else if (f === 2)
        (p.vline(r, s - 4, s - 1, e.leaf2),
          p.line(r, s - 2, r - 2, s - 4, e.leaf),
          p.line(r, s - 2, r + 2, s - 4, e.leaf),
          p.px(r, s - 5, e.leaf),
          p.px(r - 2, s - 5, e.leaf2),
          p.px(r + 2, s - 5, e.leaf2));
      else {
        const b = f === 4 ? 2 : 0;
        (p.line(r, s - 1 - b, r - 2, s - 6 - b, e.leaf2),
          p.vline(r, s - 1 - b, s - 8 - b, e.leaf),
          p.line(r, s - 1 - b, r + 2, s - 6 - b, e.leaf2));
        for (const [x, F] of [
          [-3, -6],
          [-1, -7],
          [1, -8],
          [3, -6],
        ])
          p.px(r + x, s + F - b, e.leaf);
        (p.px(r, s - 9 - b, "#acd77f"),
          f === 3
            ? i.top.px(r, s - 1, e.fruit2)
            : U(i.fruit, r - 1, s - 2, ["HFF", "FFS", ".S."], {
                H: "#ffb070",
                F: e.fruit,
                S: e.fruit2,
              }));
      }
    });
    return { p: S(18, 26, l), base: 22 };
  }
  if (t === "radish") {
    const l = [
      [[9, 16]],
      [
        [4, 22],
        [14, 22],
      ],
    ];
    if (f === 0) return { p: S(18, 26, D(Q(22), e)), base: 22 };
    const i = M(l, (r, s, p) => {
      const b = r.leaf;
      if (f === 1)
        (b.px(s, p - 1, e.leaf2),
          b.rect(s - 2, p - 3, 2, 1, e.leaf),
          b.rect(s + 1, p - 3, 2, 1, e.leaf),
          b.px(s - 1, p - 2, e.leaf2),
          b.px(s + 1, p - 2, e.leaf2));
      else if (f === 2)
        (b.ellipse(s - 1.5, p - 3, 1.6, 2.4, e.leaf),
          b.ellipse(s + 2.5, p - 4, 1.6, 2.4, e.leaf),
          b.vline(s, p - 2, p - 1, e.leaf2),
          b.px(s - 2, p - 3, e.leaf2),
          b.px(s + 2, p - 4, e.leaf2));
      else {
        const x = f === 4 ? 5 : 1;
        if (
          (b.ellipse(s - 1, p - 3 - x, 1.8, 3, e.leaf),
          b.ellipse(s + 2, p - 3.5 - x, 1.8, 3, e.leaf),
          b.line(s, p - x, s - 1, p - 5 - x, e.leaf2),
          b.line(s + 1, p - x, s + 2, p - 6 - x, e.leaf2),
          f === 3)
        )
          (r.top.hline(s - 1, s + 1, p - 1, "#e6efd0"),
            r.top.px(s, p - 1, e.fruit));
        else {
          const F = r.fruit;
          F.ellipse(s + 0.5, p - 2.5, 2.5, 3, e.fruit);
          for (let d = p - 6; d <= p - 5; d++)
            for (let h = s - 3; h <= s + 3; h++)
              F.get(h, d) && F.px(h, d, "#dcebb8");
          for (let d = p - 4; d <= p; d++)
            F.get(s + 2, d) && F.px(s + 2, d, e.fruit2);
          (F.px(s - 1, p - 3, "#ffffff"),
            F.px(s - 1, p - 2, "#ffffff"),
            F.px(s + 1, p, e.fruit2));
        }
      }
    });
    return { p: S(18, 26, i), base: 22 };
  }
  if (t === "potato") {
    if (f === 0) return { p: S(18, 26, D(C(22), e)), base: 22 };
    const l = M(C(22), (i, r, s, p) => {
      const b = i.leaf;
      if (f === 1) N(b, r, s, e);
      else if (f === 2)
        (b.ellipse(r + 0.5, s - 2.5, 2.8, 2.2, e.leaf),
          b.px(r, s - 1, e.leaf2),
          W(b, e.leaf, e.leaf2, 11 + p, 0.7));
      else {
        const x = f === 4 ? g(e.leaf, "#d8c870", 0.4) : e.leaf,
          F = f === 4 ? g(e.leaf2, "#b8a850", 0.35) : e.leaf2,
          d = f === 4 ? 1.5 : 0;
        if (
          (b.ellipse(
            r + 0.5,
            s - 3.5 - d,
            f === 4 ? 3 : 3.8,
            f === 4 ? 2.3 : 2.8,
            x,
          ),
          b.ellipse(r - 1.5, s - 5.5 - d, 1.8, 1.8, x),
          b.ellipse(r + 2.5, s - 5.5 - d, 1.8, 1.8, x),
          W(b, x, F, 21 + p + s, 0.66),
          f === 3)
        )
          for (const [h, E] of [
            [r - 1, s - 7],
            [r + 2, s - 7],
          ])
            (i.top.px(h, E, A),
              i.top.px(h - 1, E, "#ece4f6"),
              i.top.px(h + 1, E, "#ece4f6"),
              i.top.px(h, E - 1, A),
              i.top.px(h, E, R));
        else {
          const h = i.fruit,
            E = (L, v, X, Me) => {
              h.ellipse(L, v, X, Me, e.fruit);
            };
          (E(r - 2, s - 1, 2.1, 1.6), E(r + 3, s - 0.7, 1.7, 1.4));
          const P = "#f0d4a4",
            H = g(e.fruit2, "#000000", 0.2);
          (h.px(r - 3, s - 2, P),
            h.px(r - 2, s - 2, P),
            h.px(r + 2, s - 2, P),
            h.px(r - 1, s - 1, H),
            h.px(r - 3, s, e.fruit2),
            h.px(r - 2, s, e.fruit2),
            h.px(r - 1, s, e.fruit2),
            h.px(r + 3, s, e.fruit2),
            h.px(r + 4, s - 1, H));
        }
      }
    });
    return { p: S(18, 26, l), base: 22 };
  }
  if (f === 0) return { p: S(18, 26, D(C(22), e)), base: 22 };
  const o = (l, i, r, s) => {
      (l.rect(i - 1, r - 1, 3, 2, s),
        l.px(i, r + 1, s),
        l.px(i, r - 1, null),
        l.px(i, r, g(s, "#000000", 0.12)));
    },
    n = M(C(22), (l, i, r, s) => {
      const p = l.leaf;
      if (f === 1) N(p, i, r, e);
      else if (f === 2)
        (p.px(i, r - 1, e.fruit2),
          p.px(i, r - 2, e.fruit2),
          o(p, i - 1, r - 3, e.leaf),
          o(p, i + 2, r - 4, e.leaf2));
      else {
        const b = f === 4 ? 3 : 0;
        if (
          (p.line(i, r - 1 - b, i - 3, r - 3 - b, e.fruit2),
          p.line(i + 1, r - 1 - b, i + 4, r - 4 - b, e.fruit2),
          p.vline(i, r - 5 - b, r - 1 - b, e.fruit2),
          [
            [i - 3, r - 4 - b],
            [i, r - 7 - b],
            [i + 4, r - 5 - b],
          ].forEach(([F, d], h) => o(p, F, d, h === 1 ? e.leaf2 : e.leaf)),
          f === 4)
        ) {
          const F = l.fruit,
            d = { H: g(e.fruit, "#ffffff", 0.35), F: e.fruit, S: e.fruit2 };
          U(F, i - 2, r - 3, [".HFF.", "HFFFS", "FFFS.", ".SS.."], d);
        }
      }
    });
  return { p: S(18, 26, n), base: 22 };
}
function Ue(t, e) {
  const a = C(22);
  if (e === 0) return { p: S(18, 26, D(a, t)), base: 22 };
  const o = M(a, (n, l, i) => {
    const r = n.leaf;
    e === 1
      ? N(r, l, i, t)
      : e === 2
        ? (r.ellipse(l + 0.5, i - 2, 2.4, 1.7, t.leaf2),
          r.ellipse(l + 0.5, i - 2.5, 1.3, 1.1, t.leaf))
        : e === 3
          ? (r.ellipse(l + 0.5, i - 2.5, 3.7, 2.6, t.leaf2),
            r.ellipse(l + 0.5, i - 3, 2.2, 1.7, t.leaf),
            r.px(l, i - 3, t.fruit),
            r.px(l - 3, i - 2, t.leaf),
            r.px(l + 3, i - 2, t.leaf))
          : (r.ellipse(l + 0.5, i - 2.5, 4.2, 3, t.leaf2),
            r.ellipse(l + 0.5, i - 3, 3.1, 2.6, t.leaf),
            r.ellipse(l + 0.5, i - 3.5, 2.1, 1.8, t.fruit),
            r.px(l - 1, i - 4, "#f2fbe0"),
            r.px(l, i - 5, "#f2fbe0"),
            r.px(l + 1, i - 2, t.fruit2),
            r.px(l + 2, i - 3, t.fruit2),
            r.px(l - 3, i - 1, t.leaf),
            r.px(l + 4, i - 1, t.leaf),
            r.px(l - 4, i - 3, t.leaf2));
  });
  return { p: S(18, 26, o), base: 22 };
}
function We(t, e) {
  const a = [
    [
      [5, 26],
      [13, 26],
    ],
  ];
  if (e === 0) return { p: S(18, 30, D(Q(26), t)), base: 26 };
  const o = M(a, (n, l, i, r) => {
    const s = n.leaf,
      p = [0, 6, 10, 16, 16][e];
    if (
      (n.stake.vline(l + 1, i - p, i - 1, O),
      n.stake.px(l + 1, i - p, B),
      e === 1)
    )
      N(s, l, i, t);
    else if (e === 2)
      (s.ellipse(l + 0.5, i - 2.5, 2.6, 2.5, t.leaf),
        s.ellipse(l + 0.5, i - 5.5, 2, 2, t.leaf),
        W(s, t.leaf, t.leaf2, 31 + r, 0.6));
    else {
      (s.ellipse(l + 0.5, i - 3, 3.4, 3, t.leaf),
        s.ellipse(l + 0.5, i - 8, 3.6, 3, t.leaf),
        s.ellipse(l + 0.5, i - 12, 2.6, 2.4, t.leaf),
        W(s, t.leaf, t.leaf2, 41 + r, 0.6),
        s.px(l + 1, i - 10, O),
        s.px(l + 1, i - 5, O));
      const b = [
        [l - 2, i - 4],
        [l + 3, i - 8],
        [l - 1, i - 11],
      ];
      if (e === 3)
        ((n.fruitOut = V),
          b.forEach(([x, F], d) => {
            d < 2 &&
              (n.fruit.rect(x, F, 2, 2, "#b8d88a"),
              n.fruit.px(x, F, "#d8eeb0"));
          }),
          n.top.px(l - 1, i - 11, R),
          n.top.px(l + 3, i - 4, R));
      else {
        const x = n.fruit;
        b.forEach(([F, d]) => {
          (x.ellipse(F, d, 2, 2, t.fruit),
            x.px(F - 1, d - 1, "#ff9d8c"),
            x.px(F, d + 1, t.fruit2),
            x.px(F + 1, d, t.fruit2),
            n.top.px(F, d - 2, t.leaf2),
            n.top.px(F - 1, d - 2, t.leaf2));
        });
      }
    }
  });
  return { p: S(18, 30, o), base: 26 };
}
function Be(t, e) {
  if (e === 0)
    return {
      p: S(
        18,
        30,
        D(
          [
            [
              [5, 26],
              [9, 26],
              [13, 26],
            ],
          ],
          t,
        ),
      ),
      base: 26,
    };
  const a = (l) => {
      const i = l.stake;
      (i.vline(2, 7, 25, O),
        i.vline(15, 7, 25, O),
        i.hline(2, 15, 8, O),
        i.px(2, 7, B),
        i.px(15, 7, B));
      for (const r of [6, 11]) l.under.vline(r, 9, 24, "#e8d4ae");
      l.under.hline(3, 14, 15, "#e8d4ae");
    },
    o = [
      [],
      [],
      [
        [5, 23],
        [7, 20],
        [12, 23],
        [11, 20],
      ],
      [
        [5, 23],
        [7, 20],
        [12, 23],
        [11, 20],
        [4, 17],
        [8, 15],
        [13, 17],
        [10, 12],
        [5, 11],
        [14, 11],
        [7, 8],
        [12, 8],
      ],
    ];
  return {
    p: S(18, 30, [
      (l) => {
        a(l);
        const i = l.leaf;
        if (e === 1) {
          (N(i, 6, 26, t), N(i, 11, 26, t));
          return;
        }
        const r = o[Math.min(e, 3)];
        if (
          (i.line(6, 25, 5, 18, t.leaf2),
          i.line(11, 25, 12, 18, t.leaf2),
          e >= 3 &&
            (i.line(5, 18, 8, 9, t.leaf2), i.line(12, 18, 10, 9, t.leaf2)),
          r.forEach(([s, p], b) =>
            pe(i, s, p, b % 3 ? t.leaf : g(t.leaf, "#ffffff", 0.2), t.leaf2),
          ),
          e === 3)
        ) {
          for (const [s, p] of [
            [9, 18],
            [4, 14],
            [14, 14],
          ])
            (l.top.px(s, p, R),
              l.top.px(s + 1, p, "#f6c445"),
              l.top.px(s, p - 1, R));
          ((l.fruitOut = V), l.fruit.rect(9, 19, 1, 3, "#a6d27a"));
        }
        if (e === 4) {
          const s = l.fruit;
          for (const [p, b, x] of [
            [4, 13, 6],
            [9, 15, 7],
            [13, 12, 6],
          ]) {
            (s.rect(p, b, 2, x, t.fruit),
              s.vline(p + 1, b + 1, b + x - 1, t.fruit2));
            for (let F = 1; F < x - 1; F += 2) s.px(p, b + F, "#b8e090");
            (s.px(p, b - 1, t.leaf2), l.top.px(p + 1, b + x, R));
          }
        }
      },
    ]),
    base: 26,
  };
}
function Ie(t, e) {
  const a = [
    [
      [5, 24],
      [13, 24],
    ],
  ];
  if (e === 0) return { p: S(18, 28, D(Q(24), t)), base: 24 };
  const o = M(a, (n, l, i, r) => {
    const s = n.leaf,
      p = [0, 5, 8, 12, 12][e];
    if (
      (n.stake.vline(l + (r ? -3 : 3), i - p, i - 1, O),
      n.stake.px(l + (r ? -3 : 3), i - p, B),
      e === 1)
    )
      N(s, l, i, t);
    else {
      const b = e >= 3;
      if (
        (s.ellipse(l + 0.5, i - 3, b ? 3.8 : 2.6, b ? 3 : 2.4, t.leaf),
        s.ellipse(
          l + 0.5,
          i - (b ? 8 : 5.5),
          b ? 3.2 : 2,
          b ? 2.6 : 1.8,
          t.leaf,
        ),
        b &&
          (s.ellipse(l - 2.5, i - 5, 2, 1.5, t.leaf2),
          s.ellipse(l + 3.5, i - 6, 2, 1.5, t.leaf2)),
        W(s, t.leaf, t.leaf2, 51 + r, 0.68),
        s.vline(l, i - 4, i - 1, t.leaf2),
        e === 3)
      )
        for (const [x, F] of [
          [l - 2, i - 9],
          [l + 2, i - 4],
        ])
          (n.top.px(x, F, "#b48ad8"),
            n.top.px(x - 1, F, "#b48ad8"),
            n.top.px(x + 1, F, "#b48ad8"),
            n.top.px(x, F - 1, "#b48ad8"),
            n.top.px(x, F + 1, "#b48ad8"),
            n.top.px(x, F, R));
      else if (e === 4) {
        const x = {
            g: t.leaf2,
            G: t.leaf,
            P: t.fruit,
            H: g(t.fruit, "#ffffff", 0.4),
            S: t.fruit2,
          },
          F = [".g.", "gGg", "HPP", "PPP", "PPS", "PPS", ".S."];
        (U(n.fruit, l - 4, i - 9, F, x), U(n.fruit, l + 2, i - 7, F, x));
      }
    }
  });
  return { p: S(18, 28, o), base: 24 };
}
function Ge(t, e) {
  return e === 0
    ? { p: S(18, 34, D([[[9, 30]]], t)), base: 30 }
    : {
        p: S(18, 34, [
          (o) => {
            const n = o.stake;
            (n.vline(2, 9, 29, O),
              n.vline(15, 9, 29, O),
              n.hline(1, 16, 9, O),
              n.hline(2, 15, 10, Pe),
              n.px(1, 9, B),
              n.px(16, 9, B));
            const l = o.leaf;
            if (e === 1) {
              N(l, 9, 30, t);
              return;
            }
            const i = e === 2 ? 21 : 10;
            for (let s = 29; s >= i; s--)
              n.px(9 + (Math.floor((30 - s) / 4) % 2 ? 1 : 0), s, _);
            if (e === 2) {
              (pe(l, 8, 20, t.leaf, t.leaf2), pe(l, 11, 22, t.leaf2, t.leaf));
              return;
            }
            (n.line(9, 12, 4, 9, _),
              n.line(10, 12, 14, 9, _),
              q(
                l,
                [
                  [9, 9, 8.4, 2.6],
                  [4, 10, 3.4, 2.6],
                  [14, 10, 3.4, 2.6],
                  [9, 30 - 23.5, 5, 1.8],
                  [7, 11, 2, 1.6],
                ],
                [g(t.leaf, "#ffffff", 0.25), t.leaf, t.leaf2],
                13,
              ));
            for (const [s, p] of [
              [5, 8],
              [11, 7],
              [14, 10],
              [8, 10],
            ])
              (l.px(s, p, t.leaf2), l.px(s + 1, p + 1, t.leaf2));
            const r = [
              [4, 12],
              [9, 13],
              [13, 12],
            ];
            if (e === 3)
              r.forEach(([s, p]) => {
                (o.top.rect(s, p, 2, 2, "#b8d88a"),
                  o.top.px(s, p + 2, "#9cc070"));
              });
            else {
              const s = {
                F: t.fruit,
                S: t.fruit2,
                H: g(t.fruit, "#ffffff", 0.45),
                g: _,
              };
              r.forEach(([p, b]) =>
                U(
                  o.fruit,
                  p - 1,
                  b - 1,
                  [".g..", "HFSF", "FSFS", "SFHF", ".SFS", ".FS.", "..S."],
                  s,
                ),
              );
            }
          },
        ]),
        base: 30,
      };
}
function Ye(t, e) {
  const a = C(22);
  if (e === 0) return { p: S(18, 26, D(a, t)), base: 22 };
  const o = M(a, (n, l, i) => {
    const r = n.leaf;
    if (e === 1) N(r, l, i, t);
    else if (e === 2)
      (r.px(l, i - 1, t.leaf2),
        r.rect(l - 2, i - 3, 2, 2, t.leaf),
        r.rect(l + 1, i - 3, 2, 2, t.leaf),
        r.rect(l, i - 5, 1, 2, t.leaf));
    else if (
      (r.ellipse(l - 1.5, i - 2.5, 2, 1.8, t.leaf),
      r.ellipse(l + 2.5, i - 2.5, 2, 1.8, t.leaf),
      r.ellipse(l + 0.5, i - 5, 2, 1.8, t.leaf),
      r.px(l - 2, i - 3, t.leaf2),
      r.px(l + 3, i - 3, t.leaf2),
      r.px(l, i - 5, t.leaf2),
      r.px(l, i - 2, t.leaf2),
      e === 3)
    )
      for (const [s, p] of [
        [l - 3, i - 5],
        [l + 3, i - 6],
      ])
        (n.top.px(s, p, A),
          n.top.px(s - 1, p, A),
          n.top.px(s + 1, p, A),
          n.top.px(s, p - 1, A),
          n.top.px(s, p + 1, A),
          n.top.px(s, p, R));
    else {
      const s = {
          l: t.leaf2,
          F: t.fruit,
          A: t.accent ?? "#fff3b0",
          S: t.fruit2,
        },
        p = ["l.l.", "FAFF", "FFAS", ".FS."];
      (U(n.fruit, l - 5, i - 3, p, s), U(n.fruit, l + 2, i - 3, p, s));
    }
  });
  return { p: S(18, 26, o), base: 22 };
}
function Ce(t, e) {
  if (e === 0) return { p: S(18, 26, D([[[6, 17]], [[12, 22]]], t)), base: 22 };
  const a = (l, i, r, s) => {
      (l.ellipse(i + 0.5, r + 0.5, 2.7, 2.2, s),
        l.px(i, r, t.leaf2),
        l.px(i - 1, r + 1, t.leaf2),
        l.px(i + 1, r + 1, t.leaf2));
    },
    o = e === 4;
  return {
    p: S(18, 26, [
      (l) => {
        const i = l.leaf;
        if (e === 1) {
          N(i, 6, 17, t);
          return;
        }
        if (e === 2) {
          (a(i, 4, 14, t.leaf),
            a(i, 8, 13, g(t.leaf, "#ffffff", 0.15)),
            i.line(6, 16, 6, 14, t.leaf2));
          return;
        }
        if (
          (i.line(1, 14, 16, 13, t.leaf2),
          a(i, 3, 12, t.leaf),
          a(i, 8, 11, g(t.leaf, "#ffffff", 0.15)),
          a(i, 14, 12, t.leaf),
          e === 3)
        )
          (l.top.px(11, 9, R),
            l.top.px(10, 9, "#f6c445"),
            l.top.px(12, 9, "#f6c445"),
            l.top.px(11, 8, R));
        else {
          const r = l.fruit;
          (r.ellipse(13.5, 22 - 7.5, 3.2, 2.4, t.fruit),
            r.vline(13, 13, 16, t.fruit2),
            r.px(12, 13, g(t.fruit, "#ffffff", 0.35)),
            r.px(13, 12, "#6a7a3a"));
        }
      },
      (l) => {
        const i = l.leaf;
        if (e === 1) {
          N(i, 12, 22, t);
          return;
        }
        if (e === 2) {
          (a(i, 11, 19, t.leaf),
            a(i, 14, 20, g(t.leaf, "#ffffff", 0.15)),
            i.line(12, 21, 12, 20, t.leaf2));
          return;
        }
        if (
          (i.line(1, 20, 17, 19, t.leaf2),
          a(i, 3, 19, t.leaf),
          o
            ? a(i, 15, 20, t.leaf)
            : (a(i, 9, 18, g(t.leaf, "#ffffff", 0.15)), a(i, 14, 19, t.leaf)),
          e === 3)
        )
          ((l.fruitOut = V),
            l.fruit.ellipse(8.5, 21, 2.2, 1.7, "#a8c870"),
            l.fruit.px(8, 20, "#c8e090"));
        else {
          const r = l.fruit;
          r.ellipse(9, 22 - 3.5, 5.6, 3.8, t.fruit);
          const s = g(t.fruit, "#ffffff", 0.35);
          for (let p = 0; p < 26; p++)
            for (let b = 0; b < 18; b++) {
              if (r.get(b, p) !== t.fruit) continue;
              const x = Math.abs(p + 0.5 - (22 - 3.5)) / 3.8;
              for (const F of [6, 9, 12]) {
                const d = 9 + (F - 9) * (1 - 0.35 * x * x);
                Math.abs(b + 0.5 - d) < 0.5 && r.px(b, p, t.fruit2);
              }
            }
          (r.px(4, 17, s),
            r.px(5, 16, s),
            r.px(4, 18, s),
            r.rect(8, 14, 2, 2, "#6a7a3a"),
            r.px(10, 13, "#6a7a3a"),
            r.px(9, 14, "#8a9a4a"));
        }
      },
    ]),
    base: 22,
  };
}
function qe(t, e) {
  if (e === 0)
    return {
      p: S(
        18,
        26,
        D(
          [
            [
              [5, 18],
              [13, 18],
            ],
            [[9, 22]],
          ],
          t,
        ),
      ),
      base: 22,
    };
  const a = [g(t.leaf, "#ffffff", 0.15), t.leaf, t.leaf2];
  return {
    p: S(18, 26, [
      (n) => {
        const l = n.leaf;
        if (e === 1) {
          (n.stake.vline(9, 18, 21, _),
            l.px(8, 18, t.leaf),
            l.px(7, 17, t.leaf),
            l.px(10, 17, t.leaf),
            l.px(11, 16, t.leaf),
            l.px(9, 16, t.leaf2),
            l.px(9, 17, t.leaf));
          return;
        }
        (n.stake.vline(9, 19, 21, _),
          n.stake.px(8, 21, _),
          n.stake.px(10, 20, _),
          e === 2
            ? q(
                l,
                [
                  [9, 17, 4.2, 3.4],
                  [7, 18, 2.5, 2],
                ],
                a,
                3,
              )
            : e === 3
              ? q(
                  l,
                  [
                    [9, 15, 6.5, 4.8],
                    [5, 18, 3.6, 3],
                    [13, 18, 3.6, 3],
                  ],
                  a,
                  4,
                )
              : q(
                  l,
                  [
                    [9, 14, 7.6, 5.8],
                    [4, 18, 3.8, 3.2],
                    [14, 18, 3.8, 3.2],
                    [9, 9, 4.5, 2.6],
                  ],
                  a,
                  5,
                ));
        const i = [
          [5, 13],
          [9, 10],
          [12, 14],
          [7, 16],
          [13, 18],
          [3, 18],
          [10, 17],
          [6, 11],
        ];
        if (e === 3)
          i.slice(0, 5).forEach(([r, s], p) => {
            (n.top.px(r, s, p % 2 ? A : "#cfe3a0"),
              n.top.px(r + 1, s + 1, p % 2 ? "#f4d8e0" : "#b8d890"));
          });
        else if (e === 4) {
          const r = "#a9b8f0";
          i.forEach(([s, p], b) => {
            (n.top.px(s, p, r),
              n.top.px(s + 1, p, t.fruit),
              n.top.px(s, p + 1, t.fruit),
              n.top.px(s + 1, p + 1, t.fruit2),
              b % 2 === 0 &&
                (n.top.px(s + 2, p + 1, t.fruit),
                n.top.px(s + 2, p + 2, t.fruit2),
                n.top.px(s + 1, p + 2, t.fruit2)));
          });
        }
      },
    ]),
    base: 22,
  };
}
function Ke(t, e, f) {
  if (t === "sunflower") {
    const r = [[[5, 25]], [[12, 30]]];
    if (f === 0) return { p: S(18, 34, D(r, e)), base: 30 };
    const s = M(r, (p, b, x) => {
      const F = p.leaf;
      if (f === 1) N(F, b, x, e);
      else if (f === 2)
        (F.vline(b, x - 6, x - 1, e.leaf2),
          F.ellipse(b - 1.5, x - 3.5, 1.7, 1.1, e.leaf),
          F.ellipse(b + 2.5, x - 4.5, 1.7, 1.1, e.leaf),
          F.px(b, x - 7, e.leaf));
      else {
        const d = f === 3 ? 13 : 15;
        if (
          (F.vline(b, x - d, x - 1, e.leaf2),
          F.vline(b + 1, x - 6, x - 1, g(e.leaf2, "#000000", 0.1)),
          F.ellipse(b - 1.5, x - 4.5, 2, 1.3, e.leaf),
          F.ellipse(b + 3, x - 7.5, 2, 1.3, e.leaf),
          F.ellipse(b - 1.5, x - 10.5, 1.8, 1.2, e.leaf),
          F.px(b - 2, x - 5, e.leaf2),
          F.px(b + 3, x - 8, e.leaf2),
          f === 3)
        )
          ((p.fruitOut = V),
            p.fruit.ellipse(b + 0.5, x - 14.5, 2.2, 2.2, e.leaf2),
            p.fruit.px(b - 1, x - 16, e.fruit),
            p.fruit.px(b + 1, x - 16, e.fruit),
            p.fruit.px(b, x - 17, e.fruit));
        else {
          const h = p.fruit,
            E = x - 17.5;
          h.ellipse(b + 0.5, E, 3.7, 3.7, e.fruit);
          for (let P = 0; P < 8; P++)
            h.px(
              b + Math.round(Math.cos(P * 0.785) * 3.4),
              Math.floor(E) + Math.round(Math.sin(P * 0.785) * 3.4),
              "#ffe48a",
            );
          (h.ellipse(b + 0.5, E, 1.9, 1.9, e.fruit2),
            h.px(b - 1, Math.floor(E) - 1, "#a8774f"),
            h.px(b + 1, Math.floor(E), "#6e4a30"));
        }
      }
    });
    return { p: S(18, 34, s), base: 30 };
  }
  if (t === "lavender") {
    if (f === 0) return { p: S(18, 26, D(Q(22), e)), base: 22 };
    const r = M(Q(22), (s, p, b) => {
      const x = s.leaf;
      if (f === 1) ce(x, p, b, e);
      else if (
        (x.line(p, b - 1, p - 2, b - 4, e.leaf),
        x.vline(p, b - 1, b - 5, e.leaf2),
        x.line(p, b - 1, p + 2, b - 4, e.leaf),
        x.px(p - 1, b - 2, e.leaf2),
        x.px(p + 1, b - 2, e.leaf2),
        f >= 3)
      )
        if (
          (x.line(p, b - 3, p - 2, b - 8, e.leaf2),
          x.vline(p, b - 3, b - 10, e.leaf2),
          x.line(p, b - 3, p + 2, b - 8, e.leaf2),
          f === 3)
        )
          (s.top.px(p - 2, b - 9, "#c8bce0"),
            s.top.px(p, b - 11, "#c8bce0"),
            s.top.px(p + 2, b - 9, "#c8bce0"));
        else
          for (const [F, d] of [
            [p - 2, b - 8],
            [p, b - 10],
            [p + 2, b - 8],
          ]) {
            for (let h = 0; h < 4; h++)
              s.top.px(F, d - h, h % 2 ? e.fruit2 : e.fruit);
            (s.top.px(F, d - 4, g(e.fruit, "#ffffff", 0.35)),
              s.top.px(F + (F < p ? -1 : 1), d - 2, e.fruit2));
          }
    });
    return { p: S(18, 26, r), base: 22 };
  }
  const u = 26,
    a = 22,
    o = [
      [[9, a - 6]],
      [
        [4, a],
        [14, a],
      ],
    ];
  if (f === 0) return { p: S(18, u, D(o, e)), base: a };
  const n = M(o, (l, i, r, s) => {
    const p = l.leaf;
    if (f === 1) N(p, i, r, e);
    else if (f === 2)
      (p.ellipse(i + 0.5, r - 2.5, 2.6, 2.3, e.leaf),
        W(p, e.leaf, e.leaf2, 71 + s + r, 0.6),
        p.px(i, r - 1, e.leaf2));
    else if (
      (p.ellipse(i + 0.5, r - 3.5, 3.9, 3.3, e.leaf),
      p.ellipse(i + 0.5, r - 7, 2.7, 2.3, e.leaf),
      W(p, e.leaf, e.leaf2, 81 + s + r, 0.62),
      W(p, e.leaf, g(e.leaf, "#ffffff", 0.25), 91 + s + r, 0.85),
      f === 3)
    )
      for (const [b, x] of [
        [i - 2, r - 6],
        [i + 2, r - 9],
        [i + 3, r - 4],
      ])
        (l.top.px(b, x, e.fruit),
          l.top.px(b, x + 1, e.leaf2),
          l.top.px(b, x - 1, e.fruit2));
    else {
      const b = { F: e.fruit, S: e.fruit2, H: "#f58a98" },
        x = [".HF.", "HFSF", "FSFF", ".FS."];
      (U(l.fruit, i - 3, r - 8, x, b), U(l.fruit, i + 1, r - 5, x, b));
    }
  });
  return { p: S(18, u, n), base: a };
}
function Ve(t, e, f) {
  if (f === 0)
    return {
      p: S(20, 34, [
        (x) => {
          (x.top.hline(8, 12, 29, we),
            x.top.hline(9, 11, 28, "#a77a52"),
            x.top.px(10, 27, te),
            x.top.px(9, 27, g(e.fruit, te, 0.4)));
        },
      ]),
      base: 30,
    };
  const l = [g(e.leaf, "#ffffff", 0.3), e.leaf, e.leaf2],
    i = t === "peach",
    r = i ? "#a0624a" : _,
    s = i ? "#7f4a38" : $e;
  return {
    p: S(20, 34, [
      (b) => {
        const x = b.stake,
          F = b.leaf;
        if (f === 1) {
          (x.vline(10, 24, 29, r),
            x.vline(13, 23, 29, O),
            x.px(13, 23, B),
            x.px(11, 26, "#e8d4ae"),
            x.px(12, 26, "#e8d4ae"),
            F.px(9, 23, e.leaf),
            F.px(8, 23, e.leaf),
            F.px(11, 22, e.leaf),
            F.px(12, 22, e.leaf),
            F.px(10, 22, e.leaf2),
            F.px(9, 26, e.leaf),
            F.px(8, 25, e.leaf));
          return;
        }
        if (f === 2) {
          (x.vline(10, 21, 29, r),
            x.px(11, 29, s),
            x.vline(13, 22, 29, O),
            x.px(13, 22, B),
            x.px(11, 25, "#e8d4ae"),
            x.px(12, 25, "#e8d4ae"),
            q(
              F,
              [
                [10 + 0.5, 19, 4.5, 3.8],
                [8, 21, 2.5, 2],
              ],
              l,
              t.length,
            ));
          return;
        }
        const d = f === 4,
          h = d ? 13 : 11;
        (x.rect(9, 30 - h, 2, h, r),
          x.vline(10, 30 - h + 1, 29, s),
          x.px(8, 29, r),
          x.px(11, 29, s),
          x.line(10, 30 - h + 2, 14, 30 - h - 2, r),
          x.line(9, 30 - h + 3, 6, 30 - h - 1, r));
        const E = d
          ? [
              [10 + 0.5, 11, 8.6, 6.4],
              [5, 15, 4.2, 3.6],
              [16, 15, 4.2, 3.6],
              [10 + 0.5, 5, 6, 4],
            ]
          : [
              [10 + 0.5, 13, 7, 5.6],
              [6, 16, 3.6, 3],
              [15, 16, 3.6, 3],
            ];
        if ((q(F, E, l, i ? 9 : 7), f === 3)) {
          const P = [
              [6, 12],
              [11, 9],
              [15, 13],
              [9, 15],
              [13, 17],
              [4, 16],
              [17, 16],
              [8, 9],
            ],
            H = i ? "#f7a1b5" : A,
            L = i ? "#ffd6e0" : "#f7b7c8";
          P.forEach(([v, X]) => {
            (b.top.px(v, X, H), b.top.px(v + 1, X, L), b.top.px(v, X - 1, L));
          });
        } else
          [
            [5, 10],
            [11, 6],
            [15, 11],
            [9, 13],
            [13, 16],
            [3, 16],
            [17, 15],
            [7, 5],
            [16, 6],
          ].forEach(([H, L]) => {
            const v = b.top;
            i
              ? (v.px(H, L, "#ffd6c8"),
                v.px(H + 1, L, e.fruit),
                v.px(H - 1, L + 1, e.fruit),
                v.px(H, L + 1, e.fruit),
                v.px(H + 1, L + 1, e.fruit2),
                v.px(H, L + 2, e.fruit2),
                v.px(H - 1, L, e.fruit))
              : (v.px(H, L, e.fruit2),
                v.px(H + 1, L, e.fruit),
                v.px(H, L + 1, e.fruit),
                v.px(H + 1, L + 1, "#b8392c"),
                v.px(H + 1, L - 1, "#6b4a35"));
          });
      },
    ]),
    base: 30,
  };
}
const ne = new Map();
function cf(t, e) {
  const f = Math.max(0, Math.min(4, Math.floor(e))),
    u = `${t}:${f}`;
  let a = ne.get(u);
  if (a) return a;
  if (t === "wheat") a = be(f);
  else {
    const o = fe[t],
      n = o ? o.colors : fe.wheat.colors;
    let l;
    switch (o == null ? void 0 : o.shape) {
      case "grain":
        l = Ae(n, f);
        break;
      case "tall":
        l = _e(n, f);
        break;
      case "root":
        l = Qe(t, n, f);
        break;
      case "leafy":
        l = Ue(n, f);
        break;
      case "vine":
        l =
          t === "tomato"
            ? We(n, f)
            : t === "cucumber"
              ? Be(n, f)
              : t === "eggplant"
                ? Ie(n, f)
                : Ge(n, f);
        break;
      case "ground":
        l = t === "strawberry" ? Ye(n, f) : Ce(n, f);
        break;
      case "bush":
        l = qe(n, f);
        break;
      case "flower":
        l = Ke(t, n, f);
        break;
      case "tree":
        l = Ve(t, n, f);
        break;
      default:
        return ((a = be(f)), ne.set(u, a), a);
    }
    a = le(l.p, l.p.w / 2, l.base + 1);
  }
  return (ne.set(u, a), a);
}
const xe = new Map();
function vf(t, e) {
  const f = t + ":" + (e ? 1 : 0);
  let u = xe.get(f);
  return (
    u ||
    (t === "field" ? (u = Oe(e)) : t === "paddy" ? (u = Xe(e)) : (u = ze(e)),
    xe.set(f, u),
    u)
  );
}
function ve(t, e) {
  (t.rect(1, 1, 16, 16, e),
    t.px(1, 1, null),
    t.px(16, 1, null),
    t.px(1, 16, null),
    t.px(16, 16, null));
}
function Xe(t) {
  const e = new j(18, 18),
    f = t ? "#97704c" : "#b48a62",
    u = t ? "#aa825c" : "#cba076",
    a = t ? "#86c4d6" : "#9fd3e0",
    o = t ? "#6eaec2" : "#86bfd0",
    n = t ? "#c0e6ee" : "#d4eef3";
  ve(e, f);
  for (const r of [5, 11])
    (e.rect(2, r, 14, 3, a), e.hline(2, 15, r, o), e.hline(2, 15, r - 1, u));
  (e.hline(2, 15, 15, g(f, "#000000", 0.12)),
    [
      [5, 6],
      [6, 6],
      [11, 7],
      [12, 7],
      [4, 12],
      [9, 13],
      [10, 13],
      [13, 12],
    ].forEach(([r, s]) => e.px(r, s, n)),
    [
      [6, 2],
      [12, 3],
      [4, 9],
      [13, 9],
      [8, 15],
    ].forEach(([r, s]) => e.px(r, s, u)));
  const l = "#79b356",
    i = "#9ccf6e";
  return (
    e.vline(2, 3, 6, l),
    e.px(3, 4, i),
    e.vline(15, 9, 12, l),
    e.px(14, 10, i),
    e.px(15, 8, "#a8774f"),
    e.px(2, 2, "#a8774f"),
    e.outline(ie),
    le(e, 9, 9)
  );
}
function ze(t) {
  const e = new j(18, 18),
    f = t ? "#7f5a3c" : "#9a6e4a",
    u = t ? "#6a4a30" : "#82593a",
    a = t ? "#93694a" : "#b08158";
  ve(e, f);
  for (let r = 0; r < 18; r++)
    for (let s = 0; s < 18; s++) {
      const p = (s + 0.5 - 9) / 6.2,
        b = (r + 0.5 - 10) / 4.6,
        x = p * p + b * b;
      x <= 1 && x > 0.62 && e.px(s, r, u);
    }
  ([
    [9, 9],
    [7, 11],
    [11, 10],
    [5, 4],
    [13, 5],
    [3, 12],
    [14, 13],
    [9, 15],
  ].forEach(([r, s]) => e.px(r, s, a)),
    [
      [8, 10],
      [10, 12],
      [6, 7],
    ].forEach(([r, s]) => e.px(r, s, u)));
  const o = "#88bf64",
    n = "#acd77f",
    l = "#6aa04e",
    i = (r, s) => {
      const p = (x) => (r ? 16 - x : 1 + x),
        b = (x) => (s ? 16 - x : 1 + x);
      for (let x = 0; x < 4; x++)
        for (let F = 0; F < 4 - x; F++)
          e.px(p(F), b(x), (F + x) % 3 === 0 ? n : o);
      e.px(p(0), b(0), l);
    };
  return (
    i(0, 0),
    i(1, 0),
    i(0, 1),
    i(1, 1),
    e.px(1, 1, null),
    e.px(16, 1, null),
    e.px(1, 16, null),
    e.px(16, 16, null),
    e.px(8, 1, o),
    e.px(9, 1, n),
    e.px(1, 8, o),
    e.px(16, 9, o),
    e.px(9, 16, o),
    e.outline(ie),
    le(e, 9, 9)
  );
}
const Z = "#5b3f33",
  Je = "#4b6a3a",
  T = "#6a7a3a",
  Y = "#8a5d3d",
  G = "#efe2c4",
  ae = "#d8c7a2",
  I = 14;
function y(t, e, f, u, a) {
  t.ellipse(e + 0.5, f + 0.5, u, u, a);
}
function m(t, e, f, u) {
  const a = t.clone();
  for (let o = 0; o < t.h; o++)
    for (let n = 0; n < t.w; n++)
      a.get(n, o) === e &&
        (!a.get(n + 1, o + 1) || !a.get(n + 1, o)
          ? t.px(n, o, f)
          : u && (!a.get(n - 1, o - 1) || !a.get(n, o - 1)) && t.px(n, o, u));
}
function $(t, e, f) {
  for (let u = 0; u < t.h; u++)
    for (let a = 0; a < t.w; a++) t.get(a, u) === e && f(a, u);
}
const w = (t, e = 0.35) => g(t, "#ffffff", e),
  c = (t, e = 0.2) => g(t, "#000000", e);
function Ze(t, e) {
  const f = new j(I, I);
  let u = Z;
  switch (t) {
    case "wheat": {
      for (const [a, o] of [
        [3, 5],
        [6, 6],
        [9, 7],
      ])
        f.line(a + 1, 3, o + 1, 12, "#c9a24a");
      for (const a of [3, 6, 9])
        (f.rect(a, 1, 2, 4, "#f2c75a"),
          f.px(a, 1, "#ffe59a"),
          f.px(a + 1, 4, "#d6a13e"));
      (f.hline(5, 9, 9, "#a5693f"), (u = "#8a6232"));
      break;
    }
    case "rice": {
      const a = "#a9b860";
      (f.line(3, 5, 6, 12, a),
        f.line(6, 5, 7, 12, c(a, 0.1)),
        f.line(9, 5, 8, 12, a),
        f.hline(5, 9, 9, "#a5693f"));
      for (const o of [2, 5, 8])
        ([
          [o + 1, 4],
          [o + 1, 3],
          [o + 2, 2],
          [o + 3, 2],
          [o + 4, 3],
          [o + 4, 4],
          [o + 4, 5],
        ].forEach(([n, l]) => f.px(n, l, e.fruit)),
          f.px(o + 3, 3, e.fruit2),
          f.px(o + 5, 4, e.fruit2),
          f.px(o + 2, 2, "#fff3c0"));
      u = "#8a6232";
      break;
    }
    case "carrot": {
      for (let a = 0; a <= 5; a++) y(f, 2 + a, 12 - a, 0.5 + a * 0.32, e.fruit);
      (m(f, e.fruit, e.fruit2, "#ffb070"),
        [
          [4, 9],
          [6, 8],
          [5, 11],
        ].forEach(([a, o]) => {
          f.get(a, o) && f.px(a, o, e.fruit2);
        }),
        f.line(8, 6, 8, 1, e.leaf),
        f.line(9, 6, 12, 3, e.leaf2),
        f.line(9, 5, 11, 1, e.leaf),
        f.px(7, 2, e.leaf2));
      break;
    }
    case "cabbage": {
      (f.ellipse(6.5, 7.5, 5.5, 5, e.leaf2),
        f.ellipse(6.5, 7, 4.2, 3.8, e.leaf),
        f.ellipse(6.5, 6.5, 2.7, 2.4, e.fruit),
        f.px(5, 5, "#f2fbe0"),
        f.px(6, 4, "#f2fbe0"),
        f.line(6, 9, 3, 11, e.leaf2),
        f.line(7, 9, 10, 11, e.leaf2),
        f.px(7, 7, e.fruit2),
        f.px(8, 6, e.fruit2),
        f.px(1, 6, e.leaf2),
        f.px(12, 6, e.leaf2));
      break;
    }
    case "potato": {
      (f.ellipse(6.5, 7.5, 5.3, 4, e.fruit),
        f.ellipse(9, 6, 2.6, 2.4, e.fruit),
        m(f, e.fruit, e.fruit2, w(e.fruit, 0.3)),
        [
          [4, 7],
          [7, 9],
          [9, 5],
          [3, 9],
        ].forEach(([a, o]) => f.px(a, o, c(e.fruit2, 0.25))),
        f.px(4, 5, "#f4dcb0"));
      break;
    }
    case "tomato": {
      (f.ellipse(6.5, 8, 5, 4.6, e.fruit),
        m(f, e.fruit, e.fruit2, "#ff9d8c"),
        f.px(4, 6, "#ffd0c8"),
        f.px(6, 2, T),
        f.hline(4, 8, 3, e.leaf),
        f.px(6, 3, e.leaf2),
        f.px(4, 4, e.leaf),
        f.px(8, 4, e.leaf),
        f.px(6, 4, e.leaf2));
      break;
    }
    case "sunflower": {
      f.ellipse(6.5, 6, 5, 5, e.fruit);
      for (let n = 0; n < 8; n++)
        f.px(
          6 + Math.round(Math.cos(n * 0.785 + 0.39) * 4.6),
          5 + Math.round(Math.sin(n * 0.785 + 0.39) * 4.6),
          "#ffe48a",
        );
      (f.ellipse(6.5, 6, 2.7, 2.7, e.fruit2),
        $(f, e.fruit2, (n, l) => {
          (n + l) % 2 === 0 && f.px(n, l, "#6e4a30");
        }),
        f.px(5, 4, "#a8774f"));
      const a = "#4a3a30",
        o = "#e8dcc0";
      (f.grid([".D.", "DCD", "DDD", ".D."], { D: a, C: o }, 9, 9),
        f.grid([".D.", "DCD", "DDD", ".D."], { D: a, C: o }, 1, 9));
      break;
    }
    case "corn": {
      for (let a = 0; a <= 6; a++) y(f, 4 + a, 9 - a, 1.9, e.fruit);
      (m(f, e.fruit, e.fruit2, "#fff0a0"),
        $(f, e.fruit, (a, o) => {
          (a + 2 * o) % 3 === 0 && f.px(a, o, g(e.fruit, e.fruit2, 0.55));
        }),
        f.tri(1, 13, 6, 12, 3, 7, e.leaf),
        f.tri(1, 13, 8, 11, 7, 9, e.leaf2),
        f.px(3, 10, w(e.leaf, 0.3)));
      break;
    }
    case "radish": {
      (f.ellipse(6.5, 8.6, 3.3, 3.8, e.fruit),
        f.px(7, 12, e.fruit2),
        f.px(7, 13, e.fruit2),
        m(f, e.fruit, e.fruit2, "#ffffff"),
        $(f, e.fruit, (a, o) => {
          o <= 6 && f.px(a, o, "#dcebb8");
        }),
        f.px(4, 6, "#dcebb8"),
        f.ellipse(4.5, 3.2, 1.7, 2.3, e.leaf),
        f.ellipse(8.5, 2.8, 1.7, 2.4, e.leaf),
        f.vline(6, 2, 5, e.leaf2),
        f.px(4, 3, e.leaf2),
        f.px(8, 3, e.leaf2));
      break;
    }
    case "strawberry": {
      (f.ellipse(6.5, 6.5, 4.6, 3, e.fruit),
        f.tri(2, 7, 11, 7, 6.5, 12.5, e.fruit),
        m(f, e.fruit, e.fruit2, w(e.fruit, 0.3)),
        $(f, e.fruit, (a, o) => {
          (a + o * 2) % 4 === 0 && o > 4 && f.px(a, o, e.accent ?? "#fff3b0");
        }),
        f.hline(4, 9, 3, e.leaf),
        f.px(3, 4, e.leaf),
        f.px(10, 4, e.leaf),
        f.px(6, 4, e.leaf2),
        f.px(6, 2, T),
        f.px(7, 1, T));
      break;
    }
    case "cucumber": {
      for (let a = 0; a <= 8; a++) y(f, 2 + a, 11 - a, 1.6, e.fruit);
      (m(f, e.fruit, e.fruit2, w(e.fruit, 0.25)),
        [
          [4, 8],
          [6, 6],
          [8, 4],
          [5, 9],
          [7, 7],
        ].forEach(([a, o]) => f.px(a, o, "#c8e6a0")),
        f.px(11, 2, "#ffe066"),
        f.px(12, 1, "#ffe066"),
        f.px(12, 2, "#f6c445"),
        f.px(11, 1, "#ffe066"),
        f.px(1, 12, T));
      break;
    }
    case "lavender": {
      const a = [
        [3, 6],
        [6, 5],
        [9, 6],
      ];
      (f.line(6, 12, 3, 6, e.leaf2),
        f.line(6, 12, 6, 5, e.leaf2),
        f.line(7, 12, 9, 6, e.leaf2));
      for (const [o, n] of a) {
        for (let l = 0; l < 5; l++)
          (f.px(o, n - l, l % 2 ? e.fruit2 : e.fruit),
            f.px(o + 1, n - l, l % 2 ? e.fruit : e.fruit2));
        f.px(o, n - 4, w(e.fruit, 0.35));
      }
      (f.hline(5, 8, 9, "#f39bb0"),
        f.px(4, 8, "#f39bb0"),
        f.px(9, 8, "#f39bb0"),
        f.px(4, 10, "#e07a95"),
        f.px(9, 10, "#e07a95"));
      break;
    }
    case "eggplant": {
      (f.ellipse(5.5, 8.5, 3.9, 3.5, e.fruit),
        f.ellipse(8.2, 5.8, 2.5, 2.3, e.fruit),
        m(f, e.fruit, e.fruit2, w(e.fruit, 0.35)),
        f.px(4, 7, "#c8a8e8"),
        f.px(8, 4, e.leaf),
        f.px(9, 4, e.leaf2),
        f.px(10, 4, e.leaf),
        f.px(9, 5, e.leaf),
        f.px(10, 5, e.leaf),
        f.px(10, 3, e.leaf),
        f.px(8, 3, e.leaf),
        f.px(10, 2, T),
        f.px(11, 1, T));
      break;
    }
    case "apple": {
      (f.ellipse(6.5, 8, 5, 4.6, e.fruit),
        f.px(6, 3, null),
        f.px(7, 3, null),
        m(f, e.fruit, c(e.fruit, 0.18), e.fruit2),
        f.px(4, 6, "#ffd0c8"),
        f.px(6, 3, Y),
        f.px(7, 2, Y),
        f.px(8, 2, e.leaf),
        f.px(9, 1, e.leaf),
        f.px(9, 2, e.leaf2),
        f.px(10, 1, e.leaf));
      break;
    }
    case "sweetpotato": {
      for (let a = 0; a <= 8; a++)
        y(
          f,
          2 + a,
          Math.round(10 - a * 0.55),
          0.7 + 1.5 * Math.sin((Math.PI * a) / 8),
          e.fruit,
        );
      (m(f, e.fruit, e.fruit2, w(e.fruit, 0.3)),
        f.px(1, 11, e.fruit2),
        f.px(11, 4, e.fruit2),
        f.px(12, 3, e.fruit2),
        [
          [5, 8],
          [8, 7],
        ].forEach(([a, o]) => f.px(a, o, c(e.fruit2, 0.15))));
      break;
    }
    case "pumpkin": {
      f.ellipse(6.5, 8, 5.7, 4.4, e.fruit);
      for (const a of [4, 9])
        $(f, e.fruit, (o, n) => {
          o === a && n > 4 && n < 11 && f.px(o, n, e.fruit2);
        });
      ($(f, e.fruit, (a, o) => {
        (a === 6 || a === 7) &&
          o > 3 &&
          o < 12 &&
          a === 6 &&
          f.px(a, o, e.fruit2);
      }),
        m(f, e.fruit, e.fruit2, w(e.fruit, 0.35)),
        f.rect(6, 2, 2, 2, T),
        f.px(8, 1, T),
        f.px(9, 2, e.leaf));
      break;
    }
    case "rose": {
      (f.tri(3, 8, 11, 8, 7, 13, G),
        f.line(7, 9, 7, 12, ae),
        f.px(9, 9, ae),
        f.px(2, 7, e.leaf),
        f.px(3, 6, e.leaf),
        f.px(11, 7, e.leaf),
        f.px(10, 6, e.leaf2),
        f.px(6, 8, e.leaf2));
      const a = { F: e.fruit, S: e.fruit2, H: "#f58a98" },
        o = [".HF.", "HFSF", "FSFF", ".FS."];
      (f.grid(o, a, 1, 3), f.grid(o, a, 8, 3), f.grid(o, a, 5, 1));
      break;
    }
    case "blueberry": {
      const a = "#a9b8f0",
        o = c(e.fruit2, 0.25);
      for (const [n, l] of [
        [6.9, 4.6],
        [4.4, 8.6],
        [9.2, 8.8],
      ])
        f.ellipse(n, l, 2.6, 2.5, e.fruit);
      m(f, e.fruit, e.fruit2, a);
      for (const [n, l] of [
        [6, 3],
        [3, 7],
        [8, 7],
      ])
        (f.px(n, l, o), f.px(n + 1, l, o));
      (f.px(10, 2, e.leaf),
        f.px(11, 2, e.leaf),
        f.px(11, 3, e.leaf2),
        f.px(9, 3, T));
      break;
    }
    case "grape": {
      ([
        [3, 4],
        [6, 4],
        [9, 4],
        [4, 6],
        [7, 6],
        [10, 6],
        [5, 8],
        [8, 8],
        [6, 10],
        [7, 12],
      ].forEach(([o, n], l) => {
        const i = l % 2 ? e.fruit2 : e.fruit;
        (f.px(o, n, i),
          f.px(o - 1, n, i),
          f.px(o + 1, n, i),
          f.px(o, n - 1, i),
          f.px(o, n + 1, i),
          f.px(o - 1, n - 1, null),
          f.px(o, n - 1, w(e.fruit, 0.4)));
      }),
        f.px(6, 2, Y),
        f.px(7, 1, Y),
        f.px(5, 1, e.leaf),
        f.px(4, 1, e.leaf),
        f.px(4, 2, e.leaf2),
        f.px(3, 1, e.leaf));
      break;
    }
    case "peach": {
      (f.ellipse(6.5, 8, 5, 4.6, e.fruit),
        $(f, e.fruit, (a, o) => {
          a + o * 0.3 >= 8.5 && f.px(a, o, g(e.fruit, e.fruit2, 0.75));
        }),
        m(f, e.fruit, g(e.fruit, e.fruit2, 0.5), "#ffe0d4"),
        f.line(6, 4, 5, 8, c(e.fruit2, 0.08)),
        f.px(6, 3, Y),
        f.px(7, 2, e.leaf),
        f.px(8, 2, e.leaf),
        f.px(8, 1, e.leaf2),
        f.px(9, 1, e.leaf));
      break;
    }
    default:
      (f.ellipse(6.5, 7.5, 4.5, 4.5, e.fruit),
        m(f, e.fruit, e.fruit2, w(e.fruit)));
  }
  return { p: f, out: u };
}
const ye = {
  wheat: ["F.F.F", "F.F.F", "D.D.D", ".DDD.", "..D.."],
  rice: [".FFF.", "D...F", "D...S", "D....", "D...."],
  carrot: ["...LL", "..FL.", ".FF..", "FF...", "F...."],
  cabbage: [".LLL.", "LFFFL", "LFSFL", "LFFFL", ".LLL."],
  potato: [".....", ".FFF.", "FSFFF", "FFFSF", ".FFF."],
  tomato: ["..L..", ".LLL.", "FFFFF", "FFFFS", ".FSS."],
  sunflower: [".FFF.", "FSSSF", "FSSSF", ".FFF.", "..L.."],
  corn: ["..F..", ".FSF.", ".FSF.", "LFSFL", ".LLL."],
  radish: [".L.L.", "..L..", ".FFF.", ".FFS.", "..F.."],
  strawberry: [".LLL.", "FFFFF", "FAFAF", ".FFF.", "..F.."],
  cucumber: ["...FY", "..FS.", ".FS..", "FS...", "D...."],
  lavender: ["F.F.F", "S.S.S", "F.F.F", "D.D.D", ".DDD."],
  eggplant: ["...LL", "..FL.", ".FFF.", "FFFS.", ".FS.."],
  apple: ["..BL.", ".FBF.", "FFFFF", "FFFFS", ".FFS."],
  sweetpotato: [".....", "..FFF", ".FFSF", "FFFS.", "FS..."],
  pumpkin: ["..D..", ".FSF.", "FSFSF", "FSFSF", ".FSF."],
  rose: [".FFF.", "FSSF.", ".FFF.", "..LD.", "..L.."],
  blueberry: [".FS..", ".FF..", "FS.FS", "FF.FF", "....."],
  grape: ["..D..", "FSFSF", ".SFS.", ".FS..", "..F.."],
  peach: ["..DL.", ".FFS.", "FFFSS", "FFFSS", ".FSS."],
};
function ef(t, e) {
  const f = new j(I, I);
  f.rect(2, 2, 10, 11, G);
  for (let a = 2; a <= 11; a += 2) f.px(a, 1, G);
  (f.hline(2, 11, 3, ae),
    f.vline(11, 4, 12, ae),
    f.rect(3, 5, 7, 6, "#fbf7ee"));
  const u = ye[t];
  return (
    u && u.length
      ? f.grid(
          u,
          {
            F: e.fruit,
            S: e.fruit2,
            L: e.leaf,
            D: e.leaf2,
            A: e.accent ?? "#fff3b0",
            Y: "#ffe066",
            B: Y,
          },
          4,
          5,
        )
      : f.rect(5, 6, 3, 3, e.fruit),
    f.hline(2, 10, 12, e.fruit),
    f.hline(2, 10, 11, g(e.fruit, G, 0.5)),
    f.px(4, 2, g(e.leaf, G, 0.3)),
    f.px(5, 2, g(e.leaf, G, 0.3)),
    f
  );
}
function ff(t, e, f, u) {
  const a = new j(I, I);
  switch (t) {
    case "egg": {
      (a.ellipse(6.5, 7.6, 3.8, 4.8, e),
        m(a, e, f),
        a.px(5, 4, "#ffffff"),
        a.px(5, 5, "#ffffff"),
        a.px(4, 6, "#ffffff"));
      break;
    }
    case "bottle": {
      (a.rect(5, 1, 4, 2, f),
        a.hline(5, 8, 1, w(f, 0.3)),
        a.rect(5, 3, 4, 1, "#dfeef3"),
        a.rect(4, 4, 6, 1, e),
        a.rect(3, 5, 8, 8, e),
        a.px(3, 12, null),
        a.px(10, 12, null),
        a.rect(3, 8, 8, 3, f),
        a.hline(3, 10, 8, w(f, 0.25)),
        a.px(6, 9, "#ffffff"),
        a.px(7, 9, "#ffffff"),
        a.vline(10, 5, 12, c(e, 0.08)),
        a.vline(10, 8, 10, c(f, 0.15)),
        a.vline(4, 5, 7, "#ffffff"),
        a.px(4, 11, "#ffffff"));
      break;
    }
    case "ball": {
      (a.ellipse(6.5, 7, 5, 5, e),
        $(a, e, (o, n) => {
          (o <= 6 && (o - n + 40) % 3 === 0 && a.px(o, n, f),
            o > 6 && (o + n) % 3 === 0 && a.px(o, n, f));
        }),
        m(a, e, f),
        a.px(4, 3, "#ffffff"),
        a.px(3, 4, "#ffffff"),
        a.line(10, 11, 11, 12, f),
        a.px(12, 12, f));
      break;
    }
    case "jar": {
      (a.rect(3, 2, 8, 2, f),
        a.hline(3, 10, 2, w(f, 0.3)),
        a.px(2, 3, f),
        a.px(11, 3, f),
        a.rect(4, 4, 6, 1, "#f3ecd8"),
        a.rect(3, 5, 8, 8, e),
        a.px(3, 12, null),
        a.px(10, 12, null),
        m(a, e, c(e, 0.15)),
        a.vline(4, 6, 10, w(e, 0.45)),
        a.px(5, 6, w(e, 0.45)),
        a.rect(5, 8, 4, 3, G),
        a.px(6, 9, c(f, 0.05)),
        a.px(7, 9, c(f, 0.05)),
        u
          ? (a.hline(3, 10, 4, u),
            a.px(11, 4, u),
            a.px(12, 5, u),
            a.px(11, 5, c(u)))
          : a.px(4, 4, e));
      break;
    }
    case "sack": {
      (a.rect(2, 5, 10, 8, e),
        a.px(2, 12, null),
        a.px(11, 12, null),
        a.rect(4, 2, 6, 3, e),
        a.px(3, 2, e),
        a.px(10, 2, e),
        a.hline(4, 9, 4, c(e, 0.25)),
        tf(a, e, c(e, 0.08)),
        a.rect(3, 7, 8, 3, f),
        a.hline(3, 10, 7, w(f, 0.25)),
        a.vline(11, 6, 11, c(e, 0.15)),
        a.px(6, 8, w(f, 0.45)),
        a.px(7, 8, w(f, 0.45)));
      break;
    }
    case "truffle": {
      (a.ellipse(6.5, 7.5, 4.9, 4.3, e),
        [
          [2, 5],
          [10, 4],
          [4, 3],
          [11, 8],
          [7, 2],
        ].forEach(([o, n]) => a.px(o, n, e)),
        m(a, e, f, w(e, 0.25)),
        $(a, e, (o, n) => {
          (o * 3 + n * 5) % 7 === 0 && a.px(o, n, f);
        }),
        a.px(4, 5, "#9a7a62"),
        a.px(8, 4, "#9a7a62"),
        a.px(3, 12, "#9b7a55"),
        a.px(10, 12, "#9b7a55"));
      break;
    }
    case "cheese": {
      (a.rect(1, 7, 12, 5, e),
        a.tri(1, 7, 13, 7, 12.5, 2.5, w(e, 0.3)),
        a.hline(1, 12, 11, f),
        a.px(3, 9, f),
        a.px(4, 9, f),
        a.px(8, 8, f),
        a.px(10, 10, f),
        a.px(6, 10, f),
        a.px(9, 5, e),
        a.px(10, 5, e));
      break;
    }
    case "fabric": {
      a.rect(3, 3, 9, 8, e);
      for (let o = 5; o <= 11; o += 3) a.vline(o, 3, 10, f);
      (a.ellipse(3, 7, 2, 4, w(e, 0.2)),
        a.px(3, 6, f),
        a.px(3, 7, f),
        a.px(2, 7, c(f)),
        a.tri(7, 10, 12, 10, 12, 13, w(e, 0.25)),
        a.line(8, 11, 11, 12, f));
      break;
    }
    case "bread": {
      (a.ellipse(6.5, 7.5, 5.6, 4, e),
        a.rect(1, 8, 12, 3, e),
        a.hline(2, 11, 11, f),
        m(a, e, f),
        $(a, e, (o, n) => {
          n <= 5 && a.px(o, n, c(e, 0.08));
        }));
      for (const o of [3, 6, 9])
        (a.px(o, 7, "#f6d89a"), a.px(o + 1, 6, "#f6d89a"));
      a.px(3, 4, w(e, 0.35));
      break;
    }
    case "sachet": {
      (a.ellipse(6.5, 9, 4.6, 3.6, e),
        a.rect(5, 4, 4, 3, e),
        a.px(4, 3, e),
        a.px(6, 3, e),
        a.px(9, 3, e),
        a.px(7, 2, e),
        m(a, e, f, w(e, 0.3)),
        a.hline(4, 9, 6, "#fff6ea"),
        a.px(3, 5, "#fff6ea"),
        a.px(10, 5, "#fff6ea"),
        a.px(3, 7, "#fff6ea"),
        a.px(10, 7, "#fff6ea"),
        a.px(5, 1, f),
        a.px(5, 0, e),
        a.px(6, 1, "#7fa06a"),
        a.px(6, 10, "#fff6ea"),
        a.px(7, 9, "#fff6ea"),
        a.px(8, 10, "#fff6ea"));
      break;
    }
    case "wood": {
      const o = "#e8c08a",
        n = "#c49563";
      (a.rect(1, 8, 9, 4, e),
        a.hline(1, 9, 11, f),
        a.hline(2, 7, 9, f),
        a.ellipse(10.5, 10, 2, 2.2, o),
        a.px(10, 9, n),
        a.px(10, 10, n),
        a.px(11, 10, n),
        a.rect(3, 3, 7, 4, e),
        a.hline(3, 9, 6, f),
        a.hline(4, 8, 4, f),
        a.ellipse(10.5, 5, 2, 2.2, o),
        a.px(10, 4, n),
        a.px(10, 5, n),
        a.px(11, 5, n),
        a.px(2, 8, w(e)),
        a.px(4, 3, w(e)));
      break;
    }
    case "stone": {
      (a.ellipse(5, 8.8, 4.2, 3.2, e),
        a.ellipse(10, 9.6, 3, 2.4, c(e, 0.06)),
        a.ellipse(7.5, 5, 2.8, 2.2, w(e, 0.1)),
        m(a, e, f, "#ebe4d8"),
        m(a, c(e, 0.06), f),
        m(a, w(e, 0.1), e, "#f4efe6"),
        a.px(4, 9, f),
        a.px(5, 10, f));
      break;
    }
    default:
      return He();
  }
  return a;
}
function tf(t, e, f) {
  $(t, e, (u, a) => {
    (u * 7 + a * 13) % 5 === 0 && t.px(u, a, f);
  });
}
function He() {
  const t = new j(I, I);
  return (
    t.rect(2, 2, 10, 10, "#e8dcc4"),
    t.hline(2, 11, 2, "#f6efe0"),
    t.vline(11, 3, 11, "#d6c6aa"),
    t.grid(
      [".QQQ.", "Q...Q", "...Q.", "..Q..", ".....", "..Q.."],
      { Q: "#8a6a52" },
      4,
      4,
    ),
    t
  );
}
const Fe = new Set([Z, Je, "#8a6232"]);
function af(t) {
  const e = (n) =>
    (0.3 * parseInt(n.slice(1, 3), 16) +
      0.55 * parseInt(n.slice(3, 5), 16) +
      0.15 * parseInt(n.slice(5, 7), 16)) /
    255;
  let f = 1,
    u = 0;
  for (const n of t.data)
    if (n && !Fe.has(n)) {
      const l = e(n);
      ((f = Math.min(f, l)), (u = Math.max(u, l)));
    }
  const a = Math.max(0.15, u - f),
    o = ["#c98a26", "#e6aa35", "#f6c445", "#ffe08a"];
  for (let n = 0; n < t.data.length; n++) {
    const l = t.data[n];
    if (!l) continue;
    if (Fe.has(l)) {
      t.data[n] = "#a8742a";
      continue;
    }
    const i = (e(l) - f) / a;
    t.data[n] = o[Math.min(3, Math.floor(i * 3.2 + 0.6))];
  }
  e: for (let n = 0; n < t.h; n++)
    for (let l = 0; l < t.w; l++)
      if (t.get(l, n) === "#ffe08a" || t.get(l, n) === "#f6c445") {
        t.px(l, n, "#ffffff");
        break e;
      }
  (t.px(12, 0, "#fff6c8"),
    t.px(11, 1, "#fff6c8"),
    t.px(13, 1, "#fff6c8"),
    t.px(12, 2, "#fff6c8"),
    t.px(12, 1, "#ffffff"));
}
const de = new Map();
function lf(t) {
  var a, o;
  let e = de.get(t);
  if (e) return e;
  const f = Se[ke(t)];
  let u;
  if (!f) ((u = He()), u.outline(Z));
  else {
    const n = f.icon;
    if (n.kind.startsWith("crop:")) {
      const l = n.kind.slice(5),
        i = ((a = fe[l]) == null ? void 0 : a.colors) ?? {
          leaf: n.c3 ?? "#88bf64",
          leaf2: n.c3 ?? "#5e9445",
          fruit: n.c1,
          fruit2: n.c2,
        },
        r = Ze(l, i);
      ((u = r.p), u.outline(r.out));
    } else if (n.kind === "seed") {
      const l = f.id.replace(/^seed_/, ""),
        i = ((o = fe[l]) == null ? void 0 : o.colors) ?? {
          leaf: n.c2,
          leaf2: n.c2,
          fruit: n.c1,
          fruit2: n.c1,
        };
      ((u = ef(l, i)), u.outline(Z));
    } else ((u = ff(n.kind, n.c1, n.c2, n.c3)), u.outline(Z));
    ge(t) && af(u);
  }
  return ((e = le(u, u.w / 2, u.h / 2)), de.set(t, e), e);
}
function nf() {
  return (
    K.useSyncExternalStore(ee.subscribe, ee.getVersion),
    K.useSyncExternalStore(J.subscribe, J.getVersion),
    ee
  );
}
function rf(t = 500) {
  const [, e] = K.useState(0);
  K.useEffect(() => {
    const f = window.setInterval(() => e((u) => u + 1), t);
    return () => clearInterval(f);
  }, [t]);
}
const he = new Map();
function Le(t) {
  let e = he.get(t);
  return (e || ((e = je(t, 6)), he.set(t, e)), e);
}
function De({ s: t, h: e, w: f, style: u, className: a }) {
  let o = t.w * 2,
    n = t.h * 2;
  return (
    e
      ? ((o = (t.w / t.h) * e), (n = e))
      : f && ((n = (t.h / t.w) * f), (o = f)),
    k.jsx("img", {
      src: Le(t),
      className: `px ${a ?? ""}`,
      style: { width: o, height: n, ...u },
      draggable: !1,
      alt: "",
    })
  );
}
function Ee({ id: t, h: e = 24 }) {
  return k.jsx(De, { s: lf(t), h: e, className: ge(t) ? "golden" : "" });
}
function sf({
  children: t,
  onClick: e,
  className: f = "",
  disabled: u,
  title: a,
  act: o,
  style: n,
}) {
  return k.jsx("button", {
    type: "button",
    className: `pf-btn ${f} ${u ? "disabled" : ""}`,
    title: a,
    "data-act": o,
    style: n,
    "aria-disabled": u || void 0,
    onClick: (l) => {
      if ((l.stopPropagation(), Ne(), u)) {
        a && ee.toast(a, "warn");
        return;
      }
      (re("tap", 0.6), e == null || e());
    },
    children: t,
  });
}
function of({
  title: t,
  sub: e,
  icon: f,
  children: u,
  onClose: a,
  wide: o,
  tabs: n,
  tab: l,
  onTab: i,
  footer: r,
}) {
  const s = K.useRef(null);
  return (
    K.useEffect(() => {
      const p = (b) => {
        b.key === "Escape" && (a ?? (() => J.close()))();
      };
      return (
        window.addEventListener("keydown", p),
        () => window.removeEventListener("keydown", p)
      );
    }, [a]),
    k.jsx("div", {
      className: "sheet-wrap",
      onPointerDown: (p) => {
        p.target === p.currentTarget && (a ?? (() => J.close()))();
      },
      children: k.jsxs("div", {
        className: `sheet ${o ? "wide" : ""}`,
        ref: s,
        role: "dialog",
        "aria-label": typeof t == "string" ? t : void 0,
        children: [
          k.jsx("div", { className: "sheet-grip" }),
          k.jsxs("div", {
            className: "sheet-head",
            children: [
              f && k.jsx("div", { className: "sheet-icon", children: f }),
              k.jsxs("div", {
                className: "sheet-titles",
                children: [
                  k.jsx("h3", { children: t }),
                  e && k.jsx("p", { children: e }),
                ],
              }),
              k.jsx("button", {
                type: "button",
                className: "sheet-x",
                "aria-label": "关闭",
                "data-act": "close",
                onClick: () => {
                  (re("close", 0.5), (a ?? (() => J.close()))());
                },
                children: "✕",
              }),
            ],
          }),
          n &&
            k.jsx("div", {
              className: "tabs",
              role: "tablist",
              children: n.map((p) =>
                k.jsxs(
                  "button",
                  {
                    type: "button",
                    role: "tab",
                    "aria-selected": p.id === l,
                    className: `tab ${p.id === l ? "on" : ""}`,
                    "data-act": "tab-" + p.id,
                    onClick: () => {
                      (re("tap", 0.5), i == null || i(p.id));
                    },
                    children: [
                      p.label,
                      p.badge
                        ? k.jsx("i", { className: "badge", children: p.badge })
                        : null,
                    ],
                  },
                  p.id,
                ),
              ),
            }),
          k.jsx("div", { className: "sheet-body", children: u }),
          r && k.jsx("div", { className: "sheet-foot", children: r }),
        ],
      }),
    })
  );
}
function pf({
  v: t,
  color: e = "linear-gradient(90deg,#8fc77a,#b9e08f)",
  label: f,
  right: u,
}) {
  return k.jsxs("div", {
    className: "bar",
    children: [
      (f || u) &&
        k.jsxs("div", {
          className: "bar-l",
          children: [
            k.jsx("span", { children: f }),
            k.jsx("b", { children: u }),
          ],
        }),
      k.jsx("div", {
        className: "bar-track",
        children: k.jsx("div", {
          className: "bar-fill",
          style: {
            width: `${Math.max(0, Math.min(1, t)) * 100}%`,
            background: e,
          },
        }),
      }),
    ],
  });
}
function bf({ value: t, max: e, onChange: f }) {
  const u = (a) => f(Math.max(1, Math.min(Math.max(1, e), a)));
  return k.jsxs("div", {
    className: "qty",
    children: [
      k.jsx("button", {
        type: "button",
        onClick: () => u(t - 1),
        "aria-label": "减少",
        children: "−",
      }),
      k.jsx("span", { children: t }),
      k.jsx("button", {
        type: "button",
        onClick: () => u(t + 1),
        "aria-label": "增加",
        children: "+",
      }),
      k.jsx("button", {
        type: "button",
        className: "qty-max",
        onClick: () => u(e),
        children: "全部",
      }),
    ],
  });
}
const uf = (t) => {
    if (t <= 0) return "完成";
    const e = Math.ceil(t / 1e3);
    if (e < 60) return `${e}秒`;
    const f = Math.floor(e / 60),
      u = e % 60;
    return f < 60
      ? u
        ? `${f}分${u}秒`
        : `${f}分钟`
      : `${Math.floor(f / 60)}小时${f % 60 ? (f % 60) + "分" : ""}`;
  },
  xf = (t) => (t >= 60 ? `${+(t / 60).toFixed(1)}小时` : `${t}分钟`);
function Ff({ id: t, n: e, have: f }) {
  const u = f !== void 0 && f < e;
  return k.jsxs("span", {
    className: `pill ${u ? "short" : ""}`,
    title: se(t),
    children: [
      k.jsx(Ee, { id: t, h: 18 }),
      k.jsx("span", { children: se(t) }),
      k.jsxs("b", { children: ["×", e] }),
      f !== void 0 && k.jsxs("small", { children: ["(", f, ")"] }),
    ],
  });
}
const Hf = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Bar: pf,
      Btn: sf,
      ITEM: Se,
      ItemIcon: Ee,
      ItemPill: Ff,
      Px: De,
      Qty: bf,
      Sheet: of,
      baseItemId: ke,
      fmtDur: uf,
      fmtMin: xf,
      itemName: se,
      spriteUrl: Le,
      useApp: nf,
      useTicker: rf,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
export {
  sf as B,
  Ee as I,
  De as P,
  bf as Q,
  of as S,
  rf as a,
  pf as b,
  cf as c,
  uf as d,
  Ff as e,
  xf as f,
  lf as i,
  Hf as k,
  vf as p,
  nf as u,
};
