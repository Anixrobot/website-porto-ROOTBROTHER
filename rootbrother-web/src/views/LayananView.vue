<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LayananHero from '../components/sections/layanan/LayananHero.vue'
import LayananGrid from '../components/sections/layanan/LayananGrid.vue'
import AlurRekayasa from '../components/sections/layanan/AlurRekayasa.vue'
import PaketPricing from '../components/sections/layanan/PaketPricing.vue'
import PerbandinganPaket from '../components/sections/layanan/PerbandinganPaket.vue'
import LayananCta from '../components/sections/layanan/LayananCta.vue'
import OverlayBlur from '../components/ui/OverlayBlur.vue'

const route = useRoute()
const activeFilter = ref(route.query.filter || 'all')

watch(() => route.query.filter, (newFilter) => {
  if (newFilter) activeFilter.value = newFilter
})
</script>

<template>
  <div class="relative bg-rb-dark overflow-hidden isolate">
    <!-- Ambient Overlays (Figma: Overlay+Blur layers) -->
    <!-- 1. Hero Overlay: W: 720, H: 360, centered behind title -->
    <OverlayBlur class="top-[100px] md:top-[120px] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[360px]" opacity="opacity-30" blur="blur-[130px]" />
    
    <!-- 2. Service Grid Overlay (Left) -->
    <OverlayBlur class="top-[750px] -left-24 w-[650px] max-w-[85vw] h-[400px]" opacity="opacity-20" blur="blur-[140px]" />
    
    <!-- 3. Alur Rekayasa Overlay (Right) -->
    <OverlayBlur class="top-[1400px] -right-24 w-[650px] max-w-[85vw] h-[380px]" opacity="opacity-20" blur="blur-[140px]" />
    
    <!-- 4. Pricing Overlay (Center / Left) -->
    <OverlayBlur class="top-[2100px] left-1/4 -translate-x-1/2 w-[700px] max-w-[90vw] h-[420px]" opacity="opacity-25" blur="blur-[140px]" />

    <!-- 5. Perbandingan Overlay (Right) -->
    <OverlayBlur class="top-[2800px] -right-20 w-[650px] max-w-[85vw] h-[380px]" opacity="opacity-20" blur="blur-[130px]" />

    <!-- 6. Layanan CTA Overlay (Bottom) -->
    <OverlayBlur class="bottom-[100px] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[340px]" opacity="opacity-25" blur="blur-[130px]" />

    <div class="relative z-10">
      <LayananHero :activeFilter="activeFilter" @update:filter="activeFilter = $event" />
      <LayananGrid :activeFilter="activeFilter" />
      <AlurRekayasa />
      <PaketPricing />
      <PerbandinganPaket />
      <LayananCta />
    </div>
  </div>
</template>


