<template>
  <section class="py-8 sm:py-12 w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32">
    <div class="bg-rb-dark-card border border-[rgba(78,222,163,0.1)] rounded-xl sm:rounded-2xl p-6 sm:p-10 md:p-16 text-center">
      <div class="text-rb-emerald text-[11px] sm:text-xs tracking-widest uppercase font-semibold">
        🔐 DISKUSI TANPA KOMITMEN
      </div>
      <h2 class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] text-xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-4">
        Masih Bingung Pilih Paket?
      </h2>
      <p class="text-rb-text-dark text-xs sm:text-sm mt-2 sm:mt-3 max-w-2xl mx-auto leading-relaxed">
        Ceritakan kebutuhanmu, kami bantu pilihkan paket yang paling pas.
      </p>
      <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
        <router-link to="/kontak" class="w-full sm:w-auto bg-rb-emerald hover:bg-rb-emerald-hover text-white font-semibold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(78,222,163,0.4)] active:scale-95">
          Konsultasi Sekarang &rarr;
        </router-link>
        <router-link to="/portfolio" class="w-full sm:w-auto border border-white/20 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 inline-flex items-center justify-center active:scale-95">
          Lihat Contoh Hasil
        </router-link>
      </div>
    </div>
  </section>
</template>


