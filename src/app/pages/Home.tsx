import { Link } from "react-router";
import {
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Clock,
  Download,
  HelpCircle,
  Phone,
  Bell,
  ArrowRight,
  Users,
  Award,
  CheckCircle,
  Newspaper,
} from "lucide-react";

export function Home() {
  const latestArticles = [
    {
      id: 1,
      title: "Direktorat Akademik Gelar Workshop Pengembangan Kurikulum Berbasis MBKM",
      date: "2 April 2026",
      category: "Kegiatan",
      image: "workshop",
    },
    {
      id: 2,
      title: "Sosialisasi Sistem Akademik Terbaru untuk Mahasiswa Baru 2026",
      date: "28 Maret 2026",
      category: "Kegiatan",
      image: "sosialisasi",
    },
    {
      id: 3,
      title: "Peluncuran Aplikasi Mobile SIAK Unpad Versi 3.0",
      date: "5 Maret 2026",
      category: "Inovasi",
      image: "aplikasi",
    },
    {
      id: 4,
      title: "Pelatihan E-Learning untuk Dosen: Meningkatkan Kualitas Pembelajaran Digital",
      date: "15 Maret 2026",
      category: "Pelatihan",
      image: "pelatihan",
    },
  ];

  const services = [
    {
      icon: BookOpen,
      title: "Registrasi Akademik",
      description: "Informasi dan panduan registrasi akademik mahasiswa",
      href: "/layanan",
    },
    {
      icon: Calendar,
      title: "Kalender Akademik",
      description: "Jadwal penting kegiatan akademik sepanjang tahun",
      href: "/layanan",
    },
    {
      icon: Clock,
      title: "Cuti & Aktif Kembali",
      description: "Layanan pengajuan cuti dan aktif kembali kuliah",
      href: "/layanan",
    },
    {
      icon: GraduationCap,
      title: "Yudisium & Wisuda",
      description: "Informasi persyaratan dan jadwal yudisium wisuda",
      href: "/layanan",
    },
    {
      icon: FileText,
      title: "Administrasi Dokumen",
      description: "Legalisasi, validasi, dan layanan dokumen akademik",
      href: "/layanan",
    },
    {
      icon: Download,
      title: "Unduhan Dokumen",
      description: "Formulir, pedoman, dan template dokumen akademik",
      href: "/unduhan",
    },
  ];

  const announcements = [
    {
      date: "5 April 2026",
      title: "Pengumuman Jadwal Registrasi Semester Genap 2025/2026",
      category: "Registrasi",
    },
    {
      date: "3 April 2026",
      title: "Perubahan Jadwal Yudisium Periode April 2026",
      category: "Yudisium",
    },
    {
      date: "1 April 2026",
      title: "Panduan Pengisian KRS Semester Genap 2025/2026",
      category: "KRS",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-800 to-blue-950 text-primary-foreground overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight animate-in fade-in slide-in-from-top-6 duration-700">
                Direktorat Akademik
                <br />
                <span className="text-secondary">Universitas Padjadjaran</span>
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-top-8 duration-700 delay-150">
                Pusat informasi dan layanan akademik yang terpusat, terpercaya, dan mudah diakses untuk seluruh sivitas akademika Unpad
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <Link
                  to="/layanan"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span>Lihat Layanan Kami</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all shadow-xl hover:shadow-2xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hubungi Kami</span>
                </Link>
              </div>
            </div>

            {/* Latest Announcement */}
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Bell className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="inline-block px-3 py-1 bg-secondary/20 backdrop-blur-sm text-secondary text-xs rounded-lg font-medium border border-secondary/30">
                        Pengumuman Terbaru
                      </span>
                      <span className="text-xs text-primary-foreground/70">5 April 2026</span>
                    </div>
                    <h3 className="text-lg text-white mb-2 group-hover:text-secondary transition-colors">
                      Pengumuman Jadwal Registrasi Semester Genap 2025/2026
                    </h3>
                    <Link
                      to="/pengumuman"
                      className="text-sm text-secondary hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Lihat detail
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">Artikel Terbaru</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-primary mb-4">Kegiatan & Berita</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Update terbaru seputar kegiatan dan program Direktorat Akademik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {latestArticles.map((article) => (
              <Link
                key={article.id}
                to="/artikel"
                className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary to-blue-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-primary-foreground/20" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-3 py-1.5 bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-xs rounded-lg font-medium shadow-lg">
                      {article.category}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                  <h3 className="text-base mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Baca artikel</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/artikel"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-700 text-primary-foreground rounded-xl hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <span>Lihat Semua Artikel</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">Layanan Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-primary mb-4">Layanan Akademik</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Berbagai layanan akademik yang dapat diakses dengan mudah dan cepat untuk mendukung kegiatan akademik Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.href}
                  className="bg-white border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 group relative overflow-hidden"
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-blue-700 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="mb-3 text-xl group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{service.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Selengkapnya</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/layanan"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-700 text-primary-foreground rounded-xl hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <span>Lihat Semua Layanan</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Announcements */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl text-primary flex items-center gap-3">
                  <Bell className="w-8 h-8" />
                  Pengumuman Terbaru
                </h2>
                <Link to="/pengumuman" className="text-primary hover:gap-2 inline-flex items-center gap-1 transition-all font-medium">
                  Lihat Semua
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-accent/30 border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Bell className="w-7 h-7 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-primary/10 to-blue-700/10 text-primary text-xs rounded-lg font-medium border border-primary/20">
                            {announcement.category}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" />
                            {announcement.date}
                          </span>
                        </div>
                        <h3 className="text-lg mb-3 group-hover:text-primary transition-colors font-medium">
                          {announcement.title}
                        </h3>
                        <Link
                          to="/pengumuman"
                          className="text-sm text-primary hover:gap-2 inline-flex items-center gap-1 transition-all font-medium"
                        >
                          Baca selengkapnya
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Access */}
            <div>
              <h2 className="text-3xl text-primary mb-8">Akses Cepat</h2>
              <div className="space-y-4">
                <Link
                  to="/unduhan"
                  className="flex items-center gap-4 p-5 bg-gradient-to-br from-white to-accent border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Download className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="flex-1 font-medium">Unduh Formulir</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  to="/faq"
                  className="flex items-center gap-4 p-5 bg-gradient-to-br from-white to-accent border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="flex-1 font-medium">FAQ</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  to="/kontak"
                  className="flex items-center gap-4 p-5 bg-gradient-to-br from-white to-accent border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="flex-1 font-medium">Helpdesk</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  to="/layanan"
                  className="flex items-center gap-4 p-5 bg-gradient-to-br from-white to-accent border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="flex-1 font-medium">Kalender Akademik</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">Keunggulan Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-primary mb-4">Mengapa Memilih Layanan Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Kami berkomitmen memberikan layanan akademik yang profesional, cepat, dan terpercaya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Terpusat",
                description: "Semua informasi akademik dalam satu platform",
              },
              {
                title: "Terpercaya",
                description: "Informasi resmi dan terverifikasi",
              },
              {
                title: "Mudah Diakses",
                description: "Akses 24/7 dari mana saja",
              },
              {
                title: "Responsif",
                description: "Layanan cepat dan profesional",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-xl text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
