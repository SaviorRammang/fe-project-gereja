<template>
  <!-- Blog Page Title & Breadcrumbs -->
  <div v-if="ibadah" data-aos="fade" class="page-title">
    <div class="heading bg-dark">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="text-white">Detail {{ ibadah.jenis }}</h1>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li class="current">{{ ibadah.jenis }}</li>
        </ol>
      </div>
    </nav>
  </div>
  <!-- End Page Title -->

  <!-- Blog Section - Blog Page -->
  <div
    v-if="ibadah"
    class="container my-5"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div class="row posts-list">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">{{ ibadah.tema }}</h4>
        </div>
        <div class="card-body">
          <table class="table">
            <tr>
              <td class="fw-bold">Pendeta</td>
              <td style="padding: 0 20px">:</td>
              <td>{{ ibadah.pendeta.name }}</td>
            </tr>
            <tr>
              <td class="fw-bold">Pendamping Pendeta</td>
              <td style="padding: 0 20px">:</td>
              <td>{{ ibadah.pendamping_pendeta }}</td>
            </tr>
            <tr>
              <td class="fw-bold">Pemain Musik</td>
              <td style="padding: 0 20px">:</td>
              <td>{{ ibadah.pemain_musik }}</td>
            </tr>
            <tr>
              <td class="fw-bold">Pembaca Warta</td>
              <td style="padding: 0 20px">:</td>
              <td>{{ ibadah.pembaca_warta }}</td>
            </tr>
            <tr>
              <td class="fw-bold">Tanggal</td>
              <td style="padding: 0 20px">:</td>
              <td>{{ moment(ibadah.tanggal).format("DD-MM-YYYY") }}</td>
            </tr>
            <tr>
              <td class="fw-bold">Waktu</td>
              <td style="padding: 0 20px">:</td>
              <td>
                {{ moment(ibadah.waktu, "HH:mm:ss").format("HH:mm") }} WIT
              </td>
            </tr>
            <tr>
              <td class="fw-bold">Pembawa Persembahan</td>
              <td style="padding: 0 20px">:</td>
              <td>
                {{ formattedPenambahan.persembahan }}
              </td>
            </tr>
            <tr>
              <td class="fw-bold">Majelis Bertugas</td>
              <td style="padding: 0 20px">:</td>
              <td>
                {{ formattedPenambahan.majelis }}
              </td>
            </tr>
            <tr>
              <td class="fw-bold">Kantoria</td>
              <td style="padding: 0 20px">:</td>
              <td>
                {{ formattedPetugas.kantoria }}
              </td>
            </tr>
            <tr>
              <td class="fw-bold">Infokus</td>
              <td style="padding: 0 20px">:</td>
              <td>
                {{ formattedPetugas.infokus }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- End Blog Section -->
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import moment from "moment";

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

export default {
  data() {
    return {
      ibadah: ref(null),
      formattedPenambahan: {
        majelis: "",
        persembahan: "",
      },
      formattedPetugas: {
        kantoria: "",
        infokus: "",
      },
      moment,
    };
  },

  methods: {
    formatPenambahan(penambahan) {
      // digunakan untuk memformat dan mengelompokkan data penambahan yang dikategorikan sebagai majelis dan persembahan
      let majelis = [];
      let persembahan = [];

      penambahan.forEach((item) => {
        // melakukan perulangan
        if (item.jenis_penambahan === "Majelis") {
          majelis.push(`Rayon ${item.rayon.nomor_rayon}`); // jika item jenis penambahannya adalah majelis, maka nomor rayon dari item tersebut akan di tambahkan ke dalam array majelis
        } else if (item.jenis_penambahan === "Persembahan") {
          persembahan.push(`Rayon ${item.rayon.nomor_rayon}`);
        }
      });

      this.formattedPenambahan.majelis = majelis.join(", "); // menggabungkan semua elemen dalam array majelis menjadi satu string, dan dipisahkan dengan tanda koma (,)
      this.formattedPenambahan.persembahan = persembahan.join(", "); // menggabungkan semua elemen dalam array persembahan menjadi satu string, dan dipisahkan dengan tanda koma (,)
    },

    formatPetugas(petugas) {
      let infokus = []; // inisialisasi variabel infokus dan kantoria dengan array kosong
      let kantoria = [];

      petugas.forEach((item) => {
        if (item.jenis_petugas === "Infokus") {
          infokus.push(item.nama_petugas);
        } else if (item.jenis_petugas === "Kantoria") {
          kantoria.push(item.nama_petugas);
        }
      });

      this.formattedPetugas.kantoria = kantoria.join(", "); // menggabungkan semua elemen dalam array kantoria menjadi satu string, dan dipisahkan dengan tanda koma (,)
      this.formattedPetugas.infokus = infokus.join(", "); // menggabungkan semua elemen dalam array infokus menjadi satu string, dan dipisahkan dengan tanda koma (,)
    },
  },

  mounted() {
    const id = this.$route.params.id; // mengambil id dari params route

    axios.get(`${URL_BACKEND}/get-detail-ibadah/${id}`).then((response) => {
      this.ibadah = response.data.data;
      this.formatPenambahan(this.ibadah.penambahan);
      this.formatPetugas(this.ibadah.petugas);
    });
  },
};
</script>

<style>
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;
}

.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table .table {
  background-color: #fff;
}

.fw-bold {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 5px;
}
</style>
