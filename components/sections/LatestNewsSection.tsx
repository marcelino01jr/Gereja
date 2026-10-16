import Link from "next/link";

export function LatestNewsSection() {
  // Mock data - akan diganti dengan data dari Supabase
  const news = [
    {
      title: "Perayaan Hari Raya Natal 2026",
      excerpt: "Mari bergabung dalam perayaan kelahiran Yesus Kristus. Misa malam Natal pada 24 Desember pukul 19.00 WIB.",
      category: "Liturgi",
      date: "2026-11-15",
      image: "/placeholder-news-1.jpg",
      slug: "perayaan-natal-2026",
    },
    {
      title: "Kegiatan OMK: Retret Akhir Tahun",
      excerpt: "Orang Muda Katolik mengadakan retret akhir tahun dengan tema 'Pembaharuan Iman'.",
      category: "OMK",
      date: "2026-11-10",
      image: "/placeholder-news-2.jpg",
      slug: "retret-omk-2026",
    },
    {
      title: "Bakti Sosial Kepada Masyarakat",
      excerpt: "Paroki mengadakan bakti sosial dengan membagikan sembako kepada keluarga yang membutuhkan.",
      category: "Sosial",
      date: "2026-11-05",
      image: "/placeholder-news-3.jpg",
      slug: "bakti-sosial-november",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full text-sm font-medium text-navy mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              Berita & Kegiatan
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy">
              Update Terbaru
            </h2>
          </div>
          <Link
            href="/kegiatan"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-cream rounded-xl font-medium hover:bg-navy-700 transition-colors"
          >
            Lihat Semua
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Link
              key={item.slug}
              href={`/kegiatan/${item.slug}`}
              className="group"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Image placeholder */}
                <div className="relative h-56 bg-gradient-to-br from-navy to-navy-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-cream/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-gold text-navy text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-navy/60 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <time dateTime={item.date}>
                      {new Date(item.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-navy mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-navy/70 leading-relaxed mb-4 line-clamp-3 flex-1">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Baca selengkapnya</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
