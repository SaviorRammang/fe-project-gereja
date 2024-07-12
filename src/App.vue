<script setup>
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
</script>

<template>
  <!-- ======= Header ======= -->
  <Header />
  <!-- End Header -->

  <main id="main" class="h-100">
    <router-view />
  </main>

  <!-- ======= Footer ======= -->
  <Footer />
  <!-- End Footer -->

  <!-- Scroll Top Button -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <div id="preloader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped></style>
