<script setup>
import { ref } from 'vue'
const openIdx = ref(0)
const faqs = [
  { q: 'Apakah saya harus membeli domain dan hosting sendiri?', a: 'Tidak wajib. Kami bisa bantu belikan domain atas nama Anda. Untuk hosting, kami pakai server modern (cloud) yang seringkali gratis untuk awal mula.' },
  { q: 'Berapa kali revisi yang diperbolehkan selama pengerjaan?', a: 'Biasanya kami berikan 2-3 kali revisi minor setelah tahap staging sebelum launch final.' },
  { q: 'Apakah website dijamin rapi saat dibuka di layar HP?', a: 'Pasti! Semua website yang kami buat sudah menerapkan prinsip mobile-first (responsive).' },
  { q: 'Bagaimana jika ada error atau kendala setelah website tayang?', a: 'Kami memberikan garansi maintenance perbaikan bug gratis selama waktu tertentu sesuai kesepakatan paket.' }
]
</script>
<template>
  <section class="max-w-3xl mx-auto px-6 py-20">
    <h2 class="text-2xl font-bold text-rb-heading-light text-center mb-10">Pertanyaan yang Sering Diajukan Klien</h2>
    <div class="space-y-4">
      <div 
        v-for="(faq, idx) in faqs" :key="idx"
        class="border border-rb-light-border rounded-xl overflow-hidden bg-white cursor-pointer transition-all"
        @click="openIdx = openIdx === idx ? -1 : idx"
      >
        <div class="px-6 py-4 flex justify-between items-center font-semibold text-rb-heading-light">
          {{ faq.q }}
          <span class="text-rb-emerald font-bold">{{ openIdx === idx ? '−' : '+' }}</span>
        </div>
        <div v-show="openIdx === idx" class="px-6 pb-4 text-sm text-rb-text-light border-t border-rb-light-surface pt-3">
          {{ faq.a }}
        </div>
      </div>
    </div>
  </section>
</template>


