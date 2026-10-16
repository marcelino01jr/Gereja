import { siteConfig } from "@/config/site";
import Link from "next/link";

export function InfoCardsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy mb-4">
            Informasi Cepat
          </h2>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto">
            Temukan informasi penting yang Anda butuhkan dalam sekali klik
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Misa Berikutnya */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-navy/5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-navy mb-2">Misa Berikutnya</h3>
                <div className="space-y-1 text-sm text-navy/70">
                  <p className="font-medium text-gold">Minggu, 6 Oktober 2026</p>
                  <p>Sesi 1: 08.00 WIB</p>
                  <p>Sesi 2: 10.00 WIB</p>
                </div>
                <Link href="/jadwal-misa" className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-gold-600 mt-3">
                  Lihat semua jadwal
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Lokasi */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-navy/5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-navy mb-2">Lokasi Gereja</h3>
                <p className="text-sm text-navy/70 leading-relaxed mb-3">
                  {siteConfig.contact.address}
                </p>
                <Link href="/kontak" className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-gold-600">
                  Lihat di Google Maps
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Kontak */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-navy/5 md:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-navy mb-2">Hubungi Kami</h3>
                <div className="space-y-1 text-sm text-navy/70">
                  <p>Telepon: {siteConfig.contact.phone[0]}</p>
                  <p>WhatsApp: {siteConfig.contact.phone[1]}</p>
                </div>
                <Link href="/kontak" className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-gold-600 mt-3">
                  Informasi kontak lengkap
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-sm text-navy/70">
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Informasi dapat berubah. Hubungi sekretariat untuk konfirmasi.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
