<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Jadwal Konseling</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Jadwal Konseling</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <form @submit.prevent="daftarKonseling" class="row g-5">
      <input type="hidden" name="user_id" v-model="data.user_id" />

      <div class="col-md-6 col-sm-12">
        <div class="mb-4">
          <label for="pendeta_id" class="form-label fw-bold">Pendeta</label>
          <select class="form-select" name="pendeta_id" aria-label="Pendeta" required v-model="data.pendeta_id">
            <option value="">Pilih Pendeta</option>
            <option v-for="(pendeta, index) in pendetas" :key="index" :value="pendeta.id">{{ pendeta.name }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="tanggal" class="form-label fw-bold">Tanggal</label>
          <input type="date" class="form-control" name="tanggal" id="tanggal" :min="minDate" required v-model="data.tanggal" />
        </div>
        <div class="mb-4">
          <label for="waktu" class="form-label fw-bold">Waktu</label>
          <select class="form-select" name="waktu" aria-label="Waktu" required v-model="data.waktu">
            <option value="">Pilih Waktu</option>
            <option value="08:00:00">08:00</option>
            <option value="09:00:00">09:00</option>
            <option value="10:00:00">10:00</option>
            <option value="11:00:00">11:00</option>
            <option value="14:00:00">14:00</option>
            <option value="15:00:00">15:00</option>
            <option value="16:00:00">16:00</option>
          </select>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="mb-4">
          <label for="pesan" class="form-label fw-bold">Pesan</label>
          <textarea name="pesan" id="pesan" class="form-control" rows="5" style="resize: none" required v-model="data.pesan"></textarea>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-end">
        <button type="submit" class="btn btn-danger daftar" :disabled="isSubmitting">Daftar</button>
      </div>
    </form>
  </div>
  <!-- End Blog Section -->
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import moment from "moment";
import jQuery from "jquery";
import CryptoJS from "crypto-js";

const $ = jQuery;
window.$ = $;

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

export default {
  data() {
    return {
      pendetas: ref([]),
      data: {
        user_id: "",
        pendeta_id: "",
        tanggal: "",
        waktu: "",
        pesan: "",
      },
      isSubmitting: false,
    };
  },

  computed: {
    today() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    minDate() {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const year = tomorrow.getFullYear();
      const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
      const day = String(tomorrow.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
  },

  mounted() {
    axios.get(`${URL_BACKEND}/get-pendeta`).then((response) => {
      console.log(response.data.data);
      this.pendetas = response.data.data;
    });
  },
  methods: {
    daftarKonseling() {
      this.isSubmitting = true;
      $(".daftar").html("Loading...");

      const token = localStorage.getItem("token");
      var bytes = CryptoJS.AES.decrypt(token, "my_very_secret_key_12345");
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      this.data.user_id = decryptedData[0].id;

      console.log(this.data);

      axios
        .post(`${URL_BACKEND}/create-konseling`, this.data)
        .then((response) => {
          console.log(response.data);
          if (response.data.status === "success") {
            alert(response.data.message);
            this.$router.push("/konseling-saya").then(() => {
              window.location.reload();
            });
          } else {
            this.isSubmitting = false;
            $(".daftar").html("Daftar");
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
<style></style>
