<script setup>
import { computed } from 'vue'
import { services } from '@/data/services.js'

const props = defineProps({
  activeFilter: {
    type: String,
    default: 'all'
  }
})

const filteredServices = computed(() => {
  if (props.activeFilter === 'all') return services
  return services.filter(service => service.filterTag === props.activeFilter)
})
</script>

<template>
  <section class="py-8 w-full px-6 md:px-12 lg:px-24 2xl:px-32">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="service in filteredServices"
        :key="service.id"
        class="bg-rb-dark-card border border-[rgba(78,222,163,0.1)] rounded-2xl p-6 flex flex-col"
      >
        <div class="flex items-start justify-between">
          <div class="w-12 h-12 border border-[rgba(78,222,163,0.15)] rounded-xl flex items-center justify-center text-rb-emerald text-lg">
            {{ service.icon }}
          </div>
          <span class="bg-rb-emerald/10 text-rb-emerald text-[11px] font-semibold px-3 py-1 rounded-full">
            {{ service.category }}
          </span>
        </div>

        <h3 class="text-white font-bold text-base mt-4">
          {{ service.title }}
        </h3>
        <p class="text-rb-text-dark text-sm leading-relaxed mt-2">
          {{ service.desc }}
        </p>

        <div class="mt-4 flex flex-col gap-1.5 grow">
          <div v-for="(feature, index) in service.features" :key="index" class="flex items-start gap-2">
            <span class="text-rb-emerald text-xs mt-0.5">◎</span>
            <span class="text-rb-text-dark text-sm">{{ feature }}</span>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-[rgba(78,222,163,0.08)]">
          <a href="#" class="text-rb-emerald text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Konsultasikan Layanan &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


