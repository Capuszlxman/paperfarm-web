import {
  ag as R,
  aF as v,
  aG as V,
  aH as W,
  aI as $,
  an as K,
  aJ as y,
  l as p,
  W as H,
  w as q,
  aK as I,
  aL as X,
  aM as U,
  aN as z,
  aO as f,
  aP as Q,
  aQ as Y,
  E as Z,
} from "./sim-D2hRsYBy.js";
const E = (s, t) => t.some((e) => s instanceof e);
let x, B;
function tt() {
  return (
    x ||
    (x = [IDBIndex, IDBObjectStore, IDBCursor, IDBDatabase, IDBTransaction])
  );
}
function et() {
  return (
    B ||
    (B = ["advance", "continue", "continuePrimaryKey"].map(
      (s) => IDBCursor.prototype[s],
    ))
  );
}
const k = new WeakMap(),
  g = new WeakMap(),
  m = new WeakMap();
function st(s) {
  const t = new Promise((e, n) => {
    const i = () => {
        (s.removeEventListener("success", a),
          s.removeEventListener("error", r));
      },
      a = () => {
        (e(l(s.result)), i());
      },
      r = () => {
        (n(s.error), i());
      };
    (s.addEventListener("success", a), s.addEventListener("error", r));
  });
  return (m.set(t, s), t);
}
function nt(s) {
  if (k.has(s)) return;
  const t = new Promise((e, n) => {
    const i = () => {
        (s.removeEventListener("complete", a),
          s.removeEventListener("error", r),
          s.removeEventListener("abort", r));
      },
      a = () => {
        (e(), i());
      },
      r = () => {
        (n(s.error || new DOMException("AbortError", "AbortError")), i());
      };
    (s.addEventListener("complete", a),
      s.addEventListener("error", r),
      s.addEventListener("abort", r));
  });
  k.set(s, t);
}
let S = {
  get(s, t, e) {
    if (s instanceof IDBTransaction) {
      if (t === "done") return k.get(s);
      if (t === "store")
        return e.objectStoreNames[1]
          ? void 0
          : e.objectStore(e.objectStoreNames[0]);
    }
    return l(s[t]);
  },
  set(s, t, e) {
    return ((s[t] = e), !0);
  },
  has(s, t) {
    return s instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in s;
  },
};
function L(s) {
  S = s(S);
}
function it(s) {
  return et().includes(s)
    ? function (...t) {
        return (s.apply(A(this), t), l(this.request));
      }
    : function (...t) {
        return l(s.apply(A(this), t));
      };
}
function at(s) {
  return typeof s == "function"
    ? it(s)
    : (s instanceof IDBTransaction && nt(s), E(s, tt()) ? new Proxy(s, S) : s);
}
function l(s) {
  if (s instanceof IDBRequest) return st(s);
  if (g.has(s)) return g.get(s);
  const t = at(s);
  return (Object.is(t, s) || (g.set(s, t), m.set(t, s)), t);
}
const A = (s) => m.get(s);
function rt(s, t, { blocked: e, upgrade: n, blocking: i, terminated: a } = {}) {
  const r = indexedDB.open(s, t),
    o = l(r);
  return (
    n &&
      r.addEventListener("upgradeneeded", (c) => {
        n(l(r.result), c.oldVersion, c.newVersion, l(r.transaction), c);
      }),
    e && r.addEventListener("blocked", (c) => e(c.oldVersion, c.newVersion, c)),
    o
      .then((c) => {
        (a && c.addEventListener("close", () => a()),
          i &&
            c.addEventListener("versionchange", (h) =>
              i(h.oldVersion, h.newVersion, h),
            ));
      })
      .catch(() => {}),
    o
  );
}
const ot = ["get", "getKey", "getAll", "getAllKeys", "count"],
  ct = ["put", "add", "delete", "clear"],
  b = {};
function M(s, t) {
  if (!(s instanceof IDBDatabase && !(t in s) && typeof t == "string")) return;
  if (b[t]) return b[t];
  const e = t.replace(/FromIndex$/, ""),
    n = t !== e,
    i = ct.includes(e);
  if (
    !(e in (n ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || ot.includes(e))
  )
    return;
  const a = async function (r, ...o) {
    const c = this.transaction(r, i ? "readwrite" : "readonly");
    let h = c.store;
    return (
      n && (h = h.index(o.shift())),
      (await Promise.all([h[e](...o), i && c.done]))[0]
    );
  };
  return (b[t] = a);
}
L((s) => ({
  ...s,
  get: (t, e, n) => M(t, e) || s.get(t, e, n),
  has: (t, e) => !!M(t, e) || s.has(t, e),
}));
const ht = ["advance", "continue", "continuePrimaryKey"],
  T = {},
  D = new WeakMap(),
  C = new WeakMap(),
  dt = {
    get(s, t) {
      if (!ht.includes(t)) return s[t];
      let e = T[t];
      return (
        e ||
          (e = T[t] =
            function (...n) {
              D.set(this, C.get(this)[t](...n));
            }),
        e
      );
    },
  };
async function* lt(...s) {
  let t = this;
  if ((t instanceof IDBCursor || (t = await t.openCursor(...s)), !t)) return;
  t = t;
  const e = new Proxy(t, dt);
  for (C.set(e, t), m.set(e, A(t)); t; )
    (yield e, (t = await (D.get(e) || t.continue())), D.delete(e));
}
function O(s, t) {
  return (
    (t === Symbol.asyncIterator &&
      E(s, [IDBIndex, IDBObjectStore, IDBCursor])) ||
    (t === "iterate" && E(s, [IDBIndex, IDBObjectStore]))
  );
}
L((s) => ({
  ...s,
  get(t, e, n) {
    return O(t, e) ? lt : s.get(t, e, n);
  },
  has(t, e) {
    return O(t, e) || s.has(t, e);
  },
}));
const ut = "paper-farm",
  N = 1,
  j = "paper-farm-save",
  F = 1,
  ft = 8,
  wt = [
    (s) => {
      (s
        .createObjectStore("entries", { keyPath: "id" })
        .createIndex("slot", "slot"),
        s.createObjectStore("game"),
        s
          .createObjectStore("backups", { keyPath: "id" })
          .createIndex("slot", "slot"),
        s.createObjectStore("meta"));
    },
  ];
async function mt(s = ut) {
  if (typeof indexedDB > "u") return P();
  try {
    const t = await rt(s, N, {
      upgrade(e, n) {
        for (let i = n; i < N; i++) wt[i](e);
      },
      blocked() {},
    });
    return yt(t);
  } catch (t) {
    return (
      console.warn("IndexedDB unavailable, using memory storage", t),
      P()
    );
  }
}
function yt(s) {
  return {
    kind: "idb",
    async getEntries(t) {
      return s.getAllFromIndex("entries", "slot", t);
    },
    async putEntry(t) {
      await s.put("entries", t);
    },
    async putEntries(t) {
      const e = s.transaction("entries", "readwrite");
      for (const n of t) e.store.put(n);
      await e.done;
    },
    async deleteEntry(t) {
      await s.delete("entries", t);
    },
    async getGame(t) {
      return (await s.get("game", t)) ?? null;
    },
    async putGame(t) {
      await s.put("game", t, t.slot);
    },
    async getBackups(t) {
      return (await s.getAllFromIndex("backups", "slot", t)).sort(
        (e, n) => n.at - e.at,
      );
    },
    async putBackup(t) {
      await s.put("backups", t);
    },
    async deleteBackup(t) {
      await s.delete("backups", t);
    },
    async replaceSlot(t, e, n) {
      const i = s.transaction(["entries", "game"], "readwrite"),
        a = i.objectStore("entries"),
        r = await a.index("slot").getAllKeys(t);
      for (const o of r) await a.delete(o);
      for (const o of n) await a.put({ ...o, slot: t });
      (e
        ? await i.objectStore("game").put({ ...e, slot: t }, t)
        : await i.objectStore("game").delete(t),
        await i.done);
    },
    async getMeta(t) {
      return await s.get("meta", t);
    },
    async setMeta(t, e) {
      await s.put("meta", e, t);
    },
  };
}
function P() {
  const s = new Map(),
    t = new Map(),
    e = new Map(),
    n = new Map(),
    i = (a) => JSON.parse(JSON.stringify(a));
  return {
    kind: "memory",
    async getEntries(a) {
      return [...s.values()].filter((r) => r.slot === a).map(i);
    },
    async putEntry(a) {
      s.set(a.id, i(a));
    },
    async putEntries(a) {
      for (const r of a) s.set(r.id, i(r));
    },
    async deleteEntry(a) {
      s.delete(a);
    },
    async getGame(a) {
      const r = t.get(a);
      return r ? i(r) : null;
    },
    async putGame(a) {
      t.set(a.slot, i(a));
    },
    async getBackups(a) {
      return [...e.values()]
        .filter((r) => r.slot === a)
        .sort((r, o) => o.at - r.at)
        .map(i);
    },
    async putBackup(a) {
      e.set(a.id, i(a));
    },
    async deleteBackup(a) {
      e.delete(a);
    },
    async replaceSlot(a, r, o) {
      for (const [c, h] of s) h.slot === a && s.delete(c);
      for (const c of o) s.set(c.id, i({ ...c, slot: a }));
      r ? t.set(a, i({ ...r, slot: a })) : t.delete(a);
    },
    async getMeta(a) {
      return n.get(a);
    },
    async setMeta(a, r) {
      n.set(a, i(r));
    },
  };
}
function G(s) {
  const t = s;
  if (typeof t.schema != "number") throw new Error("不是有效的存档");
  if (t.schema > v)
    throw new Error("存档来自更新版本的《字里有田》，请先更新应用");
  return (
    (t.settings = { ...V, ...(t.settings ?? {}) }),
    (t.ledger = t.ledger ?? {
      entryChars: {},
      paraChars: {},
      day: "",
      dayChars: 0,
    }),
    (t.stats = t.stats ?? {}),
    (t.claimed = t.claimed ?? []),
    (t.codex = t.codex ?? { crops: [], animals: [], items: [] }),
    (t.writeDays = t.writeDays ?? []),
    (t.seasonsPlanted = t.seasonsPlanted ?? []),
    (t.daily = t.daily ?? { day: "", stats: {}, tasks: [] }),
    (t.tutorial = t.tutorial ?? { dismissed: !1 }),
    (t.schema = v),
    W(t)
  );
}
function _(s, t) {
  const e = s;
  if (typeof e.id != "string" || typeof e.text != "string")
    throw new Error("日记数据损坏");
  const n = e.text.split(`
`),
    i = Array.isArray(e.paraIds) ? e.paraIds.slice(0, n.length) : [];
  for (; i.length < n.length; ) i.push(`p${e.id}_${i.length}`);
  return {
    id: e.id,
    slot: t,
    createdAt: +e.createdAt || Date.now(),
    updatedAt: +e.updatedAt || Date.now(),
    date: /^\d{4}-\d{2}-\d{2}$/.test(e.date)
      ? e.date
      : new Date(+e.createdAt || Date.now()).toISOString().slice(0, 10),
    time: typeof e.time == "string" ? e.time : "00:00",
    title: String(e.title ?? "").slice(0, 60),
    tags: Array.isArray(e.tags) ? e.tags.map(String).slice(0, 12) : [],
    text: e.text,
    paraIds: i,
    weather: e.weather,
    mood: e.mood,
    deletedAt: e.deletedAt ? +e.deletedAt : null,
  };
}
function J(s, t, e, n) {
  return {
    format: j,
    version: F,
    exportedAt: n,
    app: "字里有田 Paper Farm",
    slot: s,
    game: t,
    entries: e,
  };
}
function pt(s) {
  let t;
  try {
    t = JSON.parse(s);
  } catch {
    return { ok: !1, error: "文件不是有效的 JSON" };
  }
  if (!t || t.format !== j)
    return { ok: !1, error: "这不是《字里有田》的存档文件" };
  if (typeof t.version != "number" || t.version > F)
    return { ok: !1, error: "存档版本过新，请先更新应用" };
  if (!Array.isArray(t.entries)) return { ok: !1, error: "存档里缺少日记数据" };
  try {
    const e = t.slot === "sandbox" ? "sandbox" : "main",
      n = t.entries.map((o) => _(o, e)),
      i = new Set();
    for (const o of n) {
      if (i.has(o.id)) throw new Error("日记 id 重复");
      i.add(o.id);
    }
    const a = t.game ? G(t.game) : null;
    if (a && a.land.length !== a.rows * R) throw new Error("地图数据损坏");
    return {
      ok: !0,
      file: { ...t, slot: e, entries: n, game: a },
      summary: {
        entries: n.filter((o) => !o.deletedAt).length,
        deleted: n.filter((o) => o.deletedAt).length,
        coins: a == null ? void 0 : a.coins,
        level: void 0,
        exportedAt: t.exportedAt,
      },
    };
  } catch (e) {
    return {
      ok: !1,
      error: (e == null ? void 0 : e.message) ?? "存档内容损坏",
    };
  }
}
async function w(s, t, e, n) {
  const [i, a] = await Promise.all([s.getGame(t), s.getEntries(t)]),
    r = {
      id: `bk_${t}_${n}`,
      slot: t,
      at: n,
      reason: e,
      entries: a.filter((c) => !c.deletedAt).length,
      data: J(t, i, a, n),
    };
  await s.putBackup(r);
  const o = await s.getBackups(t);
  for (const c of o.slice(ft)) await s.deleteBackup(c.id);
  return r;
}
class gt {
  constructor() {
    ((this.slot = "main"),
      (this.entries = new Map()),
      (this.ready = !1),
      (this.error = null),
      (this.version = 0),
      (this.saveState = "saved"),
      (this.lastSavedAt = 0),
      (this.toasts = []),
      (this.onEvents = []),
      (this.listeners = new Set()),
      (this.gameTimer = null),
      (this.entryTimers = new Map()),
      (this.dirtyEntries = new Set()),
      (this.gameDirty = !1),
      (this.toastSeq = 1),
      (this.realAnchor = 0),
      (this.otherTab = !1),
      (this.timeShift = 0),
      (this.subscribe = (t) => (
        this.listeners.add(t),
        () => {
          this.listeners.delete(t);
        }
      )),
      (this.getVersion = () => this.version),
      (this.checkImport = pt));
  }
  now() {
    var e;
    const t = Date.now() + this.timeShift;
    return (e = this.s) != null && e.sandbox ? t + this.s.sandbox.offset : t;
  }
  advanceSandbox(t) {
    var n;
    const e = (n = this.s) == null ? void 0 : n.sandbox;
    !e || e.speed <= 1 || (e.offset += t * (e.speed - 1));
  }
  async boot(t = "main", e) {
    ((this.slot = t),
      (this.be = await mt(e)),
      this.watchTabs(),
      await this.load(t),
      window.addEventListener("pagehide", () => this.flush()),
      document.addEventListener("visibilitychange", () => {
        document.visibilityState === "hidden" && this.flush();
      }),
      window.addEventListener("beforeunload", () => this.flush()));
  }
  async load(t) {
    (await this.flush(),
      (this.slot = t),
      (this.ready = !1),
      this.entries.clear());
    const e = await this.be.getGame(t),
      n = Date.now();
    let i;
    (e ? (i = G(e)) : ((i = $(n, t)), await this.be.putGame(i)), (this.s = i));
    for (const d of await this.be.getEntries(t)) {
      const u = _(d, t);
      this.entries.set(u.id, u);
    }
    for (const d of Object.values(i.blocks))
      this.entries.has(d.entryId) || delete i.blocks[d.id];
    const a = i.pendingInk;
    a > 0 &&
      (K(i, a), this.toast(`小鸡帮你收好了上次掉落的 ${a} 粒墨粒`, "gold"));
    const r = JSON.stringify([i.animals, i.jobs]),
      o = this.now() - i.lastTick,
      c = y(i, this.now());
    if (o > 10 * 6e4 && r !== JSON.stringify([i.animals, i.jobs])) {
      const d = Math.min(o, Z.offlineCapHours * 36e5) / 36e5;
      this.toast(
        `离开的 ${d >= 1 ? d.toFixed(1) + " 小时" : Math.round(d * 60) + " 分钟"}里，庄园一直在运转`,
        "green",
      );
    }
    this.emit(c);
    const h = (await this.be.getMeta("lastBackup:" + t)) ?? 0;
    (p(h) !== p(n) &&
      (await this.persistNow(),
      await w(this.be, t, "每日自动备份", n),
      await this.be.setMeta("lastBackup:" + t, n)),
      (this.ready = !0),
      this.changed(!0));
  }
  notify() {
    (this.version++, this.listeners.forEach((t) => t()));
  }
  act(t, e = {}) {
    const n = this.now();
    y(this.s, n);
    const i = t(this.s, n);
    return (
      i.ok
        ? ((this.s.updatedAt = Date.now()),
          this.emit(i.events),
          this.changed(!0))
        : !e.quietFail && i.reason && this.toast(i.reason, "warn"),
      i
    );
  }
  heartbeat() {
    if (!this.ready) return;
    const t = y(this.s, this.now());
    t.length && (this.emit(t), this.changed(!0));
  }
  emit(t) {
    for (const e of t)
      (e.t === "toast" && this.toast(e.text, e.tone ?? "plain"),
        e.t === "level" &&
          this.toast(`升到 ${e.level} 级！${e.message}`, "gold"));
    t.length && this.onEvents.forEach((e) => e(t));
  }
  toast(t, e = "plain") {
    const n = this.toasts[this.toasts.length - 1];
    (n && n.text === t && performance.now() - n.t0 < 1500) ||
      (this.toasts.push({
        id: this.toastSeq++,
        text: t,
        tone: e,
        t0: performance.now(),
      }),
      this.toasts.length > 4 && this.toasts.shift(),
      this.notify());
  }
  changed(t) {
    (t && (this.gameDirty = !0),
      (this.saveState = "dirty"),
      this.gameTimer === null &&
        (this.gameTimer = window.setTimeout(() => this.persistNow(), 600)),
      this.notify());
  }
  async persistNow() {
    this.gameTimer !== null &&
      (clearTimeout(this.gameTimer), (this.gameTimer = null));
    for (const n of this.entryTimers.values()) clearTimeout(n);
    if ((this.entryTimers.clear(), !this.be || !this.s)) return;
    const t = [...this.dirtyEntries]
      .map((n) => this.entries.get(n))
      .filter(Boolean);
    this.dirtyEntries.clear();
    const e = this.gameDirty ? JSON.parse(JSON.stringify(this.s)) : null;
    if (((this.gameDirty = !1), !t.length && !e)) {
      ((this.saveState = "saved"), this.notify());
      return;
    }
    this.saveState = "saving";
    try {
      (t.length && (await this.be.putEntries(t)),
        e && (await this.be.putGame(e)),
        (this.saveState = "saved"),
        (this.lastSavedAt = Date.now()));
    } catch (n) {
      (console.error(n),
        (this.saveState = "error"),
        t.forEach((i) => this.dirtyEntries.add(i.id)),
        e && (this.gameDirty = !0),
        this.toast("保存失败，正在重试…", "warn"),
        window.setTimeout(() => this.persistNow(), 2e3));
    }
    this.notify();
  }
  flush() {
    return this.persistNow();
  }
  watchTabs() {
    if (typeof BroadcastChannel > "u") return;
    const t = new BroadcastChannel("paper-farm-tabs"),
      e = Math.random().toString(36).slice(2);
    ((t.onmessage = (n) => {
      var i, a;
      (((i = n.data) == null ? void 0 : i.type) === "hello" &&
        n.data.id !== e &&
        t.postMessage({ type: "here", id: e }),
        ((a = n.data) == null ? void 0 : a.type) === "here" &&
          n.data.id !== e &&
          ((this.otherTab = !0), this.notify()));
    }),
      t.postMessage({ type: "hello", id: e }));
  }
  liveEntries() {
    return [...this.entries.values()]
      .filter((t) => !t.deletedAt)
      .sort(
        (t, e) =>
          (e.date + e.time).localeCompare(t.date + t.time) ||
          e.createdAt - t.createdAt,
      );
  }
  trash() {
    return [...this.entries.values()]
      .filter((t) => t.deletedAt)
      .sort((t, e) => e.deletedAt - t.deletedAt);
  }
  createEntry() {
    const t = Date.now(),
      e = {
        id: I("e"),
        slot: this.slot,
        createdAt: t,
        updatedAt: t,
        date: p(t),
        time: X(t),
        title: "",
        tags: [],
        text: "",
        paraIds: [I("p")],
        deletedAt: null,
        weather: H[q(this.now())],
      };
    return (this.entries.set(e.id, e), this.markEntry(e.id, !0), e);
  }
  updateText(t, e) {
    const n = this.entries.get(t);
    if (!n || n.text === e) return { grains: 0 };
    const i = n.text.split(`
`),
      a = e.split(`
`);
    ((n.paraIds = U(i, n.paraIds, a)),
      (n.text = e),
      (n.updatedAt = Date.now()));
    const { grains: r } = z(this.s, t, e, this.now()),
      o = f(this.s, n, this.now());
    return (this.emit(o), this.markEntry(t), this.changed(!0), { grains: r });
  }
  updateMeta(t, e) {
    const n = this.entries.get(t);
    n &&
      (Object.assign(n, e),
      (n.updatedAt = Date.now()),
      f(this.s, n, this.now()),
      this.markEntry(t),
      this.changed(!0));
  }
  markEntry(t, e = !1) {
    (this.dirtyEntries.add(t), (this.saveState = "dirty"));
    const n = this.entryTimers.get(t);
    (n && clearTimeout(n),
      this.entryTimers.set(
        t,
        window.setTimeout(() => this.persistNow(), e ? 0 : 500),
      ),
      this.notify());
  }
  softDelete(t) {
    const e = this.entries.get(t);
    e &&
      ((e.deletedAt = Date.now()),
      f(this.s, e, this.now()),
      this.markEntry(t, !0),
      this.changed(!0));
  }
  restore(t) {
    const e = this.entries.get(t);
    e &&
      ((e.deletedAt = null),
      this.emit(f(this.s, e, this.now())),
      this.markEntry(t, !0),
      this.changed(!0));
  }
  async purge(t) {
    const e = this.entries.get(t);
    if (!(!e || !e.deletedAt)) {
      (await w(
        this.be,
        this.slot,
        `永久删除前：${e.title || e.date}`,
        Date.now(),
      ),
        this.entries.delete(t));
      for (const n of Object.values(this.s.blocks))
        n.entryId === t && delete this.s.blocks[n.id];
      (await this.be.deleteEntry(t), this.changed(!0));
    }
  }
  tidy(t, e) {
    const n = this.entries.get(t);
    if (!n || n.deletedAt) return { ok: !1, reason: "", events: [] };
    const i = n.text.split(`
`),
      a = i[e],
      r = n.paraIds[e];
    if (!r || a === void 0) return { ok: !1, reason: "", events: [] };
    const o = i.findIndex((d) => d.trim().length > 0),
      c = e === o ? Q(n) : "",
      h = this.act(
        (d, u) => Y(d, { id: r, entryId: t, text: a, header: c }, u),
        { quietFail: !0 },
      );
    return (
      h.ok &&
        this.act((d, u) => ({ ok: !0, events: f(d, n) }), { quietFail: !0 }),
      h
    );
  }
  exportFile() {
    return J(
      this.slot,
      JSON.parse(JSON.stringify(this.s)),
      [...this.entries.values()],
      Date.now(),
    );
  }
  async importFile(t) {
    if (t.slot === "sandbox" && this.slot === "main")
      throw new Error("沙盒存档不能导入正式存档");
    (await this.flush(),
      await w(this.be, this.slot, "导入存档前的自动备份", Date.now()));
    const e = t.game
        ? {
            ...t.game,
            slot: this.slot,
            sandbox:
              this.slot === "sandbox"
                ? (t.game.sandbox ?? { offset: 0, speed: 1 })
                : null,
          }
        : null,
      n = t.entries.map((i) => ({ ...i, slot: this.slot }));
    (await this.be.replaceSlot(this.slot, e, n), await this.load(this.slot));
  }
  async backups() {
    return this.be.getBackups(this.slot);
  }
  async backupNow(t = "手动备份") {
    return (await this.flush(), w(this.be, this.slot, t, Date.now()));
  }
  async restoreBackup(t) {
    await this.importFile(t.data);
  }
  async resetSlot() {
    (await this.flush(),
      await w(this.be, this.slot, "重置存档前的自动备份", Date.now()),
      await this.be.replaceSlot(this.slot, null, []),
      await this.load(this.slot));
  }
  async switchSlot(t) {
    await this.load(t);
  }
}
const bt = new gt();
window.__pfApp = bt;
export { bt as app };
