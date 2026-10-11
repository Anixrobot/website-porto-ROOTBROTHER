<script setup>
import CaraKerjaHero from '../components/sections/cara-kerja/CaraKerjaHero.vue'
import WorkflowSteps from '../components/sections/cara-kerja/WorkflowSteps.vue'
import TransparansiBar from '../components/sections/cara-kerja/TransparansiBar.vue'
import BusinessFocus from '../components/sections/cara-kerja/BusinessFocus.vue'
import OverlayBlur from '../components/ui/OverlayBlur.vue'
</script>
<template>
  <div class="relative bg-rb-dark min-h-screen text-white pt-20 overflow-hidden isolate">
    <!-- Ambient Overlays (Figma: Overlay+Blur layers) -->
    <!-- 1. Hero Overlay: Centered behind title -->
    <OverlayBlur class="top-[100px] md:top-[120px] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[360px]" opacity="opacity-30" blur="blur-[130px]" />
    
    <!-- 2. Workflow Steps Overlay: Middle -->
    <OverlayBlur class="top-[650px] left-1/2 -translate-x-1/2 w-[750px] max-w-[90vw] h-[360px]" opacity="opacity-20" blur="blur-[140px]" />
    
    <!-- 3. Business Focus Overlay: Bottom -->
    <OverlayBlur class="bottom-[100px] -left-20 w-[650px] max-w-[85vw] h-[360px]" opacity="opacity-20" blur="blur-[130px]" />

    <div class="relative z-10">
      <CaraKerjaHero />
      <WorkflowSteps />
      <TransparansiBar />
      <BusinessFocus />
    </div>
  </div>
</template>
\n
