<script setup>
import { ref } from 'vue'
import LayananHero from '../components/sections/layanan/LayananHero.vue'
import LayananGrid from '../components/sections/layanan/LayananGrid.vue'
import AlurRekayasa from '../components/sections/layanan/AlurRekayasa.vue'
import LayananCta from '../components/sections/layanan/LayananCta.vue'

const activeFilter = ref('all')
</script>

<template>
  <div class="bg-rb-dark">
    <LayananHero :activeFilter="activeFilter" @update:filter="activeFilter = $event" />
    <LayananGrid :activeFilter="activeFilter" />
    <AlurRekayasa />
    <LayananCta />
  </div>
</template>

