import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "../archive/store/store";
import Vuetify from "vuetify";
import "./registerServiceWorker";
import * as fb from "firebase";
import config from "@/config/fb";

Vue.config.productionTip = false;

Vue.use(Vuetify);
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    fb.initializeApp(config);
  }
}).$mount("#app");
