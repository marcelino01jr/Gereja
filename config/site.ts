/**
 * Konfigurasi utama website Gereja Katolik ST. Yoseph Balige
 * Sumber data: Keuskupan Agung Medan (https://archdioceseofmedan.or.id/paroki-balige/)
 * Catatan: Data yang belum dikonfirmasi paroki ditandai "DATA YANG PERLU DIKONFIRMASI"
 */

export const siteConfig = {
  // Nama resmi gereja - WAJIB dipakai di seluruh website
  name: "Gereja Katolik ST. Yoseph Balige",
  shortName: "Paroki Balige",
  patron: "Santo Yosef", // Pelindung
  
  description: "Website resmi Gereja Katolik ST. Yoseph Balige - Informasi jadwal misa, kegiatan, sakramen, dan pelayanan umat di Balige, Toba, Sumatera Utara.",
  
  // Kontak (sumber: Keuskupan Agung Medan)
  contact: {
    address: "Jl. Tandang Buhit No. 1, Desa Pardede Onan, Kec. Balige, Kab. Toba 22313",
    phone: ["0632-21192", "0813 9674 4755"],
    email: "DATA YANG PERLU DIKONFIRMASI", // Tidak tersedia di sumber
    whatsapp: "DATA YANG PERLU DIKONFIRMASI", // Tidak tersedia di sumber
    socialMedia: {
      facebook: "DATA YANG PERLU DIKONFIRMASI",
      instagram: "DATA YANG PERLU DIKONFIRMASI",
      youtube: "DATA YANG PERLU DIKONFIRMASI",
    }
  },
  
  // Lokasi (koordinat dari sumber)
  location: {
    lat: 2.3336015,
    lng: 99.0586785,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.5095148739483!2d99.05867847396196!3d2.3336015576265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302e046095675b85%3A0x529e0b9dca691d75!2sGereja%20Katolik%20Santo%20Josep%20Paroki%20Balige!5e0!3m2!1sid!2sid!4v1708419828899!5m2!1sid!2sid",
    mapsUrl: "https://goo.gl/maps/PLACEHOLDER", // DATA YANG PERLU DIKONFIRMASI
  },
  
  // Profil paroki
  profile: {
    establishedYear: 1935, // Buku paroki sejak 1 Januari 1935
    establishedDate: "1 Januari 1935",
    totalFamilies: "1.912 KK", // Data BIDUK per 05/02/2024
    totalMembers: "7.700 jiwa",
    dataDate: "05/02/2024", // Tanggal data BIDUK
    dataSource: "BIDUK Keuskupan Agung Medan",
    
    // Pastor paroki - perlu dikonfirmasi
    pastor: {
      name: "RP. Eno Hirian Samosir OFMCap",
      serviceStart: "6 Sep 2026",
      serviceEnd: "5 Sep 2031",
      note: "DATA YANG PERLU DIKONFIRMASI - dari tabel Keuskupan Agung Medan",
    }
  },
  
  // Brand colors
  colors: {
    cream: "#FAF7F0",
    navy: "#1F2A44",
    gold: "#C9A24B",
  },
  
  // SEO keywords
  keywords: [
    "Gereja Katolik Balige",
    "Gereja Katolik ST Yoseph Balige",
    "Jadwal Misa Balige",
    "Paroki Balige",
    "Gereja Katolik Toba",
    "Misa Katolik Balige",
    "Santo Yosef Balige",
  ],
  
  // URL (akan disesuaikan setelah domain dikonfirmasi)
  url: "DATA YANG PERLU DIKONFIRMASI",
  
  // Open Graph image
  ogImage: "/og-image.jpg", // Placeholder - perlu foto gereja
} as const;

export type SiteConfig = typeof siteConfig;
