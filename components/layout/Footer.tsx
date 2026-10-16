import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-navy via-navy-700 to-navy-900 text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="font-serif font-bold text-2xl mb-4 text-gold">{siteConfig.name}</h3>
            <p className="text-cream/80 leading-relaxed mb-4">
              Komunitas iman yang hangat dan terbuka, melayani umat di Balige sejak {siteConfig.profile.establishedYear} dengan kasih {siteConfig.patron} sebagai pelindung kami.
            </p>
            <div className="flex items-center gap-2 text-sm text-cream/60">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>{siteConfig.profile.totalFamilies} • {siteConfig.profile.totalMembers}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { href: "/tentang", label: "Tentang Gereja" },
                { href: "/jadwal-misa", label: "Jadwal Misa" },
                { href: "/sakramen", label: "Sakramen" },
                { href: "/kegiatan", label: "Kegiatan" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors inline-flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Kontak</h4>
            <address className="not-italic text-cream/70 text-sm space-y-3">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="leading-relaxed">Jl. Tandang Buhit No. 1, Balige, Toba 22313</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${siteConfig.contact.phone[0].replace(/[\s-]/g, "")}`} className="hover:text-gold transition-colors">
                  {siteConfig.contact.phone[0]}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
            <p>&copy; {currentYear} {siteConfig.name}. Hak cipta dilindungi.</p>
            <p>Dibuat dengan ❤️ untuk kemuliaan Tuhan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
