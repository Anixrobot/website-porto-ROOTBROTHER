<template>
  <section class="w-full px-6 md:px-12 lg:px-24 2xl:px-32 py-20">
    <div class="bg-[#0E1B32] border border-[#1E293B] rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 hover:border-[#4EDEA3]/30 transition-all duration-300">
      
      <!-- Left Content -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D2A41] border border-[#1E293B] mb-8 w-max">
          <svg class="w-4 h-4 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          <span class="text-[#94A3B8] text-[12px] font-semibold tracking-[0.05em] uppercase">Misi Strategis Rootbrother</span>
        </div>

        <h2 class="text-[#FFFFFF] text-[36px] font-bold leading-tight mb-8">
          Membawa Standar Arsitektur Enterprise ke Genggaman Bisnis Lokal.
        </h2>

        <p class="text-[#94A3B8] text-[18px] leading-relaxed">
          Kami percaya UMKM dan startup berhak atas infrastruktur komputasi berkelas dunia. Tidak ada lagi sistem lambat, website rentan bocor data, atau ketergantungan sepihak pada pihak ketiga. Kami hadir mendemokratisasikan reliabilitas software berkualitas tinggi.
        </p>
      </div>

      <!-- Right Content (Vertical Cards) -->
      <div class="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
        <!-- Card 1 -->
        <div class="bg-[#132137] border border-[#1E293B] rounded-2xl p-8 hover:bg-[#1D2A41] transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="mt-1">
              <svg class="w-7 h-7 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h3 class="text-[#FFFFFF] text-[20px] font-semibold mb-3">Dampak Nyata</h3>
              <p class="text-[#94A3B8] text-[16px] leading-relaxed">
                Mengurangi pengeluaran server cloud hingga 40% dengan optimasi performa backend yang hemat memori.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-[#132137] border border-[#1E293B] rounded-2xl p-8 hover:bg-[#1D2A41] transition-all duration-300">
          <div class="flex items-start gap-5">
            <div class="mt-1">
              <svg class="w-7 h-7 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h3 class="text-[#FFFFFF] text-[20px] font-semibold mb-3">Waktu Respons Cepat</h3>
              <p class="text-[#94A3B8] text-[16px] leading-relaxed">
                Standar web app PageSpeed 95+ untuk menunjang konversi penjualan dan kenyamanan pelanggan Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

