<template>
  <section class="w-full px-6 md:px-12 lg:px-24 2xl:px-32 py-20">
    <!-- Header -->
    <div class="mb-12">
      <p class="text-[#4EDEA3] text-[12px] font-semibold tracking-[0.1em] uppercase mb-4">KOMITMEN KUALITAS</p>
      <h2 class="text-[#FFFFFF] text-[36px] font-bold leading-tight mb-4">4 Nilai Inti yang Menjiwai Setiap Solusi</h2>
      <p class="text-[#94A3B8] text-[16px] font-normal leading-relaxed max-w-2xl">
        Prinsip operasional yang kami junjung tinggi dalam setiap rilis produk, baris kode, dan percakapan bersama mitra kami.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <!-- Card 1 -->
      <div class="bg-[#0E1B32] border border-[#1E293B] rounded-2xl p-8 flex flex-col h-full hover:bg-[#132137] transition-all duration-300">
        <div class="w-12 h-12 rounded-xl bg-[#1D2A41] border border-[#1E293B] flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        </div>
        <h3 class="text-[#4EDEA3] text-[20px] font-semibold mb-4">Ketangguhan Sistem</h3>
        <p class="text-[#94A3B8] text-[14px] leading-relaxed mb-8 grow">
          Kami merancang sistem dengan prinsip toleransi kegagalan (fault tolerance). Skalabilitas bukan angan-angan, melainkan matematika yang siap menangani lonjakan traffic.
        </p>
        <p class="text-[#4EDEA3] text-[12px] font-semibold tracking-wider uppercase mt-auto">High Resiliency</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-[#0E1B32] border border-[#1E293B] rounded-2xl p-8 flex flex-col h-full hover:bg-[#132137] transition-all duration-300">
        <div class="w-12 h-12 rounded-xl bg-[#1D2A41] border border-[#1E293B] flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
        </div>
        <h3 class="text-[#4EDEA3] text-[20px] font-semibold mb-4">Pertumbuhan Berkelanjutan</h3>
        <p class="text-[#94A3B8] text-[14px] leading-relaxed mb-8 grow">
          Kami menolak fitur instan yang rapuh. Setiap arsitektur dibangun untuk mudah dievolusikan mengikuti pertumbuhan skala omset dan operasional bisnis Anda.
        </p>
        <p class="text-[#4EDEA3] text-[12px] font-semibold tracking-wider uppercase mt-auto">Sustainable Velocity</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-[#0E1B32] border border-[#1E293B] rounded-2xl p-8 flex flex-col h-full hover:bg-[#132137] transition-all duration-300">
        <div class="w-12 h-12 rounded-xl bg-[#1D2A41] border border-[#1E293B] flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </div>
        <h3 class="text-[#4EDEA3] text-[20px] font-semibold mb-4">Kemitraan Saudara</h3>
        <p class="text-[#94A3B8] text-[14px] leading-relaxed mb-8 grow">
          Hubungan kami tidak selesai saat deploy. Kami hadir sebagai saudara yang menasihati opsi efisiensi server dan menjaga stabilitas sistem saat Anda berkembang.
        </p>
        <p class="text-[#4EDEA3] text-[12px] font-semibold tracking-wider uppercase mt-auto">Radical Empathy</p>
      </div>

      <!-- Card 4 -->
      <div class="bg-[#0E1B32] border border-[#1E293B] rounded-2xl p-8 flex flex-col h-full hover:bg-[#132137] transition-all duration-300">
        <div class="w-12 h-12 rounded-xl bg-[#1D2A41] border border-[#1E293B] flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        </div>
        <h3 class="text-[#4EDEA3] text-[20px] font-semibold mb-4">Presisi &amp; Estetika</h3>
        <p class="text-[#94A3B8] text-[14px] leading-relaxed mb-8 grow">
          Estetika antarmuka adalah tanda rasa hormat kepada pengguna akhir. Setiap spasi, mikro-interaksi, dan ritme tipografi dipoles hingga taraf kesempurnaan tertinggi.
        </p>
        <p class="text-[#4EDEA3] text-[12px] font-semibold tracking-wider uppercase mt-auto">Pixel-Accurate Polish</p>
      </div>

    </div>
  </section>
</template>

