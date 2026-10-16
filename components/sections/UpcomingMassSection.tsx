import Link from "next/link";

export function UpcomingMassSection() {
  const schedule = [
    {
      day: "Senin - Rabu",
      time: "06.00 WIB",
      location: "Gereja Paroki",
      type: "Misa Harian",
    },
    {
      day: "Kamis",
      time: "18.00 WIB",
      location: "Gereja Paroki",
      type: "Misa OMK",
      highlight: true,
    },
    {
      day: "Jumat - Sabtu",
      time: "06.00 WIB",
      location: "Gereja Paroki",
      type: "Misa Harian",
    },
    {
      day: "Minggu",
      time: "08.00 & 10.00 WIB",
      location: "Gereja Paroki",
      type: "Misa Mingguan",
      highlight: true,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-navy rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Jadwal Misa
          </div>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy mb-4">
            Bergabunglah dalam Perayaan Ekaristi
          </h2>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto">
            Kami mengundang Anda untuk merayakan Ekaristi bersama komunitas kami
          </p>
        </div>

        {/* Schedule cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                item.highlight
                  ? "bg-gradient-to-br from-navy to-navy-700 text-cream shadow-lg shadow-navy/20"
                  : "bg-cream border border-navy/10 text-navy hover:shadow-md"
              }`}
            >
              {/* Badge */}
              {item.highlight && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              )}

              <div className="text-sm font-medium mb-2 opacity-70">{item.type}</div>
              <h3 className="font-serif font-bold text-2xl mb-3">{item.day}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className={`w-4 h-4 ${item.highlight ? "text-gold" : "text-gold"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">{item.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className={`w-4 h-4 ${item.highlight ? "text-gold" : "text-gold"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-sm">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/jadwal-misa"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-cream rounded-xl font-medium hover:bg-navy-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Lihat Jadwal Lengkap
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-sm text-navy/60 mt-4">
            Termasuk jadwal misa hari raya dan misa khusus
          </p>
        </div>
      </div>
    </section>
  );
}
