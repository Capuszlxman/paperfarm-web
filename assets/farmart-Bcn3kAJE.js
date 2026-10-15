import { P as i, m as r } from "./pixel-CYIPeh-K.js";
const v = "#5b3f33",
  w = "#4b6a3a";
function h(e = !1) {
  const n = new i(18, 18),
    o = e ? "#9a6e4a" : "#bb8b5f",
    l = e ? "#7f5838" : "#a27450",
    f = e ? "#b08158" : "#d1a273";
  (n.rect(1, 1, 16, 16, o),
    n.px(1, 1, null),
    n.px(16, 1, null),
    n.px(1, 16, null),
    n.px(16, 16, null));
  for (const t of [4, 8, 12]) (n.hline(3, 14, t, l), n.hline(3, 14, t - 1, f));
  return (
    n.hline(2, 15, 15, l),
    [
      [5, 6],
      [11, 10],
      [8, 13],
      [13, 5],
    ].forEach(([t, p]) => n.px(t, p, f)),
    n.outline(v),
    r(n, 9, 9)
  );
}
function L() {
  const e = new i(18, 18);
  for (let n = 2; n < 16; n += 2)
    (e.px(n, 1, "#d8c7a8"),
      e.px(n, 16, "#d8c7a8"),
      e.px(1, n, "#d8c7a8"),
      e.px(16, n, "#d8c7a8"));
  return r(e, 9, 9);
}
const m = "#f2c75a",
  x = "#ffe59a",
  u = "#d6a13e",
  O = "#c9a24a",
  a = "#9ccf6e",
  s = "#79b356",
  T = "#5e9445";
function y(e) {
  const n = new i(18, 26),
    o = 22,
    l = [4, 9, 14],
    f = [o - 6, o];
  if (e === 0)
    for (const t of f)
      for (const p of l)
        (n.px(p - 1, t - 1, "#8f6542"),
          n.px(p, t - 1, "#8f6542"),
          n.px(p + 1, t - 1, "#8f6542"),
          n.px(p, t - 2, "#f1d9a0"),
          n.px(p - 1, t - 2, "#e6c98a"));
  else
    for (const t of f)
      for (const p of l) {
        const G = ((p * 7 + t) % 3) - 1,
          c = p + (t === f[0] ? G * 0 : 0);
        e === 1
          ? (n.px(c, t - 1, s),
            n.px(c, t - 2, a),
            n.px(c - 1, t - 3, a),
            n.px(c + 1, t - 2, s))
          : e === 2
            ? (n.vline(c, t - 6, t - 1, s),
              n.px(c - 1, t - 4, a),
              n.px(c - 2, t - 5, a),
              n.px(c + 1, t - 3, a),
              n.px(c + 2, t - 4, s),
              n.px(c, t - 7, a))
            : e === 3
              ? (n.vline(c, t - 10, t - 1, s),
                n.vline(c - 1, t - 7, t - 2, T),
                n.px(c + 1, t - 4, a),
                n.px(c + 2, t - 5, a),
                n.px(c - 2, t - 6, a),
                n.rect(c, t - 13, 1, 3, "#cfd77a"),
                n.px(c - 1, t - 12, "#b8c865"))
              : (n.vline(c, t - 9, t - 1, O),
                n.vline(c - 1, t - 7, t - 2, "#b38d3c"),
                n.px(c + 1, t - 4, "#a6b85a"),
                n.px(c + 2, t - 5, "#a6b85a"),
                n.rect(c - 1, t - 15, 3, 6, m),
                n.px(c - 1, t - 15, x),
                n.px(c, t - 16, x),
                n.px(c - 1, t - 13, x),
                n.px(c + 1, t - 11, u),
                n.px(c + 1, t - 13, u),
                n.px(c, t - 10, u),
                n.px(c + 2, t - 17, "#e8cf8a"),
                n.px(c - 2, t - 16, "#e8cf8a"));
      }
  return (
    n.outline(e === 4 ? "#8a6232" : e === 0 ? "#00000000" : w),
    e === 0 && n.replace("#00000000", null),
    r(n, 9, o + 1)
  );
}
function A() {
  const e = new i(18, 20);
  for (const [n, o] of [
    [5, 10],
    [12, 10],
    [5, 17],
    [12, 17],
  ])
    (e.ellipse(n, o - 2, 3.4, 2.8, "#9ccf6e"),
      e.ellipse(n, o - 2.5, 2, 1.6, "#c4e69a"),
      e.px(n, o - 2, "#e1f3c4"),
      e.px(n - 3, o - 1, "#79b356"),
      e.px(n + 3, o - 1, "#79b356"));
  return (e.outline(w), r(e, 9, 19));
}
function M() {
  const e = new i(12, 30);
  (e.vline(6, 9, 28, "#6aa04e"),
    e.vline(5, 12, 27, "#79b356"),
    e.rect(7, 16, 3, 2, "#88bf64"),
    e.rect(2, 20, 3, 2, "#88bf64"),
    e.ellipse(6, 6, 5, 5, "#f6c445"));
  for (let n = 0; n < 8; n++)
    e.px(
      6 + Math.round(Math.cos(n * 0.785) * 5),
      6 + Math.round(Math.sin(n * 0.785) * 5),
      "#ffd96b",
    );
  return (
    e.ellipse(6, 6, 2.4, 2.4, "#8a5d3d"),
    e.px(5, 5, "#a8774f"),
    e.outline(v),
    r(e, 6, 29)
  );
}
function b(e = 0) {
  const n = new i(9, 7),
    o = "#88bf64",
    l = "#6aa04e",
    f = "#acd77f";
  return (
    e === 0
      ? (n.vline(2, 3, 5, l),
        n.vline(4, 1, 5, o),
        n.vline(6, 2, 5, l),
        n.px(3, 2, f))
      : e === 1
        ? (n.vline(3, 2, 5, o),
          n.vline(5, 3, 5, l),
          n.px(2, 3, l),
          n.px(6, 2, f))
        : (n.vline(2, 2, 5, o),
          n.vline(4, 3, 5, l),
          n.vline(6, 1, 5, o),
          n.vline(7, 3, 5, l)),
    r(n, 4.5, 6)
  );
}
function S() {
  const e = new i(5, 3);
  return (e.hline(0, 4, 1, m), e.px(1, 0, x), e.px(3, 2, u), r(e, 2.5, 1.5));
}
function k() {
  const e = new i(8, 3);
  return (
    e.rect(0, 0, 8, 3, "#d4a46c"),
    e.hline(0, 7, 2, "#b98a55"),
    e.px(2, 1, "#e8c08a"),
    r(e, 4, 1.5)
  );
}
function D() {
  return {
    soil: h(!1),
    soilWet: h(!0),
    ghost: L(),
    wheat: [0, 1, 2, 3, 4].map(y),
    cabbage: A(),
    sunflower: M(),
    tufts: [b(0), b(1), b(2)],
    straw: S(),
    plank: k(),
  };
}
let d = null;
function _() {
  return (d || (d = D()), d);
}
export { _ as g, h as s, y as w };
