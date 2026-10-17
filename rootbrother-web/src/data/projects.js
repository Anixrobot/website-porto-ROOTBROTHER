// import foto1 from '@/assets/portofilo-testimoni/foto-finroot.png' // <-- Ganti nama file ini dengan foto aslimu
import foto1 from '@/assets/portofilo-testimoni/UMKMRAMBAK.png'
import foto2 from '@/assets/portofilo-testimoni/NASI MINTAI MENYUM.png'

export const projects = [
  {
    id: 1,
    title: 'Website Krupuk Rambak Adi Boyolali',
    category: 'web',
    tags: ['Web Development', 'E-commerce', 'Responsive Design'],
    year: '2024',
    description: 'Website resmi untuk menjual krupuk rambak dengan desain modern dan fitur e-commerce yang memudahkan pelanggan dalam berbelanja.',
    tech: ['Vue.js', 'JavaScript', 'CSS', 'HTML'],
    status: 'Live Deployed',
    metric: { label: 'Keandalan', value: '99.8% System Uptime' },
    link: 'https://krupukrambakadiboyolali.netlify.app/',
    image: foto1
  },

  {
    id: 2,
    title: 'Website Nasi Mentai Menyum',
    category: 'web',
    tags: ['Food & Beverage', 'UMKM', "Food & Beverage", 'Responsive Design', ],
    year: '2024',
    description: 'Website resmi untuk menjual nasi mentai menyum dengan desain modern dan fitur e-commerce yang memudahkan pelanggan dalam berbelanja.',
    tech: ['React.js', 'JavaScript', 'CSS Tailwind', 'HTML'],
    status: 'Live Deployed',
    metric: { label: 'Keandalan', value: '99.8% System Uptime' },
    link: 'https://project-webmenyum.pages.dev/',
    image: foto2
  },
]