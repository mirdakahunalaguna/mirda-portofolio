<template>
  <div 
  @toggleDarkMode="toggleDarkMode" 
  :style="{ width: containerWidth, height: containerHeight }" 
  :class="{ 'text-teal-50 bg-sky-600': isDarkMode, 'bg-sky-800': !isDarkMode }"
  class=" m-4 static rounded-lg">
    <div
    :style="{ width: containerWidth, height: containerHeight }" 
    :class="{ 'text-teal-50 bg-sky-800': isDarkMode, 'bg-sky-50': !isDarkMode }" 
      class="-m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
      <div class="flex items-center justify-between">
        <h1 class="m-4 text-2xl font-bold">{{ props.title }}</h1>
        <icon-svg class="w-20 h-8 rounded-md" :name="props.flag"/>
      </div>
      <hr class="m-4 rounded-2xl border-t-2">
      <p class="m-4 text-sm">{{ formattedContent }}</p>
    </div>
  </div>
</template>

<script setup>
import IconSvg from '@/assets/IconSvg.vue';
import { defineProps} from 'vue';
import { useDark } from "@vueuse/core";

const isDarkMode = useDark();

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

const props = defineProps({
  title: String,
  content: String,
  flag:String,
  width: {
    type: String,
    default: '240' // Default width value
  },
  height: {
    type: String,
    default: '240' // Default height value
  }
}); 
// Meneruskan nilai lebar dan tinggi sebagai variabel untuk style inline
const containerWidth = `${props.width}px`;
const containerHeight = `${props.height}px`;

const formattedContent = isNaN(parseFloat(props.content)) ? props.content : `${parseFloat(props.content).toLocaleString()} IDR`;
</script>
