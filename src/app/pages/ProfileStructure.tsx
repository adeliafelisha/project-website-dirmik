import { Users, User } from "lucide-react";

export function ProfileStructure() {
  const structure = [
    {
      position: "Direktur Akademik",
      name: "Prof. Dr. Aliya Nur Hasanah, S.Si., Apt., M.Si.",
    },
    {
      position: "Subdirektorat Registrasi dan Statistik",
      name: "Subdirektorat 1",
    },
    {
      position: "Subdirektorat Kurikulum dan Pembelajaran",
      name: "Subdirektorat 2",
    },
    {
      position: "Subdirektorat Evaluasi dan Pengembangan Akademik",
      name: "Subdirektorat 3",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl mb-4 text-center">Struktur Organisasi</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Struktur organisasi Direktorat Akademik Universitas Padjadjaran
              </p>
            </div>

            {/* Director */}
            <div className="mb-12">
              <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary to-blue-900 text-primary-foreground rounded-xl p-8 shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Users className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl mb-2">{structure[0].position}</h3>
                  <p className="text-lg text-primary-foreground/90">{structure[0].name}</p>
                </div>
              </div>
            </div>

            {/* Subdirectorates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {structure.slice(1).map((item, index) => (
                <div
                  key={index}
                  className="bg-accent border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <User className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="mb-3 text-primary">{item.position}</h3>
                    <p className="text-sm text-muted-foreground">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Staff Units */}
            <div className="mt-12">
              <h2 className="text-2xl text-primary mb-6 text-center">Unit Pelaksana</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Bagian Registrasi Mahasiswa",
                  "Bagian Statistik dan Pelaporan",
                  "Bagian Kurikulum",
                  "Bagian Pembelajaran",
                  "Bagian Evaluasi Akademik",
                  "Bagian Sistem Informasi Akademik",
                ].map((unit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{unit}</span>
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
