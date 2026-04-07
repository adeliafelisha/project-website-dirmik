import { Download, FileText, Calendar, BookOpen, ClipboardList, File } from "lucide-react";

export function Downloads() {
  const documents = [
    {
      category: "Formulir",
      icon: FileText,
      items: [
        { name: "Formulir Cuti Akademik", size: "250 KB", format: "PDF" },
        { name: "Formulir Aktif Kembali", size: "180 KB", format: "PDF" },
        { name: "Formulir Perubahan Data Mahasiswa", size: "200 KB", format: "PDF" },
        { name: "Formulir Pengajuan Yudisium", size: "300 KB", format: "PDF" },
        { name: "Formulir Legalisasi Dokumen", size: "150 KB", format: "PDF" },
      ],
    },
    {
      category: "Pedoman & Panduan",
      icon: BookOpen,
      items: [
        { name: "Pedoman Akademik Universitas Padjadjaran 2026", size: "5.2 MB", format: "PDF" },
        { name: "Panduan Pengisian KRS", size: "1.5 MB", format: "PDF" },
        { name: "Panduan Registrasi Online", size: "800 KB", format: "PDF" },
        { name: "Panduan Cuti dan Aktif Kembali", size: "650 KB", format: "PDF" },
        { name: "Panduan Yudisium dan Wisuda", size: "2.1 MB", format: "PDF" },
      ],
    },
    {
      category: "Kalender Akademik",
      icon: Calendar,
      items: [
        { name: "Kalender Akademik 2026/2027", size: "450 KB", format: "PDF" },
        { name: "Kalender Akademik 2025/2026", size: "420 KB", format: "PDF" },
        { name: "Jadwal Yudisium 2026", size: "180 KB", format: "PDF" },
        { name: "Jadwal Wisuda 2026", size: "200 KB", format: "PDF" },
      ],
    },
    {
      category: "SOP & Peraturan",
      icon: ClipboardList,
      items: [
        { name: "SOP Registrasi Mahasiswa", size: "550 KB", format: "PDF" },
        { name: "SOP Cuti Akademik", size: "480 KB", format: "PDF" },
        { name: "SOP Legalisasi Dokumen", size: "420 KB", format: "PDF" },
        { name: "Peraturan Akademik Unpad", size: "3.5 MB", format: "PDF" },
      ],
    },
    {
      category: "Template Dokumen",
      icon: File,
      items: [
        { name: "Template Surat Permohonan Cuti", size: "120 KB", format: "DOCX" },
        { name: "Template Surat Keterangan Aktif Kuliah", size: "100 KB", format: "DOCX" },
        { name: "Template Surat Rekomendasi", size: "110 KB", format: "DOCX" },
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl mb-4 text-center flex items-center justify-center gap-3">
            <Download className="w-10 h-10" />
            Unduhan Dokumen
          </h1>
          <p className="text-lg text-center text-primary-foreground/90 max-w-2xl mx-auto">
            Formulir, pedoman, dan dokumen akademik yang dapat diunduh
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {documents.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl text-primary">{category.category}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="mb-2 group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span className="px-2 py-1 bg-accent rounded text-xs">{item.format}</span>
                              <span>{item.size}</span>
                            </div>
                          </div>
                          <button className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-accent border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl text-primary mb-4">Perlu Bantuan?</h3>
            <p className="text-muted-foreground mb-6">
              Jika Anda mengalami kesulitan dalam mengunduh dokumen atau memerlukan informasi lebih lanjut,
              silakan hubungi helpdesk kami.
            </p>
            <a
              href="/kontak"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Hubungi Helpdesk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
