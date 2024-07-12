<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Lupa Username</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li class="current">Lupa Username</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5" style="height: 50vh;">
    <div class="alert alert-danger" role="alert" v-if="Object.keys(errors).length > 0">
      <ul>
        <li v-for="(error, index) in errors.value" :key="index">{{ error[0] }}</li>
      </ul>
    </div>

    <form @submit.prevent="ubahPassword" class="row flex justify-content-center">
      <div class="col-md-6 col-sm-12">
        <div class="mb-4">
          <label for="nama" class="form-label fw-bold">Nama Lengkap</label>
          <input type="text" class="form-control" name="nama" id="nama" placeholder="Masukkan Nama Lengkap" required v-model="user.nama" />
        </div>
        <div class="w-full mt-4">
          <router-link to="/login" class="btn btn-secondary me-2">Kembali</router-link>
          <button type="submit" class="btn btn-danger checkUser" :disabled="isSubmitting">Check</button>
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
        nama: "",
      },
      errors: ref({}),
      isSubmitting: false,
      useAlternateOption: false, // New boolean to toggle between input sets
    };
  },

  mounted() {},
  methods: {
    ubahPassword() {
      this.isSubmitting = true;
      $(".checkUser").html("Loading...");
      axios
        .post(`${URL_BACKEND}/ubah-username`, this.user)
        .then((response) => {
          if (response.data.status === "success") {
            alert(response.data.message);
            this.$router.push("/login").then(() => {
              window.location.reload();
            });
          } else {
            this.isSubmitting = false;
            $(".checkUser").html("Check");
            alert(response.data.message);
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
