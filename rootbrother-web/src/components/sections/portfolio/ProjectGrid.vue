<script setup>
import { computed } from 'vue';
const props = defineProps({ activeFilter: { type: String, default: 'all' } });
const projects = [
  { id: 1, tag: 'webapp', title: 'HRIS Dashboard System', year: '2023', desc: 'Sistem manajemen HR komprehensif dengan real-time attendance dan payroll otomatis.', stack: ['Vue 3', 'Node.js', 'PostgreSQL'], metric: '+40% Efisiensi HR' },
  { id: 2, tag: 'fintech', title: 'PayGate Payment Gateway', year: '2024', desc: 'Integrasi sistem pembayaran dengan keamanan tingkat tinggi dan latensi rendah.', stack: ['Next.js', 'Go', 'Redis'], metric: '10k+ TRX/Hari' },

const filteredProjects = computed(() => props.activeFilter === 'all' ? projects : projects.filter(p => p.tag === props.activeFilter));
</script>
<template>
  <section class="w-full px-6 md:px-12 lg:px-24 2xl:px-32 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="project in filteredProjects" :key="project.id" class="group bg-rb-dark-card border border-rb-dark-border rounded-2xl overflow-hidden flex flex-col hover:border-rb-emerald transition-colors">
        <div class="h-48 bg-rb-dark-surface p-4 flex items-start justify-end relative">
          <div class="absolute inset-0 bg-linear-to-br from-rb-dark-surface to-rb-dark opacity-50"></div>
          <span class="relative z-10 text-xs px-2.5 py-1 rounded-full bg-black/40 text-white border border-rb-dark-border backdrop-blur-sm">
            {{ project.year }}
          </span>
        </div>
        <div class="p-6 flex flex-col grow">
          <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
          <p class="text-rb-text-dark text-sm mb-6 grow">{{ project.desc }}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="tech in project.stack" :key="tech" class="text-xs px-2 py-1 rounded bg-rb-dark-surface text-rb-text-dark border border-rb-dark-border">
              {{ tech }}
            </span>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-rb-dark-border">
            <div class="flex items-center gap-2 text-sm text-white font-medium">
              <span class="w-2 h-2 rounded-full bg-rb-emerald"></span> {{ project.metric }}
            </div>
            <a href="#" class="text-sm text-rb-emerald hover:text-white transition-colors">Lihat Detail &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



