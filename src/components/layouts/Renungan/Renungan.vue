<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Renungan</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Renungan</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <h5 class="form-label fw-bold">Cari Renungan</h5>
    <form @submit.prevent="searchEvent" class="row mb-5 mt-3 text-center align-items-center">
      <div class="mb-4 col-md-4">
        <input type="text" class="form-control" name="tgl_awal" id="tgl_awal" v-model="search" />
      </div>
      <div class="mb-4 col-md-1">
        <button type="submit" class="btn btn-danger">Cari</button>
      </div>
    </form>
    <div class="row gy-4">
      <div class="col-xl-4 col-md-6" v-for="(renungan, index) in renungans" data-aos="fade-up" data-aos-delay="100" :key="index">
        <div class="card">
          <img class="card-img-top img-thumbnail" style="height: 250px" :src="imageUrl + renungan.foto" alt="Card image" />
          <div class="card-body">
            <h4 class="card-title">{{ renungan.tema }}</h4>
            <p class="card-text">{{ renungan.tanggal }} | {{ renungan.waktu }}</p>
            <p class="card-text" v-html="renungan.deskripsi.substring(0, 150) + '...'"></p>
            <router-link :to="{ name: 'RenunganDetail', params: { id: renungan.id } }" class="btn btn-sm btn-primary me-2">Detail</router-link>
            <a :href="renungan.link" target="_blank" class="btn btn-sm btn-danger">Lihat Video</a>
          </div>
        </div>
      </div>
      <!-- End post list item -->
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
  data() {
    return {
      renungans: ref([]),
      imageUrl: ref(import.meta.env.VITE_IMG_URL),
      search: "",
    };
  },

  mounted() {
    axios.get(`${URL_BACKEND}/get-renungans`).then((response) => {
      console.log(response.data.data);
      this.renungans = response.data.data;
    });
  },

  methods: {
    searchEvent() {
      axios
        .post(`${URL_BACKEND}/search-renungan`, {
          search: this.search,
        })
        .then((response) => {
          console.log(response.data.data);
          this.renungans = response.data.data;
        });
    },
  },
};
</script>
<style></style>
