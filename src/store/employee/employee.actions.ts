import { employeeService } from "@/api/employee-service";
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
    } catch {
      commit(EmployeeMutation.SetLoading, false);
      commit(EmployeeMutation.SetLoaded, false);
      commit(EmployeeMutation.SetEmployees, []);
    }
  },
};
