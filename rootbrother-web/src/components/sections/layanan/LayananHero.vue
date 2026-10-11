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
  { value: 'web', label: 'Web &amp; App' },
  { value: 'cloud', label: 'Cloud &amp; API' },
  { value: 'optimasi', label: 'Optimasi' }
]
</script>

<template>
  <section class="pt-28 pb-12 text-center w-full px-6 md:px-12 lg:px-24 2xl:px-32">
    <div class="max-w-4xl mx-auto">
      <div class="inline-flex items-center gap-2 bg-rb-emerald/10 border border-rb-emerald/20 text-rb-emerald text-xs tracking-widest uppercase font-semibold px-4 py-1.5 rounded-full">
      ● ROOTBROTHER DIGITAL SERVICE
    </div>

    <h1 class="mt-6 text-white text-4xl md:text-5xl font-bold">
      Layanan <span class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE]">Rekayasa Digital</span>
    </h1>

    <p class="mt-4 text-rb-text-dark text-base leading-relaxed max-w-2xl mx-auto">
      Solusi arsitektur web terintegrasi dan berkinerja tinggi untuk menopang pertumbuhan bisnis Anda dengan fondasi kode yang tangguh, modular, dan terukur.
    </p>

    <div class="mt-8 flex flex-wrap justify-center gap-2">
      <button
        v-for="filter in filters"
        :key="filter.value"
        @click="emit('update:filter', filter.value)"
        :class="[
          'text-sm font-medium px-5 py-2 rounded-full transition-all',
          activeFilter === filter.value
            ? 'bg-rb-emerald text-white'
            : 'bg-transparent text-rb-text-dark border border-[rgba(78,222,163,0.15)] hover:text-white hover:border-[rgba(78,222,163,0.3)]'
        ]"
      >
        {{ filter.label }}
      </button>
    </div>
    </div>
  </section>
</template>


