<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Event</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Event</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <h5 class="form-label fw-bold">Cari Berdasarkan Tanggal</h5>
    <form
      @submit.prevent="sortingEvent"
      class="row mb-5 mt-3 text-center align-items-center"
    >
      <div class="mb-4 col-md-4">
        <input
          type="date"
          class="form-control"
          name="tgl_awal"
          id="tgl_awal"
          required
          v-model="sorting_tgl.tgl_awal"
        />
      </div>
      <div class="mb-4 col-md-1">
        <h6 class="fw-bold">Sampai</h6>
      </div>
      <div class="mb-4 col-md-4">
        <input
          type="date"
          class="form-control"
          name="tgl_akhir"
          id="tgl_akhir"
          required
          v-model="sorting_tgl.tgl_akhir"
        />
      </div>
      <div class="mb-4 col-md-1">
        <button type="submit" class="btn btn-danger">Cari</button>
      </div>
    </form>
    <h5 class="form-label fw-bold">Cari Event</h5>
    <form
      @submit.prevent="searchEvent"
      class="row mb-5 mt-3 text-center align-items-center"
    >
      <div class="mb-4 col-md-4">
        <input
          type="text"
          class="form-control"
          name="tgl_awal"
          id="tgl_awal"
          v-model="search"
        />
      </div>
      <div class="mb-4 col-md-1">
        <button type="submit" class="btn btn-danger">Cari</button>
      </div>
    </form>
    <div class="row gy-4" v-if="events.length > 0">
      <div
        class="col-xl-4 col-md-6"
        v-for="(event, index) in events"
        data-aos="fade-up"
        data-aos-delay="100"
        :key="index"
      >
        <div class="card">
          <img
            class="card-img-top img-thumbnail"
            style="height: 250px"
            :src="imageUrl + event.foto"
            alt="Card image"
          />
          <div class="card-body">
            <h4 class="card-title">{{ event.title }}</h4>
            <p class="card-text">{{ event.tanggal }} | {{ event.waktu }}</p>
            <p class="card-text">{{ event.tempat }}</p>
            <p
              class="card-text"
              v-html="event.deskripsi.substring(0, 150) + '...'"
            ></p>
            <router-link
              :to="{ name: 'EventDetail', params: { id: event.id } }"
              class="btn btn-sm btn-danger"
              >Detail</router-link
            >
          </div>
        </div>
      </div>
      <!-- End post list item -->
    </div>
    <div class="row gy-4 text-center" v-else>
      <div class="col-md-12">
        <h5>Tidak ada data.</h5>
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

const $ = jQuery;
window.$ = $;

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

export default {
  data() {
    return {
      events: ref([]),
      imageUrl: ref(import.meta.env.VITE_IMG_URL),
      sorting_tgl: {
        tgl_awal: "",
        tgl_akhir: "",
      },
      search: "",
    };
  },

  mounted() {
    axios.get(`${URL_BACKEND}/get-all-events`).then((response) => {
      console.log(response.data.data);
      this.events = response.data.data;
    });
  },
  methods: {
    sortingEvent() {
      axios
        .post(`${URL_BACKEND}/sorting-events`, this.sorting_tgl)
        .then((response) => {
          if (response.data.status === "success") {
            this.events = response.data.data;
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchEvent() {
      axios
        .post(`${URL_BACKEND}/search-events`, { search: this.search })
        .then((response) => {
          if (response.data.status === "success") {
            this.events = response.data.data;
          } else {
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
