import { clock as a } from "./core-Dv3-PHk5.js";
import { s as m } from "./audio-DDOa6zyH.js";
import { g as e, p as s, r as p } from "./fonts-CTIRIfLZ.js";
import "./index-Buxy_O7c.js";
import "./pixel-CYIPeh-K.js";
import "./store-DeYfal31.js";
import "./sprites-DoU9b1eg.js";
import "./farmart-Bcn3kAJE.js";
function D() {
  const r = {
    ready: !1,
    async init() {
      await s();
      const t = Date.now() + 15e3;
      for (; !e.editor; ) {
        if (Date.now() > t) throw new Error("game did not mount");
        await new Promise((o) => setTimeout(o, 20));
      }
      return (p(e), (r.ready = !0), !0);
    },
    async step(t = 1, o = 30) {
      for (let i = 0; i < t; i++)
        (e.tick(1 / o), await new Promise((n) => setTimeout(n, 0)));
      return a.t;
    },
    done() {
      return !!window.__demoDone;
    },
    sfx() {
      return m;
    },
  };
  window.__pf = r;
}
export { D as installCapture };
