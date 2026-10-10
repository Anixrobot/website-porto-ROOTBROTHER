<script setup>
import CaraKerjaHero from '@/components/sections/cara-kerja/CaraKerjaHero.vue';
import WorkflowSteps from '@/components/sections/cara-kerja/WorkflowSteps.vue';
import TransparansiBar from '@/components/sections/cara-kerja/TransparansiBar.vue';
import BusinessFocus from '@/components/sections/cara-kerja/BusinessFocus.vue';
</script>

<template>
  <div class="bg-[#030B18] min-h-screen text-[#FFFFFF] font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col gap-16">
      <CaraKerjaHero />
      <WorkflowSteps />
      <TransparansiBar />
      <BusinessFocus />
    </div>
  </div>
</template>

<style scoped>
</style>
