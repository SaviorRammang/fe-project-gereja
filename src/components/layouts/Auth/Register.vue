<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Sign-Up</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li class="current">Sign-Up</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <div class="alert alert-danger" role="alert" v-if="Object.keys(errors).length > 0">
      <ul>
        <li v-for="(error, index) in errors.value" :key="index">{{ error[0] }}</li>
      </ul>
    </div>
    <div class="alert alert-danger" role="alert" v-if="Object.keys(errors_b).length > 0">
      <ul>
        <li v-for="(error, index) in errors_b" :key="index">{{ error[0] }}</li>
      </ul>
    </div>

    <form @submit.prevent="registerUser" class="row flex justify-content-center">
      <div class="col-md-6 col-sm-12">
        <div class="mb-4">
          <label for="name" class="form-label fw-bold">Nama</label>
          <input type="text" class="form-control" name="name" id="name" placeholder="Masukkan Nama" required v-model="user.name" />
        </div>
        <div class="mb-4">
          <label for="username" class="form-label fw-bold">Username</label>
          <input type="text" class="form-control" name="username" id="username" placeholder="Masukkan Username" required v-model="user.username" />
        </div>
        <div class="mb-4">
          <label for="email" class="form-label fw-bold">Email</label>
          <input type="email" class="form-control" name="email" id="email" placeholder="Masukkan Email" required v-model="user.email" />
        </div>
        <div class="mb-4">
          <label for="phone" class="form-label fw-bold">No. Telepon</label>
          <input type="number" class="form-control" name="phone" id="phone" placeholder="Masukkan No. Telepon" required v-model="user.phone" />
        </div>
        <div class="mb-4">
          <label for="rayon_id" class="form-label fw-bold">Rayon</label>
          <select class="form-select" name="rayon_id" aria-label="Rayon Calon Istri" required v-model="user.rayon_id">
            <option value="">Pilih Rayon</option>
            <option v-for="(rayon, index) in rayons" :key="index" :value="rayon.id">Rayon {{ rayon.nomor_rayon }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="tempat_lahir" class="form-label fw-bold">Tempat Lahir</label>
          <input type="text" class="form-control" name="tempat_lahir" id="tempat_lahir" placeholder="Masukkan Tempat Lahir" required v-model="user.tempat_lahir" />
        </div>
        <div class="mb-4">
          <label for="tanggal_lahir" class="form-label fw-bold">Tanggal Lahir</label>
          <input type="date" class="form-control" name="tanggal_lahir" id="tanggal_lahir" required v-model="user.tanggal_lahir" />
        </div>
        <div class="mb-4">
          <label for="password" class="form-label fw-bold">Password</label>
          <input type="password" class="form-control" name="password" id="password" placeholder="Masukkan Password" required v-model="user.password" />
        </div>
        <div class="mb-4">
          <label for="konf_password" class="form-label fw-bold">Konfirmasi Password</label>
          <input type="password" class="form-control" name="konf_password" id="konf_password" placeholder="Masukkan Konfirmasi Password" required v-model="user.konf_password" />
        </div>
        <span class="fs-6">Sudah Terdaftar Sebagai Jemaat? <router-link to="/login">Sign-In</router-link></span>
        <div class="w-full mt-4">
          <button type="submit" class="btn btn-danger register" :disabled="isSubmitting">Daftar</button>
        </div>
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

const $ = jQuery;
window.$ = $;

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

export default {
  data() {
    return {
      rayons: ref([]),
      user: {
        name: "",
        rayon_id: "",
        username: "",
        email: "",
        phone: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        password: "",
        konf_password: "",
      },
      errors: ref({}),
      errors_b: ref({}),
      isSubmitting: false,
    };
  },

  mounted() {
    axios.get(`${URL_BACKEND}/get-single-rayon`).then((response) => {
      console.log(response.data.data);
      this.rayons = response.data.data;
    });
  },
  methods: {
    validateForm() {
      if (this.user.password !== this.user.konf_password) {
        this.errors.value = { ...this.errors.value, konf_password: ["Password dan konfirmasi password tidak sama."] };
        return false;
      }
      return true;
    },
    registerUser() {
      if (!this.validateForm()) {
        return;
      }
      this.isSubmitting = true;
      $(".register").html("Loading...");
      axios
        .post(`${URL_BACKEND}/register-user`, this.user)
        .then((response) => {
          if (response.data.status === "success") {
            alert(response.data.message + ", Silahkan login!");
            this.$router.push("/login").then(() => {
              window.location.reload();
            });
          } else {
            this.isSubmitting = false;
            $(".register").html("Daftar");
            this.errors_b = response.data.errors;
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    },
  },
};
</script>

<style></style>
