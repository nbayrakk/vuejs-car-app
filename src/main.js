import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

Vue.use(require("vue-moment"));

Vue.config.productionTip = false;
import "@/assets/global.css";

const messages = {
  tr: {
      color:"Renk",
      km:"Km",
      year:"Yıl",
      gear:"Vites",
      fuel:"Yakıt"
  },
  en: {
      color:"Color",
      km:"Km",
      year:"Year",
      gear:"Gear",
      fuel:"Fuel"
  },
};
const i18n = new VueI18n({
  locale: 'tr',
  messages
});

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
