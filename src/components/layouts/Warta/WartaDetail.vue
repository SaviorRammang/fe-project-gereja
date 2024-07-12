<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div v-if="warta" data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Detail Warta</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/lainnya/warta-jemaat">Warta</router-link></li>
          <li class="current">Warta Detail</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <!-- Blog Section - Blog Page -->
  <div
    v-if="warta"
    class="container my-5"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div class="row posts-list">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">{{ warta.judul }}</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4">
              <table class="mb-4">
                <tr>
                  <td class="fw-bold">Tanggal</td>
                  <td style="padding: 0 20px">:</td>
                  <td>{{ moment(warta.tanggal).format("DD-MM-YYYY") }}</td>
                </tr>
              </table>
            </div>
            <div class="col-md-8 w-full pdf-object">
              <object
                :data="pdfUrl + warta.file_warta"
                type="application/pdf"
              ></object>
              <!-- <iframe :src="pdfUrl + warta.file_warta" width="800" height="500"></iframe> -->
            </div>
          </div>
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

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

export default {
  data() {
    return {
      warta: ref(null),
      moment,
      pdfUrl: ref(import.meta.env.VITE_IMG_URL),
    };
  },

  mounted() {
    const id = this.$route.params.id;

    axios.get(`${URL_BACKEND}/get-detail-warta/${id}`).then((response) => {
      console.log(response.data.data);
      this.warta = response.data.data;
    });
  },
};
</script>
<style>
.pdf-object {
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* Atur ini sesuai dengan rasio aspek PDF Anda */
  position: relative;
}

.pdf-object object {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
