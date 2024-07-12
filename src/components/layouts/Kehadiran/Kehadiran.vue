<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Kehadiran Jemaat</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Kahadiran Jemaat</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <!-- <h5 class="form-label fw-bold">Cari Kehadiran</h5> -->
    <!-- <form @submit.prevent="searchEvent" class="row mb-5 mt-3 text-center align-items-center">
      <div class="mb-4 col-md-4">
        <input type="text" class="form-control" name="tgl_awal" id="tgl_awal" v-model="search" />
      </div>
      <div class="mb-4 col-md-1">
        <button type="submit" class="btn btn-danger">Cari</button>
      </div>
    </form> -->
    <div class="row g-5 m-5">
      <div
        class="col-md-12 p-3 rounded row mb-3"
        style="background-color: lightgray"
        v-for="(kehadiran, index) in kehadirans"
        :key="index"
      >
        <div class="col-md-1 bg-danger rounded text-light text-center p-2">
          <span>{{
            kehadiran.anak +
            kehadiran.pemuda +
            kehadiran.wanita +
            kehadiran.pria
          }}</span
          ><br />
          <span>Orang</span>
        </div>
        <div class="col-md-6">
          <h5>{{ moment(kehadiran.ibadah.tanggal).format("DD MMMM YYYY") }}</h5>
          <router-link
            :to="{ name: 'KehadiranDetail', params: { id: kehadiran.id } }"
            class="btn btn-danger"
            >Lihat Detail</router-link
          >
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
      kehadirans: ref([]),
      moment,
      search: "",
    };
  },

  mounted() {
    axios.get(`${URL_BACKEND}/get-kehadiran`).then((response) => {
      console.log(response.data.data);
      this.kehadirans = response.data.data;
    });
  },

  // methods: {
  //   searchEvent() {
  //     axios
  //       .post(`${URL_BACKEND}/search-kehadiran`, {
  //         params: {
  //           search: this.search,
  //         },
  //       })
  //       .then((response) => {
  //         console.log(response.data.data);
  //         this.kehadirans = response.data.data;
  //       });
  //   },
  // },
};
</script>
<style></style>
