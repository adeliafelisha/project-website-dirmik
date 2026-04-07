import { Building2, Target, CheckCircle } from "lucide-react";

export function ProfileAbout() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl mb-4 text-center">Tentang Direktorat Akademik</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Direktorat Akademik Universitas Padjadjaran merupakan unit yang berperan penting dalam mendukung
                layanan dan pengelolaan akademik di lingkungan Universitas Padjadjaran. Kami berkomitmen untuk
                memberikan pelayanan terbaik kepada seluruh sivitas akademika.
              </p>

              <h2 className="text-2xl text-primary mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8" />
                Tugas Pokok
              </h2>
              <div className="space-y-4 mb-12">
                {[
                  "Mengelola dan mengkoordinasikan kegiatan akademik di seluruh fakultas",
                  "Menyusun dan mengembangkan kebijakan akademik universitas",
                  "Menyelenggarakan administrasi akademik mahasiswa",
                  "Mengkoordinasikan pelaksanaan kurikulum dan pembelajaran",
                  "Mengelola sistem informasi akademik",
                ].map((task, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">{task}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl text-primary mb-6 flex items-center gap-3">
                <Target className="w-8 h-8" />
                Fungsi Direktorat
              </h2>
              <div className="space-y-4">
                {[
                  "Perencanaan dan pengembangan program akademik",
                  "Pengelolaan registrasi dan administrasi akademik mahasiswa",
                  "Pengawasan dan evaluasi pelaksanaan kegiatan akademik",
                  "Penyusunan kalender akademik universitas",
                  "Pengelolaan data dan informasi akademik",
                  "Pelayanan administrasi yudisium dan wisuda",
                  "Koordinasi dengan fakultas dan unit terkait",
                ].map((func, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">{func}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
