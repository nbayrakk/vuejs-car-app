import Vuex from "vuex";
import Vue from "vue";
import { cars } from "./modules";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cars,
  },
});

export default store;
