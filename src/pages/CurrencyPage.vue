<template>
  <div class=" bg-transparent animate-fade-in-down">
    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
      <h1 
        @toggleDarkMode="toggleDarkMode"
        :class="{ 'bg-gradient-to-b from-sky-300 to-sky-400 bg-clip-text text-transparent': isDarkMode, 'text-gray-800': !isDarkMode }"
        class="text-2xl font-semibold p-4 ">Currency Exchange Rates Today</h1>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-0 md:py-16 animate-fade-in-down">
          <card-double v-for="(rate, currency) in filteredCurrencyRates" 
            :key="currency" 
            :title="currency" 
            :flag="currency"
            :content="`${(1 / rate).toFixed(0)} IDR`"
            width="150" 
            height="130"/>
        </div>
    </div>    
  </div>
</template>

<script setup>  
import CardDouble from '@/elements/CardDouble.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useDark } from "@vueuse/core";

const isDarkMode = useDark();

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
 
const currencyRates = ref({});
const currenciesToShow = ['USD','SGD','AUD', 'JPY', 'CNY', 'SAR', 'EUR', 'GBP'];
const filteredCurrencyRates = ref({});
 
const fetchCurrencyRates = async () => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/IDR');
    currencyRates.value = response.data.rates;
    filterCurrencyRates();
  } catch (error) {
    console.error('Error fetching currency rates:', error);
  }
};

const filterCurrencyRates = () => {
  for (const currency of currenciesToShow) {
    if (currency in currencyRates.value) {
      filteredCurrencyRates.value[currency] = currencyRates.value[currency];
    }
  }
};

onMounted(fetchCurrencyRates);
</script>

<style>
/* Gaya CSS untuk halaman ini */
</style>
