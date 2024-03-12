<template>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
        <DialogPanel 
        :class="[isDarkMode ? 'bg-gradient-to-r from-slate-500 to-gray-600' : 'bg-gradient-to-r from-blue-100 to-teal-50']"
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto -mt-2" src="../assets/nunus1.png" alt="" /> 
            </a>
            <button @click="toggleDarkMode" class="flex items-center justify-center mr-2">
              <SunIcon v-if="!isDarkMode" class="h-7 w-7 text-yellow-600" />
              <MoonIcon v-else class="h-6 w-6 text-gray-300" />
            </button> 
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon 
              :class="{ 'text-teal-50': isDarkMode, 'text-gray-800': !isDarkMode }"
              class="h-7 w-7" aria-hidden="true" />
            </button>      
            
          </div>
          <div class="mt-6 flow-root popover">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div  
              :class="{ 'text-teal-50   ': isDarkMode, 'text-gray-800 ': !isDarkMode }"
              class="space-y-2 py-6">
                <router-link to="/"  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500" @click="mobileMenuOpen = false" >Home</router-link> 
                <router-link to="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500" @click="mobileMenuOpen = false" >About</router-link> 
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-500">
                    Services
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                     <div 
                     ref=""
                    v-for="item in services" :key="item.name" 
                      class="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6">
                    <div class="flex h-6 w-6 flex-none items-center justify-center rounded-lg group-hover:bg-white">
                      <component :is="item.icon" class="h-4 w-4   group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div class="flex-auto">
                      <router-link :to="item.route" class="block font-semibold " @click="mobileMenuOpen = false">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </router-link> 
                    </div>
                  </div>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7hover:bg-gray-500">
                    Product
                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                     <div 
                     ref=""
                    v-for="item in products" :key="item.name" 
                      class="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6">
                    <div class="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <component :is="item.icon" class="h-4 w-4  text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div class="flex-auto">
                      <router-link :to="item.route" class="block font-semibold " @click="mobileMenuOpen = false">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </router-link> 
                    </div>
                  </div>
                  </DisclosurePanel>
                </Disclosure>
                <router-link to="/currency-page"  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-500" @click="mobileMenuOpen = false" >Currency</router-link> 
                <div class="py-6">
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-500">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
    </Dialog>
</template> 
<script setup>
import { defineProps } from 'vue';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {  
  XMarkIcon, 
} from '@heroicons/vue/24/outline'
const mobileMenuOpen = ref(false)
// Terima prop dari komponen induk
const { products } = defineProps(['products']);
const { services } = defineProps(['services']);
</script>