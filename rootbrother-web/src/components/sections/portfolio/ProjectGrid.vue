<script setup>
import { computed } from 'vue';
import { projects } from '@/data/projects.js';

const props = defineProps({ activeFilter: { type: String, default: 'all' } });

const filteredProjects = computed(() => {
  if (props.activeFilter === 'all') return projects;
  return projects.filter(p => p.category === props.activeFilter);
});
</script>

<template>
  <section class="w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32 py-8 sm:py-12">
    <div 
      :class="[
        'grid gap-6 sm:gap-8',
        filteredProjects.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : 'grid-cols-1 md:grid-cols-2'
      ]"
    >
      <div 
        v-for="project in filteredProjects" 
        :key="project.id" 
        class="group bg-[#0E1B32] border border-[#1E293B] rounded-2xl overflow-hidden flex flex-col hover:border-[#4EDEA3]/50 transition-all duration-300"
      >
        <!-- Image Container -->
        <div class="h-[180px] sm:h-[220px] md:h-[260px] bg-[#1D2A41] relative overflow-hidden flex items-center justify-center">
          <img 
            v-if="project.image" 
            :src="project.image" 
            :alt="project.title" 
            class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500" 
          />
          <div v-else class="absolute inset-0 bg-gradient-to-br from-[#1D2A41] to-[#030B18] opacity-50 flex items-center justify-center">
            <span class="text-[#94A3B8] text-sm italic">[Placeholder Image]</span>
          </div>
          
          <div class="absolute inset-0 bg-gradient-to-t from-[#0E1B32] via-transparent to-transparent opacity-80"></div>

          <!-- Top Left Tags -->
          <div class="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-1.5 sm:gap-2 z-10">
            <span 
              v-for="tag in project.tags.slice(0, 2)" 
              :key="tag" 
              class="bg-[#1D2A41]/80 backdrop-blur-md text-[#94A3B8] border border-[#1E293B] text-[9px] sm:text-[10px] font-medium px-2 py-0.5 sm:py-1 rounded-md"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-4 sm:p-6 flex flex-col grow relative z-20 -mt-2">
          
          <div class="flex justify-between items-start mb-2 sm:mb-3">
            <h3 class="text-base sm:text-xl font-bold text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] leading-snug pr-3 sm:pr-4">
              {{ project.title.split(' - ')[0] }}
            </h3>
            <span class="text-[#94A3B8] text-[9px] sm:text-[10px] font-mono shrink-0 pt-0.5 sm:pt-1">
              {{ project.metric?.value || project.year }}
            </span>
          </div>
          
          <p class="text-[#94A3B8] text-xs sm:text-[14px] leading-relaxed mb-4 sm:mb-6 grow">
            {{ project.description }}
          </p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span 
              v-for="tech in project.tech" 
              :key="tech" 
              class="text-[11px] px-2 py-1 rounded bg-[#1D2A41]/50 text-[#94A3B8] border border-[#1E293B]"
            >
              {{ tech }}
            </span>
          </div>
          
          <div class="flex items-center justify-between pt-4 border-t border-[#1E293B]">
            <a 
              :href="project.link" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-[13px] text-[#4EDEA3] font-medium hover:text-white transition-colors flex items-center gap-1 group/link"
            >
              <span>Lihat Kasus & Pratinjau</span>
              <span class="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <div class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#4EDEA3] shadow-[0_0_5px_#4EDEA3]"></span>
              <span class="text-[11px] text-[#94A3B8]">{{ project.status || 'Live Deployed' }}</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Empty State for categories without projects yet -->
      <div v-if="filteredProjects.length === 0" class="col-span-full py-16 px-6 text-center bg-[#0E1B32] border border-[#1E293B] rounded-2xl">
        <div class="w-14 h-14 rounded-full bg-[#1D2A41] text-rb-emerald flex items-center justify-center mx-auto mb-4 text-2xl">
          🚀
        </div>
        <h3 class="text-xl font-bold text-white mb-2">Proyek Kategori Ini Sedang Dalam Pengembangan</h3>
        <p class="text-rb-text-dark text-sm max-w-md mx-auto mb-6">
          Ingin menjadi partner pertama kami untuk kebutuhan sistem kategori ini? Konsultasikan ide Anda bersama tim insinyur kami.
        </p>
        <div class="flex justify-center gap-4 flex-wrap">
          <router-link to="/kontak" class="bg-rb-emerald hover:bg-rb-emerald-hover text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all">
            Konsultasikan Kebutuhan Anda &rarr;
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>



