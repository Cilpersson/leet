import { ESortOrder } from "@/enums/sort-order";
import { Employee } from "@/types/employee";

export type EmployeeState = {
  loading: boolean;
  loaded: boolean;
  employees: Employee[];
  filteredEmployees: Employee[];
  sortOrder: ESortOrder;
};
