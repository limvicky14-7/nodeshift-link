// ============================================================
// ISI HALAMAN TEMPLATE. Edit file ini saja, tidak perlu menyentuh index.html.
//
// Tiap item adalah satu blok { ... }, dipisah koma.
//
// Prompt (ada tombol Salin):
//   { tipe: "prompt", judul: "Judul", ket: "Satu kalimat kapan dipakai",
//     isi: "Teks prompt lengkap. Bagian yang diganti ditulis <seperti ini>." }
//
// Link (ada tombol Buka):
//   { tipe: "link", judul: "Judul", ket: "Satu kalimat isinya apa",
//     url: "https://...", label: "Teks tombol" }
//
// Urutan di sini = urutan di halaman. Tanda kutip " di dalam teks ditulis \"
// ============================================================

var JUDUL = "10 Prompt Claude Code yang Gue Pakai Tiap Hari";
var PENGANTAR = "Salin, ganti bagian yang diapit <...>, tempel ke Claude Code (ketik claude di terminal, di folder proyek lo). Aturannya satu: kasih konteks, tugas yang spesifik, dan cara ngecek hasilnya.";

var ITEMS = [
  {
    tipe: "prompt",
    judul: "Kenalan sama proyek baru",
    ket: "Pakai saat baru buka proyek yang belum lo ngerti.",
    isi: "Baca proyek ini. Jelasin dalam 10 poin: fungsinya apa, struktur foldernya, cara jalaninnya, dan file mana yang paling penting buat gue pahami duluan. Jangan ubah apa pun."
  },
  {
    tipe: "prompt",
    judul: "Bikin rencana sebelum ngoding",
    ket: "Biar Claude mikir dulu, bukan langsung nulis kode.",
    isi: "Gue mau <fitur yang lo mau>. Jangan nulis kode dulu. Bikin rencana langkah per langkah: file mana yang diubah, kenapa, dan risikonya. Tunggu gue setuju baru eksekusi."
  },
  {
    tipe: "prompt",
    judul: "Benerin error dari pesan error-nya",
    ket: "Cari penyebab aslinya, bukan cuma gejalanya.",
    isi: "Jalanin <perintah, misal: npm run build>. Kalau error, cari penyebab aslinya (bukan cuma gejalanya), benerin, lalu jalanin lagi sampai lolos. Jelasin apa yang salah dalam 2 kalimat."
  },
  {
    tipe: "prompt",
    judul: "Data jadi grafik",
    ket: "Dari file CSV jadi halaman grafik yang bisa dibuka.",
    isi: "Baca <nama-file>.csv. Bikin satu halaman index.html tanpa framework yang nampilin grafik batang <kolom> per <kolom>. Jalanin server lokal dan kasih tau alamatnya."
  },
  {
    tipe: "prompt",
    judul: "Otomasi kerjaan berulang",
    ket: "Script aman dengan mode uji coba dulu.",
    isi: "Bikin script Node.js yang <tugas berulang, misal: rename semua .jpg di ./foto jadi tanggal + nomor urut>. Tambahin mode --dry-run yang cuma nampilin apa yang bakal terjadi. Tes dry-run dulu."
  },
  {
    tipe: "prompt",
    judul: "Review kode kayak senior",
    ket: "Cek perubahan sebelum di-commit.",
    isi: "Review perubahan yang belum di-commit (git diff). Cari bug, celah keamanan, dan kode yang bisa disederhanakan. Urutkan dari yang paling parah. Jangan langsung ubah, kasih daftar dulu."
  },
  {
    tipe: "prompt",
    judul: "Tes yang beneran ngetes",
    ket: "Fokus ke kasus pinggir yang bikin rusak.",
    isi: "Tulis tes buat <file/fungsi>. Fokus ke kasus pinggir yang bisa bikin rusak, bukan kasus gampang. Jalanin tesnya. Kalau ada yang gagal karena bug di kode asli, laporin, jangan diakalin tesnya."
  },
  {
    tipe: "prompt",
    judul: "Rapihin tanpa ngerusak",
    ket: "Refactor dengan bukti perilakunya tidak berubah.",
    isi: "Refactor <file> biar lebih gampang dibaca. Perilakunya harus sama persis. Jalanin tes sebelum dan sesudah buat buktiin gak ada yang berubah."
  },
  {
    tipe: "prompt",
    judul: "Dokumentasi yang dibaca orang",
    ket: "README yang singkat dan langsung kepakai.",
    isi: "Tulis README.md buat proyek ini: satu kalimat fungsinya, cara install, cara jalanin, contoh pakai, dan troubleshooting 3 error paling umum. Bahasa Indonesia santai, gak usah bertele-tele."
  },
  {
    tipe: "prompt",
    judul: "Simpan aturan proyek sekali, dipakai selamanya",
    ket: "Bikin CLAUDE.md supaya Claude ingat aturan proyek lo.",
    isi: "Bikin file CLAUDE.md berisi aturan proyek ini: perintah penting, gaya kode, folder yang gak boleh disentuh, dan cara ngecek kerjaan sebelum selesai. Ambil dari kode yang ada, jangan ngarang."
  }

  // Contoh item link (hapus tanda // di depan tiap baris untuk memakainya):
  // ,{
  //   tipe: "link",
  //   judul: "Seri Claude dari Nol",
  //   ket: "Versi lengkap yang dipraktekin di video.",
  //   url: "https://www.youtube.com/@nodeshift",
  //   label: "Tonton di YouTube"
  // }
];
