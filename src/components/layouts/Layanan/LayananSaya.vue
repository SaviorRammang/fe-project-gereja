<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Layanan Pendaftaran Saya</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Layanan Pendaftaran Saya</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <div class="row mt-5">
      <DataTable id="myTable" :columns="columns" :data="layanans" class="display table table-hover text-center" />
    </div>
  </div>
  <!-- End Blog Section -->
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import moment from "moment";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net-bs5";
import Select from "datatables.net-select";
import jQuery from "jquery";
import CryptoJS from "crypto-js";

const $ = jQuery;
window.$ = $;

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;
const URL_PDF = import.meta.env.VITE_PDF_URL;

DataTable.use(DataTablesCore);

export default {
  components: {
    DataTable, // Mendaftarkan komponen DataTable di sini
  },
  setup() {
    const layanans = ref([]);
    const columns = [
      { data: "pendeta.name", title: "Pendeta" },
      {
        data: "jenis",
        title: "Jenis Layanan",
      },
      {
        data: "created_at",
        title: "Tanggal Dibuat",
        render: (data, type, row) => {
          return moment(data).format("DD MMMM YYYY");
        },
      },
      {
        data: null,
        title: "Aksi",
        render: (data, type, row) => {
          return `<a href="${URL_PDF}download-pendaftaran/${data.id}" class="btn btn-primary btn-sm" target="_blank"><i class="bi bi-file-earmark-pdf"></i></a>
          <button class="btn btn-danger btn-sm hapus-btn" data-id="${row.id}"><i class="bi bi-trash"></i></button>
          `;
        },
        orderable: false,
        searchable: false,
      },
    ];

    onMounted(() => {
      const token = localStorage.getItem("token");
      var bytes = CryptoJS.AES.decrypt(token, "my_very_secret_key_12345");
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      axios.get(`${URL_BACKEND}/get-layanan?id=${decryptedData[0].id}`).then((response) => {
        console.log(response.data.data);
        layanans.value = response.data.data;

        setTimeout(() => {
          $(".hapus-btn").on("click", function () {
            const id = $(this).data("id");
            hapusPendaftaran(id);
          });
        }, 500);
      });
    });

    const hapusPendaftaran = (id) => {
      axios.delete(`${URL_BACKEND}/delete-pendaftaran-user/${id}`).then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert(response.data.message);
          window.location.reload();
        } else {
          alert("Gagal menghapus pendaftaran!");
        }
      });
    };

    return {
      layanans,
      columns,
      hapusPendaftaran,
    };
  },
};
</script>

<style>
.dt-orderable-asc {
  text-align: center;
}
</style>
