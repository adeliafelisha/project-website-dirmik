import { Eye, Target, Award } from "lucide-react";

export function ProfileVisionMission() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl mb-4 text-center">Visi & Misi</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-accent to-white rounded-xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl text-primary mb-4">Visi</h2>
                  <p className="text-lg text-foreground leading-relaxed">
                    Menjadi direktorat akademik yang unggul dan terpercaya dalam mendukung penyelenggaraan pendidikan
                    tinggi berkualitas di Universitas Padjadjaran yang berlandaskan pada inovasi, integritas, dan
                    pelayanan prima.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-accent to-white rounded-xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl text-primary mb-6">Misi</h2>
                  <div className="space-y-4">
                    {[
                      "Mengelola dan mengembangkan sistem administrasi akademik yang efektif, efisien, dan akuntabel",
                      "Memberikan pelayanan akademik yang berkualitas dan responsif terhadap kebutuhan sivitas akademika",
                      "Mengembangkan dan menerapkan kebijakan akademik yang mendukung pencapaian standar pendidikan tinggi",
                      "Memfasilitasi pengembangan kurikulum dan pembelajaran yang inovatif dan relevan",
                      "Mengelola sistem informasi akademik yang terintegrasi dan mudah diakses",
                      "Mendorong peningkatan kualitas akademik melalui monitoring dan evaluasi berkelanjutan",
                    ].map((mission, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                          <span>{index + 1}</span>
                        </div>
                        <p className="text-foreground pt-1">{mission}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Goals */}
            <div className="bg-gradient-to-br from-accent to-white rounded-xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl text-primary mb-6">Tujuan</h2>
                  <div className="space-y-3">
                    {[
                      "Terwujudnya sistem administrasi akademik yang terstandar dan berbasis teknologi",
                      "Meningkatnya kepuasan sivitas akademika terhadap layanan akademik",
                      "Terlaksananya kebijakan akademik yang konsisten dan berkelanjutan",
                      "Terselenggaranya proses pembelajaran yang berkualitas dan berorientasi pada capaian pembelajaran",
                      "Tersedianya data dan informasi akademik yang akurat dan terkini",
                    ].map((goal, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                        <p className="text-foreground">{goal}</p>
                      </div>
                    ))}
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
