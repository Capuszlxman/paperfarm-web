import { j as r, r as I } from "./index-Buxy_O7c.js";
import { app as p } from "./app-CQ7Ebbfh.js";
import { ui as b } from "./state-CG0_YQPW.js";
import {
  u as F,
  P as S,
  I as X,
  B as M,
  a as bt,
  S as ee,
  c as ue,
  b as he,
  Q as ft,
  f as Te,
  p as Ie,
  d as qe,
  e as Ct,
  i as oe,
} from "./kit-DW3edRdN.js";
import {
  h as $,
  x as Kt,
  s as gt,
  w as qt,
  v as Ge,
  q as He,
  a as ke,
  b as je,
  S as Ae,
  W as xs,
  l as We,
  c as Ue,
  d as ve,
  E as re,
  B as E,
  e as yt,
  n as ge,
  C as Ze,
  A as Ve,
  I as St,
  f as Nt,
  g as bs,
  i as ye,
  j as gs,
  k as Xe,
  m as Oe,
  o as ut,
  p as Ut,
  r as Zt,
  t as ys,
  u as Vt,
  y as Xt,
  z as vs,
  D as ws,
  F as Tt,
  G as $e,
  H as Qt,
  J as vt,
  R as ks,
  K as Jt,
  L as js,
  M as Ws,
  N as es,
  O as ts,
  P as te,
  Q as ss,
  T as is,
  U as _e,
  V as Ms,
  X as Ye,
  Y as ns,
  Z as as,
  _ as Cs,
  $ as Ss,
  a0 as Ns,
  a1 as Ts,
  a2 as Is,
  a3 as As,
  a4 as It,
  a5 as $s,
  a6 as zs,
  a7 as wt,
  a8 as Es,
  a9 as Ds,
  aa as Ps,
  ab as Os,
  ac as Bs,
  ad as At,
  ae as Rs,
  af as Fs,
  ag as D,
  ah as x,
  ai as Ls,
  aj as os,
  ak as O,
  al as Gs,
  am as Ke,
  an as et,
  ao as Hs,
  ap as _s,
  aq as ls,
  ar as Ys,
  as as $t,
  at as Ks,
  au as zt,
  av as tt,
  aw as st,
  ax as qs,
  ay as Us,
  az as Zs,
  aA as Vs,
  aB as Xs,
  aC as Qs,
} from "./sim-D2hRsYBy.js";
import { getAtlas as V } from "./sprites-DoU9b1eg.js";
import {
  unlockAudio as kt,
  sfx as T,
  syncMusic as Js,
} from "./sound-crrWL_RO.js";
import { P as q, m as U, d as G } from "./pixel-CYIPeh-K.js";
import { world as z } from "./worldRef-DKS27cB4.js";
import "./farmart-Bcn3kAJE.js";
import "./audio-DDOa6zyH.js";
import "./core-Dv3-PHk5.js";
const mt = "#5b3f33",
  ze = "#3a2a24",
  jt = "#f8b3a5";
function Qe(o) {
  const e = o.ox ?? 1,
    t = o.oy ?? 1,
    s = (n, i = 0, a = 0, l = !1) => {
      const c = new q(o.w, o.h);
      return (
        c.grid(o.body, o.pal, e, t),
        o.neck && (i || a) && o.neck(c, i, a),
        c.grid(o.head, o.pal, e + i, t + a),
        o.detail && o.detail(c, i, a),
        l && c.replace(o.pal.K, o.blinkTo),
        o.legsUnder && o.legs(c, n),
        c.outline(mt),
        o.legsUnder || o.legs(c, n),
        U(c, o.ax, o.ay)
      );
    };
  return {
    idle: s(0),
    blink: s(0, 0, 0, !0),
    walk: [s(1), s(0), s(2), s(0)],
    eat: o.eat.map(([n, i]) => s(0, n, i)),
  };
}
const ei = [
    "...............",
    "...............",
    "...............",
    "...............",
    "...............",
    "W..............",
    "WW.......WW....",
    "WWWWWWWWWWWWW..",
    "WWWWSSSSSWWWW..",
    ".WWWWSSSSWWWW..",
    "..CWWWWWWWWWC..",
    "...CCCCCCCCC...",
  ],
  ti = [
    ".........WWW...",
    "........WWWWW..",
    "........WWWKWO.",
    "........WWWWOOO",
    "........WWPWWO.",
    ".........WWW...",
    ".........WWW...",
  ];
function si() {
  const o = {
      W: "#fffdf7",
      C: "#efe1c6",
      S: "#e4d6bd",
      K: ze,
      P: jt,
      O: "#f6a23a",
    },
    e = "#f39a3a";
  return Qe({
    w: 19,
    h: 16,
    body: ei,
    head: ti,
    pal: o,
    detail: (t, s, n) => {
      (t.px(14 + s, 5 + n, "#e8863a"), t.px(5, 8, "#f6efe2"));
    },
    neck: (t) => t.rect(9, 6, 4, 2, o.W),
    legs: (t, s) => {
      const n = (i, a = !0) => {
        (t.px(i, 13, e),
          a
            ? (t.px(i, 14, e), t.px(i + 1, 14, e), t.px(i - 1, 14, e))
            : t.px(i + 1, 13, e));
      };
      (s === 0 && (n(6), n(10)),
        s === 1 && (n(5), n(11, !1)),
        s === 2 && (n(7, !1), n(10)));
    },
    ax: 8.5,
    ay: 15,
    blinkTo: o.W,
    eat: [
      [1, 3],
      [2, 5],
    ],
  });
}
const ii = [
    "....................",
    "....................",
    "....................",
    "....................",
    "....................",
    ".T..................",
    "TT.WWWWWWWWWW.......",
    ".WWWWBBBBWWWWW......",
    "WWWWBBBBBBWWWWW.....",
    "WWWWWBBBWWWWWWW.....",
    "WWWWWWWWWWWWWWC.....",
    ".CWWWWWWWWWWWCC.....",
    "..CCCCCCCCCCCC......",
  ],
  ni = [
    "...........HH.......",
    "............HH......",
    "..........EEFFFF....",
    "...........EFFKFF...",
    "............FFFFFFNN",
    "............FFFFPFNN",
    "...........WWFFFFF..",
    "...........WWW.DD...",
    "...........WWW.D....",
  ];
function ai() {
  const o = {
      W: "#f7ecd6",
      C: "#e2cfae",
      B: "#d3a676",
      F: "#fbf3e3",
      E: "#c99868",
      H: "#a88e6c",
      N: "#e9b9a4",
      D: "#e6d6b8",
      T: "#c99868",
      K: ze,
      P: jt,
    },
    e = "#ecdcc0",
    t = "#6b5040";
  return Qe({
    w: 23,
    h: 18,
    body: ii,
    head: ni,
    pal: o,
    detail: (s, n, i) => {
      s.px(12 + n, 1 + i, "#cbb593");
    },
    neck: (s) => s.rect(12, 7, 3, 4, o.W),
    legs: (s, n) => {
      const i = (a, l) => {
        for (let c = 0; c < l; c++) s.px(a, 14 + c, e);
        s.px(a, 14 + l, t);
      };
      (n === 0 && (i(4, 2), i(6, 2), i(11, 2), i(13, 2)),
        n === 1 && (i(4, 2), i(6, 1), i(11, 1), i(13, 2)),
        n === 2 && (i(4, 1), i(6, 2), i(11, 2), i(13, 1)));
    },
    ax: 9.5,
    ay: 17,
    blinkTo: o.F,
    eat: [
      [1, 4],
      [1, 5],
    ],
  });
}
const oi = [
    "....................",
    "....................",
    ".TT.................",
    "T..T.WWWWWWWWW......",
    ".TTWWWWWWWWWWWW.....",
    "..WWWWWWWWWWWWW.....",
    "..WWWWWWWWWWWWW.....",
    "..CWWWWWWWWWWWW.....",
    "...CWWWWWWWWWWC.....",
    "....CCCCCCCCCC......",
  ],
  li = [
    "............EE......",
    "...........WEEEE....",
    "...........WWEEEW...",
    "...........WWWWKWW..",
    "...........WWWWWWSSS",
    "...........WWWWPWSNS",
    "...........WWWWWWSSS",
    "............CWWWW...",
  ];
function ri() {
  const o = {
      W: "#f9c9c4",
      C: "#eca9a6",
      E: "#ec9198",
      S: "#f4a6a6",
      N: "#c9707a",
      T: "#e48a8e",
      K: ze,
      P: "#f58f8f",
    },
    e = "#f0b2ae",
    t = "#b56d6f";
  return Qe({
    w: 23,
    h: 15,
    body: oi,
    head: li,
    pal: o,
    detail: (s, n, i) => {
      (s.px(13 + n, 4 + i, "#fde0dc"),
        s.px(7, 5, "#fde0dc"),
        s.px(8, 5, "#fde0dc"));
    },
    neck: (s, n, i) => s.rect(12, 5, 3, 3 + i, o.W),
    legs: (s, n) => {
      const i = (a, l) => {
        for (let c = 0; c < l; c++)
          (s.px(a, 11 + c, e), s.px(a + 1, 11 + c, e));
        (s.px(a, 11 + l, t), s.px(a + 1, 11 + l, t));
      };
      (n === 0 && (i(5, 1), i(12, 1)),
        n === 1 && (i(4, 1), i(12, 0)),
        n === 2 && (i(5, 0), i(13, 1)));
    },
    ax: 10.5,
    ay: 13,
    blinkTo: o.W,
    eat: [
      [1, 2],
      [1, 3],
    ],
  });
}
const ci = [
    "..............",
    "..............",
    "..............",
    "..............",
    "..............",
    "..............",
    ".W.W..........",
    "WWWWWW........",
    "WWWWWWWWW.....",
    "WWWWWWWWWW....",
    "WWWWWWWWWWW...",
    ".WWWWWWWWWW...",
    "..CWWWWWWWC...",
    "...CCCCCCC....",
  ],
  hi = [
    ".......WW.WW..",
    ".......WIWWIW.",
    ".......WIWWIW.",
    "........WIWI..",
    ".......WWWWWW.",
    "......WWWWWWWW",
    "......WWWWKWWW",
    "......WWWWWPWN",
    ".......CWWWWW.",
    "........CCCC..",
  ];
function di() {
  const o = {
      W: "#fffcf5",
      C: "#ece0cc",
      I: "#f6b9c0",
      N: "#f08a9a",
      K: ze,
      P: jt,
    },
    e = "#f1e2cc";
  return Qe({
    w: 17,
    h: 19,
    oy: 2,
    body: ci,
    head: hi,
    pal: o,
    legsUnder: !0,
    legs: (t, s) => {
      for (const [n, i] of [
        [2, 10],
        [3, 11],
        [5, 12],
        [6, 13],
        [2, 13],
        [4, 9],
      ])
        t.get(n, i) === o.W && t.px(n, i, o.C);
      s === 1
        ? (t.shift(0, 1, t.w, 16, 0, -1),
          t.hline(1, 4, 15, e),
          t.px(10, 14, e),
          t.px(11, 14, e))
        : s === 2
          ? (t.hline(5, 8, 16, e), t.px(9, 16, e))
          : (t.hline(3, 5, 16, e), t.px(8, 16, e), t.px(9, 16, e));
    },
    neck: (t) => t.rect(7, 9, 4, 3, o.W),
    ax: 6.5,
    ay: 18,
    blinkTo: o.W,
    eat: [
      [1, 2],
      [1, 3],
    ],
  });
}
function fi() {
  const o = (e) => {
    const t = new q(11, 10),
      s = "#f6c445",
      n = mt,
      i = "#ffffff",
      a = "#dfeef5";
    return (
      e
        ? (t.rect(3, 1, 2, 3, i),
          t.px(4, 1, a),
          t.rect(5, 0, 2, 3, i),
          t.px(6, 0, a))
        : (t.rect(2, 3, 3, 2, i),
          t.px(2, 4, a),
          t.rect(5, 3, 3, 2, i),
          t.px(7, 4, a)),
      t.ellipse(5.5, 6, 3.6, 2.4, s),
      t.vline(4, 4, 8, n),
      t.vline(6, 4, 8, n),
      t.px(2, 6, n),
      t.px(8, 5, ze),
      t.px(7, 5, "#ffe58a"),
      e && (t.rect(3, 1, 2, 2, i), t.rect(5, 0, 2, 2, i)),
      t.outline(mt),
      U(t, t.w / 2, t.h / 2)
    );
  };
  return [o(!0), o(!1)];
}
const ie = "#5b3f33",
  ui = "#4b6a3a",
  se = "#dcab6f",
  P = "#c08c56",
  B = "#a8743f",
  Wt = "#8a5d3d",
  we = "#fffaf0",
  mi = "#f8ead0",
  Mt = "#ffe39a",
  it = "#fff3c9",
  ce = "#f6c445",
  Et = "#fff2b8",
  me = ["#f39bb0", "#ffd36b", "#fff6ea", "#c7a6f0"];
function Je(o, e, t) {
  const s = Math.floor(Math.min(...e.map((l) => l[1]))),
    n = Math.ceil(Math.max(...e.map((l) => l[1]))),
    i = Math.floor(Math.min(...e.map((l) => l[0]))),
    a = Math.ceil(Math.max(...e.map((l) => l[0])));
  for (let l = s; l <= n; l++)
    for (let c = i; c <= a; c++) {
      const h = c + 0.5,
        f = l + 0.5;
      let d = !1;
      for (let u = 0, m = e.length - 1; u < e.length; m = u++) {
        const [w, y] = e[u],
          [v, g] = e[m];
        y > f != g > f && h < ((v - w) * (f - y)) / (g - y) + w && (d = !d);
      }
      d && o.px(c, l, t);
    }
}
function pi(o, e, t = 0) {
  let s = (o * 374761393 + e * 668265263 + t * 2246822519) | 0;
  return (
    (s = Math.imul(s ^ (s >>> 13), 1274126177)),
    ((s ^ (s >>> 16)) >>> 0) / 4294967295
  );
}
const xi = {
    wood: [
      { b: "#c08c56", d: "#a8743f", l: "#d9a86e", e: "#8a5d3d" },
      { b: "#df6a50", d: "#c4523e", l: "#f08a6c", e: "#a8463a" },
    ],
    slate: [
      { b: "#9fb3c2", d: "#8599a9", l: "#bccbd6", e: "#6e8293" },
      { b: "#5f8fb8", d: "#4c779d", l: "#80acd0", e: "#3f6282" },
    ],
    straw: [
      { b: "#ecd07a", d: "#d9b65a", l: "#f8e4a0", e: "#bf9a46" },
      { b: "#e9a74e", d: "#d08a3a", l: "#f6c47a", e: "#a8692c" },
    ],
    green: [
      { b: "#7fa67a", d: "#678c63", l: "#a0c391", e: "#56784f" },
      { b: "#4f9a8a", d: "#3f8073", l: "#73b9a8", e: "#336a5f" },
    ],
    red: [
      { b: "#df6a50", d: "#c4523e", l: "#f08a6c", e: "#a8463a" },
      { b: "#c8485e", d: "#a83a4e", l: "#e46c80", e: "#8a2f40" },
    ],
    dome: [
      { b: "#b5c3cc", d: "#9aabb6", l: "#dbe4ea", e: "#8599a9" },
      { b: "#df6a50", d: "#c4523e", l: "#f08a6c", e: "#a8463a" },
    ],
  },
  pe = (o, e) => xi[o][e >= 3 ? 1 : 0];
function rs(o, e, t, s, n, i, a) {
  Je(
    o,
    [
      [e, t],
      [s, i + 1],
      [n, i + 1],
    ],
    a.b,
  );
  for (let l = t + 3; l <= i; l += 3)
    for (let c = s; c <= n; c++)
      o.get(c, l) === a.b && (c + l) % 2 === 0 && o.px(c, l, a.d);
  (o.line(e, t, s, i, a.l),
    o.line(e, t, n, i, a.d),
    o.hline(s + 1, n - 1, i, a.e));
}
function cs(o, e, t, s, n, i) {
  o.rect(e, s, t - e + 1, n - s + 1, i.b);
  for (let a = s + 1; a <= n; a += 2)
    for (let l = e; l <= t; l++) (l + a) % 3 === 0 && o.px(l, a, i.d);
  (o.hline(e, t, s, i.l), o.hline(e, t, n, i.e));
}
function Ce(o, e, t, s, n, i, a, l = 3) {
  o.rect(e, t, s, n, i);
  for (let c = e + l; c < e + s; c += l) o.vline(c, t, t + n - 1, a);
}
function bi(o, e, t, s) {
  if (!(s <= 0)) {
    (o.hline(e, e + s - 1, t, Wt), o.hline(e, e + s - 1, t + 1, B));
    for (let n = 0; n < s; n++)
      o.px(e + n, t - 1, n % 2 ? "#88bf64" : me[(n >> 1) % me.length]);
  }
}
function hs(o, e, t, s = 7, n = "#e85a4c") {
  (o.vline(e, t, t + s, "#6b4a35"),
    o.rect(e + 1, t, 3, 1, n),
    o.rect(e + 1, t + 1, 2, 1, n),
    o.px(e + 1, t + 2, n),
    o.px(e + 1, t, "#ff8f7a"));
}
function gi(o, e, t, s = 3) {
  (o.vline(e, t + 3, t + 4 + s, "#6b4a35"),
    o.vline(e, t, t + 4, ce),
    o.hline(e - 2, e + 2, t + 2, ce),
    o.rect(e - 1, t + 1, 3, 3, ce),
    o.px(e, t + 2, Et),
    o.px(e - 1, t + 1, Et));
}
function yi(o, e, t) {
  (o.px(e, t, "#6b4a35"),
    o.rect(e - 1, t + 1, 3, 1, "#6b4a35"),
    o.rect(e - 1, t + 2, 3, 2, "#ffe08a"),
    o.px(e - 1, t + 2, "#fff6cf"),
    o.hline(e - 1, e + 1, t + 4, "#6b4a35"));
}
function Me(o, e, t) {
  (o.px(e, t, "#88bf64"),
    o.px(e + 1, t - 1, "#acd77f"),
    o.px(e + 2, t, "#88bf64"));
}
function xe(o, e, t) {
  (e >= 2 && t.box && bi(o, ...t.box),
    e >= 3 && t.flag && hs(o, t.flag[0], t.flag[1]),
    e >= 4 && t.lamp && yi(o, t.lamp[0], t.lamp[1]),
    e >= 5 && t.star && gi(o, t.star[0], t.star[1]));
}
function vi(o) {
  const e = new q(33, 36),
    t = "#a9bfcc",
    s = "#bfd1db",
    n = "#8ea6b5";
  (e.ellipse(8, 31, 7.5, 3.2, "#cfc3b0"),
    e.ellipse(8, 31, 6.3, 2.3, "#9fd3e0"),
    e.hline(5, 8, 30, "#e6f6f8"),
    e.px(11, 32, "#b9e2ea"),
    Ce(e, 12, 19, 18, 13, t, n, 3),
    e.hline(12, 29, 19, s),
    e.hline(12, 29, 31, n),
    e.ellipse(21, 27, 3.2, 3.6, "#5a3c2c"),
    e.rect(18, 28, 7, 4, "#5a3c2c"),
    e.px(20, 25, "#6f4a35"),
    e.hline(18, 24, 31, "#e8c66a"),
    e.ellipse(15, 23, 1.6, 1.6, Wt),
    e.px(15, 23, Mt),
    e.line(16, 32, 12, 33, "#c29058"));
  const i = pe("wood", o);
  return (
    rs(e, 21, 9, 9, 32, 19, i),
    e.ellipse(21, 15, 1.5, 1.5, "#5a3c2c"),
    Me(e, 26, 33),
    Me(e, 2, 28),
    xe(e, o, {
      box: [26, 25, 4],
      flag: [28, 7],
      lamp: [25, 20],
      star: [21, 2],
    }),
    e.outline(ie),
    U(e, e.w / 2, 35)
  );
}
function wi(o) {
  const e = new q(49, 34),
    t = "#eedcaa",
    s = "#e2cc93";
  Je(
    e,
    [
      [3, 14],
      [45, 14],
      [46, 31],
      [2, 31],
    ],
    t,
  );
  for (let l = 15; l < 31; l++)
    for (let c = 3; c < 46; c++)
      e.get(c, l) === t && pi(c, l, 4) > 0.9 && e.px(c, l, s);
  const n = pe("straw", o);
  for (const l of [4, 24]) e.rect(l, 9, 2, 13, B);
  (Ce(e, 6, 10, 18, 11, P, B, 3),
    e.rect(6, 15, 18, 6, "#6f4a35"),
    e.hline(6, 23, 15, "#5a3c2c"),
    cs(e, 2, 27, 5, 10, n),
    e.hline(2, 27, 11, n.d),
    e.rect(8, 18, 9, 3, "#f0cf6f"),
    e.hline(9, 15, 18, "#fae49a"),
    e.px(12, 17, "#f0cf6f"),
    e.px(14, 17, "#e2bb55"));
  const i = (l, c) => {
    (e.rect(l, c, 7, 4, "#f0cf6f"),
      e.hline(l, l + 6, c, "#fae49a"),
      e.vline(l + 2, c, c + 3, "#d9b65a"),
      e.vline(l + 5, c, c + 3, "#d9b65a"),
      e.hline(l, l + 6, c + 3, "#e2bb55"));
  };
  (i(31, 19),
    i(38, 19),
    i(34, 15),
    e.rect(31, 27, 9, 2, "#b07a48"),
    e.hline(32, 38, 27, "#7fb7c8"));
  const a = (l, c, h) => {
    (e.rect(l, c, 2, h, se),
      e.vline(l + 1, c + 1, c + h - 1, P),
      e.px(l, c, "#e8c08a"));
  };
  (e.hline(28, 45, 13, P), e.hline(28, 45, 15, P));
  for (let l = 14; l <= 28; l += 7)
    (e.hline(1, 2, l, P), e.hline(46, 47, l, P));
  (e.vline(2, 14, 30, P), e.vline(46, 14, 30, P));
  for (const l of [1, 46]) a(l, 11, 5);
  a(36, 11, 5);
  for (const l of [26, 29])
    (e.hline(1, 19, l, se),
      e.hline(29, 47, l, se),
      e.hline(1, 19, l + 1, P),
      e.hline(29, 47, l + 1, P));
  for (const l of [1, 9, 18, 29, 38, 46]) a(l, 24, 8);
  if (
    (Me(e, 23, 22),
    Me(e, 27, 24),
    xe(e, o, {
      box: [10, 25, 7],
      flag: [25, 0],
      lamp: [26, 11],
      star: [14, 0],
    }),
    o >= 2)
  )
    for (const l of [29, 38]) (e.px(l, 23, me[0]), e.px(l + 1, 23, me[1]));
  return (e.outline(ie), U(e, e.w / 2, 33));
}
function ki(o) {
  const e = new q(40, 32),
    t = "#d3cbbd",
    s = "#bdb4a5",
    n = "#ebe4d8";
  (e.rect(3, 13, 34, 15, "#e7d4a8"),
    e.ellipse(22, 22, 10, 4, "#a8774f"),
    e.ellipse(21, 21.5, 7, 2.6, "#bf8d62"),
    e.hline(17, 20, 20, "#cfa076"),
    e.px(27, 23, "#8f6240"),
    e.px(15, 23, "#8f6240"));
  const i = pe("wood", o);
  (Ce(e, 22, 7, 14, 9, P, B, 3),
    e.rect(25, 10, 6, 6, "#5a3c2c"),
    e.px(25, 10, P),
    e.px(30, 10, P),
    cs(e, 20, 37, 3, 7, i),
    e.hline(20, 37, 8, i.d));
  const a = (l, c, h, f) => {
    (e.rect(l, h, c - l + 1, f, t), e.hline(l, c, h, n));
    for (let d = h + 1; d < h + f; d += 2)
      for (let u = l + ((d >> 1) % 2 ? 1 : 3); u <= c; u += 4) e.px(u, d, s);
    e.hline(l, c, h + f - 1, s);
  };
  a(1, 20, 11, 3);
  for (let l = 13; l < 26; l++)
    (e.px(1, l, t), e.px(2, l, s), e.px(37, l, s), e.px(38, l, t));
  return (
    a(1, 38, 26, 4),
    e.rect(16, 25, 8, 5, se),
    e.vline(18, 25, 29, P),
    e.vline(21, 25, 29, P),
    e.hline(16, 23, 27, B),
    e.rect(6, 17, 7, 2, "#b07a48"),
    e.hline(7, 11, 17, "#f0c95a"),
    Me(e, 3, 30),
    xe(e, o, { box: [3, 25, 6], flag: [36, 0], lamp: [32, 9], star: [28, 0] }),
    o >= 4 &&
      (e.rect(32, 13, 4, 3, "#e0b47a"),
      e.px(33, 14, "#f39bb0"),
      e.px(34, 14, "#f39bb0")),
    e.outline(ie),
    U(e, e.w / 2, 31)
  );
}
function ji(o) {
  const e = new q(31, 34);
  for (const s of [5, 24])
    (e.rect(s, 22, 2, 10, B), e.vline(s + 1, 23, 31, Wt));
  (e.hline(7, 23, 28, P),
    Ce(e, 3, 12, 25, 11, se, P, 4),
    e.hline(3, 27, 22, B),
    e.rect(5, 14, 11, 7, "#7a5a44"));
  for (let s = 14; s < 21; s++)
    for (let n = 5; n < 16; n++) (n + s) % 2 === 0 && e.px(n, s, "#cdd5da");
  (e.rect(4, 13, 13, 1, B),
    e.rect(4, 21, 13, 1, B),
    e.vline(4, 13, 21, B),
    e.vline(16, 13, 21, B),
    e.rect(19, 14, 6, 7, P),
    e.hline(19, 24, 14, "#d29d63"),
    e.vline(21, 15, 20, B),
    e.px(23, 17, ce),
    e.px(22, 15, "#88bf64"),
    e.px(23, 15, "#6aa04e"),
    e.line(21, 16, 23, 18, "#f39a3a"),
    e.px(22, 17, "#f6a23a"),
    e.line(24, 23, 28, 31, "#c29058"),
    e.line(25, 23, 29, 31, "#d6a56b"));
  const t = pe("red", o);
  Je(
    e,
    [
      [1, 12],
      [5, 5],
      [26, 5],
      [30, 12],
    ],
    t.b,
  );
  for (let s = 7; s < 12; s += 2)
    for (let n = 1; n < 30; n++)
      e.get(n, s) === t.b && (n + s) % 2 === 0 && e.px(n, s, t.d);
  return (
    e.hline(5, 26, 5, t.l),
    e.hline(1, 30, 12, t.e),
    e.line(10, 31, 13, 31, "#f39a3a"),
    e.px(9, 30, "#88bf64"),
    e.px(9, 31, "#6aa04e"),
    xe(e, o, { box: [5, 23, 0], flag: [7, 0], lamp: [18, 13], star: [16, 0] }),
    o >= 2 &&
      (e.px(26, 11, "#f39bb0"),
      e.px(27, 11, "#88bf64"),
      e.px(2, 11, "#ffd36b")),
    e.outline(ie),
    U(e, e.w / 2, 33)
  );
}
function Wi(o) {
  const e = new q(22, 32),
    t = "#fff6e0",
    s = "#ecdcbc",
    n = "#f6d77a",
    i = "#e2bb55";
  (e.rect(3, 26, 16, 2, P),
    e.hline(3, 18, 26, se),
    e.rect(4, 28, 2, 3, B),
    e.rect(16, 28, 2, 3, B),
    e.rect(4, 18, 14, 8, n),
    e.hline(4, 17, 18, "#fbe6a0"),
    e.hline(4, 17, 25, i),
    e.rect(9, 21, 4, 1, "#d9b04a"),
    e.rect(8, 24, 6, 1, "#5a3c2c"),
    e.px(7, 24, "#fbe6a0"),
    e.hline(7, 14, 25, P),
    e.rect(4, 11, 14, 7, t),
    e.hline(4, 17, 11, we),
    e.hline(4, 17, 17, s),
    e.rect(9, 13, 4, 1, s));
  const a = pe("wood", o);
  return (
    e.rect(2, 7, 18, 4, a.b),
    e.hline(2, 19, 7, a.l),
    e.hline(2, 19, 10, a.e),
    e.rect(5, 5, 12, 2, a.b),
    e.hline(5, 16, 5, a.l),
    e.px(16, 18, "#f6b445"),
    e.px(16, 19, "#f6b445"),
    e.px(16, 20, ce),
    xe(e, o, { box: [4, 26, 0], flag: [16, 0], star: [11, 0] }),
    o >= 2 &&
      (e.px(2, 25, me[0]),
      e.px(2, 24, "#88bf64"),
      e.px(19, 25, me[1]),
      e.px(19, 24, "#88bf64")),
    e.outline(ie),
    U(e, e.w / 2, 31)
  );
}
function Dt(o) {
  const e = new q(42, 42),
    t = pe("green", o);
  e.rect(30, 6, 5, 12, "#c9bba5");
  for (let n = 7; n < 18; n += 3) e.hline(30, 34, n, "#ad9f88");
  (e.rect(29, 5, 7, 2, "#ad9f88"), e.rect(4, 22, 34, 17, mi));
  const s = "#a5693f";
  return (
    e.vline(4, 22, 38, s),
    e.vline(37, 22, 38, s),
    e.vline(21, 22, 38, s),
    e.hline(4, 37, 22, s),
    e.hline(4, 37, 30, s),
    e.hline(4, 37, 38, s),
    e.line(5, 29, 11, 23, s),
    e.line(30, 23, 36, 29, s),
    e.rect(7, 31, 12, 6, s),
    e.rect(8, 32, 10, 4, Mt),
    e.vline(12, 32, 35, s),
    e.vline(13, 32, 35, s),
    e.px(8, 32, it),
    e.px(9, 32, it),
    e.px(14, 32, it),
    e.px(10, 34, "#9aa3ab"),
    e.px(16, 33, "#9aa3ab"),
    e.px(16, 34, "#b07a48"),
    e.rect(24, 30, 10, 9, "#9a6240"),
    e.vline(28, 31, 38, "#7f4e33"),
    e.vline(29, 31, 38, "#7f4e33"),
    e.line(24, 30, 28, 38, "#b47a52"),
    e.line(33, 30, 29, 38, "#b47a52"),
    e.px(27, 34, ce),
    e.px(30, 34, ce),
    rs(e, 21, 7, 0, 41, 22, t),
    e.rect(17, 14, 9, 6, "#e0b47a"),
    e.hline(17, 25, 14, "#f0cb96"),
    e.hline(17, 25, 19, "#c9965b"),
    e.rect(19, 15, 5, 1, "#5e6670"),
    e.rect(20, 16, 3, 1, "#7d868e"),
    e.rect(19, 17, 5, 1, "#5e6670"),
    e.px(18, 15, "#5e6670"),
    e.rect(37, 36, 3, 3, "#b07a48"),
    e.hline(37, 39, 36, "#d6a56b"),
    xe(e, o, { box: [7, 37, 12], flag: [8, 9], lamp: [23, 30], star: [21, 0] }),
    o >= 4 &&
      (e.rect(35, 24, 1, 2, "#6b4a35"),
      e.rect(34, 26, 3, 3, "#e0b47a"),
      e.px(35, 27, "#7d868e")),
    e.outline(ie),
    U(e, e.w / 2, 40)
  );
}
function Mi(o) {
  const e = new q(42, 38),
    t = o >= 3 ? "#d94a5c" : "#e85a4c",
    s = o >= 3 ? "#b93c4c" : "#c94a3e";
  (Ce(e, 4, 12, 34, 18, se, P, 4),
    e.hline(4, 37, 29, B),
    e.hline(6, 35, 18, B),
    [
      "#e85a4c",
      "#ffd36b",
      "#88bf64",
      "#f39a3a",
      "#c7a6f0",
      "#e85a4c",
      "#f6c445",
      "#88bf64",
      "#f39bb0",
      "#fff6ea",
    ].forEach((i, a) => {
      (e.px(7 + a * 3, 17, i), e.px(8 + a * 3, 17, i));
    }),
    e.rect(3, 11, 2, 26, B),
    e.rect(37, 11, 2, 26, B),
    e.rect(5, 24, 32, 9, "#c79560"),
    e.hline(5, 36, 24, "#e3b47d"),
    e.hline(5, 36, 25, "#ddb07a"));
  for (let i = 9; i < 36; i += 6) e.vline(i, 26, 32, "#b07a48");
  for (let i = 1; i <= 40; i++) {
    const a = Math.floor((i - 1) / 4) % 2 ? we : t;
    e.vline(i, 6, 11, a);
  }
  for (let i = 1; i <= 40; i++) {
    const a = Math.floor((i - 1) / 4) % 2 ? we : t;
    ((i - 1) % 4 === 1 || (i - 1) % 4 === 2) && e.px(i, 12, a);
  }
  e.hline(1, 40, 6, o >= 3 ? ce : "#f6efe2");
  for (let i = 1; i <= 40; i++) e.get(i, 7) === t && e.px(i, 7, s);
  (e.rect(13, 1, 16, 5, "#e0b47a"),
    e.hline(13, 28, 1, "#f0cb96"),
    e.hline(13, 28, 5, "#c9965b"),
    e.rect(16, 3, 2, 1, "#8a5d3d"),
    e.rect(19, 3, 4, 1, "#8a5d3d"),
    e.rect(24, 3, 2, 1, "#8a5d3d"),
    e.ellipse(15, 3, 0.9, 0.9, "#e85a4c"));
  const n = (i, a, l) => {
    (e.rect(i, a, 8, 5, "#d6a56b"),
      e.hline(i, i + 7, a + 2, "#b07a48"),
      e.vline(i, a, a + 4, "#c29058"),
      e.vline(i + 7, a, a + 4, "#b07a48"),
      l.forEach((c, h) => {
        (e.px(i + 1 + h * 2, a - 1, c),
          e.px(i + 2 + h * 2, a - 1, c),
          e.px(i + 1 + h * 2, a, c));
      }));
  };
  return (
    n(2, 32, ["#e85a4c", "#ff8f7a", "#e85a4c"]),
    n(11, 33, ["#f39a3a", "#f6a23a", "#f39a3a"]),
    n(30, 32, ["#88bf64", "#acd77f", "#88bf64"]),
    e.ellipse(23, 35, 3, 1.6, "#c99a60"),
    e.px(22, 34, we),
    e.px(24, 34, we),
    e.px(23, 33, we),
    xe(e, o, { box: [0, 0, 0], flag: [39, 0], lamp: [36, 13], star: [21, 0] }),
    o >= 2 &&
      (e.px(29, 23, "#f39bb0"),
      e.px(30, 23, "#88bf64"),
      e.px(31, 22, "#ffd36b"),
      e.px(31, 23, "#88bf64")),
    o >= 4 && hs(e, 2, 0, 6, "#7fb7c8"),
    e.outline(ie),
    U(e, e.w / 2, 37)
  );
}
function Ci(o) {
  const e = new q(32, 50),
    t = "#cfd8df",
    s = "#b5c3cc",
    n = "#e6ecf0",
    i = 13,
    a = 15,
    l = pe("dome", o);
  e.ellipse(i + a / 2, 14, a / 2 + 0.5, 6, l.b);
  for (let h = 9; h < 14; h += 2)
    for (let f = i; f < i + a; f++)
      e.get(f, h) === l.b && f % 3 === 0 && e.px(f, h, l.d);
  (e.px(i + 4, 10, l.l),
    e.px(i + 5, 10, l.l),
    e.px(i + 3, 11, l.l),
    e.px(i + 6, 9, l.l),
    e.rect(i + 6, 7, 3, 2, l.e),
    e.rect(i, 14, a, 33, t));
  for (let h = 16; h < 47; h += 3) e.hline(i, i + a - 1, h, s);
  (e.vline(i + 2, 14, 46, n),
    e.vline(i + 3, 14, 46, n),
    e.vline(i + a - 2, 14, 46, s),
    e.vline(i + a - 1, 14, 46, "#9aabb6"));
  for (const h of [22, 34]) e.hline(i, i + a - 1, h, "#8599a9");
  for (let h = 15; h < 46; h++) e.px(i + 10, h, "#8599a9");
  for (let h = 16; h < 46; h += 2) e.px(i + 11, h, "#8599a9");
  (e.rect(i - 1, 14, a + 2, 2, l.e),
    e.rect(i + 5, 25, 4, 4, "#8599a9"),
    e.rect(i + 6, 26, 2, 2, Mt));
  const c = pe("wood", o);
  return (
    Ce(e, 2, 33, 12, 14, "#d0604f", "#b94f41", 3),
    e.rect(5, 38, 6, 9, "#a8463a"),
    e.rect(5, 38, 6, 1, "#fff4e2"),
    e.vline(5, 38, 46, "#fff4e2"),
    e.vline(10, 38, 46, "#fff4e2"),
    e.vline(7, 39, 46, "#93392f"),
    e.hline(6, 9, 42, "#fff4e2"),
    e.px(9, 44, ce),
    Je(
      e,
      [
        [1, 34],
        [1, 31],
        [14, 27],
        [14, 31],
      ],
      c.b,
    ),
    e.line(1, 31, 14, 27, c.l),
    e.line(1, 34, 14, 31, c.e),
    e.px(4, 48, "#f2c75a"),
    e.px(6, 48, "#f2c75a"),
    e.px(5, 47, "#e2bb55"),
    e.hline(i, i + a - 1, 47, "#b5a893"),
    Me(e, 28, 48),
    xe(e, o, {
      box: [4, 36, 0],
      flag: [3, 22],
      lamp: [12, 33],
      star: [i + 7, 0],
    }),
    o >= 2 &&
      (e.px(12, 46, me[0]), e.px(11, 46, "#88bf64"), e.px(2, 46, me[1])),
    e.outline(ie),
    U(e, e.w / 2, 49)
  );
}
function Si() {
  const o = new q(11, 24);
  return (
    o.rect(4, 9, 3, 13, "#9b6a45"),
    o.vline(6, 10, 21, "#7d5236"),
    o.rect(3, 21, 5, 2, "#8a5d3d"),
    o.rect(2, 2, 7, 2, "#6b4a35"),
    o.px(5, 1, "#6b4a35"),
    o.rect(3, 4, 5, 4, "#ffe08a"),
    o.px(3, 4, "#fff6cf"),
    o.px(4, 4, "#fff6cf"),
    o.px(3, 5, "#fff6cf"),
    o.vline(5, 4, 7, "#f6c445"),
    o.rect(2, 8, 7, 1, "#6b4a35"),
    o.outline(ie),
    U(o, o.w / 2, 23)
  );
}
function Ni() {
  const o = new q(20, 13);
  (o.rect(2, 6, 16, 4, "#9b6a45"), o.hline(2, 17, 6, "#7d5236"));
  for (let t = 1; t <= 18; t++)
    (o.px(t, 10, t % 3 === 0 ? "#b8664f" : "#d0806a"),
      o.px(t, 11, t % 3 === 1 ? "#b8664f" : "#d0806a"));
  return (
    o.vline(1, 6, 11, "#d0806a"),
    o.vline(18, 6, 11, "#d0806a"),
    ["#f39bb0", "#ffd36b", "#fff6ea", "#c7a6f0", "#f39bb0", "#ffd36b"].forEach(
      (t, s) => {
        const n = 3 + s * 2.6,
          i = 3 + (s % 2),
          a = Math.round(n);
        (o.vline(a, i + 2, 8, "#6aa04e"),
          o.px(a, i, t),
          o.px(a - 1, i + 1, t),
          o.px(a + 1, i + 1, t),
          o.px(a, i + 2, t),
          o.px(a, i + 1, s % 2 ? "#fff4b8" : "#f6b445"),
          s % 2 === 0 && o.px(a + 1, 7, "#88bf64"));
      },
    ),
    o.outline(ui),
    U(o, o.w / 2, 12)
  );
}
function Ti() {
  const o = new q(20, 14);
  return (
    o.rect(2, 1, 16, 2, se),
    o.hline(2, 17, 1, "#e8c08a"),
    o.rect(2, 4, 16, 2, se),
    o.hline(2, 17, 5, P),
    o.vline(3, 1, 7, B),
    o.vline(16, 1, 7, B),
    o.rect(1, 7, 18, 3, se),
    o.hline(1, 18, 7, "#e8c08a"),
    o.hline(1, 18, 9, P),
    o.rect(3, 10, 2, 3, B),
    o.rect(15, 10, 2, 3, B),
    o.outline(ie),
    U(o, o.w / 2, 13)
  );
}
function Ii() {
  const o = new q(9, 9),
    e = "#e6dfd1",
    t = "#c4b9a3",
    s = "#f6f2ea",
    n = (i, a, l, c) => {
      (o.ellipse(i, a, l, c, t),
        o.ellipse(i - 0.4, a - 0.4, l - 0.6, c - 0.6, e),
        o.px(Math.floor(i - l / 2), Math.floor(a - c / 2), s));
    };
  return (
    n(3, 3, 2.6, 2.2),
    n(6.8, 3.2, 1.8, 1.8),
    n(5.2, 6.8, 3.1, 2),
    n(1.6, 7, 1.4, 1.3),
    U(o, o.w / 2, o.h / 2)
  );
}
const nt = new Map();
function Ai(o, e) {
  const t = Math.max(1, Math.min(5, Math.round(e || 1))),
    s = o === "lantern" || o === "flowerbed" || o === "bench" || o === "path",
    n = `${o}:${s ? 1 : t}`;
  let i = nt.get(n);
  if (i) return i;
  switch (o) {
    case "duckhouse":
      i = vi(t);
      break;
    case "sheeppen":
      i = wi(t);
      break;
    case "pigsty":
      i = ki(t);
      break;
    case "hutch":
      i = ji(t);
      break;
    case "beehive":
      i = Wi(t);
      break;
    case "workshop":
      i = Dt(t);
      break;
    case "shop":
      i = Mi(t);
      break;
    case "silo":
      i = Ci(t);
      break;
    case "lantern":
      i = Si();
      break;
    case "flowerbed":
      i = Ni();
      break;
    case "bench":
      i = Ti();
      break;
    case "path":
      i = Ii();
      break;
    default:
      i = Dt(t);
      break;
  }
  return (nt.set(n, i), s && nt.set(`${o}:${t}`, i), i);
}
const _ = () => V(),
  Pt = new Map();
function de(o, e = 0) {
  const t = o + ":" + e;
  let s = Pt.get(t);
  if (s) return s;
  const n = _();
  switch (o) {
    case "chicken": {
      const i = e % 2 ? n.chickenB : n.chickenW;
      s = {
        idle: i.idle,
        blink: i.blink,
        walk: i.walk,
        eat: i.peck,
        happy: i.happy,
      };
      break;
    }
    case "sheep":
      s = {
        idle: n.sheep.idle,
        blink: n.sheep.blink,
        walk: n.sheep.walk,
        eat: [n.sheep.graze, n.sheep.idle],
      };
      break;
    case "cow":
      s = {
        idle: n.cow.idle,
        blink: n.cow.blink,
        walk: n.cow.walk,
        eat: [n.cow.graze, n.cow.idle],
      };
      break;
    case "duck":
      s = Ee(si());
      break;
    case "goat":
      s = Ee(ai());
      break;
    case "pig":
      s = Ee(ri());
      break;
    case "rabbit":
      s = Ee(di());
      break;
    case "bee": {
      const i = fi();
      s = { idle: i[0], blink: i[1], walk: i, eat: i };
      break;
    }
    default:
      s = {
        idle: n.chick.idle,
        blink: n.chick.idle,
        walk: n.chick.walk,
        eat: [n.chick.idle],
      };
  }
  return (Pt.set(t, s), s);
}
const Ee = (o) => ({ idle: o.idle, blink: o.blink, walk: o.walk, eat: o.eat });
function le(o, e, t) {
  const s = _();
  switch (o) {
    case "coop":
      return e >= 2 ? s.coop2 : s.coop1;
    case "barn":
      return s.barn;
    case "windmill":
      return s.windmill;
    case "cabin":
      return s.cabin;
    case "mailbox":
      return s.mailbox;
    case "scarecrow":
      return s.scarecrow;
    case "pond":
      return s.pond;
    case "bush":
      return $(t, "b") < 0.5 ? s.bush : s.berryBush;
    case "tree": {
      const n = $(t, "t");
      return n < 0.3
        ? s.apple
        : n < 0.55
          ? s.orange
          : n < 0.75
            ? s.apple2
            : s.tree;
    }
    case "fence":
      return s.post;
    default:
      return Ai(o, e);
  }
}
const Z = {
    coin: () => _().coin,
    ink: () => _().ink,
    sparkle: () => _().sparkle,
    sparkleGold: () => _().sparkleGold,
    heart: () => _().heart,
    hammer: () => _().hammer,
    scaffold: () => _().scaffold,
    blades: () => _().blades,
    sprout: () => _().sprout,
    flowers: () => _().flowers,
    stone: () => _().stone,
    mushroom: () => _().mushroom,
    butterflies: () => [_().butterflyA, _().butterflyB],
    hand: () => _().hand,
  },
  $i = { sunny: "☀", cloudy: "☁", rain: "☂", snow: "❄" };
function zi() {
  F();
  const o = p.s,
    e = V(),
    t = Kt(o),
    s = p.now(),
    n = gt(s),
    i = qt(s),
    a =
      Ge(o).filter((l) => He(o, l).done).length +
      o.daily.tasks.filter(
        (l) => !l.claimed && (o.daily.stats[l.key] ?? 0) >= l.n,
      ).length;
  return r.jsxs("div", {
    className: "hud",
    onPointerDown: (l) => {
      (l.stopPropagation(), kt());
    },
    children: [
      r.jsxs("button", {
        type: "button",
        className: "hud-level",
        "data-hud": "xp",
        "data-act": "hud-level",
        onClick: () => b.open({ kind: "quests" }),
        title: `经验 ${t.cur}/${t.need}`,
        children: [
          r.jsxs("span", { className: "lv", children: ["Lv.", t.lv] }),
          r.jsx("span", {
            className: "xpbar",
            children: r.jsx("i", {
              style: { width: `${(t.cur / t.need) * 100}%` },
            }),
          }),
        ],
      }),
      r.jsxs("div", {
        className: "hud-chip",
        "data-hud": "coins",
        title: "金币",
        children: [
          r.jsx(S, { s: e.coin, h: 20 }),
          r.jsx("b", { children: o.coins.toLocaleString() }),
        ],
      }),
      r.jsxs("div", {
        className: "hud-chip",
        "data-hud": "ink",
        title: "墨粒：写日记获得，可以买种子",
        children: [
          r.jsx(S, { s: e.ink, h: 20 }),
          r.jsx("b", { children: o.ink }),
          o.pendingInk > 0 &&
            r.jsxs("small", { children: ["+", o.pendingInk] }),
        ],
      }),
      r.jsxs("button", {
        type: "button",
        className: "hud-chip hud-btn",
        "data-hud": "warehouse",
        "data-act": "hud-warehouse",
        onClick: () => b.open({ kind: "warehouse" }),
        title: "仓库",
        children: [
          r.jsx(X, { id: "wheat", h: 20 }),
          r.jsxs("b", {
            children: [ke(o), r.jsxs("small", { children: ["/", je(o)] })],
          }),
        ],
      }),
      r.jsxs("div", {
        className: "hud-season",
        title: `${Ae[n]}季 · ${xs[i]}`,
        children: [
          r.jsx("span", { children: Ae[n] }),
          r.jsx("i", { children: $i[i] }),
        ],
      }),
      r.jsxs("button", {
        type: "button",
        className: "hud-icon hud-quests",
        "data-act": "hud-quests",
        onClick: () => b.open({ kind: "quests" }),
        "aria-label": "任务",
        children: [
          r.jsx("span", { className: "ic-scroll", children: "任" }),
          a > 0 && r.jsx("i", { className: "dot", children: a }),
        ],
      }),
      r.jsxs("button", {
        type: "button",
        className: "hud-icon",
        "data-act": "hud-settings",
        onClick: () => b.open({ kind: "settings" }),
        "aria-label": "设置",
        children: [
          r.jsx("span", { className: "ic-gear", children: "⚙" }),
          p.saveState === "error" &&
            r.jsx("i", { className: "dot warn", children: "!" }),
        ],
      }),
    ],
  });
}
function Ei({ onEditor: o }) {
  F();
  const e = I.useRef(null),
    [t, s] = I.useState(""),
    n = b.entryId ? (p.entries.get(b.entryId) ?? null) : null;
  I.useEffect(() => {
    if (
      b.entryId &&
      p.entries.get(b.entryId) &&
      !p.entries.get(b.entryId).deletedAt
    )
      return;
    const v = We(Date.now()),
      g = p.liveEntries().find((k) => k.date === v);
    b.set({ entryId: g ? g.id : null });
  }, []);
  const i = I.useRef(void 0);
  (I.useEffect(() => {
    var v;
    e.current &&
      i.current !== b.entryId &&
      ((i.current = b.entryId),
      (e.current.value =
        (b.entryId
          ? (v = p.entries.get(b.entryId)) == null
            ? void 0
            : v.text
          : "") ?? ""));
  }),
    I.useEffect(() => (o(e.current), () => o(null)), []));
  const a = () => {
      if (b.entryId && p.entries.get(b.entryId))
        return p.entries.get(b.entryId);
      const v = p.createEntry();
      return ((i.current = v.id), b.set({ entryId: v.id }), v);
    },
    l = (v) => {
      if (v && (v.nativeEvent.isComposing || c.current)) return;
      const g = e.current.value,
        k = a(),
        { grains: j } = p.updateText(k.id, g);
      j > 0 &&
        window.dispatchEvent(new CustomEvent("pf-grains", { detail: j }));
    },
    c = I.useRef(!1),
    h = () => {
      var g;
      const v = n;
      if (v && !v.text.trim() && !v.title.trim()) {
        (g = e.current) == null || g.focus();
        return;
      }
      ((i.current = void 0),
        b.set({ entryId: null }),
        setTimeout(() => {
          var k;
          return (k = e.current) == null ? void 0 : k.focus();
        }, 30));
    },
    f = (v) => {
      const g = v.trim().replace(/^#/, "").slice(0, 12);
      if (!g) return;
      const k = a();
      (!k.tags.includes(g) &&
        k.tags.length < 8 &&
        p.updateMeta(k.id, { tags: [...k.tags, g] }),
        s(""));
    },
    d = n ? Ue(n.text) : 0,
    u = p.s.ledger.day === We(Date.now()) ? p.s.ledger.dayChars : 0,
    m = u >= re.dailyCharCap,
    w = (n == null ? void 0 : n.date) ?? We(Date.now()),
    y =
      p.saveState === "saving"
        ? "保存中…"
        : p.saveState === "dirty"
          ? "编辑中"
          : p.saveState === "error"
            ? "保存失败，重试中"
            : "已自动保存";
  return r.jsxs("div", {
    className: "write-page",
    onPointerDown: () => kt(),
    children: [
      r.jsxs("div", {
        className: "wp-head",
        children: [
          r.jsxs("div", {
            className: "wp-date",
            children: [
              r.jsx("b", { children: ve(w) }),
              r.jsxs("span", {
                children: [
                  (n == null ? void 0 : n.time) ?? "",
                  n != null && n.weather ? " · " + n.weather : "",
                ],
              }),
            ],
          }),
          r.jsxs("div", {
            className: "wp-actions",
            children: [
              r.jsx(M, {
                className: "ghost sm",
                act: "undo",
                onClick: () => {
                  var v;
                  ((v = e.current) == null || v.focus(),
                    document.execCommand("undo"));
                },
                title: "撤销",
                children: "↶",
              }),
              r.jsx(M, {
                className: "ghost sm",
                act: "redo",
                onClick: () => {
                  var v;
                  ((v = e.current) == null || v.focus(),
                    document.execCommand("redo"));
                },
                title: "重做",
                children: "↷",
              }),
              r.jsx(M, {
                className: "ghost sm",
                act: "diary",
                onClick: () => b.open({ kind: "diary" }),
                children: "日记本",
              }),
              r.jsx(M, {
                className: "ghost sm",
                act: "new-entry",
                onClick: h,
                children: "＋ 新的一篇",
              }),
            ],
          }),
        ],
      }),
      r.jsx("input", {
        className: "wp-title",
        placeholder: "给今天起个标题（可选）",
        value: (n == null ? void 0 : n.title) ?? "",
        maxLength: 40,
        "data-testid": "title",
        onChange: (v) => {
          const g = a();
          p.updateMeta(g.id, { title: v.target.value });
        },
      }),
      r.jsxs("div", {
        className: "wp-tags",
        children: [
          n == null
            ? void 0
            : n.tags.map((v) =>
                r.jsxs(
                  "span",
                  {
                    className: "tag",
                    children: [
                      "#",
                      v,
                      r.jsx("button", {
                        type: "button",
                        "aria-label": `删除标签${v}`,
                        onClick: () =>
                          p.updateMeta(n.id, {
                            tags: n.tags.filter((g) => g !== v),
                          }),
                        children: "×",
                      }),
                    ],
                  },
                  v,
                ),
              ),
          r.jsx("input", {
            className: "tag-input",
            placeholder: "＋标签",
            value: t,
            maxLength: 13,
            "data-testid": "tag-input",
            onChange: (v) => s(v.target.value),
            onKeyDown: (v) => {
              (v.key === "Enter" ||
                v.key === "," ||
                v.key === "，" ||
                v.key === " ") &&
                (v.nativeEvent.isComposing || (v.preventDefault(), f(t)));
            },
            onBlur: () => f(t),
          }),
        ],
      }),
      r.jsx("textarea", {
        ref: e,
        className: "wp-text",
        "data-testid": "editor",
        placeholder: `写下今天的小事…

每写完一段（换行或停一停），小动物就会把它整理好，放进上面的庄园里。`,
        spellCheck: !1,
        onInput: l,
        onCompositionStart: () => {
          c.current = !0;
        },
        onCompositionEnd: () => {
          ((c.current = !1), l());
        },
        onBlur: () => {
          c.current || p.flush();
        },
      }),
      r.jsxs("div", {
        className: "wp-foot",
        children: [
          r.jsxs("span", { children: [d, " 字"] }),
          r.jsx("span", {
            className: m ? "capped" : "",
            children: m
              ? "今天的墨粒已经满了，写作依然会保存"
              : `今天已得墨粒 ${Math.floor(u / re.charsPerGrain)}`,
          }),
          r.jsx("span", {
            className: `save ${p.saveState}`,
            "data-testid": "save-state",
            children: y,
          }),
        ],
      }),
    ],
  });
}
const Se = V(),
  fe = (o) =>
    r.jsxs("span", {
      className: "coin-n",
      children: [r.jsx(S, { s: Se.coin, h: 14 }), o],
    }),
  ds = (o) =>
    r.jsxs("span", {
      className: "cost",
      children: [
        fe(o.coin),
        o.wood
          ? r.jsxs("span", {
              className: "coin-n",
              children: [r.jsx(X, { id: "wood", h: 14 }), o.wood],
            })
          : null,
        o.stone
          ? r.jsxs("span", {
              className: "coin-n",
              children: [r.jsx(X, { id: "stone", h: 14 }), o.stone],
            })
          : null,
      ],
    });
function Di({ id: o }) {
  (F(), bt(500));
  const e = p.s,
    t = e.objects[o];
  if (!t) return null;
  const s = E[t.def],
    n = p.now(),
    i = t.buildUntil > n,
    a = t.level < s.maxLevel ? s.upgradeCost(t.level + 1) : null,
    l = s.soil
      ? r.jsx(S, { s: Ie(s.soil, !1), h: 44 })
      : r.jsx(S, { s: le(t.def, t.level, t.id), h: 56 }),
    c = i
      ? r.jsxs("div", {
          className: "building-now",
          children: [
            r.jsx(S, { s: Se.hammer, h: 30, className: "swing" }),
            r.jsxs("div", {
              children: [
                r.jsxs("b", { children: ["施工中 · 升级到 Lv.", t.level] }),
                r.jsxs("p", {
                  children: [
                    "还需 ",
                    qe(t.buildUntil - n),
                    "。施工期间建筑暂停工作。",
                  ],
                }),
              ],
            }),
          ],
        })
      : s.cat === "animal"
        ? r.jsx(Bi, { id: o })
        : t.def === "windmill" || t.def === "workshop"
          ? r.jsx(Fi, { id: o })
          : t.def === "shop"
            ? r.jsx(Li, { id: o })
            : t.def === "silo" || t.def === "cabin"
              ? r.jsx(Gi, { id: o })
              : t.plot
                ? r.jsx(Hi, { id: o })
                : r.jsx("p", { className: "muted", children: s.desc }),
    h = () => {
      var d;
      (b.set({ sheet: null }),
        (d = z.v) == null || d.startGhost(t.def, t.id),
        b.setTool("move"));
    },
    f = () =>
      b.ask(
        `拆除${s.name}？`,
        `会返还已花费的 ${Math.round(s.refund * 100)}%（${Pi({ coin: Math.floor(t.spent.coin * s.refund), wood: Math.floor(t.spent.wood * s.refund), stone: Math.floor(t.spent.stone * s.refund) })}）。日记文字不受影响。`,
        "拆除",
        () => {
          p.act((u, m) => Ms(u, o)).ok && b.close();
        },
        !0,
      );
  return r.jsxs(ee, {
    title: r.jsxs(r.Fragment, {
      children: [
        s.name,
        s.maxLevel > 1 &&
          r.jsxs("span", { className: "lv-badge", children: ["Lv.", t.level] }),
      ],
    }),
    sub: s.desc,
    icon: l,
    footer: r.jsxs("div", {
      className: "obj-foot",
      children: [
        s.movable &&
          r.jsx(M, {
            className: "ghost sm",
            act: "obj-move",
            onClick: h,
            children: "移动",
          }),
        s.removable &&
          r.jsx(M, {
            className: "ghost sm danger",
            act: "obj-remove",
            onClick: f,
            children: "拆除",
          }),
        a &&
          !i &&
          r.jsxs(M, {
            className: "gold",
            act: "obj-upgrade",
            disabled: !Tt(e, a),
            title: Tt(e, a) ? void 0 : "材料不足",
            onClick: () => {
              var u;
              p.act((m, w) => ws(m, o, w)).ok &&
                (T("upgrade"),
                (u = z.v) == null ||
                  u.fx.confetti((t.x + s.size[0] / 2) * 18, t.y * 18, 30));
            },
            children: ["升级到 Lv.", t.level + 1, " · ", ds(a)],
          }),
        !a &&
          s.maxLevel > 1 &&
          r.jsx("span", { className: "muted", children: "已是最高等级" }),
      ],
    }),
    children: [
      c,
      a &&
        !i &&
        r.jsxs("p", {
          className: "hint",
          children: ["升级后：", Oi(t.def, t.level + 1)],
        }),
    ],
  });
}
const Pi = (o) => wt(o);
function Oi(o, e) {
  const t = E[o];
  return t.cat === "animal"
    ? `可住 ${t.capacity(e)} 只（现在 ${t.capacity(e - 1)} 只）`
    : o === "windmill" || o === "workshop"
      ? `可以同时加工 ${t.capacity(e)} 份`
      : o === "shop"
        ? `出售价格 +${Math.round(re.shopBonusPerLevel * e * 100)}%`
        : o === "silo" || o === "cabin"
          ? `仓库容量 +${t.capacity(e) - t.capacity(e - 1)}`
          : "外观更漂亮";
}
function Bi({ id: o }) {
  var w;
  const e = p.s,
    t = e.objects[o],
    s = E[t.def],
    n = p.now(),
    i = yt(e, o),
    a = Ve.filter((y) => y.home === t.def),
    [l, c] = I.useState(
      b.focusAnimal ?? ((w = i[0]) == null ? void 0 : w.id) ?? null,
    ),
    h = i.find((y) => y.id === l) ?? i[0],
    f = () => {
      let y = 0;
      for (const v of i)
        ge(v.kind) &&
          v.meals + Ye[v.kind].cyclesPerMeal <= ns(v.kind) &&
          p.act((g, k) => as(g, v.id, k), { quietFail: y > 0 }).ok &&
          y++;
      y
        ? (T("eat"), z.v && fs(o, y))
        : i.some((v) => ge(v.kind)) || p.toast("它们不需要喂食", "plain");
    },
    d = () => {
      let y = 0;
      for (const v of i) {
        const g = p.act((k, j) => Cs(k, v.id, j), { quietFail: !0 });
        if (g.ok) {
          y++;
          const k = g.events.find((j) => j.t === "items");
          if (k && z.v)
            for (const j of Object.keys(k.items))
              z.fly(oe(j), z.v.objScreen(t));
        }
      }
      y ? T("egg") : p.toast("还没有产品可以收", "plain");
    },
    u = i.reduce(
      (y, v) => (
        vt(e, v, n),
        y + v.stored + Object.values(v.storedBonus).reduce((g, k) => g + k, 0)
      ),
      0,
    ),
    m = i.filter((y) => ge(y.kind) && y.meals <= 0).length;
  return r.jsxs("div", {
    className: "home",
    children: [
      r.jsxs("div", {
        className: "home-row",
        children: [
          r.jsxs("span", {
            children: ["住户 ", i.length, "/", s.capacity(t.level)],
          }),
          r.jsxs("div", {
            className: "home-acts",
            children: [
              r.jsxs(M, {
                className: "sm",
                act: "feed-all",
                onClick: f,
                disabled: !i.length,
                title: i.length ? void 0 : "这里还没有动物",
                children: ["喂食", m ? `（${m}只饿了）` : ""],
              }),
              r.jsxs(M, {
                className: `sm ${u ? "glow" : ""}`,
                act: "collect-all",
                onClick: d,
                disabled: !u,
                title: u ? void 0 : "还没有产品可以收",
                children: ["收取 ×", u],
              }),
            ],
          }),
        ],
      }),
      r.jsxs("div", {
        className: "animal-list",
        children: [
          i.map((y) => {
            const v = de(y.kind, Math.floor($(y.id, "v") * 2));
            return r.jsxs(
              "button",
              {
                type: "button",
                className: `animal-card ${(h == null ? void 0 : h.id) === y.id ? "on" : ""}`,
                onClick: () => c(y.id),
                "data-act": "animal-" + y.id,
                children: [
                  r.jsx(S, {
                    s: y.meals > 0 || !ge(y.kind) ? v.idle : v.blink,
                    h: 32,
                  }),
                  r.jsx("b", { children: y.name }),
                  r.jsxs("small", { children: ["Lv.", y.level] }),
                  y.stored > 0 &&
                    r.jsx("i", { className: "dot", children: y.stored }),
                ],
              },
              y.id,
            );
          }),
          i.length < s.capacity(t.level) &&
            a.map((y) => {
              const v = Ut(e, y.kind);
              return r.jsxs(
                M,
                {
                  className: "animal-card add",
                  act: "buy-" + y.kind,
                  disabled: !v.ok,
                  title: v.reason,
                  onClick: () => {
                    const g = p.act((k, j) => Zt(k, y.kind, j, o));
                    g.ok && (T(y.kind), c(g.id));
                  },
                  children: [
                    r.jsx(S, {
                      s: de(y.kind).idle,
                      h: 28,
                      style: { opacity: 0.55 },
                    }),
                    r.jsxs("b", { children: ["＋", y.name] }),
                    r.jsx("small", { children: fe(y.price) }),
                  ],
                },
                y.kind,
              );
            }),
        ],
      }),
      h && r.jsx(Ri, { id: h.id }),
      !i.length &&
        r.jsxs("p", {
          className: "muted",
          children: [
            "这里还空着。买一只",
            a.map((y) => y.name).join("或"),
            "住进来吧。",
          ],
        }),
    ],
  });
}
function fs(o, e) {
  var i;
  const t = p.s.objects[o],
    s = z.v;
  if (!t || !s) return;
  for (const a of s.actors.list)
    a.animalId &&
      ((i = p.s.animals[a.animalId]) == null ? void 0 : i.home) === o &&
      ((a.mode = "eat"), (a.modeT0 = s.t), (a.modeDur = 2));
  const n = E[t.def];
  s.fx.dust(
    (t.x + n.size[0] / 2) * 18,
    (t.y + n.size[1]) * 18,
    5,
    "#f6dd94",
    16,
    4,
  );
  for (let a = 0; a < Math.min(e, 3); a++)
    s.fx.add({
      kind: "sprite",
      sprite: Se.heart,
      x: (t.x + n.size[0] / 2) * 18 + (a - 1) * 10,
      y: t.y * 18,
      vy: -26,
      life: 1.1,
      size: 0.8,
      delay: a * 0.15,
    });
}
function Ri({ id: o }) {
  const e = p.s,
    t = e.animals[o];
  if (!t) return null;
  const s = p.now();
  vt(e, t, s);
  const n = Ye[t.kind],
    i = ge(t.kind),
    a = Ss(e, t, s),
    l = Ns(e, t),
    c = Ts(t),
    h = t.level < Is ? As(t.kind, t.level) : null,
    f =
      t.stored >= c
        ? "产品满了，快来收取"
        : i && t.meals <= 0
          ? "肚子饿了，暂停生产"
          : t.cycleStart !== null
            ? `正在生产${ye(n.product)}`
            : "休息中";
  return r.jsxs("div", {
    className: "animal-detail",
    "data-testid": "animal-detail",
    children: [
      r.jsxs("div", {
        className: "ad-head",
        children: [
          r.jsx(S, { s: de(t.kind, Math.floor($(t.id, "v") * 2)).idle, h: 40 }),
          r.jsxs("div", {
            children: [
              r.jsx("b", { children: t.name }),
              " ",
              r.jsxs("span", {
                className: "lv-badge",
                children: ["Lv.", t.level],
              }),
              r.jsxs("p", { children: [n.name, " · ", n.desc] }),
            ],
          }),
        ],
      }),
      i &&
        r.jsx(he, {
          v: t.meals / ns(t.kind),
          color: "linear-gradient(90deg,#f6b445,#f6d06b)",
          label: "饱食度",
          right: `还能生产 ${t.meals} 次`,
        }),
      r.jsx(he, {
        v: a,
        label: f,
        right: t.cycleStart !== null ? qe(t.cycleStart + l - s) : "",
      }),
      r.jsxs("div", {
        className: "ad-stats",
        children: [
          r.jsxs("span", {
            children: [
              r.jsx(X, { id: n.product, h: 18 }),
              " 每 ",
              Te(Math.round(l / 6e4)),
              " 一份",
            ],
          }),
          r.jsxs("span", { children: ["库存 ", t.stored, "/", c] }),
          n.bonus &&
            r.jsxs("span", {
              children: [
                r.jsx(X, { id: n.bonus.item, h: 18 }),
                " 稀有 ",
                Math.round(n.bonus.chance * (t.level >= 5 ? 2 : 1) * 100),
                "%",
              ],
            }),
          It(t.level) > 0 &&
            r.jsxs("span", {
              children: ["额外产出 ", Math.round(It(t.level) * 100), "%"],
            }),
          i &&
            r.jsxs("span", {
              children: [
                "吃：",
                n.feeds.map((d) => ye(d)).join(" / "),
                "（库存 ",
                n.feeds.map((d) => e.inv[d] ?? 0).join("/"),
                "）",
              ],
            }),
        ],
      }),
      r.jsxs("div", {
        className: "ad-acts",
        children: [
          i &&
            r.jsx(M, {
              className: "sm",
              act: "feed-one",
              onClick: () => {
                p.act((d, u) => as(d, t.id, u)).ok && (T("eat"), fs(t.home, 1));
              },
              children: "喂一份",
            }),
          h !== null
            ? r.jsxs(M, {
                className: "sm gold",
                act: "animal-upgrade",
                disabled: e.coins < h,
                title: e.coins < h ? "金币不足" : void 0,
                onClick: () => {
                  var d;
                  if (p.act((u) => zs(u, t.id)).ok) {
                    T("levelup");
                    const u =
                      (d = z.v) == null
                        ? void 0
                        : d.actors.list.find((m) => m.animalId === t.id);
                    u &&
                      z.v &&
                      ((u.jumpT = z.v.t),
                      z.v.fx.sparks(u.x, u.y - 12, Se.sparkleGold, 8),
                      z.v.fx.text(
                        `Lv.${t.level} ↑`,
                        u.x,
                        u.y - 26,
                        "#d9822b",
                        12,
                      ));
                  }
                },
                children: [
                  "升级 ",
                  fe(h),
                  " ",
                  r.jsxs("small", {
                    children: ["速度 ×", $s(t.level + 1).toFixed(2)],
                  }),
                ],
              })
            : r.jsx("span", { className: "muted", children: "已满级" }),
        ],
      }),
    ],
  });
}
function Fi({ id: o }) {
  const e = p.s,
    t = e.objects[o],
    s = p.now(),
    n = Xe(e),
    i = Object.values(e.jobs)
      .filter((c) => c.building === o)
      .sort((c, h) => c.endAt - h.endAt),
    a = E[t.def].capacity(t.level),
    l = ks.filter((c) => c.building === t.def);
  return r.jsxs("div", {
    className: "workshop",
    children: [
      r.jsx("div", {
        className: "slots",
        children: Array.from({ length: a }).map((c, h) => {
          const f = i[h];
          if (!f)
            return r.jsx(
              "div",
              { className: "slot empty", children: "空闲" },
              h,
            );
          const d = Jt[f.recipe],
            u = s >= f.endAt;
          return r.jsxs(
            "div",
            {
              className: `slot ${u ? "done" : ""}`,
              children: [
                r.jsx(X, { id: d.outputs[0].item, h: 26 }),
                r.jsxs("div", {
                  children: [
                    r.jsx("b", { children: d.name }),
                    r.jsx(he, {
                      v: (s - f.startAt) / (f.endAt - f.startAt),
                      right: u ? "仓库满了，等待入库" : qe(f.endAt - s),
                    }),
                  ],
                }),
              ],
            },
            f.id,
          );
        }),
      }),
      r.jsx("div", {
        className: "recipes",
        children: l.map((c) => {
          const h = js(e, o, c.id, s),
            f = n < c.unlock;
          return r.jsxs(
            "div",
            {
              className: `recipe ${f ? "locked" : ""}`,
              children: [
                r.jsxs("div", {
                  className: "rc-io",
                  children: [
                    c.inputs.map((d) =>
                      r.jsx(
                        Ct,
                        { id: d.item, n: d.qty, have: e.inv[d.item] ?? 0 },
                        d.item,
                      ),
                    ),
                    r.jsx("span", { className: "arrow", children: "➜" }),
                    c.outputs.map((d) =>
                      r.jsx(Ct, { id: d.item, n: d.qty }, d.item),
                    ),
                  ],
                }),
                r.jsxs("div", {
                  className: "rc-meta",
                  children: [
                    r.jsxs("small", {
                      children: [Te(c.durationMin), " · ", c.xp, " 经验"],
                    }),
                    r.jsx(M, {
                      className: "sm",
                      act: "craft-" + c.id,
                      disabled: !h.ok,
                      title: f ? `${c.unlock} 级解锁` : h.reason,
                      onClick: () => {
                        p.act((d, u) => Ws(d, o, c.id, u)).ok && T("mill");
                      },
                      children: f ? `${c.unlock}级` : "加工",
                    }),
                  ],
                }),
              ],
            },
            c.id,
          );
        }),
      }),
    ],
  });
}
function Li({ id: o }) {
  const e = p.s.objects[o];
  return r.jsxs("div", {
    children: [
      r.jsxs("p", {
        children: [
          "在这里卖东西，价格 +",
          Math.round(re.shopBonusPerLevel * e.level * 100),
          "%。",
        ],
      }),
      r.jsx(M, {
        className: "primary",
        act: "open-warehouse",
        onClick: () => b.open({ kind: "warehouse" }),
        children: "打开仓库出售",
      }),
      r.jsx(M, {
        className: "ghost",
        act: "open-shop",
        onClick: () => b.open({ kind: "shop", tab: "seeds" }),
        children: "买种子",
      }),
    ],
  });
}
function Gi({ id: o }) {
  const e = p.s,
    t = e.objects[o];
  return r.jsxs("div", {
    children: [
      r.jsx(he, {
        v: ke(e) / je(e),
        label: "仓库",
        right: `${ke(e)}/${je(e)}`,
      }),
      r.jsxs("p", {
        className: "muted",
        children: [
          "这座",
          E[t.def].name,
          "提供 ",
          E[t.def].capacity(t.level),
          " 格容量。种子和建材不占仓库。",
        ],
      }),
      r.jsx(M, {
        className: "primary",
        act: "open-warehouse",
        onClick: () => b.open({ kind: "warehouse" }),
        children: "打开仓库",
      }),
    ],
  });
}
function Hi({ id: o }) {
  const e = p.s,
    t = e.objects[o],
    s = p.now(),
    n = t.plot;
  if (!n.crop)
    return r.jsx(M, {
      className: "primary",
      act: "plot-plant",
      onClick: () => b.open({ kind: "seeds", plotId: o }),
      children: "选择种子",
    });
  const i = $e[n.crop],
    a = es(t, s);
  return r.jsxs("div", {
    className: "plot-info",
    children: [
      r.jsxs("div", {
        className: "ad-head",
        children: [
          r.jsx(S, { s: ue(i.id, ts(t, s)), h: 46 }),
          r.jsxs("div", {
            children: [
              r.jsx("b", { children: i.name }),
              r.jsx("p", { children: i.desc }),
            ],
          }),
        ],
      }),
      r.jsx(he, {
        v: a,
        label: te(t, s) ? "成熟了！" : "生长中",
        right: te(t, s) ? "" : qe(n.plantedAt + n.growMs - s),
      }),
      r.jsxs("div", {
        className: "ad-acts",
        children: [
          r.jsx(M, {
            className: "sm",
            act: "plot-water",
            disabled: n.watered || te(t, s),
            title: n.watered
              ? "已经浇过水了"
              : te(t, s)
                ? "已经成熟了"
                : void 0,
            onClick: () => {
              p.act((l, c) => ss(l, o, c)).ok && T("pop");
            },
            children: n.watered ? "已浇水" : "浇水（快 25%）",
          }),
          r.jsx(M, {
            className: "sm",
            act: "plot-fert",
            disabled: n.fertilized || te(t, s) || !(e.inv.fertilizer > 0),
            title: e.inv.fertilizer > 0 ? void 0 : "没有肥料（小猪会生产）",
            onClick: () => p.act((l, c) => is(l, o, c)),
            children: "施肥（快 40%）",
          }),
          te(t, s) &&
            r.jsx(M, {
              className: "sm primary",
              act: "plot-harvest",
              onClick: () => {
                var h;
                const l = n.crop,
                  c = p.act((f, d) => _e(f, o, d));
                c.ok &&
                  ((h = z.v) == null || h.harvestFx(t, l, c.events),
                  T("harvest"),
                  b.close());
              },
              children: "收获",
            }),
        ],
      }),
    ],
  });
}
function _i({ plotId: o }) {
  F();
  const e = p.s,
    t = Xe(e),
    s = p.now(),
    n = gt(s),
    i = o ? e.objects[o] : null,
    a = i ? E[i.def].soil : void 0,
    l = Ze.filter((h) => !a || h.soil === a),
    c = (h) => {
      var f;
      if ((e.inv[Oe(h)] ?? 0) < 1) {
        const d = $e[h],
          u = e.coins >= d.seedCoin ? "coin" : "ink";
        if (!p.act((w) => ut(w, h, 1, u)).ok) return;
      }
      (o &&
        p.act((u, m) => Qt(u, o, h, m)).ok &&
        (T("plant"), (f = z.v) == null || f.objBump.set(o, z.v.t)),
        b.set({ sheet: null, selected: null, tool: "plant", seed: h }),
        (p.s.inv[Oe(h)] ?? 0) > 0
          ? p.toast("播种模式：点击或划过空田继续播种", "green")
          : b.resetTool());
    };
  return r.jsx(ee, {
    title: "选择作物",
    sub: a
      ? `${E[i.def].name} · 当前${Ae[n]}季，应季作物多收 1 份`
      : "选择要种的作物",
    icon: r.jsx(S, { s: Ie(a ?? "field", !1), h: 40 }),
    children: r.jsx("div", {
      className: "crop-grid",
      children: l.map((h) => {
        const f = t < h.unlock,
          d = e.inv[Oe(h.id)] ?? 0,
          u = h.seasons.includes(n);
        return r.jsxs(
          M,
          {
            className: `crop-card ${f ? "locked" : ""}`,
            act: "seed-" + h.id,
            disabled: f || (!d && e.coins < h.seedCoin && e.ink < h.seedInk),
            title: f ? `${h.unlock} 级解锁` : "金币和墨粒都不够",
            onClick: () => c(h.id),
            children: [
              r.jsx("div", {
                className: "cc-ic",
                children: r.jsx(S, { s: ue(h.id, 4), h: 40 }),
              }),
              r.jsxs("b", {
                children: [
                  h.name,
                  u && r.jsx("i", { className: "season", children: "应季" }),
                ],
              }),
              r.jsxs("small", {
                children: [Te(h.growMin), " · 产 ", h.yield + (u ? 1 : 0)],
              }),
              r.jsx("small", {
                children: f
                  ? `${h.unlock} 级解锁`
                  : d
                    ? `种子 ×${d}`
                    : r.jsxs(r.Fragment, {
                        children: ["买种子 ", fe(h.seedCoin)],
                      }),
              }),
            ],
          },
          h.id,
        );
      }),
    }),
  });
}
function Yi({ tab: o }) {
  F();
  const [e, t] = I.useState(o ?? "seeds"),
    s = p.s,
    n = Xe(s),
    [i, a] = I.useState({}),
    l = (c) => i[c] ?? 5;
  return r.jsxs(ee, {
    wide: !0,
    title: "小镇商店",
    sub: "种子可以用金币或墨粒购买",
    icon: r.jsx(S, { s: le("shop", 1, "x"), h: 44 }),
    tabs: [
      { id: "seeds", label: "种子" },
      { id: "animals", label: "动物" },
      { id: "build", label: "建筑" },
      { id: "decor", label: "装饰" },
      { id: "materials", label: "建材" },
    ],
    tab: e,
    onTab: t,
    children: [
      e === "seeds" &&
        r.jsx("div", {
          className: "shop-list",
          children: Ze.map((c) => {
            const h = n < c.unlock,
              f = l(c.id);
            return r.jsxs(
              "div",
              {
                className: `shop-row ${h ? "locked" : ""}`,
                children: [
                  r.jsx(S, { s: ue(c.id, 4), h: 36 }),
                  r.jsxs("div", {
                    className: "sr-info",
                    children: [
                      r.jsxs("b", { children: [c.name, "种子"] }),
                      r.jsxs("small", {
                        children: [
                          Te(c.growMin),
                          c.regrowMin ? " · 可反复收获" : "",
                          " · 产 ",
                          c.yield,
                          " · 售 ",
                          c.sell,
                          "/个 · ",
                          c.soil === "paddy"
                            ? "水田"
                            : c.soil === "orchard"
                              ? "果园地"
                              : "农田",
                        ],
                      }),
                      r.jsxs("small", {
                        className: "seasons",
                        children: [
                          c.seasons.map((d) => Ae[d]).join(""),
                          "季 · 持有 ",
                          s.inv[Oe(c.id)] ?? 0,
                        ],
                      }),
                    ],
                  }),
                  h
                    ? r.jsxs("span", {
                        className: "muted",
                        children: [c.unlock, " 级解锁"],
                      })
                    : r.jsxs("div", {
                        className: "sr-buy",
                        children: [
                          r.jsx(ft, {
                            value: f,
                            max: 99,
                            onChange: (d) => a({ ...i, [c.id]: d }),
                          }),
                          r.jsx(M, {
                            className: "sm",
                            act: "buy-seed-" + c.id,
                            disabled: s.coins < c.seedCoin * f,
                            title:
                              s.coins < c.seedCoin * f
                                ? `金币不足（需要 ${c.seedCoin * f}）`
                                : void 0,
                            onClick: () => {
                              p.act((d) => ut(d, c.id, f, "coin")).ok &&
                                T("coin");
                            },
                            children: fe(c.seedCoin * f),
                          }),
                          r.jsxs(M, {
                            className: "sm ink",
                            act: "buy-seed-ink-" + c.id,
                            disabled: s.ink < c.seedInk * f,
                            title:
                              s.ink < c.seedInk * f
                                ? `墨粒不足（需要 ${c.seedInk * f}），写日记可以获得墨粒`
                                : void 0,
                            onClick: () => {
                              p.act((d) => ut(d, c.id, f, "ink")).ok &&
                                T("coin");
                            },
                            children: [
                              r.jsx(S, { s: Se.ink, h: 14 }),
                              c.seedInk * f,
                            ],
                          }),
                        ],
                      }),
                ],
              },
              c.id,
            );
          }),
        }),
      e === "animals" &&
        r.jsx("div", {
          className: "shop-list",
          children: Ve.map((c) => {
            const h = Ut(s, c.kind),
              f = n < c.unlock;
            return r.jsxs(
              "div",
              {
                className: `shop-row ${f ? "locked" : ""}`,
                children: [
                  r.jsx(S, { s: de(c.kind).idle, h: 34 }),
                  r.jsxs("div", {
                    className: "sr-info",
                    children: [
                      r.jsx("b", { children: c.name }),
                      r.jsxs("small", {
                        children: [
                          "产 ",
                          ye(c.product),
                          " · 每 ",
                          Te(c.cycleMin),
                          " · ",
                          c.feeds.length
                            ? "吃 " + c.feeds.map(ye).join("/")
                            : "不用喂食",
                        ],
                      }),
                      r.jsxs("small", { children: ["住在", E[c.home].name] }),
                    ],
                  }),
                  f
                    ? r.jsxs("span", {
                        className: "muted",
                        children: [c.unlock, " 级解锁"],
                      })
                    : r.jsx(M, {
                        className: "sm",
                        act: "shop-buy-" + c.kind,
                        disabled: !h.ok,
                        title: h.reason,
                        onClick: () => {
                          p.act((d, u) => Zt(d, c.kind, u)).ok && T(c.kind);
                        },
                        children: fe(c.price),
                      }),
                ],
              },
              c.kind,
            );
          }),
        }),
      (e === "build" || e === "decor") &&
        r.jsx("div", {
          className: "build-grid",
          children: ys
            .filter(
              (c) =>
                (e === "decor" ? c.cat === "decor" : c.cat !== "decor") &&
                c.id !== "mailbox" &&
                c.id !== "cabin",
            )
            .map((c) => {
              const h = Vt(s, c.id),
                f = Xt(s, c.id),
                d = n < c.unlock,
                u = c.soil ? Ie(c.soil, !1) : le(c.id, 1, "shop-" + c.id);
              return r.jsxs(
                M,
                {
                  className: `build-card ${d ? "locked" : ""}`,
                  act: "build-" + c.id,
                  disabled: !h.ok,
                  title: h.reason,
                  onClick: () => {
                    var m;
                    (b.set({ sheet: null, tool: "build", buildDef: c.id }),
                      (m = z.v) == null || m.startGhost(c.id));
                  },
                  children: [
                    r.jsx("div", {
                      className: "bc-ic",
                      children: r.jsx(S, { s: u, h: c.soil ? 32 : 46 }),
                    }),
                    r.jsx("b", { children: c.name }),
                    r.jsx("small", {
                      children: d
                        ? `${c.unlock} 级解锁`
                        : h.ok
                          ? ds(f)
                          : h.reason,
                    }),
                    r.jsxs("small", {
                      className: "dim",
                      children: [c.size[0], "×", c.size[1]],
                    }),
                  ],
                },
                c.id,
              );
            }),
        }),
      e === "materials" &&
        r.jsx("div", {
          className: "shop-list",
          children: ["wood", "stone"].map((c) =>
            r.jsxs(
              "div",
              {
                className: "shop-row",
                children: [
                  r.jsx(X, { id: c, h: 32 }),
                  r.jsxs("div", {
                    className: "sr-info",
                    children: [
                      r.jsx("b", { children: ye(c) }),
                      r.jsxs("small", {
                        children: [
                          "升级建筑需要。开垦土地时也会挖到。持有 ",
                          s.inv[c] ?? 0,
                        ],
                      }),
                    ],
                  }),
                  r.jsxs("div", {
                    className: "sr-buy",
                    children: [
                      r.jsx(ft, {
                        value: l(c),
                        max: 50,
                        onChange: (h) => a({ ...i, [c]: h }),
                      }),
                      r.jsx(M, {
                        className: "sm",
                        act: "buy-" + c,
                        disabled: s.coins < re.materialPrice[c] * l(c),
                        title:
                          s.coins < re.materialPrice[c] * l(c)
                            ? "金币不足"
                            : void 0,
                        onClick: () => p.act((h) => vs(h, c, l(c))),
                        children: fe(re.materialPrice[c] * l(c)),
                      }),
                    ],
                  }),
                ],
              },
              c,
            ),
          ),
        }),
    ],
  });
}
const Ki = ["crop", "animal", "goods", "special", "seed", "material"],
  qi = {
    crop: "作物",
    animal: "动物产品",
    goods: "加工品",
    special: "珍品",
    seed: "种子",
    material: "建材",
  };
function Ui() {
  F();
  const o = p.s,
    [e, t] = I.useState(null),
    [s, n] = I.useState(1),
    i = Object.entries(o.inv).filter(([, f]) => f > 0),
    a = Ki.map((f) => ({
      cat: f,
      items: i.filter(([d]) => {
        var u;
        return (
          (((u = Nt[d.replace(":golden", "")]) == null ? void 0 : u.cat) ??
            "special") === f
        );
      }),
    })).filter((f) => f.items.length),
    l = e ? (o.inv[e] ?? 0) : 0,
    c = e ? bs(o, e) : 0,
    h = Object.values(o.objects).find((f) => f.def === "shop");
  return r.jsxs(ee, {
    wide: !0,
    title: "仓库",
    sub: r.jsxs(r.Fragment, {
      children: [
        "容量 ",
        ke(o),
        "/",
        je(o),
        " · ",
        h
          ? `集市小铺加成 +${Math.round(re.shopBonusPerLevel * h.level * 100)}%`
          : "建造集市小铺可以卖得更贵",
      ],
    }),
    icon: r.jsx(X, { id: "wheat", h: 36 }),
    footer:
      e && l > 0
        ? r.jsxs("div", {
            className: "sell-bar",
            children: [
              r.jsx(X, { id: e, h: 28 }),
              r.jsx("b", { children: ye(e) }),
              r.jsx(ft, { value: Math.min(s, l), max: l, onChange: n }),
              r.jsxs(M, {
                className: "gold",
                act: "sell",
                disabled: c <= 0,
                title: c <= 0 ? "这个不能出售" : void 0,
                onClick: () => {
                  const f = Math.min(s, l);
                  p.act((u) => gs(u, e, f)).ok &&
                    (T("coin"), n(1), (p.s.inv[e] ?? 0) <= 0 && t(null));
                },
                children: ["出售 ", fe(c * Math.min(s, l))],
              }),
            ],
          })
        : r.jsx("span", {
            className: "muted",
            children: "点一个物品可以出售。",
          }),
    children: [
      r.jsx(he, {
        v: ke(o) / je(o),
        color: ke(o) >= je(o) ? "#e85a4c" : void 0,
      }),
      !a.length &&
        r.jsx("p", {
          className: "muted",
          children: "仓库空空的。收获作物、收取动物产品后会放在这里。",
        }),
      a.map((f) =>
        r.jsxs(
          "div",
          {
            className: "inv-group",
            children: [
              r.jsx("h4", { children: qi[f.cat] }),
              r.jsx("div", {
                className: "inv-grid",
                children: f.items
                  .sort((d, u) => d[0].localeCompare(u[0]))
                  .map(([d, u]) => {
                    var m;
                    return r.jsxs(
                      "button",
                      {
                        type: "button",
                        className: `inv-cell ${e === d ? "on" : ""}`,
                        onClick: () => {
                          (t(d), n(1));
                        },
                        "data-act": "inv-" + d,
                        title:
                          (m = Nt[d.replace(":golden", "")]) == null
                            ? void 0
                            : m.desc,
                        children: [
                          r.jsx(X, { id: d, h: 28 }),
                          r.jsx("b", { children: u }),
                          r.jsx("small", { children: ye(d) }),
                        ],
                      },
                      d,
                    );
                  }),
              }),
            ],
          },
          f.cat,
        ),
      ),
    ],
  });
}
function Zi() {
  F();
  const o = p.s,
    [e, t] = I.useState("crops");
  return r.jsx(ee, {
    wide: !0,
    title: "图鉴",
    sub: `作物 ${o.codex.crops.length}/20 · 动物 ${o.codex.animals.length}/8 · 物品 ${o.codex.items.length}/${St.filter((s) => s.cat !== "seed").length}`,
    icon: r.jsx(S, { s: Se.sparkleGold, h: 30 }),
    tabs: [
      { id: "crops", label: "作物" },
      { id: "animals", label: "动物" },
      { id: "items", label: "物品" },
    ],
    tab: e,
    onTab: t,
    children: r.jsxs("div", {
      className: "codex-grid",
      children: [
        e === "crops" &&
          Ze.map((s) => {
            const n = o.codex.crops.includes(s.id);
            return r.jsxs(
              "div",
              {
                className: `codex-card ${n ? "" : "unknown"}`,
                children: [
                  r.jsx(S, { s: ue(s.id, 4), h: 42 }),
                  r.jsx("b", { children: n ? s.name : "？？？" }),
                  r.jsx("small", {
                    children: n
                      ? s.desc
                      : `${s.unlock} 级可种 · ${s.seasons.map((i) => Ae[i]).join("")}季`,
                  }),
                  n &&
                    r.jsxs("small", {
                      className: "dim",
                      children: [
                        "已收获 ",
                        o.stats["harvest:" + s.id] ?? 0,
                        " 次",
                      ],
                    }),
                ],
              },
              s.id,
            );
          }),
        e === "animals" &&
          Ve.map((s) => {
            const n = o.codex.animals.includes(s.kind);
            return r.jsxs(
              "div",
              {
                className: `codex-card ${n ? "" : "unknown"}`,
                children: [
                  r.jsx(S, { s: de(s.kind).idle, h: 36 }),
                  r.jsx("b", { children: n ? s.name : "？？？" }),
                  r.jsx("small", {
                    children: n ? s.desc : `${s.unlock} 级解锁`,
                  }),
                ],
              },
              s.kind,
            );
          }),
        e === "items" &&
          St.filter((s) => s.cat !== "seed").map((s) => {
            const n = o.codex.items.includes(s.id);
            return r.jsxs(
              "div",
              {
                className: `codex-card ${n ? "" : "unknown"}`,
                children: [
                  r.jsx(X, { id: s.id, h: 30 }),
                  r.jsx("b", { children: n ? s.name : "？？？" }),
                  r.jsx("small", {
                    children: n ? `${s.desc} 售 ${s.sell}` : "",
                  }),
                ],
              },
              s.id,
            );
          }),
      ],
    }),
  });
}
function Vi() {
  (F(), bt(1e3));
  const o = p.s,
    e = Object.values(o.objects).filter((t) => E[t.def].cat === "animal");
  return r.jsxs(ee, {
    title: "动物管理",
    sub: `共 ${Object.keys(o.animals).length} 只`,
    icon: r.jsx(S, { s: de("chicken").idle, h: 34 }),
    children: [
      e.map((t) =>
        r.jsxs(
          "button",
          {
            type: "button",
            className: "home-line",
            onClick: () => {
              (b.set({ sheet: { kind: "object", id: t.id }, selected: t.id }),
                z.focusObj(t.id));
            },
            "data-act": "home-" + t.id,
            children: [
              r.jsx(S, { s: le(t.def, t.level, t.id), h: 36 }),
              r.jsxs("div", {
                children: [
                  r.jsxs("b", { children: [E[t.def].name, " Lv.", t.level] }),
                  r.jsx("small", {
                    children:
                      yt(o, t.id)
                        .map(
                          (s) =>
                            `${s.name}${ge(s.kind) && s.meals <= 0 ? "（饿）" : ""}`,
                        )
                        .join("、") || "空",
                  }),
                ],
              }),
              r.jsx("span", { className: "go", children: "›" }),
            ],
          },
          t.id,
        ),
      ),
      r.jsx(M, {
        className: "ghost",
        act: "to-animal-shop",
        onClick: () => b.open({ kind: "shop", tab: "animals" }),
        children: "去动物商店",
      }),
    ],
  });
}
const Y = V();
function Xi() {
  F();
  const [o, e] = I.useState("list"),
    [t, s] = I.useState(""),
    [n, i] = I.useState(() => We(Date.now()).slice(0, 7)),
    [a, l] = I.useState(null),
    c = p.liveEntries(),
    h = p.trash(),
    f = t.trim().toLowerCase(),
    d = I.useMemo(
      () =>
        c.filter((m) =>
          a && m.date !== a
            ? !1
            : f
              ? m.text.toLowerCase().includes(f) ||
                m.title.toLowerCase().includes(f) ||
                m.tags.some((w) =>
                  w.toLowerCase().includes(f.replace(/^#/, "")),
                )
              : !0,
        ),
      [c, f, a, p.version],
    ),
    u = (m) => b.set({ sheet: { kind: "entry", id: m.id } });
  return r.jsxs(ee, {
    wide: !0,
    title: "日记本",
    sub: `共 ${c.length} 篇 · ${c.reduce((m, w) => m + Ue(w.text), 0)} 字`,
    icon: r.jsx(S, { s: Y.sign, h: 36 }),
    tabs: [
      { id: "list", label: "全部" },
      { id: "cal", label: "日历" },
      { id: "trash", label: "回收站", badge: h.length || void 0 },
    ],
    tab: o,
    onTab: (m) => {
      (e(m), l(null));
    },
    children: [
      o !== "trash" &&
        r.jsxs("div", {
          className: "search",
          children: [
            r.jsx("input", {
              placeholder: "搜索文字、标题或 #标签",
              value: t,
              onChange: (m) => s(m.target.value),
              "data-testid": "diary-search",
            }),
            t &&
              r.jsx("button", {
                type: "button",
                onClick: () => s(""),
                "aria-label": "清除",
                children: "×",
              }),
          ],
        }),
      o === "cal" &&
        r.jsx(en, { month: n, setMonth: i, day: a, setDay: l, entries: c }),
      o !== "trash" &&
        r.jsxs("div", {
          className: "entry-list",
          "data-testid": "entry-list",
          children: [
            d.map((m) => r.jsx(Ji, { e: m, q: f, onClick: () => u(m) }, m.id)),
            !d.length &&
              r.jsx("p", {
                className: "muted center",
                children: f
                  ? "没有找到包含这些字的日记"
                  : a
                    ? "这一天没有日记"
                    : "还没有日记。回到写字页写下第一篇吧。",
              }),
          ],
        }),
      o === "trash" &&
        r.jsxs("div", {
          className: "entry-list",
          children: [
            r.jsx("p", {
              className: "hint",
              children:
                "删除的日记会先放在这里，可以随时恢复。它在庄园里的文字暂时隐藏，土地和建筑都保留。",
            }),
            h.map((m) =>
              r.jsxs(
                "div",
                {
                  className: "entry-row trash",
                  children: [
                    r.jsxs("div", {
                      className: "er-main",
                      children: [
                        r.jsx("b", { children: m.title || ve(m.date) }),
                        r.jsx("small", {
                          children: m.text.slice(0, 50) || "（空）",
                        }),
                        r.jsxs("small", {
                          className: "dim",
                          children: [
                            "删除于 ",
                            new Date(m.deletedAt).toLocaleString(),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "er-acts",
                      children: [
                        r.jsx(M, {
                          className: "sm",
                          act: "restore",
                          onClick: () => {
                            (p.restore(m.id), p.toast("日记已恢复", "green"));
                          },
                          children: "恢复",
                        }),
                        r.jsx(M, {
                          className: "sm ghost danger",
                          act: "purge",
                          onClick: () =>
                            b.ask(
                              "永久删除这篇日记？",
                              "删除后无法从回收站恢复（删除前会自动做一次备份，可以在「设置 → 备份」里找回）。",
                              "永久删除",
                              () => {
                                p.purge(m.id);
                              },
                            ),
                          children: "永久删除",
                        }),
                      ],
                    }),
                  ],
                },
                m.id,
              ),
            ),
            !h.length &&
              r.jsx("p", {
                className: "muted center",
                children: "回收站是空的",
              }),
          ],
        }),
    ],
  });
}
function Qi(o, e) {
  if (!e) return o;
  const t = o.toLowerCase().indexOf(e);
  if (t < 0) return o;
  const s = Math.max(0, t - 16);
  return r.jsxs(r.Fragment, {
    children: [
      s > 0 ? "…" : "",
      o.slice(s, t),
      r.jsx("mark", { children: o.slice(t, t + e.length) }),
      o.slice(t + e.length, t + e.length + 40),
    ],
  });
}
function Ji({ e: o, q: e, onClick: t }) {
  const s =
      o.text
        .split(
          `
`,
        )
        .find((i) => i.trim()) ?? "",
    n =
      e && o.text.toLowerCase().includes(e)
        ? Qi(o.text.replace(/\n/g, " "), e)
        : s.slice(0, 60) || "（还没有正文）";
  return r.jsxs("button", {
    type: "button",
    className: "entry-row",
    onClick: t,
    "data-act": "entry-row",
    children: [
      r.jsxs("div", {
        className: "er-date",
        children: [
          r.jsx("b", { children: Number(o.date.slice(8)) }),
          r.jsxs("small", { children: [Number(o.date.slice(5, 7)), "月"] }),
        ],
      }),
      r.jsxs("div", {
        className: "er-main",
        children: [
          r.jsx("b", { children: o.title || ve(o.date) }),
          r.jsx("small", { children: n }),
          r.jsxs("small", {
            className: "dim",
            children: [
              o.time,
              " · ",
              Ue(o.text),
              " 字",
              o.weather ? " · " + o.weather : "",
              o.tags.length ? " · " + o.tags.map((i) => "#" + i).join(" ") : "",
            ],
          }),
        ],
      }),
    ],
  });
}
function en({ month: o, setMonth: e, day: t, setDay: s, entries: n }) {
  const [i, a] = o.split("-").map(Number),
    l = new Date(i, a - 1, 1),
    c = new Date(i, a, 0).getDate(),
    h = new Map();
  for (const m of n) h.set(m.date, (h.get(m.date) ?? 0) + 1);
  const f = (m) => {
      const w = new Date(i, a - 1 + m, 1);
      (e(`${w.getFullYear()}-${String(w.getMonth() + 1).padStart(2, "0")}`),
        s(null));
    },
    d = We(Date.now()),
    u = [
      ...Array(l.getDay()).fill(null),
      ...Array.from({ length: c }, (m, w) => w + 1),
    ];
  return r.jsxs("div", {
    className: "calendar",
    children: [
      r.jsxs("div", {
        className: "cal-head",
        children: [
          r.jsx("button", {
            type: "button",
            onClick: () => f(-1),
            "aria-label": "上个月",
            children: "‹",
          }),
          r.jsxs("b", { children: [i, " 年 ", a, " 月"] }),
          r.jsx("button", {
            type: "button",
            onClick: () => f(1),
            "aria-label": "下个月",
            children: "›",
          }),
        ],
      }),
      r.jsxs("div", {
        className: "cal-grid",
        children: [
          ["日", "一", "二", "三", "四", "五", "六"].map((m) =>
            r.jsx("i", { children: m }, m),
          ),
          u.map((m, w) => {
            if (!m) return r.jsx("span", {}, w);
            const y = `${o}-${String(m).padStart(2, "0")}`,
              v = h.get(y) ?? 0;
            return r.jsxs(
              "button",
              {
                type: "button",
                className: `cal-d ${v ? "has" : ""} ${y === d ? "today" : ""} ${y === t ? "on" : ""}`,
                onClick: () => s(y === t ? null : y),
                "data-act": "cal-" + y,
                children: [
                  m,
                  v > 0 && r.jsx("em", { children: v > 1 ? v : "" }),
                ],
              },
              w,
            );
          }),
        ],
      }),
    ],
  });
}
function tn({ id: o }) {
  F();
  const e = p.entries.get(o);
  if (!e) return null;
  const t = Object.values(p.s.blocks).filter(
      (a) => a.entryId === o && !a.hidden,
    ),
    s = () => {
      b.set({ sheet: null, mode: "write", entryId: o });
    },
    n = () => {
      if (!t.length || !z.v) return;
      const a = t.sort((l, c) => l.y - c.y)[0];
      (b.set({ sheet: null, mode: "farm" }),
        z.v.focusWorld((a.x + a.w / 2) * 18, (a.y + a.h / 2) * 18, 1.3));
    },
    i = () =>
      b.ask(
        "把这篇日记放进回收站？",
        "它在庄园里的文字会暂时隐藏，土地、建筑、作物都不会受影响。可以在日记本的回收站里恢复。",
        "放进回收站",
        () => {
          (p.softDelete(o),
            b.entryId === o && b.set({ entryId: null }),
            b.close(),
            p.toast("已放进回收站", "plain"));
        },
        !0,
      );
  return r.jsxs(ee, {
    title: e.title || ve(e.date),
    sub: r.jsxs(r.Fragment, {
      children: [
        ve(e.date),
        " ",
        e.time,
        e.weather ? " · " + e.weather : "",
        " · ",
        Ue(e.text),
        " 字",
      ],
    }),
    icon: r.jsx(S, { s: Y.sign, h: 34 }),
    footer: r.jsxs("div", {
      className: "obj-foot",
      children: [
        r.jsx(M, {
          className: "ghost sm danger",
          act: "entry-delete",
          onClick: i,
          children: "删除",
        }),
        t.length > 0 &&
          r.jsx(M, {
            className: "ghost sm",
            act: "entry-locate",
            onClick: n,
            children: "在庄园里找到它",
          }),
        r.jsx(M, {
          className: "primary",
          act: "entry-edit",
          onClick: s,
          children: "继续写 / 修改",
        }),
      ],
    }),
    children: [
      r.jsxs("div", {
        className: "entry-meta",
        children: [
          r.jsxs("label", {
            children: [
              "日期 ",
              r.jsx("input", {
                type: "date",
                value: e.date,
                onChange: (a) =>
                  a.target.value && p.updateMeta(o, { date: a.target.value }),
                "data-testid": "entry-date",
              }),
            ],
          }),
          r.jsxs("label", {
            children: [
              "时间 ",
              r.jsx("input", {
                type: "time",
                value: e.time,
                onChange: (a) =>
                  a.target.value && p.updateMeta(o, { time: a.target.value }),
              }),
            ],
          }),
        ],
      }),
      e.tags.length > 0 &&
        r.jsx("div", {
          className: "wp-tags",
          children: e.tags.map((a) =>
            r.jsxs("span", { className: "tag", children: ["#", a] }, a),
          ),
        }),
      r.jsx("div", {
        className: "entry-read",
        "data-testid": "entry-read",
        children:
          e.text || r.jsx("span", { className: "muted", children: "（空白）" }),
      }),
      r.jsxs("p", {
        className: "hint",
        children: [
          "已整理进庄园 ",
          t.length,
          " 段 · 最后修改 ",
          new Date(e.updatedAt).toLocaleString(),
        ],
      }),
    ],
  });
}
function sn() {
  F();
  const o = p.s;
  Ds(o, p.now());
  const [e, t] = I.useState(() =>
      Ge(o).some((h) => h.cat === "tutorial") ? "tutorial" : "daily",
    ),
    s = Ge(o),
    n = (h) => {
      p.act((d) => Fs(d, h)).ok && (T("levelup"), i());
    },
    i = () => {
      var u;
      const h = document.querySelector(".sheet"),
        f = h == null ? void 0 : h.getBoundingClientRect(),
        d = (u = z.v) == null ? void 0 : u.canvas.getBoundingClientRect();
      f &&
        d &&
        z.fly(
          Y.coin,
          { x: f.left + f.width / 2 - d.left, y: f.top + 80 - d.top },
          "coins",
        );
    },
    a = (h) => s.filter((f) => f.cat === h && He(o, f).done).length,
    l = o.daily.tasks.filter(
      (h, f) => !h.claimed && (o.daily.stats[h.key] ?? 0) >= h.n && f >= 0,
    ).length,
    c = (h) =>
      (h === "achievement"
        ? Bs.filter((d) => d.cat === "achievement")
        : s.filter((d) => d.cat === h)
      ).map((d) => {
        const u = He(o, d),
          m = o.claimed.includes(d.id);
        return r.jsxs(
          "div",
          {
            className: `quest ${m ? "claimed" : u.done ? "ready" : ""}`,
            "data-quest": d.id,
            children: [
              r.jsxs("div", {
                className: "q-main",
                children: [
                  r.jsx("b", { children: d.title }),
                  r.jsx("small", { children: d.desc }),
                  !m &&
                    !u.done &&
                    d.hint &&
                    r.jsxs("small", {
                      className: "dim",
                      children: ["提示：", d.hint],
                    }),
                  !m &&
                    r.jsx(he, {
                      v: u.cur / u.need,
                      right: `${u.cur}/${u.need}`,
                    }),
                ],
              }),
              r.jsxs("div", {
                className: "q-side",
                children: [
                  r.jsx(Ot, { r: d.reward }),
                  m
                    ? r.jsx("span", { className: "muted", children: "已领取" })
                    : r.jsx(M, {
                        className: "sm gold",
                        act: "claim-" + d.id,
                        disabled: !u.done,
                        title: u.done ? void 0 : "还没完成",
                        onClick: () => n(d.id),
                        children: "领取",
                      }),
                ],
              }),
            ],
          },
          d.id,
        );
      });
  return r.jsxs(ee, {
    wide: !0,
    title: "任务",
    sub: "慢慢来，没有任何任务是必须完成的",
    icon: r.jsx(S, { s: Y.sparkleGold, h: 30 }),
    tabs: [
      ...(s.some((h) => h.cat === "tutorial")
        ? [{ id: "tutorial", label: "新手", badge: a("tutorial") || void 0 }]
        : []),
      { id: "daily", label: "每日", badge: l || void 0 },
      { id: "growth", label: "成长", badge: a("growth") || void 0 },
      { id: "achievement", label: "成就", badge: a("achievement") || void 0 },
      { id: "level", label: "等级" },
    ],
    tab: e,
    onTab: t,
    children: [
      e === "tutorial" &&
        r.jsxs(r.Fragment, {
          children: [
            c("tutorial"),
            r.jsx(M, {
              className: "ghost sm",
              act: "skip-tutorial",
              onClick: () =>
                b.ask(
                  "跳过新手任务？",
                  "新手任务会隐藏，之后不会再提示（奖励也不再发放）。",
                  "跳过",
                  () => {
                    (p.act(
                      (h) => (
                        (h.tutorial.dismissed = !0),
                        { ok: !0, events: [] }
                      ),
                    ),
                      t("daily"));
                  },
                ),
              children: "跳过新手任务",
            }),
          ],
        }),
      e === "daily" &&
        r.jsxs(r.Fragment, {
          children: [
            r.jsx("p", {
              className: "hint",
              children:
                "每天 0 点刷新。没完成也完全没关系，不会有任何惩罚，动物也不会因为你没来而受苦。",
            }),
            o.daily.tasks.map((h, f) => {
              const d = Math.min(o.daily.stats[h.key] ?? 0, h.n),
                u = Ps.find((m) => m.id === h.id);
              return r.jsxs(
                "div",
                {
                  className: `quest ${h.claimed ? "claimed" : d >= h.n ? "ready" : ""}`,
                  children: [
                    r.jsxs("div", {
                      className: "q-main",
                      children: [
                        r.jsx("b", { children: h.title }),
                        r.jsx(he, { v: d / h.n, right: `${d}/${h.n}` }),
                      ],
                    }),
                    r.jsxs("div", {
                      className: "q-side",
                      children: [
                        r.jsx(Ot, { r: u.reward(h.n) }),
                        h.claimed
                          ? r.jsx("span", {
                              className: "muted",
                              children: "已领取",
                            })
                          : r.jsx(M, {
                              className: "sm gold",
                              act: "daily-" + f,
                              disabled: d < h.n,
                              title: d < h.n ? "还没完成" : void 0,
                              onClick: () => {
                                p.act((m, w) => Os(m, f, w)).ok &&
                                  (T("levelup"), i());
                              },
                              children: "领取",
                            }),
                      ],
                    }),
                  ],
                },
                h.id,
              );
            }),
          ],
        }),
      e === "growth" &&
        (c("growth").length
          ? c("growth")
          : r.jsx("p", {
              className: "muted center",
              children: "成长任务都完成啦",
            })),
      e === "achievement" && c("achievement"),
      e === "level" && r.jsx(nn, {}),
    ],
  });
}
function Ot({ r: o }) {
  return r.jsxs("div", {
    className: "reward",
    children: [
      o.coin
        ? r.jsxs("span", { children: [r.jsx(S, { s: Y.coin, h: 14 }), o.coin] })
        : null,
      o.ink
        ? r.jsxs("span", { children: [r.jsx(S, { s: Y.ink, h: 14 }), o.ink] })
        : null,
      o.xp
        ? r.jsxs("span", { className: "xp", children: ["经验 ", o.xp] })
        : null,
      o.items &&
        Object.entries(o.items).map(([e, t]) =>
          r.jsxs("span", { children: [r.jsx(X, { id: e, h: 14 }), t] }, e),
        ),
    ],
  });
}
function nn() {
  const o = p.s,
    e = Xe(o),
    t = Kt(o);
  return r.jsxs("div", {
    children: [
      r.jsxs("div", {
        className: "lv-big",
        children: [
          r.jsx("b", { children: e }),
          r.jsx("span", { children: "级" }),
        ],
      }),
      r.jsx(he, {
        v: t.cur / t.need,
        right: e >= At ? "满级" : `${t.cur}/${t.need}`,
        label: "经验",
      }),
      r.jsx("p", {
        className: "hint",
        children:
          "写日记、整理段落、收获、照顾动物、加工都能获得经验。升级会解锁新的作物、动物和建筑。",
      }),
      r.jsx("div", {
        className: "lv-table",
        children: Rs.slice(1, At + 1).map((s, n) => {
          const i = n + 1,
            a = [
              ...Ze.filter((l) => l.unlock === i).map((l) => l.name),
              ...Ve.filter((l) => l.unlock === i).map((l) => l.name),
            ];
          return !a.length && i !== e
            ? null
            : r.jsxs(
                "div",
                {
                  className: `lv-row ${i <= e ? "got" : ""}`,
                  children: [
                    r.jsxs("b", { children: ["Lv.", i] }),
                    r.jsxs("small", { children: [s, " 经验"] }),
                    r.jsx("span", { children: a.join("、") || "—" }),
                  ],
                },
                i,
              );
        }),
      }),
    ],
  });
}
function an() {
  var d;
  F();
  const o = p.s,
    e = o.settings,
    [t, s] = I.useState([]),
    [n, i] = I.useState(""),
    a = I.useRef(null),
    l = () => p.backups().then(s);
  I.useEffect(() => {
    l();
  }, [p.slot]);
  const c = (u) => {
      (p.act((m) => (Object.assign(m.settings, u), { ok: !0, events: [] })),
        Js());
    },
    h = async () => {
      if (window.Capacitor?.getPlatform() === "ios") {
        try {
          const { shareBackup } = await import("./ios-backup.js");
          await shareBackup(p.exportFile());
          p.toast("存档分享已结束，请确认已保存到“文件”", "plain");
        } catch (error) {
          p.toast("存档未导出：" + (error?.message ?? "请重试"), "warn");
        }
        return;
      }
      const u = p.exportFile(),
        m = new Blob([JSON.stringify(u, null, 1)], {
          type: "application/json",
        }),
        w = document.createElement("a");
      ((w.href = URL.createObjectURL(m)),
        (w.download = `字里有田-${p.slot === "sandbox" ? "沙盒-" : ""}${We(Date.now())}.json`),
        document.body.appendChild(w),
        w.click(),
        w.remove(),
        setTimeout(() => URL.revokeObjectURL(w.href), 5e3),
        p.toast("存档已导出（日记 + 庄园），请妥善保存", "green"));
    },
    f = async (u) => {
      if (!u) return;
      const m = await u.text(),
        w = p.checkImport(m);
      if (!w.ok) {
        p.toast("导入失败：" + w.error, "warn");
        return;
      }
      if (w.file.slot === "sandbox" && p.slot === "main") {
        p.toast("这是沙盒存档，只能导入到沙盒模式", "warn");
        return;
      }
      const y = w.summary;
      (b.ask(
        "导入这个存档？",
        `文件里有 ${y.entries} 篇日记${y.deleted ? `（另有 ${y.deleted} 篇在回收站）` : ""}${y.coins !== void 0 ? `、${y.coins} 金币` : ""}，导出于 ${new Date(y.exportedAt).toLocaleString()}。
导入会替换当前${p.slot === "sandbox" ? "沙盒" : ""}存档的全部日记和庄园（不会合并或叠加），替换前自动备份当前存档。`,
        "替换并导入",
        async () => {
          i("import");
          try {
            (await p.importFile(w.file),
              p.toast("导入完成", "green"),
              b.close());
          } catch (v) {
            p.toast(
              "导入失败：" + ((v == null ? void 0 : v.message) ?? v),
              "warn",
            );
          }
          i("");
        },
        !0,
      ),
        a.current && (a.current.value = ""));
    };
  return r.jsxs(ee, {
    wide: !0,
    title: "设置",
    sub:
      p.slot === "sandbox"
        ? "当前：沙盒模式（加速时间，与正式存档完全隔离）"
        : "当前：正式存档",
    icon: r.jsx(S, { s: Y.post, h: 34 }),
    children: [
      r.jsx("h4", { children: "写作" }),
      r.jsxs("div", {
        className: "set-row",
        children: [
          r.jsxs("span", {
            children: [
              "庄园里的文字大小",
              r.jsx("small", {
                children: "修改后段落会重新排版，建筑不会移动或消失",
              }),
            ],
          }),
          r.jsx("div", {
            className: "seg",
            children: [1, 1.15, 1.3].map((u) =>
              r.jsx(
                "button",
                {
                  type: "button",
                  className: e.textScale === u ? "on" : "",
                  "data-act": "scale-" + u,
                  onClick: () =>
                    p.act((m, w) => ({
                      ok: !0,
                      events: Es(m, u).map((v) => ({
                        t: "block",
                        id: v,
                        mode: "moved",
                        land: 0,
                      })),
                    })),
                  children: u === 1 ? "标准" : u === 1.15 ? "大" : "特大",
                },
                u,
              ),
            ),
          }),
        ],
      }),
      r.jsx(De, {
        label: "小动物自动整理段落",
        sub: "关闭后，日记照常保存，只是不自动放进庄园",
        on: e.autoTidy,
        onChange: (u) => c({ autoTidy: u }),
        act: "autotidy",
      }),
      r.jsx("h4", { children: "声音与动画" }),
      r.jsx(De, {
        label: "音效",
        on: e.sound,
        onChange: (u) => c({ sound: u }),
        act: "sound",
      }),
      r.jsx(De, {
        label: "背景音乐",
        on: e.music,
        onChange: (u) => c({ music: u }),
        act: "music",
      }),
      r.jsx(De, {
        label: "减少动画",
        sub: "关闭雨雪、整理动画等大幅度动效",
        on: e.reduceMotion,
        onChange: (u) => c({ reduceMotion: u }),
        act: "motion",
      }),
      r.jsx("h4", { children: "存档" }),
      r.jsx("p", {
        className: "hint",
        children:
          "所有日记只保存在这台设备的浏览器里（IndexedDB），不会上传到任何服务器，也不会发送给任何 AI 服务。换设备或清理浏览器数据前，请先导出。",
      }),
      r.jsxs("div", {
        className: "set-acts",
        children: [
          r.jsx(M, {
            className: "primary",
            act: "export",
            onClick: h,
            children: "导出存档",
          }),
          r.jsx(M, {
            className: "ghost",
            act: "import",
            onClick: () => {
              var u;
              return (u = a.current) == null ? void 0 : u.click();
            },
            children: n === "import" ? "导入中…" : "导入存档",
          }),
          r.jsx(M, {
            className: "ghost",
            act: "backup-now",
            onClick: async () => {
              (await p.backupNow(), l(), p.toast("已备份", "green"));
            },
            children: "立即备份",
          }),
          r.jsx("input", {
            ref: a,
            type: "file",
            accept: ".json,application/json",
            hidden: !0,
            onChange: (u) => {
              var m;
              return f((m = u.target.files) == null ? void 0 : m[0]);
            },
            "data-testid": "import-file",
          }),
        ],
      }),
      r.jsxs("div", {
        className: "backups",
        children: [
          t.map((u) =>
            r.jsxs(
              "div",
              {
                className: "bk-row",
                children: [
                  r.jsxs("div", {
                    children: [
                      r.jsx("b", { children: new Date(u.at).toLocaleString() }),
                      r.jsxs("small", {
                        children: [u.reason, " · ", u.entries, " 篇日记"],
                      }),
                    ],
                  }),
                  r.jsx(M, {
                    className: "sm ghost",
                    act: "restore-backup",
                    onClick: () =>
                      b.ask(
                        "恢复到这个备份？",
                        `当前存档会先自动备份，然后替换为 ${new Date(u.at).toLocaleString()} 的状态。`,
                        "恢复",
                        async () => {
                          (await p.restoreBackup(u),
                            l(),
                            b.close(),
                            p.toast("已恢复", "green"));
                        },
                        !0,
                      ),
                    children: "恢复",
                  }),
                ],
              },
              u.id,
            ),
          ),
          !t.length &&
            r.jsx("small", {
              className: "muted",
              children:
                "还没有备份。每天第一次打开时会自动备份一次，最多保留 8 份。",
            }),
        ],
      }),
      r.jsx("h4", { children: "沙盒模式" }),
      r.jsx("p", {
        className: "hint",
        children:
          "沙盒是独立的试玩存档，时间可以加速，方便体验作物成长和动物生产。沙盒里的一切都不会影响正式存档，也不能导入正式存档。",
      }),
      r.jsxs("div", {
        className: "set-acts",
        children: [
          p.slot === "main"
            ? r.jsx(M, {
                className: "ghost",
                act: "to-sandbox",
                onClick: async () => {
                  (await p.switchSlot("sandbox"),
                    b.set({ entryId: null, sheet: null }),
                    p.toast("已进入沙盒模式", "green"));
                },
                children: "进入沙盒",
              })
            : r.jsx(M, {
                className: "primary",
                act: "to-main",
                onClick: async () => {
                  (await p.switchSlot("main"),
                    b.set({ entryId: null, sheet: null }),
                    p.toast("已回到正式存档", "green"));
                },
                children: "回到正式存档",
              }),
          p.slot === "sandbox" &&
            r.jsx("div", {
              className: "seg",
              children: re.sandboxSpeeds.map((u) => {
                var m;
                return r.jsxs(
                  "button",
                  {
                    type: "button",
                    className:
                      ((m = o.sandbox) == null ? void 0 : m.speed) === u
                        ? "on"
                        : "",
                    "data-act": "speed-" + u,
                    onClick: () =>
                      p.act(
                        (w) => (
                          w.sandbox && (w.sandbox.speed = u),
                          { ok: !0, events: [] }
                        ),
                      ),
                    children: ["×", u],
                  },
                  u,
                );
              }),
            }),
        ],
      }),
      r.jsx("h4", { children: "其他" }),
      r.jsxs("div", {
        className: "set-acts",
        children: [
          r.jsx(M, {
            className: "ghost",
            act: "replay-onboarding",
            onClick: () => b.set({ sheet: null, onboarding: 1 }),
            children: "重看新手引导",
          }),
          r.jsx(M, {
            className: "ghost danger",
            act: "reset",
            onClick: () =>
              b.ask(
                `重置${p.slot === "sandbox" ? "沙盒" : "正式"}存档？`,
                "日记和庄园都会清空，重新开始。重置前会自动备份，可在上面的备份列表里恢复。",
                "重置",
                async () => {
                  (await p.resetSlot(),
                    b.set({ entryId: null, sheet: null }),
                    l());
                },
                !0,
              ),
            children: "重置存档",
          }),
        ],
      }),
      r.jsxs("p", {
        className: "dim small",
        children: [
          "字里有田 V1.0 Beta · 存储：",
          ((d = p.be) == null ? void 0 : d.kind) === "idb"
            ? "IndexedDB"
            : "内存（无法持久保存！）",
          p.otherTab
            ? " · ⚠ 检测到另一个标签页也打开了本应用，请只在一个页面里编辑"
            : "",
        ],
      }),
    ],
  });
}
function De({ label: o, sub: e, on: t, onChange: s, act: n }) {
  return r.jsxs("label", {
    className: "set-row toggle",
    "data-act": n,
    children: [
      r.jsxs("span", { children: [o, e && r.jsx("small", { children: e })] }),
      r.jsx("input", {
        type: "checkbox",
        checked: t,
        onChange: (i) => s(i.target.checked),
      }),
      r.jsx("i", {}),
    ],
  });
}
function on() {
  F();
  const o = [
    ["日记本", "diary", () => b.open({ kind: "diary" }), Y.sign],
    ["仓库", "warehouse", () => b.open({ kind: "warehouse" }), Y.mailbox],
    ["动物", "animals", () => b.open({ kind: "animals" }), de("chicken").idle],
    ["任务", "quests", () => b.open({ kind: "quests" }), Y.sparkleGold],
    ["图鉴", "codex", () => b.open({ kind: "codex" }), Y.wheat],
    ["商店", "shop", () => b.open({ kind: "shop" }), le("shop", 1, "m")],
    ["设置", "settings", () => b.open({ kind: "settings" }), Y.post],
  ];
  return r.jsx(ee, {
    title: "更多",
    children: r.jsx("div", {
      className: "more-grid",
      children: o.map(([e, t, s, n]) =>
        r.jsxs(
          "button",
          {
            type: "button",
            className: "more-cell",
            onClick: s,
            "data-act": "more-" + t,
            children: [
              r.jsx(S, { s: n, h: 36 }),
              r.jsx("span", { children: e }),
            ],
          },
          t,
        ),
      ),
    }),
  });
}
const at = [
  {
    t: "欢迎来到字里有田",
    d: "这是一本会长出庄园的日记。你写下的每一个字，都在养大一个世界。",
    spr: () => Y.cabin,
  },
  {
    t: "写日记",
    d: "在下方的纸页上写字。写完一段（换行或停一停），小鸡会整理标点，小羊排好间距，奶牛把这段文字搬进上面的庄园。文字本身一个字都不会被改动。",
    spr: () => de("cow").idle,
  },
  {
    t: "墨粒与土地",
    d: "写字会掉下墨粒，小鸡帮你捡起来。文字落进庄园时，周围的纸会长出草地，可以在上面建造和种田。墨粒可以买种子。",
    spr: () => Y.ink,
  },
  {
    t: "经营庄园",
    d: "点底部「庄园」进入农场：种田、收获、喂动物、加工、出售。离开时庄园也会继续慢慢运转。",
    spr: () => Y.wheat,
  },
  {
    t: "你的日记只属于你",
    d: "日记只保存在这台设备上，不会上传，也不会发给任何 AI。记得偶尔在设置里导出备份。没有每日打卡，动物也不会因为你没来而生病。",
    spr: () => Y.heart,
  },
];
function ln() {
  F();
  const o = b.onboarding - 1;
  if (o < 0) return null;
  const e = at[o],
    t = () => {
      (b.set({ onboarding: 0 }), p.be.setMeta("onboarded", 1));
    };
  return r.jsx("div", {
    className: "onboard",
    role: "dialog",
    "aria-label": "新手引导",
    "data-testid": "onboarding",
    children: r.jsxs("div", {
      className: "ob-card",
      children: [
        r.jsx(S, { s: e.spr(), h: 64 }),
        r.jsx("h3", { children: e.t }),
        r.jsx("p", { children: e.d }),
        r.jsx("div", {
          className: "ob-dots",
          children: at.map((s, n) =>
            r.jsx("i", { className: n === o ? "on" : "" }, n),
          ),
        }),
        r.jsxs("div", {
          className: "ob-acts",
          children: [
            r.jsx(M, {
              className: "ghost sm",
              act: "ob-skip",
              onClick: t,
              children: "跳过",
            }),
            o < at.length - 1
              ? r.jsx(M, {
                  className: "primary",
                  act: "ob-next",
                  onClick: () => b.set({ onboarding: b.onboarding + 1 }),
                  children: "下一步",
                })
              : r.jsx(M, {
                  className: "primary",
                  act: "ob-done",
                  onClick: t,
                  children: "开始写吧",
                }),
          ],
        }),
      ],
    }),
  });
}
function rn() {
  F();
  const o = b.confirm;
  if (!o) return null;
  const e = () => b.set({ confirm: null });
  return r.jsx("div", {
    className: "confirm-wrap",
    onPointerDown: (t) => {
      t.target === t.currentTarget && e();
    },
    children: r.jsxs("div", {
      className: "confirm",
      role: "alertdialog",
      "aria-label": o.title,
      children: [
        r.jsx("h3", { children: o.title }),
        r.jsx("p", { children: o.text }),
        r.jsxs("div", {
          className: "ob-acts",
          children: [
            r.jsx(M, {
              className: "ghost",
              act: "confirm-cancel",
              onClick: e,
              children: "取消",
            }),
            r.jsx(M, {
              className: o.danger ? "danger-solid" : "primary",
              act: "confirm-ok",
              onClick: () => {
                (e(), o.onOk());
              },
              children: o.ok,
            }),
          ],
        }),
      ],
    }),
  });
}
function cn() {
  (F(), bt(400));
  const o = performance.now();
  return (
    (p.toasts = p.toasts.filter((e) => o - e.t0 < 3200)),
    r.jsx("div", {
      className: "toasts",
      "aria-live": "polite",
      children: p.toasts.map((e) =>
        r.jsx(
          "div",
          {
            className: `toast ${e.tone}`,
            "data-testid": "toast",
            children: e.text,
          },
          e.id,
        ),
      ),
    })
  );
}
const hn = (o) => (o < 0.5 ? 4 * o * o * o : 1 - Math.pow(-2 * o + 2, 3) / 2),
  ot = (o, e, t) => o + (e - o) * t;
class dn {
  constructor() {
    ((this.x = (D * x) / 2),
      (this.y = 200),
      (this.zoom = 1),
      (this.vw = 400),
      (this.vh = 400),
      (this.minZoom = 0.35),
      (this.maxZoom = 3),
      (this.worldH = 1e3),
      (this.vx = 0),
      (this.vy = 0),
      (this.tw = null));
  }
  get busy() {
    return !!this.tw;
  }
  fitWidthZoom() {
    return this.vw / (D * x + 24);
  }
  to(e, t = 0.8, s = performance.now()) {
    const n = { x: e.x ?? this.x, y: e.y ?? this.y, zoom: e.zoom ?? this.zoom };
    if (t <= 0) {
      ((this.x = n.x),
        (this.y = n.y),
        (this.zoom = n.zoom),
        (this.tw = null),
        this.clamp());
      return;
    }
    ((this.tw = {
      from: { x: this.x, y: this.y, zoom: this.zoom },
      to: n,
      t0: s,
      dur: t * 1e3,
    }),
      (this.vx = this.vy = 0));
  }
  stop() {
    this.tw = null;
  }
  update(e, t = performance.now()) {
    if (this.tw) {
      const s = Math.min(1, (t - this.tw.t0) / this.tw.dur),
        n = hn(s);
      ((this.x = ot(this.tw.from.x, this.tw.to.x, n)),
        (this.y = ot(this.tw.from.y, this.tw.to.y, n)),
        (this.zoom = Math.exp(
          ot(Math.log(this.tw.from.zoom), Math.log(this.tw.to.zoom), n),
        )),
        s >= 1 && (this.tw = null));
    } else if (this.vx || this.vy) {
      ((this.x += this.vx * e), (this.y += this.vy * e));
      const s = Math.pow(0.004, e);
      ((this.vx *= s),
        (this.vy *= s),
        Math.hypot(this.vx, this.vy) < 4 && (this.vx = this.vy = 0));
    }
    this.clamp();
  }
  clamp() {
    this.zoom = Math.min(this.maxZoom, Math.max(this.minZoom, this.zoom));
    const e = D * x,
      t = this.vw / 2 / this.zoom,
      s = this.vh / 2 / this.zoom,
      n = 30;
    t * 2 >= e + n * 2
      ? (this.x = e / 2)
      : (this.x = Math.min(e + n - t, Math.max(-n + t, this.x)));
    const i = -40,
      a = this.worldH + 40;
    s * 2 >= a - i
      ? (this.y = (i + a) / 2)
      : (this.y = Math.min(a - s, Math.max(i + s, this.y)));
  }
  w2s(e, t) {
    return {
      x: (e - this.x) * this.zoom + this.vw / 2,
      y: (t - this.y) * this.zoom + this.vh / 2,
    };
  }
  s2w(e, t) {
    return {
      x: (e - this.vw / 2) / this.zoom + this.x,
      y: (t - this.vh / 2) / this.zoom + this.y,
    };
  }
  zoomAt(e, t, s) {
    const n = this.s2w(e, t);
    this.zoom = Math.min(this.maxZoom, Math.max(this.minZoom, this.zoom * s));
    const i = this.s2w(e, t);
    ((this.x += n.x - i.x),
      (this.y += n.y - i.y),
      (this.tw = null),
      this.clamp());
  }
  view() {
    const e = this.s2w(0, 0),
      t = this.s2w(this.vw, this.vh);
    return { x0: e.x, y0: e.y, x1: t.x, y1: t.y };
  }
}
const us = 2,
  L = x / us,
  Q = 12,
  fn = {
    spring: {
      base: "#d7e8ae",
      light: "#e6f0c4",
      dark: "#c3dc98",
      rim: "#a9cb7f",
      speck: "#bcd78f",
      speck2: "#f6c9d4",
    },
    summer: {
      base: "#cfe4a0",
      light: "#ddebb6",
      dark: "#b8d68a",
      rim: "#9bc06f",
      speck: "#acd07c",
      speck2: "#ffe59a",
    },
    autumn: {
      base: "#e3dfa4",
      light: "#ece8bd",
      dark: "#d4cc8a",
      rim: "#bfb46c",
      speck: "#e9b86a",
      speck2: "#e58f5a",
    },
    winter: {
      base: "#e9eedc",
      light: "#f6f8ee",
      dark: "#d9e2c6",
      rim: "#bcc9a6",
      speck: "#ffffff",
      speck2: "#dfe8ef",
    },
  };
function Bt(o, e, t) {
  const s = Math.floor(o),
    n = Math.floor(e),
    i = o - s,
    a = e - n,
    l = i * i * (3 - 2 * i),
    c = a * a * (3 - 2 * a),
    h = $(s, n, t),
    f = $(s + 1, n, t),
    d = $(s, n + 1, t),
    u = $(s + 1, n + 1, t);
  return h + (f - h) * l + (d - h) * c + (h - f - d + u) * l * c;
}
class un {
  constructor() {
    this.cache = new Map();
  }
  grass(e, t, s) {
    return t < 0 || t >= D || s < 0 || s >= e.rows
      ? !1
      : e.land.charCodeAt(s * D + t) === 103;
  }
  inside(e, t, s) {
    const n = Math.floor(t / L),
      i = Math.floor(s / L),
      a = t - n * L,
      l = s - i * L,
      c = this.grass(e, n, i),
      h = Bt(t / 3.3, s / 3.3, 7);
    if (c) {
      const v = !this.grass(e, n - 1, i),
        g = !this.grass(e, n + 1, i),
        k = !this.grass(e, n, i - 1),
        j = !this.grass(e, n, i + 1),
        A = 3.6 + h * 1.6,
        W = v && a < A ? A - a : g && a > L - 1 - A ? a - (L - 1 - A) : 0,
        C = k && l < A ? A - l : j && l > L - 1 - A ? l - (L - 1 - A) : 0;
      return !(
        (W > 0 && C > 0 && W * W + C * C > A * A) ||
        (Math.min(
          v ? a : 99,
          g ? L - 1 - a : 99,
          k ? l : 99,
          j ? L - 1 - l : 99,
        ) === 0 &&
          h < 0.32)
      );
    }
    const f = this.grass(e, n - 1, i),
      d = this.grass(e, n + 1, i),
      u = this.grass(e, n, i - 1),
      m = this.grass(e, n, i + 1),
      w = (v, g, k, j) => v && g && k * k + j * j < 4;
    return w(f, u, a, l) ||
      w(d, u, L - 1 - a, l) ||
      w(f, m, a, L - 1 - l) ||
      w(d, m, L - 1 - a, L - 1 - l)
      ? !0
      : ((f && a < 1) ||
          (d && a > L - 2) ||
          (u && l < 1) ||
          (m && l > L - 2)) &&
          h > 0.72;
  }
  sig(e, t, s, n) {
    let i = n;
    for (let a = s * Q - 1; a <= (s + 1) * Q; a++) {
      if (a < 0 || a >= e.rows) {
        i += "|";
        continue;
      }
      const l = Math.max(0, t * Q - 1),
        c = Math.min(D, (t + 1) * Q + 1);
      i += e.land.slice(a * D + l, a * D + c);
    }
    return i;
  }
  build(e, t, s, n) {
    const i = Q * L,
      a = Q * L + 2,
      l = document.createElement("canvas");
    ((l.width = i), (l.height = a));
    const c = l.getContext("2d"),
      h = c.createImageData(i, a),
      f = fn[n],
      d = (g) => [
        parseInt(g.slice(1, 3), 16),
        parseInt(g.slice(3, 5), 16),
        parseInt(g.slice(5, 7), 16),
      ],
      u = {
        base: d(f.base),
        light: d(f.light),
        dark: d(f.dark),
        rim: d(f.rim),
        speck: d(f.speck),
        speck2: d(f.speck2),
      },
      m = t * Q * L,
      w = s * Q * L,
      y = (g, k) => this.inside(e, m + g, w + k);
    let v = !1;
    for (let g = 0; g < a; g++)
      for (let k = 0; k < i; k++) {
        const j = (g * i + k) * 4;
        if (y(k, g)) {
          v = !0;
          const A = m + k,
            W = w + g,
            C = !y(k - 1, g) || !y(k + 1, g) || !y(k, g - 1) || !y(k, g + 1);
          let N = u.base;
          const H = Bt(A / 6, W / 6, 11);
          H > 0.64 ? (N = u.light) : H < 0.3 && (N = u.dark);
          const K = $(A, W, 5);
          (K > 0.985
            ? (N = u.speck2)
            : K > 0.955
              ? (N = u.speck)
              : K < 0.02 && (N = u.light),
            !C &&
              K > 0.93 &&
              K < 0.955 &&
              y(k, g - 1) &&
              y(k, g + 1) &&
              (N = u.rim),
            C && (N = u.rim),
            (h.data[j] = N[0]),
            (h.data[j + 1] = N[1]),
            (h.data[j + 2] = N[2]),
            (h.data[j + 3] = 255));
        } else
          (y(k, g - 1) || y(k, g - 2)) &&
            ((h.data[j] = 176),
            (h.data[j + 1] = 150),
            (h.data[j + 2] = 112),
            (h.data[j + 3] = y(k, g - 1) ? 70 : 34));
      }
    return v ? (c.putImageData(h, 0, 0), l) : null;
  }
  draw(e, t, s, n) {
    const i = Q * x,
      a = Math.max(0, Math.floor(s.x0 / i)),
      l = Math.min(Math.ceil(D / Q) - 1, Math.floor(s.x1 / i)),
      c = Math.max(0, Math.floor(s.y0 / i)),
      h = Math.min(Math.ceil(t.rows / Q) - 1, Math.floor(s.y1 / i));
    e.imageSmoothingEnabled = !1;
    for (let f = c; f <= h; f++)
      for (let d = a; d <= l; d++) {
        const u = d + "," + f,
          m = this.sig(t, d, f, n);
        let w = this.cache.get(u);
        ((!w || w.sig !== m) &&
          ((w = { canvas: this.build(t, d, f, n) ?? null, sig: m }),
          this.cache.set(u, w)),
          w.canvas && e.drawImage(w.canvas, d * i, f * i, i, i + 2 * us));
      }
    e.imageSmoothingEnabled = !0;
  }
  invalidate() {
    this.cache.clear();
  }
}
function mn(o = 256) {
  const e = document.createElement("canvas");
  e.width = e.height = o;
  const t = e.getContext("2d"),
    s = t.createImageData(o, o),
    n = (i, a, l, c) => {
      const h = o / c,
        f = Math.floor(i / c),
        d = Math.floor(a / c),
        u = i / c - f,
        m = a / c - d,
        w = u * u * (3 - 2 * u),
        y = m * m * (3 - 2 * m),
        v = (W, C) => $(((W % h) + h) % h, ((C % h) + h) % h, l),
        g = v(f, d),
        k = v(f + 1, d),
        j = v(f, d + 1),
        A = v(f + 1, d + 1);
      return g + (k - g) * w + (j - g) * y + (g - k - j + A) * w * y;
    };
  for (let i = 0; i < o; i++)
    for (let a = 0; a < o; a++) {
      const l =
          (n(a, i, 1, 64) - 0.5) * 6 +
          (n(a, i, 2, 16) - 0.5) * 3.5 +
          ($(a, i, 3) - 0.5) * 4.5,
        c = (i * o + a) * 4;
      ((s.data[c] = 251 + l),
        (s.data[c + 1] = 247 + l * 0.96),
        (s.data[c + 2] = 237 + l * 0.85),
        (s.data[c + 3] = 255));
    }
  t.putImageData(s, 0, 0);
  for (let i = 0; i < 160; i++) {
    const a = $(i, "fx") * o,
      l = $(i, "fy") * o,
      c = $(i, "fa") * 6.28,
      h = 4 + $(i, "fl") * 12;
    ((t.strokeStyle =
      $(i, "fc") < 0.5 ? "rgba(160,130,90,0.07)" : "rgba(255,255,255,0.35)"),
      (t.lineWidth = 0.8));
    for (const f of [0, -o, o])
      for (const d of [0, -o, o])
        (t.beginPath(),
          t.moveTo(a + f, l + d),
          t.lineTo(a + f + Math.cos(c) * h, l + d + Math.sin(c) * h),
          t.stroke());
  }
  return e;
}
const Rt = {
  chicken: 34,
  duck: 30,
  cow: 22,
  sheep: 24,
  goat: 28,
  pig: 24,
  rabbit: 40,
  bee: 30,
};
class pn {
  constructor() {
    ((this.list = []),
      (this.grid = null),
      (this.gridKey = ""),
      (this.rows = 0));
  }
  refreshGrid(e) {
    const t =
      e.land.length +
      ":" +
      Object.keys(e.objects).length +
      ":" +
      Object.values(e.objects)
        .map((s) => s.x * 97 + s.y)
        .join(",") +
      ":" +
      Object.values(e.blocks)
        .map((s) => `${s.x},${s.y},${s.w},${s.h},${s.hidden}`)
        .join(";");
    if (t !== this.gridKey) {
      ((this.gridKey = t), (this.grid = Ls(e)), (this.rows = e.rows));
      for (const s of this.list)
        s.kind !== "bee" &&
          !s.helper &&
          !this.free(s.x, s.y) &&
          this.snapFree(s);
    }
  }
  free(e, t) {
    if (!this.grid) return !1;
    const s = Math.floor(e / x),
      n = Math.floor(t / x);
    return s < 0 || n < 0 || s >= D || n >= this.rows
      ? !1
      : this.grid[n * D + s] === 1;
  }
  snapFree(e) {
    const t = Math.floor(e.x / x),
      s = Math.floor(e.y / x);
    for (let n = 1; n < 12; n++)
      for (let i = -n; i <= n; i++)
        for (let a = -n; a <= n; a++) {
          const l = Gs(t + a, s + i);
          if (this.free(l.x, l.y)) {
            ((e.x = l.x), (e.y = l.y + 4), (e.path = []));
            return;
          }
        }
  }
  sync(e, t) {
    const s = new Set(Object.keys(e.animals));
    this.list = this.list.filter(
      (n) => n.helper || (n.animalId && s.has(n.animalId)),
    );
    for (const n of Object.values(e.animals)) {
      if (this.list.some((c) => c.animalId === n.id)) continue;
      const i = e.objects[n.home],
        a = i ? pt(i) : { x: 100, y: 100 },
        l = {
          id: "act_" + n.id,
          kind: n.kind,
          animalId: n.id,
          x: a.x + ($(n.id, "x") - 0.5) * 20,
          y: a.y + 6 + $(n.id, "y") * 10,
          facing: $(n.id) < 0.5 ? 1 : -1,
          mode: "idle",
          modeT0: t,
          modeDur: 0.5 + $(n.id, "d") * 2,
          path: [],
          speed: Rt[n.kind] ?? 30,
          walkDist: 0,
          seed: $(n.id, "s") * 100,
          jumpT: -99,
        };
      this.list.push(l);
    }
  }
  ensureHelpers(e, t) {
    for (const s of ["chicken", "sheep", "cow"])
      this.list.some((n) => n.helper === s) ||
        this.list.push({
          id: "helper_" + s,
          kind: s,
          helper: s,
          x: t.x + (s === "chicken" ? -40 : s === "sheep" ? 0 : 50),
          y: t.y,
          facing: 1,
          mode: "idle",
          modeT0: e,
          modeDur: 2,
          path: [],
          speed: s === "chicken" ? 70 : s === "sheep" ? 60 : 55,
          walkDist: 0,
          seed: s.length * 13,
          jumpT: -99,
        });
  }
  helper(e) {
    return this.list.find((t) => t.helper === e);
  }
  walkTo(e, t, s, n, i, a = performance.now() / 1e3) {
    ((e.path = [{ x: t, y: s }]),
      (e.speed = n),
      (e.onArrive = i),
      (e.mode = "go"),
      (e.modeT0 = a));
  }
  update(e, t, s, n) {
    for (const i of this.list) {
      if (i.path.length) {
        const a = i.path[0],
          l = a.x - i.x,
          c = a.y - i.y,
          h = Math.hypot(l, c),
          f = i.speed * t;
        if (Math.abs(l) > 0.5) {
          const d = l > 0 ? 1 : -1;
          d !== i.facing &&
            ((i.prevFacing = i.facing), (i.turnT = s), (i.facing = d));
        }
        if (h <= f) {
          if (
            ((i.x = a.x),
            (i.y = a.y),
            (i.walkDist += h),
            i.path.shift(),
            !i.path.length)
          ) {
            const d = i.onArrive;
            ((i.onArrive = void 0),
              (i.mode = "idle"),
              (i.modeT0 = s),
              (i.modeDur = 0.6 + $(i.seed, s) * 2),
              d == null || d());
          }
        } else ((i.x += (l / h) * f), (i.y += (c / h) * f), (i.walkDist += f));
        continue;
      }
      i.helper || s - i.modeT0 < i.modeDur || this.think(e, i, s, n);
    }
  }
  think(e, t, s, n) {
    var m;
    const i = t.animalId ? e.animals[t.animalId] : void 0;
    if (!i) return;
    const a = e.objects[i.home];
    if (!a) return;
    const l = $(t.seed, Math.floor(s * 10));
    if (t.kind === "bee") {
      const w = xn(a),
        y = l * Math.PI * 2;
      ((t.path = [
        {
          x: w.x + Math.cos(y) * (30 + l * 60),
          y: w.y + Math.sin(y) * (20 + l * 40),
        },
      ]),
        (t.speed = 26 + l * 20),
        (t.mode = "go"),
        (t.modeT0 = s));
      return;
    }
    const c =
      i.meals <= 0 &&
      ((m = E[a.def]) == null ? void 0 : m.cat) === "animal" &&
      i.kind !== "bee";
    if (n && l < 0.6) {
      ((t.mode = "sleep"), (t.modeT0 = s), (t.modeDur = 6 + l * 6));
      return;
    }
    if (l < 0.25) {
      ((t.mode = c ? "idle" : "eat"),
        (t.modeT0 = s),
        (t.modeDur = 1.2 + l * 2));
      return;
    }
    if (l < 0.35) {
      ((t.mode = "idle"), (t.modeT0 = s), (t.modeDur = 1 + l * 3));
      return;
    }
    const h = pt(a),
      f = 5,
      d = Math.floor(h.x / x),
      u = Math.floor(h.y / x);
    for (let w = 0; w < 6; w++) {
      const y = d + Math.round(($(t.seed, s, w, "x") - 0.5) * f * 2),
        v = u + Math.round($(t.seed, s, w, "y") * f),
        g = Math.floor(t.x / x),
        k = Math.floor(t.y / x);
      if (!this.grid || !this.free(y * x + 9, v * x + 9)) continue;
      const j = os(this.grid, this.rows, g, k, y, v, 600);
      if (!(!j || !j.length || j.length > 14)) {
        ((t.path = j.map(([A, W]) => ({
          x: A * x + 9 + ($(t.seed, A, W) - 0.5) * 8,
          y: W * x + 11 + ($(t.seed, W, A) - 0.5) * 6,
        }))),
          (t.speed = Rt[t.kind] ?? 30),
          (t.mode = "wander"),
          (t.modeT0 = s));
        return;
      }
    }
    ((t.mode = "idle"), (t.modeT0 = s), (t.modeDur = 1.5));
  }
}
function pt(o) {
  const e = E[o.def],
    t = O(o),
    s = e.door ?? [Math.floor(t.w / 2), t.h - 1];
  return { x: (t.x + s[0]) * x + x / 2, y: (t.y + t.h) * x + 6 };
}
function xn(o) {
  const e = O(o);
  return { x: (e.x + e.w / 2) * x, y: (e.y + e.h / 2) * x };
}
const Ft = (o) => 1 - Math.pow(1 - o, 3),
  Lt = (o) => 1 + (2.2 + 1) * Math.pow(o - 1, 3) + 2.2 * Math.pow(o - 1, 2);
let lt = 1;
const bn = () => ((lt = (lt * 16807) % 2147483647), (lt - 1) / 2147483646),
  R = (o, e) => o + (e - o) * bn();
class gn {
  constructor() {
    ((this.list = []), (this.reduce = !1));
  }
  add(e) {
    (this.reduce && e.kind !== "text") ||
      (this.list.push({
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
        delay: 0,
        ...e,
      }),
      this.list.length > 600 && this.list.splice(0, this.list.length - 600));
  }
  dust(e, t, s = 6, n = "#efe5d2", i = 26, a = 4) {
    for (let l = 0; l < s; l++) {
      const c = R(Math.PI * 1.05, Math.PI * 1.95),
        h = R(0.4, 1) * i;
      this.add({
        kind: "dust",
        x: e + R(-6, 6),
        y: t + R(-2, 2),
        vx: Math.cos(c) * h * 1.6,
        vy: Math.sin(c) * h * 0.7,
        drag: 0.05,
        life: R(0.5, 0.9),
        size: R(a * 0.6, a * 1.2),
        color: n,
      });
    }
  }
  sparks(e, t, s, n = 6, i = 34, a = 1) {
    for (let l = 0; l < n; l++) {
      const c = (l / n) * Math.PI * 2 + R(-0.3, 0.3),
        h = R(0.5, 1) * i;
      this.add({
        kind: "sprite",
        sprite: s,
        x: e,
        y: t,
        vx: Math.cos(c) * h,
        vy: Math.sin(c) * h - 10 * a,
        drag: 0.08,
        life: R(0.45, 0.8),
        size: R(0.7, 1.1) * a,
      });
    }
  }
  burst(e, t, s, n = 5) {
    for (let i = 0; i < n; i++)
      this.add({
        kind: "sprite",
        sprite: s,
        x: e + R(-8, 8),
        y: t,
        vx: R(-50, 50),
        vy: R(-120, -60),
        g: 320,
        drag: 0.6,
        life: 0.8,
        size: 1,
        rot: R(0, 6),
        vr: R(-8, 8),
      });
  }
  confetti(e, t, s = 30, n = 170) {
    const i = [
      "#f39bb0",
      "#ffd36b",
      "#9ccf6e",
      "#8fc6e8",
      "#f6a57a",
      "#c7a6f0",
      "#fff4dc",
    ];
    for (let a = 0; a < s; a++) {
      const l = R(Math.PI * 1.1, Math.PI * 1.9),
        c = R(0.4, 1) * n;
      this.add({
        kind: "confetti",
        x: e,
        y: t,
        vx: Math.cos(l) * c,
        vy: Math.sin(l) * c,
        g: 230,
        drag: 0.25,
        life: R(1.1, 1.8),
        size: R(2.5, 4.5),
        rot: R(0, 6),
        vr: R(-10, 10),
        color: i[a % i.length],
      });
    }
  }
  ring(e, t, s = 40, n = "#fff3c4", i = 0.6) {
    this.add({ kind: "ring", x: e, y: t, size: s, color: n, life: i });
  }
  glow(e, t, s = 60, n = 1) {
    this.add({ kind: "glow", x: e, y: t, size: s, life: n });
  }
  text(e, t, s, n = "#7a5a2a", i = 12, a, l = 1.3) {
    this.list.push({
      kind: "text",
      x: t,
      y: s,
      vx: 0,
      vy: 0,
      g: 0,
      drag: 1,
      life: l,
      age: 0,
      size: i,
      rot: 0,
      vr: 0,
      color: n,
      text: e,
      sprite: a,
      delay: 0,
    });
  }
  update(e) {
    for (const t of this.list) {
      if (t.delay > 0) {
        t.delay -= e;
        continue;
      }
      ((t.age += e), (t.vy += t.g * e));
      const s = Math.pow(t.drag, e);
      ((t.vx *= s),
        (t.vy *= s),
        (t.x += t.vx * e),
        (t.y += t.vy * e),
        (t.rot += t.vr * e));
    }
    this.list = this.list.filter((t) => t.age < t.life);
  }
  draw(e, t) {
    for (const s of this.list) {
      if (s.delay > 0) continue;
      const n = s.age / s.life;
      switch ((e.save(), s.kind)) {
        case "dust":
          ((e.globalAlpha = (1 - n) * 0.85),
            (e.fillStyle = s.color),
            e.beginPath(),
            e.arc(s.x, s.y, s.size * (0.6 + n * 0.9), 0, Math.PI * 2),
            e.fill());
          break;
        case "sprite": {
          if (!s.sprite) break;
          const i =
            s.size * (n < 0.2 ? Lt(n / 0.2) : 1 - ((n - 0.2) / 0.8) * 0.5);
          G(e, s.sprite, s.x, s.y, {
            sx: i,
            sy: i,
            rot: s.rot,
            alpha: n > 0.6 ? (1 - n) / 0.4 : 1,
          });
          break;
        }
        case "confetti":
          ((e.globalAlpha = n > 0.75 ? (1 - n) / 0.25 : 1),
            e.translate(s.x, s.y),
            e.rotate(s.rot),
            e.scale(1, Math.cos(s.age * 9 + s.rot)),
            (e.fillStyle = s.color),
            e.fillRect(-s.size / 2, -s.size / 3, s.size, s.size * 0.66));
          break;
        case "ring": {
          const i = Ft(n);
          ((e.globalAlpha = (1 - n) * 0.9),
            (e.strokeStyle = s.color),
            (e.lineWidth = 3 * (1 - n) + 0.6),
            e.beginPath(),
            e.ellipse(
              s.x,
              s.y,
              s.size * i,
              s.size * i * 0.55,
              0,
              0,
              Math.PI * 2,
            ),
            e.stroke());
          break;
        }
        case "glow": {
          const i = Math.sin(Math.PI * n),
            a = e.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size);
          (a.addColorStop(0, `rgba(255,230,150,${(0.55 * i).toFixed(3)})`),
            a.addColorStop(1, "rgba(255,230,150,0)"),
            (e.fillStyle = a),
            e.fillRect(s.x - s.size, s.y - s.size, s.size * 2, s.size * 2));
          break;
        }
        case "text": {
          const i = Ft(Math.min(1, n * 1.4)) * 20,
            a = n < 0.12 ? n / 0.12 : n > 0.7 ? (1 - n) / 0.3 : 1,
            l = n < 0.18 ? Lt(n / 0.18) : 1;
          ((e.globalAlpha = Math.max(0, Math.min(1, a))),
            e.translate(s.x, s.y - i),
            e.scale(l, l),
            (e.font = `700 ${s.size}px ${t}`),
            (e.textAlign = "center"),
            (e.textBaseline = "middle"));
          let c = 0;
          if (s.sprite) {
            const h = e.measureText(s.text).width;
            (G(
              e,
              s.sprite,
              -h / 2 - 2,
              s.sprite.h - s.sprite.ay - s.sprite.h / 2 + 0,
              { sx: 0.8, sy: 0.8 },
            ),
              (c = s.sprite.w * 0.8));
          }
          ((e.lineJoin = "round"),
            (e.lineWidth = 4),
            (e.strokeStyle = "#fffaf0"),
            e.strokeText(s.text, c, 0),
            (e.fillStyle = s.color),
            e.fillText(s.text, c, 0));
          break;
        }
      }
      e.restore();
    }
  }
}
const rt = D * x,
  Ne = (o) => (o < 0 ? 0 : o > 1 ? 1 : o),
  ct = (o) => (o < 0.5 ? 4 * o * o * o : 1 - Math.pow(-2 * o + 2, 3) / 2),
  Pe = {
    chicken: {
      speed: 62,
      rush: 190,
      idle: [0.5, 1.7],
      trip: 0.08,
      base: 1,
      name: "小鸡",
      role: "捡墨粒、整理标点",
    },
    sheep: {
      speed: 30,
      rush: 120,
      idle: [1.8, 4.2],
      trip: 0.06,
      base: 0.95,
      name: "绵羊",
      role: "把段落理整齐",
    },
    cow: {
      speed: 26,
      rush: 95,
      idle: [2.6, 5.2],
      trip: 0.1,
      base: 0.9,
      name: "奶牛",
      role: "把整理好的段落搬进庄园",
    },
  };
class yn {
  constructor(e) {
    ((this.bridge = null),
      (this.grains = []),
      (this.jobs = []),
      (this.lastTypeT = -99),
      (this.after = new Map()),
      (this.lastSheet = -1),
      (this.lastScan = 0),
      (this.gridKey = ""),
      (this.grid = null),
      (this.crumbT = 0),
      (this.view = e));
  }
  get t() {
    return this.view.t;
  }
  get u() {
    return 1 / this.view.writeZoom();
  }
  get S() {
    return this.view.sheetScale();
  }
  scaleAt(e) {
    const t = this.view.sheetTop(),
      s = Ne((e - (t - 7 * x)) / (7 * x));
    return 1 + (this.S - 1) * s;
  }
  onSheet(e) {
    return e >= this.view.sheetTop() - x;
  }
  helper(e) {
    return this.view.actors.list.find((t) => t.helper === e);
  }
  helpers() {
    return this.view.actors.list.filter((e) => e.helper);
  }
  zone() {
    var l;
    const e = this.view,
      t = this.u,
      s = e.sheetTop();
    let n = s + 118 * t,
      i = s + 640 * t;
    const a = (l = this.bridge) == null ? void 0 : l.ta;
    if (this.bridge && a != null && a.isConnected) {
      const c = e.cam.s2w(0, this.bridge.contentBottom(e.canvas)).y;
      n = Math.max(n, c + 16 * t);
      const h = a.getBoundingClientRect(),
        f = e.canvas.getBoundingClientRect();
      i = e.cam.s2w(0, Math.min(h.bottom, f.bottom) - f.top).y - 14 * t;
    }
    return (
      i - n < 46 * t && (n = i - 46 * t),
      { x0: 30 * t, x1: rt - 30 * t, y0: n, y1: i }
    );
  }
  ensure() {
    if (this.view.actors.list.some((s) => s.helper)) return;
    const e = this.zone(),
      t = (s, n, i) => ({
        id: "helper_" + s,
        kind: s,
        helper: s,
        x: e.x0 + (e.x1 - e.x0) * n,
        y: e.y0 + (e.y1 - e.y0) * i,
        facing: n < 0.5 ? 1 : -1,
        mode: "idle",
        modeT0: this.t,
        modeDur: 0.5 + n,
        path: [],
        speed: 30,
        walkDist: n * 40,
        seed: s.length * 13 + 7,
        jumpT: -99,
      });
    this.view.actors.list.push(
      t("chicken", 0.22, 0.25),
      t("sheep", 0.62, 0.55),
      t("cow", 0.86, 0.35),
    );
  }
  update(e) {
    if (!p.s) return;
    this.ensure();
    const s = this.view.sheetTop();
    (this.lastSheet >= 0 &&
      s !== this.lastSheet &&
      this.shift(s - this.lastSheet, this.lastSheet),
      (this.lastSheet = s));
    for (const n of this.helpers()) {
      const i = Pe[n.helper],
        a = n.rush,
        l = n.fixedSpeed;
      n.speed =
        l ?? (a ? i.rush : i.speed) * this.u * (this.scaleAt(n.y) / this.S);
    }
    for (const [n, i] of [...this.after])
      this.t >= i.t && (this.after.delete(n), i.fn());
    (this.updateGrains(e),
      b.mode === "write" &&
        this.t - this.lastScan > 0.35 &&
        ((this.lastScan = this.t), this.scan()),
      this.updateJobs(e));
    for (const n of this.helpers())
      !n.path.length &&
        !this.after.has(n) &&
        !this.busy(n) &&
        this.t - n.modeT0 >= n.modeDur &&
        this.think(n);
  }
  shift(e, t) {
    const s = (n) => n >= t - x;
    for (const n of this.helpers())
      if ((s(n.y) && (n.y += e), !n.anchored))
        for (const i of n.path) s(i.y) && (i.y += e);
    for (const n of this.grains) s(n.y) && ((n.y += e), (n.landY += e));
    for (const n of this.jobs) {
      if (s(n.rect.y)) {
        n.rect.y += e;
        for (const i of n.src) i.y += e;
      }
      n.card && s(n.card.y) && (n.card.y += e);
    }
  }
  busy(e) {
    const t = this.jobs[0];
    return t
      ? e.helper === "chicken"
        ? t.phase === "punct"
        : e.helper === "sheep"
          ? t.phase === "arrange"
          : e.helper === "cow"
            ? t.cowStarted && t.phase !== "done"
            : !1
      : !1;
  }
  go(e, t, s, n, i = !1) {
    ((e.rush = i),
      (e.path = this.route(e.x, e.y, t, s)),
      (e.onArrive = () => {
        ((e.rush = !1), n == null || n());
      }),
      (e.mode = "go"),
      (e.modeT0 = this.t));
  }
  helperGrid() {
    const e = p.s,
      t =
        e.rows +
        ":" +
        Object.values(e.objects)
          .map((s) => `${s.def}${s.x},${s.y}`)
          .join(";") +
        ":" +
        Object.values(e.blocks)
          .map((s) => `${s.x},${s.y},${s.w},${s.h},${s.hidden}`)
          .join(";");
    if (t !== this.gridKey || !this.grid) {
      this.gridKey = t;
      const s = new Uint8Array(D * e.rows).fill(1),
        n = (i) => {
          for (let a = i.y; a < i.y + i.h; a++)
            for (let l = i.x; l < i.x + i.w; l++)
              l >= 0 && l < D && a >= 0 && a < e.rows && (s[a * D + l] = 0);
        };
      for (const i of Object.values(e.blocks)) i.hidden || n(Ke(i));
      for (const i of Object.values(e.objects)) i.def !== "path" && n(O(i));
      this.grid = s;
    }
    return this.grid;
  }
  route(e, t, s, n) {
    const a = this.view.sheetTop() - x * 1.5,
      l = this.onSheet(t),
      c = this.onSheet(n);
    if (l && c) return [{ x: s, y: n }];
    const h = [];
    let f = e,
      d = t;
    l && (h.push({ x: e, y: a }), (d = a));
    const u = s,
      m = c ? a : n,
      w = this.helperGrid(),
      y = p.s.rows,
      v = (k) => Math.max(0, Math.floor(k / x)),
      g = os(
        w,
        y,
        Math.min(D - 1, v(f)),
        Math.min(y - 1, v(d)),
        Math.min(D - 1, v(u)),
        Math.min(y - 1, v(m)),
        2500,
      );
    if (g && g.length)
      for (let k = 0; k < g.length; k++) {
        const [j, A] = g[k],
          W = g[k - 1],
          C = g[k + 1];
        (!W ||
          !C ||
          W[0] - j !== j - C[0] ||
          W[1] - A !== A - C[1] ||
          k % 2 === 0) &&
          h.push({ x: j * x + x / 2, y: A * x + x / 2 + 3 });
      }
    return (h.push({ x: u, y: m }), c && h.push({ x: s, y: n }), h);
  }
  spotNear(e, t, s, n, i) {
    const a = this.zone();
    let l = { x: t, y: s };
    for (let c = 0; c < 6; c++) {
      const h = Math.max(
          a.x0,
          Math.min(a.x1, t + (Math.random() - 0.5) * 2 * n),
        ),
        f = Math.max(a.y0, Math.min(a.y1, s + (Math.random() - 0.5) * 2 * i));
      if (
        ((l = { x: h, y: f }),
        !this.helpers().some((u) => {
          var m, w;
          return (
            u !== e &&
            Math.hypot(
              (((m = u.path[u.path.length - 1]) == null ? void 0 : m.x) ??
                u.x) - h,
              (((w = u.path[u.path.length - 1]) == null ? void 0 : w.y) ??
                u.y) - f,
            ) <
              40 * this.u
          );
        }))
      )
        break;
    }
    return l;
  }
  farmSpot(e) {
    const t = p.s,
      s = this.helperGrid(),
      n = Math.floor(this.view.sheetTop() / x),
      i = [];
    for (let c = Math.max(1, n - 26); c < n - 2; c++)
      for (let h = 1; h < D - 1; h++)
        s[c * D + h] && t.land[c * D + h] === "g" && i.push([h, c]);
    if (!i.length) return null;
    i.sort(
      (c, h) =>
        Math.abs(c[0] * x - e.x) -
        Math.abs(h[0] * x - e.x) +
        ($(c[0], c[1], e.seed) - $(h[0], h[1], e.seed)) * 300,
    );
    const [a, l] = i[Math.floor(Math.random() * Math.min(12, i.length))];
    return { x: a * x + x / 2, y: l * x + x / 2 + 3 };
  }
  act(e, t, s, n) {
    ((e.path = []),
      (e.mode = t),
      (e.modeT0 = this.t),
      (e.modeDur = s),
      n && this.after.set(e, { t: this.t + s, fn: n }));
  }
  face(e, t) {
    const s = t >= e.x ? 1 : -1;
    s !== e.facing &&
      ((e.prevFacing = e.facing), (e.turnT = this.t), (e.facing = s));
  }
  think(e) {
    const t = e.helper,
      s = Pe[t],
      n = this.u,
      i = Math.random(),
      a = b.mode === "farm",
      l = () => s.idle[0] + Math.random() * (s.idle[1] - s.idle[0]),
      c = this.zone();
    if (!this.onSheet(e.y)) {
      if (i < 0.35) {
        this.act(e, "eat", t === "chicken" ? 0.7 : 1.8);
        return;
      }
      if (i < 0.55 && a) {
        const u = this.farmSpot(e);
        if (u) {
          this.go(e, u.x, u.y);
          return;
        }
      }
      const d = this.spotNear(
        e,
        e.x,
        (c.y0 + c.y1) / 2,
        120 * n,
        (c.y1 - c.y0) / 2,
      );
      this.go(e, d.x, d.y);
      return;
    }
    if ((a || this.t - this.lastTypeT > 45) && i < s.trip * (a ? 2.5 : 1)) {
      const d = this.farmSpot(e);
      if (d) {
        this.go(e, d.x, d.y);
        return;
      }
    }
    const f = b.mode === "write" && this.t - this.lastTypeT < 1.5;
    if (t === "chicken") {
      if (i < 0.5) {
        const d = this.spotNear(e, e.x, e.y, 70 * n, 26 * n);
        this.go(e, d.x, d.y);
        return;
      }
      if (i < 0.78) {
        (this.act(e, "eat", 0.55 + Math.random() * 0.5),
          Math.random() < 0.4 && T("peck", 0.4));
        return;
      }
      if (i < 0.9) {
        (this.face(e, e.x - e.facing), this.act(e, "idle", 0.6));
        return;
      }
      this.act(e, "idle", l());
      return;
    }
    if (t === "sheep") {
      if (i < 0.55) {
        const d = f
            ? e.y
            : Math.max(
                c.y0,
                Math.min(
                  c.y1,
                  e.y +
                    (Math.random() < 0.3
                      ? (Math.random() < 0.5 ? -32 : 32) * n
                      : 0),
                ),
              ),
          u = Math.max(
            c.x0,
            Math.min(
              c.x1,
              e.x +
                (Math.random() < 0.5 ? -1 : 1) * (40 + Math.random() * 110) * n,
            ),
          );
        this.go(e, u, d);
        return;
      }
      if (i < 0.85) {
        this.act(e, "eat", 1.6 + Math.random() * 1.4);
        return;
      }
      this.act(e, "idle", l());
      return;
    }
    if (i < 0.45) {
      const d = Math.random() < 0.5 ? c.x0 + 10 * n : c.x1 - 10 * n,
        u = this.spotNear(e, d, e.y, 30 * n, 60 * n);
      this.go(e, u.x, u.y);
      return;
    }
    if (i < 0.8) {
      this.act(e, "eat", 2 + Math.random() * 1.5);
      return;
    }
    this.act(e, "idle", l());
  }
  poke(e) {
    ((e.jumpT = this.t),
      T(e.helper ?? e.kind),
      this.view.fx.add({
        kind: "sprite",
        sprite: V().heart,
        x: e.x,
        y: e.y - 26 * this.scaleAt(e.y),
        vy: -30 * this.scaleAt(e.y),
        life: 1.1,
        size: 0.8 * this.scaleAt(e.y),
      }),
      !this.busy(e) && !e.path.length && this.act(e, "happy", 0.8),
      e.helper &&
        !e.introduced &&
        ((e.introduced = !0),
        p.toast(`${Pe[e.helper].name}：负责${Pe[e.helper].role}`, "plain")));
  }
  hit(e, t) {
    const s = this.view.cam.s2w(e, t);
    for (const n of this.helpers()) {
      const i = this.scaleAt(n.y),
        a = (n.helper === "cow" ? 30 : n.helper === "sheep" ? 24 : 20) * i;
      if (Math.abs(s.x - n.x) < a * 0.7 && s.y < n.y + 4 * i && s.y > n.y - a)
        return n;
    }
    return null;
  }
  dropGrains(e) {
    const t = this.view,
      s = this.bridge;
    if (((this.lastTypeT = this.t), !s || !s.ta.isConnected)) {
      (et(p.s, e), p.changed(!0));
      return;
    }
    const n = s.caret(t.canvas),
      i = t.cam.s2w(n.x, n.y),
      a = this.u,
      l = this.zone(),
      c = Math.min(e, 8);
    for (let h = 0; h < c; h++)
      this.grains.push({
        x: i.x,
        y: i.y - 6 * a,
        vx: (Math.random() - 0.5) * 120 * a,
        vy: (-150 - Math.random() * 70) * a,
        landY: Math.min(
          l.y1,
          l.y0 + Math.random() * Math.min(60 * a, l.y1 - l.y0),
        ),
        landed: !1,
        t0: this.t,
        claimed: !1,
        gone: !1,
      });
    (e > c && (et(p.s, e - c), p.changed(!0)),
      t.fx.sparks(i.x, i.y - 6 * a, V().sparkleGold, 5, 26 * a, this.S * 0.8),
      T("grain"));
  }
  updateGrains(e) {
    const t = this.u;
    for (const n of this.grains)
      n.gone ||
        n.landed ||
        ((n.vy += 520 * t * e),
        (n.x = Math.max(24 * t, Math.min(rt - 24 * t, n.x + n.vx * e))),
        (n.y += n.vy * e),
        n.vy > 0 &&
          n.y >= n.landY &&
          (n.vy > 140 * t
            ? ((n.vy *= -0.3), (n.vx *= 0.5), (n.y = n.landY))
            : ((n.y = n.landY), (n.landed = !0), (n.t0 = this.t))));
    const s = this.helper("chicken");
    if (s && !s.path.length && !this.after.has(s) && !this.busy(s)) {
      let n = null,
        i = 1e9;
      for (const a of this.grains)
        if (!a.gone && a.landed && !a.claimed) {
          const l = Math.hypot(a.x - s.x, a.y - s.y);
          l < i && ((i = l), (n = a));
        }
      if (n) {
        const a = n;
        ((a.claimed = !0),
          this.face(s, a.x),
          (s.jumpT = this.t),
          this.act(s, "idle", 0.18, () => {
            const l = s.x < a.x ? -1 : 1;
            this.go(
              s,
              a.x + l * 10 * t,
              a.y + 1 * t,
              () => {
                (this.face(s, a.x),
                  this.act(s, "eat", 0.36, () => this.collect(a, s)),
                  T("peck", 0.6));
              },
              !0,
            );
          }));
      }
    }
    this.grains = this.grains.filter((n) => !n.gone);
  }
  collect(e, t) {
    var i;
    e.gone = !0;
    const s = this.view,
      n = this.scaleAt(e.y);
    if (
      (s.fx.sparks(e.x, e.y - 4 * n, V().sparkle, 4, 18 * n, n * 0.8),
      et(p.s, 1))
    ) {
      p.changed(!0);
      const a = s.cam.w2s(e.x, e.y - 4 * n);
      ((i = s.flyHook) == null || i.call(s, V().ink, a, "ink"), T("collect"));
    }
    (Math.random() < 0.4 &&
      s.fx.add({
        kind: "sprite",
        sprite: V().heart,
        x: t.x,
        y: t.y - 22 * n,
        vy: -26 * n,
        life: 1,
        size: 0.7 * n,
      }),
      Math.random() < 0.3 && T("chicken", 0.5));
  }
  scan() {
    const e = this.bridge,
      t = b.entryId ? p.entries.get(b.entryId) : null;
    if (!e || !t || !e.ta.isConnected || !p.s.settings.autoTidy) return;
    const s = e.snapshot();
    if (s.text !== t.text) return;
    const n = new Set(this.jobs.map((a) => a.blockId)),
      i = Hs({ ...s, paraIds: t.paraIds }, (a) => {
        var l, c, h;
        return n.has(a)
          ? ls(
              ((l = t.text.split(`
`)[t.paraIds.indexOf(a)]) == null
                ? void 0
                : l.trim()) ?? "",
            )
          : ((c = p.s.blocks[a]) != null && c.hidden) ||
              (h = p.s.blocks[a]) == null
            ? void 0
            : h.hash;
      });
    for (const a of i) this.startTidy(t.id, a);
  }
  startTidy(e, t) {
    var k;
    const s = p.entries.get(e);
    if (!s) return;
    const n = s.paraIds[t],
      i = !p.s.blocks[n];
    if (!p.tidy(e, t).ok || !p.s.blocks[n]) return;
    const c = this.view;
    if (
      !(
        !!((k = this.bridge) != null && k.ta.isConnected) &&
        !p.s.settings.reduceMotion &&
        this.jobs.length < 3 &&
        !this.jobs.some((j) => j.blockId === n)
      )
    ) {
      this.jobs.some((j) => j.blockId === n) || c.blockAppear.set(n, c.t);
      return;
    }
    const f = this.bridge
      .glyphs(c.canvas, t)
      .filter((j) => j.ch.trim())
      .map((j) => {
        const A = c.cam.s2w(j.x, j.y);
        return { ch: j.ch, x: A.x, y: A.y };
      });
    if (!f.length) {
      c.blockAppear.set(n, c.t);
      return;
    }
    const d = this.u,
      u = 32 * d,
      m = f.map((j) => j.x),
      w = f.map((j) => j.y),
      y = {
        x: Math.min(...m) - 12 * d,
        y: Math.min(...w) - u / 2 - 2 * d,
        w: Math.max(...m) - Math.min(...m) + 24 * d,
        h: Math.max(...w) - Math.min(...w) + u + 4 * d,
      };
    c.incoming.add(n);
    const v = c.reveals[c.reveals.length - 1];
    (v && c.t - v.t0 < 0.05 && (v.hold = n), c.sheetHold.add(n));
    const g = f
      .map((j, A) => (_s(j.ch) ? A : -1))
      .filter((j) => j >= 0)
      .slice(0, 2);
    (this.jobs.push({
      blockId: n,
      entryId: e,
      src: f,
      rect: y,
      punct: g,
      pi: 0,
      phase: g.length ? "punct" : "arrange",
      t0: this.t,
      start: this.t,
      wait: !1,
      sweep: 0,
      sparked: new Set(),
      sheepStarted: !1,
      cowStarted: !1,
      card: null,
      dist0: 1,
      settleFrom: null,
    }),
      i && T("pop"));
  }
  updateJobs(e) {
    const t = this.jobs[0];
    if (!t) return;
    const s = this.u,
      n = this.helper("chicken"),
      i = this.helper("sheep"),
      a = this.helper("cow"),
      l = this.view,
      c = t.rect;
    if (this.t - t.start > 28) {
      this.finish(t, !0);
      return;
    }
    const h = c.y + c.h + 2 * s;
    if (t.phase === "punct") {
      if (!t.wait && !n.path.length && !this.after.has(n)) {
        if (t.pi >= t.punct.length) {
          ((t.phase = "arrange"), (t.t0 = this.t));
          return;
        }
        const f = t.src[t.punct[t.pi]];
        t.wait = !0;
        const d = n.x < f.x ? -1 : 1;
        this.go(
          n,
          f.x + d * 10 * s,
          f.y + 16 * s,
          () => {
            (this.face(n, f.x),
              this.act(n, "eat", 0.3, () => {
                (l.fx.ring(f.x, f.y, 14 * s, "#f6c445", 0.5),
                  l.fx.sparks(
                    f.x,
                    f.y,
                    V().sparkleGold,
                    5,
                    22 * s,
                    this.S * 0.7,
                  ),
                  T("pop", 0.8),
                  t.pi++,
                  (t.wait = !1));
              }));
          },
          !0,
        );
      }
      return;
    }
    if (t.phase === "arrange") {
      if (!t.cowStarted) {
        t.cowStarted = !0;
        const f = Math.min(rt - 30 * s, c.x + c.w * 0.5),
          d = c.y - 2 * s;
        this.go(a, f, d, void 0, !0);
      }
      (t.sheepStarted ||
        ((t.sheepStarted = !0),
        (t.wait = !0),
        this.go(
          i,
          c.x - 14 * s,
          h,
          () => {
            (T("sheep"),
              (t.wait = !1),
              (t.t0 = this.t),
              this.face(i, c.x + c.w),
              (i.rush = !1),
              (i.fixedSpeed = (c.w + 28 * s) / 3.2),
              (i.path = [{ x: c.x + c.w + 14 * s, y: h }]),
              (i.mode = "work"),
              (i.onArrive = () => {
                ((i.fixedSpeed = void 0),
                  (t.phase = "lift"),
                  (t.t0 = this.t),
                  this.act(i, "happy", 0.7),
                  T("sparkle", 0.7));
              }));
          },
          !0,
        )),
        !t.wait &&
          i.mode === "work" &&
          ((t.sweep = Ne((i.x - c.x) / c.w)),
          t.src.forEach((f, d) => {
            t.sparked.has(d) ||
              f.x > i.x ||
              (t.sparked.add(d),
              d % 3 === 0 &&
                l.fx.add({
                  kind: "sprite",
                  sprite: V().sparkle,
                  x: f.x,
                  y: f.y - 6 * s,
                  vy: -18 * s,
                  life: 0.55,
                  size: 0.55 * this.S,
                }));
          }),
          (this.crumbT += e),
          this.crumbT > 0.12 &&
            ((this.crumbT = 0),
            l.fx.dust(
              i.x - i.facing * 14 * s,
              i.y,
              2,
              "#efe3cc",
              14 * s,
              2.5 * s,
            ))));
      return;
    }
    if (t.phase === "lift") {
      this.t - t.t0 > 0.45 &&
        !a.path.length &&
        ((t.phase = "hook"),
        (t.t0 = this.t),
        this.face(a, c.x + c.w / 2),
        this.act(a, "work", 0.5, () => {
          if ((T("cow"), !p.s.blocks[t.blockId])) {
            this.finish(t, !0);
            return;
          }
          ((t.phase = "carry"), (t.t0 = this.t), (t.card = { ...c }));
          const d = this.dst(t),
            u = { x: d.x + d.w / 2, y: d.y + d.h + x * 0.7 };
          ((t.dist0 = Math.max(1, Math.hypot(u.x - a.x, u.y - a.y))),
            l.sheetHold.delete(t.blockId),
            (a.anchored = !0),
            this.go(
              a,
              u.x,
              u.y,
              () => {
                ((t.phase = "settle"),
                  (t.t0 = this.t),
                  (t.settleFrom = t.card ? { ...t.card } : null));
              },
              !0,
            ));
        }));
      return;
    }
    if (t.phase === "carry" && t.card) {
      const f = this.dst(t);
      if (!f) {
        this.finish(t, !0);
        return;
      }
      const d = a.path[a.path.length - 1] ?? { x: a.x, y: a.y },
        u = Ne(1 - Math.hypot(d.x - a.x, d.y - a.y) / t.dist0),
        m = Math.min(c.w, f.w * 1.7),
        w = (m * f.h) / f.w,
        y = m + (f.w - m) * ct(u),
        v = w + (f.h - w) * ct(u),
        g = this.scaleAt(a.y),
        k = Math.abs(Math.sin(a.walkDist / 9)) * 2 * g;
      ((t.card = { x: a.x - y / 2, y: a.y - 26 * g - v - k, w: y, h: v }),
        (this.crumbT += e),
        this.crumbT > 0.16 &&
          ((this.crumbT = 0),
          l.fx.dust(
            a.x - a.facing * 12 * g,
            a.y,
            1,
            "#eadfca",
            10 * g,
            2.5 * g,
          )));
      return;
    }
    if (t.phase === "settle") {
      const f = this.dst(t),
        d = Ne((this.t - t.t0) / 0.45);
      if (f && t.settleFrom) {
        const u = ct(d),
          m = t.settleFrom;
        t.card = {
          x: m.x + (f.x - m.x) * u,
          y: m.y + (f.y - m.y) * u - Math.sin(Math.PI * d) * 10,
          w: m.w + (f.w - m.w) * u,
          h: m.h + (f.h - m.h) * u,
        };
      }
      d >= 1 && this.finish(t, !1);
    }
  }
  dst(e) {
    const t = p.s.blocks[e.blockId];
    return t ? { x: t.x * x, y: t.y * x, w: t.w * x, h: t.h * x } : null;
  }
  finish(e, t) {
    if (e.phase === "done") return;
    e.phase = "done";
    const s = this.view;
    (s.incoming.delete(e.blockId),
      s.sheetHold.delete(e.blockId),
      s.blockAppear.set(e.blockId, s.t));
    const n = this.dst(e);
    n &&
      !t &&
      (s.fx.dust(n.x + 10, n.y + n.h, 6, "#efe5d2", 30, 5),
      s.fx.dust(n.x + n.w - 10, n.y + n.h, 6, "#efe5d2", 30, 5),
      s.fx.ring(n.x + n.w / 2, n.y + n.h / 2, n.w * 0.6, "#fff3c4", 0.8),
      T("land"));
    const i = this.helper("cow");
    (i &&
      ((i.anchored = !1),
      (i.path = []),
      this.act(i, "happy", 0.9),
      (i.jumpT = this.t)),
      (this.jobs = this.jobs.filter((a) => a !== e)));
  }
  visitFarm(e) {
    const t = this.helper(e),
      s = t && this.farmSpot(t);
    t && s && !this.busy(t) && (this.after.delete(t), this.go(t, s.x, s.y));
  }
  flushAll() {
    for (const e of [...this.jobs]) this.finish(e, !0);
  }
  drawGround(e) {
    const t = V().ink;
    for (const a of this.grains) {
      const l = this.scaleAt(a.y),
        c = a.landed ? Math.sin((this.t - a.t0) * 5) * 0.08 : 0,
        h = 13 * l,
        f = e.createRadialGradient(a.x, a.y - 4 * l, 0, a.x, a.y - 4 * l, h);
      (f.addColorStop(0, "rgba(255,214,90,0.5)"),
        f.addColorStop(1, "rgba(255,214,90,0)"),
        (e.fillStyle = f),
        e.fillRect(a.x - h, a.y - 4 * l - h, h * 2, h * 2),
        a.landed &&
          ((e.fillStyle = "rgba(110,80,50,0.16)"),
          e.beginPath(),
          e.ellipse(a.x, a.y + 1 * l, 4 * l, 1.4 * l, 0, 0, Math.PI * 2),
          e.fill()),
        G(e, t, a.x, a.y - 4 * l, {
          sx: (1.1 + c) * l * 0.8,
          sy: (1.1 + c) * l * 0.8,
        }));
    }
    const s = this.jobs[0];
    if (!s) return;
    const n = s.rect,
      i = this.u;
    if (s.phase === "arrange" || s.phase === "lift" || s.phase === "hook") {
      const a = s.phase === "arrange" ? s.sweep : 1,
        l = s.phase === "arrange" ? 0 : Ne((this.t - s.t0) / 0.4),
        c = n.w * a;
      c > 1 &&
        (e.save(),
        (e.shadowColor = "rgba(110,80,50,0.22)"),
        (e.shadowBlur = (3 + l * 9) * i),
        (e.shadowOffsetY = (1 + l * 5) * i),
        (e.fillStyle = "#fffdf6"),
        e.beginPath(),
        e.roundRect(n.x, n.y - l * 4 * i, c, n.h, 5 * i),
        e.fill(),
        e.restore(),
        (e.strokeStyle = "rgba(214,170,90,0.55)"),
        e.setLineDash([4 * i, 3 * i]),
        (e.lineWidth = 1.2 * i),
        e.beginPath(),
        e.roundRect(n.x + 0.5, n.y - l * 4 * i + 0.5, c - 1, n.h - 1, 5 * i),
        e.stroke(),
        e.setLineDash([]));
    }
  }
  drawAbove(e) {
    const t = this.jobs[0];
    if (!t || !t.card || (t.phase !== "carry" && t.phase !== "settle")) return;
    const s = p.s.blocks[t.blockId];
    if (!s) return;
    const n = this.view.blockImage(s);
    if (!n) return;
    const i = t.card,
      a = i.w / (s.w * x);
    if (
      (e.save(),
      e.translate(i.x + i.w / 2, i.y + i.h / 2),
      e.rotate(t.phase === "carry" ? Math.sin(this.t * 7) * 0.025 : 0),
      (e.shadowColor = "rgba(90,64,40,0.25)"),
      (e.shadowBlur = 10),
      (e.shadowOffsetY = 5),
      e.drawImage(
        n.canvas,
        -i.w / 2 - 6 * a,
        -i.h / 2 - 6 * a,
        n.w * a,
        n.h * a,
      ),
      e.restore(),
      t.phase === "carry")
    ) {
      const l = this.helper("cow"),
        c = this.scaleAt(l.y);
      ((e.strokeStyle = "rgba(165,121,79,0.8)"),
        (e.lineWidth = 1.3 * c),
        e.beginPath(),
        e.moveTo(l.x + l.facing * 9 * c, l.y - 20 * c),
        e.quadraticCurveTo(l.x, i.y + i.h + 6 * c, i.x + i.w / 2, i.y + i.h),
        e.stroke());
    }
  }
  debug() {
    const e = (t) => {
      const s = this.helper(t);
      return s
        ? {
            x: s.x,
            y: s.y,
            mode: s.mode,
            moving: s.path.length > 0,
            onSheet: this.onSheet(s.y),
          }
        : null;
    };
    return {
      sheetTop: this.view.sheetTop(),
      chicken: e("chicken"),
      sheep: e("sheep"),
      cow: e("cow"),
      grains: this.grains.map((t) => ({
        x: t.x,
        y: t.y,
        landed: t.landed,
        claimed: t.claimed,
      })),
      jobs: this.jobs.map((t) => ({
        blockId: t.blockId,
        phase: t.phase,
        sweep: t.sweep,
      })),
    };
  }
}
const J = '"LXGW WenKai", "Kaiti SC", "STKaiti", "KaiTi", serif',
  ne = D * x,
  ht = (o) => 1 - Math.pow(1 - o, 3),
  ms = (o, e = 1.8) =>
    1 + (e + 1) * Math.pow(o - 1, 3) + e * Math.pow(o - 1, 2),
  ae = (o) => (o < 0 ? 0 : o > 1 ? 1 : o),
  dt = (o) => {
    if (o >= 1) return { sx: 1, sy: 1 };
    if (o <= 0) return { sx: 0, sy: 0 };
    const e = ms(o, 2.2),
      t = Math.sin(o * Math.PI * 2.5) * (1 - o) * 0.18;
    return { sx: e * (1 + t), sy: e * (1 - t) };
  };
class vn {
  constructor(e) {
    var s, n;
    ((this.cam = new dn()),
      (this.dpr = 1),
      (this.land = new un()),
      (this.actors = new pn()),
      (this.fx = new gn()),
      (this.paper = null),
      (this.desk = "#e8dcc6"),
      (this.blockCache = new Map()),
      (this.objAppear = new Map()),
      (this.objBump = new Map()),
      (this.blockAppear = new Map()),
      (this.incoming = new Set()),
      (this.reveals = []),
      (this.harvestPops = []),
      (this.hoverTile = null),
      (this.t = 0),
      (this.fontVersion = 0),
      (this.ptrs = new Map()),
      (this.gesture = null),
      (this.brushDone = new Set()),
      (this.rain = []),
      (this.lastTap = 0),
      (this.flyHook = null),
      (this.writerShown = !1),
      (this.sheetHold = new Set()),
      (this.sheetFor = null),
      (this.sheetY = 0),
      (this.canvas = e),
      (this.ctx = e.getContext("2d")),
      (this.life = new yn(this)));
    const t = mn();
    ((this.paper = this.ctx.createPattern(t, "repeat")),
      this.bindInput(),
      p.onEvents.push((i) => this.onEvents(i)),
      (n = (s = document.fonts) == null ? void 0 : s.addEventListener) ==
        null ||
        n.call(s, "loadingdone", () => {
          (this.blockCache.clear(), this.fontVersion++);
        }));
    for (let i = 0; i < 90; i++)
      this.rain.push({
        x: Math.random(),
        y: Math.random(),
        v: 0.6 + Math.random() * 0.6,
        l: 6 + Math.random() * 8,
      });
  }
  resize(e, t) {
    ((this.dpr = Math.min(2, window.devicePixelRatio || 1)),
      (this.canvas.width = Math.max(1, Math.round(e * this.dpr))),
      (this.canvas.height = Math.max(1, Math.round(t * this.dpr))),
      (this.canvas.style.width = e + "px"),
      (this.canvas.style.height = t + "px"),
      (this.cam.vw = e),
      (this.cam.vh = t),
      (this.cam.minZoom = Math.min(0.9, this.cam.fitWidthZoom() * 0.7)),
      this.cam.clamp());
  }
  onEvents(e) {
    const t = p.s;
    for (const s of e) {
      if (s.t === "build") {
        this.objAppear.set(s.id, this.t);
        const n = t.objects[s.id];
        if (n) {
          const i = O(n);
          this.fx.dust(
            (i.x + i.w / 2) * x,
            (i.y + i.h) * x,
            10,
            "#efe5d2",
            40,
            6,
          );
        }
      }
      if (s.t === "land") {
        if (!s.cells.length) continue;
        let n = 0,
          i = 0;
        for (const [a, l] of s.cells) ((n += a), (i += l));
        this.reveals.push({
          cells: s.cells,
          t0: this.t,
          cx: (n / s.cells.length) * x,
          cy: (i / s.cells.length) * x,
        });
      }
      if (
        (s.t === "block" &&
          (this.blockAppear.set(s.id, this.t), this.blockCache.delete(s.id)),
        s.t === "level")
      ) {
        const n = this.cam.s2w(this.cam.vw / 2, this.cam.vh * 0.4);
        this.fx.confetti(n.x, n.y, 40, 200);
      }
    }
  }
  focusWorld(e, t, s, n = 0.8) {
    this.cam.to({ x: e, y: t, zoom: s ?? this.cam.zoom }, n);
  }
  sheetTop() {
    return (this.sheetFor !== p.s && this.updateSheet(0), this.sheetY);
  }
  updateSheet(e) {
    const t = p.s,
      s = (this.bottomRow(t) + 2) * x;
    if (this.sheetFor !== t || e <= 0) {
      ((this.sheetFor = t), (this.sheetY = s));
      return;
    }
    const n = s - this.sheetY;
    this.sheetY =
      Math.abs(n) < 0.3 ? s : this.sheetY + n * (1 - Math.exp(-e * 5));
  }
  bottomRow(e) {
    if (!this.sheetHold.size) return Ys(e);
    let t = $t;
    for (const n of Object.values(e.blocks))
      !n.hidden && !this.sheetHold.has(n.id) && (t = Math.max(t, n.y + n.h));
    for (const n of Object.values(e.objects)) t = Math.max(t, O(n).y + O(n).h);
    const s = new Set();
    for (const n of this.reveals)
      if (n.hold && this.sheetHold.has(n.hold))
        for (const [i, a] of n.cells) s.add(a * D + i);
    for (let n = e.rows - 1; n >= t; n--) {
      let i = !1;
      for (let a = 0; a < D && !i; a++)
        i = e.land.charCodeAt(n * D + a) === 103 && !s.has(n * D + a);
      if (i) {
        t = n + 1;
        break;
      }
    }
    return t;
  }
  writeZoom() {
    return Math.min(this.cam.vw, 720) / (ne + 24);
  }
  sheetScale() {
    return Math.max(1.15, Math.min(2.6, 1.3 / this.writeZoom()));
  }
  splitY() {
    return Math.round(Math.max(130, Math.min(this.cam.vh * 0.36, 380)));
  }
  sheetH() {
    return (this.cam.vh - this.splitY()) / this.writeZoom() + 260;
  }
  writePose() {
    const e = this.writeZoom();
    return {
      x: ne / 2,
      y: this.sheetTop() - (this.splitY() - this.cam.vh / 2) / e,
      zoom: e,
    };
  }
  writeFocus(e) {
    return this.writePose();
  }
  sheetScreen() {
    const e = this.cam.w2s(0, this.sheetTop());
    return { x: e.x, y: e.y, w: ne * this.cam.zoom };
  }
  blockImage(e) {
    const t = Math.min(4, Math.max(1, Math.ceil(this.cam.zoom * this.dpr))),
      s = this.blockCanvas(e, p.s.settings.textScale, t);
    return { canvas: s, w: s.width / t, h: s.height / t };
  }
  render(e) {
    var w, y, v;
    const t = p.s;
    if (!t) return;
    this.t += e;
    const s = p.now();
    this.updateSheet(this.sheetFor === t ? e : 0);
    const n = this.sheetTop();
    if (
      ((this.cam.worldH = n + this.sheetH()),
      b.mode === "write" && !this.cam.busy)
    ) {
      const g = this.writePose();
      ((Math.abs(g.y - this.cam.y) > 0.01 ||
        Math.abs(g.zoom - this.cam.zoom) > 1e-4 ||
        Math.abs(g.x - this.cam.x) > 0.01) &&
        this.cam.to(g, 0),
        (this.cam.vx = this.cam.vy = 0));
    }
    (this.cam.update(e),
      this.actors.refreshGrid(t),
      this.actors.sync(t, this.t));
    const i = new Date(s).getHours(),
      a = i >= 20 || i < 6;
    (this.life.update(e),
      this.actors.update(t, e, this.t, a),
      (this.fx.reduce = t.settings.reduceMotion),
      this.fx.update(e));
    const l = this.ctx,
      c = this.cam;
    (l.setTransform(this.dpr, 0, 0, this.dpr, 0, 0),
      (l.fillStyle = this.desk),
      l.fillRect(0, 0, c.vw, c.vh),
      l.save(),
      l.translate(c.vw / 2 - c.x * c.zoom, c.vh / 2 - c.y * c.zoom),
      l.scale(c.zoom, c.zoom));
    const h = c.view(),
      f = gt(s),
      d = n + this.sheetH();
    (l.save(),
      (l.shadowColor = "rgba(90,64,40,0.25)"),
      (l.shadowBlur = 18 * c.zoom * this.dpr),
      (l.shadowOffsetY = 5 * c.zoom * this.dpr),
      (l.fillStyle = "#fbf7ed"),
      l.fillRect(0, 0, ne, d),
      l.restore(),
      this.paper &&
        ((l.fillStyle = this.paper),
        l.fillRect(
          Math.max(0, h.x0),
          Math.max(0, h.y0),
          Math.min(ne, h.x1) - Math.max(0, h.x0),
          Math.min(d, h.y1) - Math.max(0, h.y0),
        )),
      this.drawPaperDecor(l, t),
      this.land.draw(l, t, h, f),
      this.drawReveals(l),
      this.drawSheet(l, n, h));
    const u = (g, k, j = 120) =>
      g > h.x0 - j && g < h.x1 + j && k > h.y0 - j && k < h.y1 + j * 1.6;
    for (const g of Object.values(t.objects)) {
      const k = E[g.def];
      if (!k.soil && g.def !== "path") continue;
      const j = O(g);
      if (!u(j.x * x, j.y * x)) continue;
      const A = this.appearK(g.id),
        W = dt(A);
      if (k.soil) {
        const C = Ie(
          k.soil,
          !!((w = g.plot) != null && w.watered) &&
            !!((y = g.plot) != null && y.crop),
        );
        G(l, C, (j.x + j.w / 2) * x, (j.y + j.h / 2) * x, {
          sx: W.sx,
          sy: W.sy,
        });
      } else
        G(l, le("path", 1, g.id), (j.x + 0.5) * x, (j.y + 0.5) * x, {
          sx: W.sx,
          sy: W.sy,
        });
    }
    for (const g of Object.values(t.blocks)) {
      if (g.hidden || this.incoming.has(g.id)) continue;
      const k = Ke(g);
      u(k.x * x, k.y * x, 400) && this.drawBlock(l, g);
    }
    this.life.drawGround(l);
    const m = [];
    for (const g of Object.values(t.objects)) {
      const k = E[g.def];
      if (g.def === "path") continue;
      const j = O(g);
      if (u((j.x + j.w / 2) * x, (j.y + j.h) * x)) {
        if (k.soil) {
          (v = g.plot) != null &&
            v.crop &&
            m.push({ y: (j.y + j.h) * x - 2, d: () => this.drawCrop(l, g, s) });
          continue;
        }
        if (g.def === "fence") {
          m.push({ y: (j.y + 1) * x - 2, d: () => this.drawFence(l, t, g) });
          continue;
        }
        m.push({ y: (j.y + j.h) * x, d: () => this.drawObject(l, g, s) });
      }
    }
    for (const g of this.actors.list)
      u(g.x, g.y) && m.push({ y: g.y, d: () => this.drawActor(l, g, t) });
    for (const g of this.harvestPops) {
      const k = (this.t - g.t0) / 0.5;
      k >= 1 ||
        m.push({
          y: g.y,
          d: () =>
            G(l, g.sprite, g.x, g.y - ht(k) * 16, {
              sx: 1 + k * 0.2,
              sy: 1 + k * 0.2,
              alpha: 1 - k,
            }),
        });
    }
    ((this.harvestPops = this.harvestPops.filter((g) => this.t - g.t0 < 0.5)),
      (l.fillStyle = "rgba(110,80,50,0.14)"));
    for (const g of this.actors.list) {
      if (g.kind === "bee" || !u(g.x, g.y)) continue;
      const k = g.helper ? this.life.scaleAt(g.y) : 1,
        j =
          (g.kind === "cow"
            ? 15
            : g.kind === "sheep" || g.kind === "goat" || g.kind === "pig"
              ? 12
              : 7) * k;
      (l.beginPath(),
        l.ellipse(g.x, g.y, j, j * 0.32, 0, 0, Math.PI * 2),
        l.fill());
    }
    for (const g of Object.values(t.objects)) {
      const k = E[g.def];
      if (k.soil || (k.cat === "decor" && g.def !== "tree")) continue;
      const j = O(g);
      (l.beginPath(),
        l.ellipse(
          (j.x + j.w / 2) * x,
          (j.y + j.h) * x - 2,
          j.w * x * 0.48,
          6,
          0,
          0,
          Math.PI * 2,
        ),
        l.fill());
    }
    m.sort((g, k) => g.y - k.y);
    for (const g of m) g.d();
    (this.life.drawAbove(l),
      this.drawIndicators(l, t, s, u),
      this.drawToolOverlay(l, t, s),
      this.fx.draw(l, J),
      l.restore(),
      this.drawSky(l, s, a, e));
  }
  appearK(e) {
    const t = this.objAppear.get(e);
    if (t === void 0) return 1;
    const s = (this.t - t) / 0.55;
    return s >= 1 ? (this.objAppear.delete(e), 1) : s;
  }
  drawPaperDecor(e, t) {
    const s = (n, i, a, l) => {
      (e.save(),
        e.translate(n, i),
        e.rotate(a),
        (e.globalAlpha = 0.8),
        (e.fillStyle = l),
        e.fillRect(-34, -10, 68, 20),
        (e.globalAlpha = 0.35),
        (e.fillStyle = "#fff"));
      for (let c = -30; c < 34; c += 10) e.fillRect(c, -10, 4, 20);
      e.restore();
    };
    (s(14, 14, -0.75, "#b9d8a8"),
      s(ne - 14, 14, 0.75, "#f3c1b4"),
      (e.fillStyle = "rgba(176,150,118,0.30)"));
    for (let n = 10; n < ne - 6; n += 9)
      (e.beginPath(), e.arc(n, $t * x - 6, 1.2, 0, Math.PI * 2), e.fill());
  }
  drawSheet(e, t, s) {
    if (this.writerShown) return;
    const n = 1 / this.writeZoom(),
      i = this.sheetH();
    if (s.y1 < t || s.y0 > t + i) return;
    const a = b.entryId ? p.entries.get(b.entryId) : p.liveEntries()[0],
      l = 32 * n,
      c = 18 * n,
      h = 28 * n,
      f = t + 112 * n;
    (e.save(), (e.strokeStyle = "rgba(214,196,160,0.55)"), (e.lineWidth = n));
    for (let d = f + l; d < t + i - l; d += l)
      (e.beginPath(), e.moveTo(h, d), e.lineTo(ne - h, d), e.stroke());
    if (a) {
      ((e.fillStyle = "#a58c70"),
        (e.font = `700 ${17 * n}px ${J}`),
        (e.textBaseline = "middle"),
        e.fillText(ve(a.date), h, t + 26 * n),
        a.title &&
          ((e.fillStyle = "#47372c"), e.fillText(a.title, h, t + 66 * n)),
        (e.fillStyle = "#47372c"),
        (e.font = `${c}px ${J}`));
      let d = f + l / 2;
      const u = ne - h * 2;
      for (const m of a.text.split(`
`)) {
        let w = "";
        for (const y of Array.from(m))
          (e.measureText(w + y).width > u &&
            (e.fillText(w, h, d), (d += l), (w = "")),
            (w += y));
        if ((e.fillText(w, h, d), (d += l), d > t + i)) break;
      }
    }
    e.restore();
  }
  drawReveals(e) {
    for (const t of this.reveals)
      t.hold &&
        (this.incoming.has(t.hold) ? (t.t0 = this.t) : (t.hold = void 0));
    this.reveals = this.reveals.filter((t) => this.t - t.t0 < 1.6);
    for (const t of this.reveals)
      for (const [s, n] of t.cells) {
        const i = s * x + x / 2,
          a = n * x + x / 2,
          l = Math.hypot(i - t.cx, a - t.cy),
          c = ae((this.t - t.t0 - l / 260) / 0.5);
        c >= 1 ||
          ((e.globalAlpha = 1 - ht(c)),
          (e.fillStyle = this.paper ?? "#fbf7ed"),
          e.fillRect(s * x - 2, n * x - 2, x + 4, x + 7));
      }
    e.globalAlpha = 1;
  }
  blockCanvas(e, t, s) {
    const n = `${e.hash}|${e.header}|${e.cols}|${e.w}x${e.h}|${t}|${s}|${this.fontVersion}`,
      i = this.blockCache.get(e.id);
    if (i && i.key === n) return i.canvas;
    const a = Us(t),
      l = e.w * x,
      c = e.h * x,
      h = document.createElement("canvas");
    ((h.width = Math.ceil((l + 12) * s)), (h.height = Math.ceil((c + 14) * s)));
    const f = h.getContext("2d");
    (f.scale(s, s),
      f.translate(6, 6),
      f.save(),
      (f.shadowColor = "rgba(110,80,50,0.18)"),
      (f.shadowBlur = 5 * s),
      (f.shadowOffsetY = 2 * s),
      (f.fillStyle = "#fffdf7"),
      be(f, 2, 2, l - 4, c - 4, 6),
      f.fill(),
      f.restore(),
      (f.strokeStyle = "rgba(190,165,130,0.35)"),
      (f.lineWidth = 1),
      be(f, 2.5, 2.5, l - 5, c - 5, 6),
      f.stroke());
    const d = Ks(e.text, e.cols),
      u = 2 + a.pad + (e.header ? a.header : 6);
    f.strokeStyle = "rgba(178,150,112,0.12)";
    for (let y = 1; y <= d.lines; y++)
      (f.beginPath(),
        f.moveTo(a.pad, u + y * a.lh - 3),
        f.lineTo(l - a.pad, u + y * a.lh - 3),
        f.stroke());
    const m = ["#bfdcae", "#f3c1b4", "#c9dcf0", "#f6e2a0", "#e2cdf0"];
    if (
      (f.save(),
      f.translate(l / 2, 2),
      f.rotate(($(e.entryId, "tape") - 0.5) * 0.12),
      (f.globalAlpha = 0.85),
      (f.fillStyle = m[Math.floor($(e.entryId, "tc") * m.length)]),
      f.fillRect(-24, -6, 48, 12),
      f.restore(),
      e.header)
    ) {
      const [y, ...v] = e.header.split(" · "),
        g = /^\d{4}-\d{2}-\d{2}$/.test(y) ? ve(y) : y;
      ((f.fillStyle = "#a58c70"),
        (f.font = `${11.5 * t}px ${J}`),
        (f.textBaseline = "middle"),
        (f.textAlign = "left"));
      const k = 2 + a.pad + a.header / 2 - 2;
      f.fillText(g, a.pad, k);
      const j = f.measureText(g).width;
      (v.length &&
        ((f.fillStyle = "#6d5541"),
        (f.font = `700 ${12.5 * t}px ${J}`),
        f.fillText(v.join(" · "), a.pad + j + 8, k)),
        (f.strokeStyle = "rgba(165,140,112,0.3)"),
        f.beginPath(),
        f.moveTo(a.pad, 2 + a.pad + a.header - 4),
        f.lineTo(l - a.pad, 2 + a.pad + a.header - 4),
        f.stroke());
    }
    ((f.fillStyle = "#47372c"),
      (f.font = `${a.font}px ${J}`),
      (f.textAlign = "center"),
      (f.textBaseline = "middle"));
    const w = a.pad + 2;
    for (const y of d.glyphs) {
      const v = w + (y.hc * a.adv) / 2 + (y.half ? a.adv / 4 : a.adv / 2),
        g = u + y.line * a.lh + a.lh / 2;
      f.fillText(y.ch, v, g);
    }
    return (this.blockCache.set(e.id, { canvas: h, key: n }), h);
  }
  drawBlock(e, t) {
    const s = p.s.settings.textScale,
      n = Math.min(5, Math.max(1, Math.ceil(this.cam.zoom * this.dpr))),
      i = this.blockCanvas(t, s, n),
      a = t.x * x,
      l = t.y * x,
      c = this.blockAppear.get(t.id);
    let h = 1;
    c !== void 0 &&
      ((h = ae((this.t - c) / 0.7)), h >= 1 && this.blockAppear.delete(t.id));
    const f = t.w * x,
      d = t.h * x;
    if ((e.save(), h < 1)) {
      const u = ms(h, 1.4);
      (e.translate(a + f / 2, l + d / 2),
        e.scale(0.92 + 0.08 * u, 0.92 + 0.08 * u),
        e.translate(-(a + f / 2), -(l + d / 2) + (1 - ht(h)) * -14),
        (e.globalAlpha = ae(h * 2)));
    }
    if ((e.drawImage(i, a - 6, l - 6, i.width / n, i.height / n), h < 1)) {
      const u = (1 - h) * 0.5,
        m = e.createRadialGradient(
          a + f / 2,
          l + d / 2,
          0,
          a + f / 2,
          l + d / 2,
          Math.max(f, d) * 0.7,
        );
      (m.addColorStop(0, `rgba(255,220,130,${u})`),
        m.addColorStop(1, "rgba(255,220,130,0)"),
        (e.fillStyle = m),
        e.fillRect(a - 20, l - 20, f + 40, d + 40));
    }
    e.restore();
  }
  spriteFit(e, t, s) {
    const n = t * x + (s === "tree" || s === "bush" ? 10 : 6);
    return Math.max(0.5, Math.min(1.15, n / (e.w * 2)));
  }
  drawObject(e, t, s) {
    var A;
    const n = E[t.def],
      i = O(t),
      a = (i.x + i.w / 2) * x,
      l = (i.y + i.h) * x,
      c = this.appearK(t.id),
      h = dt(c),
      f = this.objBump.get(t.id),
      d = f !== void 0 ? ae((this.t - f) / 0.3) : 1,
      u = d < 1 ? 1 + Math.sin(Math.PI * d) * 0.04 : 1,
      m =
        b.tool === "move" &&
        ((A = b.ghost) == null ? void 0 : A.moving) === t.id,
      w = b.selected === t.id,
      y = t.buildUntil > s,
      v = y ? Math.max(1, t.level - 1) : t.level,
      g = le(t.def, v, t.id),
      k = this.spriteFit(g, i.w, t.def),
      j =
        n.cat === "decor" &&
        (t.def === "tree" || t.def === "bush" || t.def === "flowerbed")
          ? Math.sin(this.t * 1.3 + t.x) * 0.015
          : 0;
    if (
      (e.save(),
      m && (e.globalAlpha = 0.35),
      w &&
        !m &&
        (e.save(),
        (e.strokeStyle = "rgba(255,240,180,0.95)"),
        (e.lineWidth = 3),
        e.setLineDash([5, 4]),
        (e.lineDashOffset = -this.t * 18),
        be(e, i.x * x - 2, i.y * x - 2, i.w * x + 4, i.h * x + 4, 6),
        e.stroke(),
        e.restore()),
      G(e, g, a, l, { sx: k * h.sx * u, sy: k * h.sy * u, rot: j }),
      t.def === "windmill")
    ) {
      const W = Object.values(p.s.jobs).some((N) => N.building === t.id),
        C = this.t * (W ? 4 : 0.6);
      G(e, Z.blades(), a, l - 78 * k, { rot: C, sx: k * h.sx, sy: k * h.sy });
    }
    if (y) {
      const W = Z.scaffold(),
        C = Math.min(1.2, (i.w * x + 6) / (W.w * 2));
      G(e, W, a, l + 2, { sx: C, sy: C * 0.9, alpha: 0.95 });
      const N = Math.sin(this.t * 14);
      G(e, Z.hammer(), a + i.w * x * 0.32, l - i.h * x * 0.9, {
        rot: N * 0.7 - 0.3,
      });
      const H = $(0) * 0 + Math.max(1, t.buildUntil - t.placedAt),
        K = t.buildUntil - s,
        ps = ae(1 - K / Math.max(1, Math.min(H, 2e4 * t.level)));
      (this.progressBar(
        e,
        a,
        i.y * x - 22,
        46,
        ps,
        "#ffe08a",
        `${Math.ceil(K / 1e3)}s`,
      ),
        Math.floor(this.t * 3) !== Math.floor((this.t - 1 / 60) * 3) &&
          this.fx.dust(
            a + ($(this.t) - 0.5) * i.w * x,
            l - $(this.t, 2) * i.h * x,
            2,
            "#f1e6d0",
            12,
            3,
          ));
    }
    if (t.level > 1 && !y && n.maxLevel > 1) {
      ((e.font = `700 9px ${J}`),
        (e.textAlign = "center"),
        (e.textBaseline = "middle"));
      const W = i.x * x + 6,
        C = l - 6;
      ((e.fillStyle = "#ffe39a"),
        (e.strokeStyle = "#8a5a17"),
        (e.lineWidth = 1),
        be(e, W - 8, C - 6, 16, 12, 4),
        e.fill(),
        e.stroke(),
        (e.fillStyle = "#6b4a20"),
        e.fillText(String(t.level), W, C + 0.5));
    }
    e.restore();
  }
  drawFence(e, t, s) {
    const n = s.x * x + x / 2,
      i = (s.y + 1) * x - 2,
      a = (h, f) =>
        Object.values(t.objects).some(
          (d) => d.def === "fence" && d.x === s.x + h && d.y === s.y + f,
        ),
      l = this.appearK(s.id);
    (e.save(), (e.globalAlpha = ae(l * 2)), (e.lineCap = "round"));
    const c = (h, f) => {
      for (const [d, u] of [
        ["#5b3f33", 4],
        ["#dcae74", 2],
      ]) {
        ((e.strokeStyle = d), (e.lineWidth = u));
        for (const m of [11, 5])
          (e.beginPath(), e.moveTo(n, i - m), e.lineTo(h, f - m), e.stroke());
      }
    };
    (a(1, 0) && c(n + x, i),
      a(0, 1) && c(n, i + x),
      G(e, le("fence", 1, s.id), n, i + 1),
      e.restore());
  }
  drawCrop(e, t, s) {
    const n = O(t),
      i = t.plot,
      a = ts(t, s),
      l = ue(i.crop, a),
      c = Math.sin(this.t * 2.1 + t.x * 0.7) * (a >= 3 ? 0.05 : 0.025),
      h = this.objBump.get(t.id),
      f = h !== void 0 ? ae((this.t - h) / 0.35) : 1,
      d = f < 1 ? dt(0.35 + f * 0.65) : { sx: 1, sy: 1 };
    (G(e, l, (n.x + n.w / 2) * x, (n.y + n.h) * x - 2, {
      rot: c,
      sx: d.sx,
      sy: d.sy,
    }),
      a === 4 &&
        Math.sin(this.t * 3 + t.x * 1.7) > 0.7 &&
        G(
          e,
          Z.sparkle(),
          (n.x + n.w / 2) * x + 9 * Math.sin(t.y + this.t),
          n.y * x - 2,
          { sx: 0.7, sy: 0.7 },
        ));
  }
  drawActor(e, t, s) {
    const n = t.animalId ? s.animals[t.animalId] : void 0,
      i = de(t.kind, n ? Math.floor($(n.id, "v") * 2) : 0),
      a = t.helper ? this.life.scaleAt(t.y) : 1;
    let l = i.idle,
      c = 0,
      h = 0;
    if (t.kind === "bee")
      ((l = i.walk[Math.floor(this.t * 14 + t.seed) % 2]),
        (c = -10 + Math.sin(this.t * 5 + t.seed) * 3));
    else if (t.path.length) {
      const v = (t.kind === "cow" ? 7 : t.kind === "sheep" ? 6 : 5) * a;
      ((l = i.walk[Math.floor(t.walkDist / v) % i.walk.length]),
        (c = -Math.abs(Math.sin((t.walkDist / (v * 2)) * Math.PI)) * 1.2 * a),
        t.mode === "work" && (h = Math.sin(this.t * 10) * 0.6 * a));
    } else
      t.mode === "eat"
        ? (l =
            i.eat[
              Math.floor(this.t * (t.kind === "chicken" ? 6 : 2.5) + t.seed) %
                i.eat.length
            ])
        : t.mode === "work"
          ? ((l = i.eat[0]), (h = Math.sin((this.t - t.modeT0) * 18) * 1.4 * a))
          : t.mode === "happy"
            ? ((l = i.happy ?? i.idle),
              (c = -Math.abs(Math.sin((this.t - t.modeT0) * 12)) * 3 * a))
            : ((this.t + t.seed) % 3.7 < 0.13 || t.mode === "sleep") &&
              (l = i.blink);
    const f = ae((this.t - t.jumpT) / 0.45);
    f < 1 && (c -= Math.sin(Math.PI * f) * 9 * a);
    const d =
        (t.kind === "bee" ? 1 : 0.85) * a * (t.helper === "cow" ? 0.95 : 1),
      u = t.path.length ? 1 : 1 + Math.sin(this.t * 2.2 + t.seed) * 0.018;
    let m = t.facing < 0,
      w = 1;
    if (t.turnT !== void 0) {
      const v = (this.t - t.turnT) / 0.22;
      v < 1 &&
        ((w = Math.max(0.15, Math.abs(Math.cos(v * Math.PI)))),
        v < 0.5 && (m = (t.prevFacing ?? t.facing) < 0));
    }
    const y = f > 0.85 && f < 1 ? 0.9 : 1;
    if (
      (G(e, l, t.x + h, t.y + c, {
        flip: m,
        sx: (d / u) * w * (2 - y),
        sy: d * u * y,
      }),
      t.mode === "sleep" && t.kind !== "bee")
    ) {
      ((e.font = `700 8px ${J}`), (e.fillStyle = "rgba(120,100,160,0.8)"));
      const v = ((this.t + t.seed) % 2) / 2;
      ((e.globalAlpha = 1 - v),
        e.fillText("z", t.x + 8 + v * 4, t.y - 18 - v * 10),
        (e.globalAlpha = 1));
    }
    n &&
      n.level > 1 &&
      b.mode === "farm" &&
      this.cam.zoom > 1.2 &&
      ((e.font = `700 7px ${J}`),
      (e.fillStyle = "#c28a2b"),
      (e.textAlign = "center"),
      e.fillText("★".repeat(Math.min(5, n.level - 1)), t.x, t.y + 7));
  }
  drawIndicators(e, t, s, n) {
    var a;
    const i = Math.sin(this.t * 4) * 2;
    for (const l of Object.values(t.objects)) {
      const c = E[l.def],
        h = O(l),
        f = (h.x + h.w / 2) * x,
        d = h.y * x - (c.cat === "animal" || c.cat === "processing" ? 12 : 0);
      if (n(f, d) && !(l.buildUntil > s)) {
        if (c.cat === "animal") {
          const u = yt(t, l.id);
          let m = 0,
            w = 0,
            y = "";
          for (const v of u)
            (vt(t, v, s),
              (m +=
                v.stored +
                Object.values(v.storedBonus).reduce((g, k) => g + k, 0)),
              (y = Ye[v.kind].product),
              ge(v.kind) && v.meals <= 0 && w++);
          m > 0
            ? this.bubble(
                e,
                f,
                d - 10 + i,
                oe(y),
                m > 1 ? `${m}` : "",
                "#fffdf6",
              )
            : w > 0 &&
              this.bubble(
                e,
                f,
                d - 10 + i,
                oe(Ye[u[0].kind].feeds[0] ?? "feed"),
                "饿",
                "#fff1e6",
              );
        } else if (c.cat === "processing" && l.def !== "mailbox") {
          const u = Object.values(t.jobs).filter((m) => m.building === l.id);
          if (u.length) {
            const m = u.sort((v, g) => v.endAt - g.endAt)[0],
              w = s >= m.endAt,
              y = Jt[m.recipe];
            w
              ? this.bubble(
                  e,
                  f,
                  d - 10 + i,
                  oe(y.outputs[0].item),
                  "满",
                  "#fff1e6",
                )
              : this.progressBar(
                  e,
                  f,
                  d - 8,
                  40,
                  ae((s - m.startAt) / (m.endAt - m.startAt)),
                  "#9ccf6e",
                  "",
                  oe(y.outputs[0].item),
                );
          }
        } else if (
          c.soil &&
          (a = l.plot) != null &&
          a.crop &&
          b.mode === "farm" &&
          !te(l, s) &&
          (b.tool === "water" || b.selected === l.id || this.cam.zoom > 1.5)
        ) {
          const m = es(l, s),
            w = f + 12,
            y = h.y * x + 4;
          ((e.fillStyle = "rgba(255,253,246,0.92)"),
            e.beginPath(),
            e.arc(w, y, 6, 0, Math.PI * 2),
            e.fill(),
            (e.strokeStyle = l.plot.watered ? "#6fb3d9" : "#88bf64"),
            (e.lineWidth = 2),
            e.beginPath(),
            e.arc(w, y, 4, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * m),
            e.stroke(),
            !l.plot.watered &&
              b.tool === "water" &&
              ((e.fillStyle = "#6fb3d9"),
              e.beginPath(),
              e.moveTo(f - 8, h.y * x + 1),
              e.quadraticCurveTo(f - 12, h.y * x + 8, f - 8, h.y * x + 9),
              e.quadraticCurveTo(f - 4, h.y * x + 8, f - 8, h.y * x + 1),
              e.fill()));
        }
      }
    }
  }
  bubble(e, t, s, n, i, a) {
    const l = i ? 30 : 20;
    (e.save(),
      (e.fillStyle = a),
      (e.strokeStyle = "#5b3f33"),
      (e.lineWidth = 1.4),
      be(e, t - l / 2, s - 10, l, 19, 7),
      e.fill(),
      e.stroke(),
      e.beginPath(),
      e.moveTo(t - 3, s + 9),
      e.lineTo(t, s + 13),
      e.lineTo(t + 3, s + 9),
      e.fill(),
      e.stroke(),
      G(e, n, i ? t - 6 : t, s - 0.5, { sx: 0.75, sy: 0.75 }),
      i &&
        ((e.fillStyle = "#5b3f33"),
        (e.font = `700 9px ${J}`),
        (e.textAlign = "center"),
        (e.textBaseline = "middle"),
        e.fillText(i, t + 7, s)),
      e.restore());
  }
  progressBar(e, t, s, n, i, a, l = "", c) {
    (e.save(),
      (e.fillStyle = "rgba(91,63,51,0.85)"),
      be(e, t - n / 2 - 2, s - 4, n + 4, 9, 4.5),
      e.fill(),
      (e.fillStyle = a),
      be(e, t - n / 2, s - 2, Math.max(3, n * i), 5, 2.5),
      e.fill(),
      c && G(e, c, t - n / 2 - 7, s, { sx: 0.7, sy: 0.7 }),
      l &&
        ((e.fillStyle = "#5b3f33"),
        (e.font = `700 9px ${J}`),
        (e.textAlign = "center"),
        e.fillText(l, t, s - 9)),
      e.restore());
  }
  drawToolOverlay(e, t, s) {
    var i;
    if (b.mode !== "farm") return;
    const n = b.tool;
    if (n === "reclaim") {
      const a = this.cam.view(),
        l = Math.max(0, Math.floor(a.x0 / x)),
        c = Math.min(D - 1, Math.ceil(a.x1 / x)),
        h = Math.max(0, Math.floor(a.y0 / x)),
        f = Math.min(t.rows - 1, Math.ceil(a.y1 / x)),
        d = 0.35 + Math.sin(this.t * 4) * 0.1;
      for (let u = h; u <= f; u++)
        for (let m = l; m <= c; m++)
          zt(t, m, u) === "." &&
            tt(t, m, u).ok &&
            ((e.fillStyle = `rgba(156,207,110,${d})`),
            e.fillRect(m * x + 2, u * x + 2, x - 4, x - 4),
            (e.strokeStyle = "rgba(94,148,69,0.6)"),
            e.setLineDash([3, 3]),
            e.strokeRect(m * x + 2.5, u * x + 2.5, x - 5, x - 5),
            e.setLineDash([]));
    }
    if ((n === "build" || n === "move") && b.ghost) {
      const a = b.ghost,
        l = E[a.def],
        c = st(t, a.def, a.x, a.y, a.moving);
      for (let f = a.y; f < a.y + l.size[1]; f++)
        for (let d = a.x; d < a.x + l.size[0]; d++) {
          const u = c.bad.some(([m, w]) => m === d && w === f) || !c.ok;
          ((e.fillStyle = u
            ? "rgba(232,90,76,0.35)"
            : "rgba(156,207,110,0.45)"),
            e.fillRect(d * x + 1, f * x + 1, x - 2, x - 2));
        }
      ((e.strokeStyle = c.ok ? "#5e9445" : "#c0412f"),
        (e.lineWidth = 2),
        e.setLineDash([5, 3]),
        (e.lineDashOffset = -this.t * 16),
        e.strokeRect(a.x * x, a.y * x, l.size[0] * x, l.size[1] * x),
        e.setLineDash([]));
      const h = {
        id: "ghost",
        def: a.def,
        x: a.x,
        y: a.y,
        level: a.moving
          ? (((i = t.objects[a.moving]) == null ? void 0 : i.level) ?? 1)
          : 1,
        placedAt: 0,
        buildUntil: 0,
        spent: { coin: 0, wood: 0, stone: 0 },
      };
      (e.save(),
        (e.globalAlpha = 0.85),
        e.translate(0, -3 - Math.sin(this.t * 4) * 1.5),
        l.soil
          ? G(e, Ie(l.soil, !1), (a.x + 1) * x, (a.y + 1) * x)
          : a.def === "path"
            ? G(e, le("path", 1, "ghost"), (a.x + 0.5) * x, (a.y + 0.5) * x)
            : this.drawObject(e, h, s),
        e.restore());
    }
    this.hoverTile &&
      (n === "plant" ||
        n === "harvest" ||
        n === "water" ||
        n === "fertilize") &&
      ((e.strokeStyle = "rgba(255,255,255,0.8)"),
      (e.lineWidth = 2),
      e.strokeRect(this.hoverTile.x * x, this.hoverTile.y * x, x, x));
  }
  drawSky(e, t, s, n) {
    const i = qt(t),
      { vw: a, vh: l } = this.cam;
    e.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const c = e.createRadialGradient(a * 0.25, -80, 40, a * 0.25, -80, l * 1.1);
    if (
      (c.addColorStop(
        0,
        i === "sunny" ? "rgba(255,236,190,0.22)" : "rgba(230,236,240,0.12)",
      ),
      c.addColorStop(1, "rgba(255,236,190,0)"),
      (e.fillStyle = c),
      e.fillRect(0, 0, a, l),
      (i === "cloudy" || i === "rain") &&
        ((e.fillStyle =
          i === "rain" ? "rgba(120,140,160,0.10)" : "rgba(150,160,170,0.06)"),
        e.fillRect(0, 0, a, l)),
      (i === "rain" || i === "snow") && !p.s.settings.reduceMotion)
    ) {
      ((e.strokeStyle = "rgba(140,170,200,0.45)"),
        (e.fillStyle = "rgba(255,255,255,0.85)"),
        (e.lineWidth = 1.2));
      for (const f of this.rain) {
        ((f.y += f.v * n * (i === "rain" ? 1.2 : 0.18)),
          i === "snow" && (f.x += Math.sin(this.t + f.l) * n * 0.02),
          f.y > 1.05 && ((f.y = -0.05), (f.x = Math.random())));
        const d = f.x * a,
          u = f.y * l;
        i === "rain"
          ? (e.beginPath(),
            e.moveTo(d, u),
            e.lineTo(d - 2, u + f.l),
            e.stroke())
          : (e.beginPath(), e.arc(d, u, f.l / 6, 0, Math.PI * 2), e.fill());
      }
    }
    s && ((e.fillStyle = "rgba(40,40,90,0.16)"), e.fillRect(0, 0, a, l));
    const h = e.createRadialGradient(
      a / 2,
      l / 2,
      Math.min(a, l) * 0.45,
      a / 2,
      l / 2,
      Math.max(a, l) * 0.8,
    );
    (h.addColorStop(0, "rgba(80,50,20,0)"),
      h.addColorStop(1, "rgba(80,50,20,0.13)"),
      (e.fillStyle = h),
      e.fillRect(0, 0, a, l));
  }
  local(e) {
    const t = this.canvas.getBoundingClientRect();
    return { x: e.clientX - t.left, y: e.clientY - t.top };
  }
  bindInput() {
    const e = this.canvas;
    ((e.style.touchAction = "none"),
      e.addEventListener("pointerdown", (t) => this.down(t)),
      e.addEventListener("pointermove", (t) => this.move(t)),
      e.addEventListener("pointerup", (t) => this.up(t)),
      e.addEventListener("pointercancel", (t) => this.up(t, !0)),
      e.addEventListener("pointerleave", () => {
        this.hoverTile = null;
      }),
      e.addEventListener(
        "wheel",
        (t) => {
          if ((t.preventDefault(), b.mode !== "farm")) return;
          const s = this.local(t);
          this.cam.zoomAt(
            s.x,
            s.y,
            Math.exp(-t.deltaY * (t.ctrlKey ? 0.01 : 0.0015)),
          );
        },
        { passive: !1 },
      ),
      e.addEventListener("contextmenu", (t) => t.preventDefault()));
  }
  down(e) {
    const t = this.local(e);
    try {
      this.canvas.setPointerCapture(e.pointerId);
    } catch {}
    if (
      (this.ptrs.set(e.pointerId, {
        id: e.pointerId,
        x: t.x,
        y: t.y,
        sx: t.x,
        sy: t.y,
        t: performance.now(),
      }),
      (this.cam.vx = this.cam.vy = 0),
      b.mode !== "farm")
    ) {
      this.gesture = { kind: "pan", moved: !1 };
      return;
    }
    if (this.ptrs.size === 2) {
      const [c, h] = [...this.ptrs.values()];
      this.gesture = {
        kind: "pinch",
        startDist: Math.hypot(c.x - h.x, c.y - h.y),
        startZoom: this.cam.zoom,
        mid: { x: (c.x + h.x) / 2, y: (c.y + h.y) / 2 },
        moved: !0,
      };
      return;
    }
    if (this.ptrs.size > 2) return;
    const s = this.cam.s2w(t.x, t.y),
      n = Math.floor(s.x / x),
      i = Math.floor(s.y / x),
      a = b.tool;
    if ((a === "build" || a === "move") && b.ghost) {
      const c = E[b.ghost.def],
        h =
          n >= b.ghost.x - 1 &&
          n < b.ghost.x + c.size[0] + 1 &&
          i >= b.ghost.y - 1 &&
          i < b.ghost.y + c.size[1] + 1;
      this.gesture = { kind: h ? "ghost" : "pan", moved: !1 };
      return;
    }
    if (
      a === "plant" ||
      a === "harvest" ||
      a === "water" ||
      a === "reclaim" ||
      a === "fertilize"
    ) {
      this.brushDone.clear();
      const c = this.brush(n, i, s.x, s.y);
      this.gesture = { kind: c ? "brush" : "pan", moved: !1 };
      return;
    }
    const l = this.objectAt(s.x, s.y);
    this.gesture = {
      kind: "pan",
      moved: !1,
      longT: performance.now(),
      downObj: l == null ? void 0 : l.id,
    };
  }
  move(e) {
    const t = this.local(e);
    if (e.pointerType === "mouse" && !this.ptrs.size && b.mode === "farm") {
      const c = this.cam.s2w(t.x, t.y);
      ((this.hoverTile = { x: Math.floor(c.x / x), y: Math.floor(c.y / x) }),
        (b.tool === "build" || b.tool === "move") && b.ghost && e.buttons);
    }
    const s = this.ptrs.get(e.pointerId);
    if (!s || !this.gesture) return;
    const n = t.x - s.x,
      i = t.y - s.y;
    ((s.x = t.x),
      (s.y = t.y),
      Math.hypot(t.x - s.sx, t.y - s.sy) > 7 && (this.gesture.moved = !0));
    const a = this.gesture;
    if (a.kind === "pinch" && this.ptrs.size >= 2) {
      const [c, h] = [...this.ptrs.values()],
        f = Math.hypot(c.x - h.x, c.y - h.y),
        d = { x: (c.x + h.x) / 2, y: (c.y + h.y) / 2 },
        u = a.startZoom * (f / a.startDist);
      (this.cam.zoomAt(d.x, d.y, u / this.cam.zoom),
        (this.cam.x -= (d.x - a.mid.x) / this.cam.zoom),
        (this.cam.y -= (d.y - a.mid.y) / this.cam.zoom),
        (a.mid = d),
        this.cam.clamp());
      return;
    }
    if (b.mode !== "farm") return;
    const l = this.cam.s2w(t.x, t.y);
    if (a.kind === "brush") {
      (this.brush(Math.floor(l.x / x), Math.floor(l.y / x), l.x, l.y),
        (this.hoverTile = { x: Math.floor(l.x / x), y: Math.floor(l.y / x) }));
      return;
    }
    if (a.kind === "ghost" && b.ghost) {
      const c = E[b.ghost.def],
        h = Math.round(l.x / x - c.size[0] / 2),
        f = Math.round(l.y / x - c.size[1] / 2);
      (h !== b.ghost.x || f !== b.ghost.y) &&
        this.setGhost(b.ghost.def, h, f, b.ghost.moving);
      return;
    }
    if (a.kind === "pan" && a.moved) {
      (this.cam.stop(),
        (this.cam.x -= n / this.cam.zoom),
        (this.cam.y -= i / this.cam.zoom));
      const c = 1 / 60;
      ((this.cam.vx = (-n / this.cam.zoom / c) * 0.5),
        (this.cam.vy = (-i / this.cam.zoom / c) * 0.5),
        this.cam.clamp(),
        (a.longT = void 0));
    }
  }
  up(e, t = !1) {
    const s = this.local(e),
      n = this.ptrs.get(e.pointerId);
    this.ptrs.delete(e.pointerId);
    const i = this.gesture;
    if (this.ptrs.size > 0) {
      (i == null ? void 0 : i.kind) === "pinch" &&
        (this.gesture = { kind: "pan", moved: !0 });
      return;
    }
    if (((this.gesture = null), !(!i || t || !n))) {
      if (i.kind === "pan" && i.moved) {
        ((this.cam.vx = Math.max(-1500, Math.min(1500, this.cam.vx))),
          (this.cam.vy = Math.max(-1500, Math.min(1500, this.cam.vy))));
        return;
      }
      i.moved || this.tap(s.x, s.y, performance.now() - n.t);
    }
  }
  checkLongPress() {
    var t;
    const e = this.gesture;
    if (
      !(
        !e ||
        e.kind !== "pan" ||
        e.moved ||
        !e.longT ||
        !e.downObj ||
        b.mode !== "farm" ||
        b.tool !== "hand"
      ) &&
      performance.now() - e.longT > 550
    ) {
      const s = p.s.objects[e.downObj];
      ((e.longT = void 0),
        s &&
          E[s.def].movable &&
          ((this.gesture = { kind: "ghost", moved: !0 }),
          b.set({
            tool: "move",
            ghost: { def: s.def, x: s.x, y: s.y, ok: !0, moving: s.id },
            sheet: null,
            selected: null,
          }),
          (t = navigator.vibrate) == null || t.call(navigator, 15)));
    }
  }
  setGhost(e, t, s, n) {
    const i = st(p.s, e, t, s, n);
    b.set({
      ghost: { def: e, x: t, y: s, ok: i.ok, reason: i.reason, moving: n },
    });
  }
  startGhost(e, t) {
    const s = E[e],
      n = this.cam.s2w(this.cam.vw / 2, this.cam.vh / 2);
    let i = {
      x: Math.round(n.x / x - s.size[0] / 2),
      y: Math.round(n.y / x - s.size[1] / 2),
    };
    for (let a = 0; a < 14; a++) {
      let l = !1;
      for (let c = -a; c <= a && !l; c++)
        for (let h = -a; h <= a && !l; h++) {
          if (Math.max(Math.abs(h), Math.abs(c)) !== a) continue;
          const f = i.x + h,
            d = i.y + c;
          st(p.s, e, f, d, t).ok && ((i = { x: f, y: d }), (l = !0));
        }
      if (l) break;
    }
    this.setGhost(e, i.x, i.y, t);
  }
  brush(e, t, s, n) {
    var u, m;
    const i = p.s,
      a = b.tool;
    if (a === "reclaim") {
      const w = e + "," + t;
      if (this.brushDone.has(w)) return !0;
      if (!tt(i, e, t).ok) return !1;
      this.brushDone.add(w);
      const y = p.act((v, g) => qs(v, [[e, t]]), {
        quietFail: this.brushDone.size > 1,
      });
      if (y.ok) {
        this.fx.dust(e * x + 9, t * x + 14, 3, "#d9e8b4", 14, 3);
        const v = y.events.find((g) => g.t === "items");
        (v &&
          this.fx.text(
            `+${Object.entries(v.items)
              .map(([g, k]) => `${k}${g === "wood" ? "木材" : "石料"}`)
              .join(" ")}`,
            e * x + 9,
            t * x,
            "#7a5a2a",
            10,
          ),
          p.toast);
      }
      return !0;
    }
    const l = this.plotAt(s, n);
    if (!l) return !1;
    if (this.brushDone.has(l.id)) return !0;
    this.brushDone.add(l.id);
    const c = p.now(),
      h = O(l),
      f = (h.x + 1) * x,
      d = (h.y + 1) * x;
    if (a === "plant" && b.seed) {
      if ((u = l.plot) != null && u.crop) return !0;
      p.act((y, v) => Qt(y, l.id, b.seed, v), {
        quietFail: this.brushDone.size > 1,
      }).ok &&
        (this.objBump.set(l.id, this.t),
        this.fx.dust(f, d + 10, 4, "#d9bf98", 16, 4),
        (i.inv["seed_" + b.seed] ?? 0) <= 0 &&
          (p.toast(`${$e[b.seed].name}种子用完了`, "plain"), b.resetTool()));
    } else if (a === "harvest") {
      if (!((m = l.plot) != null && m.crop) || !te(l, c)) return !0;
      const w = l.plot.crop,
        y = p.act((v, g) => _e(v, l.id, g), {
          quietFail: this.brushDone.size > 1,
        });
      y.ok && this.harvestFx(l, w, y.events);
    } else if (a === "water") {
      if (p.act((y, v) => ss(y, l.id, v), { quietFail: !0 }).ok) {
        for (let y = 0; y < 6; y++)
          this.fx.add({
            kind: "dust",
            x: f + (Math.random() - 0.5) * 24,
            y: d - 10,
            vy: 60,
            vx: 0,
            life: 0.4,
            size: 2,
            color: "#8fc6e8",
          });
        this.objBump.set(l.id, this.t);
      }
    } else
      a === "fertilize" &&
        p.act((y, v) => is(y, l.id, v)).ok &&
        (this.fx.dust(f, d, 6, "#b08a5a", 18, 3),
        this.objBump.set(l.id, this.t));
    return !0;
  }
  harvestFx(e, t, s) {
    const n = O(e),
      i = (n.x + 1) * x,
      a = (n.y + n.h) * x - 2;
    (this.harvestPops.push({ x: i, y: a, sprite: ue(t, 4), t0: this.t }),
      this.fx.burst(i, a - 10, Z.sparkle(), 4));
    const l = s.find((c) => c.t === "items");
    if (l)
      for (const [c, h] of Object.entries(l.items))
        (Be == null || Be(oe(c), this.cam.w2s(i, a - 14), "warehouse"),
          this.fx.text(
            `+${h}`,
            i,
            a - 26,
            c.includes(":golden") ? "#c28a2b" : "#7a5a2a",
            12,
          ));
  }
  plotAt(e, t) {
    for (const s of Object.values(p.s.objects)) {
      if (!s.plot) continue;
      const n = O(s);
      if (
        e >= n.x * x &&
        e < (n.x + n.w) * x &&
        t >= n.y * x &&
        t < (n.y + n.h) * x
      )
        return s;
    }
    return null;
  }
  objectAt(e, t) {
    const s = Object.values(p.s.objects).sort(
      (n, i) => O(i).y + O(i).h - (O(n).y + O(n).h),
    );
    for (const n of s) {
      const i = O(n),
        l =
          E[n.def].soil || n.def === "path" || n.def === "fence"
            ? 0
            : i.h * x * 0.6;
      if (
        e >= i.x * x &&
        e < (i.x + i.w) * x &&
        t >= i.y * x - l &&
        t < (i.y + i.h) * x
      )
        return n;
    }
    return null;
  }
  tap(e, t, s) {
    const n = p.s,
      i = this.cam.s2w(e, t),
      a = this.life.hit(e, t);
    if (a && (b.mode === "write" || b.tool === "hand")) {
      this.life.poke(a);
      return;
    }
    if (b.mode === "write") {
      Re == null || Re(i);
      return;
    }
    const l = b.tool;
    if (l === "build" || l === "move") {
      if (!b.ghost) return;
      const d = E[b.ghost.def],
        u = Math.round(i.x / x - d.size[0] / 2),
        m = Math.round(i.y / x - d.size[1] / 2),
        w = performance.now();
      if (w - this.lastTap < 320 && u === b.ghost.x && m === b.ghost.y) {
        Fe == null || Fe();
        return;
      }
      ((this.lastTap = w), this.setGhost(b.ghost.def, u, m, b.ghost.moving));
      return;
    }
    if (l !== "hand") return;
    for (const d of this.actors.list)
      if (
        !(d.helper || !d.animalId) &&
        Math.hypot(d.x - i.x, d.y - 6 - i.y) < 12
      ) {
        const u = n.animals[d.animalId];
        if (!u) continue;
        ((d.jumpT = this.t),
          this.fx.add({
            kind: "sprite",
            sprite: Z.heart(),
            x: d.x,
            y: d.y - 20,
            vy: -26,
            life: 1.1,
            size: 0.8,
          }),
          Le == null || Le(u.kind),
          b.set({
            sheet: { kind: "object", id: u.home },
            selected: u.home,
            focusAnimal: u.id,
          }));
        return;
      }
    const c = this.objectAt(i.x, i.y);
    if (c) {
      if ((this.objBump.set(c.id, this.t), c.plot)) {
        const d = p.now();
        if (c.plot.crop && te(c, d)) {
          const u = c.plot.crop,
            m = p.act((w, y) => _e(w, c.id, y));
          m.ok && this.harvestFx(c, u, m.events);
          return;
        }
        if (!c.plot.crop) {
          b.set({ sheet: { kind: "seeds", plotId: c.id }, selected: c.id });
          return;
        }
      }
      if (c.def === "mailbox") {
        b.set({ sheet: { kind: "warehouse" }, selected: null });
        return;
      }
      b.set({ sheet: { kind: "object", id: c.id }, selected: c.id });
      return;
    }
    for (const d of Object.values(n.blocks)) {
      if (d.hidden) continue;
      const u = Ke(d);
      if (
        i.x >= u.x * x &&
        i.x < (u.x + u.w) * x &&
        i.y >= u.y * x &&
        i.y < (u.y + u.h) * x
      ) {
        b.set({ sheet: { kind: "entry", id: d.entryId }, selected: null });
        return;
      }
    }
    const h = Math.floor(i.x / x),
      f = Math.floor(i.y / x);
    (zt(n, h, f) === "." &&
      tt(n, h, f).ok &&
      p.toast(
        "这片纸可以开垦成土地：选择底部「开垦」工具，在纸上划一划",
        "plain",
      ),
      b.set({ sheet: null, selected: null }));
  }
  toScreen(e, t) {
    return this.cam.w2s(e, t);
  }
  objScreen(e) {
    const t = O(e);
    return this.cam.w2s((t.x + t.w / 2) * x, t.y * x);
  }
  homeDoor(e) {
    return pt(e);
  }
}
function be(o, e, t, s, n, i) {
  ((i = Math.min(i, s / 2, n / 2)),
    o.beginPath(),
    o.moveTo(e + i, t),
    o.arcTo(e + s, t, e + s, t + n, i),
    o.arcTo(e + s, t + n, e, t + n, i),
    o.arcTo(e, t + n, e, t, i),
    o.arcTo(e, t, e + s, t, i),
    o.closePath());
}
let Be = null,
  Re = null,
  Fe = null,
  Le = null;
function wn(o) {
  (o.fly && (Be = o.fly),
    o.tapToFarm && (Re = o.tapToFarm),
    o.confirmGhost && (Fe = o.confirmGhost),
    o.sfx && (Le = o.sfx));
}
const Gt = (o) => (o < 0.5 ? 4 * o * o * o : 1 - Math.pow(-2 * o + 2, 3) / 2),
  kn = (o) => 1 - Math.pow(1 - o, 3),
  Ht = (o) => (o < 0 ? 0 : o > 1 ? 1 : o),
  _t = (o, e, t, s) => (1 - s) * (1 - s) * o + 2 * (1 - s) * s * e + s * s * t;
class jn {
  constructor(e, t, s) {
    ((this.bridge = null),
      (this.dpr = 1),
      (this.w = 0),
      (this.h = 0),
      (this.t = 0),
      (this.flies = []),
      (this.marks = []),
      (this.canvas = e),
      (this.root = t),
      (this.view = s),
      (this.ctx = e.getContext("2d")));
  }
  resize(e, t) {
    ((this.dpr = Math.min(2, window.devicePixelRatio || 1)),
      (this.w = e),
      (this.h = t),
      (this.canvas.width = Math.round(e * this.dpr)),
      (this.canvas.height = Math.round(t * this.dpr)),
      (this.canvas.style.width = e + "px"),
      (this.canvas.style.height = t + "px"));
  }
  hudPos(e) {
    const t = this.root.querySelector(`[data-hud="${e}"]`),
      s = this.root.getBoundingClientRect();
    if (!t) return { x: this.w - 40, y: 30 };
    const n = t.getBoundingClientRect();
    return {
      x: n.left - s.left + n.width / 2,
      y: n.top - s.top + n.height / 2,
    };
  }
  fly(e, t, s, n = 1.5) {
    if (this.flies.length > 40) return;
    const i = this.view.canvas.getBoundingClientRect(),
      a = this.root.getBoundingClientRect();
    this.flies.push({
      sprite: e,
      x0: t.x + i.left - a.left,
      y0: t.y + i.top - a.top,
      target: s,
      t0: this.t,
      dur: 0.75 + Math.random() * 0.15,
      arc: 50 + Math.random() * 60,
      scale: n,
    });
  }
  frame(e) {
    this.t += e;
    const t = this.ctx;
    (t.setTransform(this.dpr, 0, 0, this.dpr, 0, 0),
      t.clearRect(0, 0, this.w, this.h),
      b.mode === "write" && this.drawMarks(t),
      this.drawFlies(t));
  }
  drawMarks(e) {
    const t = this.bridge,
      s = b.entryId ? p.entries.get(b.entryId) : null;
    if (!(!t || !s || !t.ta.isConnected)) {
      if (
        Math.floor(this.t * 4) !== Math.floor((this.t - 0.016) * 4) ||
        !this.marks.length
      ) {
        const n = t.paragraphTops(this.root),
          i = s.text.split(`
`),
          a = t.ta.getBoundingClientRect(),
          l = this.root.getBoundingClientRect(),
          c = new Set(this.view.life.jobs.map((h) => h.blockId));
        this.marks = n
          .map((h, f) => {
            var y;
            const d = s.paraIds[f],
              u = ((y = i[f]) == null ? void 0 : y.trim()) ?? "",
              m = d ? p.s.blocks[d] : void 0,
              w =
                d && c.has(d)
                  ? "working"
                  : m && !m.hidden && m.hash === ls(u)
                    ? "done"
                    : "pending";
            return { y: u ? h : -999, state: w, x: a.left - l.left - 7 };
          })
          .filter(
            (h) =>
              h.y > -999 &&
              h.y > a.top - l.top - 4 &&
              h.y < a.bottom - l.top + 4,
          );
      }
      for (const n of this.marks)
        ((e.fillStyle =
          n.state === "done"
            ? "#88bf64"
            : n.state === "working"
              ? "#f6c445"
              : "rgba(176,150,118,0.45)"),
          e.beginPath(),
          e.arc(
            n.x,
            n.y,
            n.state === "working" ? 3.2 + Math.sin(this.t * 8) : 2.6,
            0,
            Math.PI * 2,
          ),
          e.fill());
    }
  }
  drawFlies(e) {
    for (const t of this.flies) {
      const s = Ht((this.t - t.t0) / t.dur),
        n = this.hudPos(t.target),
        i = Gt(s),
        a = (t.x0 + n.x) / 2,
        l = Math.min(t.y0, n.y) - t.arc,
        c = _t(t.x0, a, n.x, i),
        h = _t(t.y0, l, n.y, i),
        f =
          t.scale *
          (s < 0.15 ? kn(s / 0.15) : 1 - Gt(Ht((s - 0.7) / 0.3)) * 0.45);
      if (
        (G(e, t.sprite, c, h, { sx: f, sy: f, rot: Math.sin(s * 8) * 0.15 }),
        s >= 1)
      ) {
        const d = this.root.querySelector(`[data-hud="${t.target}"]`);
        d &&
          (d.classList.remove("bump"), d.offsetWidth, d.classList.add("bump"));
      }
    }
    this.flies = this.flies.filter((t) => this.t - t.t0 < t.dur);
  }
}
class Wn {
  constructor(e) {
    ((this.composing = !1),
      (this.lastInput = 0),
      (this.focused = !1),
      (this.ta = e));
    const t = document.createElement("div");
    (t.setAttribute("aria-hidden", "true"),
      (t.className = "pf-mirror"),
      document.body.appendChild(t),
      (this.mirror = t),
      e.addEventListener("compositionstart", () => {
        this.composing = !0;
      }),
      e.addEventListener("compositionend", () => {
        ((this.composing = !1), (this.lastInput = performance.now()));
      }),
      e.addEventListener("input", () => {
        this.lastInput = performance.now();
      }),
      e.addEventListener("keydown", () => {
        this.lastInput = performance.now();
      }),
      e.addEventListener("focus", () => {
        this.focused = !0;
      }),
      e.addEventListener("blur", () => {
        this.focused = !1;
      }));
  }
  destroy() {
    this.mirror.remove();
  }
  syncStyle() {
    const e = getComputedStyle(this.ta),
      t = this.mirror.style;
    for (const s of [
      "fontFamily",
      "fontSize",
      "fontWeight",
      "lineHeight",
      "letterSpacing",
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "borderLeftWidth",
      "borderRightWidth",
      "boxSizing",
      "textIndent",
      "wordBreak",
      "overflowWrap",
      "whiteSpace",
    ])
      t[s] = e[s];
    t.width = this.ta.clientWidth + "px";
  }
  origin(e) {
    const t = this.ta.getBoundingClientRect(),
      s = e.getBoundingClientRect();
    return { x: t.left - s.left, y: t.top - s.top - this.ta.scrollTop };
  }
  glyphs(e, t) {
    this.syncStyle();
    const n = this.ta.value.split(`
`);
    if (t < 0 || t >= n.length) return [];
    const i =
        n.slice(0, t).join(`
`) +
        (t > 0
          ? `
`
          : ""),
      a = this.mirror;
    ((a.textContent = ""), a.appendChild(document.createTextNode(i)));
    const l = [];
    for (const h of Array.from(n[t])) {
      const f = document.createElement("span");
      ((f.textContent = h), a.appendChild(f), l.push(f));
    }
    const c = this.origin(e);
    return l.map((h) => ({
      ch: h.textContent,
      x: c.x + h.offsetLeft + h.offsetWidth / 2,
      y: c.y + h.offsetTop + h.offsetHeight / 2,
      para: t,
    }));
  }
  paragraphTops(e) {
    this.syncStyle();
    const t = this.ta.value.split(`
`),
      s = this.mirror;
    s.textContent = "";
    const n = [];
    t.forEach((a, l) => {
      const c = document.createElement("span");
      ((c.textContent = "​"),
        s.appendChild(c),
        n.push(c),
        s.appendChild(
          document.createTextNode(
            a +
              (l < t.length - 1
                ? `
`
                : ""),
          ),
        ));
    });
    const i = this.origin(e);
    return n.map((a) => i.y + a.offsetTop + a.offsetHeight / 2);
  }
  contentBottom(e) {
    this.syncStyle();
    const t = this.mirror;
    t.textContent = this.ta.value;
    const s = document.createElement("span");
    ((s.textContent = "​"), t.appendChild(s));
    const n = this.origin(e),
      i = parseFloat(getComputedStyle(this.ta).lineHeight) || 32;
    return n.y + s.offsetTop + (this.ta.value ? i : 0);
  }
  caret(e) {
    this.syncStyle();
    const t = this.ta.value,
      s = this.ta.selectionEnd ?? t.length,
      n = this.mirror;
    n.textContent = t.slice(0, s);
    const i = document.createElement("span");
    ((i.textContent = "​"), n.appendChild(i));
    const a = this.origin(e);
    return { x: a.x + i.offsetLeft, y: a.y + i.offsetTop + i.offsetHeight / 2 };
  }
  snapshot() {
    return {
      text: this.ta.value,
      caret: this.focused ? this.ta.selectionEnd : null,
      composing: this.composing,
      idleMs: performance.now() - this.lastInput,
    };
  }
}
function Yn({
  slot: o = "main",
  dbName: e,
  onReady: t,
  skipOnboarding: s = !1,
}) {
  const [n, i] = I.useState(!1),
    [a, l] = I.useState(null);
  return (
    I.useEffect(() => {
      let c = !1;
      return (
        p
          .boot(o, e)
          .then(async () => {
            if (c) return;
            (!(await p.be.getMeta("onboarded")) &&
              !s &&
              b.set({ onboarding: 1 }),
              i(!0));
          })
          .catch((h) => {
            (console.error(h),
              l(String((h == null ? void 0 : h.message) ?? h)));
          }),
        () => {
          c = !0;
        }
      );
    }, []),
    I.useEffect(() => {
      n && (t == null || t());
    }, [n]),
    a
      ? r.jsxs("div", {
          className: "pf-boot err",
          children: [
            "打开存档失败：",
            a,
            r.jsx("br", {}),
            r.jsx("small", {
              children: "请检查浏览器是否允许本地存储（无痕模式可能不可用）。",
            }),
          ],
        })
      : n
        ? r.jsx(Mn, {})
        : r.jsxs("div", {
            className: "pf-boot",
            children: [
              r.jsx(S, { s: Z.sprout(), h: 40, className: "bob" }),
              r.jsx("span", { children: "正在打开日记本…" }),
            ],
          })
  );
}
function Mn() {
  var f;
  F();
  const o = I.useRef(null),
    e = I.useRef(null),
    t = I.useRef(null),
    s = I.useRef(null),
    n = I.useRef(null),
    [i, a] = I.useState(null);
  (I.useEffect(() => {
    const d = new vn(t.current),
      u = new jn(s.current, o.current, d);
    ((z.v = d),
      (z.o = u),
      (window.__pfView = d),
      (d.flyHook = (W, C, N) => u.fly(W, C, N)),
      (window.__pfDebug = {
        BUILDING: E,
        CROP: $e,
        objRect: O,
        blockRect: Ke,
        sim: Zs,
      }),
      wn({
        fly: (W, C, N) => u.fly(W, C, N),
        tapToFarm: (W) => {
          (b.set({ mode: "farm" }),
            d.focusWorld(W.x, W.y, Math.max(1.25, d.cam.fitWidthZoom() * 1.6)),
            T("open", 0.6));
        },
        confirmGhost: () => xt(),
        sfx: (W) => T(W),
      }),
      p.onEvents.push((W) => {
        for (const C of W)
          (C.t === "level" && T("levelup"), C.t === "quest" && T("sparkle"));
      }));
    const m = new ResizeObserver(() => {
      const W = e.current.getBoundingClientRect();
      d.resize(W.width, W.height);
      const C = o.current.getBoundingClientRect();
      u.resize(C.width, C.height);
    });
    (m.observe(e.current), m.observe(o.current));
    const w = e.current.getBoundingClientRect();
    (d.resize(w.width, w.height), d.cam.to(d.writePose(), 0));
    let y = 0,
      v = performance.now(),
      g = 0;
    const k = (W) => {
      const C = Math.min(0.05, (W - v) / 1e3);
      ((v = W),
        p.advanceSandbox(C * 1e3),
        (g += C),
        g > 0.5 && ((g = 0), p.heartbeat()));
      try {
        const N = n.current;
        if (
          ((d.writerShown = !!(N != null && N.isConnected)),
          N != null && N.isConnected)
        ) {
          const H = d.sheetScreen(),
            K = [
              Math.round(H.x),
              Math.round(H.y),
              Math.round(H.w),
              Math.round(d.cam.vh),
            ].join("|");
          N.dataset.k !== K &&
            ((N.dataset.k = K),
            (N.style.transform = `translate(${Math.round(H.x)}px, ${Math.round(H.y)}px)`),
            (N.style.width = Math.round(H.w) + "px"),
            (N.style.height = Math.max(0, Math.round(d.cam.vh - H.y)) + "px"));
        }
        (d.render(C), u.frame(C), d.checkLongPress());
      } catch (N) {
        console.error(N);
      }
      y = requestAnimationFrame(k);
    };
    y = requestAnimationFrame(k);
    const j = (W) => d.life.dropGrains(W.detail);
    window.addEventListener("pf-grains", j);
    const A = (W) => {
      var H, K;
      if (
        ((K = (H = W.target) == null ? void 0 : H.closest) != null &&
          K.call(H, "input,textarea,select")) ||
        b.mode !== "farm"
      )
        return;
      W.key === "Escape" && !b.sheet && b.resetTool();
      const C = W.key.toLowerCase(),
        N = 60 / d.cam.zoom;
      ((C === "arrowleft" || C === "a") && (d.cam.x -= N),
        (C === "arrowright" || C === "d") && (d.cam.x += N),
        (C === "arrowup" || C === "w") && (d.cam.y -= N),
        (C === "arrowdown" || C === "s") && (d.cam.y += N),
        (C === "+" || C === "=") &&
          d.cam.zoomAt(d.cam.vw / 2, d.cam.vh / 2, 1.2),
        C === "-" && d.cam.zoomAt(d.cam.vw / 2, d.cam.vh / 2, 1 / 1.2),
        C === "enter" && b.ghost && xt());
    };
    return (
      window.addEventListener("keydown", A),
      () => {
        (cancelAnimationFrame(y),
          m.disconnect(),
          window.removeEventListener("pf-grains", j),
          window.removeEventListener("keydown", A),
          (z.v = null),
          (z.o = null));
      }
    );
  }, []),
    I.useEffect(() => {
      var y;
      const d = z.o,
        u = z.v;
      if (!d || !u) return;
      if (!i) {
        ((y = d.bridge) == null || y.destroy(),
          (d.bridge = null),
          (u.life.bridge = null));
        return;
      }
      const m = new Wn(i);
      ((d.bridge = m), (u.life.bridge = m));
      const w = () => {
        u.life.lastTypeT = u.t;
      };
      return (
        i.addEventListener("input", w),
        () => {
          (i.removeEventListener("input", w),
            m.destroy(),
            d.bridge === m && (d.bridge = null),
            u.life.bridge === m && (u.life.bridge = null));
        }
      );
    }, [i]));
  const l = I.useRef(b.mode);
  I.useEffect(() => {
    if (l.current === b.mode) return;
    l.current = b.mode;
    const d = z.v;
    d &&
      requestAnimationFrame(() => {
        if (b.mode === "write") (b.resetTool(), d.cam.to(d.writePose(), 0.8));
        else if (!d.cam.busy) {
          const u = Math.max(d.cam.zoom, d.cam.fitWidthZoom() * 1.5),
            m = d.cam.vh / 2 / u,
            w = Math.max(m - 20, d.sheetTop() - m + 70 / u);
          d.cam.to({ x: d.cam.x, y: w, zoom: u }, 0.9);
        }
      });
  });
  const c = b.mode === "farm",
    h = p.slot === "sandbox";
  return r.jsxs("div", {
    ref: o,
    className: `pf-app mode-${b.mode} ${h ? "sandbox" : ""}`,
    onPointerDown: () => kt(),
    children: [
      r.jsxs("div", {
        className: "pf-stage",
        children: [
          r.jsxs("div", {
            ref: e,
            className: "pf-world",
            "data-testid": "world",
            children: [
              r.jsx("canvas", { ref: t, "data-testid": "world-canvas" }),
              h &&
                r.jsxs("div", {
                  className: "sandbox-tag",
                  children: [
                    "沙盒 ×",
                    ((f = p.s.sandbox) == null ? void 0 : f.speed) ?? 1,
                  ],
                }),
            ],
          }),
          !c &&
            r.jsxs("div", {
              ref: n,
              className: "pf-writer",
              onPointerDownCapture: (d) => Cn(d),
              children: [
                r.jsx("button", {
                  type: "button",
                  className: "world-hint",
                  "data-act": "to-farm",
                  onClick: () => b.set({ mode: "farm" }),
                  children: "点庄园进入 ›",
                }),
                r.jsx(Ei, { onEditor: a }),
              ],
            }),
        ],
      }),
      r.jsx(zi, {}),
      c && r.jsx(Nn, {}),
      r.jsx(Sn, {}),
      r.jsx("canvas", {
        ref: s,
        className: "pf-overlay",
        "aria-hidden": "true",
      }),
      r.jsx($n, {}),
      r.jsx(cn, {}),
      r.jsx(rn, {}),
      r.jsx(ln, {}),
    ],
  });
}
function Cn(o) {
  const e = z.v;
  if (!e) return;
  const t = e.canvas.getBoundingClientRect(),
    s = e.life.hit(o.clientX - t.left, o.clientY - t.top);
  s && e.life.poke(s);
}
function xt() {
  var n, i;
  const o = b.ghost;
  if (!o) return;
  if (!o.ok) {
    (p.toast(o.reason ?? "这里放不下", "warn"), T("close"));
    return;
  }
  if (o.moving) {
    p.act((l) => Vs(l, o.moving, o.x, o.y)).ok &&
      (T("stamp"),
      (n = z.v) == null || n.objAppear.set(o.moving, z.v.t),
      b.resetTool());
    return;
  }
  if (!p.act((a, l) => Xs(a, o.def, o.x, o.y, l)).ok) return;
  T("hammer");
  const t = E[o.def];
  (!!t.soil || t.cat === "decor") && Vt(p.s, o.def).ok
    ? (i = z.v) == null || i.setGhost(o.def, o.x + t.size[0], o.y)
    : b.resetTool();
}
function Sn() {
  var s;
  F();
  const o = b.mode === "farm",
    e = (n) => {
      (b.mode !== n && T("whoosh", 0.5), b.set({ mode: n, sheet: null }));
    },
    t =
      Ge(p.s).filter((n) => He(p.s, n).done).length +
      p.s.daily.tasks.filter(
        (n) => !n.claimed && (p.s.daily.stats[n.key] ?? 0) >= n.n,
      ).length;
  return r.jsxs("nav", {
    className: "pf-nav",
    "aria-label": "主导航",
    children: [
      r.jsxs("button", {
        type: "button",
        className: o ? "" : "on",
        "data-act": "nav-write",
        onClick: () => e("write"),
        children: [
          r.jsx(S, { s: Z.flowers()[0], h: 22 }),
          r.jsx("span", { children: "写作" }),
        ],
      }),
      r.jsxs("button", {
        type: "button",
        className: o && b.tool === "hand" ? "on" : "",
        "data-act": "nav-farm",
        onClick: () => {
          (e("farm"), b.resetTool());
        },
        children: [
          r.jsx(S, { s: ue("wheat", 4), h: 22 }),
          r.jsx("span", { children: "庄园" }),
        ],
      }),
      r.jsxs("button", {
        type: "button",
        "data-act": "nav-build",
        className:
          ((s = b.sheet) == null ? void 0 : s.kind) === "shop" &&
          b.sheet.tab === "build"
            ? "on"
            : "",
        onClick: () => {
          (e("farm"), b.open({ kind: "shop", tab: "build" }));
        },
        children: [
          r.jsx(S, { s: Z.hammer(), h: 22 }),
          r.jsx("span", { children: "建造" }),
        ],
      }),
      r.jsxs("button", {
        type: "button",
        "data-act": "nav-shop",
        onClick: () => b.open({ kind: "shop", tab: "seeds" }),
        children: [
          r.jsx(S, { s: oe("seed_wheat"), h: 22 }),
          r.jsx("span", { children: "商店" }),
        ],
      }),
      r.jsxs("button", {
        type: "button",
        "data-act": "nav-more",
        onClick: () => b.open({ kind: "more" }),
        children: [
          r.jsx(S, { s: Z.sparkleGold(), h: 22 }),
          r.jsx("span", { children: "更多" }),
          t > 0 && r.jsx("i", { className: "badge", children: t }),
        ],
      }),
    ],
  });
}
const Yt = [
  {
    id: "hand",
    label: "手",
    tip: "点建筑查看，点田地播种/收获，拖动地图，长按建筑移动",
  },
  { id: "plant", label: "播种", tip: "在空田上划过，批量播种" },
  { id: "water", label: "浇水", tip: "划过作物浇水，生长加快 25%" },
  { id: "harvest", label: "收获", tip: "划过成熟的作物批量收获" },
  { id: "fertilize", label: "施肥", tip: "用肥料让作物长得更快" },
  {
    id: "reclaim",
    label: "开垦",
    tip: "在文字附近的白纸上划过，花金币把纸开垦成草地",
  },
];
function Nn() {
  F();
  const o = p.s,
    e = p.now();
  if (b.tool === "build" || b.tool === "move") return r.jsx(An, {});
  const t = Object.values(o.objects).filter((i) => {
      var a;
      return ((a = i.plot) == null ? void 0 : a.crop) && te(i, e);
    }),
    s = (i) => {
      if (i === "plant" && !b.seed) {
        b.open({ kind: "seeds" });
        return;
      }
      if (i === "fertilize" && !(o.inv.fertilizer > 0)) {
        p.toast("没有肥料。小猪会生产肥料。", "warn");
        return;
      }
      b.setTool(b.tool === i ? "hand" : i);
      const a = Yt.find((l) => l.id === i).tip;
      b.tool === i && i !== "hand" && p.toast(a, "plain");
    },
    n = () => {
      var a;
      let i = 0;
      for (const l of t) {
        const c = l.plot.crop,
          h = p.act((f, d) => _e(f, l.id, d), { quietFail: i > 0 });
        if (!h.ok) break;
        (i++, (a = z.v) == null || a.harvestFx(l, c, h.events));
      }
      i && T("harvest");
    };
  return r.jsxs("div", {
    className: "farm-tools",
    role: "toolbar",
    "aria-label": "农具",
    children: [
      Yt.map((i) =>
        r.jsxs(
          "button",
          {
            type: "button",
            className: `tool ${b.tool === i.id ? "on" : ""}`,
            "data-act": "tool-" + i.id,
            title: i.tip,
            onClick: () => s(i.id),
            children: [
              r.jsx(In, { id: i.id }),
              r.jsx("span", { children: i.label }),
              i.id === "plant" &&
                b.seed &&
                r.jsxs("small", {
                  children: [
                    $e[b.seed].name,
                    "×",
                    o.inv["seed_" + b.seed] ?? 0,
                  ],
                }),
              i.id === "fertilize" &&
                r.jsxs("small", { children: ["×", o.inv.fertilizer ?? 0] }),
              i.id === "reclaim" &&
                r.jsxs("small", { children: [wt({ coin: Tn() }), "/格"] }),
            ],
          },
          i.id,
        ),
      ),
      b.tool === "plant" &&
        r.jsxs("button", {
          type: "button",
          className: "tool",
          "data-act": "change-seed",
          onClick: () => b.open({ kind: "seeds" }),
          children: [
            r.jsx(S, { s: oe("seed_" + (b.seed ?? "wheat")), h: 22 }),
            r.jsx("span", { children: "换种子" }),
          ],
        }),
      t.length > 0 &&
        r.jsxs(M, {
          className: "sm gold harvest-all",
          act: "harvest-all",
          onClick: n,
          children: ["一键收获 ×", t.length],
        }),
    ],
  });
}
const Tn = () => Qs(p.s);
function In({ id: o }) {
  switch (o) {
    case "hand":
      return r.jsx(S, { s: Z.hand(), h: 22 });
    case "plant":
      return r.jsx(S, { s: Z.sprout(), h: 22 });
    case "water":
      return r.jsx("span", {
        className: "emoji-ic",
        style: { color: "#5aa6d8" },
        children: "💧",
      });
    case "harvest":
      return r.jsx(S, { s: ue("wheat", 4), h: 22 });
    case "fertilize":
      return r.jsx(S, { s: oe("fertilizer"), h: 22 });
    case "reclaim":
      return r.jsx(S, { s: Z.stone(), h: 20 });
    default:
      return null;
  }
}
function An() {
  F();
  const o = b.ghost,
    e = o ? E[o.def] : b.buildDef ? E[b.buildDef] : null;
  if (!e) return null;
  const t = o != null && o.moving ? null : Xt(p.s, e.id);
  return r.jsxs("div", {
    className: "ghost-bar",
    "data-testid": "ghost-bar",
    children: [
      r.jsxs("div", {
        className: "gb-info",
        children: [
          r.jsxs("b", {
            children: [o != null && o.moving ? "移动" : "建造", "：", e.name],
          }),
          r.jsx("small", {
            className: o != null && o.ok ? "ok" : "bad",
            children: o
              ? o.ok
                ? "这里可以放 · 拖动调整位置，双击或点「放置」确认"
                : (o.reason ?? "这里放不下")
              : "把它拖到绿地上",
          }),
          t && r.jsxs("small", { children: ["花费 ", wt(t)] }),
        ],
      }),
      r.jsx(M, {
        className: "ghost sm",
        act: "ghost-cancel",
        onClick: () => b.resetTool(),
        children: "取消",
      }),
      r.jsx(M, {
        className: "primary",
        act: "ghost-ok",
        disabled: !(o != null && o.ok),
        title: o == null ? void 0 : o.reason,
        onClick: xt,
        children: o != null && o.moving ? "放到这里" : "放置",
      }),
    ],
  });
}
function $n() {
  F();
  const o = b.sheet;
  if (!o) return null;
  switch (o.kind) {
    case "object":
      return r.jsx(Di, { id: o.id }, o.id);
    case "seeds":
      return r.jsx(_i, { plotId: o.plotId });
    case "shop":
      return r.jsx(Yi, { tab: o.tab }, o.tab);
    case "warehouse":
      return r.jsx(Ui, {});
    case "codex":
      return r.jsx(Zi, {});
    case "animals":
      return r.jsx(Vi, {});
    case "diary":
      return r.jsx(Xi, {});
    case "entry":
      return r.jsx(tn, { id: o.id });
    case "quests":
      return r.jsx(sn, {});
    case "settings":
      return r.jsx(an, {});
    case "more":
      return r.jsx(on, {});
  }
  return null;
}
export { Yn as default };
