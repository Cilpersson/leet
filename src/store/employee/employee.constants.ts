import { namespace } from "vuex-class";
import { EmployeeState } from "./employee.types";

export const Employee = namespace("employee");

export const state: EmployeeState = {
  loading: false,
  loaded: false,
  employees: [],
};

export enum EmployeeAction {
  LoadEmployees = "loadEmployees",
}
export enum EmployeeMutation {
  SetLoading = "setLoading",
  SetLoaded = "setLoaded",
  SetEmployees = "setEmployees",
}
