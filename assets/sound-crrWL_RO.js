import { e as l, a as r } from "./audio-DDOa6zyH.js";
import { app as c } from "./app-CQ7Ebbfh.js";
import "./core-Dv3-PHk5.js";
import "./sim-D2hRsYBy.js";
let o = !1,
  i = null;
function b() {
  o || ((o = !0), l(), f());
}
const s = {
  chicken: "cluck",
  duck: "cluck",
  sheep: "baa",
  goat: "baa",
  cow: "moo",
  pig: "moo",
  rabbit: "pop",
  bee: "sparkle",
};
let n = null;
function k(e) {
  n = e;
}
function g(e, t = 1) {
  var u;
  (n == null || n(s[e] ?? e, t),
    !(!o || !((u = c.s) != null && u.settings.sound)) && r(s[e] ?? e, t));
}
function f() {
  var t;
  if (!o) return;
  const e =
    !!((t = c.s) != null && t.settings.music) &&
    document.visibilityState !== "hidden";
  (e &&
    !i &&
    ((i = new Audio("/paperfarm-web/audio/bgm.mp3")), (i.loop = !0), (i.volume = 0.32)),
    i &&
      (e
        ? i.play().catch(() => {
            o = !1;
          })
        : i.pause()));
}
typeof document < "u" &&
  document.addEventListener("visibilitychange", () => f());
export { k as setSfxHook, g as sfx, f as syncMusic, b as unlockAudio };
