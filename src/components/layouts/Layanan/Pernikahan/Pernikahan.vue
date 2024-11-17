<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Pendaftaran Layanan Pernikahan</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Pernikahan</li>
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
          src="https://www.youtube.com/embed/vSxiUbHBkyo"
        >
        </iframe>
      </div>
      <div class="col-md-6" style="text-align: justify; font-size: 20px">
        <p>
          Pernikahan dalam ajaran Kristen Protestan adalah sebuah institusi
          sakral yang mencerminkan hubungan kudus antara Kristus dan Gereja-Nya.
          Berdasarkan Alkitab, pernikahan adalah bagian dari tatanan ciptaan
          Tuhan dan gambaran dari hubungan antara Kristus dan Gereja. Pasangan
          Kristen mengucapkan janji untuk saling mencintai, menghormati, dan
          setia dalam segala situasi hidup. Kesetiaan, monogami, dan komitmen
          seumur hidup adalah nilai utama yang dijunjung dalam pernikahan
          Kristen. Pernikahan ini juga memiliki tujuan untuk membentuk keluarga,
          membesarkan anak-anak dalam iman Kristen, serta hidup dalam kesatuan
          dan kerjasama. Kehidupan rohani pasangan suami istri didukung melalui
          doa bersama, konseling, dan dukungan dari komunitas gereja. Resolusi
          konflik dan pengampunan menjadi elemen penting dalam menjaga
          keharmonisan hubungan, serta kesadaran akan kesakralan dan kekudusan
          pernikahan selalu ditekankan. Upacara pernikahan biasanya dilakukan di
          gereja dengan pemberkatan oleh pendeta, pengucapan janji, dan doa
          untuk pasangan.
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
                Bagaimana cara mempertahankan pernikahan Kristen yang kuat?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style="text-align: justify">
                Cara mempertahankan pernikahan Kristen yang kuat meliputi doa
                bersama, membaca Alkitab, menghadiri kebaktian gereja,
                berkomunikasi secara terbuka, saling mengampuni, dan mendukung
                satu sama lain dalam iman dan kehidupan sehari-hari.
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
                Apa yang diharapkan dari suami dan istri dalam pernikahan
                Kristen Protestan?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style="text-align: justify">
                Suami dan istri diharapkan untuk saling mencintai, menghormati,
                dan mendukung satu sama lain, mengikuti teladan Kristus dalam
                pengorbanan dan pelayanan. Mereka juga diharapkan untuk mendidik
                anak-anak mereka dalam iman Kristen dan terlibat aktif dalam
                kehidupan gereja.
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
                Apa tujuan dari pernikahan Kristen?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style="text-align: justify">
                Tujuan pernikahan Kristen adalah untuk mencerminkan hubungan
                antara Kristus dan Gereja, membentuk keluarga, membesarkan
                anak-anak dalam iman Kristen, dan hidup bersama dalam cinta dan
                kerjasama.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container my-5">
    <a
      :href="PDF_URL + 'download-file?jenis=Pernikahan'"
      class="btn btn-danger mt-3 mb-5"
      target="_blank"
      >Download File Kosong</a
    >

    <form @submit.prevent="pendaftaranLayanan" class="row g-5">
      <input type="hidden" name="user_id" v-model="data.user_id" />
      <div class="col-md-6 col-sm-12">
        <div class="mb-4">
          <label for="jenis" class="form-label fw-bold">Jenis Pernikahan</label>
          <input
            type="text"
            class="form-control"
            name="jenis"
            v-model="data.jenis"
            readonly
            disabled
          />
        </div>
        <div class="mb-4">
          <label for="pendeta_id" class="form-label fw-bold"
            >Dinikahkan Oleh</label
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
          <label for="nama_calon_suami" class="form-label fw-bold"
            >Nama Calon Suami</label
          >
          <input
            type="text"
            class="form-control"
            name="nama_calon_suami"
            id="nama_calon_suami"
            required
            v-model="data.nama_calon_suami"
          />
        </div>
        <div class="mb-4">
          <label for="suami_rayon_id" class="form-label fw-bold"
            >Rayon Calon Suami</label
          >
          <select
            class="form-select"
            name="suami_rayon_id"
            aria-label="Rayon Calon Suami"
            required
            v-model="data.suami_rayon_id"
          >
            <option value="">Pilih Rayon</option>
            <option
              v-for="(rayon, index) in rayons"
              :key="index"
              :value="rayon.id"
            >
              Rayon {{ rayon.nomor_rayon }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label for="tempat_lahir_calon_suami" class="form-label fw-bold"
            >Tempat Lahir Calon Suami</label
          >
          <input
            type="text"
            class="form-control"
            name="tempat_lahir_calon_suami"
            id="tempat_lahir_calon_suami"
            required
            v-model="data.tempat_lahir_calon_suami"
          />
        </div>
        <div class="mb-4">
          <label for="tanggal_lahir_calon_suami" class="form-label fw-bold"
            >Tanggal Lahir Calon Suami</label
          >
          <input
            type="date"
            class="form-control"
            name="tanggal_lahir_calon_suami"
            id="tanggal_lahir_calon_suami"
            required
            v-model="data.tanggal_lahir_calon_suami"
          />
        </div>
        <div class="mb-4">
          <label for="nama_ayah_calon_suami" class="form-label fw-bold"
            >Nama Ayah Calon Suami</label
          >
          <input
            type="text"
            class="form-control"
            name="nama_ayah_calon_suami"
            id="nama_ayah_calon_suami"
            required
            v-model="data.nama_ayah_calon_suami"
          />
        </div>
        <div class="mb-4">
          <label for="nama_ibu_calon_suami" class="form-label fw-bold"
            >Nama Ibu Calon Suami</label
          >
          <input
            type="text"
            class="form-control"
            name="nama_ibu_calon_suami"
            id="nama_ibu_calon_suami"
            required
            v-model="data.nama_ibu_calon_suami"
          />
        </div>
        <div class="mb-4">
          <label for="alamat_calon_suami" class="form-label fw-bold"
            >Alamat Calon Suami</label
          >
          <input
            type="text"
            class="form-control"
            name="alamat_calon_suami"
            id="alamat_calon_suami"
            required
            v-model="data.alamat_calon_suami"
          />
        </div>
        <div class="mb-4">
          <label for="alamat_ortu_suami" class="form-label fw-bold"
            >Alamat Orang Tua Suami</label
          >
          <input
            type="text"
            class="form-control"
            name="alamat_ortu_suami"
            id="alamat_ortu_suami"
            required
            v-model="data.alamat_ortu_suami"
          />
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="mb-4">
          <label for="nama_calon_istri" class="form-label fw-bold"
            >Nama Calon Istri</label
          >
          <input
            type="text"
            class="form-control"
            name="nama_calon_istri"
            id="nama_calon_istri"
            required
            v-model="data.nama_calon_istri"
          />
        </div>
        <div class="mb-4">
          <label for="istri_rayon_id" class="form-label fw-bold"
            >Rayon Calon Istri</label
          >
          <select
            class="form-select"
            name="istri_rayon_id"
            aria-label="Rayon Calon Istri"
            required
            v-model="data.istri_rayon_id"
          >
            <option value="">Pilih Rayon</option>
            <option
              v-for="(rayon, index) in rayons"
              :key="index"
              :value="rayon.id"
            >
              Rayon {{ rayon.nomor_rayon }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label for="tempat_lahir_calon_istri" class="form-label fw-bold"
            >Tempat Lahir Calon Istri</label
          >
          <input
            type="text"
            class="form-control"
            name="tempat_lahir_calon_istri"
            id="tempat_lahir_calon_istri"
            required
            v-model="data.tempat_lahir_calon_istri"
          />
        </div>
        <div class="mb-4">
          <label for="tanggal_lahir_calon_istri" class="form-label fw-bold"
            >Tanggal Lahir Calon Istri</label
          >
          <input
            type="date"
            class="form-control"
            name="tanggal_lahir_calon_istri"
            id="tanggal_lahir_calon_istri"
            required
            v-model="data.tanggal_lahir_calon_istri"
          />
        </div>
        <div class="mb-4">
          <label for="nama_ayah_calon_istri" class="form-label fw-bold"
            >Nama Ayah Calon Istri</label
          >
          <input
            type="text"
            class="form-control"
            name="nama_ayah_calon_istri"
            id="nama_ayah_calon_istri"
            required
            v-model="data.nama_ayah_calon_istri"
          />
        </div>
        <div class="mb-4">
          <label for="nama_ibu_calon_istri" class="form-label fw-bold"
            >Nama Ibu Calon Istri</label
          >
          <input
            type="text"
            class="form-control"
            name="nama_ibu_calon_istri"
            id="nama_ibu_calon_istri"
            required
            v-model="data.nama_ibu_calon_istri"
          />
        </div>
        <div class="mb-4">
          <label for="alamat_calon_istri" class="form-label fw-bold"
            >Alamat Calon Istri</label
          >
          <input
            type="text"
            class="form-control"
            name="alamat_calon_istri"
            id="alamat_calon_istri"
            required
            v-model="data.alamat_calon_istri"
          />
        </div>
        <div class="mb-4">
          <label for="alamat_ortu_istri" class="form-label fw-bold"
            >Alamat Orang Tua Istri</label
          >
          <input
            type="text"
            class="form-control"
            name="alamat_ortu_istri"
            id="alamat_ortu_istri"
            required
            v-model="data.alamat_ortu_istri"
          />
        </div>
        <div class="mb-4">
          <label for="tanggal_pernikahan" class="form-label fw-bold"
            >Tanggal Pernikahan</label
          >
          <input
            type="date"
            class="form-control"
            name="tanggal_pernikahan"
            :min="today"
            id="tanggal_pernikahan"
            required
            v-model="data.tanggal_pernikahan"
          />
        </div>
        <div class="mb-4">
          <label for="waktu_pernikahan" class="form-label fw-bold"
            >Waktu Pernikahan</label
          >
          <input
            type="time"
            class="form-control"
            name="waktu_pernikahan"
            id="waktu_pernikahan"
            required
            v-model="data.waktu_pernikahan"
          />
        </div>
        <div class="mb-4">
          <p style="font-weight: bold">Persyaratan :</p>
          <ul>
            <li>
              1. Surat keterangan persetujuan dari orang tua calon pengantin
              (materai 6000).
            </li>
            <li>2. Surat keterangan dari jemaat asal (untuk jemaat luar).</li>
            <li>3. Foto copy surat akte kelahiran calon pengantin.</li>
            <li>4. Foto copy surat baptis calon pengantin.</li>
            <li>5. Foto copy surat sidi calong pengantin.</li>
            <li>6. Foto gandeng 4 x 6 cm = 2 lembar.</li>
            <li>
              7. Administrasi :
              <ul>
                <li>
                  - Surat nikah Rp. 150.000,- (anggota jemaat) & Rp. 200.000,-
                  (jemaat luar).
                </li>
                <li>- Alkitab Pernikahan 1 (satu) buah Rp. 175.000,-</li>
              </ul>
            </li>
            <li>8. Cenderamata untuk gereja : Piring + sendok 1 lusin.</li>
            <li>
              9. Semua persyaratan dimasukkan di dalam map, dan dikembalikan ke
              sekretariat sebelum penggembalaan.
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
      rayons: ref([]),
      pendetas: ref([]),
      data: {
        user_id: "",
        jenis: "Pernikahan",
        pendeta_id: "",
        nama_calon_suami: "",
        suami_rayon_id: "",
        tempat_lahir_calon_suami: "",
        tanggal_lahir_calon_suami: "",
        nama_ayah_calon_suami: "",
        nama_ibu_calon_suami: "",
        alamat_calon_suami: "",
        alamat_ortu_suami: "",
        nama_calon_istri: "",
        istri_rayon_id: "",
        tempat_lahir_calon_istri: "",
        tanggal_lahir_calon_istri: "",
        nama_ayah_calon_istri: "",
        nama_ibu_calon_istri: "",
        alamat_calon_istri: "",
        alamat_ortu_istri: "",
        tanggal_pernikahan: "",
        waktu_pernikahan: "",
      },
      isSubmitting: false,
      PDF_URL,
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
    axios.get(`${URL_BACKEND}/get-single-rayon`).then((response) => {
      console.log(response.data.data);
      this.rayons = response.data.data;
    });

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
  },
};
</script>
<style></style>
