import Vue from "vue";
import Vuex from "vuex";
import exercises from "./exercises";
import common from "./common";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    exercises,
    common
  }
});
