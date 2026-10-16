# Product Requirements Document
## Website Gereja Katolik ST. Yoseph Balige

Balige, Sumatera Utara | Versi 1.0 (draft) | Oktober 2026

| Item | Keterangan |
|---|---|
| Status | Draft untuk persetujuan internal |
| Periode pengerjaan | 1 - 31 Oktober 2026 (dua fase) |
| Stack | Next.js, TypeScript, Tailwind CSS, Supabase, Vercel |
| Catatan penting | Semua data resmi gereja yang belum dikonfirmasi ditandai **DATA YANG PERLU DIKONFIRMASI**. Tidak ada informasi resmi yang dikarang. |

---

## 1. Ringkasan

Website ini adalah media informasi dan komunikasi resmi bagi umat, pengunjung, dan masyarakat yang ingin mengenal Gereja Katolik ST. Yoseph Balige. Dalam jangka pendek, website menyediakan informasi yang cepat ditemukan (jadwal misa, lokasi, pengumuman, kontak). Setelah itu website menjadi pintu layanan digital, dimulai dari pendaftaran sakramen dan pengajuan intensi misa.

Dari riset terhadap website paroki lain di Indonesia, praktik umum meliputi formulir sakramen (PDF maupun online), form intensi misa, label misa offline/online, dan warta paroki. Tantangan terbesar yang sering muncul ada pada data umat dan integrasi, sehingga bagian itu sengaja tidak masuk bulan Oktober.

## 2. Tujuan dan Indikator Keberhasilan

### Tujuan
- Umat dan pengunjung menemukan jadwal misa, lokasi, pengumuman, dan kontak dalam hitungan detik.
- Sekretariat menerima permintaan pendaftaran secara terstruktur, tidak hanya lewat pesan pribadi atau kertas.
- Admin paroki dapat memperbarui konten sendiri tanpa bantuan developer.
- Website memberi kesan komunitas yang terbuka, hangat, aktif, dan dekat dengan umat.

### Indikator keberhasilan (target usulan, perlu disepakati)

| Indikator | Target usulan |
|---|---|
| Skor Lighthouse (Performance, Accessibility, SEO) di mobile | 90 ke atas |
| Jadwal misa dapat dicapai dari Beranda | Maksimal 1 klik |
| Admin memperbarui jadwal atau pengumuman tanpa developer | Ya, setelah pelatihan singkat |
| Pendaftaran sakramen yang diterima lewat website pada bulan pertama setelah Fase 2 | Ditentukan bersama sekretariat (belum ada baseline) |
| Halaman muncul untuk pencarian "Gereja Katolik Balige" | Terindeks mesin pencari; peringkat dipantau berkala |

## 3. Pengguna

| Pengguna | Kebutuhan utama |
|---|---|
| Umat paroki | Jadwal misa, pengumuman, kegiatan, informasi sakramen, kontak. Sebagian besar mengakses lewat HP. |
| Keluarga calon sakramen | Memahami syarat dan prosedur, lalu mendaftar dan memantau status. |
| Pengunjung / pendatang | Lokasi gereja dan jadwal misa dengan cepat, termasuk dari hasil pencarian. |
| Sekretariat / admin | Memperbarui konten dan mengelola pendaftaran masuk dengan mudah. |
| Pastor / pengurus (peran perlu dikonfirmasi) | Melihat ringkasan pendaftaran dan menyetujui kebijakan data. |

## 4. Ruang Lingkup

### Fase 1: Website Informasi (1 - 15 Oktober)
Halaman publik, sistem admin dasar, dan SEO (F1-01 sampai F1-12).

### Fase 2: Layanan Digital (16 - 31 Oktober)
Pendaftaran sakramen, intensi misa, dashboard sekretariat, notifikasi, dan cek status (F2-01 sampai F2-11).

### Di luar lingkup bulan Oktober (backlog)
- Form pendaftaran perkawinan (dokumen banyak dan alur panjang)
- Persetujuan Ketua Lingkungan secara digital (Fase 2 memakai verifikasi sekretariat)
- Data umat/KK dan admin lingkungan
- Persembahan online dan pembayaran
- Live streaming terintegrasi, kalender liturgi, renungan harian
- Akun login untuk umat, aplikasi mobile native

## 5. Kebutuhan Fungsional

### Fase 1

| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| F1-01 | Beranda | Hero, tiga CTA (Jadwal Misa, Tentang Gereja, Kegiatan & Berita), kartu info cepat (misa berikutnya, lokasi, kontak), pengumuman dan berita terbaru. | Wajib |
| F1-02 | Jadwal Misa | Kategori Misa Harian, Mingguan, Hari Raya. Kartu/tabel responsif. Data dari database, mudah diperbarui admin. | Wajib |
| F1-03 | Tentang Gereja | Sejarah, profil paroki, visi misi, pelindung, struktur pelayanan, informasi komunitas. Data belum ada = placeholder. | Penting |
| F1-04 | Sakramen & Pelayanan (informasi) | Baptis, Komuni Pertama, Krisma, Perkawinan, Pengakuan Dosa, Pengurapan Orang Sakit, dan pelayanan lain. Tiap layanan: deskripsi, persyaratan, prosedur, kontak. | Wajib |
| F1-05 | Berita & Kegiatan | Card layout dengan gambar utama dan kategori: Berita Paroki, OMK, Anak & Remaja, Lingkungan, Sosial, Pengumuman. | Penting |
| F1-06 | Galeri | Grid/masonry dengan filter kategori. | Opsional |
| F1-07 | Organisasi & Komunitas | OMK, WKRI, Bina Iman Anak, Koor, Misdinar, Lektor, Pemazmur, Lingkungan, kelompok kategorial lain. | Penting |
| F1-08 | Pengumuman | Daftar pengumuman dengan penanda visual jelas untuk yang urgent. | Wajib |
| F1-09 | Kontak | Alamat, telepon, email, WhatsApp, Google Maps, social media. Tombol Hubungi Kami dan Lihat Lokasi di Google Maps. | Wajib |
| F1-10 | Navigasi | Beranda, Tentang, Jadwal Misa, Sakramen, Kegiatan, Galeri, Pengumuman, Kontak. Transparan di hero lalu solid saat scroll. Hamburger di mobile. | Wajib |
| F1-11 | Admin dasar | Login admin; kelola jadwal misa, pengumuman, berita, dan galeri (termasuk upload gambar). | Wajib |
| F1-12 | SEO | Metadata, Open Graph, sitemap, robots.txt, structured data, gambar teroptimasi. | Penting |

### Fase 2

| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| F2-01 | Pendaftaran Baptis | Form terpisah untuk bayi/anak dan dewasa, dengan validasi sisi client dan server. | Wajib |
| F2-02 | Pendaftaran Komuni Pertama | Form pendaftaran calon komuni pertama. | Wajib |
| F2-03 | Pendaftaran Krisma | Form pendaftaran calon krisma. | Wajib |
| F2-04 | Upload dokumen & kode pendaftaran | Upload dokumen pendukung (mis. surat baptis) ke storage privat. Kode pendaftaran unik dibuat otomatis. | Wajib |
| F2-05 | Intensi misa | Form pengajuan intensi misa dengan penjelasan batas waktu yang ditetapkan paroki. | Penting |
| F2-06 | Form kontak/pertanyaan | Pesan umum ke sekretariat. | Opsional |
| F2-07 | Dashboard sekretariat | Daftar pendaftar, filter, halaman detail. Hanya untuk pengguna terautentikasi dengan peran sesuai. | Wajib |
| F2-08 | Manajemen status | Status: Diterima, Perlu dilengkapi, Terverifikasi, Dijadwalkan. Catatan internal dan export Excel. | Penting |
| F2-09 | Notifikasi email | Email ke sekretariat setiap ada pendaftaran baru. | Penting |
| F2-10 | Cek status | Pemohon memeriksa status dengan kode pendaftaran, tanpa menampilkan data pribadi lengkap. | Penting |
| F2-11 | Persetujuan data pribadi | Halaman kebijakan privasi dan checkbox persetujuan sebelum form dikirim. | Wajib |

### Alur pendaftaran sakramen
1. Pemohon membaca syarat dan prosedur.
2. Pemohon mengisi form dan menyetujui kebijakan data.
3. Sistem membuat kode pendaftaran.
4. Sekretariat menerima notifikasi dan memverifikasi.
5. Sekretariat mengubah status dan menjadwalkan.
6. Pemohon memantau status dengan kode pendaftaran.

## 6. Kebutuhan Non-Fungsional

- **Responsif:** mobile-first; diuji di 375, 768, 1280, 1536 piksel. Tidak ada scroll horizontal.
- **Performa:** target Lighthouse 90 ke atas, gambar teroptimasi dengan `next/image`, Server Components secara default.
- **Aksesibilitas:** semantic HTML, heading berurutan, kontras WCAG AA, focus state, navigasi keyboard, alt text, menu mobile yang aksesibel, hormati `prefers-reduced-motion`.
- **SEO:** metadata, Open Graph, sitemap, robots.txt, structured data; target kata kunci *Gereja Katolik Balige*, *Gereja Katolik ST Yoseph Balige*, *Jadwal Misa Balige*.
- **Keamanan:** Row Level Security di Supabase, storage dokumen privat, kunci `service_role` hanya di server, validasi ulang di server dengan Zod, akses dashboard berdasarkan peran, proteksi spam pada form.
- **Privasi:** kumpulkan hanya data yang diperlukan, minta persetujuan eksplisit, batasi siapa yang dapat melihat data, tentukan masa simpan, dan pastikan kepatuhan terhadap UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi. Perlu ditinjau lebih lanjut, terutama untuk data anak.
- **Maintainability:** kode modular dan feature-based, tanpa error TypeScript/ESLint, konfigurasi terpusat.

## 7. Prinsip Desain dan UX

- Konsep: **Modern Catholic Church + Warm Community + Elegant**.
- Warna: off-white `#FAF7F0` sebagai dasar, navy `#1F2A44` untuk kontras, gold `#C9A24B` sebagai aksen secukupnya.
- Tipografi: heading serif elegan, body sans-serif yang mudah dibaca.
- Foto gereja dan umat sebagai visual utama; whitespace lega; shadow halus; animasi subtle (fade, slide up, hover, transisi navbar).
- Hindari: banyak warna, gradient berlebihan, ornamen Katolik berlebihan, tampilan portal berita atau perusahaan.
- Bahasa Indonesia yang sopan, hangat, mudah dipahami, tidak terlalu formal.
- Informasi penting (jadwal misa, lokasi, pengumuman, kontak) harus ditemukan dalam beberapa detik.

## 8. Arsitektur Teknis

Satu repository dan satu deployment. Frontend dan backend berada dalam project Next.js (App Router); Supabase menyediakan database, autentikasi, dan storage. Pola yang dipakai adalah feature-based dan berlapis, bukan MVC klasik.

| MVC | Padanan di proyek ini |
|---|---|
| Model | Skema Supabase, tipe TypeScript, fungsi query (`features/*/queries.ts`) |
| View | Komponen React (`components/`, halaman di `app/`) |
| Controller | Server Actions dan Route Handlers (`features/*/actions.ts`, `app/api/`) |

```
src/
├── app/            # rute publik (public) dan admin
├── components/     # ui, layout, sections
├── features/       # satu folder per fitur
├── lib/            # supabase, utils, seo
├── config/         # site.ts (data situs dan kontak)
└── types/
```

Komponen tidak memanggil Supabase langsung; akses data lewat `features/*/queries.ts`.

## 9. Model Data (tingkat tinggi)

| Entitas | Isi pokok | Fase |
|---|---|---|
| `jadwal_misa` | Kategori, hari/tanggal, jam, lokasi, keterangan, status aktif | Fase 1 |
| `pengumuman` | Judul, isi, tanggal, penanda urgent, status terbit | Fase 1 |
| `berita` | Judul, ringkasan, isi, gambar, kategori, tanggal terbit | Fase 1 |
| `galeri` | Gambar, keterangan, kategori | Fase 1 |
| `pendaftaran_sakramen` | Jenis, kode, data pemohon, status, catatan internal, waktu | Fase 2 |
| `dokumen_pendaftaran` | Relasi ke pendaftaran, path file privat, jenis dokumen | Fase 2 |
| `intensi_misa` | Nama pengaju, intensi, tanggal diinginkan, status | Fase 2 |
| `pengguna_admin` | Peran (admin, sekretariat), terhubung ke autentikasi Supabase | Fase 1-2 |

## 10. Data yang Harus Dikonfirmasi Pihak Paroki

- [ ] Jadwal misa harian, mingguan, dan hari raya (batas: 5 Oktober)
- [ ] Alamat, telepon, email, WhatsApp, link Google Maps, social media (5 Oktober)
- [ ] Foto gereja dan kegiatan beserta izin pemakaian (5 - 10 Oktober)
- [ ] Sejarah, profil, visi misi, pelindung, nama pastor dan struktur pelayanan (7 Oktober)
- [ ] Daftar komunitas dan deskripsi singkat (7 Oktober)
- [ ] Syarat dan prosedur tiap sakramen untuk halaman informasi (7 Oktober)
- [ ] Domain dan akses DNS (13 Oktober)
- [ ] Persetujuan pastor atas pengumpulan data pribadi online (17 Oktober)
- [ ] Konfirmasi final syarat dan dokumen Baptis, Komuni Pertama, Krisma (18 Oktober)
- [ ] Nama sekretariat sebagai admin dan penguji pilot (20 Oktober)

## 11. Timeline dan Milestone

| Milestone | Tanggal | Isi |
|---|---|---|
| Mulai | 1 Okt (malam) atau 3 Okt | Setup project, design system, navbar dan footer |
| Rilis Fase 1 | 15 Okt | Seluruh halaman informasi, admin dasar, SEO, lolos QA |
| Pilot Fase 2 | 30 Okt | Uji coba dengan sekretariat |
| Rilis Fase 2 | 31 Okt | Pendaftaran sakramen, intensi misa, dashboard, notifikasi |

Rincian tugas harian ada di berkas Excel Timeline. Jika mulai pada 3 Oktober, jadwal Fase 1 bergeser sekitar dua hari; tugas berprioritas rendah dapat dipangkas.

## 12. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Data dari paroki terlambat | Halaman memakai placeholder | Placeholder berlabel; konten diganti lewat admin setelah data masuk |
| Syarat sakramen berbeda dari asumsi | Form harus diubah | Konfirmasi final 18 Oktober; jangan menyalin dari paroki lain |
| Kebocoran data pribadi | Risiko privasi dan reputasi | RLS, storage privat, akses berperan, persetujuan eksplisit, batasi data yang dikumpulkan |
| Sekretariat belum terbiasa dengan sistem | Adopsi rendah | Pilot, pelatihan singkat, sediakan formulir PDF dan jalur lama sebagai cadangan |
| Waktu satu developer terbatas | Rilis mundur | Prioritas jelas; pangkas filter galeri, export Excel, form kontak |
| Hasil desain generik | Kesan kurang hangat | Referensi visual, foto asli, revisi per halaman, checklist anti-generik |

## 13. Asumsi dan Pertanyaan Terbuka

- Struktur wilayah paroki (lingkungan, stasi, wilayah) belum diketahui.
- Belum diketahui apakah sudah ada aplikasi data umat dari keuskupan yang perlu dihormati atau diintegrasikan.
- Belum ditentukan siapa saja pemegang akses dashboard dan apakah pastor memerlukan akun.
- Belum ditentukan apakah sebagian konten perlu bahasa Batak atau cukup bahasa Indonesia.
- Domain belum ditentukan.
- Indikator keberhasilan di atas adalah usulan dan perlu disepakati dengan pengurus.