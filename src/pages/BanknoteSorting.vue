<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div   
  @toggleDarkMode="toggleDarkMode" 
  :class="{ 'text-teal-50': isDarkMode, 'text-gray-800': !isDarkMode }"
  class="bg-transparent animate-fade-in-down">
    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-wider">Banknote Sorting Machines</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div 
          :class="{ 'bg-gray-700': isDarkMode, 'bg-gray-200 ': !isDarkMode }"
          class="aspect-h-2 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-lg  font-semibold">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0 text-2xl font-bold" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-base">{{ product.description }}</p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDark } from "@vueuse/core";

const isDarkMode = useDark();

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
const products = [
  {
    id: 1,
    name: 'Glory F-4',
    href: '#',
    imageSrc: require('../assets/GLORY F-4.png'), 
    imageAlt: "Highly Durable Vacuum Banknote Counters", 
    description: 'providing distinct features tailored to ensure precise counting of both fit and unfit banknotes.',
  }, 
  {
    id: 1,
    name: 'Glory USF-200',
    href: '#',
    imageSrc: require('../assets/GLORY USF-200.png'), 
    imageAlt: "Highly Durable Vacuum Banknote Counters", 
    description: 'providing distinct features tailored to ensure precise counting of both fit and unfit banknotes.',
  }, 
  {
    id: 1,
    name: 'Glory USF-300',
    href: '#',
    imageSrc: require('../assets/GLORY USF-300.png'), 
    imageAlt: "Highly Durable Vacuum Banknote Counters", 
    description: 'providing distinct features tailored to ensure precise counting of both fit and unfit banknotes.',
  },
  {
    id: 1,
    name: 'Glory UW-500',
    href: '#',
    imageSrc: require('../assets/GLORY UW-500.png'), 
    imageAlt: "Highly Durable Vacuum Banknote Counters", 
    description: 'providing distinct features tailored to ensure precise counting of both fit and unfit banknotes.',
  },
  
  // More products...
]
</script>