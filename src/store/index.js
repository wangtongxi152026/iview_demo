import Vue from "vue";
import Vuex from "vuex";
import app from "./module/app";
import user from "./module/user";

Vue.use(Vuex);

let store = {
  modules: { user, app }
};

export default new Vuex.Store(store);

export const vuexOptions = store;
