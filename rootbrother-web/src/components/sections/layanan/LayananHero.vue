<script setup>
const props = defineProps({
  activeFilter: {
    type: String,
    default: 'all'
  }
})

const emit = defineEmits(['update:filter'])

const filters = [
  { value: 'all', label: 'Semua Layanan' },
  { value: 'web', label: 'Web & App' },
  { value: 'cloud', label: 'Cloud & API' },
  { value: 'optimasi', label: 'Optimasi' }
]
</script>

<template>
  <section class="pt-28 pb-12 text-center max-w-4xl mx-auto px-6">
    <div class="inline-flex items-center gap-2 bg-[#4EDEA3]/10 border border-[#4EDEA3]/20 text-[#4EDEA3] text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full">
      ● ROOTBROTHER DIGITAL SERVICE
    </div>

    <h1 class="mt-6 text-[#FFFFFF] text-4xl md:text-5xl font-bold">
      Layanan <span class="text-[#4EDEA3]">Rekayasa Digital</span>
    </h1>

    <p class="mt-4 text-[#BBCABF] text-base leading-relaxed max-w-2xl mx-auto">
      Solusi arsitektur web terintegrasi dan berkinerja tinggi untuk menopang pertumbuhan bisnis Anda dengan fondasi kode yang tangguh, modular, dan terukur.
    </p>

    <div class="mt-10 flex flex-wrap justify-center gap-8 md:gap-16">
      <div class="text-center">
        <div class="text-[#4EDEA3] text-2xl md:text-3xl font-bold">99.98%</div>
        <div class="text-[#BBCABF] text-xs mt-1 font-medium">Stabilitas Runtime</div>
      </div>
      <div class="text-center">
        <div class="text-[#4EDEA3] text-2xl md:text-3xl font-bold">&lt; 0.8s</div>
        <div class="text-[#BBCABF] text-xs mt-1 font-medium">Waktu Muat Rata-rata</div>
      </div>
      <div class="text-center">
        <div class="text-[#4EDEA3] text-2xl md:text-3xl font-bold">60+</div>
        <div class="text-[#BBCABF] text-xs mt-1 font-medium">Sistem Dirilis</div>
      </div>
      <div class="text-center">
        <div class="text-[#4EDEA3] text-2xl md:text-3xl font-bold">100%</div>
        <div class="text-[#BBCABF] text-xs mt-1 font-medium">Standardisasi Clean Code</div>
      </div>
    </div>

    <div class="mt-8 flex flex-wrap justify-center gap-2">
      <button
        v-for="filter in filters"
        :key="filter.value"
        @click="emit('update:filter', filter.value)"
        :class="[
          'text-sm font-medium px-5 py-2 rounded-full transition-all',
          activeFilter === filter.value
            ? 'bg-[#4EDEA3] text-white'
            : 'bg-transparent text-[#BBCABF] border border-[rgba(78,222,163,0.15)] hover:text-[#FFFFFF] hover:border-[rgba(78,222,163,0.3)]'
        ]"
      >
        {{ filter.label }}
      </button>
    </div>
  </section>
</template>
