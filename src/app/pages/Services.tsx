import {
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  FileText,
  ClipboardCheck,
  Download,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: BookOpen,
      title: "Registrasi Akademik",
      description: "Layanan registrasi dan herregistrasi mahasiswa setiap semester",
      requirements: [
        "Mahasiswa aktif Unpad",
        "Telah melakukan pembayaran UKT",
        "Tidak memiliki tunggakan administrasi",
      ],
      process: [
        "Login ke sistem akademik (SIAK)",
        "Pilih menu registrasi",
        "Isi data registrasi",
        "Cetak Kartu Rencana Studi (KRS)",
      ],
      estimation: "1-2 hari kerja",
    },
    {
      icon: Calendar,
      title: "Kalender Akademik",
      description: "Informasi jadwal dan kegiatan akademik sepanjang tahun",
      requirements: ["Akses internet"],
      process: [
        "Akses halaman kalender akademik",
        "Pilih tahun akademik",
        "Lihat jadwal kegiatan",
        "Unduh file PDF kalender",
      ],
      estimation: "Akses langsung",
    },
    {
      icon: Clock,
      title: "Cuti Akademik",
      description: "Pengajuan cuti kuliah untuk mahasiswa yang membutuhkan",
      requirements: [
        "Telah menempuh minimal 2 semester",
        "IPK minimal 2.00",
        "Tidak sedang dalam status cuti",
        "Surat permohonan cuti",
        "Persetujuan orang tua/wali",
      ],
      process: [
        "Unduh formulir cuti akademik",
        "Isi formulir dengan lengkap",
        "Upload dokumen persyaratan",
        "Submit pengajuan ke fakultas",
        "Menunggu persetujuan",
      ],
      estimation: "5-7 hari kerja",
    },
    {
      icon: ClipboardCheck,
      title: "Aktif Kembali",
      description: "Layanan aktivasi kembali status mahasiswa setelah cuti",
      requirements: [
        "Surat permohonan aktif kembali",
        "Telah menyelesaikan masa cuti",
        "Tidak ada tunggakan administrasi",
      ],
      process: [
        "Ajukan permohonan aktif kembali",
        "Submit dokumen ke fakultas",
        "Menunggu verifikasi",
        "Aktivasi status di sistem",
      ],
      estimation: "3-5 hari kerja",
    },
    {
      icon: GraduationCap,
      title: "Yudisium & Wisuda",
      description: "Informasi persyaratan dan jadwal yudisium serta wisuda",
      requirements: [
        "Telah menyelesaikan seluruh SKS",
        "IPK sesuai ketentuan",
        "Bebas tunggakan administrasi",
        "Lulus ujian komprehensif/skripsi",
        "Menyerahkan hardcopy dan softcopy skripsi",
      ],
      process: [
        "Pendaftaran yudisium di fakultas",
        "Verifikasi kelengkapan dokumen",
        "Pelaksanaan yudisium",
        "Pendaftaran wisuda",
        "Pelaksanaan wisuda",
      ],
      estimation: "Sesuai jadwal yudisium dan wisuda",
    },
    {
      icon: FileText,
      title: "Legalisasi Dokumen",
      description: "Layanan legalisasi ijazah, transkrip, dan dokumen akademik",
      requirements: [
        "Dokumen asli yang akan dilegalisasi",
        "Fotocopy dokumen",
        "Kartu identitas (KTP/KTM)",
        "Bukti pembayaran legalisasi",
      ],
      process: [
        "Datang ke loket layanan",
        "Serahkan dokumen dan persyaratan",
        "Pembayaran biaya legalisasi",
        "Proses legalisasi",
        "Pengambilan dokumen",
      ],
      estimation: "3-5 hari kerja",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl mb-4 text-center">Layanan Akademik</h1>
          <p className="text-lg text-center text-primary-foreground/90 max-w-2xl mx-auto">
            Berbagai layanan akademik untuk mendukung kegiatan akademik Anda
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-accent p-6 border-b border-border">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl text-primary mb-2">{service.title}</h2>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Requirements */}
                      <div>
                        <h3 className="mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          Persyaratan
                        </h3>
                        <ul className="space-y-2">
                          {service.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process */}
                      <div>
                        <h3 className="mb-4 flex items-center gap-2">
                          <ArrowRight className="w-5 h-5 text-primary" />
                          Alur Pengajuan
                        </h3>
                        <ol className="space-y-2">
                          {service.process.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="flex-shrink-0 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">
                                {idx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Estimation & Actions */}
                      <div>
                        <h3 className="mb-4 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-primary" />
                          Estimasi Waktu
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">{service.estimation}</p>

                        <div className="space-y-2">
                          <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm">
                            Akses Layanan
                          </button>
                          <button className="w-full px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" />
                            Unduh Formulir
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl text-primary mb-4">Butuh Bantuan?</h2>
            <p className="text-muted-foreground mb-6">
              Tim helpdesk kami siap membantu Anda dengan pertanyaan terkait layanan akademik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Hubungi Helpdesk
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-white rounded-md hover:bg-accent transition-colors"
              >
                Lihat FAQ
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
