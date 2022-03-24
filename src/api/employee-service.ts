import { Employee } from "@/types/employee";
import axios from "axios";

const employeeUrl = process.env.VUE_APP_BASE_URL;
const token = process.env.VUE_APP_API_KEY;

export const employeeService = async (): Promise<Employee[]> => {
  const { data: employees } = await axios.get(employeeUrl, {
    headers: { Authorization: `api-key ${token}` },
  });
  return employees;
};
