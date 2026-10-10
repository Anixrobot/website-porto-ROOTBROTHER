<script setup>
import { ref } from 'vue'

const form = ref({
  nama: '', bisnis: '', wa: '', email: '',
  categories: [], budget: '', notes: ''
})

const categoriesList = ['Web Company Profile', 'Web Application', 'Landing Page', 'E-Commerce', 'UI/UX Design', 'Cloud Maintenance']
const budgetTiers = ['10-25Jt', '25-50Jt', '50-100Jt', '>100Jt']

const toggleCategory = (cat) => {
  if(form.value.categories.includes(cat)) {
    form.value.categories = form.value.categories.filter(c => c !== cat)
  } else {
    form.value.categories.push(cat)
  }
}

const submitForm = () => {
  alert('Form simulated submit. Check console.')
  console.log(form.value)
}
</script>
<template>
  <div class="bg-white border border-rb-light-border rounded-3xl p-8 shadow-sm">
    <h3 class="text-2xl font-bold text-rb-heading-light mb-6">Spesifikasi Kebutuhan Proyek</h3>
    
    <form @submit.prevent="submitForm" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-rb-heading-light mb-1.5">Nama Lengkap*</label>
          <input v-model="form.nama" required type="text" class="w-full px-4 py-2.5 rounded-lg border border-rb-light-border focus:ring-2 focus:ring-rb-emerald focus:border-rb-emerald outline-none bg-rb-light-surface" placeholder="Budi Santoso">
        </div>
        <div>
          <label class="block text-sm font-semibold text-rb-heading-light mb-1.5">Nama Bisnis/Perusahaan</label>
          <input v-model="form.bisnis" type="text" class="w-full px-4 py-2.5 rounded-lg border border-rb-light-border focus:ring-2 focus:ring-rb-emerald focus:border-rb-emerald outline-none bg-rb-light-surface" placeholder="PT Maju Bersama">
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-rb-heading-light mb-1.5">No. WhatsApp*</label>
          <input v-model="form.wa" required type="tel" class="w-full px-4 py-2.5 rounded-lg border border-rb-light-border focus:ring-2 focus:ring-rb-emerald focus:border-rb-emerald outline-none bg-rb-light-surface" placeholder="0812...">
        </div>
        <div>
          <label class="block text-sm font-semibold text-rb-heading-light mb-1.5">Email*</label>
          <input v-model="form.email" required type="email" class="w-full px-4 py-2.5 rounded-lg border border-rb-light-border focus:ring-2 focus:ring-rb-emerald focus:border-rb-emerald outline-none bg-rb-light-surface" placeholder="budi@email.com">
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-rb-heading-light mb-3">Kategori Layanan (Bisa pilih lebih dari 1)</label>
        <div class="flex flex-wrap gap-2">
          <button 
            type="button" 
            v-for="cat in categoriesList" :key="cat"
            @click="toggleCategory(cat)"
            :class="['px-4 py-2 rounded-full text-sm border font-medium transition-colors', form.categories.includes(cat) ? 'bg-rb-emerald text-white border-rb-emerald' : 'bg-white border-rb-light-border text-rb-text-light hover:border-rb-emerald']"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-rb-heading-light mb-3">Estimasi Budget (Opsional)</label>
        <div class="flex flex-wrap gap-2">
          <button 
            type="button"
            v-for="tier in budgetTiers" :key="tier"
            @click="form.budget = tier"
            :class="['px-4 py-2 rounded-lg text-sm border font-medium transition-colors', form.budget === tier ? 'bg-rb-emerald/10 border-rb-emerald text-rb-emerald' : 'bg-white border-rb-light-border text-rb-text-light hover:border-rb-emerald']"
          >
            {{ tier }}
          </button>
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-rb-heading-light mb-1.5">Ceritakan Singkat Tentang Proyek Anda</label>
        <textarea v-model="form.notes" rows="4" class="w-full px-4 py-3 rounded-lg border border-rb-light-border focus:ring-2 focus:ring-rb-emerald focus:border-rb-emerald outline-none bg-rb-light-surface" placeholder="Saya ingin membuat sistem internal untuk HR..."></textarea>
      </div>

      <button type="submit" class="w-full py-4 rounded-xl bg-rb-emerald text-white font-bold text-lg hover:bg-rb-emerald-hover transition-colors shadow-lg shadow-emerald-200">
        Kirim Brief & Mulai Diskusi ▷
      </button>
    </form>
  </div>
</template>
