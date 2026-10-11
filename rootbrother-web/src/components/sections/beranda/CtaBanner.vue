<template>
  <section class="py-8 w-full px-6 md:px-12 lg:px-24 2xl:px-32">
    <div class="bg-rb-dark-card border border-[rgba(78,222,163,0.1)] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div class="max-w-xl">
        <h3 class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] text-2xl md:text-3xl font-bold">Siap Membangun Solusi Digital Anda?</h3>
        <p class="text-rb-text-dark text-sm mt-2 max-w-lg">
          Konsultasikan kebutuhan arsitektur sistem dan aplikasi bisnis Anda bersama tim insinyur kami tanpa biaya awal.
        </p>
      </div>
      <div class="flex items-center gap-4 flex-wrap">
        <a 
          href="https://wa.me/6281929923805?text=Halo%20Rootbrother,%20saya%20ingin%20konsultasi%20mengenai%20solusi%20digital" 
          target="_blank" 
          rel="noopener noreferrer"
          class="bg-rb-emerald hover:bg-rb-emerald-hover text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 inline-flex items-center gap-2 hover:shadow-[0_0_20px_rgba(78,222,163,0.4)] active:scale-95"
        >
          <span>&#128172;</span> Konsultasi WhatsApp
        </a>
        <router-link to="/cara-kerja" class="text-rb-text-dark text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1 group">
          Pelajari Alur Kerja <span class="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </router-link>
      </div>
    </div>
  </section>
</template>


