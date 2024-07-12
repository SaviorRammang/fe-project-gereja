<template>
  <!-- Hero Section - Home Page -->
  <section id="hero" class="hero">
    <img src="/assets/img/foto_gereja.jpg" alt="" data-aos="fade-in" />

    <div class="container">
      <div class="row">
        <div class="col-lg-10">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Welcome to GKI Kasih Perumnas
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Grow in Faith, Grow in Love
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero Section -->

  <!-- About Section - Home Page -->
  <section id="about" class="about">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row align-items-xl-center gy-5">
        <div class="col-xl-5 content">
          <h3>About Us</h3>
          <h2>Sejarah</h2>
          <p v-html="sejarah.substring(0, 200) + '...'"></p>
          <router-link to="/about" class="read-more"
            ><span>Read More</span><i class="bi bi-arrow-right"></i
          ></router-link>
        </div>

        <div class="col-xl-7 mb-3">
          <div class="row icon-boxes g-3">
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="icon-box">
                <i class="bi bi-binoculars"></i>
                <h3>Visi</h3>
                <p v-html="visi.substring(0, 150) + '...'"></p>
              </div>
            </div>
            <!-- End Icon Box -->

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="icon-box">
                <i class="bi bi-rocket"></i>
                <h3>Misi</h3>
                <p v-html="misi.substring(0, 150) + '...'"></p>
              </div>
            </div>
            <!-- End Icon Box -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->

  <div class="container my-5">
    <div class="container section-title" data-aos="fade-up">
      <h2>Keuangan {{ tahun }} | {{ bulan }}</h2>
    </div>

    <div class="row g-5" data-aos="fade-up">
      <div class="col-md-6">
        <div class="shadow-lg p-5 bg-body rounded row">
          <div class="col-md-2">
            <i class="bi bi-database-add fs-1"></i>
          </div>
          <div class="col-md-10">
            <h4>Keuangan (Pemasukan)</h4>
            <h6>Rp. {{ pemasukan.toLocaleString() }}</h6>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="shadow-lg p-5 bg-body rounded row">
          <div class="col-md-2">
            <i class="bi bi-database-dash fs-1"></i>
          </div>
          <div class="col-md-10">
            <h4>Keuangan (Pengeluaran)</h4>
            <h6>Rp. {{ pengeluaran.toLocaleString() }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Stats Section - Home Page -->
  <section id="stats" class="stats">
    <img src="/assets/img/foto_gereja2.jpg" alt="" data-aos="fade-in" />
  </section>
  <!-- End Stats Section -->

  <!-- Services Section - Home Page -->
  <section id="services" class="services">
    <!--  Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Fitur-fitur Yang Tersedia</h2>
    </div>
    <!-- End Section Title -->

    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item d-flex">
            <div class="icon flex-shrink-0">
              <i class="bi bi-clock-fill"></i>
            </div>
            <div>
              <h4 class="title">
                <router-link
                  to="/jadwal-ibadah/ibadah-umum"
                  class="stretched-link"
                  >Jadwal Ibadah</router-link
                >
              </h4>
              <p class="description">Halaman Jadwal Ibadah</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item d-flex">
            <div class="icon flex-shrink-0">
              <i class="bi bi-clipboard2-plus-fill"></i>
            </div>
            <div>
              <h4 class="title">
                <router-link to="/layanan/katekisasi" class="stretched-link"
                  >Layanan Pendaftaran</router-link
                >
              </h4>
              <p class="description">Halaman Layanan Pendaftaran</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item d-flex">
            <div class="icon flex-shrink-0">
              <i class="bi bi-envelope-paper-fill"></i>
            </div>
            <div>
              <h4 class="title">
                <router-link to="/informasi/event" class="stretched-link"
                  >Event Gereja</router-link
                >
              </h4>
              <p class="description">Halaman Event Gereja</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item d-flex">
            <div class="icon flex-shrink-0"><i class="bi bi-images"></i></div>
            <div>
              <h4 class="title">
                <router-link to="/informasi/galeri" class="stretched-link"
                  >Galeri</router-link
                >
              </h4>
              <p class="description">Halaman Galeri Gereja</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item d-flex">
            <div class="icon flex-shrink-0">
              <i class="bi bi-hourglass-split"></i>
            </div>
            <div>
              <h4 class="title">
                <router-link to="/lainnya/renungan" class="stretched-link"
                  >Renungan</router-link
                >
              </h4>
              <p class="description">Kumpulan Renungan Harian</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item d-flex">
            <div class="icon flex-shrink-0">
              <i class="bi bi-person-workspace"></i>
            </div>
            <div>
              <h4 class="title">
                <router-link to="/lainnya/khotbah" class="stretched-link"
                  >Khotbah</router-link
                >
              </h4>
              <p class="description">Kumpuluan Khotbah Mingguan</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item d-flex">
            <div class="icon flex-shrink-0">
              <i class="bi bi-newspaper"></i>
            </div>
            <div>
              <h4 class="title">
                <router-link to="/lainnya/berita" class="stretched-link"
                  >Berita</router-link
                >
              </h4>
              <p class="description">Halaman Kumpulan Berita</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item d-flex">
            <div class="icon flex-shrink-0">
              <i class="bi bi-calendar-plus"></i>
            </div>
            <div>
              <h4 class="title">
                <router-link to="/jadwal-konseling" class="stretched-link"
                  >Konseling</router-link
                >
              </h4>
              <p class="description">Halaman Booking Konselor</p>
            </div>
          </div>
        </div>
        <!-- End Service Item -->
      </div>
    </div>
  </section>
  <!-- End Services Section -->

  <!-- Stats Section - Home Page -->
  <section id="stats" class="stats">
    <img src="/assets/img/foto_gereja3.jpg" alt="" data-aos="fade-in" />
  </section>
  <!-- End Stats Section -->

  <!-- Events Section - Home Page -->
  <section id="recent-posts" class="recent-posts">
    <!--  Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Event Terbaru Kami</h2>
    </div>
    <!-- End Section Title -->

    <div class="container">
      <div class="row gy-4">
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
      <!-- End recent posts list -->
    </div>
    <div class="d-flex w-100 justify-content-center">
      <router-link to="/informasi/event" class="btn btn btn-danger mt-5"
        >Lihat Semua</router-link
      >
    </div>
  </section>
  <!-- End Events Section -->

  <!-- Stats Section - Home Page -->
  <section id="stats" class="stats">
    <img src="/assets/img/foto_gereja3.jpg" alt="" data-aos="fade-in" />
  </section>
  <!-- End Stats Section -->

  <!-- Recent-posts Section - Home Page -->
  <section id="news" class="news">
    <!--  Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Berita Terbaru Kami</h2>
    </div>
    <!-- End Section Title -->
    <div class="container mb-5">
      <div class="row gy-4">
        <div
          class="col-xl-4 col-md-6"
          v-for="(berita, index) in beritas"
          data-aos="fade-up"
          data-aos-delay="100"
          :key="index"
        >
          <div class="card">
            <img
              class="card-img-top img-thumbnail"
              style="height: 250px"
              :src="imageUrl + berita.foto"
              alt="Card image"
            />
            <div class="card-body">
              <h4 class="card-title">{{ berita.judul }}</h4>
              <p class="card-text">{{ berita.subjudul }}</p>
              <p
                class="card-text"
                v-html="berita.isi.substring(0, 150) + '...'"
              ></p>
              <router-link
                :to="{ name: 'BeritaDetail', params: { id: berita.id } }"
                class="btn btn-sm btn-danger"
                >Detail</router-link
              >
            </div>
          </div>
        </div>
        <!-- End post list item -->
      </div>
    </div>
    <div class="d-flex w-100 justify-content-center">
      <router-link to="/lainnya/berita" class="btn btn btn-danger mt-5"
        >Lihat Semua</router-link
      >
    </div>
  </section>
  <!-- End Recent-posts Section -->

  <!-- Faq Section - Home Page -->
  <section id="faq" class="faq">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div class="content px-xl-5">
            <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
          </div>
        </div>

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
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
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
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
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
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Faq Section -->
  <!-- Contact Section - Home Page -->
  <section id="contact" class="contact">
    <!--  Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Kontak</h2>
    </div>
    <!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-6">
          <div class="row gy-4">
            <div class="col-md-6">
              <div class="info-item" data-aos="fade" data-aos-delay="200">
                <i class="bi bi-geo-alt"></i>
                <h3>Alamat</h3>
                <p>Jl. Tenggiri Raya Perumnas Klawuyuk</p>
              </div>
            </div>
            <!-- End Info Item -->

            <div class="col-md-6">
              <div class="info-item" data-aos="fade" data-aos-delay="300">
                <i class="bi bi-telephone"></i>
                <h3>Hubungi Kami</h3>
                <p>(0951) 325767</p>
              </div>
            </div>
            <!-- End Info Item -->

            <div class="col-md-6">
              <div class="info-item" data-aos="fade" data-aos-delay="400">
                <i class="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>gkikasihperumnas@gmail.com</p>
              </div>
            </div>
            <!-- End Info Item -->

            <div class="col-md-6">
              <div class="info-item" data-aos="fade" data-aos-delay="500">
                <i class="bi bi-clock"></i>
                <h3>Jam Buka</h3>
                <p>Senin - Minggu</p>
                <p>08:00 WIT - 17:00 WIT</p>
              </div>
            </div>
            <!-- End Info Item -->
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="520"
                height="350"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=350&amp;hl=en&amp;q=Jl.%20Tenggiri%20Raya%20Perumnas%20Klawuyuk%20+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
        <!-- End Contact Form -->
      </div>
    </div>
  </section>
  <!-- End Contact Section -->
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import moment from "moment";

const URL_BACKEND = import.meta.env.VITE_URL_BACKEND;

export default {
  data() {
    return {
      events: ref([]),
      beritas: ref([]),
      sejarah: "",
      visi: "",
      misi: "",
      pemasukan: 0,
      pengeluaran: 0,
      tahun: 0,
      bulan: 0,
      imageUrl: ref(import.meta.env.VITE_IMG_URL),
      moment: moment,
    };
  },
  mounted() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    this.tahun = year;
    this.bulan = this.changeMonth(month);

    axios.get(`${URL_BACKEND}/get-events`).then((response) => {
      console.log(response.data.data);
      this.events = response.data.data;
    });

    axios.get(`${URL_BACKEND}/get-news`).then((response) => {
      console.log(response.data.data);
      this.beritas = response.data.data;
    });

    axios
      .get(`${URL_BACKEND}/get-keuangan?year=${year}&month=${month}`)
      .then((response) => {
        console.log(response.data);
        this.pemasukan = response.data.keuangan_pemasukan;
        this.pengeluaran = response.data.keuangan_pengeluaran;
      });

    axios.get(`${URL_BACKEND}/get-profile`).then((response) => {
      console.log(response.data.data);
      this.sejarah = response.data.data.sejarah;
      this.visi = response.data.data.visi;
      this.misi = response.data.data.misi;
    });
  },

  methods: {
    changeMonth(month) {
      if (month == 1) {
        return "Januari";
      } else if (month == 2) {
        return "Februari";
      } else if (month == 3) {
        return "Maret";
      } else if (month == 4) {
        return "April";
      } else if (month == 5) {
        return "Mei";
      } else if (month == 6) {
        return "Juni";
      } else if (month == 7) {
        return "Juli";
      } else if (month == 8) {
        return "Agustus";
      } else if (month == 9) {
        return "September";
      } else if (month == 10) {
        return "Oktober";
      } else if (month == 11) {
        return "November";
      } else if (month == 12) {
        return "Desember";
      } else {
        return "Tidak Valid";
      }
    },
  },
};
</script>
<style>
.mapouter {
  position: relative;
  text-align: right;
  width: 600px;
  height: 400px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 600px;
  height: 400px;
}
.gmap_iframe {
  width: 600px !important;
  height: 400px !important;
}
</style>
