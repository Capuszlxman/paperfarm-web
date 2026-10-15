class h {
  constructor() {
    ((this.mode = "write"),
      (this.tool = "hand"),
      (this.seed = null),
      (this.buildDef = null),
      (this.ghost = null),
      (this.selected = null),
      (this.sheet = null),
      (this.entryId = null),
      (this.focus = null),
      (this.onboarding = 0),
      (this.confirm = null),
      (this.version = 0),
      (this.ls = new Set()),
      (this.subscribe = (s) => (
        this.ls.add(s),
        () => {
          this.ls.delete(s);
        }
      )),
      (this.getVersion = () => this.version));
  }
  set(s) {
    (Object.assign(this, s), this.version++, this.ls.forEach((t) => t()));
  }
  setTool(s, t = {}) {
    this.set({
      tool: s,
      ghost: s === "build" || s === "move" ? this.ghost : null,
      ...t,
    });
  }
  resetTool() {
    this.set({ tool: "hand", seed: null, buildDef: null, ghost: null });
  }
  open(s) {
    this.set({ sheet: s });
  }
  close() {
    this.set({ sheet: null, selected: null });
  }
  ask(s, t, e, i, l = !1) {
    this.set({ confirm: { title: s, text: t, ok: e, onOk: i, danger: l } });
  }
}
const n = new h();
window.__pfUI = n;
export { n as ui };
