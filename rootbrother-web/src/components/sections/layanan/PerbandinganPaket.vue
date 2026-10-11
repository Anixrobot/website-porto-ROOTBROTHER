<script setup>
const rows = [
  {
    spec: 'Harga',
    starter: 'Rp 50.000',
    standar: 'Rp 75.000',
    pro: 'Rp 100.000',
    custom: 'Nego'
  },
  {
    spec: 'Jumlah halaman',
    starter: '1 halaman',
    standar: 'Multi-page',
    pro: 'Sesuai sistem',
    custom: 'Bebas'
  },
  {
    spec: 'Backend & database',
    starter: 'Tidak ada',
    standar: 'Basic (Supabase)',
    pro: 'Fullstack + database',
    custom: 'Bebas'
  },
  {
    spec: 'Hosting',
    starter: 'Gratis (Vercel/Netlify)',
    standar: 'Gratis',
    pro: 'Berbayar',
    custom: 'Sesuai kebutuhan'
  },
  {
    spec: 'Domain',
    starter: 'Sub-domain gratis',
    standar: '.my.id / .biz.id',
    pro: 'Domain pribadi',
    custom: 'Sesuai kebutuhan'
  }
]
</script>

<template>
  <section class="py-10 sm:py-16 w-full px-4 sm:px-6 md:px-12 lg:px-24 2xl:px-32">
    <!-- Header -->
    <div class="mb-6 sm:mb-10 text-left">
      <div class="text-[#4EDEA3] text-[11px] sm:text-xs tracking-widest uppercase font-semibold mb-2">
        ● PERBANDINGAN PAKET
      </div>
      <h2 class="text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] text-xl sm:text-2xl md:text-3xl font-bold">
        Lihat Perbedaan Tiap Paket
      </h2>
      <p class="text-[#94A3B8] text-xs sm:text-sm mt-1.5 leading-relaxed">
        Ringkasan cepat untuk membantumu memilih.
      </p>
    </div>

    <!-- Table Container -->
    <div class="bg-[#0E1B32] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl">
      <div class="overflow-x-auto">
        <table class="w-full min-w-[620px] text-left border-collapse">
          <thead>
            <tr class="border-b border-[#1E293B] bg-[#132137]">
              <th class="py-4 px-5 sm:px-6 text-[#4EDEA3] font-bold text-xs uppercase tracking-wider w-[26%]">
                SPESIFIKASI
              </th>
              <th class="py-4 px-4 sm:px-6 text-white font-bold text-xs uppercase tracking-wider text-center w-[18%]">
                STARTER
              </th>
              <th class="py-4 px-4 sm:px-6 text-[#4EDEA3] font-bold text-xs uppercase tracking-wider text-center bg-[#4EDEA3]/10 w-[20%] border-x border-[#4EDEA3]/20">
                STANDAR
              </th>
              <th class="py-4 px-4 sm:px-6 text-white font-bold text-xs uppercase tracking-wider text-center w-[18%]">
                PRO
              </th>
              <th class="py-4 px-4 sm:px-6 text-white font-bold text-xs uppercase tracking-wider text-center w-[18%]">
                CUSTOM
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#1E293B] text-xs sm:text-sm">
            <tr
              v-for="(row, idx) in rows"
              :key="idx"
              class="hover:bg-[#132137]/60 transition-colors"
            >
              <td class="py-4 px-5 sm:px-6 text-white font-medium">
                {{ row.spec }}
              </td>
              <td class="py-4 px-4 sm:px-6 text-[#94A3B8] text-center">
                {{ row.starter }}
              </td>
              <td class="py-4 px-4 sm:px-6 text-white font-semibold text-center bg-[#4EDEA3]/5 border-x border-[#4EDEA3]/20">
                <span class="text-[#4EDEA3] font-bold">{{ row.standar }}</span>
              </td>
              <td class="py-4 px-4 sm:px-6 text-[#94A3B8] text-center">
                {{ row.pro }}
              </td>
              <td class="py-4 px-4 sm:px-6 text-[#94A3B8] text-center">
                {{ row.custom }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

