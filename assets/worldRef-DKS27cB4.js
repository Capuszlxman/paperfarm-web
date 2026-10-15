import { ak as c, ah as a } from "./sim-D2hRsYBy.js";
import { app as h } from "./app-CQ7Ebbfh.js";
const i = {
  v: null,
  o: null,
  fly(t, s, o = "warehouse") {
    var r;
    (r = this.o) == null || r.fly(t, s, o);
  },
  focusObj(t) {
    const s = h.s.objects[t];
    if (!s || !this.v) return;
    const o = c(s);
    this.v.focusWorld(
      (o.x + o.w / 2) * a,
      (o.y + o.h / 2) * a + 40,
      Math.max(this.v.cam.zoom, 1.2),
    );
  },
};
export { i as world };
