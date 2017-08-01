<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $t("home.hello") }}</p>
    <p class="leftAlign"><span>Dropdown component:</span><dropdown uniqueId="filter" prefix="status" :value="selectedStatus" :options="statusFilters" @selectionChanged="changeStatusFilter"></dropdown></p>
    <p class="leftAlign"><span>Dropdown component with directive:</span><dropdown-with-directive uniqueId="filter" prefix="status" :value="selectedStatus" :options="statusFilters" @selectionChanged="changeStatusFilter"></dropdown-with-directive></p>
    <p class="leftAlign"><span>Selectpicker component:</span>
      <selectpicker :name="selectPicker" :selected="true" @change="changeFilter"></selectpicker> 
    </p>
  </div>
</template>

<script lang="ts">
// While it would be possible to support inline TypeScript
// code in the vue file itself, we prefer separate files
// to make use of existing IDE/editor and tooling support
// for TypeScript files.
// https://github.com/locoslab/vue-typescript-component
export { default } from './hello';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.leftAlign{
  text-align: left;
}
</style>
