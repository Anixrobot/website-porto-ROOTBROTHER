<template>
  <section class="py-12 w-full px-6 md:px-12 lg:px-24 2xl:px-32">
    <div class="bg-rb-dark-card border border-[rgba(78,222,163,0.1)] rounded-2xl p-10 md:p-16 text-center">
      <div class="text-rb-emerald text-xs tracking-widest uppercase font-semibold">
        🔐 DISKUSI TANPA KOMITMEN
      </div>
      <h2 class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] text-3xl md:text-4xl font-bold mt-4">
        Punya Kebutuhan Spesifik?
      </h2>
      <p class="text-rb-text-dark text-sm mt-3 max-w-2xl mx-auto">
        Diskusikan skenario sistem unik, integrasi perangkat keras pihak ketiga, atau skala enterprise langsung bersama tim engineer kami.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <router-link to="/kontak" class="bg-rb-emerald hover:bg-rb-emerald-hover text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 inline-flex items-center gap-2 hover:shadow-[0_0_20px_rgba(78,222,163,0.4)] active:scale-95">
          Konsultasi Sekarang &rarr;
        </router-link>
        <router-link to="/portfolio" class="border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 inline-flex items-center active:scale-95">
          Lihat Contoh Hasil
        </router-link>
      </div>
    </div>
  </section>
</template>


