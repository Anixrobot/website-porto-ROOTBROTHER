<script setup>
const metrics = [
  { title: "100% Solid", desc: "Reliabilitas sistem tinggi" },
  { title: "Full Access", desc: "Kontrol penuh di tangan Anda" },
  { title: "Long-term", desc: "Support untuk jangka panjang" },
  { title: "24/7", desc: "Monitor stabilitas produk" }
];
</script>

<template>
  <section class="flex flex-col items-center text-center pt-8">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] mb-12 max-w-4xl leading-tight">
      Berakar Dalam Kode, <br/>
      <span class="text-[#4EDEA3]">Bertumbuh Bersama Saudara</span>
    </h1>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      <div v-for="(item, i) in metrics" :key="i" class="bg-[#0E1B32] border border-[#1E293B] rounded-xl p-6 flex flex-col items-center justify-center">
        <span class="text-2xl font-bold text-[#FFFFFF] mb-1">{{ item.title }}</span>
        <span class="text-[#94A3B8] text-sm">{{ item.desc }}</span>
      </div>
    </div>
  </section>
</template>
