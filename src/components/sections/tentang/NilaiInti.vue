<script setup>
const values = [
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Ketangguhan', desc: 'Sistem yang tidak mudah tumbang dan dirancang untuk bertahan.' },
  { icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', title: 'Pertumbuhan', desc: 'Desain yang mampu mengimbangi skala pertumbuhan bisnis Anda.' },
  { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', title: 'Kemitraan', desc: 'Relasi profesional berbasis transparansi dan rasa saling percaya.' },
  { icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5', title: 'Presisi', desc: 'Perhatian penuh pada detail, mulai dari baris kode hingga UI.' }
];
</script>

<template>
  <section>
    <h2 class="text-3xl font-bold text-[#FFFFFF] text-center mb-12">Nilai Inti Rootbrother</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(val, i) in values" :key="i" class="bg-[#030B18] border border-[#1E293B] rounded-xl p-6 text-center hover:bg-[#0E1B32] transition-colors">
        <svg class="w-10 h-10 text-[#4EDEA3] mx-auto mb-4 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="val.icon"></path>
        </svg>
        <h4 class="text-lg font-bold text-[#FFFFFF] mb-2">{{ val.title }}</h4>
        <p class="text-[#94A3B8] text-sm">{{ val.desc }}</p>
      </div>
    </div>
  </section>
</template>
