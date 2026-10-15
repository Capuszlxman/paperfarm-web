import { clock as s } from "./core-Dv3-PHk5.js";
const l = { ink: 0, coin: 168, seed: 6, wheat: 0, feed: 0, egg: 0 },
  e = {
    res: { ...l },
    disp: { ...l },
    dispFrom: { ...l },
    dispT0: {},
    bumpT: {},
    deltaFx: [],
    mode: "title",
    modeT0: 0,
    panel: null,
    selectedSeed: null,
    speedUp: !1,
    toasts: [],
    banner: null,
    demo: !1,
    capture: !1,
    hudAlpha: 1,
    uiHidden: !1,
    launcher: !0,
    hint: "",
    pressed: "",
    pressedT: 0,
  };
let f = 1;
function b(t, n = "plain", i = 2.2) {
  e.toasts.push({ id: f++, text: t, t0: s.t, dur: i, tone: n });
}
function m(t, n, i = 2.6) {
  e.banner = { title: t, sub: n, t0: s.t, dur: i };
}
function T(t, n, i = !0) {
  ((e.dispFrom[t] = e.disp[t]),
    (e.res[t] = Math.max(0, e.res[t] + n)),
    (e.dispT0[t] = s.t),
    (e.bumpT[t] = s.t),
    i && n !== 0 && e.deltaFx.push({ key: t, amount: n, t0: s.t }));
}
function F() {
  var t;
  for (const n of Object.keys(e.res)) {
    const i = e.dispT0[n];
    if (i === void 0) {
      e.disp[n] = e.res[n];
      continue;
    }
    const o = e.dispFrom[n],
      d = e.res[n],
      p = Math.min(0.9, 0.25 + Math.abs(d - o) * 0.004),
      u = Math.min(1, (s.t - i) / p),
      c = 1 - Math.pow(1 - u, 3);
    e.disp[n] = Math.round(o + (d - o) * c);
  }
  ((e.deltaFx = e.deltaFx.filter((n) => s.t - n.t0 < 1.4)),
    (e.toasts = e.toasts.filter((n) => s.t - n.t0 < n.dur)),
    e.banner && s.t - e.banner.t0 > e.banner.dur && (e.banner = null),
    ((t = e.panel) == null ? void 0 : t.closing) !== void 0 &&
      s.t - e.panel.closing > 0.28 &&
      (e.panel = null));
}
function g(t, n) {
  e.panel = { kind: t, t0: s.t, plot: n };
}
function x() {
  e.panel && e.panel.closing === void 0 && (e.panel.closing = s.t);
}
function M() {
  ((e.res = { ...l }),
    (e.disp = { ...l }),
    (e.dispFrom = { ...l }),
    (e.dispT0 = {}),
    (e.bumpT = {}),
    (e.deltaFx = []),
    (e.panel = null),
    (e.selectedSeed = null),
    (e.speedUp = !1),
    (e.toasts = []),
    (e.banner = null),
    (e.hudAlpha = 1),
    (e.uiHidden = !1),
    (e.hint = ""),
    (e.pressed = ""));
}
const a = new Set();
function S(t) {
  return (a.add(t), () => a.delete(t));
}
let r = 0;
function I() {
  return r;
}
function v() {
  (r++, a.forEach((t) => t()));
}
export {
  l as INITIAL_RES,
  T as addRes,
  m as banner,
  x as closePanel,
  I as getVersion,
  v as notify,
  g as openPanel,
  M as resetStore,
  e as store,
  S as subscribe,
  b as toast,
  F as updateDisplay,
};
