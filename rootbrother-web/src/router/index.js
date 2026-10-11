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
    alias: ['/services'],
    component: () => import('../views/LayananView.vue'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    alias: ['/portofolio'],
    component: () => import('../views/PortfolioView.vue'),
  },
  {
    path: '/cara-kerja',
    name: 'CaraKerja',
    alias: ['/alur-kerja', '/workflow'],
    component: () => import('../views/CaraKerjaView.vue'),
  },
  {
    path: '/tentang',
    name: 'Tentang',
    alias: ['/tentang-kami', '/about'],
    component: () => import('../views/TentangView.vue'),
  },
  {
    path: '/kontak',
    name: 'Kontak',
    alias: ['/hubungi-kami', '/contact'],
    component: () => import('../views/KontakView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: 'smooth'
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router

