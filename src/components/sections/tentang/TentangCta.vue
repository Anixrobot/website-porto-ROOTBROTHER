<script setup>
</script>

<template>
  <section class="relative bg-[#0E1B32] border border-[#1E293B] rounded-2xl overflow-hidden p-10 md:p-16 text-center">
    <!-- Ambient Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4EDEA3] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
    
    <div class="relative z-10 max-w-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-6">Mari Bertumbuh Bersama Kami</h2>
      <p class="text-[#94A3B8] text-lg mb-10">
        Jangan biarkan masalah teknis menghambat inovasi Anda. Kami siap berdiskusi dan mencari solusi terbaik untuk kebutuhan digital Anda saat ini dan di masa depan.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="https://wa.me/6281234567890" target="_blank" class="px-8 py-3 bg-[#4EDEA3] text-[#030B18] font-bold rounded-full hover:bg-opacity-90 transition w-full sm:w-auto">
          Mulai Diskusi Gratis
        </a>
        <RouterLink to="/kontak" class="px-8 py-3 border border-[#4EDEA3] text-[#4EDEA3] font-bold rounded-full hover:bg-[#4EDEA3] hover:text-[#030B18] transition w-full sm:w-auto">
          Lihat Kontak Detail
        </RouterLink>
      </div>
    </div>
  </section>
</template>
