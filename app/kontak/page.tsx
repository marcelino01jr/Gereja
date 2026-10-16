import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Hubungi ${siteConfig.name} - Alamat, telepon, email, dan lokasi di peta`,
};

export default function KontakPage() {
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
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full mb-6">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-gold text-sm font-medium">Hubungi Kami</span>
            </div>
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-cream mb-6">
              Kontak
            </h1>
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed">
              Kami siap melayani Anda. Jangan ragu untuk menghubungi sekretariat paroki.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <Section className="bg-cream -mt-16 relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Alamat */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl text-navy mb-3">Alamat</h3>
              <address className="not-italic text-navy/70 leading-relaxed">
                {siteConfig.contact.address}
              </address>
            </div>

            {/* Telepon */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl text-navy mb-3">Telepon</h3>
              <div className="space-y-2">
                {siteConfig.contact.phone.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block text-navy/70 hover:text-gold transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Jam Pelayanan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-xl text-navy mb-3">Jam Pelayanan</h3>
              <div className="space-y-2 text-navy/70">
                <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
                <p>Sabtu: 08.00 - 12.00 WIB</p>
                <p className="text-sm text-navy/50 mt-3">*Kecuali hari libur</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={`https://wa.me/${siteConfig.contact.phone[1].replace(/[\s-]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hubungi via WhatsApp
              </Button>
            </a>
            <a
              href={siteConfig.location.mapEmbedUrl.replace("/embed", "/dir")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lihat di Google Maps
              </Button>
            </a>
          </div>
        </Container>
      </Section>

      {/* Map */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-8">
            <h2 className="font-serif font-bold text-4xl text-navy mb-4">Lokasi Kami</h2>
            <p className="text-navy/70">Temukan kami di peta</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={siteConfig.location.mapEmbedUrl}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Lokasi ${siteConfig.name}`}
              ></iframe>
            </div>
          </div>
        </Container>
      </Section>

      {/* Info Note */}
      <Section className="bg-gradient-to-br from-navy to-navy-800 text-cream">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-6">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4">Ingin Berkunjung?</h3>
            <p className="text-cream/80 leading-relaxed mb-6">
              Kami dengan senang hati menyambut Anda. Untuk keperluan khusus seperti pendaftaran sakramen atau konseling, kami sarankan untuk menghubungi sekretariat terlebih dahulu.
            </p>
            <Link href="/jadwal-misa">
              <Button variant="secondary" size="lg">
                Lihat Jadwal Misa
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
