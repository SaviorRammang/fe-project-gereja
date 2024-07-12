<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Ibadah PAM</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Ibadah PAM</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <!-- Blog Section - Blog Page -->
  <div class="container my-5" data-aos="fade-up" data-aos-delay="100">
    <h5 class="form-label fw-bold">Cari Ibadah PAM</h5>
    <form @submit.prevent="searchEvent" class="row mb-5 mt-3 text-center align-items-center">
      <div class="mb-4 col-md-4">
        <input type="text" class="form-control" name="tgl_awal" id="tgl_awal" v-model="search" />
      </div>
      <div class="mb-4 col-md-1">
        <button type="submit" class="btn btn-danger">Cari</button>
      </div>
    </form>
    <div class="row posts-list">
      <div class="col-md-4" v-for="(pam, index) in pams" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Sektor {{ index + 1 }}</h5>
            <div class="list-group" v-for="(skt, index) in pam.sektor" :key="index">
              <li to="#" class="list-group-item list-group-item-action mt-2" aria-current="true">Rayon {{ skt.rayon.nomor_rayon }}</li>
            </div>
            <table class="mt-3">
              <tr>
                <td class="fw-bold">Tempat Ibadah</td>
                <td style="padding: 0 10px">:</td>
                <td>{{ pam.tempat_ibadah }}</td>
              </tr>
              <tr>
                <td class="fw-bold">Alamat</td>
                <td style="padding: 0 10px">:</td>
                <td>{{ pam.alamat_tempat_ibadah }}</td>
              </tr>
              <tr>
                <td class="fw-bold">Pelayan Firman</td>
                <td style="padding: 0 10px">:</td>
                <td>{{ pam.pelayan_firman }}</td>
              </tr>
              <tr>
                <td class="fw-bold">Pembawa Acara</td>
                <td style="padding: 0 10px">:</td>
                <td>{{ pam.pembawa_acara }}</td>
              </tr>
              <tr>
                <td class="fw-bold">Liturgos</td>
                <td style="padding: 0 10px">:</td>
                <td>{{ pam.liturgos }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- End pagination -->
  </div>
  <!-- End Blog Section -->
</template>
<script>
import { ref } from "vue";
import axios from "axios";

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

export default {
  data() {
    return {
      pams: ref([]),
      search: "",
    };
  },

  mounted() {
    // console.log(this.profile);
    axios.get(`${URL_BACKEND}/get-pam`).then((response) => {
      console.log(response.data.data);
      this.pams = response.data.data;
    });
  },

  methods: {
    searchEvent() {
      axios
        .post(`${URL_BACKEND}/search-pam`, { search: this.search })
        .then((response) => {
          if (response.data.status === "success") {
            this.pams = response.data.data;
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
