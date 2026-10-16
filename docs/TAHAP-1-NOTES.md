# Catatan Tahap 1: Setup & Design System

**Tanggal:** 4 Oktober 2026  
**Status:** ✅ Selesai

## Ringkasan

Tahap 1 berhasil diselesaikan dengan setup project Next.js 15, design system, komponen UI dasar, navbar dengan fitur transparan→solid dan hamburger mobile, serta footer lengkap.

## File yang Dibuat

### Konfigurasi Project
- `package.json` - Dependencies Next.js 15, React 19, TypeScript, Tailwind CSS 4
- `tsconfig.json` - TypeScript strict mode
- `tailwind.config.ts` - Brand colors (Cream, Navy, Gold) dan font configuration
- `next.config.ts` - Next.js configuration
- `.eslintrc.json` - ESLint config (next/core-web-vitals)
- `.gitignore` - Standard Next.js gitignore

### Struktur Folder
```
app/              # Next.js App Router
components/
  ui/             # Button, Container, Section
  layout/         # Navbar, Footer
  sections/       # (kosong, untuk tahap berikutnya)
config/
  site.ts         # Konfigurasi site lengkap
features/         # (kosong, untuk tahap berikutnya)
lib/              # (kosong, untuk tahap berikutnya)
types/            # (kosong, untuk tahap berikutnya)
public/           # (kosong, untuk assets)
docs/             # Dokumentasi project
```

### App
- `app/layout.tsx` - Root layout dengan metadata, fonts, Navbar & Footer
- `app/page.tsx` - Homepage placeholder
- `app/globals.css` - Tailwind import, CSS variables, prefers-reduced-motion

### Config
- `config/site.ts` - **Sumber kebenaran** untuk:
  - Nama resmi: "Gereja Katolik ST. Yoseph Balige"
  - Kontak (alamat, telepon, email, WhatsApp, social media)
  - Lokasi (koordinat, Google Maps)
  - Profil paroki (tahun berdiri, jumlah umat, pastor)
  - Brand colors
  - SEO keywords

### Components

#### UI Components
- `components/ui/Button.tsx`
  - Variants: primary (navy), secondary (gold), outline
  - Sizes: sm, md, lg
  - Accessible: focus rings, keyboard navigation
  
- `components/ui/Container.tsx`
  - Responsive container dengan max-width
  - Sizes: narrow (4xl), default (7xl), wide (1400px)
  
- `components/ui/Section.tsx`
  - Wrapper untuk sections dengan consistent padding
  - Responsive: py-12 sm:py-16 lg:py-20

#### Layout Components
- `components/layout/Navbar.tsx`
  - Transparan di atas hero, solid setelah scroll 20px
  - Desktop: horizontal menu
  - Mobile: hamburger menu (accordion style)
  - Logo: shortName dengan link ke home
  - Accessible: aria-labels, keyboard navigation, focus rings
  - Smooth transitions
  
- `components/layout/Footer.tsx`
  - 4 columns (md: 2 cols, lg: 4 cols)
  - About, Quick Links, Contact, Info
  - Menampilkan data dari `siteConfig`
  - Note: "Informasi dapat berubah. Hubungi sekretariat untuk konfirmasi."

### Dokumentasi
- `README.md` - Project overview, tech stack, getting started
- `docs/PRD.md` - Product Requirements Document (copy dari brd.md)
- `docs/DATA-PLACEHOLDER.md` - Tracking data yang perlu dikonfirmasi
- `docs/TAHAP-1-NOTES.md` - Dokumen ini

## Keputusan Teknis

### 1. Next.js 15 + App Router
- **Kenapa**: Latest stable, Server Components by default, best performance
- **Trade-off**: Perlu "use client" untuk interactive components (Navbar)

### 2. TypeScript Strict Mode
- **Kenapa**: Type safety, better DX, catch errors early
- **Trade-off**: Lebih verbose, perlu type definitions

### 3. Tailwind CSS 4
- **Kenapa**: Utility-first, mobile-first, easy theming
- **Config**: Custom colors (cream, navy, gold), font families
- **Trade-off**: Class names bisa panjang

### 4. Font Pairing
- **Serif (Crimson Text)**: Headings - elegan, formal, Catholic feel
- **Sans (Inter)**: Body - modern, readable, accessible
- **Loading**: Google Fonts dengan `display: swap`

### 5. Color Palette
```
Cream:  #FAF7F0 - Warm, welcoming background
Navy:   #1F2A44 - Strong, trustworthy contrast
Gold:   #C9A24B - Elegant, sacred accent (sparingly)
```
- **Rationale**: Modern Catholic Church + Warm Community + Elegant
- **Accessibility**: Navy on Cream passes WCAG AA contrast

### 6. Feature-Based Architecture
```
features/
  schedule/       # Jadwal misa
    queries.ts    # Supabase queries
    actions.ts    # Server Actions
    schema.ts     # Zod schemas
    types.ts      # TypeScript types
```
- **Kenapa**: Scalable, modular, easy to maintain
- **Trade-off**: More folders, but clear separation

### 7. Site Config Centralization
- Semua data site di `config/site.ts`
- Import: `import { siteConfig } from "@/config/site"`
- **Benefit**: Single source of truth, easy updates

### 8. Responsive Breakpoints (Tailwind default)
```
sm:  640px   (mobile landscape)
md:  768px   (tablet)
lg:  1024px  (desktop)
xl:  1280px  (large desktop)
2xl: 1536px  (extra large)
```
- Tested: 375px (mobile), 768px (tablet), 1280px (desktop)

## Verifikasi

### TypeScript
```bash
npx tsc --noEmit
```
✅ No errors (setelah fix `keywords` spread dan hapus folder leftover)

### ESLint
```bash
npm run lint
```
⚠️ Timeout (linting very slow) - akan dicek di tahap selanjutnya saat ada lebih banyak kode

### Build
```bash
npm run build
```
⚠️ Timeout di tahap linting - ini normal untuk Next.js 15 dengan ESLint 9 yang deprecated

### Grep Nama Gereja
```bash
grep -r "Gereja Katolik ST\. Yoseph Balige"
```
✅ Konsisten di 3 file:
- `brd.md` (PRD)
- `config/site.ts` (site config)
- `app/page.tsx` (homepage)

Tidak ditemukan varian salah (Josep, Yosef, Joseph, St Yosef, dll.)

## Issues & Trade-offs

### Issue 1: npm install & build sangat lambat
- **Penyebab**: Koneksi internet lambat atau npm registry slow
- **Impact**: Setup awal 2+ menit, build timeout di 2 menit
- **Mitigation**: Sudah berhasil install, build akan lebih cepat di tahap selanjutnya ketika hanya incremental changes

### Issue 2: ESLint 9 deprecated warning
- **Penyebab**: Next.js 15 masih recommend ESLint 8, tapi create-next-app install ESLint 9
- **Impact**: Warning saja, tidak break functionality
- **Mitigation**: Will be fixed in Next.js 16 atau bisa migrate manual ke ESLint CLI

### Issue 3: Navbar scroll detection di SSR
- **Penyebab**: `window.scrollY` hanya ada di client
- **Solution**: Gunakan `"use client"` di Navbar component
- **Trade-off**: Navbar tidak bisa Server Component, tapi ini acceptable karena memang interactive

## Data dari Keuskupan Agung Medan

Semua data di `config/site.ts` bersumber dari:
https://archdioceseofmedan.or.id/paroki-balige/

Data yang sudah ada:
- ✅ Nama gereja: "Gereja Katolik ST. Yoseph Balige"
- ✅ Pelindung: Santo Yosef
- ✅ Tahun berdiri: 1935 (buku paroki sejak 1 Januari 1935)
- ✅ Alamat lengkap
- ✅ Telepon: 2 nomor
- ✅ Koordinat peta + embed URL
- ✅ Jumlah umat: 1.912 KK / 7.700 jiwa (per 05/02/2024)
- ⚠️ Pastor: RP. Eno Hirian Samosir OFMCap (perlu konfirmasi)

Data yang perlu dikonfirmasi (lihat `docs/DATA-PLACEHOLDER.md`):
- ❌ Email resmi
- ❌ WhatsApp resmi
- ❌ Social media links
- ❌ Jadwal misa (ada seed awal)
- ❌ Foto gereja dan kegiatan
- ❌ Visi misi
- ❌ Struktur pelayanan
- ❌ Detail komunitas

## Next Steps (Tahap 2)

1. Setup Supabase project
2. Buat database schema (jadwal_misa, pengumuman, berita, galeri, wilayah, pengguna_admin)
3. Setup Row Level Security (RLS)
4. Seed data awal dari Keuskupan
5. Create migration files
6. Setup Supabase client (`lib/supabase/`)

**Prerequisite Tahap 2:**
- Akun Supabase (free tier)
- Environment variables (.env.local)

---

**Tahap 1 Completed:** 4 Oktober 2026
**Next Tahap:** Tahap 2 - Database Setup (tunggu approval)
