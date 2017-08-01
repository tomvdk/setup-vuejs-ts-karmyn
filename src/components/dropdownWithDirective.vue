<template>
  <select :id="id" v-selectpicker="selectedOption" title="" @change='changeSelection($event.target.value)'>
    <optgroup v-for="optiongroup in options" v-bind:label="optiongroup.parentCodeValue.translation" v-bind:value="optiongroup.parentCodeValue.codeValue">
      <option v-for="option in optiongroup.childCodeValues" v-bind:value="option.codeValue">
        {{ option.translation }}
      </option>
    </optgroup>
  </select>
</template>

<script lang="ts">
export { default } from "./dropdownWithDirective";
</script>