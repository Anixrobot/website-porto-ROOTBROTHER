<template>
  <section class="w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32 pb-12 sm:pb-20">
    <div class="bg-rb-dark-card border border-rb-dark-border rounded-xl sm:rounded-2xl py-8 sm:py-12 px-4 sm:px-6 flex flex-col items-center text-center">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] mb-3 sm:mb-4">Siap Berkolaborasi?</h2>
      <p class="text-rb-text-dark text-xs sm:text-base mb-6 sm:mb-8 max-w-lg leading-relaxed">Proyek Anda bisa jadi kesuksesan kami selanjutnya. Mari bangun hal hebat bersama.</p>
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <router-link to="/kontak" class="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-rb-emerald text-white font-semibold text-xs sm:text-sm hover:bg-rb-emerald-hover transition-all duration-300 hover:shadow-[0_0_20px_rgba(78,222,163,0.4)] active:scale-95 inline-flex items-center justify-center gap-2">
          <span>Mulai Proyek</span>
          <span>&rarr;</span>
        </router-link>
        <a 
          href="https://wa.me/6281929923805?text=Halo%20Rootbrother,%20saya%20tertarik%20dengan%20portofolio%20Rootbrother%20dan%20ingin%20konsultasi%20proyek" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-rb-dark-border text-white font-semibold text-xs sm:text-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95"
        >
          <span>&#128172;</span>
          <span>Hubungi Kami</span>
        </a>
      </div>
    </div>
  </section>
</template>


