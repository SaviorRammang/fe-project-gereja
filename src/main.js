import { createApp, h } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";

import Main from "./components/layouts/Index.vue";
import Rayon from "./components/layouts/JadwalIbadah/Rayon.vue";
import IbadahUmum from "./components/layouts/JadwalIbadah/IbadahUmum.vue";
import IbadahAkhirBulan from "./components/layouts/JadwalIbadah/IbadahAkhirBulan.vue";
import IbadahPAM from "./components/layouts/JadwalIbadah/IbadahPAM.vue";
import IbadahDetail from "./components/layouts/JadwalIbadah/IbadahDetail.vue";
import About from "./components/layouts/About/About.vue";
import Katekisasi from "./components/layouts/Layanan/Katekisasi/Katekisasi.vue";
import Baptis from "./components/layouts/Layanan/Baptis/Baptis.vue";
import Sidi from "./components/layouts/Layanan/Sidi/Sidi.vue";
import Pernikahan from "./components/layouts/Layanan/Pernikahan/Pernikahan.vue";
import LayananSaya from "./components/layouts/Layanan/LayananSaya.vue";
import Event from "./components/layouts/Event/Event.vue";
import EventDetail from "./components/layouts/Event/EventDetail.vue";
import Galeri from "./components/layouts/Galeri/Galeri.vue";
import GaleriDetail from "./components/layouts/Galeri/GaleriDetail.vue";
import Kehadiran from "./components/layouts/Kehadiran/Kehadiran.vue";
import KehadiranDetail from "./components/layouts/Kehadiran/KehadiranDetail.vue";
import Renungan from "./components/layouts/Renungan/Renungan.vue";
import RenunganDetail from "./components/layouts/Renungan/RenunganDetail.vue";
import Khotbah from "./components/layouts/Khotbah/Khotbah.vue";
import Berita from "./components/layouts/Berita/Berita.vue";
import BeritaDetail from "./components/layouts/Berita/BeritaDetail.vue";
import Warta from "./components/layouts/Warta/Warta.vue";
import WartaDetail from "./components/layouts/Warta/WartaDetail.vue";
import Konseling from "./components/layouts/Konseling/Konseling.vue";
import KonselingSaya from "./components/layouts/Konseling/KonselingSaya.vue";
import Profile from "./components/layouts/Profile.vue";
import Login from "./components/layouts/Auth/Login.vue";
import LupaPassword from "./components/layouts/Auth/LupaPassword.vue";
import LupaUsername from "./components/layouts/Auth/LupaUsername.vue";
import UbahPassword from "./components/layouts/Auth/UbahPassword.vue";
import Register from "./components/layouts/Auth/Register.vue";

const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/lupa-password", name: "LupaPassword", component: LupaPassword },
  { path: "/lupa-username", name: "LupaUsername", component: LupaUsername },
  { path: "/ubah-password", name: "UbahPassword", component: UbahPassword },
  { path: "/register", name: "Register", component: Register },
  { path: "/", name: "Main", component: Main },
  { path: "/jadwal-ibadah/rayon", name: "Rayon", component: Rayon },
  { path: "/jadwal-ibadah/ibadah-umum", name: "IbadahUmum", component: IbadahUmum },
  { path: "/jadwal-ibadah/ibadah-akhirBulan", name: "IbadahAkhirBulan", component: IbadahAkhirBulan },
  { path: "/jadwal-ibadah/detail/:id", name: "IbadahDetail", component: IbadahDetail },
  { path: "/jadwal-ibadah/ibadah-PAM", name: "IbadahPAM", component: IbadahPAM },
  { path: "/about", name: "About", component: About },
  { path: "/layanan/katekisasi", name: "Katekisasi", component: Katekisasi, meta: { requiresAuth: true } },
  { path: "/layanan/baptis", name: "Baptis", component: Baptis, meta: { requiresAuth: true } },
  { path: "/layanan/sidi", name: "Sidi", component: Sidi, meta: { requiresAuth: true } },
  { path: "/layanan/pernikahan", name: "Pernikahan", component: Pernikahan, meta: { requiresAuth: true } },
  { path: "/informasi/event", name: "Event", component: Event },
  { path: "/informasi/event/detail/:id", name: "EventDetail", component: EventDetail },
  { path: "/informasi/galeri", name: "Galeri", component: Galeri },
  { path: "/informasi/galeri/detail/:id", name: "GaleriDetail", component: GaleriDetail },
  { path: "/informasi/kehadiran", name: "Kehadiran", component: Kehadiran },
  { path: "/informasi/kehadiran/detail/:id", name: "KehadiranDetail", component: KehadiranDetail },
  { path: "/lainnya/renungan", name: "Renungan", component: Renungan },
  { path: "/lainnya/renungan/detail/:id", name: "RenunganDetail", component: RenunganDetail },
  { path: "/lainnya/khotbah", name: "Khotbah", component: Khotbah },
  { path: "/lainnya/berita", name: "Berita", component: Berita },
  { path: "/lainnya/berita/detail/:id", name: "BeritaDetail", component: BeritaDetail },
  { path: "/lainnya/warta-jemaat", name: "Warta", component: Warta },
  { path: "/lainnya/warta/detail/:id", name: "WartaDetail", component: WartaDetail },
  { path: "/jadwal-konseling", name: "Konseling", component: Konseling, meta: { requiresAuth: true } },
  { path: "/konseling-saya", name: "KonselingSaya", component: KonselingSaya, meta: { requiresAuth: true } },
  { path: "/layanan-saya", name: "LayananSaya", component: LayananSaya, meta: { requiresAuth: true } },
  { path: "/profile", name: "Profile", component: Profile, meta: { requiresAuth: true } },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
// fungsi global guard yang akan dieksekusi setiap kali navigasi terjadi. 
// to => halaman tujuan, from => halaman asal(halaman sebelumnya), next => fungsi untuk melanjutkan navigasi
router.beforeEach((to, from, next) => { // digunakan untuk mengelola akses ke halaman halaman tertentu berdasarkan status autentikasi pengguna.
  const token = localStorage.getItem("token"); // digunakan untuk mengambil token. 

  // Jika user sudah login dan mencoba mengakses halaman login atau register, arahkan ke halaman utama
  if ((to.path === "/login" || to.path === "/register") && token) {
    next("/");
  }
  // Jika halaman memerlukan autentikasi dan tidak ada token, arahkan ke halaman login
  else if (to.matched.some((record) => record.meta.requiresAuth) && !token) { // record.meta.requiresAuth adalah properti yang ditetapkan pada rute untuk menandai bahwa halaman tersebut memerlukan autentikasi.
    next("/login");
  } else {
    next();
  }
});

const app = createApp({
  render: () => h(App),
});
app.use(router);
app.mount("#app");
