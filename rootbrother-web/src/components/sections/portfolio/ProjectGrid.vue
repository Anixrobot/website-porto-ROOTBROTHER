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
  <section class="w-full px-6 md:px-12 lg:px-24 2xl:px-32 py-12">
    <div 
      :class="[
        'grid gap-8',
        filteredProjects.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : 'grid-cols-1 md:grid-cols-2'
      ]"
    >
      <div 
        v-for="project in filteredProjects" 
        :key="project.id" 
        class="group bg-[#0E1B32] border border-[#1E293B] rounded-2xl overflow-hidden flex flex-col hover:border-[#4EDEA3]/50 transition-all duration-300"
      >
        <!-- Image Container -->
        <div class="h-[260px] bg-[#1D2A41] relative overflow-hidden flex items-center justify-center">
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
          <div class="absolute top-4 left-4 flex gap-2 z-10">
            <span 
              v-for="tag in project.tags.slice(0, 2)" 
              :key="tag" 
              class="bg-[#1D2A41]/80 backdrop-blur-md text-[#94A3B8] border border-[#1E293B] text-[10px] font-medium px-2 py-1 rounded-md"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-6 flex flex-col grow relative z-20 -mt-2">
          
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-xl font-bold text-white leading-snug pr-4">
              {{ project.title.split(' - ')[0] }}
            </h3>
            <span class="text-[#94A3B8] text-[10px] font-mono shrink-0 pt-1">
              {{ project.metric?.value || project.year }}
            </span>
          </div>
          
          <p class="text-[#94A3B8] text-[14px] leading-relaxed mb-6 grow">
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
            <a :href="project.link" class="text-[13px] text-[#4EDEA3] font-medium hover:text-white transition-colors flex items-center gap-1">
              Lihat Kasus & Pratinjau &rarr;
            </a>
            <div class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#4EDEA3] shadow-[0_0_5px_#4EDEA3]"></span>
              <span class="text-[11px] text-[#94A3B8]">{{ project.status || 'Live Deployed' }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>



