<template>
    <select :id="id" v-model="selectedOption" title="" v-selectpicker="selectedOption" @change='changeSelection($event)'>
        <span v-for="optiongroup in options" >
            <optgroup v-bind:label="optiongroup.parentCodeValue.translation" v-bind:value="optiongroup.parentCodeValue.codeValue">
              <option v-for="option in optiongroup.childCodeValues" v-bind:value="option.codeValue" >
                {{ option.translation }}
              </option>
            </optgroup>
          </span>
    </select>
</template>

<script lang="ts">
export { default } from "./dropdown";
</script>