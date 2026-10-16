import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jadwal Misa",
  description: "Jadwal misa harian, mingguan, dan hari raya di Gereja Katolik ST. Yoseph Balige",
};

export default function JadwalMisaPage() {
  const scheduleHarian = [
    { hari: "Senin - Rabu", waktu: "06.00 WIB", lokasi: "Gereja Paroki", keterangan: "" },
    { hari: "Kamis", waktu: "18.00 WIB", lokasi: "Gereja Paroki", keterangan: "Khusus OMK" },
    { hari: "Jumat - Sabtu", waktu: "06.00 WIB", lokasi: "Gereja Paroki", keterangan: "" },
  ];

  const scheduleMingguan = [
    { waktu: "08.00 WIB", lokasi: "Gereja Paroki", keterangan: "Sesi 1" },
    { waktu: "10.00 WIB", lokasi: "Gereja Paroki", keterangan: "Sesi 2" },
  ];

  const scheduleHariRaya = [
    { acara: "Malam Tahun Baru", waktu: "19.00 WIB", tanggal: "31 Desember" },
    { acara: "Hari Raya Natal", waktu: "09.00 WIB", tanggal: "25 Desember" },
    { acara: "Hari Raya Tahun Baru", waktu: "09.00 WIB", tanggal: "1 Januari" },
    { acara: "Rabu Abu", waktu: "19.00 WIB", tanggal: "Sesuai kalender liturgi" },
    { acara: "Kamis Putih", waktu: "19.00 WIB", tanggal: "Sesuai kalender liturgi" },
    { acara: "Jumat Agung", waktu: "15.00 WIB", tanggal: "Sesuai kalender liturgi" },
    { acara: "Sabtu Suci", waktu: "19.00 WIB", tanggal: "Sesuai kalender liturgi" },
    { acara: "Minggu Paskah", waktu: "10.00 WIB", tanggal: "Sesuai kalender liturgi" },
    { acara: "Malam Natal / Vigili Natal", waktu: "19.00 WIB", tanggal: "24 Desember" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gereja.jpeg"
            alt="Gereja Katolik ST. Yoseph Balige"
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/92 via-navy-700/90 to-navy-800/92"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-transparent to-transparent"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full mb-6">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-gold text-sm font-medium">Jadwal Perayaan Ekaristi</span>
            </div>
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-cream mb-6">
              Jadwal Misa
            </h1>
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed">
              Bergabunglah bersama kami dalam perayaan Ekaristi. Semua jadwal menggunakan Waktu Indonesia Barat (WIB).
            </p>
          </div>
        </Container>
      </section>

      {/* Misa Harian */}
      <Section className="bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-4xl text-navy mb-4">Misa Harian</h2>
              <p className="text-navy/70">Senin - Sabtu</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scheduleHarian.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-navy/5"
                >
                  <h3 className="font-serif font-bold text-xl text-navy mb-4">{item.hari}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-navy">{item.waktu}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span className="text-navy/70">{item.lokasi}</span>
                    </div>
                    {item.keterangan && (
                      <div className="mt-3 pt-3 border-t border-navy/10">
                        <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full">
                          {item.keterangan}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Misa Mingguan */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-4xl text-navy mb-4">Misa Mingguan</h2>
              <p className="text-navy/70">Setiap Hari Minggu</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {scheduleMingguan.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-navy to-navy-700 rounded-2xl p-8 shadow-lg text-cream"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-bl-full"></div>
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-gold/20 text-gold text-sm font-semibold rounded-full mb-4">
                      {item.keterangan}
                    </div>
                    <h3 className="font-serif font-bold text-3xl mb-4">{item.waktu}</h3>
                    <div className="flex items-center gap-3 text-cream/80">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>{item.lokasi}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Misa Hari Raya */}
      <Section className="bg-gradient-to-b from-cream to-cream-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-4xl text-navy mb-4">Misa Hari Raya</h2>
              <p className="text-navy/70">Perayaan liturgi khusus sepanjang tahun</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-navy text-cream">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Acara</th>
                      <th className="px-6 py-4 text-left font-semibold">Tanggal</th>
                      <th className="px-6 py-4 text-left font-semibold">Waktu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/5">
                    {scheduleHariRaya.map((item, index) => (
                      <tr key={index} className="hover:bg-gold/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-navy">{item.acara}</td>
                        <td className="px-6 py-4 text-navy/70">{item.tanggal}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-2 text-gold font-semibold">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {item.waktu}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Info Note */}
      <Section className="bg-navy text-cream">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4">Catatan Penting</h3>
            <p className="text-cream/80 leading-relaxed mb-2">
              Jadwal dapat berubah sewaktu-waktu mengikuti kalender liturgi dan keputusan paroki.
            </p>
            <p className="text-cream/80 leading-relaxed">
              Untuk informasi lebih lanjut, silakan hubungi sekretariat paroki.
            </p>
            <p className="text-sm text-cream/60 mt-6">
              Sumber: Keuskupan Agung Medan - Data yang perlu dikonfirmasi paroki
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
