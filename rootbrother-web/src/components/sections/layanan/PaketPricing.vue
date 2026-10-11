<script setup>
const packages = [
  {
    id: 'starter',
    badge: 'Basic / Starter',
    name: 'Paket Starter',
    desc: 'Cocok untuk Landing Page, Undangan Digital, atau Profil UMKM.',
    price: 'Rp 50.000',
    priceNote: 'Pengerjaan sangat cepat',
    featured: false,
    features: [
      {
        title: 'Single Page Website',
        desc: 'Satu halaman rapi, modern, dan responsif di HP maupun PC.'
      },
      {
        title: 'Frontend Only',
        desc: 'Fokus tampilan tanpa database, interaktif dengan React atau Tailwind.'
      },
      {
        title: 'Free Hosting',
        desc: 'Di-deploy di Vercel atau Netlify.'
      },
      {
        title: 'Free Sub-domain',
        desc: 'Contoh: namabisnis.vercel.app'
      }
    ],
    benefit: 'Harga super hemat untuk kamu yang butuh eksistensi online secara instan.',
    buttonText: 'Pilih Starter',
    query: 'Paket Starter'
  },
  {
    id: 'standar',
    badge: 'Standar',
    name: 'Paket Standar',
    desc: 'Cocok untuk Portofolio, Katalog Produk, atau Web Profil.',
    price: 'Rp 75.000',
    priceNote: 'Paling banyak dipilih',
    featured: true,
    features: [
      {
        title: 'Multi-page Website',
        desc: 'Beberapa halaman: Home, About Us, Layanan, Kontak.'
      },
      {
        title: 'Frontend & Basic Backend',
        desc: 'Form kontak masuk ke email atau sistem, simpan data ringan (Supabase).'
      },
      {
        title: 'Custom Domain',
        desc: 'Ekstensi tertentu seperti .my.id atau .biz.id.'
      },
      {
        title: 'Free Hosting',
        desc: 'Server gratis yang andal.'
      }
    ],
    benefit: 'Lebih kredibel di mata customer karena punya nama domain sendiri.',
    buttonText: 'Pilih Standar',
    query: 'Paket Standar'
  },
  {
    id: 'pro',
    badge: 'Pro / Premium',
    name: 'Paket Pro',
    desc: 'Cocok untuk Sistem Informasi, Dashboard, atau Web App Sederhana.',
    price: 'Rp 100.000',
    priceNote: 'Solusi terima beres',
    featured: false,
    features: [
      {
        title: 'Fullstack Web Development',
        desc: 'Frontend dan backend terstruktur (Laravel atau Node.js).'
      },
      {
        title: 'Database Integration',
        desc: 'Penyimpanan data aman untuk aktivitas user, CMS, atau transaksi.'
      },
      {
        title: 'Paid Hosting & Domain',
        desc: 'Server berbayar dan domain pribadi, kontrol penuh di tanganmu.'
      }
    ],
    benefit: 'Infrastruktur mandiri untuk mengoperasikan bisnis secara real-time.',
    buttonText: 'Pilih Pro',
    query: 'Paket Pro'
  },
  {
    id: 'custom',
    badge: 'Custom',
    name: 'Paket Custom',
    desc: 'Cocok untuk project spesifik dengan fitur khusus.',
    price: 'Pilih Sesuai Request',
    priceNote: 'Nego sampai jadi',
    featured: false,
    features: [
      {
        title: 'Spesifikasi Bebas',
        desc: 'Sistem dibuat murni sesuai request kamu.'
      },
      {
        title: 'Fitur Lanjutan',
        desc: 'Animasi interaktif (p5.js), integrasi Discord Bot, auto-posting, manajemen role user kompleks.'
      }
    ],
    benefit: 'Fleksibilitas maksimal. Kamu bilang butuhnya apa, teknologinya kami rakit sesuai kantong dan kebutuhan.',
    buttonText: 'Diskusi Paket Custom',
    query: 'Paket Custom'
  }
]
</script>

<template>
  <section id="pricing" class="py-12 sm:py-20 w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32 scroll-mt-20">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
      <div class="inline-flex items-center gap-2 bg-[#1D2A41] border border-[#1E293B] text-[#4EDEA3] text-[11px] sm:text-xs tracking-widest uppercase font-semibold px-3.5 py-1.5 rounded-full mb-4 sm:mb-5">
        <span class="w-2 h-2 rounded-full bg-[#4EDEA3]"></span>
        SPESIFIKASI &amp; HARGA
      </div>

      <h2 class="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
        Pilih Paket yang <span class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE]">Pas dengan<br class="hidden sm:inline" /> Kebutuhanmu</span>
      </h2>

      <p class="mt-3 sm:mt-4 text-[#94A3B8] text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
        Dari landing page instan sampai sistem fullstack. Harga jelas, spesifikasi jelas, tanpa biaya tersembunyi.
      </p>
    </div>

    <!-- Pricing Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
      <div
        v-for="pkg in packages"
        :key="pkg.id"
        :class="[
          'bg-[#0E1B32] rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative',
          pkg.featured
            ? 'border-2 border-[#4EDEA3] shadow-[0_0_35px_rgba(78,222,163,0.25)] hover:shadow-[0_0_45px_rgba(78,222,163,0.35)]'
            : 'border border-[#1E293B] hover:border-[#4EDEA3]/40 hover:shadow-[0_0_25px_rgba(78,222,163,0.15)]'
        ]"
      >
        <!-- Top Section -->
        <div>
          <!-- Badge -->
          <div class="mb-4">
            <span
              :class="[
                'text-[10px] sm:text-[11px] font-semibold px-3 py-1 rounded-full inline-block uppercase tracking-wider',
                pkg.featured
                  ? 'bg-[#4EDEA3] text-[#030B18] font-bold shadow-sm'
                  : 'bg-[#1D2A41] text-[#4EDEA3] border border-[#1E293B]'
              ]"
            >
              {{ pkg.badge }}
            </span>
          </div>

          <!-- Name & Target -->
          <h3 class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] font-bold text-lg sm:text-xl">
            {{ pkg.name }}
          </h3>
          <p class="text-[#94A3B8] text-xs mt-1.5 leading-relaxed min-h-[36px]">
            {{ pkg.desc }}
          </p>

          <!-- Price -->
          <div class="mt-5 pt-4 border-t border-[#1E293B]">
            <div class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] font-black text-2xl sm:text-3xl leading-tight">
              {{ pkg.price }}
            </div>
            <div :class="['text-xs mt-1 font-medium', pkg.featured ? 'text-[#4EDEA3]' : 'text-[#94A3B8]']">
              {{ pkg.priceNote }}
            </div>
          </div>

          <!-- Features List -->
          <div class="mt-6 space-y-4">
            <div
              v-for="(feat, fIdx) in pkg.features"
              :key="fIdx"
              class="flex items-start gap-2.5"
            >
              <div class="w-4 h-4 rounded-full border border-[#4EDEA3] flex items-center justify-center shrink-0 mt-0.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#4EDEA3]"></span>
              </div>
              <div>
                <p class="text-white text-xs sm:text-sm font-semibold leading-snug">
                  {{ feat.title }}
                </p>
                <p class="text-[#94A3B8] text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                  {{ feat.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section: Benefit + CTA Button -->
        <div class="mt-6 pt-4 border-t border-[#1E293B] flex flex-col justify-end">
          <!-- Benefit Box -->
          <div
            :class="[
              'rounded-xl p-3.5 mb-5 bg-[#132137]',
              pkg.featured ? 'border border-[#4EDEA3]/30' : 'border border-[#1E293B]'
            ]"
          >
            <div class="text-[#4EDEA3] text-[10px] font-bold tracking-widest uppercase mb-1">
              BENEFIT
            </div>
            <p class="text-[#94A3B8] text-xs leading-relaxed">
              {{ pkg.benefit }}
            </p>
          </div>

          <!-- CTA Button -->
          <router-link
            :to="{ path: '/kontak', query: { service: pkg.query }, hash: '#brief' }"
            :class="[
              'w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-center transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95 cursor-pointer',
              pkg.featured
                ? 'bg-rb-emerald hover:bg-rb-emerald-hover text-white shadow-[0_0_20px_rgba(78,222,163,0.4)]'
                : 'bg-[#132137] border border-[#1E293B] text-white hover:bg-[#1D2A41] hover:border-[#4EDEA3]/50 hover:shadow-[0_0_15px_rgba(78,222,163,0.2)]'
            ]"
          >
            <span>{{ pkg.buttonText }}</span>
            <span>&rarr;</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

