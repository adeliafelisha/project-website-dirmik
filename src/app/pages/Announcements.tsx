import { Bell, Calendar, Tag, ArrowRight } from "lucide-react";

export function Announcements() {
  const announcements = [
    {
      id: 1,
      date: "5 April 2026",
      title: "Pengumuman Jadwal Registrasi Semester Genap 2025/2026",
      category: "Registrasi",
      excerpt:
        "Registrasi mahasiswa untuk semester genap tahun akademik 2025/2026 akan dibuka mulai tanggal 15 April 2026. Mahasiswa diharapkan untuk melakukan registrasi tepat waktu.",
      content:
        "Registrasi mahasiswa untuk semester genap tahun akademik 2025/2026 akan dibuka mulai tanggal 15 April 2026 sampai dengan 30 April 2026. Mahasiswa yang tidak melakukan registrasi dalam periode tersebut akan dianggap cuti akademik.",
    },
    {
      id: 2,
      date: "3 April 2026",
      title: "Perubahan Jadwal Yudisium Periode April 2026",
      category: "Yudisium",
      excerpt:
        "Terdapat perubahan jadwal pelaksanaan yudisium periode April 2026 yang semula tanggal 20 April menjadi 25 April 2026.",
      content:
        "Berdasarkan keputusan rapat pimpinan, jadwal pelaksanaan yudisium periode April 2026 mengalami perubahan dari tanggal 20 April 2026 menjadi 25 April 2026. Perubahan ini untuk memberikan waktu yang cukup bagi mahasiswa dalam melengkapi persyaratan.",
    },
    {
      id: 3,
      date: "1 April 2026",
      title: "Panduan Pengisian KRS Semester Genap 2025/2026",
      category: "KRS",
      excerpt:
        "Panduan lengkap pengisian Kartu Rencana Studi (KRS) untuk semester genap 2025/2026 telah tersedia.",
      content:
        "Panduan pengisian KRS semester genap 2025/2026 dapat diunduh di halaman unduhan. Mahasiswa dihimbau untuk membaca panduan dengan seksama sebelum mengisi KRS.",
    },
    {
      id: 4,
      date: "28 Maret 2026",
      title: "Pembukaan Layanan Legalisasi Online",
      category: "Layanan",
      excerpt:
        "Direktorat Akademik membuka layanan legalisasi dokumen secara online untuk memudahkan alumni.",
      content:
        "Mulai 1 April 2026, alumni dapat mengajukan legalisasi dokumen secara online melalui sistem yang telah disediakan. Proses lebih cepat dan efisien tanpa harus datang ke kampus.",
    },
    {
      id: 5,
      date: "25 Maret 2026",
      title: "Sosialisasi Kurikulum Merdeka Belajar Kampus Merdeka (MBKM)",
      category: "Kurikulum",
      excerpt:
        "Akan dilaksanakan sosialisasi program MBKM untuk seluruh mahasiswa dan dosen di lingkungan Unpad.",
      content:
        "Sosialisasi MBKM akan dilaksanakan pada tanggal 10 April 2026 secara hybrid (offline dan online). Informasi lebih lanjut dapat dilihat di website masing-masing fakultas.",
    },
    {
      id: 6,
      date: "20 Maret 2026",
      title: "Perpanjangan Waktu Pembayaran UKT",
      category: "Administrasi",
      excerpt: "Batas waktu pembayaran UKT diperpanjang hingga 30 Maret 2026.",
      content:
        "Mengingat beberapa kendala teknis, batas waktu pembayaran UKT semester genap 2025/2026 diperpanjang hingga tanggal 30 Maret 2026. Mahasiswa diharapkan segera melakukan pembayaran.",
    },
    {
      id: 7,
      date: "15 Maret 2026",
      title: "Kalender Akademik Tahun 2026/2027 Telah Dirilis",
      category: "Kalender",
      excerpt: "Kalender akademik untuk tahun ajaran 2026/2027 telah tersedia untuk diunduh.",
      content:
        "Kalender akademik tahun ajaran 2026/2027 telah dirilis dan dapat diunduh di halaman unduhan. Mahasiswa dan dosen diharapkan untuk memperhatikan tanggal-tanggal penting yang tercantum.",
    },
    {
      id: 8,
      date: "10 Maret 2026",
      title: "Pengumuman Wisuda Periode Mei 2026",
      category: "Wisuda",
      excerpt: "Pendaftaran wisuda periode Mei 2026 dibuka mulai 15 Maret 2026.",
      content:
        "Wisuda periode Mei 2026 akan dilaksanakan pada tanggal 25 Mei 2026. Pendaftaran dibuka mulai 15 Maret hingga 15 April 2026. Calon wisudawan diharapkan melengkapi persyaratan dengan baik.",
    },
  ];

  const categories = ["Semua", "Registrasi", "Yudisium", "KRS", "Layanan", "Kurikulum", "Administrasi", "Kalender", "Wisuda"];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl mb-4 text-center flex items-center justify-center gap-3">
            <Bell className="w-10 h-10" />
            Pengumuman
          </h1>
          <p className="text-lg text-center text-primary-foreground/90 max-w-2xl mx-auto">
            Pengumuman resmi terkait kegiatan dan layanan akademik
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-border sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Tag className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <span className="text-sm text-muted-foreground flex-shrink-0">Kategori:</span>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  category === "Semua"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center">
                        <Bell className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {announcement.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {announcement.date}
                        </span>
                      </div>
                      <h2 className="text-xl text-primary mb-3 hover:underline cursor-pointer">
                        {announcement.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">{announcement.excerpt}</p>
                      <button className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
                        Baca selengkapnya
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
              Sebelumnya
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">1</button>
            <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">2</button>
            <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">3</button>
            <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
              Selanjutnya
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
