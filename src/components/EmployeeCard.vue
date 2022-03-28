<template>
  <div class="employee-card">
    <!-- <img :src="image" />-->
    <p>{{ name }}</p>
    <!-- <p>{{ github }}</p> -->
    <p>office {{ office }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Employee } from "@/types/employee";

@Component
export default class EmployeeCard extends Vue {
  @Prop() employee: Employee;

  get name() {
    return this.employee?.name;
  }
  get github() {
    return this.employee?.gitHub;
  }
  get office() {
    return this.employee?.office;
  }
  get image() {
    if (!this.employee?.imagePortraitUrl) {
      return "";
    }
    return this.stringWithoutCommas(this.employee.imagePortraitUrl);
  }

  stringWithoutCommas(string: string) {
    return string.replaceAll(",", "");
  }
}
</script>

<style scoped lang="scss">
.employee-card {
  width: 100%;
  img {
    width: 100%;
  }
  p {
    width: fit-content;
  }
}
</style>
