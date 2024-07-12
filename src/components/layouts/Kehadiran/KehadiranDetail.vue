<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div v-if="kehadiran" data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Detail Kehadiran</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li>
            <router-link to="/informasi/kehadiran">Kehadiran</router-link>
          </li>
          <li class="current">Kehadiran Detail</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <!-- Blog Section - Blog Page -->
  <div
    v-if="kehadiran"
    class="container my-5"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div class="row posts-list">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">
            Kehadiran {{ kehadiran.ibadah.jenis }} | {{ kehadiran.ibadah.tema }}
          </h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead class="text-center">
                    <tr>
                      <th>Jenis</th>
                      <th>Tema</th>
                      <th>Pria</th>
                      <th>Wanita</th>
                      <th>Anak dan Remaja</th>
                      <th>Pemuda</th>
                      <th>Tanggal</th>
                    </tr>
                  </thead>
                  <tbody class="text-center">
                    <tr>
                      <td>{{ kehadiran.ibadah.jenis }}</td>
                      <td>{{ kehadiran.ibadah.tema }}</td>
                      <td>{{ kehadiran.pria }}</td>
                      <td>{{ kehadiran.wanita }}</td>
                      <td>{{ kehadiran.anak }}</td>
                      <td>{{ kehadiran.pemuda }}</td>
                      <td>
                        {{
                          moment(kehadiran.ibadah.tanggal).format(
                            "DD MMMM YYYY"
                          )
                        }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
      kehadiran: ref(null),
      moment,
      imageUrl: ref(import.meta.env.VITE_IMG_URL),
    };
  },

  mounted() {
    const id = this.$route.params.id;

    axios.get(`${URL_BACKEND}/get-detail-kehadiran/${id}`).then((response) => {
      console.log(response.data.data);
      this.kehadiran = response.data.data;
    });
  },
};
</script>
