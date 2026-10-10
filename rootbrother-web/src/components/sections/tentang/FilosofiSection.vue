<script setup>
import imgDokum from '@/assets/tentangkami/dokum2.jpg'
</script>

<template>
  <section class="w-full px-6 md:px-12 lg:px-24 2xl:px-32 py-10">
    <div class="bg-[#0E1B32] border border-[#1E293B] rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-4 hover:border-[#4EDEA3]/30 transition-all duration-300">
      
      <!-- Left Image -->
      <div class="w-full lg:w-5/12 p-8 lg:p-12 flex justify-center items-center">
        <div class="relative w-full max-w-[450px]">
          <div class="absolute inset-0 bg-[#4EDEA3]/10 blur-3xl rounded-full"></div>
          <img 
            :src="imgDokum" 
            alt="Rootbrother Collaboration" 
            class="relative w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-[#1E293B]"
          />
        </div>
      </div>

      <!-- Right Content -->
      <div class="w-full lg:w-7/12 p-8 lg:p-16 lg:pl-4 flex flex-col justify-center">
        <div class="flex items-center gap-2 mb-6">
          <svg class="w-5 h-5 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          <p class="text-[#4EDEA3] text-[12px] font-semibold tracking-[0.1em] uppercase">FILOSOFI ROOTBROTHER</p>
        </div>

        <h2 class="text-[#FFFFFF] text-[36px] font-bold leading-tight mb-8">
          Berakar pada Kolaborasi, Tumbuh Besar Bersama.
        </h2>

        <p class="text-[#94A3B8] text-[18px] leading-relaxed mb-10">
          Nama "Rootbrother" bukanlah sekadar label, melainkan cerminan semangat kami. Layaknya akar yang bermula dari benih kecil, kami percaya bahwa hal-hal besar selalu berawal dari fondasi yang kuat dan proses belajar tiada henti. Kami hadir bukan sekadar sebagai penyedia jasa, tetapi sebagai partner kolaborasi yang siap membesarkan ide Anda dan bertumbuh bersama dari nol hingga menjadi luar biasa.
        </p>

        <div class="flex items-start gap-4 p-5 rounded-xl bg-[#1D2A41]/50 border border-[#1E293B]">
          <div class="mt-1 shrink-0">
             <svg class="w-6 h-6 text-[#4EDEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <div>
            <p class="text-[#4EDEA3] text-[16px] font-semibold mb-1">Prinsip Kesetaraan</p>
            <p class="text-[#94A3B8] text-[14px] leading-relaxed">
              Solusi disusun demi efisiensi nyata Anda, bukan tagihan sepihak.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

