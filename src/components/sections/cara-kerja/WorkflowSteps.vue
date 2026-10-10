<script setup>
const steps = [
  {
    num: "01",
    duration: "1 - 2 Hari",
    icon: "💬",
    title: "Diskusi Konsep",
    text: "Penyamaan visi dan kebutuhan. Kami mendengarkan cerita dan tujuan bisnis Anda secara mendalam.",
    checks: ["Kebutuhan teknis", "Target audiens", "Referensi desain"]
  },
  {
    num: "02",
    duration: "2 - 4 Hari",
    icon: "🎨",
    title: "Desain UI/UX",
    text: "Pembuatan wireframe dan visual interface yang interaktif dan menarik sebelum mulai tahap koding.",
    checks: ["Figma Mockup", "Review Revisi", "Persetujuan Desain"]
  },
  {
    num: "03",
    duration: "3 - 4 Hari",
    icon: "⚙️",
    title: "Review & Staging",
    text: "Proses development di lingkungan staging tertutup. Anda bisa melihat progres secara langsung dan aman.",
    checks: ["Development", "Mobile Responsive", "Testing Awal"]
  },
  {
    num: "04",
    duration: "1 Hari",
    icon: "🚀",
    title: "Deployment",
    text: "Peluncuran produk ke server publik dengan domain pilihan Anda, siap digunakan oleh audiens.",
    checks: ["Setup Domain", "SSL Security", "Handover Akses"]
  }
];
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div v-for="step in steps" :key="step.num" class="relative bg-[#0E1B32] border border-[#1E293B] hover:bg-[#132137] rounded-xl p-6 transition-colors duration-300 overflow-hidden flex flex-col group">
      <!-- Big Number Background -->
      <div class="absolute -top-4 -right-2 text-8xl font-bold text-[#FFFFFF] opacity-5 select-none transition-transform group-hover:scale-110">
        {{ step.num }}
      </div>
      
      <!-- Header Info -->
      <div class="flex items-center justify-between mb-6 relative z-10">
        <span class="text-3xl">{{ step.icon }}</span>
        <span class="bg-[#1D2A41] text-[#4EDEA3] text-xs font-semibold px-3 py-1 rounded-full">
          {{ step.duration }}
        </span>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 flex-grow">
        <h3 class="text-[20px] lg:text-[24px] font-bold text-[#FFFFFF] mb-3">{{ step.title }}</h3>
        <p class="text-[#94A3B8] text-sm mb-6 leading-relaxed">{{ step.text }}</p>
      </div>
      
      <!-- Checklist -->
      <ul class="relative z-10 space-y-2 mt-auto border-t border-[#1E293B] pt-4">
        <li v-for="(check, idx) in step.checks" :key="idx" class="flex items-center text-sm text-[#94A3B8]">
          <svg class="w-4 h-4 text-[#4EDEA3] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          {{ check }}
        </li>
      </ul>
    </div>
  </section>
</template>
