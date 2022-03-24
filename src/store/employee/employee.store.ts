import { Module } from "vuex";
import { RootState } from "../store";
import { actions } from "./employee.actions";
import { mutations } from "./employee.mutations";
import { EmployeeState } from "./employee.types";
import { state } from "./employee.constants";

export const employee: Module<EmployeeState, RootState> = {
  state,
  actions,
  mutations,
  namespaced: true,
};
