import Link from "next/link";

export function CTASection() {
  const cards = [
    {
      title: "Jadwal Misa",
      description: "Misa harian, mingguan, dan hari raya",
      href: "/jadwal-misa",
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Tentang Gereja",
      description: "Sejarah, visi misi, dan komunitas",
      href: "/tentang",
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Kegiatan & Berita",
      description: "Update terbaru dari paroki",
      href: "/kegiatan",
      iconSvg: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header - clean & minimal */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-navy/20"></div>
            <span className="text-sm font-medium text-navy/50 uppercase tracking-[0.2em]">
              Jelajahi
            </span>
            <div className="h-px w-8 bg-navy/20"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy mb-6">
            Apa yang Anda Cari?
          </h2>
          <p className="text-lg sm:text-xl text-navy/60 max-w-2xl mx-auto leading-relaxed">
            Temukan informasi yang Anda butuhkan dengan mudah
          </p>
        </div>

        {/* Cards grid - sophisticated & clean */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <Link
              key={card.href}
              href={card.href}
              className="group block"
            >
              <div className="relative h-full p-10 bg-gradient-to-br from-cream to-white rounded-2xl border border-navy/5 transition-all duration-500 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
                {/* Icon container - subtle circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-navy/5 text-navy group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300 group-hover:scale-110">
                  {card.iconSvg}
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-base text-navy/60 mb-8 leading-relaxed">
                  {card.description}
                </p>

                {/* Arrow - elegant & minimal */}
                <div className="inline-flex items-center gap-2 text-navy/40 group-hover:text-gold group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm font-semibold uppercase tracking-wide">Lihat Detail</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Subtle decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
