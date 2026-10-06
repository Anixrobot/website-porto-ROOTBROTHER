/* =========================================================
   RootBrother - index.js
   Semua fitur interaktif website ada di sini.
   ========================================================= */

// ================= KONFIGURASI =================
// TODO: ganti dengan nomor WhatsApp asli (format 62xxx, tanpa + / 0 di depan)
const WA_NUMBER = "6281234567890";

// ================= DATA PROYEK =================
// Tambah / edit proyek cukup di array ini.
// category: "website" | "dashboard" | "landing"
const projects = [
  {
    title: "Company Profile CV Maju Jaya",
    category: "website",
    year: 2025,
    desc: "Website company profile untuk perusahaan konstruksi lokal.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Dashboard Inventory Gudang",
    category: "dashboard",
    year: 2025,
    desc: "Aplikasi dashboard untuk mencatat stok barang masuk & keluar.",
    tech: ["React", "Node.js", "MySQL"],
    link: "#",
  },
  {
    title: "Toko Online Kopi Nusantara",
    category: "website",
    year: 2024,
    desc: "Website e-commerce penjualan biji kopi dengan katalog produk.",
    tech: ["Next.js", "Tailwind", "Supabase"],
    link: "#",
  },
  {
    title: "Landing Page Promo Kursus",
    category: "landing",
    year: 2024,
    desc: "Landing page campaign pendaftaran kursus online.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Dashboard Kasir (POS) UMKM",
    category: "dashboard",
    year: 2024,
    desc: "Sistem kasir berbasis web lengkap dengan laporan penjualan.",
    tech: ["Laravel", "MySQL"],
    link: "#",
  },
];

// ================= DATA TESTIMONI =================
const testimonials = [
  {
    name: "Budi Santoso",
    project: "Company Profile CV Maju Jaya",
    rating: 5,
    text: "Pengerjaannya cepat dan hasilnya rapi. Komunikasinya enak banget, berasa partner sendiri!",
  },
  {
    name: "Siti Rahma",
    project: "Toko Online Kopi Nusantara",
    rating: 5,
    text: "Sejak punya website, penjualan online kami naik. Tim RootBrother juga sabar menjelaskan.",
  },
  {
    name: "Andi Pratama",
    project: "Dashboard Kasir (POS) UMKM",
    rating: 4,
    text: "Dashboard-nya mudah dipakai karyawan. Support setelah proyek selesai juga mantap.",
  },
];

// =========================================================
// 1. NAVBAR: toggle menu mobile + shadow saat scroll
// =========================================================
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Tutup menu mobile setelah link diklik
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", false);
  })
);

// =========================================================
// 2. ACTIVE LINK sesuai section yang sedang dilihat
// =========================================================
const sections = document.querySelectorAll("main section");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) =>
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`)
        );
      }
    });
  },
  { rootMargin: "-50% 0px -50% 0px" } // aktif saat section ada di tengah layar
);
sections.forEach((sec) => sectionObserver.observe(sec));

// =========================================================
// 3. SCROLL: shadow navbar + tombol back to top
// =========================================================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 10);
  backToTop.classList.toggle("show", y > 500);
});

backToTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

// =========================================================
// 4. COUNTER ANIMASI di Beranda
// =========================================================
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      obs.unobserve(entry.target); // cukup sekali
    }
  });
});
document.querySelectorAll(".counter").forEach((c) => counterObserver.observe(c));

// =========================================================
// 5. TABS SKILL (Frontend / Backend / Database / Tools)
// =========================================================
const skillTabs = document.querySelectorAll("#skillTabs .tab-btn");

skillTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    skillTabs.forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
  });
});

// =========================================================
// 6. RENDER + FILTER PROYEK
// =========================================================
const projectList = document.getElementById("projectList");
const filterBtns = document.querySelectorAll("#projectFilter .tab-btn");

function renderProjects(filter = "all") {
  const data = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  if (data.length === 0) {
    projectList.innerHTML = `<p>Belum ada proyek di kategori ini.</p>`;
    return;
  }

  projectList.innerHTML = data
    .map(
      (p) => `
      <article class="project-card">
        <div class="project-thumb">Preview</div>
        <span class="project-meta">${p.category} • ${p.year}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tech">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
        <a href="${p.link}" class="project-link" target="_blank" rel="noopener">Lihat Proyek →</a>
      </article>`
    )
    .join("");
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

renderProjects();

// =========================================================
// 7. SLIDER TESTIMONI (auto-play + tombol + dots)
// =========================================================
const testiTrack = document.getElementById("testiTrack");
const testiDots = document.getElementById("testiDots");
let currentTesti = 0;
let testiInterval;

function renderTestimonials() {
  testiTrack.innerHTML = testimonials
    .map(
      (t, i) => `
      <div class="testi-card ${i === 0 ? "active" : ""}">
        <div class="testi-rating">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
        <p class="testi-text">"${t.text}"</p>
        <p class="testi-name">${t.name}</p>
        <p class="testi-project">Proyek: ${t.project}</p>
      </div>`
    )
    .join("");

  testiDots.innerHTML = testimonials
    .map((_, i) => `<button class="dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Testimoni ${i + 1}"></button>`)
    .join("");

  testiDots.querySelectorAll(".dot").forEach((dot) =>
    dot.addEventListener("click", () => {
      showTesti(+dot.dataset.index);
      restartAutoPlay();
    })
  );
}

function showTesti(index) {
  const cards = testiTrack.querySelectorAll(".testi-card");
  const dots = testiDots.querySelectorAll(".dot");
  currentTesti = (index + cards.length) % cards.length; // looping

  cards.forEach((c, i) => c.classList.toggle("active", i === currentTesti));
  dots.forEach((d, i) => d.classList.toggle("active", i === currentTesti));
}

function restartAutoPlay() {
  clearInterval(testiInterval);
  testiInterval = setInterval(() => showTesti(currentTesti + 1), 5000);
}

document.getElementById("prevTesti").addEventListener("click", () => {
  showTesti(currentTesti - 1);
  restartAutoPlay();
});
document.getElementById("nextTesti").addEventListener("click", () => {
  showTesti(currentTesti + 1);
  restartAutoPlay();
});

renderTestimonials();
restartAutoPlay();

// =========================================================
// 8. TOMBOL "PESAN" di Layanan -> isi otomatis form kontak
// =========================================================
const layananSelect = document.getElementById("layanan-select");

document.querySelectorAll(".btn-order").forEach((btn) => {
  btn.addEventListener("click", () => {
    layananSelect.value = btn.dataset.service;
    document.getElementById("kontak").scrollIntoView();
    document.getElementById("nama").focus({ preventScroll: true });
  });
});

// =========================================================
// 9. FORM KONTAK -> kirim ke WhatsApp
// =========================================================
const contactForm = document.getElementById("contactForm");
const formError = document.getElementById("formError");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = contactForm.nama.value.trim();
  const layanan = contactForm.layanan.value;
  const pesan = contactForm.pesan.value.trim();

  // Validasi sederhana
  if (!nama || !layanan || !pesan) {
    formError.textContent = "Mohon lengkapi semua kolom terlebih dahulu.";
    return;
  }
  formError.textContent = "";

  const text =
    `Halo RootBrother 👋\n\n` +
    `Nama: ${nama}\n` +
    `Layanan: ${layanan}\n` +
    `Pesan: ${pesan}`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  contactForm.reset();
});

// =========================================================
// 10. ANIMASI REVEAL saat scroll
// =========================================================
const revealTargets = document.querySelectorAll(
  ".section-title, .skill-card, .service-card, .process-step, .value-card, .contact-item"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => revealObserver.observe(el));

// =========================================================
// 11. Tahun otomatis di footer
// =========================================================
document.getElementById("year").textContent = new Date().getFullYear();

