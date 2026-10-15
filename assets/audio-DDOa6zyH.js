import { clock as h } from "./core-Dv3-PHk5.js";
const d = [];
let s = null,
  b = null,
  g = !1;
function q() {
  if (!h.capture)
    try {
      ((s = s || new AudioContext()),
        s.state === "suspended" && s.resume(),
        b ||
          ((b = s.createGain()),
          (b.gain.value = 0.55),
          b.connect(s.destination)),
        (g = !0));
    } catch {
      g = !1;
    }
}
function x(n, r = 1, t = 0) {
  if ((d.push({ t: +h.t.toFixed(4), name: n, vol: r, pan: t }), g && s && b))
    try {
      y(n, r, t);
    } catch {}
}
function v(n, r, t, e, a) {
  (n.gain.setValueAtTime(1e-4, r),
    n.gain.exponentialRampToValueAtTime(a, r + t),
    n.gain.exponentialRampToValueAtTime(1e-4, r + t + e));
}
function c(n, r, t, e, a, o, i = 0, m) {
  const l = s.createOscillator(),
    f = s.createGain(),
    k = s.createStereoPanner();
  ((k.pan.value = i),
    (l.type = r),
    l.frequency.setValueAtTime(n, t),
    m && l.frequency.exponentialRampToValueAtTime(m, t + e + a),
    v(f, t, e, a, o),
    l.connect(f).connect(k).connect(b),
    l.start(t),
    l.stop(t + e + a + 0.05));
}
function u(n, r, t, e = 2e3, a = 1) {
  const o = Math.floor(s.sampleRate * r),
    i = s.createBuffer(1, o, s.sampleRate),
    m = i.getChannelData(0);
  for (let p = 0; p < o; p++) m[p] = (Math.random() * 2 - 1) * (1 - p / o);
  const l = s.createBufferSource();
  l.buffer = i;
  const f = s.createBiquadFilter();
  ((f.type = "bandpass"), (f.frequency.value = e), (f.Q.value = a));
  const k = s.createGain();
  ((k.gain.value = t), l.connect(f).connect(k).connect(b), l.start(n));
}
function y(n, r, t) {
  const e = s.currentTime + 0.01,
    a = r;
  switch (n) {
    case "type":
      u(e, 0.04, 0.12 * a, 3200, 2);
      break;
    case "grain":
      (c(1568, "sine", e, 0.005, 0.25, 0.12 * a, t),
        c(2093, "sine", e + 0.06, 0.005, 0.3, 0.08 * a, t));
      break;
    case "peck":
      u(e, 0.03, 0.2 * a, 1800, 4);
      break;
    case "collect":
      (c(1046, "triangle", e, 0.005, 0.12, 0.1 * a, t),
        c(1568, "triangle", e + 0.05, 0.005, 0.18, 0.08 * a, t));
      break;
    case "pop":
      c(520, "sine", e, 0.005, 0.12, 0.2 * a, t, 900);
      break;
    case "tap":
      c(880, "sine", e, 0.003, 0.06, 0.12 * a, t);
      break;
    case "open":
      (c(660, "triangle", e, 0.01, 0.15, 0.1 * a),
        c(990, "triangle", e + 0.07, 0.01, 0.2, 0.08 * a));
      break;
    case "close":
      c(880, "triangle", e, 0.01, 0.12, 0.08 * a, 0, 600);
      break;
    case "plant":
      (u(e, 0.12, 0.25 * a, 600, 1),
        c(392, "sine", e + 0.05, 0.005, 0.15, 0.12 * a));
      break;
    case "grow":
      c(784, "sine", e, 0.01, 0.25, 0.08 * a, t, 1175);
      break;
    case "harvest":
      (u(e, 0.18, 0.3 * a, 2500, 0.8),
        c(988, "triangle", e + 0.05, 0.01, 0.2, 0.1 * a));
      break;
    case "coin":
      (c(1318, "square", e, 0.003, 0.08, 0.05 * a),
        c(1760, "square", e + 0.07, 0.003, 0.22, 0.05 * a));
      break;
    case "mill":
      u(e, 0.6, 0.12 * a, 400, 0.7);
      break;
    case "eat":
      u(e, 0.05, 0.18 * a, 1400, 3);
      break;
    case "egg":
      c(698, "sine", e, 0.005, 0.2, 0.18 * a, t, 1046);
      break;
    case "hammer":
      (u(e, 0.08, 0.5 * a, 900, 2), c(220, "sine", e, 0.002, 0.1, 0.25 * a));
      break;
    case "whoosh":
      u(e, 0.4, 0.18 * a, 1200, 0.5);
      break;
    case "upgrade":
      [523, 659, 784, 1046].forEach((o, i) =>
        c(o, "triangle", e + i * 0.08, 0.01, 0.5, 0.1 * a),
      );
      break;
    case "levelup":
      [784, 988, 1175].forEach((o, i) =>
        c(o, "sine", e + i * 0.07, 0.01, 0.35, 0.09 * a),
      );
      break;
    case "sparkle":
      [1760, 2349, 2637].forEach((o, i) =>
        c(o, "sine", e + i * 0.05, 0.005, 0.3, 0.04 * a),
      );
      break;
    case "cluck":
      (c(700, "square", e, 0.005, 0.06, 0.05 * a, t, 500),
        c(760, "square", e + 0.09, 0.005, 0.07, 0.05 * a, t, 520));
      break;
    case "baa":
      c(330, "sawtooth", e, 0.05, 0.4, 0.04 * a, t, 300);
      break;
    case "moo":
      c(150, "sawtooth", e, 0.1, 0.6, 0.05 * a, t, 120);
      break;
    case "stamp":
      u(e, 0.1, 0.4 * a, 300, 1);
      break;
    case "land":
      (u(e, 0.2, 0.3 * a, 250, 0.8), c(110, "sine", e, 0.005, 0.2, 0.2 * a));
      break;
    default:
      c(660, "sine", e, 0.005, 0.1, 0.06 * a);
  }
}
export { x as a, q as e, d as s };
