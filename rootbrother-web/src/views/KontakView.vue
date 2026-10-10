<script setup>
import KontakHero from '../components/sections/kontak/KontakHero.vue'
import ContactChannels from '../components/sections/kontak/ContactChannels.vue'
import ProjectForm from '../components/sections/kontak/ProjectForm.vue'
import TrustBadges from '../components/sections/kontak/TrustBadges.vue'
</script>
<template>
  <div class="bg-white min-h-screen text-rb-text-light pb-20">
    <KontakHero />
    <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <ContactChannels />
      <ProjectForm />
    </div>
    <TrustBadges />
  </div>
</template>
