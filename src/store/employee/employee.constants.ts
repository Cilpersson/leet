import { ESortOrder } from "@/enums/sort-order";
import { namespace } from "vuex-class";
import { EmployeeState } from "./employee.types";

export const Employee = namespace("employee");

export const state: EmployeeState = {
  loading: false,
  loaded: false,
  employees: [],
  filteredEmployees: [],
  sortOrder: ESortOrder.ASC,
};

export enum EEmployeeState {
  Loading = "loading",
  Loaded = "loaded",
  Employees = "employees",
  FilteredEmployees = "filteredEmployees",
  SortOrder = "sortOrder",
}

export enum EmployeeAction {
  LoadEmployees = "loadEmployees",
  SortName = "sortName",
  SortOffice = "sortOffice",
  FilterName = "filterName",
  FilterOffice = "filterOffice",
  DefaultEmployees = "defaultEmployees",
  SortOrder = "sortOrder",
}
export enum EmployeeMutation {
  SetLoading = "setLoading",
  SetLoaded = "setLoaded",
  SetEmployees = "setEmployees",
  SetFilteredEmployees = "setFilteredEmployees",
  SetSortOrder = "setSortOrder",
}

export enum EmployeeGetter {
  FilterName = "filterName",
  FilterLocation = "filterLocation",
}
