const a = { t: 0, dt: 0, frame: 0, capture: !1 },
  c = (n, e = 0, s = 1) => (n < e ? e : n > s ? s : n),
  h = (n, e, s) => n + (e - n) * s,
  i = (n, e, s) => c((s - n) / (e - n)),
  M = (n) => n * n * (3 - 2 * n),
  l = (n) => (n < 0.5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2),
  p = (n) => 1 - Math.pow(1 - n, 3),
  f = (n) => n * n * n,
  m = (n) => 1 - Math.pow(1 - n, 5),
  w = (n) => -(Math.cos(Math.PI * n) - 1) / 2,
  r = (n, e = 1.70158) =>
    1 + (e + 1) * Math.pow(n - 1, 3) + e * Math.pow(n - 1, 2),
  I = (n) =>
    n <= 0
      ? 0
      : n >= 1
        ? 1
        : Math.pow(2, -10 * n) *
            Math.sin((n * 10 - 0.75) * ((2 * Math.PI) / 3)) +
          1,
  O = (n) => (n <= 0 || n >= 1 ? 0 : Math.sin(Math.PI * n)),
  g = (n, e) => (n == null ? 0 : c((a.t - n) / e));
function x(n) {
  if (n >= 1) return { sx: 1, sy: 1 };
  if (n <= 0) return { sx: 0, sy: 0 };
  const e = r(n, 2.2),
    s = Math.sin(n * Math.PI * 2.5) * (1 - n) * 0.18;
  return { sx: e * (1 + s), sy: e * (1 - s) };
}
function u(n) {
  let e = n >>> 0;
  const s = () => {
    e = (e + 1831565813) >>> 0;
    let t = e;
    return (
      (t = Math.imul(t ^ (t >>> 15), t | 1)),
      (t ^= t + Math.imul(t ^ (t >>> 7), t | 61)),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
  return {
    next: s,
    range: (t, o) => t + (o - t) * s(),
    int: (t, o) => Math.floor(t + (o - t + 1) * s()),
    pick: (t) => t[Math.floor(s() * t.length)],
    sign: () => (s() < 0.5 ? -1 : 1),
  };
}
const P = u(20261011);
function d(n, e, s = 0) {
  let t = (n * 374761393 + e * 668265263 + s * 2246822519) | 0;
  return (
    (t = Math.imul(t ^ (t >>> 13), 1274126177)),
    ((t ^ (t >>> 16)) >>> 0) / 4294967295
  );
}
function y(n, e, s, t) {
  const o = 1 - t;
  return o * o * n + 2 * o * t * e + t * t * s;
}
export {
  O as bump,
  c as clamp,
  a as clock,
  f as easeIn,
  l as easeInOut,
  w as easeInOutSine,
  p as easeOut,
  r as easeOutBack,
  I as easeOutElastic,
  m as easeOutQuint,
  d as hash2,
  i as invLerp,
  h as lerp,
  u as makeRng,
  x as popScale,
  y as quadBezier,
  P as rng,
  g as since,
  M as smooth,
};
