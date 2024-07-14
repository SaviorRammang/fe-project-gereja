<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Pendaftaran Layanan Sidi</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Sidi</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <div class="row g-5">
      <div class="col-md-6 d-flex justify-content-center">
        <iframe
          width="400"
          height="315"
          src="https://www.youtube.com/embed/cD3Z8V91Qcs"
        >
        </iframe>
      </div>
      <div class="col-md-6" style="text-align: justify; font-size: 20px">
        <p>
          Peneguhan Sidi dalam agama Kristen adalah salah satu tahapan penting
          dalam perjalanan iman seorang Kristen, khususnya dalam tradisi gereja
          Protestan. Peneguhan Sidi menandai momen di mana seorang anggota
          gereja secara pribadi dan publik mengukuhkan komitmen mereka kepada
          iman Kristen dan mengakui iman mereka di hadapan jemaat. Peneguhan
          Sidi menandakan bahwa individu tersebut telah mencapai tingkat
          kedewasaan rohani tertentu. Ini menunjukkan bahwa mereka telah belajar
          dan memahami ajaran iman Kristen dan siap untuk mengambil tanggung
          jawab yang lebih besar dalam gereja.
        </p>
      </div>
    </div>
  </div>

  <div class="container my-5">
    <div class="row gy-4 d-flex justify-content-center">
      <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Siapa yang bisa mengikuti Peneguhan Sidi?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style="text-align: justify">
                Peneguhan Sidi biasanya diikuti oleh anggota gereja yang telah
                mencapai usia remaja atau dewasa muda dan telah menyelesaikan
                kelas katekisasi. Usia pastinya dapat bervariasi tergantung pada
                kebijakan masing-masing gereja.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Mengapa Peneguhan Sidi penting?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style="text-align: justify">
                Peneguhan Sidi penting karena ini adalah momen di mana individu
                secara pribadi dan publik menyatakan iman mereka kepada Tuhan.
                Ini juga menandai transisi ke tingkat kedewasaan rohani dan
                keterlibatan yang lebih besar dalam kehidupan gereja.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Siapa yang bisa mengikuti Peneguhan Sidi?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style="text-align: justify">
                Peneguhan Sidi biasanya diikuti oleh anggota gereja yang telah
                mencapai usia remaja atau dewasa muda dan telah menyelesaikan
                kelas katekisasi. Usia pastinya dapat bervariasi tergantung pada
                kebijakan masing-masing gereja.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container my-5">
    <div class="row mb-5">
      <div class="col-md-4">
        <select
          class="form-select"
          @change="changeJenis($event)"
          name="jenis"
          aria-label="Jenis Sidi"
          required
          v-model="jenis_download"
        >
          <option value="Sidi Reguler">Sidi Reguler</option>
          <option value="Sidi Dewasa">Sidi Dewasa</option>
        </select>
      </div>
      <div class="col-md-2">
        <a
          :href="PDF_URL + 'download-file?jenis=' + jenis_download"
          class="btn btn-danger"
          target="_blank"
          >Download File Kosong</a
        >
      </div>
    </div>

    <form @submit.prevent="pendaftaranLayanan" class="row g-5">
      <input type="hidden" name="user_id" v-model="data.user_id" />
      <div class="col-md-6 col-sm-12">
        <div class="mb-4">
          <label for="jenis" class="form-label fw-bold">Jenis Sidi</label>
          <select
            class="form-select"
            name="jenis"
            aria-label="Jenis Sidi"
            required
            v-model="data.jenis"
          >
            <option value="">Pilih Jenis Sidi</option>
            <option value="Sidi Reguler">Sidi Reguler</option>
            <option value="Sidi Dewasa">Sidi Dewasa</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="pendeta_id" class="form-label fw-bold"
            >Nama Pendeta</label
          >
          <select
            class="form-select"
            name="pendeta_id"
            aria-label="Pendeta"
            required
            v-model="data.pendeta_id"
          >
            <option value="">Pilih Pendeta</option>
            <option
              v-for="(pendeta, index) in pendetas"
              :key="index"
              :value="pendeta.id"
            >
              {{ pendeta.name }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label for="nama" class="form-label fw-bold">Nama Lengkap</label>
          <input
            type="text"
            class="form-control"
            name="nama"
            id="nama"
            required
            v-model="data.nama"
          />
        </div>
        <div class="mb-4">
          <label for="tanggal_lahir" class="form-label fw-bold"
            >Tanggal Lahir</label
          >
          <input
            type="date"
            class="form-control"
            name="tanggal_lahir"
            id="tanggal_lahir"
            required
            v-model="data.tanggal_lahir"
          />
        </div>
        <div class="mb-4">
          <label for="tempat_lahir" class="form-label fw-bold"
            >Tempat Lahir</label
          >
          <input
            type="text"
            class="form-control"
            name="tempat_lahir"
            id="tempat_lahir"
            required
            v-model="data.tempat_lahir"
          />
        </div>
        <div class="mb-4">
          <label for="nama_ayah" class="form-label fw-bold">Nama Ayah</label>
          <input
            type="text"
            class="form-control"
            name="nama_ayah"
            id="nama_ayah"
            required
            v-model="data.nama_ayah"
          />
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="mb-4">
          <label for="nama_ibu" class="form-label fw-bold">Nama Ibu</label>
          <input
            type="text"
            class="form-control"
            name="nama_ibu"
            id="nama_ibu"
            required
            v-model="data.nama_ibu"
          />
        </div>
        <div class="mb-4">
          <label for="alamat" class="form-label fw-bold">Alamat</label>
          <input
            type="text"
            class="form-control"
            name="alamat"
            id="alamat"
            required
            v-model="data.alamat"
          />
        </div>
        <div class="mb-4">
          <label for="tanggal" class="form-label fw-bold"
            >Tanggal Mendaftar</label
          >
          <input
            type="date"
            class="form-control"
            name="tanggal"
            :min="today"
            id="tanggal"
            required
            v-model="data.tanggal"
          />
        </div>
        <div class="mb-4">
          <p style="font-weight: bold">Persyaratan :</p>
          <ul>
            <li>1. Foto copy Surat Baptis 1 Lembar.</li>
            <li>2. Foto copy Akte Kelahiran 1 Lembar.</li>
            <li>
              3. Persyaratan dimasukan ke dalam MAP berwarna BIRU (Regular).
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-end">
        <button
          type="submit"
          class="btn btn-danger daftar"
          :disabled="isSubmitting"
        >
          Daftar
        </button>
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
const PDF_URL = import.meta.env.VITE_PDF_URL;

export default {
  data() {
    return {
      pendetas: ref([]),
      data: {
        user_id: "",
        jenis: "",
        pendeta_id: "",
        nama: "",
        tanggal_lahir: "",
        tempat_lahir: "",
        nama_ayah: "",
        nama_ibu: "",
        alamat: "",
        kondisi_baptis: "Jemaat GKI Kasih Perumnas",
        tempat_kondisi: "Klasis Sorong",
        tanggal: "",
      },
      isSubmitting: false,
      PDF_URL,
      jenis_download: "Sidi Reguler",
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
  },

  mounted() {
    axios.get(`${URL_BACKEND}/get-pendeta`).then((response) => {
      console.log(response.data.data);
      this.pendetas = response.data.data;
    });
  },

  methods: {
    pendaftaranLayanan() {
      this.isSubmitting = true;
      $(".daftar").html("Loading...");

      const token = localStorage.getItem("token");
      var bytes = CryptoJS.AES.decrypt(token, "my_very_secret_key_12345");
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      this.data.user_id = decryptedData[0].id;

      console.log(this.data);

      axios
        .post(`${URL_BACKEND}/create-pendaftaran`, this.data)
        .then((response) => {
          console.log(response.data);
          if (response.data.status === "success") {
            alert(response.data.message);
            this.$router.push("/layanan-saya").then(() => {
              window.location.reload();
            });
          } else {
            this.isSubmitting = false;
            $(".daftar").html("Daftar");
            alert("Gagal mendaftar!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    changeJenis(event) {
      this.jenis_download = event.target.value;
    },
  },
};
</script>
<style></style>
