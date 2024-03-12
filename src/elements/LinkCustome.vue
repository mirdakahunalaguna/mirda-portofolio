<!-- LinkCustome.vue -->
<template>
  <span
    @toggleDarkMode="toggleDarkMode"
    class="text-sm font-semibold leading-6"
    :class="{ 'text-white hover:text-teal-200 ': isDarkMode, 'text-gray-900 hover:text-sky-800': !isDarkMode }">
  {{ props.title }}
  </span>
</template>

<script setup>
import { defineProps} from 'vue';
import { useDark } from "@vueuse/core";

const props = defineProps({
  title: String, 
});
const isDarkMode = useDark();

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

</script>
