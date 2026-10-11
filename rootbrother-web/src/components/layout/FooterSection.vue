<script setup>
import { ref } from 'vue'
import logoImg from '@/assets/logo-rootbrother.png'

const activeModal = ref(null) // 'privasi' | 'syarat' | 'status' | null

const openModal = (type) => {
  activeModal.value = type
}

const closeModal = () => {
  activeModal.value = null
}
</script>

<template>
  <footer class="bg-rb-dark border-t border-[rgba(78,222,163,0.1)] pt-10 sm:pt-16 pb-6 sm:pb-8">
    <div class="w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32">
      
      <!-- Top section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        
        <!-- Column 1 - Brand -->
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-1">
            <img :src="logoImg" alt="Rootbrother Logo" class="w-8 h-8 rounded-full object-contain" />
            <div class="flex items-center">
              <span class="text-white font-bold text-sm">ROOTBROTHER</span>
              <span class="inline-block w-1.5 h-1.5 bg-rb-emerald rounded-full ml-1"></span>
            </div>
          </div>
          <span class="text-rb-emerald text-[10px] tracking-widest uppercase mb-4">DIGITAL SERVICE</span>
          <p class="text-rb-text-dark text-sm leading-relaxed mt-4">
            Menghubungkan masa depan digital melalui sinergi akar teknologi yang kokoh dan solidaritas rekayasa perangkat lunak modern. Tumbuh bersama ekosistem digital yang tangguh, adaptif, dan berorientasi hasil.
          </p>
          <div class="mt-5 bg-rb-emerald/10 border border-rb-emerald/20 text-rb-emerald text-xs font-mono px-3 py-1.5 rounded-full inline-flex items-center gap-2 w-max">
            <span class="w-1.5 h-1.5 bg-rb-emerald rounded-full shadow-[0_0_5px_#4EDEA3]"></span>
            Bioluminescent Core Active
          </div>
        </div>

        <!-- Column 2 - Tautan Cepat -->
        <div class="flex flex-col">
          <h3 class="text-rb-emerald text-xs tracking-widest uppercase font-semibold mb-4">Tautan Cepat</h3>
          <ul class="flex flex-col gap-2.5">
            <li><router-link to="/" class="text-rb-text-dark text-sm hover:text-white transition-colors">Beranda</router-link></li>
            <li><router-link to="/layanan" class="text-rb-text-dark text-sm hover:text-white transition-colors">Layanan Digital</router-link></li>
            <li><router-link to="/portfolio" class="text-rb-text-dark text-sm hover:text-white transition-colors">Portfolio & Testimoni Klien</router-link></li>
            <li><router-link to="/cara-kerja" class="text-rb-text-dark text-sm hover:text-white transition-colors">Metode & Alur Kerja</router-link></li>
            <li><router-link to="/tentang" class="text-rb-text-dark text-sm hover:text-white transition-colors">Tentang Rootbrother</router-link></li>
            <li><router-link to="/kontak" class="text-rb-text-dark text-sm hover:text-white transition-colors">Kontak &amp; Konsultasi</router-link></li>
          </ul>
        </div>

        <!-- Column 3 - Hubungi Kami -->
        <div class="flex flex-col lg:col-span-2">
          <h3 class="text-rb-emerald text-xs tracking-widest uppercase font-semibold mb-4">Hubungi Kami</h3>
          <p class="text-rb-text-dark text-sm mb-4">
            Diskusikan arsitektur dan visi digital bisnis Anda bersama tim insinyur kami.
          </p>
          
          <div class="flex flex-col gap-2.5">
            <!-- WA Card -->
            <a href="https://wa.me/6281929923805" target="_blank" class="bg-rb-dark-card border border-[rgba(78,222,163,0.1)] rounded-xl px-4 py-3 flex items-center gap-3 hover:border-rb-emerald/50 transition-colors">
              <div class="w-8 h-8 bg-rb-emerald/10 rounded-lg flex items-center justify-center text-rb-emerald">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </div>
              <div class="flex flex-col">
                <span class="text-rb-text-dark text-[11px]">WhatsApp Konsultasi</span>
                <span class="text-white text-sm font-medium">+62 819-2992-3805</span>
              </div>
            </a>
            
            <!-- Discord Card -->
            <a href="https://discord.gg/XXxbzBsYk" target="_blank" class="bg-rb-dark-card border border-[rgba(78,222,163,0.1)] rounded-xl px-4 py-3 flex items-center gap-3 hover:border-rb-emerald/50 transition-colors">
              <div class="w-8 h-8 bg-rb-emerald/10 rounded-lg flex items-center justify-center text-rb-emerald">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5a5 5 0 0 0 5 5h1l1 3 2.5-3h1.5a5 5 0 0 0 5-5v-5z"/></svg>
              </div>
              <div class="flex flex-col">
                <span class="text-rb-text-dark text-[11px]">Komunitas & Dev Hub</span>
                <span class="text-white text-sm font-medium">discord.gg/XXxbzBsYk</span>
              </div>
            </a>

            <!-- Instagram Card -->
            <a href="https://www.instagram.com/rootbrother.digital/" target="_blank" class="bg-rb-dark-card border border-[rgba(78,222,163,0.1)] rounded-xl px-4 py-3 flex items-center gap-3 hover:border-rb-emerald/50 transition-colors">
              <div class="w-8 h-8 bg-rb-emerald/10 rounded-lg flex items-center justify-center text-rb-emerald">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
              <div class="flex flex-col">
                <span class="text-rb-text-dark text-[11px]">Galeri Digital & Cerita</span>
                <span class="text-white text-sm font-medium">@rootbrother.digital</span>
              </div>
            </a>
          </div>

        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-[rgba(78,222,163,0.1)] mt-8 sm:mt-12 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-rb-text-dark text-xs text-center md:text-left">
          © 2025 ROOTBROTHER DIGITAL SERVICE. All rights reserved. Terhubung. Tumbuh. Berakar Kuat.
        </div>
        <div class="text-rb-text-dark text-xs flex items-center gap-2">
          <button @click="openModal('privasi')" class="hover:text-white transition-colors cursor-pointer">Kebijakan Privasi</button>
          <span>&middot;</span>
          <button @click="openModal('syarat')" class="hover:text-white transition-colors cursor-pointer">Syarat Layanan</button>
          <span>&middot;</span>
          <button @click="openModal('status')" class="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-rb-emerald animate-pulse"></span>
            Status Sistem
          </button>
        </div>
      </div>

    </div>

    <!-- Interactive Footer Modals -->
    <div 
      v-if="activeModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      @click.self="closeModal"
    >
      <div class="bg-[#0E1B32] border border-[#1E293B] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl text-white">
        <!-- Close Button -->
        <button 
          @click="closeModal" 
          class="absolute top-5 right-5 text-[#94A3B8] hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <!-- 1. Kebijakan Privasi Content -->
        <div v-if="activeModal === 'privasi'">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rb-emerald/10 text-rb-emerald text-xs font-semibold mb-4">
            🔒 KEAMANAN &amp; PRIVASI
          </div>
          <h3 class="text-2xl font-bold mb-4 text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE]">
            Kebijakan Privasi Rootbrother
          </h3>
          <div class="text-sm text-rb-text-dark space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            <p>
              Di <strong>ROOTBROTHER DIGITAL SERVICE</strong>, privasi dan kedaulatan data klien adalah prioritas nomor satu.
            </p>
            <div class="p-3.5 rounded-xl bg-[#132137] border border-[#1E293B]">
              <h4 class="text-white font-semibold text-xs mb-1 uppercase tracking-wider text-rb-emerald">1. Non-Disclosure Agreement (NDA)</h4>
              <p class="text-xs text-rb-text-dark">Seluruh data bisnis, skema ide, dan database terlindungi otomatis di bawah klausul kerahasiaan ketat sejak sesi konsultasi awal.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-[#132137] border border-[#1E293B]">
              <h4 class="text-white font-semibold text-xs mb-1 uppercase tracking-wider text-rb-emerald">2. Kedaulatan Source Code</h4>
              <p class="text-xs text-rb-text-dark">Kami tidak pernah menjual kembali kode sumber, aset visual, atau proprietary logic proyek Anda kepada pihak ketiga.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-[#132137] border border-[#1E293B]">
              <h4 class="text-white font-semibold text-xs mb-1 uppercase tracking-wider text-rb-emerald">3. Keamanan Data Cloud</h4>
              <p class="text-xs text-rb-text-dark">Penyimpanan kredensial server dan API keys menggunakan standard enkripsi tingkat tinggi (AES-256) tanpa logging plaintext.</p>
            </div>
          </div>
        </div>

        <!-- 2. Syarat Layanan Content -->
        <div v-else-if="activeModal === 'syarat'">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rb-emerald/10 text-rb-emerald text-xs font-semibold mb-4">
            📜 TRANSPARANSI KERJASAMA
          </div>
          <h3 class="text-2xl font-bold mb-4 text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE]">
            Syarat &amp; Ketentuan Layanan
          </h3>
          <div class="text-sm text-rb-text-dark space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            <div class="p-3.5 rounded-xl bg-[#132137] border border-[#1E293B]">
              <h4 class="text-white font-semibold text-xs mb-1 uppercase tracking-wider text-rb-emerald">1. Kepemilikan Penuh Klien</h4>
              <p class="text-xs text-rb-text-dark">Setelah pelunasan proyek, 100% hak cipta, repositori Git, dan akses server didelegasikan seutuhnya kepada Anda tanpa vendor lock-in.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-[#132137] border border-[#1E293B]">
              <h4 class="text-white font-semibold text-xs mb-1 uppercase tracking-wider text-rb-emerald">2. Garansi Maintenance 3 Bulan</h4>
              <p class="text-xs text-rb-text-dark">Garansi perbaikan bug dan penyesuaian minor gratis selama 90 hari kalender sejak website go-live.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-[#132137] border border-[#1E293B]">
              <h4 class="text-white font-semibold text-xs mb-1 uppercase tracking-wider text-rb-emerald">3. Transparansi Biaya</h4>
              <p class="text-xs text-rb-text-dark">Semua estimasi biaya disepakati di awal di dalam proposal transparan. Tidak ada biaya tersembunyi selama sprint berjalan.</p>
            </div>
          </div>
        </div>

        <!-- 3. Status Sistem Content -->
        <div v-else-if="activeModal === 'status'">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rb-emerald/10 text-rb-emerald text-xs font-semibold mb-4">
            ⚡ LIVE STATUS MONITOR
          </div>
          <h3 class="text-2xl font-bold mb-4 text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE]">
            Status Sistem Rootbrother
          </h3>
          <div class="text-sm text-rb-text-dark space-y-3">
            <div class="p-3.5 rounded-xl bg-[#132137] border border-[#1E293B] flex items-center justify-between">
              <div>
                <p class="text-white font-semibold text-sm">Vite Production Cluster</p>
                <p class="text-xs text-rb-text-dark">Edge CDN Global Nodes</p>
              </div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span> Operasional
              </span>
            </div>
            <div class="p-3.5 rounded-xl bg-[#132137] border border-[#1E293B] flex items-center justify-between">
              <div>
                <p class="text-white font-semibold text-sm">SSL &amp; Security Layer</p>
                <p class="text-xs text-rb-text-dark">TLS 1.3 Strict Enforced</p>
              </div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span> 100% Aktif
              </span>
            </div>
            <div class="p-3.5 rounded-xl bg-[#132137] border border-[#1E293B] flex items-center justify-between">
              <div>
                <p class="text-white font-semibold text-sm">WhatsApp &amp; Support Gateway</p>
                <p class="text-xs text-rb-text-dark">Latency Rata-rata ~18ms</p>
              </div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span> Online
              </span>
            </div>
          </div>
        </div>

        <!-- Modal Footer Close Button -->
        <div class="mt-6 pt-4 border-t border-[#1E293B] flex justify-end">
          <button 
            @click="closeModal" 
            class="bg-rb-emerald hover:bg-rb-emerald-hover text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
