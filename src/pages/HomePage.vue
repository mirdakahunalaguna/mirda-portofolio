<template>
  <div  
  @toggleDarkMode="toggleDarkMode" 
  :class="{ 'text-teal-50': isDarkMode, 'text-gray-800': !isDarkMode }"
  class="overflow-hidden bg-transparent animate-fade-in-down">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-5 lg:py-7">
      <div class="mx-auto grid max-w-2xl grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 lg:mx-0 lg:max-w-none"> 
        <div class="mx-auto max-w-2xl grid grid-cols-1 items-center">
            <div class="text-center" >
              <h2 :class="{ 'text-sky-300': isDarkMode, 'text-sky-400': !isDarkMode }" 
              class="text-lg font-semibold leading-7  ">Experienced Banking Machine Technician</h2>
              <p  class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">Mirda Yanuar Arafat</p>
              <p  class="mt-6 text-lg leading-8 ">A dedicated machine technician with a background in mechanical engineering, I'm eager to transition into programming, bringing strong analytical skills and a passion for building innovative solutions to the tech industry.</p>
            </div>
        </div>
        <div class="mx-auto max-w-xl lg:text-center">
          <!-- Tambahkan komponen LottieAnimation di sini -->
          <LottieAnimation class=" -mt-16 py-1"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LottieAnimation from '@/components/LottieAnimation.vue'; // Impor komponen LottieAnimation
import { useDark } from "@vueuse/core";

const isDarkMode = useDark();

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>
