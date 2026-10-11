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
  <section class="py-6 sm:py-8 w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <div
        v-for="service in filteredServices"
        :key="service.id"
        class="bg-rb-dark-card border border-[rgba(78,222,163,0.1)] rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col"
      >
        <div class="flex items-start justify-between">
          <div class="w-10 h-10 sm:w-12 sm:h-12 border border-[rgba(78,222,163,0.15)] rounded-xl flex items-center justify-center text-rb-emerald text-base sm:text-lg">
            {{ service.icon }}
          </div>
          <span class="bg-rb-emerald/10 text-rb-emerald text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
            {{ service.category }}
          </span>
        </div>

        <h3 class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] font-bold text-base sm:text-lg mt-3 sm:mt-4">
          {{ service.title }}
        </h3>
        <p class="text-rb-text-dark text-xs sm:text-sm leading-relaxed mt-1.5 sm:mt-2">
          {{ service.desc }}
        </p>

        <div class="mt-4 flex flex-col gap-2 grow">
          <div v-for="(feature, index) in service.features" :key="index" class="flex items-start gap-2.5">
            <div class="w-4 h-4 rounded-full bg-[#4EDEA3]/20 flex items-center justify-center shrink-0 mt-0.5">
              <svg class="w-2.5 h-2.5 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="text-rb-text-dark text-xs sm:text-sm">{{ feature }}</span>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-[rgba(78,222,163,0.08)]">
          <router-link 
            :to="{ path: '/kontak', query: { service: service.title }, hash: '#brief' }" 
            class="text-rb-emerald text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all hover:text-white group"
          >
            <span>Konsultasikan Layanan</span>
            <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


