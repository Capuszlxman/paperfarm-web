import { r as v, j as s } from "./index-Buxy_O7c.js";
import {
  g as h,
  p as B,
  r as A,
  S as k,
  a as $,
  h as E,
} from "./fonts-CTIRIfLZ.js";
import {
  subscribe as W,
  getVersion as S,
  notify as C,
  store as t,
} from "./store-DeYfal31.js";
import {
  clock as m,
  since as L,
  easeOut as R,
  clamp as x,
  easeOutBack as y,
} from "./core-Dv3-PHk5.js";
import { getAtlas as U } from "./sprites-DoU9b1eg.js";
import { g as Y } from "./farmart-Bcn3kAJE.js";
import { t as K } from "./pixel-CYIPeh-K.js";
import { e as P } from "./audio-DDOa6zyH.js";
const r = U(),
  N = Y(),
  M = new Map(),
  T = (e) => {
    let n = M.get(e);
    return (n || ((n = K(e, 6)), M.set(e, n)), n);
  };
function i({ s: e, scale: n = 2, style: a }) {
  return s.jsx("img", {
    src: T(e),
    className: "px",
    style: { width: e.w * n, height: e.h * n, ...a },
    draggable: !1,
  });
}
const G = [
    { key: "ink", label: "墨粒", s: () => r.ink },
    { key: "coin", label: "金币", s: () => r.coin },
    { key: "seed", label: "种子", s: () => r.seedBag },
    { key: "wheat", label: "小麦", s: () => r.wheat },
    { key: "feed", label: "饲料", s: () => r.feed },
    { key: "egg", label: "鸡蛋", s: () => r.egg },
  ],
  b = (e) => e.stopPropagation();
function p({ id: e, children: n, className: a = "", disabled: d, onClick: j }) {
  const o = t.pressed === e && m.t - t.pressedT < 0.22;
  return s.jsx("button", {
    "data-act": e,
    className: `pf-btn ${a} ${o ? "pressed" : ""} ${d ? "disabled" : ""}`,
    onPointerDown: b,
    onClick: (l) => {
      (l.stopPropagation(), P(), !t.demo && (j ? j() : h.act(e)));
    },
    children: n,
  });
}
function H() {
  const e = t.hudAlpha;
  return e <= 0.001
    ? null
    : s.jsx("div", {
        className: "hud",
        style: { opacity: e, transform: `translateY(${(1 - e) * -16}px)` },
        onPointerDown: b,
        children: G.map((n) => {
          const a = L(E[n.key] ?? t.bumpT[n.key], 0.35),
            d = a > 0 && a < 1 ? 1 + Math.sin(Math.PI * a) * 0.22 : 1,
            j = t.deltaFx.filter((o) => o.key === n.key);
          return s.jsxs(
            "div",
            {
              className: "chip",
              children: [
                s.jsx("div", {
                  className: "chip-ic",
                  style: { transform: `scale(${d})` },
                  children: s.jsx(i, { s: n.s(), scale: 1.6 }),
                }),
                s.jsxs("div", {
                  className: "chip-tx",
                  children: [
                    s.jsx("b", { children: t.disp[n.key] }),
                    s.jsx("span", { children: n.label }),
                  ],
                }),
                j.map((o, l) => {
                  const c = (m.t - o.t0) / 1.4;
                  return s.jsxs(
                    "i",
                    {
                      className: `delta ${o.amount > 0 ? "up" : "down"}`,
                      style: {
                        opacity: x(c < 0.1 ? c * 10 : (1 - c) * 2),
                        transform: `translate(-50%, ${R(x(c * 1.5)) * 16}px)`,
                      },
                      children: [o.amount > 0 ? "+" : "−", Math.abs(o.amount)],
                    },
                    o.t0 + "-" + l,
                  );
                }),
              ],
            },
            n.key,
          );
        }),
      });
}
function I() {
  const e = t.caption;
  if (!e) return null;
  const n = (m.t - e.t0) / e.dur;
  if (n < 0 || n > 1) return null;
  const a = x((m.t - e.t0) / 0.5),
    d = x((e.t0 + e.dur - m.t) / 0.4),
    j = Math.min(a, d);
  return s.jsxs("div", {
    className: "caption",
    style: {
      opacity: j,
      top: e.bottom ? 640 : 76,
      transform: `translate(-50%, ${(1 - y(a)) * 14}px)${e.bottom ? " scale(1.15)" : ""}`,
    },
    children: [
      s.jsx("span", { className: "cap-n", children: e.n }),
      s.jsxs("div", {
        children: [
          s.jsx("div", { className: "cap-t", children: e.title }),
          s.jsx("div", { className: "cap-s", children: e.sub }),
        ],
      }),
    ],
  });
}
function q() {
  return s.jsx("div", {
    className: "toasts",
    children: t.toasts.map((e) => {
      const n = (m.t - e.t0) / e.dur,
        a = Math.min(x(n * 8), x((1 - n) * 5));
      return s.jsxs(
        "div",
        {
          className: `toast ${e.tone}`,
          style: {
            opacity: a,
            transform: `translateY(${(1 - x(n * 6)) * -10}px) scale(${0.9 + 0.1 * y(x(n * 6))})`,
          },
          children: [
            e.tone === "green" && s.jsx(i, { s: r.sprout, scale: 1.4 }),
            e.tone === "gold" && s.jsx(i, { s: r.sparkleGold, scale: 1.8 }),
            e.text,
          ],
        },
        e.id,
      );
    }),
  });
}
function O() {
  const e = t.banner;
  if (!e) return null;
  const n = (m.t - e.t0) / e.dur,
    a = x((m.t - e.t0) / 0.5),
    d = Math.min(a * 2, x((1 - n) * 5));
  return s.jsxs("div", {
    className: "banner",
    style: {
      opacity: d,
      transform: `translate(-50%,-50%) scale(${0.6 + 0.4 * y(a, 2.4)})`,
    },
    children: [
      s.jsxs("div", {
        className: "ribbon",
        children: [
          s.jsx(i, { s: r.sparkleGold, scale: 2.4 }),
          s.jsx("span", { children: e.title }),
          s.jsx(i, { s: r.sparkleGold, scale: 2.4 }),
        ],
      }),
      s.jsx("div", { className: "banner-sub", children: e.sub }),
    ],
  });
}
function D({ v: e, color: n, label: a, right: d }) {
  return s.jsxs("div", {
    className: "bar",
    children: [
      s.jsxs("div", {
        className: "bar-l",
        children: [s.jsx("span", { children: a }), s.jsx("b", { children: d })],
      }),
      s.jsx("div", {
        className: "bar-track",
        children: s.jsx("div", {
          className: "bar-fill",
          style: { width: `${x(e) * 100}%`, background: n },
        }),
      }),
    ],
  });
}
function _() {
  const e = t.panel;
  if (!e) return null;
  const n = h.world,
    a = y(x((m.t - e.t0) / 0.38), 1.3),
    d = e.closing !== void 0 ? x((m.t - e.closing) / 0.26) : 0,
    j = (1 - a) * 380 + d * 380;
  let o = null;
  if (e.kind === "crop")
    o = s.jsxs(s.Fragment, {
      children: [
        s.jsxs("div", {
          className: "pn-head",
          children: [
            s.jsx(i, { s: N.soil, scale: 1.6 }),
            s.jsxs("div", {
              children: [
                s.jsx("h3", { children: "选择作物" }),
                s.jsx("p", { children: "这块土地刚从文字旁长出来" }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "crops",
          children: [
            s.jsxs(p, {
              id: "seedWheat",
              className: "crop-card",
              children: [
                s.jsx("div", {
                  className: "crop-ic",
                  children: s.jsx(i, { s: N.wheat[4], scale: 2 }),
                }),
                s.jsx("b", { children: "小麦" }),
                s.jsxs("small", {
                  children: [
                    s.jsx(i, { s: r.seedBag, scale: 1 }),
                    " 种子 ×",
                    t.disp.seed,
                  ],
                }),
                s.jsx("em", { children: "产出 小麦×3" }),
              ],
            }),
            s.jsxs("div", {
              className: "crop-card locked",
              children: [
                s.jsx("div", {
                  className: "crop-ic",
                  children: s.jsx(i, { s: N.cabbage, scale: 2 }),
                }),
                s.jsx("b", { children: "白菜" }),
                s.jsx("small", { children: "写满 3 篇解锁" }),
              ],
            }),
            s.jsxs("div", {
              className: "crop-card locked",
              children: [
                s.jsx("div", {
                  className: "crop-ic",
                  children: s.jsx(i, { s: N.sunflower, scale: 1.3 }),
                }),
                s.jsx("b", { children: "向日葵" }),
                s.jsx("small", { children: "写满 7 篇解锁" }),
              ],
            }),
          ],
        }),
      ],
    });
  else if (e.kind === "coop") {
    const l = n.coop,
      c = l.level === 2,
      u = r.chickenW.idle,
      g = n.yard.some((f) => f.act === "eat");
    o = s.jsxs(s.Fragment, {
      children: [
        s.jsxs("div", {
          className: "pn-head",
          children: [
            s.jsx("div", {
              className: "coop-thumb",
              children: s.jsx(i, {
                s: c ? r.coop2 : r.coop1,
                scale: c ? 1.25 : 1.6,
              }),
            }),
            s.jsxs("div", {
              children: [
                s.jsxs("h3", {
                  children: [
                    c ? "红顶鸡舍" : "小鸡舍",
                    " ",
                    s.jsxs("span", {
                      className: "lv",
                      children: ["Lv.", l.level],
                    }),
                  ],
                }),
                s.jsx("p", {
                  children: c
                    ? "温馨的红顶小屋 · 产蛋 +50%"
                    : "简陋木棚 · 漏风但很温暖",
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "hens",
          children: [
            [0, 1, 2].map((f) => {
              var w, F;
              return s.jsxs(
                "div",
                {
                  className: `hen ${g ? "eating" : ""}`,
                  style: { animationDelay: `${f * 0.15}s` },
                  children: [
                    s.jsx(i, { s: f === 1 ? r.chickenB.idle : u, scale: 2 }),
                    s.jsxs("span", {
                      className: `hen-lv ${((w = n.yard[f]) == null ? void 0 : w.level) === 2 ? "gold" : ""}`,
                      children: [
                        "Lv.",
                        ((F = n.yard[f]) == null ? void 0 : F.level) ?? 1,
                      ],
                    }),
                  ],
                },
                f,
              );
            }),
            s.jsxs("div", {
              className: "egg-count",
              children: [
                s.jsx(i, { s: r.egg, scale: 2.4 }),
                s.jsxs("b", { children: ["×", l.eggs] }),
                s.jsx("span", { children: "待收取" }),
              ],
            }),
          ],
        }),
        s.jsx(D, {
          v: l.satiety,
          color: "linear-gradient(90deg,#f6b445,#f6d06b)",
          label: "饱食度",
          right: `${Math.round(l.satiety * 100)}%`,
        }),
        s.jsx(D, {
          v: l.prod,
          color: "linear-gradient(90deg,#8fc77a,#b9e08f)",
          label:
            l.satiety < 0.3
              ? "生产状态 · 饿了，暂停产蛋"
              : "生产状态 · 正在下蛋",
          right: `${Math.round(l.prod * 100)}%`,
        }),
        s.jsxs("div", {
          className: "pn-actions",
          children: [
            s.jsxs(p, {
              id: "feed",
              disabled: t.res.feed < 2,
              children: [
                s.jsx(i, { s: r.feed, scale: 1.6 }),
                s.jsx("span", { children: "喂食" }),
                s.jsx("small", { children: "饲料 −2" }),
              ],
            }),
            s.jsxs(p, {
              id: "eggs",
              disabled: l.eggs <= 0,
              className: l.eggs > 0 ? "glow" : "",
              children: [
                s.jsx(i, { s: r.egg, scale: 1.8 }),
                s.jsx("span", { children: "收鸡蛋" }),
                s.jsxs("small", { children: ["×", l.eggs] }),
              ],
            }),
            s.jsxs(p, {
              id: "upgrade",
              className: `up ${c ? "done" : ""}`,
              disabled: c || t.res.coin < 150,
              children: [
                s.jsx(i, { s: r.hammer, scale: 1.6 }),
                s.jsx("span", { children: c ? "已升级" : "升级" }),
                s.jsx("small", {
                  children: c
                    ? "Lv.2"
                    : s.jsxs(s.Fragment, {
                        children: [s.jsx(i, { s: r.coin, scale: 1 }), " 150"],
                      }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  } else
    e.kind === "mill" &&
      (o = s.jsxs(s.Fragment, {
        children: [
          s.jsxs("div", {
            className: "pn-head",
            children: [
              s.jsx(i, { s: r.windmill, scale: 1.1 }),
              s.jsxs("div", {
                children: [
                  s.jsx("h3", { children: "风车磨坊" }),
                  s.jsx("p", { children: "把小麦磨成香喷喷的饲料" }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "recipe",
            children: [
              s.jsxs("div", {
                className: "rc",
                children: [
                  s.jsx(i, { s: r.wheat, scale: 2.4 }),
                  s.jsx("b", { children: "×9" }),
                  s.jsxs("small", { children: ["库存 ", t.disp.wheat] }),
                ],
              }),
              s.jsx("div", { className: "arrow", children: "➜" }),
              s.jsxs("div", {
                className: "rc",
                children: [
                  s.jsx(i, { s: r.feed, scale: 2.4 }),
                  s.jsx("b", { children: "×6" }),
                  s.jsx("small", { children: "饲料" }),
                ],
              }),
            ],
          }),
          s.jsx("div", {
            className: "pn-actions single",
            children: s.jsxs(p, {
              id: "mill",
              disabled: t.res.wheat < 9 || n.milling,
              children: [
                s.jsx(i, { s: r.wheat, scale: 1.4 }),
                s.jsx("span", { children: n.milling ? "研磨中…" : "研磨" }),
              ],
            }),
          }),
        ],
      }));
  return s.jsxs("div", {
    className: `panel panel-${e.kind}`,
    style: { transform: `translateY(${j}px)`, opacity: 1 - d },
    onPointerDown: b,
    children: [
      s.jsx("div", { className: "pn-grip" }),
      s.jsx(p, { id: "closePanel", className: "pn-close", children: "✕" }),
      o,
    ],
  });
}
function z() {
  var d;
  const e = h.world,
    n = t.mode,
    a = t.hudAlpha;
  if (a <= 0.001 || n === "title") return null;
  if (n === "write") {
    const j = Array.from(
        ((d = h.editor) == null ? void 0 : d.value) ?? "",
      ).length,
      o = e.phase === "idle" && j >= 6,
      l = e.phase === "landed";
    return s.jsxs("div", {
      className: "bottom write",
      style: { opacity: a },
      onPointerDown: b,
      children: [
        s.jsxs("div", {
          className: "wb-info",
          children: [
            s.jsx(i, { s: r.ink, scale: 1.4 }),
            e.phase === "idle"
              ? s.jsxs("span", {
                  children: [
                    "已写 ",
                    s.jsx("b", { children: j }),
                    " 字 · 每 6 字落下一粒墨粒",
                  ],
                })
              : l
                ? s.jsx("span", { children: "日记已归档，点击上方庄园去经营" })
                : s.jsx("span", {
                    className: "busy",
                    children: "小动物们正在整理…",
                  }),
          ],
        }),
        s.jsx("div", {
          className: "wb-btns",
          children: l
            ? s.jsxs(p, {
                id: "toFarm",
                className: "primary",
                children: [s.jsx(i, { s: N.wheat[4], scale: 0.9 }), " 去农场"],
              })
            : s.jsxs(s.Fragment, {
                children: [
                  !t.demo &&
                    s.jsxs(p, {
                      id: "toFarm",
                      className: "ghost",
                      children: [
                        s.jsx(i, { s: N.wheat[4], scale: 0.7 }),
                        " 农场",
                      ],
                    }),
                  s.jsxs(p, {
                    id: "tidy",
                    className: "primary",
                    disabled: !o,
                    children: [
                      s.jsx(i, { s: r.chickenW.idle, scale: 1.1 }),
                      " 整理成段",
                    ],
                  }),
                ],
              }),
        }),
      ],
    });
  }
  return n === "farm"
    ? s.jsxs("div", {
        className: "bottom farm",
        style: { opacity: a },
        onPointerDown: b,
        children: [
          s.jsx(p, { id: "back", className: "ghost", children: "✎ 返回写作" }),
          s.jsx("div", {
            className: "seed-sel",
            children: t.selectedSeed
              ? s.jsxs(s.Fragment, {
                  children: [
                    s.jsx(i, { s: r.seedBag, scale: 1.4 }),
                    s.jsx("span", { children: "小麦种子" }),
                    s.jsxs("b", { children: ["×", t.disp.seed] }),
                  ],
                })
              : s.jsx("span", {
                  className: "muted",
                  children: "点击土地种植 · 拖动查看庄园",
                }),
          }),
          s.jsxs(p, {
            id: "speed",
            className: `speed ${t.speedUp ? "on" : ""}`,
            children: [
              s.jsx("span", {
                className: "clock-ic",
                style: { transform: `rotate(${t.speedUp ? m.t * 720 : 0}deg)` },
                children: "◷",
              }),
              " ",
              t.speedUp ? "×8 加速中" : "演示加速",
            ],
          }),
        ],
      })
    : null;
}
function V() {
  const e = t.endT;
  if (e === void 0 || m.t < e) return null;
  const n = x((m.t - e) / 0.9),
    a = (d) => x((m.t - e - d) / 0.7);
  return s.jsx("div", {
    className: "endcard",
    style: { opacity: n },
    children: s.jsxs("div", {
      className: "end-inner",
      children: [
        s.jsxs("div", {
          className: "end-icons",
          style: {
            opacity: a(0.4),
            transform: `translateY(${(1 - y(a(0.4))) * 20}px)`,
          },
          children: [
            s.jsx(i, { s: r.chickenW.idle, scale: 3 }),
            s.jsx(i, { s: r.sheep.idle, scale: 2.6 }),
            s.jsx(i, { s: r.cow.idle, scale: 2.6 }),
          ],
        }),
        s.jsx("h1", {
          style: {
            opacity: a(0.2),
            transform: `scale(${0.85 + 0.15 * y(a(0.2))})`,
          },
          children: "字里有田",
        }),
        s.jsx("div", {
          className: "end-en",
          style: { opacity: a(0.5) },
          children: "PAPER FARM",
        }),
        s.jsx("div", {
          className: "end-line",
          style: { width: `${R(a(0.6)) * 180}px` },
        }),
        s.jsxs("p", {
          style: {
            opacity: a(0.9),
            transform: `translateY(${(1 - R(a(0.9))) * 10}px)`,
          },
          children: [
            "你写下的每一个字，",
            s.jsx("br", {}),
            "都在养大一个世界。",
          ],
        }),
        s.jsx("div", {
          className: "end-tag",
          style: { opacity: a(1.6) },
          children: "写日记 · 动物排版 · 文字旁种田 · 养殖 · 扩建庄园",
        }),
      ],
    }),
  });
}
function X() {
  return t.launcher
    ? s.jsx("div", {
        className: "launcher",
        onPointerDown: b,
        children: s.jsxs("div", {
          className: "launch-card",
          children: [
            s.jsxs("div", {
              className: "launch-ic",
              children: [
                s.jsx(i, { s: r.chickenW.idle, scale: 3 }),
                s.jsx(i, { s: r.sprout, scale: 3 }),
              ],
            }),
            s.jsx("h2", { children: "字里有田" }),
            s.jsx("p", { children: "Paper Farm · 可交互 Demo" }),
            s.jsx(p, {
              id: "startDemo",
              className: "primary big",
              onClick: () => {
                (P(), A(h));
              },
              children: "▶ 自动演示 (75秒)",
            }),
            s.jsx(p, {
              id: "startFree",
              className: "ghost big",
              onClick: () => {
                (P(), h.startFree());
              },
              children: "✎ 自由体验",
            }),
            s.jsx("small", {
              children: "自由体验：在纸上写日记 → 整理成段 → 点击庄园经营",
            }),
          ],
        }),
      })
    : null;
}
function cs() {
  v.useSyncExternalStore(W, S);
  const e = v.useRef(null),
    n = v.useRef(null),
    a = v.useRef(null),
    d = v.useRef(null),
    j = v.useRef(1);
  v.useEffect(() => {
    if (!e.current || h.running) return;
    ((h.running = !0),
      h.mount(e.current, n.current, a.current),
      (h.uiRender = C));
    const l = () => {
      const u = Math.min(window.innerWidth / $, window.innerHeight / k);
      ((j.current = u),
        d.current &&
          (d.current.style.transform = `translate(-50%,-50%) scale(${u})`));
    };
    (l(), window.addEventListener("resize", l));
    const c = new URLSearchParams(location.search);
    if (!m.capture) {
      let u = performance.now();
      const g = (f) => {
        const w = Math.min(0.05, (f - u) / 1e3);
        ((u = f), h.tick(w), requestAnimationFrame(g));
      };
      (requestAnimationFrame(g),
        c.has("free") && h.startFree(),
        B().then(() => {
          c.has("demo") && ((t.launcher = !1), A(h));
        }));
    }
  }, []);
  const o = (l) => {
    const c = d.current.getBoundingClientRect();
    return {
      x: ((l.clientX - c.left) / c.width) * $,
      y: ((l.clientY - c.top) / c.height) * k,
    };
  };
  return s.jsx("div", {
    className: "viewport",
    children: s.jsxs("div", {
      className: "stage",
      ref: d,
      onPointerDown: (l) => {
        var u, g;
        if (t.demo) return;
        (P(),
          (g = (u = l.target).setPointerCapture) == null ||
            g.call(u, l.pointerId));
        const c = o(l);
        h.pointerDown(c.x, c.y, l.pointerId);
      },
      onPointerMove: (l) => {
        if (t.demo) return;
        const c = o(l);
        h.pointerMove(c.x, c.y);
      },
      onPointerUp: (l) => {
        if (t.demo) return;
        const c = o(l);
        h.pointerUp(c.x, c.y);
      },
      onWheel: (l) => {
        if (t.demo) return;
        const c = o(l);
        h.wheel(c.x, c.y, l.deltaY);
      },
      children: [
        s.jsx("canvas", {
          ref: e,
          className: "layer",
          style: { width: $, height: k },
        }),
        s.jsx("div", { className: "world-layer", ref: a }),
        s.jsx(H, {}),
        s.jsx(I, {}),
        s.jsx(q, {}),
        s.jsx(z, {}),
        s.jsx(_, {}),
        s.jsx(O, {}),
        s.jsx(V, {}),
        s.jsx("canvas", {
          ref: n,
          className: "layer overlay",
          style: { width: $, height: k },
        }),
        s.jsx(X, {}),
      ],
    }),
  });
}
export { cs as default };
