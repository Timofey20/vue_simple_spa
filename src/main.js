import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import contact from "./vuex/contact";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  contact,
}).$mount("#app");
