<template>
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Profile Jemaat</h1>
            <!-- <p class="mb-0 text-white">
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
              quo odio sint voluptas consequatur ut a odio voluptatem. Sit
              dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
              quaerat ipsum dolorem.
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Profile</li>
        </ol>
      </div>
    </nav>
  </div>

  <div class="container my-5">
    <div class="row">
      <div class="container-xl px-4 mt-4">
        <div
          class="alert alert-danger"
          role="alert"
          v-if="Object.keys(errors).length > 0"
        >
          <ul>
            <li v-for="(error, index) in errors" :key="index">
              {{ error[0] }}
            </li>
          </ul>
        </div>
        <form
          @submit.prevent="changeProfile"
          enctype="multipart/form-data mb-5"
        >
          <div class="row">
            <div class="col-xl-4">
              <!-- Profile picture card-->
              <div class="card mb-4 mb-xl-0">
                <div class="card-header">Foto Profile</div>
                <div class="card-body text-center">
                  <div v-if="user.photo != null">
                    <img
                      class="imgPreview img-profile mb-2"
                      :src="imageUrl + user.photo"
                      width="170"
                    />
                  </div>
                  <div v-else>
                    <img
                      class="imgPreview img-profile mb-2"
                      :src="imageUrl + 'profilePicture/userDef.png'"
                      width="170"
                    />
                  </div>

                  <div class="input-group mb-3">
                    <input
                      class="form-control mt-4"
                      name="photo"
                      type="file"
                      id="imageFile"
                      @change="handleFileUpload"
                    />
                  </div>
                  <div class="small font-italic text-muted mb-4">
                    JPG, PNG, JPEG tidak lebih 2 MB
                  </div>
                </div>
              </div>
              <div
                class="alert alert-danger"
                role="alert"
                v-if="Object.keys(error_pass).length > 0"
              >
                <ul>
                  <li v-for="(error, index) in error_pass" :key="index">
                    {{ error[0] }}
                  </li>
                </ul>
              </div>
              <form
                @submit.prevent="changePassword"
                enctype="multipart/form-data"
                class="mt-5"
              >
                <div class="card mb-4">
                  <div class="card-header">Ubah Password</div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="small mb-1" for="old_pass"
                        >Password Lama</label
                      >
                      <input
                        class="form-control"
                        type="password"
                        v-model="pass.old_pass"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="small mb-1" for="new_pass"
                        >Password Baru</label
                      >
                      <input
                        class="form-control"
                        type="password"
                        v-model="pass.new_pass"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="small mb-1" for="konf_pass"
                        >Konfirmasi Password Baru</label
                      >
                      <input
                        class="form-control"
                        type="password"
                        v-model="pass.konf_pass"
                        required
                      />
                    </div>

                    <div class="text-end mt-5">
                      <button
                        class="btn btn-danger pass"
                        type="submit"
                        :disabled="isSubmitting"
                      >
                        Ubah
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-xl-8">
              <div class="card mb-4">
                <div class="card-header">User Details</div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="small mb-1" for="name">Nama</label>
                    <input
                      class="form-control"
                      name="name"
                      type="text"
                      placeholder="Masukkan nama"
                      required
                      v-model="user.name"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="small mb-1" for="tempat_lahir"
                      >Tempat Lahir</label
                    >
                    <input
                      class="form-control"
                      name="tempat_lahir"
                      type="text"
                      placeholder="Masukkan tempat lahir"
                      required
                      v-model="user.tempat_lahir"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="small mb-1" for="tanggal_lahir"
                      >Tanggal Lahir</label
                    >
                    <input
                      class="form-control"
                      name="tanggal_lahir"
                      type="date"
                      placeholder="Masukkan tanggal lahir"
                      required
                      v-model="user.tanggal_lahir"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="rayon_id" class="small mb-1">Rayon</label>
                    <select
                      class="form-select"
                      name="rayon_id"
                      aria-label="Rayon Calon Istri"
                      required
                      v-model="user.rayon_id"
                    >
                      <option value="">Pilih Rayon</option>
                      <option
                        :value="rayon.id"
                        :selected="user.rayon_id === rayon.id"
                        v-for="rayon in rayons"
                        :key="rayon.id"
                      >
                        Rayon {{ rayon.nomor_rayon }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label class="small mb-1" for="username">Username</label>
                    <input
                      class="form-control"
                      name="username"
                      type="text"
                      required
                      v-model="user.username"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="small mb-1" for="phone">No. Handphone</label>
                    <input
                      class="form-control"
                      name="phone"
                      type="number"
                      :value="user.phone"
                      required
                      readonly
                    />
                  </div>

                  <div class="mb-3">
                    <label class="small mb-1" for="email">Email</label>
                    <input
                      class="form-control"
                      type="email"
                      :value="user.email"
                      disabled
                      readonly
                    />
                  </div>

                  <div class="text-end mt-5">
                    <button
                      class="btn btn-danger profil"
                      type="submit"
                      :disabled="isSubmitting"
                    >
                      Simpan Perubahan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- <div class="row">
      <div class="container-xl px-4 mt-4">
        <div class="alert alert-danger" role="alert" v-if="Object.keys(error_pass).length > 0">
          <ul>
            <li v-for="(error, index) in error_pass" :key="index">{{ error[0] }}</li>
          </ul>
        </div>
        <form @submit.prevent="changePassword" enctype="multipart/form-data" class="mt-5">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-8">
              <div class="card mb-4">
                <div class="card-header">Ubah Password</div>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="small mb-1" for="old_pass">Password Lama</label>
                    <input class="form-control" type="password" v-model="pass.old_pass" required />
                  </div>
                  <div class="mb-3">
                    <label class="small mb-1" for="new_pass">Password Baru</label>
                    <input class="form-control" type="password" v-model="pass.new_pass" required />
                  </div>
                  <div class="mb-3">
                    <label class="small mb-1" for="konf_pass">Konfirmasi Password Baru</label>
                    <input class="form-control" type="password" v-model="pass.konf_pass" required />
                  </div>

                  <div class="text-end mt-5">
                    <button class="btn btn-danger pass" type="submit" :disabled="isSubmitting">Ubah</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div> -->
  </div>
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
      imageUrl: ref(import.meta.env.VITE_IMG_URL),
      user: ref({}),
      errors: ref({}),
      error_pass: ref({}),
      pass: {
        old_pass: "",
        new_pass: "",
        konf_pass: "",
      },
      moment: moment,
      selectedFile: null,
      rayons: ref([]),
      isSubmitting: false,
    };
  },
  mounted() {
    const token = localStorage.getItem("token");

    const SECRET_KEY = "my_very_secret_key_12345";
    var bytes = CryptoJS.AES.decrypt(token, SECRET_KEY);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    axios
      .get(`${URL_BACKEND}/cek-login?id=${decryptedData[0].id}`)
      .then((response) => {
        console.log(response.data.data);
        this.user = response.data.data;
      });

    axios.get(`${URL_BACKEND}/get-single-rayon`).then((response) => {
      console.log(response.data.data);
      this.rayons = response.data.data;
    });
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
      const imgPreview = document.querySelector(".imgPreview");
      const oFReader = new FileReader();
      oFReader.readAsDataURL(this.selectedFile);
      oFReader.onload = function (oFREvent) {
        imgPreview.src = oFREvent.target.result;
      };
    },

    changeProfile() {
      this.isSubmitting = true;
      $(".profil").html("Loading...");

      const formData = new FormData();
      formData.append("id", this.user.id);
      formData.append("name", this.user.name);
      formData.append("tempat_lahir", this.user.tempat_lahir);
      formData.append("tanggal_lahir", this.user.tanggal_lahir);
      formData.append("username", this.user.username);
      formData.append("phone", this.user.phone);
      formData.append("email", this.user.email);
      formData.append("rayon_id", this.user.rayon_id);

      if (this.selectedFile) {
        formData.append("photo", this.selectedFile);
      }

      axios
        .post(`${URL_BACKEND}/change-profile`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.status === "success") {
            alert(response.data.message);
            window.location.reload();
          } else {
            this.errors = response.data.errors;
            this.isSubmitting = false;
            $(".profil").html("Simpan Perubahan");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    changePassword() {
      this.isSubmitting = true;
      $(".pass").html("Loading...");

      const formData = new FormData();
      formData.append("id", this.user.id);
      formData.append("old_pass", this.pass.old_pass);
      formData.append("new_pass", this.pass.new_pass);
      formData.append("konf_pass", this.pass.konf_pass);

      axios
        .post(`${URL_BACKEND}/changePassword`, formData)
        .then((response) => {
          if (response.data.status === "success") {
            alert(response.data.message);
            window.location.reload();
          } else {
            if (response.data.message && !response.data.errors) {
              alert(response.data.message);
            } else {
              this.error_pass = response.data.errors;
            }

            this.isSubmitting = false;
            $(".pass").html("Ubah");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
