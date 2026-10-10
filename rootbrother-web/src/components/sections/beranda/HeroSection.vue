<script setup>
import logoImg from '@/assets/logo-rootbrother.png'
</script>

<template>
  <section class="pt-28 pb-16 w-full px-6 md:px-12 lg:px-24 2xl:px-32">
    <div class="flex flex-col lg:flex-row items-center gap-12">
      <!-- Left Side -->
      <div class="lg:w-3/5">
        <div class="bg-rb-emerald/10 border border-rb-emerald/20 text-rb-emerald text-xs font-medium px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <span class="w-1.5 h-1.5 bg-rb-emerald rounded-full"></span>
          Bio-Circuit Digital Engineering Agency
        </div>

        <h1 class="mt-6 text-white text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight italic">
          Solusi Digital<br />
          <span class="text-transparent bg-clip-text bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE]">Untuk Anak Bangsa.</span>
        </h1>

        <p class="mt-5 text-rb-text-dark text-base leading-relaxed max-w-lg">
          Membangun arsitektur perangkat lunak modern, sistem cloud handal, dan desain antarmuka bernilai tinggi untuk mengakselerasi skala bisnis Anda.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <button class="bg-rb-emerald hover:bg-rb-emerald-hover text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors inline-flex items-center gap-2">
            Mulai Proyek &rarr;
          </button>
          <button class="text-white font-semibold text-sm px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-colors">
            Lihat Portofolio
          </button>
        </div>

        <div class="mt-10">
          <div class="flex items-center gap-2 flex-wrap">
            
          
          </div>
          <div class="w-full h-px bg-[rgba(78,222,163,0.1)] mt-4"></div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="lg:w-2/5 flex justify-center relative">
        <div class="absolute inset-0 bg-rb-emerald blur-[100px] opacity-20 rounded-full"></div>
        <img :src="logoImg" alt="Rootbrother Logo" class="relative z-10 w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-[0_0_40px_rgba(78,222,163,0.2)]" />
      </div>
    </div>
  </section>
</template>


