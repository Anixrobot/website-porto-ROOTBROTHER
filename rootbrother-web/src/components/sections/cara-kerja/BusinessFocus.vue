<script setup>
import imgDokum from '@/assets/cara kerja page/dokum1.jpeg'
</script>

<template>
  <section class="w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32 py-10 sm:py-20">
    <div class="bg-[#0E1B32] border border-[#1E293B] rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 hover:border-[#4EDEA3]/30 transition-all duration-300">
      
      <!-- Left Content -->
      <div class="w-full lg:w-7/12">
        <p class="text-[#4EDEA3] text-[11px] sm:text-[12px] font-semibold tracking-[0.1em] uppercase mb-2 sm:mb-4">LAYANAN WEBSITE ALL-IN-ONE</p>
        <h2 class="text-[#FFFFFF] text-xl sm:text-2xl md:text-[36px] font-bold leading-tight mb-3 sm:mb-6">
          Anda Fokus Besarkan Bisnis, Biar Kami yang Urus Websitenya.
        </h2>
        <p class="text-[#94A3B8] text-xs sm:text-base md:text-[18px] leading-relaxed mb-6 sm:mb-10">
          Tinggalkan kerumitan teknis. Mulai dari desain modern yang responsif, setup domain, hingga optimasi SEO, tim kami siap membangun website profesional yang meningkatkan kredibilitas bisnis Anda sejak hari pertama rilis. Semua terima beres!
        </p>

        <!-- Metric Cards -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div class="bg-[#1D2A41] rounded-xl p-4 sm:p-5 flex-1 hover:bg-[#253551] transition-all duration-300">
            <div class="text-[#FFFFFF] text-2xl sm:text-[32px] font-bold leading-none mb-1 sm:mb-2">100%</div>
            <div class="text-[#4EDEA3] text-xs sm:text-[14px] font-medium">Mobile Optimized</div>
          </div>
          <div class="bg-[#1D2A41] rounded-xl p-4 sm:p-5 flex-1 hover:bg-[#253551] transition-all duration-300">
            <div class="text-[#FFFFFF] text-2xl sm:text-[32px] font-bold leading-none mb-1 sm:mb-2">Google</div>
            <div class="text-[#4EDEA3] text-xs sm:text-[14px] font-medium">SEO Ready Setup</div>
          </div>
        </div>
      </div>

      <!-- Right Image -->
      <div class="w-full lg:w-5/12 flex justify-center items-center">
        <div class="relative w-full max-w-[450px]">
          <div class="absolute inset-0 bg-[#4EDEA3]/20 blur-2xl rounded-full"></div>
          <img 
            :src="imgDokum" 
            alt="Rootbrother Team Working" 
            class="relative w-full h-auto max-h-[300px] sm:max-h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#1E293B]"
          />
        </div>
      </div>

    </div>
  </section>
</template>

