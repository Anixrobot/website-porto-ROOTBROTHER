import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: () => import('../views/BerandaView.vue'),
  },
  {
    path: '/layanan',
    name: 'Layanan',
    component: () => import('../views/LayananView.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/PortfolioView.vue'),
  },
  {
    path: '/cara-kerja',
    name: 'CaraKerja',
    component: () => import('../views/CaraKerjaView.vue'),
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: () => import('../views/TentangView.vue'),
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: () => import('../views/KontakView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router

