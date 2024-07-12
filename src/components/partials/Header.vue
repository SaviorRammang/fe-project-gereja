<template>
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <router-link to="/" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1>KasihPerumnas</h1>
        <span>.</span>
      </router-link>

      <!-- Nav Menu -->
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><router-link to="/" :class="{ active: isActive('/') }">Home</router-link></li>
          <li><router-link to="/about" :class="{ active: isActive('/about') }">About</router-link></li>
          <li class="dropdown has-dropdown active">
            <a href="#" :class="{ active: isActive('/jadwal-ibadah') }"><span>Jadwal Ibadah</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="dd-box-shadow">
              <li><router-link aria-current="page" to="/jadwal-ibadah/rayon">Rayon</router-link></li>
              <li><router-link aria-current="page" to="/jadwal-ibadah/ibadah-umum">Ibadah Umum</router-link></li>
              <li><router-link aria-current="page" to="/jadwal-ibadah/ibadah-akhirBulan">Ibadah Akhir Bulan</router-link></li>
              <li><router-link aria-current="page" to="/jadwal-ibadah/ibadah-PAM">Ibadah PAM</router-link></li>
            </ul>
          </li>
          <li class="dropdown has-dropdown">
            <a href="#" :class="{ active: isActive('/layanan') }"><span>Layanan</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="dd-box-shadow">
              <li><router-link to="/layanan/katekisasi">Katekisasi</router-link></li>
              <li><router-link to="/layanan/baptis">Baptis</router-link></li>
              <li><router-link to="/layanan/pernikahan">Pernikahan</router-link></li>
              <li><router-link to="/layanan/sidi">Sidi</router-link></li>
            </ul>
          </li>
          <li class="dropdown has-dropdown">
            <a href="#" :class="{ active: isActive('/informasi') }"><span>Informasi</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="dd-box-shadow">
              <li><router-link to="/informasi/event">Event</router-link></li>
              <li><router-link to="/informasi/galeri">Galeri</router-link></li>
              <li><router-link to="/informasi/kehadiran">Kehadiran</router-link></li>
            </ul>
          </li>
          <li class="dropdown has-dropdown">
            <a href="#" :class="{ active: isActive('/lainnya') }"><span>Lainnya</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="dd-box-shadow">
              <li><router-link to="/lainnya/renungan">Renungan</router-link></li>
              <li><router-link to="/lainnya/khotbah">Khotbah</router-link></li>
              <li><router-link to="/lainnya/berita">Berita</router-link></li>
              <li><router-link to="/lainnya/warta-jemaat">Warta Jemaat</router-link></li>
            </ul>
          </li>
          <li><router-link to="/jadwal-konseling" :class="{ active: isActive('/jadwal-konseling') }">Jadwal Konseling</router-link></li>
        </ul>

        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
      <!-- End Nav Menu -->

      <router-link class="btn-getstarted" to="/login" v-if="!is_login">Join Us</router-link>
      <div class="dropdown me-3" v-else>
        <button class="btn btn-danger btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Halo, {{ user.name }}</button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><router-link class="dropdown-item" to="/konseling-saya">Konseling Saya</router-link></li>
          <li><router-link class="dropdown-item" to="/layanan-saya">Layanan Saya</router-link></li>
          <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
          <hr />
          <li><button @click="logout" class="btn mx-auto">Logout</button></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import moment from "moment";
import jQuery from "jquery";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import CryptoJS from "crypto-js";

const $ = jQuery;
window.$ = $;

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

export default {
  data() {
    return {
      is_login: false,
      user: ref({}),
    };
  },
  mounted() {
    const token = localStorage.getItem("token");

    // console.log(decryptedData[0].id);

    if (token) {
      const SECRET_KEY = "my_very_secret_key_12345";
      var bytes = CryptoJS.AES.decrypt(token, SECRET_KEY);
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      axios.get(`${URL_BACKEND}/cek-login?id=${decryptedData[0].id}`).then((response) => {
        console.log(response.data);
        if (response.data.isLogin === true) {
          this.is_login = true;
          this.user = response.data.data;
        } else {
          this.is_login = false;
        }
      });
    } else {
      this.is_login = false;
    }
  },
  methods: {
    isActive(path) {
      if (path === "/") {
        return this.$route.path === path;
      }
      return this.$route.path.startsWith(path) && this.$route.path !== "/";
    },

    logout() {
      localStorage.removeItem("token");
      this.is_login = false;
      alert("Anda berhasil logout!");
      this.$router.push("/").then(() => {
        window.location.reload();
      });
    },
  },
};
</script>
<style scoped></style>
