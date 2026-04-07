import { Link } from "react-router";
import { Home, Search, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl text-primary mb-4">404</h1>
            <h2 className="text-2xl sm:text-3xl text-foreground mb-4">Halaman Tidak Ditemukan</h2>
            <p className="text-muted-foreground">
              Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan atau tidak ada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              Kembali ke Beranda
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-white rounded-md hover:bg-accent transition-colors"
            >
              <Search className="w-5 h-5" />
              Cari Informasi
            </Link>
          </div>

          <div className="mt-12 p-6 bg-white border border-border rounded-lg">
            <h3 className="mb-4">Tautan Populer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link to="/layanan" className="text-primary hover:underline">
                Layanan Akademik
              </Link>
              <Link to="/pengumuman" className="text-primary hover:underline">
                Pengumuman
              </Link>
              <Link to="/unduhan" className="text-primary hover:underline">
                Unduhan Dokumen
              </Link>
              <Link to="/kontak" className="text-primary hover:underline">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
