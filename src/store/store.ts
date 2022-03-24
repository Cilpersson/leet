import Vue from "vue";
import Vuex from "vuex";
import { employee } from "./employee/employee.store";

Vue.use(Vuex);

// eslint-disable-next-line
export type RootState = {};
const defaultState: RootState = {};

export default new Vuex.Store({
  state: defaultState,
  modules: { employee },
});
