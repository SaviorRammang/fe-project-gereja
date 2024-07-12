<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div v-if="berita" data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Detail Berita</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/lainnya/berita">Berita</router-link></li>
          <li class="current">Berita Detail</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <!-- Blog Section - Blog Page -->
  <div v-if="berita" class="container my-5" data-aos="fade-up" data-aos-delay="100">
    <div class="row posts-list">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">{{ berita.judul }}</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-8">
              <h4 class="my-3">{{ berita.subjudul }}</h4>
              <table>
                <tr>
                  <td class="fw-bold">Tanggal Publish</td>
                  <td style="padding: 0 20px">:</td>
                  <td>{{ moment(berita.created_at).format("DD-MM-YYYY") }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Waktu Publish</td>
                  <td style="padding: 0 20px">:</td>
                  <td>{{ moment(berita.created_at, "HH:mm:ss").format("HH:mm") }} WIT</td>
                </tr>
              </table>
              <div class="mt-3" v-html="berita.isi"></div>
            </div>
            <div class="col-md-4">
              <img :src="imageUrl + berita.foto" alt="berita Image" class="img-fluid img-thumbnail" style="max-height: 400px" />
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
      berita: ref(null),
      moment,
      imageUrl: ref(import.meta.env.VITE_IMG_URL),
    };
  },

  mounted() {
    const id = this.$route.params.id;

    axios.get(`${URL_BACKEND}/get-detail-berita/${id}`).then((response) => {
      console.log(response.data.data);
      this.berita = response.data.data;
    });
  },
};
</script>
