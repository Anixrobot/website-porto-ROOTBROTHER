<script setup>
import ManifestoHero from '@/components/sections/tentang/ManifestoHero.vue';
import FilosofiSection from '@/components/sections/tentang/FilosofiSection.vue';
import DuaPilar from '@/components/sections/tentang/DuaPilar.vue';
import NilaiInti from '@/components/sections/tentang/NilaiInti.vue';
import MisiEnterprise from '@/components/sections/tentang/MisiEnterprise.vue';
import TentangCta from '@/components/sections/tentang/TentangCta.vue';
</script>

<template>
  <div class="bg-[#030B18] min-h-screen text-[#FFFFFF] font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col gap-24">
      <ManifestoHero />
      <FilosofiSection />
      <DuaPilar />
      <NilaiInti />
      <MisiEnterprise />
      <TentangCta />
    </div>
  </div>
</template>

<style scoped>
</style>
