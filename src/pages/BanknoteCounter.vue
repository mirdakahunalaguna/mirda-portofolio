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
  <div class="bg-transparent">
    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Banknote Counter</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="aspect-h-2 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-lg text-gray-700 font-semibold">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0 text-2xl" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Glory GNH-710',
    href: '#',
    imageSrc: require('../assets/gnd-710.png'), 
    imageAlt: "Highly Durable Vacuum Banknote Counters", 
    description: 'providing distinct features tailored to ensure precise counting of both fit and unfit banknotes.',
  }, 
  {
    id: 1,
    name: 'Glory GNH-200',
    href: '#',
    imageSrc: require('../assets/gnh-200.png'), 
    imageAlt: "Highly Durable Vacuum Banknote Counters", 
    description: 'providing distinct features tailored to ensure precise counting of both fit and unfit banknotes.',
  }, 
  {
    id: 1,
    name: 'Glory GND-710',
    href: '#',
    imageSrc: require('../assets/gnd-710.png'), 
    imageAlt: "Highly Durable Vacuum Banknote Counters", 
    description: 'providing distinct features tailored to ensure precise counting of both fit and unfit banknotes.',
  },
  {
    id: 1,
    name: 'Glory GFB-800',
    href: '#',
    imageSrc: require('../assets/gfb-800.png'), 
    imageAlt: "Highly Durable Vacuum Banknote Counters", 
    description: 'providing distinct features tailored to ensure precise counting of both fit and unfit banknotes.',
  },
  
  // More products...
]
</script>