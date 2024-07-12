<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">About</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">About</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <div class="row g-5">
      <div class="col-md-6">
        <h3 class="fw-bold">Sejarah</h3>
        <p v-html="sejarah"></p>
      </div>
      <div class="col-md-6">
        <h3 class="fw-bold">Visi</h3>
        <p v-html="visi"></p>
        <h3 class="fw-bold">Misi</h3>
        <p v-html="misi"></p>
      </div>
      <div class="container section-title mt-5" data-aos="fade-up">
        <h2>Masa Jabatan Pendeta</h2>
      </div>
      <div class="row">
        <div class="col-md-4 text-center" v-for="(jabatan, index) in jabatans" :key="index">
          <div class="img-container">
            <img :src="imageUrl + jabatan.foto" :alt="jabatan.nama" class="img-thumbnail" />
          </div>
          <h4 class="mt-3">{{ jabatan.nama }}</h4>
          <h6>Masa Jabatan : {{ jabatan.awal_jabatan }} - {{ jabatan.akhir_jabatan }}</h6>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="container section-title pb-2" data-aos="fade-up">
      <h2>Struktur Organisasi</h2>
      <div class="row mt-5">
        <div class="col-md-6">
          <img src="/assets/img/struc_org1.jpeg" alt="struc_org1" class="img-fluid">
        </div>
        <div class="col-md-6">
          <img src="/assets/img/struc_org2.jpeg" alt="struc_org1" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
  <!-- End Blog Section -->
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import moment from "moment";
import jQuery from "jquery";

const $ = jQuery;
window.$ = $;

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

export default {
  components: {},
  data() {
    return {
      sejarah: "",
      visi: "",
      misi: "",
      jabatans: ref([]),
      imageUrl: ref(import.meta.env.VITE_IMG_URL),
      moment,
    };
  },

  mounted() {
    axios.get(`${URL_BACKEND}/get-profile`).then((response) => {
      console.log(response.data.data);
      this.sejarah = response.data.data.sejarah;
      this.visi = response.data.data.visi;
      this.misi = response.data.data.misi;
    });

    axios.get(`${URL_BACKEND}/get-jabatan`).then((response) => {
      console.log(response.data.data);
      this.jabatans = response.data.data;
    });
  },
};
</script>
<style>
.img-container {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* 1:1 Aspect Ratio */
  overflow: hidden;
}

.img-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image covers the container without distortion */
}
</style>
