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
  <transition name="screen-fade" mode="out-in">
    <LoadingScreen v-if="isLoading" :progress="progress" key="loading-screen" />
    <div v-else key="main-app" class="min-h-screen flex flex-col bg-rb-dark">
      <Navbar />
      <main class="grow">
        <router-view v-slot="{ Component, route }">
          <transition name="page-fade" mode="out-in" appear>
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </main>
      <FooterSection />
    </div>
  </transition>
</template>

<style>
/* Transition between Loading Screen & Main Application */
.screen-fade-enter-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.screen-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
}
.screen-fade-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.screen-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
  filter: blur(4px);
}

/* Smooth Page-to-Page Route Navigation */
.page-fade-enter-active {
  transition: opacity 0.38s cubic-bezier(0.16, 1, 0.3, 1), transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-fade-leave-active {
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
