<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Ubah Password</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li class="current">Ubah Password</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <div class="alert alert-danger" role="alert" v-if="Object.keys(errors).length > 0">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error[0] }}</li>
      </ul>
    </div>

    <form @submit.prevent="ubahPassword" class="row flex justify-content-center">
      <div class="col-md-6 col-sm-12">
        <div class="mb-4">
          <label for="new_password" class="form-label fw-bold">Password Baru</label>
          <input type="password" class="form-control" name="new_password" id="new_password" placeholder="Masukkan Password Lama" required v-model="user.new_password" />
        </div>
        <div class="mb-4">
          <label for="confirm_password" class="form-label fw-bold">Konfirmasi Password Baru</label>
          <input type="password" class="form-control" name="confirm_password" id="confirm_password" placeholder="Masukkan Password Lama" required v-model="user.confirm_password" />
        </div>
        <div class="w-full mt-4">
          <button type="submit" class="btn btn-danger checkUser" :disabled="isSubmitting">Ubah</button>
        </div>
      </div>
    </form>
  </div>
  <!-- End Blog Section -->
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";
import jQuery from "jquery";

const $ = jQuery;
window.$ = $;

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

export default {
  data() {
    return {
      rayons: ref([]),
      user: {
        new_password: "",
        confirm_password: "",
      },
      errors: ref({}),
      isSubmitting: false,
      inactivityTimeout: null,
    };
  },

  mounted() {
    const check = localStorage.getItem("check");

    if (!check) {
      this.$router.push("/login").then(() => {
        window.location.reload();
      });
    }

    this.resetInactivityTimeout();
    document.addEventListener("mousemove", this.resetInactivityTimeout);
    document.addEventListener("keydown", this.resetInactivityTimeout);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  },

  beforeUnmount() {
    document.removeEventListener("mousemove", this.resetInactivityTimeout);
    document.removeEventListener("keydown", this.resetInactivityTimeout);
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
    clearTimeout(this.inactivityTimeout);
  },

  methods: {
    resetInactivityTimeout() {
      clearTimeout(this.inactivityTimeout);
      this.inactivityTimeout = setTimeout(this.handleInactivity, 300000); // 5 minutes
    },
    handleInactivity() {
      localStorage.removeItem("check");
      alert("Session expired due to inactivity.");
      this.$router.push("/login").then(() => {
        window.location.reload();
      });
    },
    handleVisibilityChange() {
      if (document.hidden) {
        localStorage.removeItem("check");
        alert("Session expired because you left the page.");
        this.$router.push("/login").then(() => {
          window.location.reload();
        });
      }
    },
    ubahPassword() {
      this.isSubmitting = true;
      $(".checkUser").html("Loading...");

      const username = localStorage.getItem("check");

      axios
        .post(`${URL_BACKEND}/change-password/${username}`, this.user)
        .then((response) => {
          if (response.data.status === "success") {
            localStorage.removeItem("check");
            alert(response.data.message);
            this.$router.push("/login").then(() => {
              window.location.reload();
            });
          } else {
            this.isSubmitting = false;
            $(".checkUser").html("Ubah");
            this.errors = response.data.errors;
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
