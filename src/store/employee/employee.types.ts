import { Employee } from "@/types/employee";

export type EmployeeState = {
  loading: boolean;
  loaded: boolean;
  employees: Employee[];
};
