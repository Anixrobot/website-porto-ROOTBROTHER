<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const form = ref({
  nama: '',
  bisnis: '',
  wa: '',
  email: '',
  categories: [],
  budget: '',
  notes: ''
})

const isSubmitted = ref(false)
const copied = ref(false)

const categoriesList = [
  'Web Company Profile', 
  'Web Application', 
  'Landing Page', 
  'E-Commerce', 
  'UI/UX Design', 
  'Cloud Maintenance'
]
const budgetTiers = ['10-25Jt', '25-50Jt', '50-100Jt', '>100Jt']

onMounted(() => {
  if (route.query.service) {
    const s = route.query.service.toLowerCase()
    if (s.includes('web') && !form.value.categories.includes('Web Application')) {
      form.value.categories.push('Web Application')
    } else if (s.includes('ui') && !form.value.categories.includes('UI/UX Design')) {
      form.value.categories.push('UI/UX Design')
    } else if (s.includes('cloud') && !form.value.categories.includes('Cloud Maintenance')) {
      form.value.categories.push('Cloud Maintenance')
    } else {
      form.value.categories.push(route.query.service)
    }
  }
})

const toggleCategory = (cat) => {
  if (form.value.categories.includes(cat)) {
    form.value.categories = form.value.categories.filter(c => c !== cat)
  } else {
    form.value.categories.push(cat)
  }
}

const buildMessage = () => {
  const cats = form.value.categories.length > 0 ? form.value.categories.join(', ') : 'Belum ditentukan'
  const bud = form.value.budget || 'Belum ditentukan'
  const bis = form.value.bisnis || '-'
  const not = form.value.notes || '-'

  return `Halo Rootbrother! 👋\nSaya ingin konsultasi brief proyek melalui website:\n\n👤 *Nama*: ${form.value.nama}\n🏢 *Bisnis/Perusahaan*: ${bis}\n📱 *No. WhatsApp*: ${form.value.wa}\n✉️ *Email*: ${form.value.email}\n🛠️ *Kategori Layanan*: ${cats}\n💰 *Estimasi Budget*: ${bud}\n📝 *Deskripsi Singkat*: ${not}\n\nMohon info dan jadwal diskusi berikutnya. Terima kasih!`
}

const submitForm = () => {
  if (!form.value.nama || !form.value.wa || !form.value.email) return

  const message = buildMessage()
  const waUrl = `https://wa.me/6281929923805?text=${encodeURIComponent(message)}`
  
  // Open WhatsApp in new tab
  window.open(waUrl, '_blank')
  isSubmitted.value = true
}

const copyBrief = () => {
  const message = buildMessage()
  navigator.clipboard.writeText(message).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 3000)
  })
}

const resetForm = () => {
  form.value = {
    nama: '',
    bisnis: '',
    wa: '',
    email: '',
    categories: [],
    budget: '',
    notes: ''
  }
  isSubmitted.value = false
}
</script>
<template>
  <div class="bg-[#0E1B32] border border-[#1E293B] rounded-3xl p-8 shadow-sm">
    <h3 class="text-2xl font-bold text-transparent bg-clip-text text-gradient-hero bg-linear-to-r from-[#34D399] via-[#5EEAD4] to-[#22D3EE] mb-6">Spesifikasi Kebutuhan Proyek</h3>
    
    <form @submit.prevent="submitForm" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-white mb-1.5">Nama Lengkap*</label>
          <input v-model="form.nama" required type="text" class="w-full px-4 py-2.5 rounded-lg border border-[#1E293B] focus:ring-2 focus:ring-rb-emerald focus:border-rb-emerald outline-none bg-[#1D2A41] text-white" placeholder="Budi Santoso">
        </div>
        <div>
          <label class="block text-sm font-semibold text-white mb-1.5">Nama Bisnis/Perusahaan</label>
          <input v-model="form.bisnis" type="text" class="w-full px-4 py-2.5 rounded-lg border border-[#1E293B] focus:ring-2 focus:ring-rb-emerald focus:border-rb-emerald outline-none bg-[#1D2A41] text-white" placeholder="PT Maju Bersama">
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-white mb-1.5">No. WhatsApp*</label>
          <input v-model="form.wa" required type="tel" class="w-full px-4 py-2.5 rounded-lg border border-[#1E293B] focus:ring-2 focus:ring-rb-emerald focus:border-rb-emerald outline-none bg-[#1D2A41] text-white" placeholder="0812...">
        </div>
        <div>
          <label class="block text-sm font-semibold text-white mb-1.5">Email*</label>
          <input v-model="form.email" required type="email" class="w-full px-4 py-2.5 rounded-lg border border-[#1E293B] focus:ring-2 focus:ring-rb-emerald focus:border-rb-emerald outline-none bg-[#1D2A41] text-white" placeholder="budi@email.com">
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-white mb-3">Kategori Layanan (Bisa pilih lebih dari 1)</label>
        <div class="flex flex-wrap gap-2">
          <button 
            type="button" 
            v-for="cat in categoriesList" :key="cat"
            @click="toggleCategory(cat)"
            :class="['px-4 py-2 rounded-full text-sm border font-medium transition-colors', form.categories.includes(cat) ? 'bg-rb-emerald text-white border-rb-emerald' : 'bg-[#1D2A41] border-[#1E293B] text-rb-text-dark hover:border-rb-emerald']"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-white mb-3">Estimasi Budget (Opsional)</label>
        <div class="flex flex-wrap gap-2">
          <button 
            type="button"
            v-for="tier in budgetTiers" :key="tier"
            @click="form.budget = tier"
            :class="['px-4 py-2 rounded-lg text-sm border font-medium transition-colors', form.budget === tier ? 'bg-rb-emerald/10 border-rb-emerald text-rb-emerald' : 'bg-[#1D2A41] border-[#1E293B] text-rb-text-dark hover:border-rb-emerald']"
          >
            {{ tier }}
          </button>
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-white mb-1.5">Ceritakan Singkat Tentang Proyek Anda</label>
        <textarea v-model="form.notes" rows="4" class="w-full px-4 py-3 rounded-lg border border-[#1E293B] focus:ring-2 focus:ring-rb-emerald focus:border-rb-emerald outline-none bg-[#1D2A41] text-white" placeholder="Saya ingin membuat sistem internal untuk HR..."></textarea>
      </div>

      <!-- Submission Alert / Status -->
      <div v-if="isSubmitted" class="p-5 rounded-2xl bg-rb-emerald/10 border border-rb-emerald/30 text-white flex flex-col gap-3 animate-fade-in">
        <div class="flex items-center gap-2 text-rb-emerald font-semibold text-base">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          <span>Brief Anda Siap Dikirim ke WhatsApp Rootbrother!</span>
        </div>
        <p class="text-sm text-rb-text-dark leading-relaxed">
          Tab WhatsApp seharusnya sudah otomatis terbuka dengan data brief Anda. Jika belum terbuka atau pop-up diblokir browser, Anda bisa klik tombol di bawah atau menyalin teks brief:
        </p>
        <div class="flex flex-wrap gap-3 mt-1">
          <a 
            :href="`https://wa.me/6281929923805?text=${encodeURIComponent(buildMessage())}`" 
            target="_blank" 
            class="bg-rb-emerald hover:bg-rb-emerald-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-all"
          >
            <span>Buka WhatsApp Sekarang</span>
            <span>&rarr;</span>
          </a>
          <button 
            type="button" 
            @click="copyBrief" 
            class="border border-white/20 hover:border-white/40 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all inline-flex items-center gap-2 hover:bg-white/5"
          >
            <span>{{ copied ? '✓ Berhasil Disalin!' : '📋 Salin Teks Brief' }}</span>
          </button>
          <button 
            type="button" 
            @click="resetForm" 
            class="text-rb-text-dark hover:text-white text-xs px-3 py-2.5 underline transition-colors"
          >
            Kirim Brief Baru
          </button>
        </div>
      </div>

      <div v-if="!isSubmitted" class="flex flex-col sm:flex-row gap-4">
        <button type="submit" class="w-full py-4 rounded-xl bg-rb-emerald text-white font-bold text-base hover:bg-rb-emerald-hover transition-all shadow-lg shadow-emerald-950/40 hover:shadow-[0_0_25px_rgba(78,222,163,0.3)] active:scale-98 inline-flex items-center justify-center gap-2">
          <span>Kirim Brief via WhatsApp</span>
          <span>▷</span>
        </button>
      </div>
    </form>
  </div>
</template>


