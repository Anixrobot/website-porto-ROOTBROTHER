<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logoImg from '@/assets/logo-rootbrother.png'
import { navLinks } from '@/data/navigation.js'

const isOpen = ref(false)
const route = useRoute()

watch(
  () => route.path,
  () => {
    isOpen.value = false
  }
)
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-rb-dark/95 backdrop-blur-md border-b border-[rgba(78,222,163,0.1)]">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      
      <!-- LEFT - Logo area -->
      <router-link to="/" class="flex items-center gap-3">
        <img :src="logoImg" alt="Rootbrother Logo" class="w-8 h-8 rounded-full object-cover" />
        <div class="flex flex-col">
          <div class="flex items-center">
            <span class="text-white text-sm font-bold tracking-wide">ROOTBROTHER</span>
            <span class="inline-block w-1.5 h-1.5 bg-rb-emerald rounded-full ml-1"></span>
          </div>
          <span class="text-rb-emerald text-[10px] tracking-widest uppercase font-medium">DIGITAL SERVICE</span>
        </div>
      </router-link>

      <!-- CENTER - Nav links -->
      <div class="hidden lg:flex items-center gap-1">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="[
            'text-sm font-medium px-3 py-1.5 transition-colors rounded-full',
            route.path === link.path
              ? 'bg-rb-emerald text-white px-4'
              : 'text-rb-text-dark hover:text-white'
          ]"
        >
          {{ link.name }}
        </router-link>
      </div>

      <!-- RIGHT - CTA button -->
      <router-link to="/kontak" class="hidden lg:inline-flex border border-rb-emerald text-rb-emerald text-sm font-semibold px-5 py-2 rounded-full hover:bg-rb-emerald hover:text-white transition-all duration-300">
        Mulai Proyekmu
      </router-link>

      <!-- MOBILE - Hamburger toggle -->
      <button @click="isOpen = !isOpen" class="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5">
        <span class="w-5 h-0.5 bg-[#FFFFFF] block transition-all duration-300" :class="{ 'rotate-45 translate-y-2': isOpen }"></span>
        <span class="w-5 h-0.5 bg-[#FFFFFF] block transition-all duration-300" :class="{ 'opacity-0': isOpen }"></span>
        <span class="w-5 h-0.5 bg-[#FFFFFF] block transition-all duration-300" :class="{ '-rotate-45 -translate-y-2': isOpen }"></span>
      </button>

    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="lg:hidden absolute top-16 left-0 right-0 bg-rb-dark border-b border-[rgba(78,222,163,0.1)] flex flex-col py-4 shadow-xl">
      <router-link
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="block px-6 py-3 text-sm transition-colors"
        :class="[
          route.path === link.path ? 'text-rb-emerald font-semibold' : 'text-rb-text-dark'
        ]"
      >
        {{ link.name }}
      </router-link>
      <div class="px-6 py-4 mt-2 border-t border-[rgba(78,222,163,0.1)]">
        <router-link to="/kontak" class="inline-flex border border-rb-emerald text-rb-emerald text-sm font-semibold px-5 py-2 rounded-full hover:bg-rb-emerald hover:text-white transition-all duration-300">
          Mulai Proyekmu
        </router-link>
      </div>
    </div>
  </nav>
</template>
