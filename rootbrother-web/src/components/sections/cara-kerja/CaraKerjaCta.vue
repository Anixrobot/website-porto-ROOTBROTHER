<template>
  <section class="w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32 pb-12 sm:pb-20">
    <div class="bg-[#0E1B32] border border-[#1E293B] rounded-2xl p-6 sm:p-10 text-center shadow-sm">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] mb-6">Punya Rencana Proyek? Mari Ngobrol Santai</h2>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
        <a 
          href="https://wa.me/6281929923805?text=Halo%20Rootbrother,%20saya%20tertarik%20dengan%20alur%20kerja%20Rootbrother%20dan%20ingin%20konsultasi%20proyek" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base rounded-full bg-rb-emerald text-white hover:bg-rb-emerald-hover font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(78,222,163,0.4)] active:scale-95 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <span>&#128172;</span>
          <span>Hubungi via WhatsApp</span>
          <span>&rarr;</span>
        </a>
        <router-link 
          to="/kontak" 
          class="px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base rounded-full border border-white/20 text-white hover:border-white/40 hover:bg-white/5 font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95 w-full sm:w-auto"
        >
          Isi Brief Proyek
        </router-link>
      </div>
    </div>
  </section>
</template>


