# Website Gereja Katolik ST. Yoseph Balige

Website resmi Gereja Katolik ST. Yoseph Balige - Informasi jadwal misa, kegiatan, sakramen, dan pelayanan umat di Balige, Toba, Sumatera Utara.

## Status Pengembangan

**Tahap 1 (F1-10): Setup & Design System** ✅ Selesai
- Project setup dengan Next.js 15 + TypeScript + Tailwind CSS
- Design system dengan brand colors (Cream, Navy, Gold)
- Navbar transparan→solid dengan hamburger mobile
- Footer lengkap dengan kontak dan informasi
- Konfigurasi site di `config/site.ts`

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Fonts**: Crimson Text (serif) + Inter (sans-serif)
- **Database**: Supabase (akan diimplementasikan Tahap 2)
- **Deployment**: Vercel

## Struktur Project

```
d:\Website Gereje/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout dengan navbar & footer
│   ├── page.tsx      # Halaman beranda (placeholder)
│   └── globals.css   # Tailwind CSS global styles
├── components/
│   ├── ui/           # Komponen UI reusable (Button, Container, Section)
│   ├── layout/       # Navbar & Footer
│   └── sections/     # Section components (akan dibuat)
├── config/
│   └── site.ts       # Konfigurasi site (nama, kontak, warna, SEO)
├── features/         # Feature-based modules (akan dibuat)
├── lib/              # Utilities dan helpers (akan dibuat)
├── types/            # TypeScript types (akan dibuat)
└── public/           # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ dan npm
- Git

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat website.

## Brand Guidelines

### Colors

- **Cream** (`#FAF7F0`): Background utama
- **Navy** (`#1F2A44`): Teks dan kontras
- **Gold** (`#C9A24B`): Aksen (digunakan secukupnya)

### Typography

- **Headings**: Crimson Text (serif, elegan)
- **Body**: Inter (sans-serif, mudah dibaca)

### Design Principles

- Modern Catholic Church + Warm Community + Elegant
- Mobile-first responsive design
- Whitespace yang lega
- Shadow halus
- Animasi subtle (hormati `prefers-reduced-motion`)

## Data Sources

Data awal bersumber dari:
- **Keuskupan Agung Medan**: https://archdioceseofmedan.or.id/paroki-balige/
- Status: "DATA YANG PERLU DIKONFIRMASI" menandai informasi yang perlu verifikasi paroki

Lihat `config/site.ts` untuk detail data yang sudah ada dan yang masih placeholder.

## Aturan Penting

### Nama Resmi
**WAJIB** menggunakan nama: **"Gereja Katolik ST. Yoseph Balige"**
- ST. dengan titik
- Yoseph dengan "ph"
- Tidak boleh variasi lain (Josep, Yosef, Joseph, dll)

Nama tersimpan di `config/site.ts` dan dipakai di seluruh aplikasi.

## Development Workflow

1. **Tahap 1**: Setup project, design system, navbar & footer ✅
2. **Tahap 2**: Skema database Supabase + seed data
3. **Tahap 3**: Beranda, Jadwal Misa, Kontak
4. **Tahap 4**: Tentang, Sakramen, Organisasi
5. **Tahap 5**: Berita, Pengumuman, Galeri
6. **Tahap 6**: Admin panel, SEO, QA

Setiap tahap harus lolos:
- `npm run lint` (no errors)
- `npx tsc --noEmit` (no TypeScript errors)
- `npm run build` (successful build)
- Cek responsif di 375px, 768px, 1280px
- Grep nama gereja untuk konsistensi

## Documentation

- **PRD**: `brd.md` (Product Requirements Document)
- **Site Config**: `config/site.ts`
- **This README**: `README.md`

## License

© 2026 Gereja Katolik ST. Yoseph Balige. Hak cipta dilindungi.
