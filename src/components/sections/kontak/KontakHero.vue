<script setup>
</script>

<template>
  <section class="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-[#1E293B] pb-8 pt-8">
    <div class="flex flex-col gap-4">
      <div class="flex items-center text-[#94A3B8] text-sm">
        <RouterLink to="/" class="hover:text-[#FFFFFF] transition">Beranda</RouterLink>
        <span class="mx-2">/</span>
        <span class="text-[#4EDEA3]">Kontak</span>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-[#FFFFFF] leading-none uppercase">
        Solusi Digital <br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#94A3B8]">Berakar Kuat</span>
      </h1>
    </div>
    
    <div class="bg-[#1D2A41] text-[#4EDEA3] px-4 py-2 rounded-full text-sm font-semibold flex items-center border border-[#1E293B]">
      <span class="relative flex h-3 w-3 mr-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4EDEA3] opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-[#4EDEA3]"></span>
      </span>
      Engineer On-Duty: Siap Berdiskusi
    </div>
  </section>
</template>
