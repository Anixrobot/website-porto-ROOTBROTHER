<script setup>
import HeroSection from '../components/sections/beranda/HeroSection.vue'
import MetricBar from '../components/sections/beranda/MetricBar.vue'
import ServiceTeaser from '../components/sections/beranda/ServiceTeaser.vue'
import CtaBanner from '../components/sections/beranda/CtaBanner.vue'
import OverlayBlur from '../components/ui/OverlayBlur.vue'
</script>

<template>
  <div class="relative bg-rb-dark overflow-hidden isolate">
    <!-- Ambient Overlays (Figma: Overlay+Blur layers) -->
    <!-- 1. Hero Overlay: W: 720, H: 360, centered behind title & logo -->
    <OverlayBlur class="top-[100px] md:top-[140px] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[360px]" opacity="opacity-30" blur="blur-[130px]" />
    
    <!-- 2. Layanan Unggulan / Service Teaser Overlay -->
    <OverlayBlur class="top-[880px] -left-24 w-[650px] max-w-[85vw] h-[380px]" opacity="opacity-20" blur="blur-[140px]" />
    
    <!-- 3. CTA Banner Overlay -->
    <OverlayBlur class="bottom-[120px] right-[-50px] md:right-[5%] w-[720px] max-w-[90vw] h-[360px]" opacity="opacity-25" blur="blur-[130px]" />

    <div class="relative z-10">
      <HeroSection />
      <MetricBar />
      <ServiceTeaser />
      <CtaBanner />
    </div>
  </div>
</template>


