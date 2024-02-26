<template>
  <!-- component -->
<div class="py-16 bg-transparent">  
  <div class="container px-6 lg:px-0 m-auto text-gray-600 md:px-12 xl:px-6">
    <h1 class="text-lg leading-relaxed text-gray-700 -mt-10 font-normal   mx-auto px-6 lg:px-0">
      Preventive maintenance (PM) is a proactive strategy to maintain your equipment and assets. It focuses on preventing equipment breakdown and failure before it occurs, minimizing downtime and unexpected costs. Benefits of PM include: increased uptime and reliability, reduced maintenance costs, improved safety, enhanced efficiency, and extended asset life. By implementing PM, you can ensure the smooth and efficient operation of your equipment, ultimately saving you time, money, and resources while promoting safety and sustainability.
    </h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 ">         
        <div class="mx-auto max-w-xl lg:text-center ">
          <!-- Tambahkan komponen LottieAnimation di sini --> 
          <LottiePreventive class="hidden lg:block -mt-16 lg-1/3"/>          
        </div>
        <div class=" py-8 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold text-gray-800 mb-8">Types of Preventive Maintenance:</h2>
            <ul class="grid gap-3">
              <li v-for="(item, index) in preventiveMaintenance" :key="index" class="bg-conic-to-l from-stone-50 via-teal-100 to-green-100 rounded-lg shadow-md p-4">
                <h3 class="text-lg font-semibold text-indigo-500 mb-4">{{ item.title }}</h3>
                <p class="text-gray-700">{{ item.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>      
  </div> 
  <div class="py-8 bg-transparent">
    <div class="container px-6 lg:px-0 m-auto text-gray-600 md:px-12 xl:px-6">
      <div class="w-full  py-8 px-4">
        <h2 class="text-4xl font-semibold text-gray-800 mb-12">Preventive Maintenance Solutions</h2> 
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <card-element v-for="(card, index) in cards" :key ="index" :title="card.title" :content="card.content" />
        </div>
      </div>
    </div>
  </div> 
</div>
</template>
<script setup>
import LottiePreventive from '@/components/LottiePreventive.vue'; // Impor komponen LottieAnimation
import CardElement from '@/elements/CardElement.vue';

const cards = [
  {
    title: 'Planned PM programs',
    content: 'We design PM programs that suit your equipment type and needs.'
  },
  {
    title: 'Condition monitoring',
    content: 'We use advanced technology to monitor your equipment\'s condition and predict potential failures.'
  },
  {
    title: 'Repair and refurbishment',
    content: 'We provide repair and refurbishment services for your damaged equipment.'
  },
  {
    title: 'Spare parts procurement',
    content: 'We supply genuine and high-quality spare parts for your equipment.'
  }
];

const preventiveMaintenance = [
  { title: 'Time-based PM', description: 'Performed based on a predetermined time interval, such as hourly, daily, or weekly.' },
  { title: 'Condition-based PM', description: 'Performed based on the equipment\'s condition, monitored through sensors or visual inspection.' },
  { title: 'Predictive maintenance', description: 'Predicts equipment failure probability using data and analysis.' }
];

</script>