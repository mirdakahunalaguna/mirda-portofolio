
<template>
  <div class="bg-transparent">
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-16 lg:max-w-6xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mirda Yanuar Arafat</h2>
        <p class="mt-4 text-gray-500">          
        I possess significant expertise in operating, maintaining, and troubleshooting 
        various types of money counting, detection, and sorting machines, gained through years of hands-on experience in the field.
        </p>
        <p class="mt-4 text-gray-500">          
        "I am enthusiastic about programming and passionate about exploring its endless possibilities."
        </p>
      
        <dl class="mt-8 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-4">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-2">
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-1 text-sm text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
      <div class="grid sm:gap-6 lg:gap-8"> 
        <img src="../assets/profile.png" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { name: 'Backend', description: 'Laravel, node js/ express' },
  { name: 'Frontend', description: 'Vue js, React js, ' },
  { name: 'Database', description: 'Mysql, Postgree sql' },
  { name: 'Office', description: 'Ms Word, Ms Excel, power point' }, 
]
</script>
