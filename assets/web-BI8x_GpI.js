import { W as t } from "./native-Zn1Vz-Sk.js";
import "./index-Buxy_O7c.js";
import "./app-CQ7Ebbfh.js";
import "./sim-D2hRsYBy.js";
import "./state-CG0_YQPW.js";
class d extends t {
  constructor() {
    (super(),
      (this.handleVisibilityChange = () => {
        const e = { isActive: document.hidden !== !0 };
        (this.notifyListeners("appStateChange", e),
          document.hidden
            ? this.notifyListeners("pause", null)
            : this.notifyListeners("resume", null));
      }),
      document.addEventListener(
        "visibilitychange",
        this.handleVisibilityChange,
        !1,
      ));
  }
  exitApp() {
    throw this.unimplemented("Not implemented on web.");
  }
  async getInfo() {
    throw this.unimplemented("Not implemented on web.");
  }
  async getLaunchUrl() {
    return { url: "" };
  }
  async getState() {
    return { isActive: document.hidden !== !0 };
  }
  async minimizeApp() {
    throw this.unimplemented("Not implemented on web.");
  }
  async toggleBackButtonHandler() {
    throw this.unimplemented("Not implemented on web.");
  }
}
export { d as AppWeb };
