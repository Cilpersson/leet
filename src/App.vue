<template>
  <div>
    <input
      v-model="nameSearch"
      @input="employeesWithName"
      placeholder="search for employee name"
    />
    <button @click="handleSortOrder('name')">
      Sort names: {{ sortOrderName }}
    </button>
    <button @click="handleSortOrder('office')">
      Sort office: {{ sortOrderOffice }}
    </button>
    <div v-if="hasEmployees" class="employee-card-container">
      <EmployeeCard
        v-for="(employee, index) in employees"
        :key="index"
        :employee="employee"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  EEmployeeState,
  Employee as EmployeeNameSpace,
  EmployeeAction,
} from "./store/employee/employee.constants";
import { Employee } from "./types/employee";
import EmployeeCard from "./components/EmployeeCard.vue";
import { ESortOrder } from "@/enums/sort-order";

@Component({
  components: {
    EmployeeCard,
  },
  data: () => ({
    ESortOrder: ESortOrder,
  }),
})
export default class App extends Vue {
  @EmployeeNameSpace.Action(EmployeeAction.LoadEmployees)
  actionLoadEmployees: () => void;
  @EmployeeNameSpace.Action(EmployeeAction.FilterName)
  actionFilterName: (name: string) => void;
  @EmployeeNameSpace.Action(EmployeeAction.SortName)
  actionSortName: (sortOrder: ESortOrder) => void;
  @EmployeeNameSpace.Action(EmployeeAction.SortOffice)
  actionSortOffice: (sortOrder: ESortOrder) => void;

  @EmployeeNameSpace.State(EEmployeeState.FilteredEmployees)
  employees: Employee[];

  nameSearch = "";
  sortOrderName = ESortOrder.ASC;
  sortOrderOffice = ESortOrder.ASC;

  employeesWithName() {
    this.actionFilterName(this.nameSearch);
  }

  handleSortOrder(sortOption: string) {
    //ToDo: dry up and add enum
    if (sortOption === "name") {
      this.sortOrderName =
        this.sortOrderName === ESortOrder.ASC
          ? ESortOrder.DESC
          : ESortOrder.ASC;
      this.actionSortName(this.sortOrderName);
      return;
    }
    if (sortOption === "office") {
      this.sortOrderOffice =
        this.sortOrderOffice === ESortOrder.ASC
          ? ESortOrder.DESC
          : ESortOrder.ASC;
      this.actionSortOffice(this.sortOrderOffice);
      return;
    }
  }

  get hasEmployees(): boolean {
    return !!this.employees?.length;
  }

  mounted() {
    this.actionLoadEmployees();
  }
}
</script>

<style lang="scss">
$leet-primary: #0c0c91;
$leet-secondary: #05e273;

.employee-card-container {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
