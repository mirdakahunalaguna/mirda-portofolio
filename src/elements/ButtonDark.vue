<!-- ButtonDark.vue -->
<template>
  <button @click="toggleDarkMode" class="flex items-center justify-center animate-pulse">
    <SunIcon v-if="!isDarkMode" class="h-7 w-7 font-extrabold text-yellow-500" />
    <MoonIcon v-else class="h-6 w-6 text-blue-300" />
  </button>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { SunIcon, MoonIcon } from '@heroicons/vue/20/solid';

const { emit } = getCurrentInstance();

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  emit('toggle-dark-mode'); // Memancarkan event toggle-dark-mode saat tombol ditekan
};
</script>
