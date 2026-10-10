<script setup>
const props = defineProps({ activeFilter: { type: String, default: 'all' } });
const emit = defineEmits(['update:filter']);
const filters = [
  { id: 'all', label: 'Semua Proyek' },
  { id: 'webapp', label: 'Web App' },
  { id: 'landing', label: 'Landing Page' },
  { id: 'fintech', label: 'FinTech' }
];
</script>
<template>
  <section class="w-full px-6 md:px-12 lg:px-24 2xl:px-32 pt-32 pb-16">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rb-dark-card border border-rb-dark-border text-rb-emerald text-sm mb-6">
        <span class="w-2 h-2 rounded-full bg-rb-emerald"></span>
        REKAM JEJAK REKAYASA DIGITAL
      </div>
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        Karya Teruji.<br/>
        <span class="text-transparent bg-clip-text bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE]">Solusi Nyata.</span>
      </h1>
      <p class="text-rb-text-dark text-lg mb-10">
        Menampilkan berbagai sistem dan platform yang telah kami bangun untuk mengatasi tantangan bisnis klien di berbagai industri.
      </p>
      
      <div class="flex gap-8 mb-12">
        <div><div class="text-xl font-bold text-white">99.98%</div><div class="text-xs text-rb-text-dark">SLA Tercapai</div></div>
        <div><div class="text-xl font-bold text-white">38+</div><div class="text-xs text-rb-text-dark">Modul Enterprise</div></div>
        <div><div class="text-xl font-bold text-white">100%</div><div class="text-xs text-rb-text-dark">Tingkat Kepuasan</div></div>
      </div>
    </div>
    
    <div class="flex flex-wrap gap-3 pt-8 border-t border-rb-dark-border">
      <button 
        v-for="filter in filters" :key="filter.id"
        @click="emit('update:filter', filter.id)"
        :class="['px-5 py-2 rounded-full text-sm font-medium transition-colors border', activeFilter === filter.id ? 'bg-rb-emerald/10 border-rb-emerald text-rb-emerald' : 'bg-rb-dark-card border-rb-dark-border text-rb-text-dark hover:text-white']"
      >
        {{ filter.label }}
      </button>
    </div>
  </section>
</template>


