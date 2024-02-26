<template>
  <div>
    <h1 class="text-2xl font-semibold m-4">Daftar Kurs Mata Uang Asing Hari Ini</h1>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-0 md:mb-16">
      <CardElement v-for="(rate, currency) in filteredCurrencyRates" 
        :key="currency" 
        :title="currency" 
        :flag="currency"
        :content="`${(1 / rate).toFixed(0)} IDR`"
        width="160" 
        height="130" />
    </div>
  </div>
</template>

<script setup>  
import CardElement from '@/elements/CardElement.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
 
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
