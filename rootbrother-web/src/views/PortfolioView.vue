<script setup>
import PortfolioHero from '../components/sections/portfolio/PortfolioHero.vue'
import ProjectGrid from '../components/sections/portfolio/ProjectGrid.vue'
import TestimoniSection from '../components/sections/portfolio/TestimoniSection.vue'
import PortfolioCta from '../components/sections/portfolio/PortfolioCta.vue'
import OverlayBlur from '../components/ui/OverlayBlur.vue'
import { ref } from 'vue'

const activeFilter = ref('all')
const updateFilter = (filter) => {
  activeFilter.value = filter
}
</script>
<template>
  <div class="relative bg-rb-dark min-h-screen text-rb-text-dark overflow-hidden isolate">
    <!-- Ambient Overlays (Figma: Overlay+Blur layers) -->
    <!-- 1. Hero Overlay: W: 720, H: 360, centered behind title -->
    <OverlayBlur class="top-[100px] md:top-[120px] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[360px]" opacity="opacity-30" blur="blur-[130px]" />
    
    <!-- 2. Projects Grid Overlay (Right) -->
    <OverlayBlur class="top-[750px] -right-24 w-[650px] max-w-[85vw] h-[400px]" opacity="opacity-20" blur="blur-[140px]" />
    
    <!-- 3. Testimoni Overlay (Left) -->
    <OverlayBlur class="top-[1450px] -left-24 w-[600px] max-w-[85vw] h-[380px]" opacity="opacity-20" blur="blur-[140px]" />
    
    <!-- 4. Portfolio CTA Overlay (Bottom) -->
    <OverlayBlur class="bottom-[100px] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[340px]" opacity="opacity-25" blur="blur-[130px]" />

    <div class="relative z-10">
      <PortfolioHero :activeFilter="activeFilter" @update:filter="updateFilter" />
      <ProjectGrid :activeFilter="activeFilter" />
      <TestimoniSection />
      <PortfolioCta />
    </div>
  </div>
</template>


