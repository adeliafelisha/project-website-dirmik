import { Newspaper, Calendar, User, ArrowRight } from "lucide-react";

export function Articles() {
  const articles = [
    {
      id: 1,
      title: "Direktorat Akademik Gelar Workshop Pengembangan Kurikulum Berbasis MBKM",
      date: "2 April 2026",
      author: "Tim Direktorat Akademik",
      image: "workshop",
      excerpt:
        "Workshop diikuti oleh perwakilan dosen dari 16 fakultas dengan tujuan meningkatkan kualitas kurikulum yang sesuai dengan kebutuhan industri dan perkembangan zaman.",
      category: "Kegiatan",
    },
    {
      id: 2,
      title: "Sosialisasi Sistem Akademik Terbaru untuk Mahasiswa Baru 2026",
      date: "28 Maret 2026",
      author: "Tim Direktorat Akademik",
      image: "sosialisasi",
      excerpt:
        "Kegiatan sosialisasi dilaksanakan secara hybrid untuk memperkenalkan sistem akademik kepada mahasiswa baru tahun 2026.",
      category: "Kegiatan",
    },
    {
      id: 3,
      title: "Rapat Koordinasi Evaluasi Pembelajaran Semester Ganjil 2025/2026",
      date: "20 Maret 2026",
      author: "Tim Direktorat Akademik",
      image: "rapat",
      excerpt:
        "Rapat koordinasi membahas evaluasi pelaksanaan pembelajaran semester ganjil dan penyusunan strategi perbaikan untuk semester berikutnya.",
      category: "Rapat",
    },
    {
      id: 4,
      title: "Pelatihan E-Learning untuk Dosen: Meningkatkan Kualitas Pembelajaran Digital",
      date: "15 Maret 2026",
      author: "Tim Direktorat Akademik",
      image: "pelatihan",
      excerpt:
        "Pelatihan diikuti oleh 100 dosen dari berbagai fakultas dengan materi penggunaan platform e-learning dan metode pembelajaran interaktif.",
      category: "Pelatihan",
    },
    {
      id: 5,
      title: "Kunjungan Benchmarking dari Universitas Negeri Jakarta",
      date: "10 Maret 2026",
      author: "Tim Direktorat Akademik",
      image: "kunjungan",
      excerpt:
        "Tim dari Universitas Negeri Jakarta melakukan kunjungan benchmarking untuk mempelajari sistem administrasi akademik Unpad.",
      category: "Kunjungan",
    },
    {
      id: 6,
      title: "Peluncuran Aplikasi Mobile SIAK Unpad Versi 3.0",
      date: "5 Maret 2026",
      author: "Tim Direktorat Akademik",
      image: "aplikasi",
      excerpt:
        "Aplikasi mobile SIAK versi 3.0 diluncurkan dengan fitur-fitur baru yang lebih user-friendly dan responsif untuk kemudahan mahasiswa.",
      category: "Inovasi",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl mb-4 text-center flex items-center justify-center gap-3">
            <Newspaper className="w-10 h-10" />
            Artikel & Kegiatan
          </h1>
          <p className="text-lg text-center text-primary-foreground/90 max-w-2xl mx-auto">
            Informasi terkini mengenai kegiatan dan program Direktorat Akademik
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary to-blue-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-primary-foreground/30" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Admin
                    </span>
                  </div>

                  <h3 className="text-lg mb-3 text-primary group-hover:underline cursor-pointer">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>

                  <button className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
                    Baca selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
            <button className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors">
              Selanjutnya
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
