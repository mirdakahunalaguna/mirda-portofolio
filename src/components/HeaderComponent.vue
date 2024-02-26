<template>
  <header class="bg-gradient-to-r from-blue-100 to-teal-50 z-50 sticky top-0">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5 flex items-center justify-center gap-2">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto -mt-2" src="../assets/nunus1.png" alt="" /> 
          <img class="h-10 w-auto hidden lg:block" src="../assets/mirda logo.png" alt="" /> 
          </a>
      </div>
      
      <div class="flex gap-40">
        <PopoverGroup class="hidden lg:flex lg:gap-x-12 ">
        <router-link to="/" class="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-700">Home</router-link> 
        <router-link to="/about" class="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-700">About</router-link> 

        <Popover class="relative">
          <PopoverButton class="flex items-center px-2 gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-700">
            Services
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400 hover:text-yellow-700" aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in services" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <router-link :to="item.route" class="block font-semibold text-gray-900" @click="closePopover">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </router-link>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div> 
            </PopoverPanel>
          </transition>
        </Popover>
        
        <Popover class="relative">
          <PopoverButton class="flex items-center px-2 gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-700">
            Product
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400 hover:text-yellow-700" aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5" @click="closePopover">
              <div class="p-4">
                <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <router-link :to="item.route" class="block font-semibold text-gray-900" @click="closePopover">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </router-link>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100" @click="closePopover">
                  <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
                
         <router-link to="/currency-page" class="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-700">Currency</router-link> 
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-teal-700">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>

      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Services
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in [...services, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                </DisclosurePanel>
              </Disclosure> 
            </div>
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Product
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in [...products, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                </DisclosurePanel>
              </Disclosure> 
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
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
  Bars3Icon,
  RectangleStackIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon, 
  XMarkIcon,
  ClockIcon,
  CalendarDaysIcon
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const products = [
  { name: 'Banknote Counters',route: '/banknote-counter', description: 'Banknote counters are electronic devices designed to accurately and efficiently count large quantities of banknotes.', icon: RectangleStackIcon },
  { name: 'Banknote Detection',route: '/banknote-detection', description: 'Banknote detection refers to the capability of identifying counterfeit or fraudulent banknotes within a batch of currency', icon: ShieldCheckIcon },
  { name: 'Banknote Sorting Machine',route: '/banknote-sorting', description: 'Banknote sorting machines are automated devices used to organize and arrange banknotes based on their denominations, conditions, or other specified criteria', icon: AdjustmentsHorizontalIcon},
]
const services = [
  { name: 'Preventive Maintenance',route: '/preventive-page', description: 'Ensure the longevity and optimal performance of your equipment with our professional preventive maintenance services tailored to your needs.', icon: CalendarDaysIcon},
  { name: 'Corrective Maintenance',route: '/corrective-page', description: '"Count on our efficient corrective maintenance solutions to swiftly address your equipment issues, ensuring minimal disruptions to your operations and maximum productivity.', icon: ClockIcon}, 
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const closePopover = () => {
  const popover = document.querySelector('.popover')
  popover && popover.click()
}
const mobileMenuOpen = ref(false)
</script>
