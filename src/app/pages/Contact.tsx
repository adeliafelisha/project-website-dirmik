import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl mb-4 text-center">Hubungi Kami</h1>
          <p className="text-lg text-center text-primary-foreground/90 max-w-2xl mx-auto">
            Tim helpdesk kami siap membantu Anda dengan pertanyaan terkait layanan akademik
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl text-primary mb-6">Kirim Pertanyaan</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Nama Lengkap <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="nama@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block mb-2">
                    Kategori Pertanyaan <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="category"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Pilih kategori</option>
                    <option value="registrasi">Registrasi</option>
                    <option value="krs">KRS</option>
                    <option value="cuti">Cuti & Aktif Kembali</option>
                    <option value="yudisium">Yudisium & Wisuda</option>
                    <option value="legalisasi">Legalisasi Dokumen</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Pesan <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl text-primary mb-6">Informasi Kontak</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">Alamat</h3>
                    <p className="text-muted-foreground text-sm">
                      Direktorat Akademik
                      <br />
                      Gedung Rektorat Universitas Padjadjaran
                      <br />
                      Jl. Raya Bandung-Sumedang KM 21
                      <br />
                      Jatinangor, Sumedang 45363
                      <br />
                      Jawa Barat, Indonesia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">Telepon</h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      <a href="tel:+622287722186" className="hover:text-primary transition-colors">
                        (022) 8772 2186
                      </a>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+622287722187" className="hover:text-primary transition-colors">
                        (022) 8772 2187
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="mailto:akademik@unpad.ac.id" className="hover:text-primary transition-colors">
                        akademik@unpad.ac.id
                      </a>
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">Jam Layanan</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Senin - Kamis: 08.00 - 16.00 WIB</p>
                      <p>Jumat: 08.00 - 16.30 WIB</p>
                      <p className="text-destructive mt-2">Sabtu - Minggu: Tutup</p>
                    </div>
                  </div>
                </div>

                {/* Chatbot */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-primary to-blue-900 text-primary-foreground rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">Chatbot Akademik</h3>
                    <p className="text-sm text-primary-foreground/90 mb-3">
                      Dapatkan jawaban cepat dari chatbot AI kami yang tersedia 24/7
                    </p>
                    <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm">
                      Mulai Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-primary mb-8 text-center">Lokasi Kami</h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-accent rounded-xl border border-border overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Gedung Rektorat Universitas Padjadjaran
                  <br />
                  Jatinangor, Sumedang
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
