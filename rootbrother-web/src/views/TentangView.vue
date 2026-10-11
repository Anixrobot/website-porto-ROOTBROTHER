<script setup>
import ManifestoHero from '../components/sections/tentang/ManifestoHero.vue'
import FilosofiSection from '../components/sections/tentang/FilosofiSection.vue'
import DuaPilar from '../components/sections/tentang/DuaPilar.vue'
import NilaiInti from '../components/sections/tentang/NilaiInti.vue'
import MisiEnterprise from '../components/sections/tentang/MisiEnterprise.vue'
import TentangCta from '../components/sections/tentang/TentangCta.vue'
import OverlayBlur from '../components/ui/OverlayBlur.vue'
</script>
<template>
  <div class="relative bg-rb-dark min-h-screen text-white pt-20 overflow-hidden isolate">
    <!-- Ambient Overlays (Figma: Overlay+Blur layers) -->
    <!-- 1. Hero Overlay: Centered behind manifesto title -->
    <OverlayBlur class="top-[100px] md:top-[120px] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[360px]" opacity="opacity-30" blur="blur-[130px]" />
    
    <!-- 2. Dua Pilar & Filosofi Overlay (Left) -->
    <OverlayBlur class="top-[900px] -left-24 w-[650px] max-w-[85vw] h-[400px]" opacity="opacity-20" blur="blur-[140px]" />
    
    <!-- 3. Nilai Inti Overlay (Right) -->
    <OverlayBlur class="top-[1700px] -right-24 w-[650px] max-w-[85vw] h-[400px]" opacity="opacity-20" blur="blur-[140px]" />
    
    <!-- 4. Misi Enterprise Overlay (Left/Center) -->
    <OverlayBlur class="top-[2500px] left-1/3 -translate-x-1/2 w-[700px] max-w-[90vw] h-[360px]" opacity="opacity-20" blur="blur-[140px]" />
    
    <!-- 5. Tentang CTA Overlay (Bottom) -->
    <OverlayBlur class="bottom-[120px] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[360px]" opacity="opacity-25" blur="blur-[130px]" />

    <div class="relative z-10">
      <ManifestoHero />
      <FilosofiSection />
      <DuaPilar />
      <NilaiInti />
      <MisiEnterprise />
      <TentangCta />
    </div>
  </div>
</template>
