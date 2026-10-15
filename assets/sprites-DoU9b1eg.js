import { P as o, m as p } from "./pixel-CYIPeh-K.js";
const u = "#5b3f33",
  w = "#4b6a3a";
function h(e, n, W) {
  const t = Math.floor(Math.min(...n.map((c) => c[1]))),
    f = Math.ceil(Math.max(...n.map((c) => c[1]))),
    r = Math.floor(Math.min(...n.map((c) => c[0]))),
    a = Math.ceil(Math.max(...n.map((c) => c[0])));
  for (let c = t; c <= f; c++)
    for (let i = r; i <= a; i++) {
      const l = i + 0.5,
        s = c + 0.5;
      let b = !1;
      for (let x = 0, d = n.length - 1; x < n.length; d = x++) {
        const [g, O] = n[x],
          [K, Y] = n[d];
        O > s != Y > s && l < ((K - g) * (s - O)) / (Y - O) + g && (b = !b);
      }
      b && e.px(i, c, W);
    }
}
function y(e, n, W = 0) {
  let t = (e * 374761393 + n * 668265263 + W * 2246822519) | 0;
  return (
    (t = Math.imul(t ^ (t >>> 13), 1274126177)),
    ((t ^ (t >>> 16)) >>> 0) / 4294967295
  );
}
const P = [
  "..........RR...",
  ".........RRR...",
  "W.......WWWWW..",
  "WW......WWWKWW.",
  "WWW.....WWWWWYY",
  "WWWW...WWWPWWY.",
  "WWWWWWWWWWWWR..",
  "WWWWWSSSWWWWW..",
  ".WWWWSSSSWWWW..",
  ".CWWWWSSWWWWC..",
  "..CCWWWWWWWCC..",
  "...CCCCCCCCC...",
];
function F(e) {
  const n = "#e8963a",
    W = (a, c) => {
      const i = new o(19, 17);
      (i.grid(P, e, 1, 1), c && c(i), i.outline(u));
      const l = (s, b = !0, x = !0) => {
        (i.px(s, 13, n),
          b
            ? (i.px(s, 14, n), i.px(x ? s + 1 : s - 1, 14, n))
            : i.px(s + 1, 13, n));
      };
      return (
        a === "idle" && (l(6), l(9)),
        a === "a" && (l(5), l(10)),
        a === "b" && (l(7, !1), l(8)),
        a === "tuck" && (l(6, !1), l(9, !1)),
        p(i, 8.5, 15)
      );
    },
    t = (a, c) => (i) => {
      (i.shift(9, 1, 8, 6, a, c), i.rect(9, 6, 4, 2, e.W));
    },
    f = (a) => a.replace(e.K, e.W),
    r = (a) => {
      (a.rect(6, 6, 4, 2, e.S), a.px(5, 5, e.S), a.px(6, 5, e.W));
    };
  return {
    idle: W("idle"),
    blink: W("idle", f),
    walk: [W("a"), W("idle"), W("b"), W("idle")],
    peck: [W("idle", t(1, 3)), W("idle", t(2, 5))],
    happy: W("tuck", r),
  };
}
const E = { R: "#ee6b57", Y: "#f6b445", K: "#3a2a24", P: "#f8b3a5" },
  N = () => F({ ...E, W: "#fffdf7", C: "#f0dfc4", S: "#e2c8a4" }),
  L = () => F({ ...E, W: "#efc089", C: "#d9a066", S: "#c98a52" });
function D() {
  const e = {
      Y: "#ffe27e",
      S: "#f4c24c",
      K: "#3a2a24",
      O: "#f39a3a",
      P: "#f8b3a5",
    },
    n = [
      "..YYY...",
      ".YYYKY..",
      ".YYYPYO.",
      "YYYYYY..",
      "YYSSYY..",
      ".YYYYY..",
      "..YYY...",
    ],
    W = (t) => {
      const f = new o(10, 10);
      return (
        f.grid(n, e, 1, 1),
        f.outline(u),
        t === 0
          ? (f.px(4, 8, "#e8963a"), f.px(6, 8, "#e8963a"))
          : t === 1
            ? (f.px(3, 8, "#e8963a"), f.px(7, 8, "#e8963a"))
            : f.px(5, 8, "#e8963a"),
        p(f, 5, 9)
      );
    };
  return { idle: W(0), walk: [W(1), W(0), W(2), W(0)] };
}
const R = [
  "...WW.WW.WW........",
  "..WWWWWWWWWWW.WW...",
  ".WWWWWWWWWWWWWWFF..",
  "WWWWWWWWWWWWWWFFFFE",
  "WWWWWWWWWWWWWWFKFF.",
  "WWWWWWWWWWWWWWFFPF.",
  "WWWWWWWWWWWWWCWFF..",
  "CWWWWWWWWWWWWCC....",
  ".CWCWWWCWWWCWC.....",
  "..CC.CCC.CCC.......",
];
function A() {
  const e = {
      W: "#fdfbf6",
      C: "#e6ddcf",
      F: "#ecceac",
      K: "#3a2a24",
      E: "#d8ad85",
      P: "#f4b2a6",
    },
    n = "#8c6c56",
    W = (f, r) => {
      const a = new o(21, 14);
      a.grid(R, e, 1, 1);
      for (let i = 2; i < 9; i++)
        for (let l = 2; l < 15; l++)
          a.get(l, i) === e.W && y(l, i, 3) > 0.84 && a.px(l, i, e.C);
      (r && r(a), a.outline(u));
      const c = (i, l) => {
        for (let s = 0; s < l; s++) a.px(i, 11 + s, n);
      };
      return (
        f === 0 && (c(4, 2), c(7, 2), c(10, 2), c(12, 2)),
        f === 1 && (c(4, 2), c(7, 1), c(10, 2), c(12, 1)),
        f === 2 && (c(4, 1), c(7, 2), c(10, 1), c(12, 2)),
        p(a, 10.5, 13)
      );
    },
    t = (f) => f.shift(14, 1, 7, 7, 0, 3);
  return {
    idle: W(0),
    blink: W(0, (f) => f.replace(e.K, e.F)),
    walk: [W(1), W(0), W(2), W(0)],
    graze: W(0, t),
  };
}
const _ = [
  "..................H.....",
  ".................EWWH...",
  ".................WWWWWW.",
  "..WWWWWWWWWWWWWWWWWWKWW.",
  ".WWBBBWWWWWBBWWWWWWWWWWN",
  "BWWBBBBWWWBBBBWWWWWWWNNN",
  "BWWWBBWWWWWBBWWWWCWWWNNN",
  "BWWWWWWWWWWWWWWWCCC..N..",
  ".CWWWWWWWWWWWWWWC.......",
  "..CWWWCWWWWWCWWWC.......",
  "..CCCCCCCCCCCCCC........",
];
function j() {
  const e = {
      W: "#fffaf2",
      B: "#a8724f",
      C: "#eadccb",
      N: "#f3aba1",
      H: "#f4e5c2",
      K: "#3a2a24",
      E: "#a8724f",
    },
    n = "#f3e8da",
    W = "#5e4636",
    t = (c, i) => {
      const l = new o(26, 16);
      (l.grid(_, e, 1, 1),
        i && i(l),
        l.px(11, 12, "#f3aba1"),
        l.px(12, 12, "#f3aba1"),
        l.outline(u));
      const s = (b, x) => {
        for (let d = 0; d < x; d++)
          (l.px(b, 12 + d, n), l.px(b + 1, 12 + d, n));
        (l.px(b, 12 + x, W), l.px(b + 1, 12 + x, W));
      };
      return (
        c === 0 && (s(3, 2), s(6, 2), s(13, 2), s(15, 2)),
        c === 1 && (s(3, 2), s(6, 1), s(13, 1), s(15, 2)),
        c === 2 && (s(3, 1), s(6, 2), s(13, 2), s(15, 1)),
        p(l, 12.5, 15)
      );
    },
    f = [
      "....H......H....",
      "...EWWWWWWWWE...",
      "....WWWWWWWW....",
      "...WWWWWWWWWW...",
      "..WWBBWWWWWWWW..",
      ".WWBBBWWWWBBWWW.",
      ".WWWBWWWWWBBBWW.",
      ".WWWWWWWWWWBWWW.",
      ".WWWWWWWWWWWWWW.",
      ".WWWWWWBWWWWWWW.",
      "..WWWWWBWWWWWW..",
      "..CWWWWBWWWWWC..",
      "...CCCC.CCCCC...",
    ],
    r = (c) => {
      const i = new o(18, 17);
      (i.grid(f, e, 1, 1), i.outline(u));
      const l = (s, b) => {
        for (let x = 0; x < b; x++)
          (i.px(s, 14 + x, n), i.px(s + 1, 14 + x, n));
        (i.px(s, 14 + b, W), i.px(s + 1, 14 + b, W));
      };
      return (c === 0 ? (l(4, 1), l(12, 0)) : (l(4, 0), l(12, 1)), p(i, 9, 16));
    },
    a = (c) => c.shift(17, 1, 8, 8, 0, 3);
  return {
    idle: t(0),
    blink: t(0, (c) => c.replace(e.K, e.W)),
    walk: [t(1), t(0), t(2), t(0)],
    graze: t(0, a),
    back: [r(0), r(1)],
  };
}
function z() {
  const e = new o(32, 28),
    n = "#dcab6f",
    W = "#c08c56",
    t = "#a8743f";
  e.rect(4, 12, 24, 13, n);
  for (let f = 4; f <= 27; f += 4) e.vline(f, 13, 24, W);
  (e.px(9, 17, W),
    e.px(22, 20, W),
    e.px(14, 21, W),
    e.hline(4, 27, 13, t),
    e.hline(4, 27, 24, t),
    h(
      e,
      [
        [16, 2],
        [1, 13],
        [31, 13],
      ],
      "#b37a45",
    ));
  for (let f = 4; f <= 12; f += 2)
    for (let r = 0; r < 32; r++)
      e.get(r, f) === "#b37a45" && e.px(r, f, "#9a6639");
  for (let f = 0; f < 15; f++)
    (e.px(16 - f, 2 + f * 0.73, "#d29d63"),
      e.px(16 + f, 2 + f * 0.73, "#c48d55"));
  return (
    e.rect(20, 7, 3, 2, "#cf9b62"),
    e.px(11, 9, "#6f4a2e"),
    e.rect(13, 16, 6, 9, "#5a3c2c"),
    e.vline(13, 17, 24, "#6f4a35"),
    e.px(13, 16, n),
    e.px(18, 16, n),
    e.hline(14, 17, 24, "#e8c66a"),
    e.line(18, 25, 24, 26, "#c29058"),
    e.line(18, 24, 24, 25, "#d6a56b"),
    e.rect(6, 15, 4, 4, "#f3e2bf"),
    e.px(7, 16, "#fffaf0"),
    e.px(8, 16, "#fffaf0"),
    e.px(7, 17, "#fffaf0"),
    e.px(8, 17, "#f1dcb8"),
    [
      [3, 25],
      [5, 25],
      [26, 25],
      [28, 25],
      [10, 25],
    ].forEach(([f, r]) => {
      (e.px(f, r, "#ecd07a"), e.px(f + 1, r - 1, "#d9b65a"));
    }),
    e.outline(u),
    p(e, 16, 27)
  );
}
function T() {
  const e = new o(42, 44),
    n = "#f8ead0",
    W = "#a5693f",
    t = "#df6a50",
    f = "#c4523e",
    r = "#f08a6c";
  e.rect(5, 37, 32, 4, "#cfc3b0");
  for (let a = 5; a < 37; a += 4)
    (e.vline(a, 37, 38, "#b5a893"), e.vline(a + 2, 39, 40, "#b5a893"));
  (e.hline(5, 36, 39, "#b5a893"),
    e.rect(6, 22, 30, 15, n),
    e.vline(6, 22, 36, W),
    e.vline(35, 22, 36, W),
    e.vline(20, 22, 26, W),
    e.hline(6, 35, 22, W),
    e.hline(6, 35, 36, W),
    e.line(7, 27, 12, 23, W),
    e.line(29, 23, 34, 27, W));
  for (const a of [9, 27])
    (e.rect(a, 26, 6, 5, W),
      e.rect(a + 1, 27, 4, 3, "#ffe9a8"),
      e.px(a + 3, 27, "#fff6d6"),
      e.vline(a + 3, 27, 29, W),
      e.rect(a - 1, 31, 8, 2, "#8b5a3c"),
      ["#f39bb0", "#ffd36b", "#fff6ea", "#f39bb0"].forEach((c, i) =>
        e.px(a + i * 2, 30, c),
      ));
  (e.rect(17, 27, 8, 10, "#9a6240"),
    e.vline(19, 28, 36, "#7f4e33"),
    e.vline(22, 28, 36, "#7f4e33"),
    e.px(17, 27, n),
    e.px(24, 27, n),
    e.px(20, 30, "#f07f7a"),
    e.px(21, 30, "#f07f7a"),
    e.px(19, 30, "#f07f7a"),
    e.px(22, 30, "#f07f7a"),
    e.hline(19, 22, 31, "#f07f7a"),
    e.hline(20, 21, 32, "#f07f7a"),
    e.px(23, 33, "#ffd36b"),
    h(
      e,
      [
        [21, 6],
        [0, 24],
        [42, 24],
      ],
      t,
    ));
  for (let a = 9; a <= 23; a += 3)
    for (let c = 0; c < 42; c++)
      e.get(c, a) === t && (c + a) % 2 === 0 && e.px(c, a, f);
  for (let a = 0; a <= 21; a++)
    (e.px(21 - a, 6 + a * 0.857, r), e.px(21 + a, 6 + a * 0.857, f));
  return (
    e.hline(1, 41, 24, "#fff4dc"),
    e.ellipse(21, 15, 3, 3, W),
    e.ellipse(21, 15, 2, 2, "#ffe9a8"),
    e.hline(19, 23, 15, W),
    e.vline(21, 13, 17, W),
    e.vline(21, 1, 6, "#6b4a35"),
    e.hline(19, 23, 3, "#6b4a35"),
    e.rect(20, 0, 3, 2, "#e9a23b"),
    e.px(23, 0, "#e9a23b"),
    e.px(19, 1, "#e9a23b"),
    e.outline(u),
    p(e, 21, 42)
  );
}
function U() {
  const e = new o(30, 46),
    n = "#efe2c8",
    W = "#d6c3a0";
  h(
    e,
    [
      [9, 14],
      [21, 14],
      [24, 45],
      [6, 45],
    ],
    n,
  );
  for (let t = 16; t < 45; t += 4) {
    for (let r = 0; r < 30; r++) e.get(r, t) === n && e.px(r, t, W);
    const f = (t / 4) % 2 ? 0 : 3;
    for (let r = 6 + f; r < 25; r += 6)
      for (let a = 1; a < 4; a++) e.get(r, t + a) === n && e.px(r, t + a, W);
  }
  for (let t = 14; t < 46; t++)
    for (let f = 15; f < 30; f++)
      e.get(f, t) &&
        e.get(f + 2, t) === null &&
        e.get(f + 1, t) &&
        e.px(f, t, "#dccaa8");
  (e.rect(12, 37, 6, 8, "#8a5a3c"),
    e.px(12, 37, n),
    e.px(17, 37, n),
    e.vline(14, 38, 44, "#744a30"),
    e.rect(13, 24, 4, 4, "#7a5236"),
    e.rect(14, 25, 2, 2, "#ffe7a3"),
    h(
      e,
      [
        [15, 4],
        [6, 15],
        [24, 15],
      ],
      "#b5653f",
    ));
  for (let t = 7; t < 15; t += 2)
    for (let f = 0; f < 30; f++)
      e.get(f, t) === "#b5653f" && f % 2 && e.px(f, t, "#9a5233");
  return (e.hline(6, 24, 15, "#8a4a30"), e.outline(u), p(e, 15, 45));
}
function G() {
  const n = new o(44, 44),
    W = 44 / 2,
    t = "#8a5d3d",
    f = "#fff4de",
    r = "#dcc9a6";
  for (let a = 0; a < 4; a++) {
    const c = (i, l) => {
      switch (a) {
        case 0:
          return [W + i, W - l];
        case 1:
          return [W + l, W + i];
        case 2:
          return [W - i, W + l];
        default:
          return [W - l, W - i];
      }
    };
    for (let i = 1; i < 21; i++) {
      const [l, s] = c(0, i);
      if ((n.px(l, s, t), i > 5))
        for (let b = 1; b <= 5; b++) {
          const [x, d] = c(b, i);
          n.px(x, d, i % 3 === 0 || b === 3 ? r : f);
        }
    }
  }
  return (
    n.outline("#6b4a35"),
    n.ellipse(W, W, 2, 2, "#6b4a35"),
    n.px(W - 1, W - 1, "#a07450"),
    p(n, W, W)
  );
}
function X() {
  const e = new o(50, 46);
  e.rect(35, 5, 5, 12, "#c9bba5");
  for (let f = 6; f < 17; f += 3) e.hline(35, 39, f, "#ad9f88");
  e.rect(34, 4, 7, 2, "#ad9f88");
  for (let f = 22; f < 41; f++) {
    const r = (f - 22) % 3;
    e.hline(6, 43, f, r === 0 ? "#cf955f" : r === 1 ? "#b97d4a" : "#9c663c");
  }
  for (let f = 22; f < 41; f += 3)
    (e.rect(4, f, 3, 3, "#e3b47d"),
      e.px(5, f + 1, "#b97d4a"),
      e.rect(43, f, 3, 3, "#e3b47d"),
      e.px(44, f + 1, "#b97d4a"));
  const n = "#7fa67a",
    W = "#678c63",
    t = "#a0c391";
  h(
    e,
    [
      [25, 3],
      [0, 24],
      [50, 24],
    ],
    n,
  );
  for (let f = 6; f < 24; f += 3)
    for (let r = 0; r < 50; r++)
      e.get(r, f) === n && (r + f / 3) % 3 !== 0 && e.px(r, f, W);
  for (let f = 0; f <= 25; f++)
    (e.px(25 - f, 3 + f * 0.84, t), e.px(25 + f, 3 + f * 0.84, W));
  (e.hline(1, 49, 24, "#56784f"),
    e.ellipse(25, 15, 3, 3, "#7a4f33"),
    e.ellipse(25, 15, 2, 2, "#ffe39a"));
  for (const f of [10, 33])
    (e.rect(f, 27, 7, 6, "#7a4f33"),
      e.rect(f + 1, 28, 5, 4, "#ffe39a"),
      e.vline(f + 3, 28, 31, "#7a4f33"),
      e.hline(f + 1, f + 5, 29, "#7a4f33"),
      e.px(f + 1, 28, "#fff3c9"),
      e.rect(f - 2, 27, 2, 6, n),
      e.rect(f + 7, 27, 2, 6, n),
      ["#f39bb0", "#ffd36b", "#f39bb0"].forEach((r, a) =>
        e.px(f + 1 + a * 2, 33, r),
      ),
      e.hline(f, f + 6, 34, "#8b5a3c"));
  return (
    e.rect(22, 29, 7, 12, "#8b5a3c"),
    e.vline(24, 30, 40, "#744a30"),
    e.vline(26, 30, 40, "#744a30"),
    e.px(22, 29, "#9c663c"),
    e.px(28, 29, "#9c663c"),
    e.px(27, 35, "#ffd36b"),
    e.ellipse(25.5, 31.5, 1.6, 1.6, "#6f9a52"),
    e.px(25, 31, "#e85a4c"),
    e.rect(18, 41, 15, 3, "#c79560"),
    e.hline(18, 32, 41, "#ddb07a"),
    e.outline(u),
    p(e, 25, 44)
  );
}
function I() {
  const e = new o(56, 50),
    n = "#d0604f",
    W = "#b94f41",
    t = "#fff4e2",
    f = "#8f4a3c",
    r = "#7a3d31",
    a = "#a95a4b";
  e.rect(6, 22, 44, 25, n);
  for (let c = 8; c < 50; c += 3) e.vline(c, 22, 46, W);
  h(
    e,
    [
      [2, 23],
      [9, 10],
      [28, 3],
      [47, 10],
      [54, 23],
    ],
    f,
  );
  for (let c = 6; c < 23; c += 3)
    for (let i = 0; i < 56; i++)
      e.get(i, c) === f && i % 4 !== 0 && e.px(i, c, r);
  (e.line(2, 23, 9, 10, a),
    e.line(9, 10, 28, 3, a),
    e.line(28, 3, 47, 10, r),
    e.line(47, 10, 54, 23, r),
    e.hline(3, 53, 23, t),
    e.rect(19, 30, 18, 17, W),
    e.rect(19, 30, 18, 1, t),
    e.vline(19, 30, 46, t),
    e.vline(36, 30, 46, t),
    e.vline(28, 30, 46, t),
    e.line(19, 30, 28, 46, t),
    e.line(28, 30, 19, 46, t),
    e.line(28, 30, 36, 46, t),
    e.line(36, 30, 28, 46, t),
    e.rect(23, 12, 10, 8, "#5b3f33"),
    e.rect(23, 12, 10, 1, t),
    e.vline(23, 12, 19, t),
    e.vline(32, 12, 19, t),
    e.rect(24, 17, 8, 3, "#f1d27a"),
    e.px(25, 16, "#f1d27a"),
    e.px(28, 15, "#e2bd5a"),
    e.px(30, 16, "#f1d27a"));
  for (const c of [9, 41])
    (e.rect(c, 28, 6, 6, t),
      e.rect(c + 1, 29, 4, 4, "#ffe39a"),
      e.vline(c + 3, 29, 32, t));
  return (e.hline(5, 50, 47, "#a8463a"), e.outline(u), p(e, 28, 48));
}
function M(e, n, W, t) {
  const f = n[0][0],
    r = n[0][1];
  for (const [a, c, i, l] of n) e.ellipse(a, c, i, l, "L");
  for (let a = 0; a < e.h; a++)
    for (let c = 0; c < e.w; c++) {
      if (e.get(c, a) !== "L") continue;
      const i =
        (c - f) * 0.05 + (a - r) * 0.08 + (y(c >> 1, a >> 1, t) - 0.5) * 0.5;
      e.px(c, a, i < -0.45 ? W[0] : i < 0.15 ? W[1] : W[2]);
    }
}
function C(e = "apple", n = 1) {
  const W = new o(32, 40);
  if (
    (W.rect(14, 24, 4, 14, "#9b6a45"),
    W.vline(14, 24, 37, "#7d5236"),
    W.px(13, 37, "#9b6a45"),
    W.px(18, 37, "#9b6a45"),
    W.line(16, 26, 20, 21, "#9b6a45"),
    M(
      W,
      [
        [16, 14, 11, 9],
        [8, 18, 7, 6],
        [24, 18, 7, 6],
        [16, 7, 8, 6],
      ],
      ["#acd77f", "#88bf64", "#6aa04e"],
      n,
    ),
    e !== "plain")
  ) {
    const t = e === "apple" ? ["#e85a4c", "#ff9d8c"] : ["#f6a23a", "#ffd38a"];
    [
      [9, 14],
      [20, 10],
      [15, 19],
      [24, 18],
      [12, 8],
      [6, 20],
      [19, 22],
    ].forEach(([f, r]) => {
      (W.rect(f, r, 2, 2, t[0]), W.px(f, r, t[1]));
    });
  }
  return (W.outline(w), p(W, 16, 38));
}
function m(e = 2, n = !1) {
  const W = new o(18, 12);
  return (
    M(
      W,
      [
        [9, 7, 8, 4.6],
        [5, 6, 4, 3.5],
        [12, 5, 5, 4],
      ],
      ["#acd77f", "#88bf64", "#6aa04e"],
      e,
    ),
    n &&
      [
        [5, 5],
        [10, 4],
        [13, 7],
        [7, 8],
      ].forEach(([t, f]) => W.px(t, f, "#f07f9a")),
    W.outline(w),
    p(W, 9, 11)
  );
}
function q() {
  const e = new o(16, 12);
  return (
    e.ellipse(8, 6, 7, 5, "#f0cf6f"),
    e.ellipse(8, 6, 4.5, 3.2, "#e2bb55"),
    e.ellipse(8, 6, 2.2, 1.6, "#f0cf6f"),
    e.px(8, 6, "#d6ab45"),
    e.px(3, 3, "#fae49a"),
    e.px(4, 2, "#fae49a"),
    e.outline(u),
    p(e, 8, 11)
  );
}
function S(e = !1) {
  const n = new o(18, 9);
  if (
    (n.rect(1, 2, 16, 5, "#b07a48"),
    n.hline(1, 16, 2, "#cf9a62"),
    n.rect(2, 3, 14, 2, e ? "#f0c95a" : "#7a5236"),
    e)
  )
    for (let W = 2; W < 16; W += 2) n.px(W, 3, "#ffe39a");
  return (
    n.rect(2, 7, 2, 1, "#8a5d3d"),
    n.rect(14, 7, 2, 1, "#8a5d3d"),
    n.outline(u),
    p(n, 9, 8)
  );
}
function J() {
  const e = new o(5, 11);
  return (
    e.rect(1, 1, 3, 9, "#d4a46c"),
    e.vline(3, 2, 9, "#b98a55"),
    e.hline(1, 3, 1, "#e8c08a"),
    e.outline(u),
    p(e, 2.5, 10)
  );
}
function Q() {
  const e = new o(10, 15);
  return (
    e.rect(4, 7, 2, 7, "#9b6a45"),
    e.rect(1, 2, 8, 5, "#6fa0c8"),
    e.hline(1, 8, 2, "#8fbde0"),
    e.px(1, 2, null),
    e.px(8, 2, null),
    e.rect(8, 1, 1, 3, "#e85a4c"),
    e.px(9, 1, "#e85a4c"),
    e.outline(u),
    p(e, 5, 14)
  );
}
function V() {
  const e = new o(18, 26);
  return (
    e.vline(9, 9, 24, "#9b6a45"),
    e.hline(2, 15, 12, "#9b6a45"),
    e.rect(6, 11, 7, 8, "#7fa6c8"),
    e.rect(7, 13, 2, 2, "#e6c26a"),
    e.hline(3, 5, 12, "#f0cf6f"),
    e.hline(13, 15, 12, "#f0cf6f"),
    e.ellipse(9.5, 7, 3.4, 3.4, "#f3dfb5"),
    e.px(8, 7, "#3a2a24"),
    e.px(11, 7, "#3a2a24"),
    e.px(9, 8, "#e88a6c"),
    e.px(10, 8, "#e88a6c"),
    e.hline(5, 14, 3, "#d9a65a"),
    e.rect(7, 0, 6, 3, "#d9a65a"),
    e.hline(7, 12, 2, "#e85a4c"),
    e.outline(u),
    p(e, 9, 25)
  );
}
function Z() {
  const e = new o(16, 14);
  return (
    e.rect(7, 6, 2, 7, "#9b6a45"),
    e.rect(1, 1, 14, 6, "#e0b47a"),
    e.hline(1, 14, 1, "#f0cb96"),
    e.hline(2, 13, 4, "#c9965b"),
    e.hline(3, 7, 3, "#8a5d3d"),
    e.hline(9, 12, 3, "#8a5d3d"),
    e.outline(u),
    p(e, 8, 13)
  );
}
function $(e, n = 0) {
  const W = new o(7, 8);
  return (
    W.vline(3, 3, 6, "#6aa04e"),
    W.px(2, 5, "#88bf64"),
    W.px(3, 1, e),
    W.px(2, 2, e),
    W.px(4, 2, e),
    W.px(3, 3, e),
    W.px(3, 2, n % 2 ? "#fff4b8" : "#ffd36b"),
    W.outline(w),
    p(W, 3.5, 7)
  );
}
function ee() {
  const e = new o(8, 7);
  return (
    e.ellipse(4, 3, 3, 2, "#e8705c"),
    e.px(3, 2, "#fff4e2"),
    e.px(5, 3, "#fff4e2"),
    e.rect(3, 4, 2, 2, "#f6e7cc"),
    e.outline(u),
    p(e, 4, 6)
  );
}
function We() {
  const e = new o(8, 6);
  return (
    e.ellipse(4, 3, 3, 2, "#d3cbbd"),
    e.px(3, 2, "#ebe4d8"),
    e.hline(3, 5, 4, "#bdb4a5"),
    e.outline(u),
    p(e, 4, 5)
  );
}
function fe() {
  const e = new o(7, 8);
  return (
    e.ellipse(3.5, 4.2, 2.6, 3.2, "#fff8ea"),
    e.px(2, 2, "#ffffff"),
    e.px(4, 6, "#efdcbf"),
    e.px(5, 5, "#efdcbf"),
    e.px(3, 6, "#f5e7cf"),
    e.outline(u),
    p(e, 3.5, 7)
  );
}
function ne() {
  const e = new o(18, 6);
  e.ellipse(9, 3, 8, 2.2, "#e8c66a");
  for (let n = 2; n < 17; n += 2) e.px(n, 2 + (n % 4 ? 1 : 0), "#cfa94c");
  return (e.outline(u), p(e, 9, 5));
}
function te() {
  const e = new o(46, 46),
    n = "#c49563",
    W = "#a57745";
  for (const t of [3, 15, 30, 42]) e.rect(t, 4, 2, 41, n);
  for (const t of [8, 20, 32, 44]) e.rect(2, t, 43, 2, W);
  return (
    e.line(4, 44, 16, 9, n),
    e.line(31, 44, 43, 9, n),
    e.line(16, 32, 31, 20, n),
    e.rect(6, 22, 8, 9, "#8fb3cf"),
    e.hline(6, 13, 22, "#b2cfe3"),
    e.outline(u),
    p(e, 23, 45)
  );
}
function ce() {
  const e = new o(10, 11);
  return (
    e.line(2, 9, 6, 4, "#b07a48"),
    e.line(3, 9, 7, 4, "#c99260"),
    e.rect(4, 1, 5, 3, "#9aa3ab"),
    e.hline(4, 8, 1, "#c7cfd6"),
    e.rect(3, 2, 1, 2, "#7d868e"),
    e.outline(u),
    p(e, 5, 6)
  );
}
function ae() {
  const e = new o(12, 13);
  return (
    e.rect(2, 4, 8, 8, "#d8b07a"),
    e.rect(3, 3, 6, 1, "#c99a60"),
    e.rect(4, 1, 4, 2, "#d8b07a"),
    e.hline(3, 8, 3, "#9b6a45"),
    e.px(5, 7, "#6aa04e"),
    e.px(6, 6, "#88bf64"),
    e.px(6, 8, "#6aa04e"),
    e.px(7, 7, "#88bf64"),
    e.vline(9, 5, 11, "#c09460"),
    e.outline(u),
    p(e, 6, 12)
  );
}
function ie() {
  const e = new o(9, 8);
  return (
    e.grid(
      [".HH.HH.", "HLHHHHH", "HHHHHHH", ".HHHHH.", "..HHH..", "...H..."],
      { H: "#f37b7b", L: "#ffd0c8" },
      1,
      1,
    ),
    e.outline("#a8463a"),
    p(e, 4.5, 4)
  );
}
function re() {
  const e = new o(12, 14);
  for (const [n, W] of [
    [3, 5],
    [6, 6],
    [9, 7],
  ])
    e.line(n, 2, W, 12, "#c9a24a");
  for (const n of [3, 6, 9])
    (e.rect(n - 1, 1, 2, 4, "#f2c75a"), e.px(n - 1, 1, "#ffe59a"));
  return (e.hline(4, 8, 8, "#a5693f"), e.outline("#8a6232"), p(e, 6, 13));
}
function le() {
  const e = new o(12, 13);
  return (
    e.rect(2, 4, 8, 8, "#efe2c4"),
    e.rect(3, 2, 6, 2, "#efe2c4"),
    e.hline(3, 8, 4, "#c9b78f"),
    e.rect(4, 7, 4, 3, "#f0c95a"),
    e.px(5, 8, "#ffe39a"),
    e.vline(9, 5, 11, "#d8c7a2"),
    e.outline(u),
    p(e, 6, 12)
  );
}
function oe() {
  const e = new o(11, 11);
  return (
    e.ellipse(5.5, 5.5, 4.6, 4.6, "#f6c445"),
    e.ellipse(5.5, 5.5, 3.2, 3.2, "#ffd96b"),
    e.rect(4, 4, 3, 3, "#d99a2b"),
    e.rect(5, 5, 1, 1, "#ffd96b"),
    e.px(3, 2, "#fff2b8"),
    e.px(2, 3, "#fff2b8"),
    e.outline("#a8742a"),
    p(e, 5.5, 5.5)
  );
}
function pe() {
  const e = new o(8, 9);
  return (
    e.ellipse(4, 4.5, 2.5, 3.4, "#f7c948"),
    e.px(3, 2, "#fff3b0"),
    e.px(3, 3, "#ffe27a"),
    e.px(5, 6, "#dba32c"),
    e.px(4, 7, "#dba32c"),
    e.outline("#a8742a"),
    p(e, 4, 4.5)
  );
}
function se() {
  const e = new o(9, 9);
  return (
    e.vline(4, 3, 7, "#6aa04e"),
    e.rect(1, 2, 3, 2, "#9ccf6e"),
    e.rect(5, 1, 3, 2, "#88bf64"),
    e.px(2, 2, "#c4e69a"),
    e.hline(2, 6, 7, "#9b6a45"),
    e.outline(w),
    p(e, 4.5, 8)
  );
}
function k(e = !1) {
  const n = [
      "....OO......",
      "...OWWO.....",
      "...OWWO.....",
      "...OWWO.....",
      "...OWWOOO...",
      "...OWWOWWOO.",
      "OO.OWWOWWOWO",
      "OWOOWWWWWOWO",
      "OWWOWWWWWWWO",
      ".OWWWWWWWWWO",
      "..OWWWWWWWSO",
      "...OWWWWWSO.",
      "....OWWWWSO.",
      "....OSSSSO..",
      "....OOOOOO..",
    ],
    W = new o(14, 17);
  return (
    W.grid(
      n,
      { O: "#4a3428", W: e ? "#fff0dc" : "#fffaf0", S: "#e6d2b6" },
      1,
      1,
    ),
    p(W, 5.5, 1.5)
  );
}
function v(e = "#fff6c8") {
  const n = new o(7, 7);
  return (
    n.vline(3, 0, 6, e),
    n.hline(0, 6, 3, e),
    n.rect(2, 2, 3, 3, e),
    n.px(3, 3, "#ffffff"),
    p(n, 3.5, 3.5)
  );
}
function H(e, n) {
  const W = (t) => {
    const f = new o(9, 7);
    return (
      t
        ? (f.rect(1, 1, 3, 3, e),
          f.rect(5, 1, 3, 3, e),
          f.rect(2, 4, 2, 2, n),
          f.rect(5, 4, 2, 2, n))
        : (f.rect(3, 1, 1, 4, e), f.rect(5, 1, 1, 4, e)),
      f.vline(4, 1, 5, "#5b3f33"),
      p(f, 4.5, 3.5)
    );
  };
  return [W(!0), W(!1)];
}
function ue() {
  const e = new o(40, 20);
  (e.ellipse(20, 10, 19, 9, "#cfc3b0"),
    e.ellipse(20, 10, 17, 7.6, "#9fd3e0"),
    e.ellipse(16, 8, 9, 3.5, "#b9e2ea"),
    e.hline(10, 16, 7, "#e6f6f8"),
    e.hline(24, 28, 12, "#e6f6f8"),
    e.ellipse(28, 8, 2.6, 1.8, "#88bf64"),
    e.px(28, 7, "#f39bb0"));
  for (let n = 0; n < 40; n += 5) {
    const W = 10 + Math.round(Math.sin(n) * 8);
    e.get(n, W) === "#cfc3b0" && e.px(n, W, "#b5a893");
  }
  return (e.outline(u), p(e, 20, 10));
}
function be() {
  return {
    chickenW: N(),
    chickenB: L(),
    chick: D(),
    sheep: A(),
    cow: j(),
    coop1: z(),
    coop2: T(),
    windmill: U(),
    blades: G(),
    cabin: X(),
    barn: I(),
    apple: C("apple", 3),
    apple2: C("apple", 7),
    orange: C("orange", 11),
    tree: C("plain", 5),
    bush: m(2),
    berryBush: m(9, !0),
    hay: q(),
    trough: S(!1),
    troughFull: S(!0),
    post: J(),
    mailbox: Q(),
    scarecrow: V(),
    sign: Z(),
    flowers: ["#f39bb0", "#fff6ea", "#ffd36b", "#c7a6f0", "#f0866e"].map(
      (e, n) => $(e, n),
    ),
    mushroom: ee(),
    stone: We(),
    egg: fe(),
    nest: ne(),
    scaffold: te(),
    hammer: ce(),
    seedBag: ae(),
    heart: ie(),
    wheat: re(),
    feed: le(),
    coin: oe(),
    ink: pe(),
    sprout: se(),
    hand: k(!1),
    handDown: k(!0),
    sparkle: v(),
    sparkleGold: v("#ffd96b"),
    butterflyA: H("#f7b7c8", "#f39bb0"),
    butterflyB: H("#fff1a8", "#f6c445"),
    pond: ue(),
  };
}
let B = null;
function de() {
  return (B || (B = be()), B);
}
export {
  D as babyChick,
  I as barn,
  be as buildAtlas,
  m as bush,
  H as butterfly,
  X as cabin,
  L as chickenBrown,
  N as chickenWhite,
  oe as coin,
  z as coopLv1,
  T as coopLv2,
  j as cowSet,
  fe as egg,
  le as feedSack,
  J as fencePost,
  $ as flower,
  C as fruitTree,
  de as getAtlas,
  ce as hammer,
  k as handPointer,
  q as hayBale,
  ie as heart,
  pe as inkGrain,
  Q as mailbox,
  ee as mushroom,
  ne as nest,
  ue as pondSprite,
  te as scaffold,
  V as scarecrow,
  ae as seedBag,
  A as sheepSet,
  Z as signPost,
  v as sparkleStar,
  se as sprout,
  We as stone,
  S as trough,
  re as wheatBundle,
  G as windmillBlades,
  U as windmillTower,
};
