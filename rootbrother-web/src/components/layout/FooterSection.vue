<script setup>
import logoImg from '@/assets/logo-rootbrother.png'
</script>

<template>
  <footer class="bg-[#030B18] border-t border-[rgba(78,222,163,0.1)] pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Top section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <!-- Column 1 - Brand -->
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-1">
            <img :src="logoImg" alt="Rootbrother Logo" class="w-7 h-7 rounded-full object-cover" />
            <div class="flex items-center">
              <span class="text-[#FFFFFF] font-bold text-sm">ROOTBROTHER</span>
              <span class="inline-block w-1.5 h-1.5 bg-[#4EDEA3] rounded-full ml-1"></span>
            </div>
          </div>
          <span class="text-[#4EDEA3] text-[10px] tracking-widest uppercase mb-4">DIGITAL SERVICE</span>
          <p class="text-[#BBCABF] text-sm leading-relaxed mt-4">
            Menghubungkan masa depan digital melalui sinergi akar teknologi yang kokoh dan solidaritas rekayasa perangkat lunak modern. Tumbuh bersama ekosistem digital yang tangguh, adaptif, dan berorientasi hasil.
          </p>
          <div class="mt-5 bg-[#4EDEA3]/10 border border-[#4EDEA3]/20 text-[#4EDEA3] text-xs font-mono px-3 py-1.5 rounded-full inline-flex items-center gap-2 w-max">
            <span class="w-1.5 h-1.5 bg-[#4EDEA3] rounded-full shadow-[0_0_5px_#4EDEA3]"></span>
            Bioluminescent Core Active
          </div>
        </div>

        <!-- Column 2 - Tautan Cepat -->
        <div class="flex flex-col">
          <h3 class="text-[#4EDEA3] text-xs tracking-widest uppercase font-semibold mb-4">Tautan Cepat</h3>
          <ul class="flex flex-col gap-2.5">
            <li><router-link to="/" class="text-[#BBCABF] text-sm hover:text-[#FFFFFF] transition-colors">Beranda</router-link></li>
            <li><router-link to="/layanan" class="text-[#BBCABF] text-sm hover:text-[#FFFFFF] transition-colors">Layanan Digital</router-link></li>
            <li><router-link to="/portfolio" class="text-[#BBCABF] text-sm hover:text-[#FFFFFF] transition-colors">Portfolio & Testimoni Klien</router-link></li>
            <li><router-link to="/cara-kerja" class="text-[#BBCABF] text-sm hover:text-[#FFFFFF] transition-colors">Metode & Alur Kerja</router-link></li>
            <li><router-link to="/tentang" class="text-[#BBCABF] text-sm hover:text-[#FFFFFF] transition-colors">Tentang Rootbrother</router-link></li>
          </ul>
        </div>

        <!-- Column 3 - Hubungi Kami -->
        <div class="flex flex-col lg:col-span-2">
          <h3 class="text-[#4EDEA3] text-xs tracking-widest uppercase font-semibold mb-4">Hubungi Kami</h3>
          <p class="text-[#BBCABF] text-sm mb-4">
            Diskusikan arsitektur dan visi digital bisnis Anda bersama tim insinyur kami.
          </p>
          
          <div class="flex flex-col gap-2.5">
            <!-- WA Card -->
            <a href="https://wa.me/6281234567890" target="_blank" class="bg-[#0E1B32] border border-[rgba(78,222,163,0.1)] rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#4EDEA3]/50 transition-colors">
              <div class="w-8 h-8 bg-[#4EDEA3]/10 rounded-lg flex items-center justify-center text-[#4EDEA3]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </div>
              <div class="flex flex-col">
                <span class="text-[#BBCABF] text-[11px]">WhatsApp Konsultasi</span>
                <span class="text-[#FFFFFF] text-sm font-medium">+62 812-3456-7890</span>
              </div>
            </a>
            
            <!-- Discord Card -->
            <a href="#" target="_blank" class="bg-[#0E1B32] border border-[rgba(78,222,163,0.1)] rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#4EDEA3]/50 transition-colors">
              <div class="w-8 h-8 bg-[#4EDEA3]/10 rounded-lg flex items-center justify-center text-[#4EDEA3]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5a5 5 0 0 0 5 5h1l1 3 2.5-3h1.5a5 5 0 0 0 5-5v-5z"/></svg>
              </div>
              <div class="flex flex-col">
                <span class="text-[#BBCABF] text-[11px]">Komunitas & Dev Hub</span>
                <span class="text-[#FFFFFF] text-sm font-medium">discord.gg/rootbrother</span>
              </div>
            </a>

            <!-- Instagram Card -->
            <a href="#" target="_blank" class="bg-[#0E1B32] border border-[rgba(78,222,163,0.1)] rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#4EDEA3]/50 transition-colors">
              <div class="w-8 h-8 bg-[#4EDEA3]/10 rounded-lg flex items-center justify-center text-[#4EDEA3]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
              <div class="flex flex-col">
                <span class="text-[#BBCABF] text-[11px]">Galeri Digital & Cerita</span>
                <span class="text-[#FFFFFF] text-sm font-medium">@rootbrother.digital</span>
              </div>
            </a>
          </div>

        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-[rgba(78,222,163,0.1)] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-[#BBCABF] text-xs text-center md:text-left">
          © 2025 ROOTBROTHER DIGITAL SERVICE. All rights reserved. Terhubung. Tumbuh. Berakar Kuat.
        </div>
        <div class="text-[#BBCABF] text-xs flex items-center gap-2">
          <router-link to="/privasi" class="hover:text-[#FFFFFF] transition-colors">Kebijakan Privasi</router-link>
          <span>&middot;</span>
          <router-link to="/syarat" class="hover:text-[#FFFFFF] transition-colors">Syarat Layanan</router-link>
          <span>&middot;</span>
          <router-link to="/status" class="hover:text-[#FFFFFF] transition-colors">Status Sistem</router-link>
        </div>
      </div>

    </div>
  </footer>
</template>
