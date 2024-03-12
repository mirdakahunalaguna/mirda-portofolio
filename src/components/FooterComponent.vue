<template> 
<footer 
  :class="[isDarkMode ? 'text-teal-50 bg-gradient-to-b from-gray-600 to-gray-500 z-50 sticky top-0' : 'bg-gradient-to-b from-slate-300 to-slate-200 sticky top-0']"
  @toggleDarkMode="toggleDarkMode"
  class="relative pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left lg:justify-between">
      <div class="w-full lg:w-6/12 px-4">
        <h4 
        :class="{ 'text-sky-300': isDarkMode, 'text-sky-400': !isDarkMode }"
        class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6 flex gap-4 lg:gap-6">  
          <a :href="'mailto:mirda922@gmail.com'" target="_blank" >
            <icon-svg class="w-12 h-12 md:w-10 md:h-10 hover:bg-slate-400 p-2 rounded-sm" :name="'GMAIL'"/>
          </a>          
          <a :href="`https://wa.me/${628811581879}`" target="_blank" >
            <icon-svg class="w-12 h-12 md:w-10 md:h-10  hover:bg-slate-400 p-2 rounded-sm" :name="'WHATSUP'"/>
          </a>
          <a :href="'https://www.facebook.com/share/KxEWzxbVQPB294Lg/?mibextid=qi2Omg'" target="_blank" >
            <icon-svg class="w-12 h-12 md:w-10 md:h-10  hover:bg-slate-400 p-2 rounded-sm" :name="'FB'"/>
          </a> 
          <a :href="'https://github.com/mirdakahunalaguna'" target="_blank" >
            <icon-svg class="w-12 h-12 md:w-10 md:h-10  hover:bg-slate-400 p-2 rounded-sm" :name="'GITHUB'"/>
          </a>
          <a :href="'https://www.instagram.com/mrdynr_arafat?igsh=dGxyeTd0dXZiNTNu'" target="_blank" >
            <icon-svg class="w-12 h-12 md:w-10 md:h-10  hover:bg-slate-400 p-2 rounded-sm" :name="'INSTAGRAM'"/>
          </a>
        </div>
      </div>
      <div class="w-full px-4 lg:w-1/4 md:w-1/2 md:text-right">
        <h4 
        :class="{ 'text-sky-300': isDarkMode, 'text-sky-400': !isDarkMode }"
        class="text-3xl fonat-semibold text-blueGray-700">ask more about me!</h4>
        <nav class="mb-10 list-none">
            <li class="mt-3">
                <a class="cursor-pointer hover:text-gray-700">Terms &amp; Privacy</a>
            </li>
            <li class="mt-3">
                <a class="cursor-pointer hover:text-gray-700">Pricing</a>
            </li>
            <li class="mt-3">
                <a class="cursor-pointer hover:text-gray-700">FAQ</a>
            </li>
        </nav>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
      </div>
    </div>
  </div>
</footer>
</template>

<script setup> 
import { useDark } from "@vueuse/core";
import IconSvg from "@/elements/IconSvg.vue";

const isDarkMode = useDark();

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
}; 
</script>
