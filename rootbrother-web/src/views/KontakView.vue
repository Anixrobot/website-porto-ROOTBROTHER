<script setup>
import KontakHero from '../components/sections/kontak/KontakHero.vue'
import ContactChannels from '../components/sections/kontak/ContactChannels.vue'
import TrustBadges from '../components/sections/kontak/TrustBadges.vue'
import DocumentSubmission from '../components/sections/kontak/DocumentSubmission.vue'
import OverlayBlur from '../components/ui/OverlayBlur.vue'
</script>
<template>
  <div class="relative bg-rb-dark min-h-screen text-white pt-20 flex flex-col overflow-hidden isolate">
    <!-- Ambient Overlays (Figma: Overlay+Blur layers) -->
    <!-- 1. Hero Overlay: Top-left / center -->
    <OverlayBlur class="top-[80px] md:top-[100px] left-1/4 -translate-x-1/2 w-[650px] max-w-[90vw] h-[360px]" opacity="opacity-30" blur="blur-[130px]" />
    
    <!-- 2. Channels & Map Overlay: Right -->
    <OverlayBlur class="top-[450px] -right-24 w-[650px] max-w-[85vw] h-[400px]" opacity="opacity-20" blur="blur-[140px]" />
    
    <!-- 3. Trust Badges & Document Submission Overlay: Bottom -->
    <OverlayBlur class="bottom-[60px] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[340px]" opacity="opacity-25" blur="blur-[130px]" />

    <div class="relative z-10 flex flex-col grow">
      <KontakHero />
      <ContactChannels />
      <TrustBadges />
      <div class="grow"></div>
      <DocumentSubmission />
    </div>
  </div>
</template>
\n
