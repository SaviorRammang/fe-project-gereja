<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Jadwal Konseling Saya</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">Jadwal Konseling Saya</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="container my-5">
    <div class="row mt-5">
      <DataTable id="myTable" :columns="columns" :data="konselings" class="display table table-hover text-center" />
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
    const konselings = ref([]);
    const columns = [
      { data: "pendeta.name", title: "Pendeta" },
      {
        data: "tanggal",
        title: "Tanggal",
        render: (data, type, row) => {
          if (row.tanggal_ganti != null && (row.status == "Diterima" || row.status == "Diganti" || row.status == "Ditolak")) {
            return moment(row.tanggal_ganti).format("DD MMMM YYYY") + " (Diubah)";
          } else {
            return moment(data).format("DD MMMM YYYY");
          }
        },
      },
      {
        data: "waktu",
        title: "Waktu",
        render: (data, type, row) => {
          if (row.waktu_ganti != null && (row.status == "Diterima" || row.status == "Diganti" || row.status == "Ditolak")) {
            return moment(row.waktu_ganti, "HH:mm:ss").format("HH:mm") + " (Diubah)";
          } else {
            return moment(data, "HH:mm:ss").format("HH:mm");
          }
        },
      },
      {
        data: "status",
        title: "Status",
        render: (data) => {
          if (data == "Diterima" || data == "Selesai") {
            return `<span class="badge bg-success">${data}</span>`;
          } else if (data == "Ditolak" || data == "Dibatalkan") {
            return `<span class="badge bg-danger">${data}</span>`;
          } else if (data == "Diganti") {
            return `<span class="badge bg-info">${data}</span>`;
          } else {
            return `<span class="badge bg-warning">${data}</span>`;
          }
        },
      },
      {
        data: null,
        title: "Aksi",
        render: (data, type, row) => {
          if (row.status == "Diganti") {
            return `
              <button class="btn btn-info btn-sm text-white terima-btn" data-id="${row.id}"><i class="bi bi-calendar-check"></i></button>
              <button class="btn btn-danger btn-sm text-white tolak-btn" data-id="${row.id}"><i class="bi bi-calendar-x"></i></button>
            `;
          } else if (row.status == "Diterima") {
            return `
              <button class="btn btn-info btn-sm text-white" disabled><i class="bi bi-bookmark-check"></i></button>
            `;
          } else if (row.status == "Selesai") {
            return `
              <button class="btn btn-danger btn-sm text-white hapus-btn" data-id="${row.id}"><i class="bi bi-trash"></i></button>
            `;
          } else if (row.status == "Ditolak") {
            return `
              <button class="btn btn-danger btn-sm text-white hapus-btn" data-id="${row.id}"><i class="bi bi-trash"></i></button>
            `;
          } else {
            return `
              <button class="btn btn-warning btn-sm text-white" disabled><i class="bi bi-repeat"></i></button>
            `;
          }
        },
        orderable: false,
        searchable: false,
      },
    ];

    onMounted(() => {
      const token = localStorage.getItem("token");
      var bytes = CryptoJS.AES.decrypt(token, "my_very_secret_key_12345");
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      axios.get(`${URL_BACKEND}/get-konseling?id=${decryptedData[0].id}`).then((response) => {
        console.log(response.data.data);
        konselings.value = response.data.data;

        // Set up event listeners after DataTable is initialized
        setTimeout(() => {
          $(".terima-btn").on("click", function () {
            const id = $(this).data("id");
            terimaReschedule(id);
          });

          $(".tolak-btn").on("click", function () {
            const id = $(this).data("id");
            tolakReschedule(id);
          });

          $(".hapus-btn").on("click", function () {
            const id = $(this).data("id");
            const konfirmasi = confirm("Apakah Anda yakin ingin menghapus?");
            if (!konfirmasi) {
              return;
            }
            hapusPendaftaran(id);
          });
        }, 500);
      });
    });

    const hapusPendaftaran = (id) => {
      axios.delete(`${URL_BACKEND}/delete-konseling/${id}`).then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert(response.data.message);
          window.location.reload();
        } else {
          alert("Gagal menghapus pendaftaran!");
        }
      });
    };

    const terimaReschedule = (id) => {
      axios.put(`${URL_BACKEND}/user-status/${id}`, { status: "Diterima" }).then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert(response.data.message);
          window.location.reload();
        } else {
          alert("Gagal menerima reschedule!");
        }
      });
    };

    const tolakReschedule = (id) => {
      axios.put(`${URL_BACKEND}/user-status/${id}`, { status: "Ditolak" }).then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert(response.data.message);
          window.location.reload();
        } else {
          alert("Gagal menerima reschedule!");
        }
      });
    };

    return {
      konselings,
      columns,
      terimaReschedule,
      tolakReschedule,
    };
  },
};
</script>

<style>
.dt-orderable-asc {
  text-align: center;
}
</style>
