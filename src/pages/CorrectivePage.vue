<template>
  <!-- component -->
<div class="py-16 bg-transparent">  
  <div class="container px-6 lg:px-0 m-auto text-gray-600 md:px-12 xl:px-6">
    <h1 class="text-lg leading-relaxed text-gray-700 -mt-10 font-normal   mx-auto px-6 lg:px-0">
      Corrective maintenance (CM) is a pivotal aspect of ensuring the smooth operation and longevity of any system or machinery. By promptly addressing issues as they arise, corrective maintenance not only minimizes downtime but also mitigates the risk of more severe malfunctions that could lead to costly repairs or even system failures. This proactive approach to maintenance underscores the commitment to efficiency and reliability, as it allows for the swift identification and resolution of problems, thus preventing them from escalating into larger issues. Additionally, corrective maintenance fosters a culture of accountability and responsiveness within an organization, demonstrating a dedication to maintaining optimal performance standards. Through timely interventions and meticulous attention to detail, corrective maintenance serves as a cornerstone in upholding operational integrity and enhancing overall productivity.
    </h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 ">         
        <div class="mx-auto max-w-xl lg:text-center ">
          <!-- Tambahkan komponen LottieAnimation di sini --> 
          <LottieCorrective class="hidden lg:block lg-1/3"/>          
        </div>
        <div class=" py-8 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-semibold text-gray-800 mb-8">Types of Corrective Maintenance:</h2>
            <ul class="grid gap-3">
              <li v-for="(item, index) in correctiveMaintenance" :key="index" class="bg-conic-to-l from-stone-50 via-teal-100 to-green-100 rounded-lg shadow-md p-4">
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
        <h2 class="text-4xl font-semibold text-gray-800 mb-12">Corrective Maintenance Solutions</h2> 
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <card-element v-for="(card, index) in cardSolutions" :key ="index" :title="card.title" :content="card.content" width="420" height="200"/>
        </div>
      </div>
    </div>
  </div> 
</div>
</template>
<script setup>
import LottieCorrective from '@/components/LottieCorrective.vue'; // Impor komponen LottieAnimation
import CardElement from '@/elements/CardElement.vue';

const cardSolutions = [
  {
    title: 'Experience and Expertise',
    content: ' my team possesses extensive experience and expertise in handling various corrective maintenance issues. You can trust us to effectively diagnose and resolve any problems that arise.'
  },
  {
    title: 'Responsiveness and Timeliness',
    content: 'We understand the urgency of addressing maintenance issues promptly. Our team is committed to responding swiftly to urgent failures, ensuring minimal disruption to your operations.'
  },
  {
    title: 'Reporting and Transparency',
    content: 'We maintain complete transparency in our corrective maintenance process. You will receive detailed reports on the issues identified, the actions taken, and the solutions implemented, keeping you informed every step of the way.'
  },
  {
    title: 'References and Performance Proof:',
    content: 'Many of our satisfied clients can attest to the reliability and quality of our corrective maintenance services. We would be happy to provide references and testimonials to demonstrate our track record of success.'
  }
];

const correctiveMaintenance = [
  { title: 'Emergency Maintenance', description: 'Emergency maintenance quickly restores functionality for urgent failures, often bypassing regular procedures to prevent severe disruptions or safety hazards.' },
  { title: 'Deferred Maintenance', description: 'Deferred maintenance involves postponing repairs for non-immediate issues, allowing continued operation until resources or downtime are available.' },
  { title: 'Reactive Maintenance', description: 'Reactive maintenance addresses issues after they occur due to limited resources or expertise for preventive measures, despite its inefficiency.' }
];

</script>