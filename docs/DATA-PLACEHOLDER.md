# Data yang Perlu Dikonfirmasi

Dokumen ini mencatat semua data placeholder yang perlu dikonfirmasi dan dilengkapi oleh pihak paroki.

**Tanggal:** 4 Oktober 2026 - Tahap 1 Selesai

## Status: Tahap 1 - Setup & Design System

### Data Kontak (URGENT - Dibutuhkan Tahap 3)

Batas konfirmasi: **5 Oktober 2026**

- [ ] **Email resmi paroki** - Saat ini: "DATA YANG PERLU DIKONFIRMASI"
  - Lokasi di kode: `config/site.ts` → `contact.email`
  
- [ ] **WhatsApp resmi** - Saat ini: "DATA YANG PERLU DIKONFIRMASI"
  - Lokasi di kode: `config/site.ts` → `contact.whatsapp`

- [ ] **Social Media Links** - Saat ini: "DATA YANG PERLU DIKONFIRMASI"
  - Facebook: `config/site.ts` → `contact.socialMedia.facebook`
  - Instagram: `config/site.ts` → `contact.socialMedia.instagram`
  - YouTube: `config/site.ts` → `contact.socialMedia.youtube`

- [ ] **Google Maps URL** (link pendek) - Saat ini: placeholder
  - Lokasi di kode: `config/site.ts` → `location.mapsUrl`
  - Catatan: URL embed sudah ada dari sumber Keuskupan

### Data Pastor (Dibutuhkan Tahap 4)

Batas konfirmasi: **7 Oktober 2026**

- [ ] **Konfirmasi nama dan masa tugas Pastor Paroki**
  - Saat ini: "RP. Eno Hirian Samosir OFMCap (6 Sep 2026 - 5 Sep 2031)"
  - Sumber: Tabel Keuskupan Agung Medan
  - Note: Perlu konfirmasi karena ada ketidaksesuaian dengan teks sejarah di website keuskupan
  - **PENTING**: Jangan tampilkan foto pastor sebelum ada izin tertulis

### Jadwal Misa (URGENT - Dibutuhkan Tahap 3)

Batas konfirmasi: **5 Oktober 2026**

- [ ] **Jadwal Misa Harian** 
  - Seed awal: Senin-Rabu, Jumat, Sabtu 06.00 WIB; Kamis (OMK) 18.00 WIB
  - Perlu konfirmasi: apakah jadwal ini masih berlaku?
  - Apakah ada perubahan lokasi (gereja paroki/stasi)?

- [ ] **Jadwal Misa Minggu**
  - Seed awal: Sesi 1 - 08.00 WIB; Sesi 2 - 10.00 WIB
  - Perlu konfirmasi dan detail lokasi

- [ ] **Jadwal Misa Hari Raya**
  - Seed awal tersedia, perlu konfirmasi lengkap

### Profil & Sejarah (Dibutuhkan Tahap 4)

Batas konfirmasi: **7 Oktober 2026**

- [ ] **Visi Misi Paroki**
  - Saat ini: Belum ada
  - Untuk halaman "Tentang Gereja"

- [ ] **Struktur Pelayanan/Organisasi Gereja**
  - Saat ini: Belum ada
  - Pastor, Dewan Pastoral, Sekretariat, dll.

- [ ] **Sejarah Gereja - Verifikasi**
  - Bahan ada dari Keuskupan (sudah diringkas)
  - Perlu verifikasi tanggal dan detail dengan arsip paroki

### Komunitas & Organisasi (Dibutuhkan Tahap 4)

Batas konfirmasi: **7 Oktober 2026**

- [ ] **Daftar lengkap komunitas dengan deskripsi**
  - Kategori sudah ada: OMK, WKRI, Bina Iman Anak, Koor, Misdinar, Lektor, Pemazmur, Lingkungan
  - Perlu: Deskripsi singkat dan kontak per komunitas

### Foto & Media (Dibutuhkan Tahap 3-5)

Batas konfirmasi: **5-10 Oktober 2026**

- [ ] **Foto gereja (eksterior & interior)** - untuk hero, galeri, Open Graph
  - Format: JPG/PNG, resolusi tinggi (min 1920x1080)
  - Dengan izin pemakaian

- [ ] **Foto kegiatan umat** - untuk section berita dan galeri
  - Berbagai kegiatan: Misa, OMK, anak-anak, lingkungan, dll.
  - Dengan izin dari orang yang difoto

- [ ] **Logo gereja** (jika ada) - untuk favicon dan branding
  - Format: SVG atau PNG transparan

### Sakramen (Dibutuhkan Tahap 4 & Fase 2)

Batas konfirmasi Fase 1: **7 Oktober 2026**
Batas konfirmasi Fase 2 (form): **18 Oktober 2026**

- [ ] **Syarat dan prosedur setiap sakramen** (untuk halaman informasi)
  - Baptis (Bayi/Anak dan Dewasa)
  - Komuni Pertama
  - Krisma
  - Perkawinan
  - Pengakuan Dosa (jadwal dan prosedur)
  - Pengurapan Orang Sakit
  
- [ ] **Dokumen yang diperlukan untuk pendaftaran** (untuk form Fase 2)
  - Akan digunakan di form upload
  - Perlu list spesifik per sakramen

### Website & Domain (Dibutuhkan Tahap 6)

Batas konfirmasi: **13 Oktober 2026**

- [ ] **Nama domain yang diinginkan**
  - Saat ini: "DATA YANG PERLU DIKONFIRMASI"
  - Lokasi di kode: `config/site.ts` → `url`
  - Contoh: parokibalige.com, katolikbalige.org, dll.

- [ ] **Akses DNS** untuk pointing domain ke Vercel

### Data Fase 2 (untuk persiapan)

Batas konfirmasi: **17-18 Oktober 2026**

- [ ] **Persetujuan Pastor untuk pengumpulan data pribadi online**
- [ ] **Nama admin sekretariat** untuk akun dashboard
- [ ] **Email untuk notifikasi pendaftaran**

---

## Cara Update Data

Setelah data dikonfirmasi:

1. Update file: `config/site.ts`
2. Hapus string "DATA YANG PERLU DIKONFIRMASI"
3. Isi dengan data yang sudah dikonfirmasi
4. Untuk jadwal misa, foto, dll → akan dijelaskan di tahap terkait

## Kontak Developer

Jika ada pertanyaan tentang data yang dibutuhkan, hubungi developer project ini.

---

**Update terakhir:** Tahap 1 - 4 Oktober 2026
