# MediaGrow Website - Pre-Deploy Notes

Status: siap untuk upload pertama ke Vercel.

## Data utama yang sudah dikunci
- WhatsApp: 0831-5550-7877
- WhatsApp link: https://wa.me/6283155507877
- Email: mediagrow09@gmail.com
- Instagram: @mediagrow.id
- Alamat: Lrg. Asrama Putra No.6416, Sekip Jaya, Kec. Kemuning, Kota Palembang, Sumatera Selatan 30114

## Yang sudah dilakukan sebelum deploy
- Nomor WhatsApp diseragamkan di halaman, footer, tombol CTA, form WhatsApp, dan structured data.
- Canonical belum dipasang karena domain final Vercel belum diketahui.
- Hardcoded domain mediagrow.id dihapus dari metadata website.
- Gambar portfolio dikompres ke WebP agar halaman lebih ringan tanpa mengorbankan keterbacaan secara signifikan.
- Visual pricelist lama yang menampilkan paket/nomor kontak berbeda tidak dipakai di halaman website agar tidak membingungkan calon klien.
- Case study Loyal Fitness, Panelux, dan Merpati Ladies Spa disesuaikan dengan data pada dokumen sumber dan periode campaign masing-masing.
- robots.txt sudah mengizinkan crawling, tetapi sitemap belum diaktifkan sampai URL Vercel final diketahui.
- vercel.json sudah berisi clean URL, trailing slash, security headers, dan cache asset statis.

## Setelah upload pertama ke Vercel
1. Kirim URL hasil deploy Vercel ke ChatGPT.
2. Update canonical di seluruh halaman menggunakan URL final tersebut.
3. Generate sitemap.xml dengan URL absolut final.
4. Tambahkan URL sitemap ke robots.txt.
5. Update Open Graph URL dan structured data URL/@id menjadi URL absolut.
6. Lakukan pengecekan live desktop/mobile dan broken link sekali lagi.
7. Setelah final, daftarkan property di Google Search Console dan submit sitemap.

## Catatan SEO
Website sudah memiliki halaman layanan terpisah untuk intent pencarian lokal seperti Meta Ads Palembang, Social Media Management Palembang, TikTok Live Palembang, dan Brand Activation Palembang. Artikel insight juga sudah disiapkan sebagai fondasi content SEO.
