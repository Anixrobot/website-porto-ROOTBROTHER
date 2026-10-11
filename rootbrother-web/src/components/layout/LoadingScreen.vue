<script setup>
import { defineProps } from 'vue'
import logoImg from '@/assets/logo-rootbrother.png'
import OverlayBlur from '@/components/ui/OverlayBlur.vue'

const props = defineProps({
  progress: {
    type: Number,
    required: true,
    default: 0
  }
})
</script>

<template>
  <div class="min-h-screen bg-rb-dark relative overflow-hidden isolate flex flex-col justify-between">
    <!-- Ambient Overlays (Figma Overlay+Blur) -->
    <OverlayBlur class="-top-24 -left-20 w-[600px] md:w-[750px] h-[380px]" opacity="opacity-25" blur="blur-[120px]" />
    <OverlayBlur class="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[600px] h-[480px] md:h-[600px]" opacity="opacity-30" blur="blur-[100px]" />
    <OverlayBlur class="top-10 -right-24 w-[480px] h-[340px]" opacity="opacity-20" blur="blur-[120px]" />

    <!-- Top bar -->
    <div class="w-full px-6 py-3 flex justify-between items-center z-10">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-rb-emerald rounded-full inline-block shadow-[0_0_8px_rgba(78,222,163,0.8)]"></span>
        <span class="text-rb-text-dark font-mono text-xs tracking-widest uppercase">CORE ARCHITECTURE: <span class="text-rb-emerald">INITIALIZING</span></span>
      </div>
      <div class="text-rb-text-dark font-mono text-xs">
        Assets Loading ■■
      </div>
    </div>

    <!-- Center area -->
    <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
      <img :src="logoImg" alt="Rootbrother Logo" class="w-32 h-32 rounded-full ring-2 ring-[#4EDEA3]/30 shadow-[0_0_60px_rgba(78,222,163,0.25)] object-cover" />
      
      <div class="mt-6 bg-rb-emerald/10 text-rb-emerald text-xs font-semibold px-4 py-1 rounded-full border border-rb-emerald/20">
        ● SOLID DIGITAL PRESISI
      </div>
      
      <h2 class="text-white text-3xl md:text-4xl font-extrabold tracking-tight uppercase mt-5">
        WELCOME TO
      </h2>
      
      <h1 class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] text-4xl md:text-5xl font-black tracking-tight uppercase">
        ROOTBROTHER
      </h1>
      
      <p class="text-rb-text-dark text-sm tracking-[0.35em] uppercase mt-1">
        D I G I T A L &nbsp; S E R V I C E
      </p>
      
      <div class="w-72 mt-8">
        <div class="flex justify-between items-center mb-2">
          <span class="text-rb-emerald text-xs font-mono">♦ Status: Siap!</span>
          <span class="text-rb-emerald text-xs font-mono font-bold">{{ Math.round(progress) }}%</span>
        </div>
        <div class="h-1 bg-rb-dark-card rounded-full overflow-hidden w-full">
          <div class="h-full bg-rb-emerald transition-all duration-300" :style="{ width: `${progress}%` }"></div>
        </div>
        <p class="text-rb-text-dark text-[10px] font-mono mt-2 text-center">
          ● Simulasi sistem ini memiliki waktu selesai tergantung 100%
        </p>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="absolute bottom-0 w-full px-6 py-4 flex justify-between items-center z-10">
      <div class="text-rb-text-dark text-[11px] font-mono">
        ● "Bertumbuh & Merambat Kuat Bersama Solusi Digital Masa Depan."
      </div>
      <div class="text-rb-text-dark text-[11px] font-mono">
        v2.4 Auto-Transition Enabled
      </div>
    </div>
    
    <!-- Floating stamp -->
    <div class="text-rb-text-dark text-[10px] font-mono absolute bottom-12 right-6 z-10">
      ⌐ 0% Stamp Loading
    </div>
  </div>
</template>
