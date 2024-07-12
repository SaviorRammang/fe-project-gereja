<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Sign-In</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li class="current">Sign-In</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <div class="row d-flex align-items-center">
      <div class="col-md-6">
        <img src="/assets/img/Login_bro.png" alt="sign-in" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <form @submit.prevent="loginUser" class="row d-flex justify-content-center">
          <input type="hidden" name="user_id" value="1" />

          <div class="col-md-6 col-sm-12">
            <div class="mb-4">
              <label for="username" class="form-label fw-bold">Username</label>
              <input type="text" class="form-control" name="username" id="username" placeholder="Masukkan Username" v-model="user.username" required />
            </div>
            <div class="mb-4">
              <label for="password" class="form-label fw-bold">Password</label>
              <input type="password" class="form-control" name="password" id="password" placeholder="Masukkan Password" v-model="user.password" required />
            </div>
            <div class="d-flex flex-column">
              <span class="fs-6 mb-3">Belum terdaftar sebagai jemaat? <router-link to="/register">Daftar</router-link></span>
              <span class="fs-6">Lupa password? <router-link to="/lupa-password">Ubah</router-link></span>
              <span class="fs-6">Lupa username? <router-link to="/lupa-username">Ganti</router-link></span>
            </div>
            <div class="w-full mt-4">
              <button type="submit" class="btn btn-danger login" :disabled="isSubmitting">Login</button>
            </div>
          </div>
        </form>
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
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import CryptoJS from "crypto-js";

const $ = jQuery;
window.$ = $;

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

const SECRET_KEY = "my_very_secret_key_12345";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      isSubmitting: false,
    };
  },

  mounted() {},
  methods: {
    loginUser() {
      this.isSubmitting = true;
      $(".login").html("Loading...");
      axios
        .post(`${URL_BACKEND}/login-user`, this.user)
        .then((response) => {
          if (response.data.status === "success") {
            const encryptedId = CryptoJS.AES.encrypt(JSON.stringify([{ id: response.data.id }]), SECRET_KEY).toString();
            localStorage.setItem("token", encryptedId);
            alert(response.data.message);
            this.$router.push("/").then(() => {
              window.location.reload();
            });
          } else {
            this.isSubmitting = false;
            $(".login").html("Login");
            alert(response.data.message + ", Kesalahan username atau password!");
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
