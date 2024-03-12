<template>
  <div @toggleDarkMode="toggleDarkMode" class="mb-4">
    <label 
      :class="{ 'text-blue-200': isDarkMode, 'text-gray-800': !isDarkMode }"
      class="block mb-2 text-lg" :for="fieldId">{{ label }}</label>
    <input 
      :id="fieldId"  
      :type="type" 
      v-model="modelValue" 
      @input="emitInput"
      autocomplete="off"
      :class="{ 'bg-slate-600 active:bg-slate-600 focus:bg-slate-600 focus:border-gray-700': isDarkMode, 'text-gray-800': !isDarkMode }"
      class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 " 
      >
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { useDark } from "@vueuse/core";

const isDarkMode = useDark();

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  fieldId: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: [String, Number],
    default: ''
  },
  
});

const modelValue = ref(props.value);

const emitInput = (event) => {
  emit('update:value', event.target.value);
};

const emit = defineEmits(['update:value']);
</script> 
