import stAuthService from "../auth/stAuthService";

export default {
  install(Vue) {
    Vue.prototype.$stAuth = stAuthService;

    Vue.mixin({
      created() {
        if (this.handleLoginEvent) {
            stAuthService.addListener("loginEvent", this.handleLoginEvent);
        }
      },

      destroyed() {
        if (this.handleLoginEvent) {
            stAuthService.removeListener("loginEvent", this.handleLoginEvent);
        }
      }
    });
  }
};
