<template>
  <div id="app"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee, EmployeeAction } from "./store/employee/employee.constants";

@Component({
  components: {},
})
export default class App extends Vue {
  @Employee.Action(EmployeeAction.LoadEmployees)
  actionLoadEmployees: () => void;

  mounted() {
    this.actionLoadEmployees();
  }
}
</script>

<style lang="scss"></style>
