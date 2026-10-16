import Link from "next/link";

export function AnnouncementsSection() {
  // Mock data - akan diganti dengan data dari Supabase
  const announcements = [
    {
      id: 1,
      title: "Pendaftaran Krisma 2027 Dibuka",
      content: "Pendaftaran calon Krisma untuk tahun 2027 telah dibuka. Silakan mendaftar di sekretariat paroki.",
      date: "2026-10-15",
      urgent: true,
    },
    {
      id: 2,
      title: "Perubahan Jadwal Misa Kamis",
      content: "Misa Kamis khusus OMK untuk minggu ini dipindahkan ke pukul 19.00 WIB.",
      date: "2026-10-10",
      urgent: true,
    },
    {
      id: 3,
      title: "Rapat Koordinasi Pengurus Lingkungan",
      content: "Rapat koordinasi pengurus lingkungan akan dilaksanakan pada hari Sabtu, 12 Oktober 2026 pukul 15.00 WIB di aula paroki.",
      date: "2026-10-08",
      urgent: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              Pengumuman Paroki
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy mb-4">
              Informasi Penting
            </h2>
            <p className="text-navy/70 text-lg">
              Tetap update dengan pengumuman dan informasi terbaru dari paroki
            </p>
          </div>

          {/* Announcements list */}
          <div className="space-y-4 mb-8">
            {announcements.map((announcement, index) => (
              <div
                key={announcement.id}
                className={`relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 ${
                  announcement.urgent
                    ? "border-gold bg-gradient-to-r from-gold/5 to-transparent"
                    : "border-navy/20"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Date & urgent badge */}
                  <div className="flex-shrink-0">
                    <div className="flex items-start gap-3">
                      {announcement.urgent && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-gold text-navy text-xs font-bold rounded-full">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          URGENT
                        </div>
                      )}
                      <div className="text-sm text-navy/60">
                        {new Date(announcement.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-navy mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-navy/70 leading-relaxed">
                      {announcement.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/pengumuman"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy border-2 border-navy/10 rounded-xl font-medium hover:border-gold hover:text-gold transition-colors shadow-md hover:shadow-lg"
            >
              Lihat Semua Pengumuman
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-cream" preserveAspectRatio="none" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48h1440V0S1140 48 720 48 0 0 0 0v48z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}
