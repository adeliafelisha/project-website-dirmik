import { Link } from "react-router";
import { Target, Eye, Users, Building2, ArrowRight } from "lucide-react";

export function Profile() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl mb-4 text-center">Profil Direktorat Akademik</h1>
          <p className="text-lg text-center text-primary-foreground/90 max-w-2xl mx-auto">
            Mengenal lebih dekat Direktorat Akademik Universitas Padjadjaran
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl text-primary mb-6 text-center">Tentang Direktorat Akademik</h2>
            <div className="prose max-w-none">
              <p className="text-muted-foreground mb-4 text-center">
                Direktorat Akademik Universitas Padjadjaran merupakan unit yang berperan dalam mendukung layanan dan
                pengelolaan akademik di lingkungan Unpad. Kami berkomitmen untuk memberikan pelayanan akademik yang
                profesional, efisien, dan berorientasi pada kebutuhan sivitas akademika.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/profil/tentang"
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-lg mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-lg group-hover:text-primary transition-colors">Tentang Direktorat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sejarah, tugas, dan fungsi Direktorat Akademik
              </p>
              <div className="flex items-center gap-2 text-primary text-sm">
                Selengkapnya
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/profil/visi-misi"
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-lg mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-lg group-hover:text-primary transition-colors">Visi & Misi</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Visi, misi, dan tujuan Direktorat Akademik
              </p>
              <div className="flex items-center gap-2 text-primary text-sm">
                Selengkapnya
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/profil/struktur"
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-primary group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-lg mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-lg group-hover:text-primary transition-colors">Struktur Organisasi</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Struktur organisasi dan pimpinan direktorat
              </p>
              <div className="flex items-center gap-2 text-primary text-sm">
                Selengkapnya
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl text-primary mb-8 text-center">Pimpinan Direktorat</h2>
            <div className="bg-gradient-to-br from-accent to-white rounded-xl shadow-lg p-8 border border-border">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-20 h-20 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl text-primary mb-2">Prof. Dr. Aliya Nur Hasanah, S.Si., Apt., M.Si.</h3>
                  <p className="text-muted-foreground mb-4">Direktur Akademik</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong>Kantor:</strong> Gedung Rektorat Unpad, Jatinangor
                    </p>
                    <p>
                      <strong>Email:</strong> akademik@unpad.ac.id
                    </p>
                    <p>
                      <strong>Telepon:</strong> (022) 8772 2186
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
