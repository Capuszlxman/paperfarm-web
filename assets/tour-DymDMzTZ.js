const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/ProductApp-CUfmcE9l.js",
      "assets/index-Buxy_O7c.js",
      "assets/index-BAnILwfr.css",
      "assets/app-CQ7Ebbfh.js",
      "assets/sim-D2hRsYBy.js",
      "assets/state-CG0_YQPW.js",
      "assets/kit-DW3edRdN.js",
      "assets/pixel-CYIPeh-K.js",
      "assets/sound-crrWL_RO.js",
      "assets/audio-DDOa6zyH.js",
      "assets/core-Dv3-PHk5.js",
      "assets/farmart-Bcn3kAJE.js",
      "assets/sprites-DoU9b1eg.js",
      "assets/worldRef-DKS27cB4.js",
      "assets/product-B_sdHkQL.css",
      "assets/tour-BBRpYNj_.css",
    ]),
) => i.map((i) => d[i]);
import { _ as g, c as G, r as J } from "./index-Buxy_O7c.js";
import { w as K } from "./sim-D2hRsYBy.js";
function Q(_, A = 20261013) {
  const w = window,
    M = Date,
    x = window.setTimeout.bind(window);
  let m = 0,
    f = 1;
  const b = new Map();
  let E = [];
  const d = new Map();
  let L = A >>> 0;
  Math.random = () => {
    L = (L + 1831565813) >>> 0;
    let o = L;
    return (
      (o = Math.imul(o ^ (o >>> 15), o | 1)),
      (o ^= o + Math.imul(o ^ (o >>> 7), o | 61)),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  };
  class W extends M {
    constructor(...e) {
      e.length === 0 ? super(_ + m) : super(...e);
    }
    static now() {
      return _ + m;
    }
  }
  ((w.Date = W),
    (performance.now = () => m),
    (w.requestAnimationFrame = (o) => {
      const e = f++;
      return (E.push({ id: e, fn: o }), e);
    }),
    (w.cancelAnimationFrame = (o) => {
      E = E.filter((e) => e.id !== o);
    }),
    (w.setTimeout = (o, e = 0, ...s) => {
      const n = f++;
      return (
        b.set(n, {
          id: n,
          at: m + Math.max(0, +e || 0),
          fn: o,
          args: s,
          every: null,
        }),
        n
      );
    }),
    (w.setInterval = (o, e = 0, ...s) => {
      const n = f++,
        k = Math.max(1, +e || 1);
      return (b.set(n, { id: n, at: m + k, fn: o, args: s, every: k }), n);
    }),
    (w.clearTimeout = w.clearInterval =
      (o) => {
        b.delete(o);
      }));
  const P = () => new Promise((o) => x(o, 0));
  function T() {
    for (let o = 0; o < 1e4; o++) {
      let e = null;
      for (const s of b.values())
        s.at <= m &&
          (!e || s.at < e.at || (s.at === e.at && s.id < e.id)) &&
          (e = s);
      if (!e) return;
      e.every ? (e.at += e.every) : b.delete(e.id);
      try {
        e.fn(...e.args);
      } catch (s) {
        console.error(s);
      }
    }
  }
  function j(o) {
    for (const e of document.getAnimations()) {
      let s = d.get(e);
      (s === void 0 ? ((s = 0), e.pause()) : (s += o),
        d.set(e, s),
        (e.currentTime = s));
    }
    for (const e of d.keys())
      (e.playState === "finished" || !document.getAnimations().includes(e)) &&
        d.delete(e);
  }
  return {
    now: () => m,
    async step(o) {
      const e = o * 1e3;
      ((m += e), T(), await P());
      const s = E;
      E = [];
      for (const n of s)
        try {
          n.fn(m);
        } catch (k) {
          console.error(k);
        }
      (await P(), await P(), T(), j(e));
    },
  };
}
const X = "paper-farm-tour",
  ot = 75.5;
function tt() {
  for (let _ = 1; _ <= 30; _++) {
    const A = new Date(2026, 3, _, 9, 40).getTime();
    if (K(A) === "sunny") return A;
  }
  return new Date(2026, 3, 18, 9, 40).getTime();
}
async function nt(_) {
  const A = tt(),
    w = _ ? Q(A) : null,
    M = performance.now(),
    x = () => (w ? w.now() : performance.now() - M) / 1e3;
  await new Promise((t) => {
    const a = indexedDB.deleteDatabase(X);
    a.onsuccess = a.onerror = a.onblocked = () => t();
  });
  const [
    { default: m },
    { app: f },
    { ui: b },
    E,
    { world: d },
    { getAtlas: L },
    { spriteUrl: W },
  ] = await Promise.all([
    g(
      () => import("./ProductApp-CUfmcE9l.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
    ),
    g(() => import("./app-CQ7Ebbfh.js"), __vite__mapDeps([3, 4])),
    g(() => import("./state-CG0_YQPW.js"), []),
    g(() => import("./sound-crrWL_RO.js"), __vite__mapDeps([8, 9, 10, 3, 4])),
    g(() => import("./worldRef-DKS27cB4.js"), __vite__mapDeps([13, 4, 3])),
    g(() => import("./sprites-DoU9b1eg.js"), __vite__mapDeps([12, 7])),
    g(
      () => import("./kit-DW3edRdN.js").then((t) => t.k),
      __vite__mapDeps([6, 1, 2, 7, 3, 4, 5, 8, 9, 10, 11]),
    ),
  ]);
  (await g(() => Promise.resolve({}), __vite__mapDeps([14])),
    await g(() => Promise.resolve({}), __vite__mapDeps([15])));
  const P = [];
  E.setSfxHook((t, a) =>
    P.push({ t: +x().toFixed(4), name: t, vol: a, pan: 0 }),
  );
  let T = !1;
  const j = document.getElementById("root");
  G(j).render(
    J.createElement(m, {
      dbName: X,
      skipOnboarding: !0,
      onReady: () => {
        T = !0;
      },
    }),
  );
  const o = document.createElement("div");
  ((o.className = "tour-layer"),
    (o.innerHTML = `
    <div class="tour-card tour-title"><div class="tc-in"><h1>字里有田</h1><p>你写下的每一个字，都在养大一个世界</p><small>V1.0 Beta · 实机录制</small></div></div>
    <div class="tour-cap"></div>
    <img class="tour-finger" alt="" />
    <div class="tour-card tour-end"><div class="tc-in"><h1>字里有田</h1><p>写日记，养庄园</p><small>日记只保存在你的设备上</small></div></div>`),
    document.body.appendChild(o));
  const e = o.querySelector(".tour-cap"),
    s = o.querySelector(".tour-finger");
  s.src = W(L().hand);
  const n = { x: 270, y: 1100, tx: 270, ty: 1100, press: 0, show: 0 },
    k = () => {
      ((n.x += (n.tx - n.x) * 0.22),
        (n.y += (n.ty - n.y) * 0.22),
        (n.press *= 0.82),
        (s.style.transform = `translate(${n.x - 6}px, ${n.y - 4}px) scale(${1 - n.press * 0.18})`),
        (s.style.opacity = String(n.show)),
        e.classList.toggle("top", !!document.querySelector(".sheet-wrap")),
        requestAnimationFrame(k));
    };
  requestAnimationFrame(k);
  const c = (t) => new Promise((a) => setTimeout(a, t * 1e3)),
    R = async (t, a = 8) => {
      const i = x() + a;
      for (; !t(); ) {
        if (x() > i) throw new Error("tour: timeout waiting");
        await c(1 / 30);
      }
    },
    y = (t) => {
      ((e.textContent = t), e.classList.toggle("on", !!t));
    },
    B = (t, a) => o.querySelector("." + t).classList.toggle("on", a),
    C = (t) => {
      const a = t.getBoundingClientRect();
      return { x: a.left + a.width / 2, y: a.top + a.height / 2 };
    },
    q = async (t, a = 0.45) => {
      ((n.show = 1), (n.tx = t.x), (n.ty = t.y), await c(a));
    },
    D = (t) => document.querySelector(t);
  async function l(t) {
    (await R(() => D(t)),
      await q(C(D(t))),
      (n.press = 1),
      D(t).dispatchEvent(new PointerEvent("pointerdown", { bubbles: !0 })),
      D(t).click(),
      await c(0.25));
  }
  const $ = (t, a) => {
      const i = d.v,
        r = i.cam.w2s(t, a),
        p = i.canvas.getBoundingClientRect();
      return { x: p.left + r.x, y: p.top + r.y };
    },
    S = (t, a) =>
      d.v.canvas.dispatchEvent(
        new PointerEvent(t, {
          bubbles: !0,
          clientX: a.x,
          clientY: a.y,
          pointerId: 7,
          pointerType: "touch",
          isPrimary: !0,
          buttons: t === "pointerup" ? 0 : 1,
        }),
      );
  async function N(t, a) {
    const i = $(t, a);
    (await q(i),
      (n.press = 1),
      S("pointerdown", i),
      await c(0.08),
      S("pointerup", i),
      await c(0.3));
  }
  async function U(t, a = 0.28) {
    const i = t.map((r) => $(r.x, r.y));
    (await q(i[0]), (n.press = 1), S("pointerdown", i[0]));
    for (let r = 1; r < i.length; r++) {
      const p = i[r - 1],
        I = i[r],
        v = Math.max(2, Math.round(a * 30));
      for (let O = 1; O <= v; O++) {
        const u = {
          x: p.x + ((I.x - p.x) * O) / v,
          y: p.y + ((I.y - p.y) * O) / v,
        };
        ((n.tx = n.x = u.x),
          (n.ty = n.y = u.y),
          S("pointermove", u),
          await c(1 / 30));
      }
    }
    (S("pointerup", i[i.length - 1]), await c(0.2));
  }
  async function H(t, a = 7) {
    const i = D("[data-testid=editor]");
    i.focus();
    for (const r of Array.from(t))
      (i.setRangeText(r, i.selectionStart, i.selectionEnd, "end"),
        i.dispatchEvent(
          new InputEvent("input", {
            bubbles: !0,
            data: r,
            inputType:
              r ===
              `
`
                ? "insertLineBreak"
                : "insertText",
          }),
        ),
        r.trim() && E.sfx("type", 0.8),
        await c(
          (r ===
          `
`
            ? 0.5
            : /[，。！？、]/.test(r)
              ? 0.28
              : 1) / a,
        ));
  }
  const Z = () =>
      Object.values(f.s.objects)
        .filter((t) => t.def === "plot_field")
        .sort((t, a) => t.y - a.y || t.x - a.x),
    h = (t) => {
      const { objRect: a } = window.__pfDebug,
        i = a(t);
      return { x: (i.x + i.w / 2) * 18, y: (i.y + i.h / 2) * 18 };
    },
    z = (t) => {
      ((f.timeShift += t * 6e4), f.heartbeat());
    };
  let F = !1;
  async function Y() {
    (await R(() => T && d.v && d.o, 20),
      f.act((u) => ((u.settings.music = !1), { ok: !0, events: [] })),
      await c(0.1));
    const t = x(),
      a = async (u) => {
        for (; x() - t < u; ) await c(1 / 30);
      },
      i = d.v.life;
    (B("tour-title", !0),
      await a(3.2),
      B("tour-title", !1),
      y("一张有生命的纸：小动物就住在你写字的地方"),
      await a(8),
      y("写下的字会掉出墨粒，小鸡走过去一粒粒啄起来"),
      await q(C(D("[data-testid=editor]")), 0.4),
      (n.show = 0),
      await H(
        "早上下了一点小雨，窗台上的薄荷长出了新叶子，整个房间都是清清凉凉的味道。",
        5.2,
      ),
      await a(19.6),
      await H(`
`),
      y("写完一段：小鸡点标点，绵羊沿着字行走一遍，把段落理整齐"),
      await R(
        () =>
          i.jobs.some(
            (u) =>
              u.phase === "lift" || u.phase === "hook" || u.phase === "carry",
          ) ||
          (!i.jobs.length && Object.keys(f.s.blocks).length >= 1),
        12,
      ),
      y("奶牛把整理好的段落搬进庄园，原文一个字都不会变"),
      await R(
        () =>
          Object.keys(f.s.blocks).length >= 1 &&
          d.v.incoming.size === 0 &&
          !i.jobs.length,
        14,
      ),
      await a(29.2),
      y("文字落下的地方，纸会长出草地"),
      await a(31),
      y("往上就是庄园：点空田选种子，划过其他田一起播种"),
      await l("[data-act=nav-farm]"));
    const r = Z();
    (d.v.focusWorld(h(r[0]).x + 30, h(r[0]).y + 34, 1.9, 1.6),
      await c(1.9),
      await N(h(r[0]).x, h(r[0]).y),
      await l("[data-act=seed-wheat]"),
      await c(0.3),
      await U(r.slice(1).map(h), 0.28),
      await a(41),
      y("几分钟后小麦成熟，划一划就收获"),
      z(3),
      await c(1.2),
      await l("[data-act=tool-harvest]"),
      await U(Z().map(h), 0.22),
      await l("[data-act=tool-hand]"),
      await a(47.5));
    const p = Object.values(f.s.objects).find((u) => u.def === "coop");
    (d.v.focusWorld(h(p).x, h(p).y + 40, 1.9, 0.8),
      y("喂小鸡，过一会儿就有鸡蛋"),
      await c(0.9),
      await N(h(p).x, h(p).y),
      await R(() => D("[data-act=feed-all]")),
      await l("[data-act=feed-all]"),
      await c(0.5),
      z(4),
      await c(0.7),
      await l("[data-act=collect-all]"),
      await c(1.3),
      await l("[data-act=close]"),
      await a(55.5),
      y("卖掉收成，再开一块新田"),
      await l("[data-hud=warehouse]"),
      await l('[data-act^="inv-wheat"]'),
      await l(".qty-max"),
      await l("[data-act=sell]"),
      await c(0.7),
      await l("[data-act=close]"),
      await l("[data-act=nav-build]"),
      await l('[data-act="build-plot_field"]'),
      await c(0.3));
    const I = b.ghost;
    (I &&
      (d.v.focusWorld((I.x + 1) * 18, (I.y + 1) * 18 + 30, 1.8, 0.5),
      await c(0.6)),
      await l("[data-act=ghost-ok]"),
      await c(0.3),
      b.tool === "build" && (await l("[data-act=ghost-cancel]")),
      await a(62.5),
      y("文字、动物和庄园，都生活在同一张纸上"),
      (n.show = 0));
    const v = d.v;
    (i.visitFarm("chicken"), i.visitFarm("sheep"));
    const O = v.sheetTop();
    (v.focusWorld(v.cam.x, O - 40, v.cam.fitWidthZoom() * 1.5, 1.4),
      await a(66),
      v.focusWorld(306, O - 150, v.cam.fitWidthZoom() * 1.02, 5.5),
      await a(71.6),
      y(""),
      B("tour-end", !0),
      await a(75.2),
      (F = !0));
  }
  const V = {
    error: null,
    started: !1,
    start() {
      V.started ||
        ((V.started = !0),
        Y().catch((t) => {
          ((V.error = String((t == null ? void 0 : t.stack) ?? t)),
            console.error("[tour]", t),
            (F = !0));
        }));
    },
    async step(t = 1 / 30) {
      return (w && (await w.step(t)), x());
    },
    done: () => F,
    cues: () => P,
    time: x,
    ready: () => T,
  };
  ((window.__tour = V), _ || (await R(() => T, 30), V.start()));
}
export { ot as TOUR_SECONDS, nt as startTour };
