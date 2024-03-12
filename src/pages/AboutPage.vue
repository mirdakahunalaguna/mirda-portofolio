
<template>
  <div class="animate-fade-in-down content-normal ">
    <div 
    @toggleDarkMode="toggleDarkMode" 
    :class="{ 'text-teal-50': isDarkMode, 'text-gray-800': !isDarkMode }"
    class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 sm:py-12 lg:max-w-6xl lg:grid-cols-2 lg:px-8">
      <div >
        <h2 :class="{ 'bg-gradient-to-b from-sky-300 to-sky-400 bg-clip-text text-transparent': isDarkMode, 'text-gray-800': !isDarkMode }" class="text-3xl font-bold tracking-tight   sm:text-4xl">Mirda Yanuar Arafat</h2>
        <p class="mt-4 ">          
        I possess significant expertise in operating, maintaining, and troubleshooting 
        various types of money counting, detection, and sorting machines, gained through years of hands-on experience in the field.
        </p>
        <p class="mt-4 ">          
        "I am enthusiastic about programming and passionate about exploring its endless possibilities."
        </p>
      
        <dl class="mt-8 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-4">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-2">
            <dt class="font-medium  ">{{ feature.name }}</dt>
            <dd class="mt-1 text-sm ">{{ feature.description }}</dd>
          </div>
        </dl> 
        <div class="flex my-12 -mb-7"> 
            <div 
            :class="{ 'bg-gray-700': isDarkMode, 'bg-blue-200': !isDarkMode }"
            class="animate-spin z-0 mt-3 text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 shadow-lg rounded-full">
              <icon-svg class="rounded-full w-12 h-12 md:w-16 md:h-16" :name="'ROADMAPSH'"/>
            </div>
            <div class="grid -ml-5 z-30">
              <h6 
              :class="{ 'bg-gradient-to-b from-sky-300 to-sky-400 bg-clip-text text-transparent': isDarkMode, 'text-gray-800': !isDarkMode }" 
              class="text-xl mb-1 font-semibold ">
              see my progress on roadmap.sh
              </h6>
              <p class="mb-4 text-blueGray-500 grid grid-cols-2 gap-x-4 gap-y-1">                
                <a class="hover:text-teal-400" href="https://roadmap.sh/full-stack?s=6586d2e45145316d2549ae00">Full Stack</a>
                <a class="hover:text-teal-400" href="https://roadmap.sh/backend?s=6586d2e45145316d2549ae00">Backend</a>
                <a class="hover:text-teal-400" href="https://roadmap.sh/frontend?s=6586d2e45145316d2549ae00">Frontend</a>
                <a class="hover:text-teal-400" href="https://roadmap.sh/nodejs?s=6586d2e45145316d2549ae00">Node Js</a>
                <a class="hover:text-teal-400" href="https://roadmap.sh/sql?s=6586d2e45145316d2549ae00">SQL</a>
                <a class="hover:text-teal-400" href="https://roadmap.sh/vue?s=6586d2e45145316d2549ae00">Vue js</a>
                <a class="hover:text-teal-400" href="https://roadmap.sh/react?s=6586d2e45145316d2549ae00">React js</a>
              </p> 
            </div> 
        </div>         
      </div>
      <div class="px-5 md:px-6 md:-mt-36"> 
        <img src="../assets/profile.png" alt="photo profile" class=" w-full align-middle rounded-lg " />
      </div>
    </div>
  </div> 
<div 
  @toggleDarkMode="toggleDarkMode" class="animate-fade-in-down mx-auto mt-12 md:mt-0 container"
  :class="{ 'text-teal-50': isDarkMode, 'text-gray-800': !isDarkMode }">
  <div class="flex flex-wrap items-center">
    <div class="w-10/12 md:w-6/12 lg:w-4/12 md:px-4 mr-auto ml-auto -mt-78">
      <h2 :class="{ 'bg-gradient-to-b from-sky-300 to-sky-400 bg-clip-text text-transparent': isDarkMode, 'text-gray-600': !isDarkMode }" class="hidden lg:block mb-8 -mt-24 text-3xl font-bold tracking-tight   sm:text-4xl"> Overview of this web</h2>
      <div 
        :class="{ 'bg-gray-700': isDarkMode, 'bg-teal-400': !isDarkMode }"
        class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ">
        <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" class="w-full align-middle rounded-t-lg">
        <div class="relative p-8 mb-4">
          
          <h4 class="text-xl font-bold">
           Building portfolio single page web with darkmode feature
          </h4>
          <p class="text-md font-sans mt-2">
           The website is a depiction of its creator, showcasing their skills, experiences, and projects, typically used as a portfolio to demonstrate their capabilities to potential employers or clients.
          </p>
        </div>
      </div>
    </div>

    <div class="w-full md:w-6/12"> 
      <div class="flex flex-wrap">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div class="relative flex flex-col">
            <div class="px-4 py-5 flex-auto">
              <div 
              :class="{ 'bg-gray-700': isDarkMode, 'bg-blue-100': !isDarkMode }"
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                <icon-svg  class="w-12 h-12 md:w-10 md:h-10" :name="'TAILWIND'"/>
              </div>
              <h6 class="text-xl mb-1 font-semibold">Tailwind</h6>
              <p class="mb-4 text-blueGray-500">
                utility-first CSS framework that simplifies web development by providing a wide range of pre-designed utility classes for efficient styling of HTML elements.
              </p>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <div 
              :class="{ 'bg-gray-700': isDarkMode, 'bg-blue-100': !isDarkMode }"
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                <icon-svg class="w-12 h-12 md:w-10 md:h-10" :name="'VUEJS'"/>
              </div>
              <h6 class="text-xl mb-1 font-semibold">
                VUE jS
              </h6>
              <p class="mb-4 text-blueGray-500">                
                Vue.js is a progressive JavaScript framework for building user interfaces that facilitates  approach to managing application state and components.
              </p>
            </div>
          </div>          
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <div 
              :class="{ 'bg-gray-700': isDarkMode, 'bg-blue-100': !isDarkMode }"
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                <icon-svg class="w-12 h-12 md:w-10 md:h-10" :name="'FIREBASE'"/>
              </div>
              <h6 class="text-xl mb-1 font-semibold">Firebase</h6>
              <p class="mb-4 text-blueGray-500">
                The website is deployed using Firebase, a platform that enabling seamless deployment and management of web applications.
              </p>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <div 
              :class="{ 'bg-gray-700': isDarkMode, 'bg-blue-100': !isDarkMode }"
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                <icon-svg class="w-12 h-12 md:w-10 md:h-10 text-rose-400" :name="'LOTTIE'"/>
              </div>
              <h6 class="text-xl mb-1 font-semibold">lottie</h6>
              <p class="mb-4 text-blueGray-500">
                utilizes Lottie files for animations, which are JSON-based files providing smooth and interactive animations across different platforms.
              </p>
            </div>
          </div>
          <div class="relative flex flex-col min-w-0">
            <div class="px-4 py-5 flex-auto">
              <a :href="'https://github.com/mirdakahunalaguna/mirda-portofolio'" target="_blank" >
                <div 
                :class="{ 'bg-gray-700': isDarkMode, 'bg-blue-100': !isDarkMode }"
                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                  <icon-svg class="w-12 h-12 md:w-10 md:h-10" :name="'GITHUB'"/>
                </div>
                <h6 class="text-xl mb-1 font-semibold">
                  GIT HUB
                </h6>
                <p class="mb-4 text-blueGray-500">                
                  visit to view the code
                </p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>  
</template>

<script setup> 
import { useDark } from "@vueuse/core";
import IconSvg from "@/elements/IconSvg.vue";

const isDarkMode = useDark();

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
const features = [
  { name: 'Backend', description: 'Laravel, node js/ express' },
  { name: 'Frontend', description: 'Vue js, React js, ' },
  { name: 'Database', description: 'Mysql, Postgree sql' },
  { name: 'Office', description: 'Ms Word, Ms Excel, power point' }, 
]
</script>
