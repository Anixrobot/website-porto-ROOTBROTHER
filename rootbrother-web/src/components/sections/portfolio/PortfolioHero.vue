<script setup>
const props = defineProps({ activeFilter: { type: String, default: 'all' } });
const emit = defineEmits(['update:filter']);
const filters = [
  { id: 'all', label: 'Semua Proyek' },
  { id: 'web', label: 'Web & Aplikasi' },
  { id: 'cloud', label: 'Cloud & API' },
  { id: 'iot', label: 'IoT & Embedded' }
];
</script>
<template>
  <section class="w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32 pt-24 sm:pt-32 pb-8 sm:pb-16 flex flex-col items-center text-center">
    <div class="max-w-3xl flex flex-col items-center">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rb-dark-card border border-rb-dark-border text-rb-emerald text-[11px] sm:text-xs md:text-sm mb-4 sm:mb-6">
        <span class="w-2 h-2 rounded-full bg-rb-emerald"></span>
        REKAM JEJAK REKAYASA DIGITAL
      </div>
      <h1 class="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-6 leading-tight">
        Karya Teruji. <span class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE]">Solusi Nyata.</span>
      </h1>
      <p class="text-rb-text-dark text-xs sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
        Menampilkan berbagai sistem dan platform yang telah kami bangun untuk mengatasi tantangan bisnis klien di berbagai industri.
      </p>
    </div>
    
    <div class="flex flex-wrap justify-center gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-[rgba(78,222,163,0.1)] w-full max-w-3xl mx-auto">
      <button 
        v-for="filter in filters" :key="filter.id"
        @click="emit('update:filter', filter.id)"
        :class="['px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors border cursor-pointer', activeFilter === filter.id ? 'bg-rb-emerald/10 border-rb-emerald text-rb-emerald shadow-[0_0_15px_rgba(78,222,163,0.3)]' : 'bg-rb-dark-card border-rb-dark-border text-rb-text-dark hover:text-white']"
      >
        {{ filter.label }}
      </button>
    </div>
  </section>
</template>


