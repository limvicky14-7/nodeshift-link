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
  },
  {
    tipe: "prompt",
    judul: "Satu tugas, level 1: Chat",
    ket: "Reel \"Satu Tugas, Tiga Level\". Tempel datanya ke chat, dapat jawaban. Cek hasilnya sendiri.",
    isi: "Ini catatan pengeluaran gue bulan Oktober. Hitung total per kategori dan kasih tau kategori mana yang paling boros. <tempel isi file CSV lo di sini>"
  },
  {
    tipe: "prompt",
    judul: "Satu tugas, level 2: Kode",
    ket: "Minta AI nulis script-nya. Lo yang jalanin, angkanya pasti, bulan depan tinggal jalanin lagi.",
    isi: "Tulis script Python rekap.py yang membaca <nama-file>.csv, menghitung total per kategori, lalu menampilkan kategori yang paling boros. Pakai modul csv bawaan, tanpa install apa pun."
  },
  {
    tipe: "prompt",
    judul: "Satu tugas, level 3: Sistem",
    ket: "Satu perintah ke Claude Code. Dia baca, hitung, cek pakai cara kedua, lalu tulis laporan.",
    isi: "Baca <nama-file>.csv. Hitung total per kategori dan kategori yang paling boros, simpan hasilnya ke laporan.md. Cek hasilnya dengan cara kedua sebelum selesai."
  },
  {
    tipe: "prompt",
    judul: "Tes adil ronde 1: prompt nomor HP",
    ket: "Reel Claude vs ChatGPT. Kirim persis ini ke AI mana pun, satu kali, tanpa regenerate.",
    isi: "Tulis fungsi Python `normalisasi_hp(teks)` yang mengubah nomor HP seluler Indonesia ke format `+62xxxxxxxxxxx`.\n\nAturan:\n- Awalan yang diterima: `08`, `+62`, atau `62`. Angka 0 pada awalan `08` diganti kode negara.\n- Spasi, tanda strip, dan tanda kurung di dalam teks harus diabaikan. Contoh yang harus diterima: `0812-3456-7890`, `+62 812 3456 7890`, `(0812) 3456 7890`.\n- Nomor valid bila setelah kode negara diawali angka 8 dan panjangnya 9 sampai 12 digit.\n- Bila tidak valid (termasuk teks kosong atau berisi huruf), kembalikan `None`.\n\nBalas hanya dengan kode Python, tanpa penjelasan."
  },
  {
    tipe: "prompt",
    judul: "Tes adil ronde 1: 12 tes",
    ket: "Simpan sebagai tes_hp.py, jalankan: python tes_hp.py kode_kamu.py",
    isi: "\"\"\"12 tes untuk normalisasi_hp. Ditulis dari isi prompt.txt saja, sebelum ada jawaban\ndari AI mana pun. Pakai: python tes_hp.py <file_kode.py>\"\"\"\nimport importlib.util\nimport sys\n\nTES = [\n    (\"awalan 08\", \"081234567890\", \"+6281234567890\"),\n    (\"awalan +62\", \"+6281234567890\", \"+6281234567890\"),\n    (\"awalan 62\", \"6281234567890\", \"+6281234567890\"),\n    (\"tanda strip\", \"0812-3456-7890\", \"+6281234567890\"),\n    (\"spasi dan plus\", \"+62 812 3456 7890\", \"+6281234567890\"),\n    (\"tanda kurung\", \"(0812) 3456 7890\", \"+6281234567890\"),\n    (\"panjang minimum (9 digit)\", \"0812345678\", \"+62812345678\"),\n    (\"panjang maksimum (12 digit)\", \"0812345678901\", \"+62812345678901\"),\n    (\"terlalu pendek (8 digit)\", \"081234567\", None),\n    (\"terlalu panjang (13 digit)\", \"08123456789012\", None),\n    (\"setelah kode negara bukan 8\", \"+62 712 3456 7890\", None),\n    (\"huruf atau kosong\", [\"0812-ABCD-7890\", \"\"], None),\n]\n\n\ndef muat(path):\n    spec = importlib.util.spec_from_file_location(\"kode_uji\", path)\n    mod = importlib.util.module_from_spec(spec)\n    spec.loader.exec_module(mod)\n    return mod.normalisasi_hp\n\n\ndef main():\n    fn = muat(sys.argv[1])\n    lulus = 0\n    for nama, masuk, harap in TES:\n        daftar = masuk if isinstance(masuk, list) else [masuk]\n        try:\n            ok = all(fn(x) == harap for x in daftar)\n        except Exception:\n            ok = False\n        lulus += ok\n        print((\"✓ \" if ok else \"✗ \") + nama)\n    print(f\"LULUS {lulus}/{len(TES)}\")\n\n\nif __name__ == \"__main__\":\n    main()"
  },
  {
    tipe: "prompt",
    judul: "Tes adil ronde 2: prompt kembalian kasir",
    ket: "Prompt kedua yang lebih sulit (cara greedy gagal). Satu kali coba juga.",
    isi: "Tulis fungsi Python `kembalian(jumlah, stok)` untuk kasir.\n\n- `jumlah`: bilangan bulat, nilai yang harus dikembalikan (satuan sama dengan pecahan).\n- `stok`: dict `{pecahan: banyak_lembar_tersedia}`. Pecahan adalah bilangan bulat positif, contoh `{50000: 1, 20000: 2, 10000: 0, 5000: 3, 2000: 5, 1000: 5}`.\n\nKembalikan dict `{pecahan: banyak_lembar_dipakai}` dengan aturan:\n- Total nilainya tepat sama dengan `jumlah`.\n- Memakai lembar sesedikit mungkin secara total.\n- Tidak melebihi stok tiap pecahan.\n- Hanya sertakan pecahan yang dipakai (banyak lembar lebih dari 0).\n- Bila tidak mungkin, atau `jumlah` negatif, kembalikan `None`.\n- Bila `jumlah` 0, kembalikan dict kosong `{}`.\n- Jangan mengubah isi `stok`.\n- Harus selesai dalam 5 detik untuk jumlah sampai 500.000.\n\nBalas hanya dengan kode Python, tanpa penjelasan."
  },
  {
    tipe: "prompt",
    judul: "Tes adil ronde 2: 12 tes + acuan",
    ket: "Simpan tes_kembalian.py dan benar_kembalian.py di folder yang sama, jalankan: python tes_kembalian.py kode_kamu.py",
    isi: "\"\"\"12 tes untuk kembalian. Ditulis dari isi prompt.txt saja, sebelum ada jawaban dari\nAI mana pun. Tiap tes memeriksa: valid (total, stok, tanpa nol) dan optimal (jumlah\nlembar minimum dari acuan). Batas 5 detik per tes. Pakai: python tes_kembalian.py <file>\"\"\"\nimport copy\nimport importlib.util\nimport multiprocessing as mp\nimport sys\nimport time\n\nBATAS = 5.0\n\nSTOK_REAL = {50000: 1, 20000: 2, 10000: 2, 5000: 3, 2000: 5, 1000: 5}\nSTOK_BESAR = {100000: 3, 50000: 5, 20000: 10, 10000: 20, 5000: 30, 2000: 50, 1000: 100}\n\n# (nama, jumlah, stok, minimum lembar atau None bila mustahil)\n# Nilai minimum dihitung oleh benar_kembalian.py (dicek di main).\nTES = [\n    (\"greedy cukup\", 75000, STOK_REAL),\n    (\"greedy gagal, stok membatasi\", 6000, {5000: 1, 2000: 3}),\n    (\"stok membatasi pecahan besar\", 100000, {50000: 1, 20000: 2, 10000: 3, 5000: 0, 2000: 0, 1000: 0}),\n    (\"jumlah nol\", 0, STOK_REAL),\n    (\"tidak ada kombinasi\", 3000, {2000: 5, 5000: 5}),\n    (\"stok tidak cukup\", 100000, {10000: 5}),\n    (\"jumlah negatif\", -5000, STOK_REAL),\n    (\"pecahan tidak lazim (optimal bukan greedy)\", 6, {4: 1, 3: 2, 1: 0}),\n    (\"banyak pecahan\", 99000, STOK_REAL),\n    (\"optimal bukan greedy, uang nyata\", 60000, {50000: 1, 20000: 3, 10000: 0}),\n    (\"stok tidak diubah\", 37000, STOK_REAL),\n    (\"kecepatan 500.000\", 500000, STOK_BESAR),\n]\n\n\ndef muat(path):\n    spec = importlib.util.spec_from_file_location(\"kode_uji\", path)\n    mod = importlib.util.module_from_spec(spec)\n    spec.loader.exec_module(mod)\n    return mod.kembalian\n\n\ndef acuan_min(jumlah, stok):\n    import os\n    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))\n    from benar_kembalian import minimum\n    return minimum(jumlah, stok)\n\n\ndef nilai(path, i, q):\n    nama, jumlah, stok = TES[i]\n    stok_asli = copy.deepcopy(stok)\n    try:\n        fn = muat(path)\n        t0 = time.time()\n        hasil = fn(jumlah, stok)\n        dur = time.time() - t0\n    except Exception as e:\n        q.put((False, \"error: %s\" % type(e).__name__))\n        return\n    if stok != stok_asli:\n        q.put((False, \"mengubah stok\"))\n        return\n    harap = acuan_min(jumlah, stok_asli)\n    if harap is None:\n        q.put((hasil is None, \"harus None\"))\n        return\n    if jumlah == 0:\n        q.put((hasil == {}, \"harus {}\"))\n        return\n    if not isinstance(hasil, dict):\n        q.put((False, \"bukan dict\"))\n        return\n    total = 0\n    lembar = 0\n    for p, n in hasil.items():\n        if p not in stok_asli or not isinstance(n, int) or n <= 0 or n > stok_asli[p]:\n            q.put((False, \"pecahan/jumlah tidak sah\"))\n            return\n        total += p * n\n        lembar += n\n    if total != jumlah:\n        q.put((False, \"total salah\"))\n        return\n    if lembar != harap:\n        q.put((False, \"tidak minimum (%d, seharusnya %d)\" % (lembar, harap)))\n        return\n    if dur > BATAS:\n        q.put((False, \"terlalu lambat\"))\n        return\n    q.put((True, \"\"))\n\n\ndef main():\n    path = sys.argv[1]\n    lulus = 0\n    for i, (nama, _j, _s) in enumerate(TES):\n        q = mp.Queue()\n        p = mp.Process(target=nilai, args=(path, i, q))\n        p.start()\n        p.join(BATAS + 2)\n        if p.is_alive():\n            p.terminate()\n            ok, ket = False, \"melewati batas waktu\"\n        else:\n            try:\n                ok, ket = q.get(timeout=1)\n            except Exception:\n                ok, ket = False, \"tanpa hasil\"\n        lulus += ok\n        print((\"✓ \" if ok else \"✗ \") + nama + (\"\" if ok else \"  [\" + ket + \"]\"))\n    print(\"LULUS %d/%d\" % (lulus, len(TES)))\n\n\nif __name__ == \"__main__\":\n    main()\n\n# ---- benar_kembalian.py (simpan terpisah) ----\n\"\"\"Implementasi acuan (bukan jawaban AI) untuk memastikan tes benar.\n`kembalian` = solusi dict yang valid; `minimum` = jumlah lembar minimum (dipakai tes).\"\"\"\nfrom math import gcd\n\n\ndef _dp(jumlah, stok):\n    g = 0\n    for p in stok:\n        g = gcd(g, p)\n    if g == 0 or jumlah % g:\n        return None\n    T = jumlah // g\n    INF = float(\"inf\")\n    pecahan = list(stok.items())\n    dp = [[INF] * (T + 1) for _ in range(len(pecahan) + 1)]\n    dp[0][0] = 0\n    for i, (p, n) in enumerate(pecahan, start=1):\n        w = p // g\n        for t in range(T + 1):\n            for k in range(0, n + 1):\n                if k * w > t:\n                    break\n                c = dp[i - 1][t - k * w] + k\n                if c < dp[i][t]:\n                    dp[i][t] = c\n    return g, T, pecahan, dp\n\n\ndef minimum(jumlah, stok):\n    if jumlah < 0:\n        return None\n    if jumlah == 0:\n        return 0\n    r = _dp(jumlah, stok)\n    if r is None:\n        return None\n    g, T, pecahan, dp = r\n    v = dp[-1][T]\n    return None if v == float(\"inf\") else v\n\n\ndef kembalian(jumlah, stok):\n    if jumlah < 0:\n        return None\n    if jumlah == 0:\n        return {}\n    r = _dp(jumlah, stok)\n    if r is None:\n        return None\n    g, T, pecahan, dp = r\n    if dp[-1][T] == float(\"inf\"):\n        return None\n    hasil = {}\n    t = T\n    for i in range(len(pecahan), 0, -1):\n        p, n = pecahan[i - 1]\n        w = p // g\n        for k in range(0, n + 1):\n            if k * w <= t and dp[i - 1][t - k * w] + k == dp[i][t]:\n                if k:\n                    hasil[p] = k\n                t -= k * w\n                break\n    return hasil"
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
