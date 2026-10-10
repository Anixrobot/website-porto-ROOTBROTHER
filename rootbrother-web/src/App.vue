<script setup>
import { ref, onMounted } from 'vue'
import LoadingScreen from './components/layout/LoadingScreen.vue'
import Navbar from './components/layout/Navbar.vue'
import FooterSection from './components/layout/FooterSection.vue'

const isLoading = ref(true)
const progress = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    progress.value += Math.random() * 15
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      setTimeout(() => {
        isLoading.value = false
      }, 500)
    }
  }, 200)
})
</script>

<template>
  <LoadingScreen v-if="isLoading" :progress="progress" />
  <div v-else class="min-h-screen flex flex-col bg-[#030B18]">
    <Navbar />
    <main class="grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterSection />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
