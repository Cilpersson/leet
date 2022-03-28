import { ESortOrder } from "@/enums/sort-order";
import { Employee } from "@/types/employee";
import { MutationTree } from "vuex";
import { EmployeeMutation } from "./employee.constants";
import { EmployeeState } from "./employee.types";

export const mutations: MutationTree<EmployeeState> = {
  [EmployeeMutation.SetLoading](state, loading: boolean) {
    state.loading = loading;
  },
  [EmployeeMutation.SetLoaded](state, loaded: boolean) {
    state.loaded = loaded;
  },
  [EmployeeMutation.SetEmployees](state, employees: Employee[]) {
    state.employees = employees;
  },
  [EmployeeMutation.SetFilteredEmployees](state, employees: Employee[]) {
    state.filteredEmployees = employees;
  },
  [EmployeeMutation.SetSortOrder](state, sortOrder: ESortOrder) {
    state.sortOrder = sortOrder;
  },
};
