<template>
  <section class="w-full px-6 md:px-12 lg:px-24 2xl:px-32 py-10">
    <div class="bg-[#0E1B32] border border-[#1E293B] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 justify-between relative overflow-hidden shadow-2xl">
      <div class="flex items-center gap-6 z-10 w-full lg:w-auto">
        <div class="w-14 h-14 rounded-xl bg-[#1D2A41] border border-[#1E293B] flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
        </div>
        <div>
          <h3 class="text-[#FFFFFF] text-[20px] font-semibold mb-1">Transparansi Tanpa Istilah Teknis yang Membingungkan</h3>
          <p class="text-[#94A3B8] text-[16px] max-w-xl">
            Anda tidak perlu paham bahasa coding atau konfigurasi server; seluruh urusan infrastruktur kami tangani penuh.
          </p>
        </div>
      </div>

      <!-- Timeline Dots -->
      <div class="hidden md:flex items-center gap-4 z-10">
        <div class="flex items-center">
          <svg class="w-6 h-6 text-[#4EDEA3]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
          <div class="w-12 border-b-2 border-dashed border-[#4EDEA3] opacity-50 mx-2"></div>
          <svg class="w-6 h-6 text-[#4EDEA3]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
          <div class="w-12 border-b-2 border-dashed border-[#4EDEA3] opacity-50 mx-2"></div>
          <svg class="w-6 h-6 text-[#4EDEA3]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
          <div class="w-12 border-b-2 border-dashed border-[#4EDEA3] opacity-50 mx-2"></div>
          <svg class="w-6 h-6 text-[#4EDEA3]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
        </div>
      </div>

      <!-- Glow Effect -->
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#4EDEA3] rounded-full blur-[100px] opacity-[0.05] pointer-events-none"></div>
    </div>
  </section>
</template>

