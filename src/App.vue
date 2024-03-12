<template> 
  <div id="app" :class="[isDarkMode ? 'bg-gradient-to-r from-slate-500 to-gray-600' : 'bg-gradient-to-r from-blue-100 to-teal-50']"> 
    <Header  v-if="shouldShowHeader" @toggleDarkMode="toggleDarkMode" />
    <main>
      <router-view />
    </main>
    <Footer  v-if="shouldShowFooter" />
  </div>
</template>

<script setup>

import { useRoute } from 'vue-router';
import { useDark } from "@vueuse/core";
import { computed } from 'vue'; // Import computed from vue
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue'; 

const route = useRoute();
const isDarkMode = useDark(); 

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

const shouldShowHeader = computed(() => {
  return route.path !== '/login' && route.path !== '/sign-up';
});

const shouldShowFooter = computed(() => {
  return route.path !== '/login' && route.path !== '/sign-up';
});
</script>
