<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Ibadah Akhir Bulan</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Ibadah Akhir Bulan</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <!-- Blog Section - Blog Page -->
  <div class="container my-5" data-aos="fade-up" data-aos-delay="100">
    <h5 class="form-label fw-bold">Cari Ibadah Akhir Bulan</h5>
    <form
      @submit.prevent="searchEvent"
      class="row mb-5 mt-3 text-center align-items-center"
    >
      <div class="mb-4 col-md-4">
        <input
          type="text"
          class="form-control"
          name="tgl_awal"
          id="tgl_awal"
          v-model="search"
        />
      </div>
      <div class="mb-4 col-md-1">
        <button type="submit" class="btn btn-danger">Cari</button>
      </div>
    </form>
    <div class="row posts-list">
      <div class="col-md-4" v-for="(akhir, index) in akhirs" :key="index">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-3">{{ akhir.tema }}</h4>
            <table>
              <tr>
                <td class="fw-bold">Pendamping Pendeta</td>
                <td style="padding: 0 20px">:</td>
                <td>{{ akhir.pendamping_pendeta }}</td>
              </tr>
              <tr>
                <td class="fw-bold">Pemain Musik</td>
                <td style="padding: 0 20px">:</td>
                <td>{{ akhir.pemain_musik }}</td>
              </tr>
              <tr>
                <td class="fw-bold">Pembaca Warta</td>
                <td style="padding: 0 20px">:</td>
                <td>{{ akhir.pembaca_warta }}</td>
              </tr>
              <tr>
                <td class="fw-bold">Pendeta</td>
                <td style="padding: 0 20px">:</td>
                <td>{{ akhir.pendeta.name }}</td>
              </tr>
              <tr>
                <td class="fw-bold">Tanggal</td>
                <td style="padding: 0 20px">:</td>
                <td>{{ akhir.tanggal }}</td>
              </tr>
              <tr>
                <td class="fw-bold">Waktu</td>
                <td style="padding: 0 20px">:</td>
                <td>{{ akhir.waktu }} WIT</td>
              </tr>
            </table>
          </div>
          <div class="card-footer">
            <router-link
              :to="{ name: 'IbadahDetail', params: { id: akhir.id } }"
              class="btn btn-danger"
              >Detail</router-link
            >
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
      akhirs: ref([]),
      search: "",
    };
  },

  mounted() {
    // console.log(this.profile);
    axios.get(`${URL_BACKEND}/get-akhirBulan`).then((response) => {
      console.log(response.data.data);
      this.akhirs = response.data.data;
    });
  },

  methods: {
    searchEvent() {
      axios
        .post(`${URL_BACKEND}/search-akhirBulan`, { search: this.search })
        .then((response) => {
          if (response.data.status === "success") {
            this.akhirs = response.data.data;
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
