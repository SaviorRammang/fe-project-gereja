<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Galeri</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Galeri</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <div class="row gy-4">
      <div class="col-xl-3 col-md-6" v-for="(galeri, index) in galeris" data-aos="fade-up" data-aos-delay="100" :key="index">
        <router-link :to="{ name: 'GaleriDetail', params: { id: galeri.id } }">
          <div class="card">
            <img class="card-img-top img-thumbnail" style="height: 200px" :src="imageUrl + galeri.foto" :alt="galeri.judul" />
          </div>
        </router-link>
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
      galeris: ref([]),
      imageUrl: ref(import.meta.env.VITE_IMG_URL),
    };
  },

  mounted() {
    axios.get(`${URL_BACKEND}/get-all-galeri`).then((response) => {
      console.log(response.data.data);
      this.galeris = response.data.data;
    });
  },
  methods: {},
};
</script>
<style></style>
