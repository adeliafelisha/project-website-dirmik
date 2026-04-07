import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Registrasi",
      questions: [
        {
          q: "Kapan waktu registrasi mahasiswa?",
          a: "Registrasi mahasiswa dibuka setiap awal semester, biasanya 2 minggu sebelum perkuliahan dimulai. Informasi detail akan diumumkan melalui website dan sistem akademik.",
        },
        {
          q: "Apa yang harus dilakukan jika lupa password SIAK?",
          a: "Anda dapat mereset password melalui fitur 'Lupa Password' di halaman login SIAK, atau menghubungi helpdesk Direktorat Akademik untuk bantuan lebih lanjut.",
        },
        {
          q: "Apakah bisa registrasi jika belum bayar UKT?",
          a: "Tidak, pembayaran UKT merupakan syarat wajib untuk melakukan registrasi. Mahasiswa harus melunasi UKT terlebih dahulu sebelum dapat mengakses sistem registrasi.",
        },
      ],
    },
    {
      category: "Cuti & Aktif Kembali",
      questions: [
        {
          q: "Berapa lama maksimal mahasiswa dapat mengambil cuti?",
          a: "Mahasiswa dapat mengambil cuti maksimal 2 semester berturut-turut atau 4 semester tidak berturut-turut selama masa studi.",
        },
        {
          q: "Apa saja syarat untuk mengajukan cuti akademik?",
          a: "Syarat cuti akademik: (1) Telah menempuh minimal 2 semester, (2) IPK minimal 2.00, (3) Tidak sedang dalam status cuti, (4) Surat permohonan cuti, (5) Persetujuan orang tua/wali.",
        },
        {
          q: "Bagaimana cara aktif kembali setelah cuti?",
          a: "Ajukan permohonan aktif kembali melalui fakultas dengan menyertakan surat permohonan dan memastikan tidak ada tunggakan administrasi. Proses membutuhkan 3-5 hari kerja.",
        },
      ],
    },
    {
      category: "KRS & Perkuliahan",
      questions: [
        {
          q: "Berapa batas maksimal SKS yang dapat diambil per semester?",
          a: "Batas maksimal SKS tergantung IPK semester sebelumnya: IPK ≥ 3.00 dapat mengambil maksimal 24 SKS, IPK 2.50-2.99 maksimal 21 SKS, IPK < 2.50 maksimal 18 SKS.",
        },
        {
          q: "Kapan periode pengisian dan perubahan KRS?",
          a: "Pengisian KRS dilakukan pada 2 minggu pertama semester. Perubahan KRS (add/drop) dapat dilakukan dalam 2 minggu setelah perkuliahan dimulai.",
        },
        {
          q: "Apakah bisa mengambil mata kuliah dari fakultas lain?",
          a: "Ya, mahasiswa dapat mengambil mata kuliah lintas fakultas sesuai program MBKM dengan persetujuan dosen pembimbing akademik dan fakultas terkait.",
        },
      ],
    },
    {
      category: "Yudisium & Wisuda",
      questions: [
        {
          q: "Apa saja syarat mengikuti yudisium?",
          a: "Syarat yudisium: (1) Telah menyelesaikan seluruh SKS, (2) IPK sesuai ketentuan, (3) Bebas tunggakan administrasi, (4) Lulus ujian komprehensif/skripsi, (5) Menyerahkan hardcopy dan softcopy skripsi.",
        },
        {
          q: "Berapa lama waktu tunggu dari yudisium hingga wisuda?",
          a: "Biasanya wisuda dilaksanakan 1-2 bulan setelah yudisium, tergantung jadwal yang telah ditetapkan universitas. Jadwal lengkap dapat dilihat di kalender akademik.",
        },
        {
          q: "Apakah wajib mengikuti wisuda setelah yudisium?",
          a: "Tidak wajib, namun sangat disarankan. Lulusan yang tidak mengikuti wisuda akan menerima ijazah melalui prosedur pengambilan di fakultas.",
        },
      ],
    },
    {
      category: "Administrasi Dokumen",
      questions: [
        {
          q: "Bagaimana cara mengurus legalisasi ijazah?",
          a: "Datang ke loket layanan dengan membawa dokumen asli, fotocopy, KTP/KTM, dan bukti pembayaran. Proses membutuhkan 3-5 hari kerja.",
        },
        {
          q: "Apakah bisa mengurus legalisasi secara online?",
          a: "Ya, mulai April 2026 tersedia layanan legalisasi online untuk memudahkan alumni. Informasi lengkap tersedia di menu Layanan.",
        },
        {
          q: "Berapa lama waktu penerbitan transkrip akademik?",
          a: "Transkrip akademik dapat diterbitkan dalam 3-5 hari kerja setelah pengajuan dan pembayaran selesai.",
        },
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl mb-4 text-center flex items-center justify-center gap-3">
            <HelpCircle className="w-10 h-10" />
            FAQ
          </h1>
          <p className="text-lg text-center text-primary-foreground/90 max-w-2xl mx-auto">
            Pertanyaan yang Sering Diajukan seputar layanan akademik
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl text-primary mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6" />
                  {category.category}
                </h2>

                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const index = catIndex * 100 + qIndex;
                    const isOpen = openIndex === index;

                    return (
                      <div key={index} className="border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full px-6 py-4 flex items-start justify-between gap-4 text-left hover:bg-accent transition-colors"
                        >
                          <span className="flex-1">{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 flex-shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-muted border-t border-border">
                            <p className="text-muted-foreground">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-accent border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl text-primary mb-4">Tidak Menemukan Jawaban yang Anda Cari?</h3>
            <p className="text-muted-foreground mb-6">
              Silakan hubungi helpdesk kami untuk mendapatkan bantuan lebih lanjut
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
