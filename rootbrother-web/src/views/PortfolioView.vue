<script setup>
import PortfolioHero from '../components/sections/portfolio/PortfolioHero.vue'
import ProjectGrid from '../components/sections/portfolio/ProjectGrid.vue'
import TestimoniSection from '../components/sections/portfolio/TestimoniSection.vue'
import PortfolioCta from '../components/sections/portfolio/PortfolioCta.vue'
import { ref } from 'vue'

const activeFilter = ref('all')
const updateFilter = (filter) => {
  activeFilter.value = filter
}
</script>
<template>
  <div class="bg-rb-dark min-h-screen text-rb-text-dark">
    <PortfolioHero :activeFilter="activeFilter" @update:filter="updateFilter" />
    <ProjectGrid :activeFilter="activeFilter" />
    <TestimoniSection />
    <PortfolioCta />
  </div>
</template>

