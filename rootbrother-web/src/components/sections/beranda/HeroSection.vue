<script setup>
import logoImg from '@/assets/logo-rootbrother.png'
</script>

<template>
  <section class="pt-24 sm:pt-28 pb-10 sm:pb-16 w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32">
    <div class="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
      <!-- Left Side -->
      <div class="lg:w-3/5 text-center lg:text-left">
        <div class="bg-rb-emerald/10 border border-rb-emerald/20 text-rb-emerald text-[11px] sm:text-xs font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-flex items-center gap-2">
          <span class="w-1.5 h-1.5 bg-rb-emerald rounded-full"></span>
          Bio-Circuit Digital Engineering Agency
        </div>

        <h1 class="mt-4 sm:mt-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight italic">
          Solusi Digital<br />
          <span class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE]">Untuk Anak Bangsa.</span>
        </h1>

        <p class="mt-3 sm:mt-5 text-rb-text-dark text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
          Membangun arsitektur perangkat lunak modern, sistem cloud handal, dan desain antarmuka bernilai tinggi untuk mengakselerasi skala bisnis Anda.
        </p>

        <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
          <router-link to="/kontak" class="w-full sm:w-auto bg-rb-emerald hover:bg-rb-emerald-hover text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(78,222,163,0.4)] active:scale-95">
            Mulai Proyek &rarr;
          </router-link>
          <router-link to="/portfolio" class="w-full sm:w-auto text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 inline-flex items-center justify-center active:scale-95">
            Lihat Portofolio
          </router-link>
        </div>

        <div class="mt-8 sm:mt-10">
          <div class="w-full h-px bg-[rgba(78,222,163,0.1)] mt-4"></div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="lg:w-2/5 flex justify-center relative">
        <div class="absolute inset-0 bg-rb-emerald blur-[70px] md:blur-[120px] opacity-25 rounded-full scale-105"></div>
        <img :src="logoImg" alt="Rootbrother Logo" class="relative z-10 w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-contain drop-shadow-[0_0_40px_rgba(78,222,163,0.3)] hover:scale-105 transition-all duration-500" />
      </div>
    </div>
  </section>
</template>


