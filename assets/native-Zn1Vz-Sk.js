const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/web-BI8x_GpI.js",
      "assets/index-Buxy_O7c.js",
      "assets/index-BAnILwfr.css",
      "assets/app-CQ7Ebbfh.js",
      "assets/sim-D2hRsYBy.js",
      "assets/state-CG0_YQPW.js",
    ]),
) => i.map((i) => d[i]);
import { _ as q } from "./index-Buxy_O7c.js";
import { app as E } from "./app-CQ7Ebbfh.js";
import { ui as w } from "./state-CG0_YQPW.js";
/*! Capacitor: https://capacitorjs.com/ - MIT License */ var P;
(function (n) {
  ((n.Unimplemented = "UNIMPLEMENTED"), (n.Unavailable = "UNAVAILABLE"));
})(P || (P = {}));
class U extends Error {
  constructor(e, t, i) {
    (super(e), (this.message = e), (this.code = t), (this.data = i));
  }
}
const K = (n) => {
    var e, t;
    return n != null && n.androidBridge
      ? "android"
      : !(
            (t =
              (e = n == null ? void 0 : n.webkit) === null || e === void 0
                ? void 0
                : e.messageHandlers) === null || t === void 0
          ) && t.bridge
        ? "ios"
        : "web";
  },
  z = (n) => {
    const e = n.CapacitorCustomPlatform || null,
      t = n.Capacitor || {},
      i = (t.Plugins = t.Plugins || {}),
      s = () => (e !== null ? e.name : K(n)),
      r = () => s() !== "web",
      c = (a) => {
        const d = m.get(a);
        return !!((d != null && d.platforms.has(s())) || o(a));
      },
      o = (a) => {
        var d;
        return (d = t.PluginHeaders) === null || d === void 0
          ? void 0
          : d.find((k) => k.name === a);
      },
      l = (a) => n.console.error(a),
      m = new Map(),
      C = (a, d = {}) => {
        const k = m.get(a);
        if (k)
          return (
            console.warn(
              `Capacitor plugin "${a}" already registered. Cannot register plugins twice.`,
            ),
            k.proxy
          );
        const y = s(),
          L = o(a);
        let b;
        const B = async () => (
            !b && y in d
              ? (b =
                  typeof d[y] == "function" ? (b = await d[y]()) : (b = d[y]))
              : e !== null &&
                !b &&
                "web" in d &&
                (b =
                  typeof d.web == "function"
                    ? (b = await d.web())
                    : (b = d.web)),
            b
          ),
          F = (u, f) => {
            var g, p;
            if (L) {
              const v =
                L == null ? void 0 : L.methods.find((h) => f === h.name);
              if (v)
                return v.rtype === "promise"
                  ? (h) => t.nativePromise(a, f.toString(), h)
                  : (h, A) => t.nativeCallback(a, f.toString(), h, A);
              if (u)
                return (g = u[f]) === null || g === void 0 ? void 0 : g.bind(u);
            } else {
              if (u)
                return (p = u[f]) === null || p === void 0 ? void 0 : p.bind(u);
              throw new U(
                `"${a}" plugin is not implemented on ${y}`,
                P.Unimplemented,
              );
            }
          },
          $ = (u) => {
            let f;
            const g = (...p) => {
              const v = B().then((h) => {
                const A = F(h, u);
                if (A) {
                  const x = A(...p);
                  return ((f = x == null ? void 0 : x.remove), x);
                } else
                  throw new U(
                    `"${a}.${u}()" is not implemented on ${y}`,
                    P.Unimplemented,
                  );
              });
              return (u === "addListener" && (v.remove = async () => f()), v);
            };
            return (
              (g.toString = () => `${u.toString()}() { [capacitor code] }`),
              Object.defineProperty(g, "name", {
                value: u,
                writable: !1,
                configurable: !1,
              }),
              g
            );
          },
          H = $("addListener"),
          S = $("removeListener"),
          I = (u, f) => {
            const g = H({ eventName: u }, f),
              p = async () => {
                const h = await g;
                S({ eventName: u, callbackId: h }, f);
              },
              v = new Promise((h) => g.then(() => h({ remove: p })));
            return (
              (v.remove = async () => {
                (console.warn(
                  "Using addListener() without 'await' is deprecated.",
                ),
                  await p());
              }),
              v
            );
          },
          T = new Proxy(
            {},
            {
              get(u, f) {
                switch (f) {
                  case "$$typeof":
                    return;
                  case "toJSON":
                    return () => ({});
                  case "addListener":
                    return L ? I : H;
                  case "removeListener":
                    return S;
                  default:
                    return $(f);
                }
              },
            },
          );
        return (
          (i[a] = T),
          m.set(a, {
            name: a,
            proxy: T,
            platforms: new Set([...Object.keys(d), ...(L ? [y] : [])]),
          }),
          T
        );
      };
    return (
      t.convertFileSrc || (t.convertFileSrc = (a) => a),
      (t.getPlatform = s),
      (t.handleError = l),
      (t.isNativePlatform = r),
      (t.isPluginAvailable = c),
      (t.registerPlugin = C),
      (t.Exception = U),
      (t.DEBUG = !!t.DEBUG),
      (t.isLoggingEnabled = !!t.isLoggingEnabled),
      t
    );
  },
  G = (n) => (n.Capacitor = z(n)),
  j = G(
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {},
  ),
  _ = j.registerPlugin;
class D {
  constructor() {
    ((this.listeners = {}),
      (this.retainedEventArguments = {}),
      (this.windowListeners = {}));
  }
  addListener(e, t) {
    let i = !1;
    (this.listeners[e] || ((this.listeners[e] = []), (i = !0)),
      this.listeners[e].push(t));
    const r = this.windowListeners[e];
    (r && !r.registered && this.addWindowListener(r),
      i && this.sendRetainedArgumentsForEvent(e));
    const c = async () => this.removeListener(e, t);
    return Promise.resolve({ remove: c });
  }
  async removeAllListeners() {
    this.listeners = {};
    for (const e in this.windowListeners)
      this.removeWindowListener(this.windowListeners[e]);
    this.windowListeners = {};
  }
  notifyListeners(e, t, i) {
    const s = this.listeners[e];
    if (!s) {
      if (i) {
        let r = this.retainedEventArguments[e];
        (r || (r = []), r.push(t), (this.retainedEventArguments[e] = r));
      }
      return;
    }
    s.forEach((r) => r(t));
  }
  hasListeners(e) {
    var t;
    return !!(!((t = this.listeners[e]) === null || t === void 0) && t.length);
  }
  registerWindowListener(e, t) {
    this.windowListeners[t] = {
      registered: !1,
      windowEventName: e,
      pluginEventName: t,
      handler: (i) => {
        this.notifyListeners(t, i);
      },
    };
  }
  unimplemented(e = "not implemented") {
    return new j.Exception(e, P.Unimplemented);
  }
  unavailable(e = "not available") {
    return new j.Exception(e, P.Unavailable);
  }
  async removeListener(e, t) {
    const i = this.listeners[e];
    if (!i) return;
    const s = i.indexOf(t);
    (this.listeners[e].splice(s, 1),
      this.listeners[e].length ||
        this.removeWindowListener(this.windowListeners[e]));
  }
  addWindowListener(e) {
    (window.addEventListener(e.windowEventName, e.handler),
      (e.registered = !0));
  }
  removeWindowListener(e) {
    e &&
      (window.removeEventListener(e.windowEventName, e.handler),
      (e.registered = !1));
  }
  sendRetainedArgumentsForEvent(e) {
    const t = this.retainedEventArguments[e];
    t &&
      (delete this.retainedEventArguments[e],
      t.forEach((i) => {
        this.notifyListeners(e, i);
      }));
  }
}
const W = (n) =>
    encodeURIComponent(n)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape),
  R = (n) => n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class V extends D {
  async getCookies() {
    const e = document.cookie,
      t = {};
    return (
      e.split(";").forEach((i) => {
        if (i.length <= 0) return;
        let [s, r] = i.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        ((s = R(s).trim()), (r = R(r).trim()), (t[s] = r));
      }),
      t
    );
  }
  async setCookie(e) {
    try {
      const t = W(e.key),
        i = W(e.value),
        s = e.expires ? `; expires=${e.expires.replace("expires=", "")}` : "",
        r = (e.path || "/").replace("path=", ""),
        c = e.url != null && e.url.length > 0 ? `domain=${e.url}` : "";
      document.cookie = `${t}=${i || ""}${s}; path=${r}; ${c};`;
    } catch (t) {
      return Promise.reject(t);
    }
  }
  async deleteCookie(e) {
    try {
      document.cookie = `${e.key}=; Max-Age=0`;
    } catch (t) {
      return Promise.reject(t);
    }
  }
  async clearCookies() {
    try {
      const e = document.cookie.split(";") || [];
      for (const t of e)
        document.cookie = t
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  async clearAllCookies() {
    try {
      await this.clearCookies();
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
_("CapacitorCookies", { web: () => new V() });
const J = async (n) =>
    new Promise((e, t) => {
      const i = new FileReader();
      ((i.onload = () => {
        const s = i.result;
        e(s.indexOf(",") >= 0 ? s.split(",")[1] : s);
      }),
        (i.onerror = (s) => t(s)),
        i.readAsDataURL(n));
    }),
  X = (n = {}) => {
    const e = Object.keys(n);
    return Object.keys(n)
      .map((s) => s.toLocaleLowerCase())
      .reduce((s, r, c) => ((s[r] = n[e[c]]), s), {});
  },
  Q = (n, e = !0) =>
    n
      ? Object.entries(n)
          .reduce((i, s) => {
            const [r, c] = s;
            let o, l;
            return (
              Array.isArray(c)
                ? ((l = ""),
                  c.forEach((m) => {
                    ((o = e ? encodeURIComponent(m) : m), (l += `${r}=${o}&`));
                  }),
                  l.slice(0, -1))
                : ((o = e ? encodeURIComponent(c) : c), (l = `${r}=${o}`)),
              `${i}&${l}`
            );
          }, "")
          .substr(1)
      : null,
  Y = (n, e = {}) => {
    const t = Object.assign(
        { method: n.method || "GET", headers: n.headers },
        e,
      ),
      s = X(n.headers)["content-type"] || "";
    if (typeof n.data == "string") t.body = n.data;
    else if (s.includes("application/x-www-form-urlencoded")) {
      const r = new URLSearchParams();
      for (const [c, o] of Object.entries(n.data || {})) r.set(c, o);
      t.body = r.toString();
    } else if (
      s.includes("multipart/form-data") ||
      n.data instanceof FormData
    ) {
      const r = new FormData();
      if (n.data instanceof FormData)
        n.data.forEach((o, l) => {
          r.append(l, o);
        });
      else for (const o of Object.keys(n.data)) r.append(o, n.data[o]);
      t.body = r;
      const c = new Headers(t.headers);
      (c.delete("content-type"), (t.headers = c));
    } else
      (s.includes("application/json") || typeof n.data == "object") &&
        (t.body = JSON.stringify(n.data));
    return t;
  };
class Z extends D {
  async request(e) {
    const t = Y(e, e.webFetchExtra),
      i = Q(e.params, e.shouldEncodeUrlParams),
      s = i ? `${e.url}?${i}` : e.url,
      r = await fetch(s, t),
      c = r.headers.get("content-type") || "";
    let { responseType: o = "text" } = r.ok ? e : {};
    c.includes("application/json") && (o = "json");
    let l, m;
    switch (o) {
      case "arraybuffer":
      case "blob":
        ((m = await r.blob()), (l = await J(m)));
        break;
      case "json":
        l = await r.json();
        break;
      case "document":
      case "text":
      default:
        l = await r.text();
    }
    const C = {};
    return (
      r.headers.forEach((a, d) => {
        C[d] = a;
      }),
      { data: l, headers: C, status: r.status, url: r.url }
    );
  }
  async get(e) {
    return this.request(Object.assign(Object.assign({}, e), { method: "GET" }));
  }
  async post(e) {
    return this.request(
      Object.assign(Object.assign({}, e), { method: "POST" }),
    );
  }
  async put(e) {
    return this.request(Object.assign(Object.assign({}, e), { method: "PUT" }));
  }
  async patch(e) {
    return this.request(
      Object.assign(Object.assign({}, e), { method: "PATCH" }),
    );
  }
  async delete(e) {
    return this.request(
      Object.assign(Object.assign({}, e), { method: "DELETE" }),
    );
  }
}
_("CapacitorHttp", { web: () => new Z() });
const O = _("App", {
    web: () =>
      q(
        () => import("./web-BI8x_GpI.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      ).then((n) => new n.AppWeb()),
  }),
  N = () => {
    var n, e;
    return !!(
      (e = (n = window.Capacitor) == null ? void 0 : n.isNativePlatform) !=
        null && e.call(n)
    );
  };
function M() {
  var e;
  if (w.confirm) return (w.set({ confirm: null }), !0);
  if (w.onboarding)
    return (
      w.set({ onboarding: 0 }),
      (e = E.be) == null || e.setMeta("onboarded", 1),
      !0
    );
  if (w.sheet) return (w.close(), !0);
  if (w.tool !== "hand" || w.ghost) return (w.resetTool(), !0);
  const n = document.activeElement;
  return n && /^(TEXTAREA|INPUT)$/.test(n.tagName)
    ? (n.blur(), !0)
    : w.mode === "farm"
      ? (w.set({ mode: "write" }), !0)
      : !1;
}
function ee() {
  const n = window.visualViewport;
  if (!n) return;
  const e = document.documentElement;
  let t = window.innerHeight,
    i = window.innerWidth;
  const s = () => {
    var l;
    (window.innerWidth !== i &&
      ((i = window.innerWidth), (t = window.innerHeight)),
      window.innerHeight > t && (t = window.innerHeight));
    const r = Math.max(
        0,
        Math.round(window.innerHeight - n.height - n.offsetTop),
      ),
      o =
        /^(TEXTAREA|INPUT)$/.test(
          ((l = document.activeElement) == null ? void 0 : l.tagName) ?? "",
        ) &&
        (r > 80 || t - window.innerHeight > 120);
    (e.style.setProperty("--kb", o && r > 80 ? r + "px" : "0px"),
      e.classList.toggle("kb-open", o),
      o && r > 80 && window.scrollTo(0, 0));
  };
  (n.addEventListener("resize", s),
    n.addEventListener("scroll", s),
    window.addEventListener("resize", s),
    document.addEventListener("focusin", () => setTimeout(s, 50)),
    document.addEventListener("focusout", () => setTimeout(s, 50)),
    s());
}
function te() {
  document.documentElement.classList.add("native");
  let n = 0;
  (j.getPlatform() === "android" &&
    O.addListener("backButton", () => {
      if (M()) return;
      const e = Date.now();
      if (e - n < 2e3) {
        E.flush().finally(() => O.exitApp());
        return;
      }
      ((n = e), E.toast("再按一次返回键退出", "plain"));
    }),
    O.addListener("pause", () => {
      E.flush();
    }),
    O.addListener("appStateChange", (e) => {
      e.isActive ? E.heartbeat() : E.flush();
    }));
}
const ie = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      handleBack: M,
      installKeyboardFit: ee,
      installNative: te,
      isNative: N,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
export { D as W, ie as n };
