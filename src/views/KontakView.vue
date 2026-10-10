<script setup>
import KontakHero from '@/components/sections/kontak/KontakHero.vue';
import ContactChannels from '@/components/sections/kontak/ContactChannels.vue';
import TrustBadges from '@/components/sections/kontak/TrustBadges.vue';
import DocumentSubmission from '@/components/sections/kontak/DocumentSubmission.vue';
</script>

<template>
  <div class="bg-[#030B18] min-h-screen text-[#FFFFFF] font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col gap-16">
      <KontakHero />
      <ContactChannels />
      <TrustBadges />
      <DocumentSubmission />
    </div>
  </div>
</template>

<style scoped>
</style>
