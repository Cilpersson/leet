import { employeeService } from "@/api/employee-service";
import { ESortOrder } from "@/enums/sort-order";
import { Employee } from "@/types/employee";
import { ActionTree } from "vuex";
import { RootState } from "../store";
import { EmployeeAction, EmployeeMutation } from "./employee.constants";
import { EmployeeState } from "./employee.types";

export const actions: ActionTree<EmployeeState, RootState> = {
  async [EmployeeAction.LoadEmployees]({ commit }) {
    commit(EmployeeMutation.SetLoading, true);
    try {
      const employees: Employee[] = await employeeService();
      commit(EmployeeMutation.SetLoading, false);
      commit(EmployeeMutation.SetLoaded, true);
      commit(EmployeeMutation.SetEmployees, employees);
      commit(EmployeeMutation.SetFilteredEmployees, employees);
    } catch {
      commit(EmployeeMutation.SetLoading, false);
    }
  },
  [EmployeeAction.FilterName]({ state, commit, dispatch }, name: string) {
    commit(EmployeeMutation.SetLoading, true);
    const employees: Employee[] = state.employees.filter((employee) => {
      if (employee.name.toLowerCase().includes(name.toLowerCase())) {
        return employee;
      }
    });
    if (name.length < 3) {
      commit(EmployeeMutation.SetFilteredEmployees, state.employees);
      dispatch(EmployeeAction.FilterName);
      return;
    }
    commit(EmployeeMutation.SetFilteredEmployees, employees);
    commit(EmployeeMutation.SetLoading, false);
  },

  // ToDo: Dry up sortoffice and sortname
  [EmployeeAction.SortOffice]({ state, commit }, sortOrder: ESortOrder) {
    const { ASC, DESC } = ESortOrder;
    commit(EmployeeMutation.SetLoading, true);

    if (sortOrder === ASC) {
      state.filteredEmployees.sort((a: Employee, b: Employee) => {
        return a?.office ? a?.office.localeCompare(b?.office) : -1;
      });
    }
    if (sortOrder === DESC) {
      state.filteredEmployees.sort((a: Employee, b: Employee) => {
        return b?.office ? b?.office.localeCompare(a?.office) : -1;
      });
    }

    commit(EmployeeMutation.SetLoading, false);
  },
  [EmployeeAction.SortName]({ state, commit }, sortOrder: ESortOrder) {
    const { ASC, DESC } = ESortOrder;
    commit(EmployeeMutation.SetLoading, true);

    if (sortOrder === ASC) {
      state.filteredEmployees.sort((a: Employee, b: Employee) => {
        return a?.name ? a?.name.localeCompare(b?.name) : -1;
      });
    }
    if (sortOrder === DESC) {
      state.filteredEmployees.sort((a: Employee, b: Employee) => {
        return b?.name ? b?.name.localeCompare(a?.name) : -1;
      });
    }
    commit(EmployeeMutation.SetLoading, false);
  },
};
