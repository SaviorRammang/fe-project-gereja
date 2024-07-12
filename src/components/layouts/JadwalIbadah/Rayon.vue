<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Rayon</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Rayon</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <!-- Blog Section - Blog Page -->
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="mb-5">
      <h3 class="my-3">Ibadah PAR</h3>
      <div class="row posts-list">
        <div class="col-md-4" v-for="(rayon, index) in ibadah_par" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Rayon {{ rayon.nomor_rayon }}</h5>
              <table>
                <tr>
                  <td class="fw-bold">Nama Keluarga</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.nama_keluarga }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Alamat</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.alamat }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Tanggal Ibadah</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.tanggal }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Jam Ibadah</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.jam_ibadah }} WIT</td>
                </tr>
                <tr>
                  <td class="fw-bold">Pelayan Firman</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.pelayan_firman }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="fw-bold" />
    <div class="mb-5">
      <h3 class="my-3">Ibadah PKB</h3>
      <div class="row posts-list">
        <div class="col-md-4" v-for="(rayon, index) in ibadah_pkb" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Rayon {{ rayon.nomor_rayon }}</h5>
              <table>
                <tr>
                  <td class="fw-bold">Nama Keluarga</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.nama_keluarga }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Alamat</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.alamat }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Tanggal Ibadah</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.tanggal }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Jam Ibadah</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.jam_ibadah }} WIT</td>
                </tr>
                <tr>
                  <td class="fw-bold">Pelayan Firman</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.pelayan_firman }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="fw-bold" />
    <div class="mb-5">
      <h3 class="my-3">Ibadah PW</h3>
      <div class="row posts-list">
        <div class="col-md-4" v-for="(rayon, index) in ibadah_pw" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Rayon {{ rayon.nomor_rayon }}</h5>
              <table>
                <tr>
                  <td class="fw-bold">Nama Keluarga</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.nama_keluarga }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Alamat</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.alamat }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Tanggal Ibadah</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.tanggal }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Jam Ibadah</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.jam_ibadah }} WIT</td>
                </tr>
                <tr>
                  <td class="fw-bold">Pelayan Firman</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.pelayan_firman }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="fw-bold" />
    <div class="mb-5">
      <h3 class="my-3">Ibadah Keluarga</h3>
      <div class="row posts-list">
        <div
          class="col-md-4"
          v-for="(rayon, index) in ibadah_keluarga"
          :key="index"
        >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Rayon {{ rayon.nomor_rayon }}</h5>
              <table>
                <tr>
                  <td class="fw-bold">Nama Keluarga</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.nama_keluarga }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Alamat</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.alamat }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Tanggal Ibadah</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.tanggal }}</td>
                </tr>
                <tr>
                  <td class="fw-bold">Jam Ibadah</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.jam_ibadah }} WIT</td>
                </tr>
                <tr>
                  <td class="fw-bold">Pelayan Firman</td>
                  <td style="padding: 0 10px">:</td>
                  <td>{{ rayon.pelayan_firman }}</td>
                </tr>
              </table>
            </div>
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
      ibadah_pw: ref([]),
      ibadah_pkb: ref([]),
      ibadah_par: ref([]),
      ibadah_keluarga: ref([]),
    };
  },

  mounted() {
    // console.log(this.profile);
    axios.get(`${URL_BACKEND}/get-rayons`).then((response) => {
      console.log(response.data.data);
      // this.rayons = response.data.data;

      response.data.data.forEach((rayon) => {
        if (rayon.jenis_ibadah === "Ibadah PW") {
          // Jika jenis_ibadah adalah "Ibadah PW", maka data rayon akan didorong ke array ibadah_pw.
          this.ibadah_pw.push(rayon);
          console.log(this.ibadah_pw);
        } else if (rayon.jenis_ibadah === "Ibadah PKB") {
          // Jika jenis_ibadah adalah "Ibadah PKB", maka data rayon akan didorong ke array ibadah_pkb.
          this.ibadah_pkb.push(rayon);
          console.log(this.ibadah_pkb);
        } else if (rayon.jenis_ibadah === "Ibadah PAR") {
          // Jika jenis_ibadah adalah "Ibadah PAR", maka data rayon akan didorong ke array ibadah_par.
          this.ibadah_par.push(rayon);
          console.log(this.ibadah_par);
        } else if (rayon.jenis_ibadah === "Ibadah Keluarga") {
          // Jika jenis_ibadah adalah "Ibadah Keluarga", maka data rayon akan didorong ke array ibadah_keluarga.
          this.ibadah_keluarga.push(rayon);
          console.log(this.ibadah_keluarga);
        }
      });
    });
  },
};
</script>
