import { Article } from '../types';

export const ARTICLES_DATA: Article[] = [
  // --- MODE REBAHAN (MULAI 5 MENIT) ---
  {
    id: 'gaji-masuk-ngapain',
    title: 'Gaji Masuk, Harus Ngapain Dulu? (Aturan 24 Jam Pertama)',
    category: 'mulai-5-menit',
    categoryLabel: 'Mulai 5 Menit',
    mode: 'rebahan',
    readTime: '2 menit',
    tagline: 'Jangan langsung checkout keranjang belanja!',
    summary: 'Langkah pertama saat notifikasi gaji berbunyi bukan belanja, tapi mengamankan pos wajib sebelum uang "menguap" tanpa jejak.',
    content: {
      intro: 'Hari gajian adalah momen paling membahagiakan sekaligus paling rawan dalam sebulan. Seringkali baru tanggal 5, saldo rekening sudah kembali ke angka mengenaskan.',
      sections: [
        {
          heading: '1. Berikan Waktu Jeda 24 Jam',
          body: 'Saat uang masuk, hormon dopamin kita melonjak tinggi dan memicu dorongan belanja impulsif. Buat aturan sederhana: tahan diri dari membeli barang keinginan non-mendesak selama minimal 24 jam.',
          analogyOrExample: 'Bayangkan gaji seperti air galon baru. Kalau langsung dibuka keran besarnya untuk cuci mobil, besok kamu bingung mau minum pakai apa.'
        },
        {
          heading: '2. Amankan 3 Pos Utama Segera',
          body: 'Begitu transferan masuk, prioritaskan urutan ini: pertama bayar kewajiban (cicilan, tagihan listrik, sewa), kedua pisahkan tabungan/dana darurat, baru sisanya untuk makan harian dan jajan.',
          analogyOrExample: 'Sistem "Pay Yourself First": bayar masa depanmu dulu sebelum membayar penjual online.'
        }
      ]
    },
    keyTakeaway: 'Kunci ketenangan finansial bukan seberapa besar gaji yang masuk, tapi seberapa cepat kamu memisahkan pos wajib sebelum uangnya sempat terpakai untuk hal spontan.',
    actionableStep: 'Buka m-banking kamu sekarang, buat jadwal auto-debit atau transfer instan 10% gaji ke rekening tabungan terpisah di hari gajian.',
    reflectionQuestion: 'Apa barang terakhir yang kamu beli saat gajian dan sekarang sudah jarang atau bahkan tidak pernah kamu pakai lagi?',
    quiz: {
      question: 'Berdasarkan metode keuangan sehat, apa urutan alokasi gaji terbaik di hari gajian?',
      options: [
        'Belanja wishlist dulu, bayar tagihan di akhir bulan jika ada sisa',
        'Bayar kewajiban & sisihkan tabungan dulu, sisanya untuk biaya hidup dan jajan',
        'Habiskan semuanya karena rezeki besok pasti ada lagi',
        'Pindahkan seluruh gaji ke e-wallet untuk belanja diskon tanggal kembar'
      ],
      correctIndex: 1,
      explanation: 'Tepat! Membayar kewajiban dan menyisihkan tabungan di awal (Pay Yourself First) mencegah uang habis terpakai sebelum kebutuhan penting terpenuhi.'
    },
    officialSource: {
      name: 'Otoritas Jasa Keuangan (OJK) - Sikapi Uangmu',
      url: 'https://sikapiuangmu.ojk.go.id',
      description: 'Panduan Pengelolaan Gaji dan Perencanaan Keuangan Keluarga',
      verifiedYear: '2026'
    }
  },
  {
    id: 'kenapa-uang-cepat-habis',
    title: 'Kenapa Uang Terasa Cepat Habis? Mengenal Fenomena Bocor Halus',
    category: 'mulai-5-menit',
    categoryLabel: 'Mulai 5 Menit',
    mode: 'rebahan',
    readTime: '3 menit',
    tagline: 'Bukan pengeluaran besar yang bikin bangkrut, tapi recehan yang sering.',
    summary: 'Merasa nggak beli apa-apa tapi saldo habis? Kamu mungkin mengalami kebocoran mikro harian yang tidak terasa di dompet.',
    content: {
      intro: 'Banyak orang bingung ke mana larinya uang 5 juta atau 10 juta sebulan. Jarang sekali orang bangkrut karena beli kulkas mendadak, melainkan karena transaksi kecil Rp15.000 sampai Rp35.000 yang terjadi berkali-kali sehari.',
      sections: [
        {
          heading: 'Apa Itu "Latte Factor" atau Bocor Halus?',
          body: 'Istilah ini merujuk pada pengeluaran kecil harian yang dianggap sepele: kopi susu kekinian Rp25.000, biaya admin top-up e-wallet Rp1.500, biaya ongkir flash sale Rp10.000, atau langganan streaming yang tidak pernah ditonton.',
          analogyOrExample: 'Kopi Rp25.000 x 30 hari = Rp750.000 per bulan = Rp9.000.000 per tahun. Cukup untuk tiket mudik atau modal awal investasi SBN!'
        },
        {
          heading: 'Bukan Berarti Nggak Boleh Ngopi',
          body: 'Prinsipnya bukan menyiksa diri hidup tanpa kopi atau hiburan, tapi menyadari ("mindful") bahwa setiap nominal yang keluar adalah pilihan sadar kamu, bukan otomatis terpotong.',
          analogyOrExample: 'Pilih 1 hal kecil yang paling membahagiakanmu, lalu pangkas hal kecil lain yang sebenarnya kamu beli cuma karena bosan.'
        }
      ]
    },
    keyTakeaway: 'Pengeluaran kecil yang sering lebih berbahaya dari pengeluaran besar yang jarang, karena ia luput dari radar pencatatan otak kita.',
    actionableStep: 'Periksa riwayat transaksi dompet digitalmu 7 hari terakhir. Hitung total biaya admin top-up dan jajan iseng yang tidak terencana.',
    reflectionQuestion: 'Apa satu kebiasaan belanja kecil di hari kerjamu yang kalau dikurangi setengahnya tidak akan mengurangi kebahagiaanmu?',
    quiz: {
      question: 'Manakah yang merupakan contoh paling nyata dari "bocor halus" dalam keuangan pribadi?',
      options: [
        'Membayar biaya sewa kamar kos tahunan',
        'Membeli tiket pesawat pulang kampung saat lebaran',
        'Biaya admin transfer beda bank dan top-up e-wallet yang terjadi berkali-kali setiap hari',
        'Membayar angsuran cicilan rumah yang terdaftar di bank'
      ],
      correctIndex: 2,
      explanation: 'Benar! Biaya admin, jajan cemilan iseng, dan ongkos kirim kecil yang berulang adalah contoh klasik bocor halus karena nilainya kecil namun totalnya besar.'
    },
    officialSource: {
      name: 'OJK - Literasi Perencanaan Keuangan Mandiri',
      url: 'https://ojk.go.id',
      description: 'Edukasi Manajemen Pengeluaran Harian dan Kebiasaan Finansial Sehat',
      verifiedYear: '2026'
    }
  },
  {
    id: 'gaji-kecil-tetap-bisa-nabung',
    title: 'Gaji Pas-Pasan Tetap Bisa Nabung? Mitos vs Realita',
    category: 'mulai-5-menit',
    categoryLabel: 'Mulai 5 Menit',
    mode: 'rebahan',
    readTime: '2 menit',
    tagline: 'Menabung adalah kebiasaan otot mental, bukan soal nominal.',
    summary: 'Jika menunggu gaji besar baru menabung, saat gaji naik pengeluaran biasanya ikut melompat (gaya hidup). Mulailah dari nominal paling kecil.',
    content: {
      intro: 'Banyak orang berkata: "Gajiku cuma UMR / pas untuk makan, mana bisa nabung?". Ini keluhan yang sangat manusiawi. Namun, menabung di awal bukan soal mengumpulkan 100 juta sekaligus, melainkan membangun reflex tidak menghabiskan semua uang yang ada.',
      sections: [
        {
          heading: 'Mulai dari Rp10.000 atau Rp20.000 per Hari',
          body: 'Jangan bandingkan tabunganmu dengan influencer media sosial. Jika sanggupnya Rp20.000 seminggu, simpan Rp20.000 itu. Yang terpenting adalah konsistensi dan rasa bangga bahwa kamu memegang kendali atas sebagian uangmu.',
          analogyOrExample: 'Seperti mulai olahraga lari: jangan langsung maraton 42 km. Lari 500 meter dulu setiap pagi agar otot kakimu terbiasa.'
        },
        {
          heading: 'Waspadai Lifestyle Inflation (Inflasi Gaya Hidup)',
          body: 'Ketika gaji naik dari Rp3 juta ke Rp5 juta, seringkali orang merasa tetap kurang karena standar kafe, ponsel, atau pakaian ikut dinaikkan. Kuncinya: tahan gaya hidup lama selama minimal 6 bulan setelah naik gaji.',
          analogyOrExample: 'Gaji naik 30%, tabungan naikkan 20%, sisa 10% baru untuk perbaikan kualitas hidup.'
        }
      ]
    },
    keyTakeaway: 'Besar kecilnya tabungan awal tidak sepenting kontinuitasnya. Kebiasaan menabung adalah fondasi kebebasan finansial jangka panjang.',
    actionableStep: 'Mulai hari ini, kumpulkan uang sisa kembalian fisik atau sisihkan saldo genap (misal saldo Rp127.500, pindahkan Rp7.500) ke rekening simpanan terpisah.',
    reflectionQuestion: 'Berapa nominal terkecil yang bisa kamu sisihkan hari ini tanpa membuatmu kelaparan besok?',
    quiz: {
      question: 'Apa alasan utama disarankan menabung meski nominalnya sangat kecil bagi pemula?',
      options: [
        'Agar bisa langsung kaya raya dalam hitungan minggu',
        'Membangun disiplin dan kebiasaan finansial sebelum nominal pendapatan bertambah di masa depan',
        'Karena bank akan memblokir rekening jika tidak ada tabungan',
        'Hanya untuk pamer di media sosial'
      ],
      correctIndex: 1,
      explanation: 'Tepat sekali! Membangun kebiasaan menabung adalah melatih otot mental keuangan agar ketika rezeki bertambah, gaya hidup tidak serta-merta menelan habis seluruh pendapatan.'
    },
    officialSource: {
      name: 'Bank Indonesia - Gerakan Ayo Menabung',
      url: 'https://bi.go.id',
      description: 'Edukasi Inklusi Keuangan dan Kebiasaan Menabung Nasional',
      verifiedYear: '2026'
    }
  },
  {
    id: 'lima-istilah-finansial-populer',
    title: '5 Istilah Finansial yang Sering Terdengar Tapi Bikin Pusing',
    category: 'mulai-5-menit',
    categoryLabel: 'Mulai 5 Menit',
    mode: 'rebahan',
    readTime: '3 menit',
    tagline: 'Kupas tuntas bahasa perbankan tanpa rumus matematika rumit.',
    summary: 'Sering dengar kata likuiditas, inflasi, bunga majemuk, tenor, dan dividen di tongkrongan? Ini artinya dalam bahasa manusia biasa.',
    content: {
      intro: 'Dunia finansial sering terasa angker karena dipenuhi jargon teknis. Padahal di balik kata-kata keren itu, konsep dasarnya sangat dekat dengan kehidupan sehari-hari kita.',
      sections: [
        {
          heading: '1. Likuiditas: Seberapa Cepat Jadi Uang Tunai',
          body: 'Likuid artinya cair. Uang di dompet atau tabungan bank itu sangat likuid (bisa dipakai kapan saja). Rumah atau tanah itu tidak likuid (butuh berbulan-bulan untuk menjualnya jadi uang tunai).',
          analogyOrExample: 'E-wallet = air minum siap teguk. Rumah = es batu ukuran raksasa, butuh waktu dicairkan.'
        },
        {
          heading: '2. Inflasi: Kenapa Bakso Dulu Rp1.000 Sekarang Rp15.000',
          body: 'Inflasi adalah penurunan daya beli uang seiring waktu karena naiknya harga barang secara umum. Uang Rp100.000 tahun 2000 bisa beli sekarung beras; hari ini mungkin hanya beberapa kilogram.',
          analogyOrExample: 'Uang yang didiamkan di bawah bantal tidak berkurang lembarannya, tapi nilainya dimakan rayap waktu bernama inflasi.'
        },
        {
          heading: '3. Tenor: Durasi Waktu Pinjaman atau Kontrak',
          body: 'Tenor adalah lamanya waktu perjanjian cicilan atau simpanan berjalan. Misalnya: kredit motor dengan tenor 36 bulan (3 tahun), atau deposito berjangka tenor 6 bulan.'
        }
      ]
    },
    keyTakeaway: 'Jangan terintimidasi oleh istilah perbankan. Begitu kamu tahu padanan sederhananya, kamu bisa membuat keputusan finansial yang jauh lebih percaya diri.',
    actionableStep: 'Kunjungi Kamus Finansial di FinansialKu.com untuk melihat puluhan istilah lain dengan analogi sehari-hari yang seru.',
    reflectionQuestion: 'Istilah keuangan apa yang selama ini paling sering membuatmu ragu atau takut bertanya ke petugas bank?',
    quiz: {
      question: 'Manakah aset berikut yang memiliki tingkat "likuiditas" paling tinggi saat kamu butuh uang mendesak malam ini?',
      options: [
        'Sebidang tanah warisan di luar kota',
        'Koleksi motor antik di garasi rumah',
        'Saldo rekening tabungan bank dengan kartu debit aktif',
        'Emas batangan 50 gram yang tersimpan di brankas toko yang tutup'
      ],
      correctIndex: 2,
      explanation: 'Benar! Saldo bank dengan kartu debit dapat langsung ditarik di ATM 24 jam atau ditransfer kapan saja, sehingga memiliki tingkat likuiditas tertinggi.'
    },
    officialSource: {
      name: 'Otoritas Jasa Keuangan (OJK)',
      url: 'https://ojk.go.id',
      description: 'Glosarium Istilah Lembaga Jasa Keuangan Resmi OJK',
      verifiedYear: '2026'
    }
  },
  {
    id: 'kebutuhan-vs-keinginan',
    title: 'Bedanya Kebutuhan vs Keinginan: Formula Jeda 48 Jam',
    category: 'mulai-5-menit',
    categoryLabel: 'Mulai 5 Menit',
    mode: 'rebahan',
    readTime: '2 menit',
    tagline: 'Apakah kamu benar-benar butuh sepatu itu, atau cuma lagi stres?',
    summary: 'Batas antara kebutuhan dan keinginan seringkali kabur karena otak kita jago membuat pembenaran logis untuk belanja emosional.',
    content: {
      intro: 'Kita sering menipu diri sendiri: "Aku butuh jaket baru ini buat kerja kok!" padahal di lemari sudah ada 5 jaket yang masih bagus. Membedakan keduanya adalah rem paling ampuh mencegah kantong kering.',
      sections: [
        {
          heading: 'Kebutuhan: Jika Tidak Ada, Kelangsungan Hidup Terganggu',
          body: 'Kebutuhan mencakup makanan pokok, tempat tinggal layak, obat-obatan, biaya transportasi ke tempat kerja, dan tagihan listrik air. Tanpa ini, aktivitas normalmu terhenti.',
          analogyOrExample: 'Makan siang nasi rames di warteg = kebutuhan gizi tubuh.'
        },
        {
          heading: 'Keinginan: Meningkatkan Kenyamanan atau Status',
          body: 'Keinginan adalah preferensi cara memenuhi kebutuhan: smartphone keluaran terbaru padahal ponsel lama masih berfungsi prima, makan steak di restoran mewah tiap akhir pekan, atau ngopi estetik demi foto.',
          analogyOrExample: 'Makan steak wagyu Rp300.000 di mal = keinginan gaya hidup.'
        },
        {
          heading: 'Terapkan Aturan 48 Jam',
          body: 'Saat ingin membeli barang non-esensial berharga di atas Rp200.000, masukkan ke wishlist keranjang, lalu tunggu 48 jam. Jika setelah 2 hari kamu masih memikirkannya dan ada uang dinginnya, silakan beli. Faktanya, 70% keinginan akan menguap setelah 48 jam!'
        }
      ]
    },
    keyTakeaway: 'Keinginan tidak salah dan tidak dilarang, selama kamu membelinya dengan uang yang memang sudah dialokasikan untuk pos hiburan, bukan memakai jatah beras atau sewa rumah.',
    actionableStep: 'Periksa keranjang belanja e-commerce kamu saat ini, tunda checkout selama 48 jam dan lihat apakah kamu masih benar-benar menginginkannya besok lusa.',
    reflectionQuestion: 'Kapan terakhir kali kamu membeli barang karena dorongan bosan atau lelah sepulang kerja, lalu menyesal keesokan harinya?',
    quiz: {
      question: 'Manakah situasi berikut yang paling tepat dikategorikan sebagai "Kebutuhan" murni?',
      options: [
        'Membeli sepatu lari edisi terbatas merk ternama seharga 2 juta rupiah',
        'Membeli obat resep dokter untuk radang tenggorokan yang diderita',
        'Mengganti ponsel tipe tahun lalu dengan seri terbaru yang rilis kemarin',
        'Berlangganan 4 layanan streaming film sekaligus setiap bulan'
      ],
      correctIndex: 1,
      explanation: 'Benar! Obat resep kesehatan berkaitan langsung dengan kelangsungan hidup dan fungsi tubuh, sehingga merupakan kebutuhan mutlak.'
    },
    officialSource: {
      name: 'OJK - Sikapi Uangmu',
      url: 'https://sikapiuangmu.ojk.go.id',
      description: 'Panduan Membedakan Kebutuhan Pokok dan Gaya Hidup Konsumtif',
      verifiedYear: '2026'
    }
  },
  {
    id: 'cara-baca-mutasi-rekening',
    title: 'Cara Sederhana Membaca Mutasi Rekening Tanpa Pusing',
    category: 'mulai-5-menit',
    categoryLabel: 'Mulai 5 Menit',
    mode: 'rebahan',
    readTime: '3 menit',
    tagline: 'Pahami kode D, K, CR, DB, dan biaya admin yang menyelinap.',
    summary: 'Buka riwayat transaksi bank sering bikin bingung dengan istilah perbankan. Ini panduan kilat membaca mutasi rekeningmu.',
    content: {
      intro: 'Mengecek mutasi rekening sebulan sekali ibarat check-up kesehatan rutin. Kamu bisa mendeteksi transaksi aneh, langganan aplikasi yang lupa dibatalkan, dan menghitung total biaya admin bulananmu.',
      sections: [
        {
          heading: 'Arti Debit (DB / D) vs Kredit (CR / K) dari Sisi Nasabah',
          body: 'Di mutasi bank umum: DEBIT (DB) berarti uang keluar dari rekeningmu (berkurang), sedangkan KREDIT (CR) berarti uang masuk ke rekeningmu (bertambah).',
          analogyOrExample: 'Menerima gaji = Kredit (CR). Membayar kopi QRIS = Debit (DB).'
        },
        {
          heading: 'Cek Kode Biaya Bulanan yang Rutin Muncul',
          body: 'Perhatikan baris seperti "ADM" (biaya administrasi bulanan rekening), "BIAYA KARTU" (biaya admin kartu debit ATM), atau "PAJAK BUNGA" (pajak 20% atas bunga simpanan yang diperoleh).',
          analogyOrExample: 'Bila biaya admin Rp15.000/bulan + kartu Rp5.000/bulan, setahun kamu membayar Rp240.000 hanya untuk biaya pemeliharaan rekening.'
        }
      ]
    },
    keyTakeaway: 'Rutin mengecek mutasi minimal sebulan sekali melindungi kamu dari kejahatan skimming, salah transfer, atau kebocoran biaya langganan digital tak terpakai.',
    actionableStep: 'Unduh mutasi rekening m-banking bulan lalu, cari baris bertuliskan ADM untuk tahu berapa total potongan biaya admin rekeningmu.',
    reflectionQuestion: 'Apakah ada tagihan auto-debit langganan aplikasi di rekeningmu yang sebenarnya sudah berbulan-bulan tidak kamu buka?',
    quiz: {
      question: 'Pada rekening tabungan nasabah di bank Indonesia, transaksi dengan tanda "CR" (Credit) menunjukkan apa?',
      options: [
        'Uang telah ditarik tunai oleh nasabah',
        'Uang masuk atau bertambah ke dalam saldo rekening nasabah',
        'Rekening sedang diblokir oleh pihak kepolisian',
        'Nasabah memiliki tagihan kartu kredit yang jatuh tempo'
      ],
      correctIndex: 1,
      explanation: 'Tepat! Dari sudut pandang mutasi buku tabungan nasabah, CR (Credit) menandakan adanya dana yang masuk (bertambah) ke rekening.'
    },
    officialSource: {
      name: 'Bank Indonesia & OJK',
      url: 'https://ojk.go.id',
      description: 'Panduan Standar Transaksi Perbankan dan Perlindungan Konsumen',
      verifiedYear: '2026'
    }
  },

  // --- MODE PRAKTIK (MENGATUR UANG) ---
  {
    id: 'anggaran-bulanan-fleksibel',
    title: 'Membuat Anggaran Bulanan: Bukan Penjara, Tapi Kompas',
    category: 'mengatur-uang',
    categoryLabel: 'Mengatur Uang',
    mode: 'praktik',
    readTime: '4 menit',
    tagline: 'Anggaran yang terlalu kaku pasti gagal di minggu kedua.',
    summary: 'Banyak orang berhenti bikin budgeting karena merasa seperti diet ekstrem. Anggaran yang baik justru memberi izin untuk menikmati uang dengan rasa tenang.',
    content: {
      intro: 'Tujuan membuat anggaran bukan untuk membuatmu menderita makan mi instan tiap hari, melainkan agar kamu yang memberi perintah ke mana uangmu pergi, bukan malah bertanya-tanya ke mana uangmu menghilang di akhir bulan.',
      sections: [
        {
          heading: 'Metode 50/30/20 Sebagai Titik Awal, Bukan Doktrin Mati',
          body: 'Aturan umum membagi: 50% Kebutuhan Pokok (makan, sewa, tagihan listrik, transportasi), 30% Keinginan (nongkrong, hobi, belanja baju), 20% Tabungan/Investasi/Cicilan Produktif. Tapi sesuaikan dengan realita kotamu!',
          analogyOrExample: 'Jika kamu tinggal di Jakarta dengan biaya kos dan ongkos tinggi, pembagian 65/20/15 atau 70/20/10 sangat wajar dan tetap sehat.'
        },
        {
          heading: 'Berikan Ruang "Uang Senang-Senang" (Guilt-Free Money)',
          body: 'Selalu anggarkan nominal tertentu yang bebas kamu habiskan tanpa rasa bersalah. Jika pos ini ada, kamu tidak akan tergoda membobol pos kebutuhan atau pos tabungan saat ingin refreshing.',
          analogyOrExample: 'Seperti katup pengaman pada panci presto: kalau uapnya tidak dikeluarkan sedikit demi sedikit, pancinya bisa meledak.'
        }
      ]
    },
    keyTakeaway: 'Anggaran terbaik adalah anggaran realistis yang sanggup kamu jalani konsisten selama 12 bulan ke depan, bukan anggaran sempurna yang hanya bertahan 3 hari.',
    actionableStep: 'Buka fitur "Gajian Calculator" di FinansialKu.com sekarang, masukkan gaji bersihmu dan geser persentase alokasi yang paling pas dengan kondisi hidupmu.',
    reflectionQuestion: 'Berapa persen dari penghasilanmu saat ini yang benar-benar terserap untuk kebutuhan mutlak tempat tinggal dan makan?',
    quiz: {
      question: 'Mengapa pembagian anggaran 50/30/20 sebaiknya dianggap sebagai panduan fleksibel dan bukan aturan mutlak?',
      options: [
        'Karena setiap orang memiliki kondisi biaya hidup, tanggungan keluarga, dan cicilan yang berbeda-beda',
        'Karena rumus tersebut dilarang oleh pemerintah',
        'Karena kita tidak perlu menabung sama sekali di usia muda',
        'Karena uang lebih baik dihabiskan seluruhnya untuk hiburan'
      ],
      correctIndex: 0,
      explanation: 'Tepat sekali! Formula anggaran harus disesuaikan dengan realita individual, seperti biaya hidup di kota tempat tinggal dan jumlah tanggungan keluarga.'
    },
    officialSource: {
      name: 'OJK - Sikapi Uangmu',
      url: 'https://sikapiuangmu.ojk.go.id',
      description: 'Panduan Praktis Perencanaan Anggaran Keuangan Rumah Tangga Sehat',
      verifiedYear: '2026'
    }
  },
  {
    id: 'menentukan-target-dana-darurat',
    title: 'Menentukan Target Dana Darurat: Single, Menikah, & Freelancer',
    category: 'mengatur-uang',
    categoryLabel: 'Mengatur Uang',
    mode: 'praktik',
    readTime: '4 menit',
    tagline: 'Bantal empuk saat hidup melempar kejutan tak terduga.',
    summary: 'Sebelum mikir investasi saham atau crypto berisiko tinggi, pastikan kamu punya jaring pengaman bernama dana darurat.',
    content: {
      intro: 'Sakit mendadak, laptop kerja rusak, ban motor meletus, atau perusahaan melakukan efisiensi (PHK). Hal-hal ini bukan soal "jika", tapi "kapan" terjadi. Dana darurat adalah pembatas antara musibah dan kebangkrutan.',
      sections: [
        {
          heading: 'Berapa Besaran Ideal Dana Darurat?',
          body: 'Patokannya dihitung dari PENGELUARAN BULANAN rutinmu, bukan gaji kotor: \n• Lajang (Single): 3 sampai 6 kali pengeluaran bulanan.\n• Menikah tanpa anak: 6 kali pengeluaran bulanan.\n• Menikah dengan anak / Tanggungan: 9 sampai 12 kali pengeluaran bulanan.\n• Pekerja Lepas / Freelancer: 12 kali pengeluaran bulanan karena pemasukan fluktuatif.',
          analogyOrExample: 'Jika pengeluaran bulananmu Rp3.000.000 dan kamu lajang, target dana darurat minimal adalah 3 x Rp3.000.000 = Rp9.000.000.'
        },
        {
          heading: 'Di Mana Dana Darurat Sebaiknya Disimpan?',
          body: 'Kriterianya harus AMAN dan LIKUID (mudah dicairkan tanpa pinalti besar). Simpan di: rekening bank terpisah tanpa kartu debit aktif di dompet, deposito jangka pendek, atau Reksa Dana Pasar Uang (RDPU). Jangan simpan di saham berfluktuasi atau tanah!',
          analogyOrExample: 'Bayangkan ban cadangan di bagasi mobil: harus siap pakai saat roda utama kempes di jalan tol tengah malam.'
        }
      ]
    },
    keyTakeaway: 'Dana darurat bukan untuk mencari untung berlipat ganda, melainkan untuk memberikan ketenangan pikiran dan proteksi modal hidupmu.',
    actionableStep: 'Hitung pengeluaran bulanan dasarmu hari ini, lalu gunakan kalkulator dana darurat kami untuk mengetahui target dan progressmu.',
    reflectionQuestion: 'Jika besok pagi sumber pemasukan utamamu terhenti, berapa bulan kamu dan keluargamu bisa bertahan hidup dengan tabungan yang ada saat ini?',
    quiz: {
      question: 'Seorang lajang dengan pengeluaran rutin Rp4.000.000 per bulan ingin memiliki dana darurat minimal 3 bulan. Berapa target dana darurat yang harus ia kumpulkan?',
      options: [
        'Rp4.000.000',
        'Rp8.000.000',
        'Rp12.000.000',
        'Rp40.000.000'
      ],
      correctIndex: 2,
      explanation: 'Tepat! 3 x Rp4.000.000 = Rp12.000.000. Dana ini akan menjadi jaring pengaman biaya hidup selama 3 bulan jika terjadi keadaan darurat.'
    },
    officialSource: {
      name: 'OJK & Perencana Keuangan Independen',
      url: 'https://ojk.go.id',
      description: 'Edukasi Manajemen Risiko Likuiditas dan Dana Darurat',
      verifiedYear: '2026'
    }
  },
  {
    id: 'mengelola-cicilan-dan-utang',
    title: 'Mengelola Cicilan & Utang: Jaga Rasio Utang di Bawah 30%',
    category: 'mengatur-uang',
    categoryLabel: 'Mengatur Uang',
    mode: 'praktik',
    readTime: '3 menit',
    tagline: 'Utang bisa jadi jembatan impian atau jerat leher, tergantung rasionya.',
    summary: 'Berapa batas maksimal cicilan bulanan yang sehat? Pahami Debt Service Ratio (DSR) dan cara melunasi utang dengan metode bola salju.',
    content: {
      intro: 'Tidak semua utang itu haram. Cicilan rumah (KPR) atau pinjaman modal usaha produktif yang terukur bisa membantu meningkatkan kesejahteraan. Yang berbahaya adalah utang konsumtif yang melebihi daya pikul penghasilan.',
      sections: [
        {
          heading: 'Batas Sehat: Rasio Cicilan Maksimal 30% dari Gaji',
          body: 'Standar perbankan dan OJK menyarankan total seluruh cicilan bulanan (gabungan KPR, motor, kartu kredit, paylater) tidak melebihi 30% dari penghasilan bulanan bersihmu.',
          analogyOrExample: 'Gaji Rp6.000.000 -> Total cicilan maksimal Rp1.800.000. Jika di atas 30%, kamu akan mulai kesulitan membeli makanan bergizi atau menabung.'
        },
        {
          heading: 'Metode Pelunasan: Snowball vs Avalanche',
          body: '• Snowball: Lunasi utang dari nominal paling kecil lebih dulu untuk meraih kemenangan mental cepat.\n• Avalanche: Lunasi utang dengan suku bunga tertinggi lebih dulu untuk menghemat total biaya bunga yang dibayar.'
        }
      ]
    },
    keyTakeaway: 'Sebelum mengajukan pinjaman baru, selalu hitung apakah cicilannya akan menembus batas 30% penghasilanmu. Jika ya, tunda atau cari alternatif lain.',
    actionableStep: 'Jumlahkan seluruh cicilan bulananmu (KPR, motor, paylater, pinjol legal). Bagi hasilnya dengan gaji bulananmu untuk melihat rasio DSR kamu.',
    reflectionQuestion: 'Berapa persen dari gajimu bulan ini yang langsung berpindah ke tangan kreditur untuk membayar masa lalumu?',
    quiz: {
      question: 'Berapa rekomendasi persentase maksimal cicilan bulanan terhadap total penghasilan agar kondisi keuangan tetap sehat menurut standar perbankan dan OJK?',
      options: [
        'Maksimal 10%',
        'Maksimal 30% - 35%',
        'Maksimal 75%',
        'Bebas selama kartu kredit belum limit'
      ],
      correctIndex: 1,
      explanation: 'Benar! Batas ideal rasio cicilan utang (Debt Service Ratio) adalah di bawah 30% hingga maksimal 35% agar pos kebutuhan pokok dan tabungan tidak tertekan.'
    },
    officialSource: {
      name: 'Bank Indonesia & OJK',
      url: 'https://bi.go.id',
      description: 'Pedoman Penilaian Kelayakan Kredit Konsumen dan Manajemen Utang',
      verifiedYear: '2026'
    }
  },
  {
    id: 'bongkar-paylater-biaya-terselubung',
    title: 'Memahami Paylater & Biaya Pinjaman Terselubung',
    category: 'mengatur-uang',
    categoryLabel: 'Mengatur Uang',
    mode: 'praktik',
    readTime: '3 menit',
    tagline: 'Beli sekarang, bayar nanti, menangis kemudian?',
    summary: 'Fitur paylater membius otak kita karena menghilangkan "pain of paying". Pahami bunga bulanan, biaya penanganan, denda keterlambatan, dan riwayat SLIK OJK.',
    content: {
      intro: 'Belanja menggunakan uang kertas terasa sakit di hati saat dompet menipis. Tapi tombol "Paylater 3x Cicilan" terasa seperti gratis. Inilah jebakan psikologis yang membuat generasi muda terjerat cicilan konsumtif.',
      sections: [
        {
          heading: 'Hitung Bunga Efektif dan Biaya Admin',
          body: 'Bunga 2.95% per bulan terkesan kecil. Namun jika disetahunkan (annualized), itu setara lebih dari 35% per tahun! Ditambah biaya admin transaksi Rp5.000 atau 1% per transaksi, total harga barang sebenarnya jauh lebih mahal daripada harga aslinya.',
          analogyOrExample: 'Beli baju Rp200.000 dicicil 6 bulan bisa berakhir membayar Rp280.000. Kamu rela membayar ekstra 40% hanya demi gengsi semu?'
        },
        {
          heading: 'Tercatat di SLIK OJK (Dulu BI Checking)',
          body: 'Layanan paylater resmi terdaftar di OJK dan menyetor data kelancaran pembayaranmu ke SLIK OJK. Menunggak tagihan paylater Rp50.000 saja bisa membuat namamu masuk daftar hitam kualitas kredit, sehingga di masa depan kamu ditolak saat ingin mengajukan KPR rumah!',
          analogyOrExample: 'Riwayat kredit di SLIK adalah rapor keuangan seumur hidupmu di mata perbankan nasional.'
        }
      ]
    },
    keyTakeaway: 'Gunakan paylater hanya untuk kebutuhan darurat mendesak yang memiliki kepastian dana pelunasan, bukan untuk membiayai gaya hidup atau jajan konsumtif.',
    actionableStep: 'Periksa daftar paylater aktif di aplikasi e-commerce kamu. Lunasi tagihannya dan pertimbangkan untuk menonaktifkan akun jika sering tergoda belanja impulsif.',
    reflectionQuestion: 'Pernahkah kamu menggunakan paylater hanya untuk membeli makanan pesan-antar atau baju yang sebenarnya tidak mendesak?',
    quiz: {
      question: 'Apa dampak jangka panjang jika seseorang menunggak atau gagal bayar tagihan paylater resmi berizin OJK?',
      options: [
        'Tidak ada dampak apa pun karena nominalnya kecil',
        'Catatan buruk di Sistem Layanan Informasi Keuangan (SLIK OJK) yang dapat menghambat pengajuan KPR di masa depan',
        'Saldo rekening otomatis berlipat ganda',
        'Pemberian hadiah dari e-commerce'
      ],
      correctIndex: 1,
      explanation: 'Benar! Penyelenggara paylater legal wajib melaporkan riwayat kredit debitur ke SLIK OJK. Menunggak akan merusak skor kredit dan menyulitkan kredit perbankan kelak.'
    },
    officialSource: {
      name: 'Otoritas Jasa Keuangan (OJK) - SLIK',
      url: 'https://ojk.go.id',
      description: 'Sistem Layanan Informasi Keuangan (SLIK) dan Regulasi Pembiayaan Konsumen',
      verifiedYear: '2026'
    }
  },
  {
    id: 'mengenali-modus-penipuan-keuangan',
    title: 'Mengenali Modus Penipuan Keuangan: Phishing, Soceng, & Modus Kurir',
    category: 'mengatur-uang',
    categoryLabel: 'Mengatur Uang',
    mode: 'praktik',
    readTime: '3 menit',
    tagline: 'Jangan pernah berikan OTP atau klik file .APK sembarangan!',
    summary: 'Pelaku penipuan tidak meretas sistem bank yang berlapis baja; mereka meretas psikologi manusia melalui rekayasa sosial (Social Engineering).',
    content: {
      intro: 'Kejahatan siber zaman sekarang jarang menggunakan peretas jenius yang membobol server bank. Mereka menggunakan telepon panik, link palsu, atau file undangan pernikahan / resi paket palsu berekstensi .APK untuk menguras rekening korban.',
      sections: [
        {
          heading: '1. Modus Undangan & Paket Palsu (.APK)',
          body: 'Korban dikirimi pesan WhatsApp dari nomor asing: "Paket Anda tertahan, silakan cek resi" atau "Undangan Pernikahan Kami", disertai file berbahaya yang jika diklik akan menginstal malware pencuri SMS OTP m-banking.',
          analogyOrExample: 'Mengklik file .APK sembarangan ibarat menyerahkan kunci rumah dan kode brankasmu ke orang asing di jalan.'
        },
        {
          heading: '2. Prinsip Emas: Jangan Pernah Berikan OTP & PIN!',
          body: 'Pihak bank, BI, OJK, atau kepolisian TIDAK PERNAH meminta nomor CVV kartu, PIN ATM, atau kode OTP lewat telepon atau pesan singkat dengan alasan apa pun (termasuk update tarif atau pembatalan transaksi).',
          analogyOrExample: 'Kode OTP adalah seperti celana dalammu: jangan pernah dibagikan atau diperlihatkan kepada orang lain!'
        }
      ]
    },
    keyTakeaway: 'Saat menerima telepon panik atau link mencurigakan yang mengatasnamakan bank, tarik napas, matikan telepon, dan hubungi call center resmi bank yang tertera di kartu ATM.',
    actionableStep: 'Periksa pengaturan WhatsApp di ponselmu: matikan unduhan otomatis file (Auto-download) untuk media dan dokumen agar file berbahaya tidak terunduh tanpa sengaja.',
    reflectionQuestion: 'Apakah kamu sudah mengedukasi orang tua atau saudaramu tentang bahaya mengklik file .APK yang dikirim via WhatsApp?',
    quiz: {
      question: 'Jika seseorang mengaku sebagai petugas customer service bank dan meminta kode OTP yang masuk ke SMS-mu dengan alasan verifikasi sistem, apa tindakan yang benar?',
      options: [
        'Langsung sebutkan kode OTP agar akun tidak diblokir',
        'Tolak mentah-mentah dan jangan berikan kode OTP kepada siapa pun, karena petugas bank resmi tidak pernah meminta OTP',
        'Kirimkan foto kartu identitas beserta kartu ATM',
        'Tanya berapa nomor rekening petugas tersebut untuk transfer uang'
      ],
      correctIndex: 1,
      explanation: 'Tepat sekali! Bank resmi mana pun melarang keras pegawainya meminta kode OTP nasabah. Siapa pun yang meminta kode OTP dapat dipastikan sedang mencoba membobol akunmu.'
    },
    officialSource: {
      name: 'Bank Indonesia & Patroli Siber Polri',
      url: 'https://bi.go.id',
      description: 'Edukasi Keamanan Sistem Pembayaran dan Kewaspadaan Kejahatan Rekayasa Sosial',
      verifiedYear: '2026'
    }
  },

  // --- MODE KENALI LEMBAGA KEUANGAN ---
  {
    id: 'bank-dan-bank-indonesia',
    title: 'Bank Umum vs Bank Indonesia (BI): Siapa Mencetak & Siapa Mengedarkan?',
    category: 'bank-bi',
    categoryLabel: 'Bank & Bank Indonesia',
    mode: 'lembaga',
    readTime: '4 menit',
    tagline: 'Kenapa kita tidak bisa menabung atau buka tabungan di Bank Indonesia?',
    summary: 'Pahami perbedaan mendasar antara Bank Sentral (Bank Indonesia) dan Bank Umum komersial tempat kita menabung sehari-hari.',
    content: {
      intro: 'Sering ada pertanyaan pemula: "Bisa nggak sih kita buka rekening tabungan langsung di Bank Indonesia supaya lebih aman?". Jawabannya tidak bisa. Mari kita pahami tugas masing-masing lembaga!',
      sections: [
        {
          heading: '1. Bank Indonesia (BI) = Bank Sentral Republik Indonesia',
          body: 'BI adalah lembaga negara independen yang bertugas mencapai dan memelihara kestabilan nilai rupiah (stabilitas moneter), menjaga sistem pembayaran nasional (seperti standar QRIS dan BI-FAST), serta menjaga stabilitas sistem keuangan makro.',
          analogyOrExample: 'BI seperti Wasit Utama di lapangan sepak bola keuangan nasional: memastikan pertandingan berjalan adil, bola tidak kempes, dan aturan main ditaati.'
        },
        {
          heading: '2. Bank Umum = Lembaga Perantara Keuangan Komersial',
          body: 'Bank umum (seperti BCA, Mandiri, BRI, BNI, dan bank swasta/daerah lainnya) adalah tempat masyarakat umum bertransaksi langsung: menabung, meminta pinjaman kredit, mentransfer uang, dan berinvestasi deposito.',
          analogyOrExample: 'Bank Umum seperti para pemain di lapangan: mereka melayani penonton (nasabah) secara langsung.'
        },
        {
          heading: 'Peran BI dalam Sistem Pembayaran Harian Kita',
          body: 'Setiap kali kamu scan QRIS di pedagang pecel lele atau mentransfer uang dengan biaya murah Rp2.500 lewat BI-FAST, kamu sedang menikmati infrastruktur sistem pembayaran yang dibangun dan diatur oleh Bank Indonesia.'
        }
      ]
    },
    keyTakeaway: 'Bank Indonesia tidak melayani rekening perorangan nasabah ritel. BI bertugas menjaga kestabilan nilai rupiah dan kelancaran sistem pembayaran nasional yang menaungi seluruh bank umum.',
    actionableStep: 'Periksa struk transfer m-banking kamu berikutnya, perhatikan pilihan BI-FAST yang diinisiasi oleh Bank Indonesia untuk efisiensi transfer antarbank.',
    reflectionQuestion: 'Menurutmu, apa yang akan terjadi pada harga barang di pasar jika Bank Indonesia mencetak uang kertas rupiah tanpa batas?',
    quiz: {
      question: 'Manakah dari pernyataan berikut yang BENAR mengenai peran Bank Indonesia (BI)?',
      options: [
        'Masyarakat umum dapat membuka rekening tabungan gaji perorangan di kantor cabang BI',
        'BI adalah bank sentral independen yang bertugas menjaga kestabilan nilai rupiah dan mengatur sistem pembayaran nasional',
        'BI memberikan pinjaman kredit tanpa agunan untuk belanja online',
        'BI menjamin simpanan nasabah bank umum jika bank bangkrut'
      ],
      correctIndex: 1,
      explanation: 'Benar! Bank Indonesia adalah bank sentral yang fokus pada stabilitas moneter, inflasi, dan sistem pembayaran (seperti QRIS dan BI-FAST), bukan melayani nasabah tabungan ritel.'
    },
    officialSource: {
      name: 'Bank Indonesia (BI)',
      url: 'https://bi.go.id',
      description: 'Undang-Undang No. 23 Tahun 1999 tentang Bank Indonesia sebagaimana telah beberapa kali diubah, terakhir dengan UU P2SK',
      verifiedYear: '2026'
    }
  },
  {
    id: 'peran-bi-moneter-sistem-pembayaran',
    title: 'Mengenal BI-Rate & Kebijakan Moneter: Kenapa Suku Bunga Bisa Naik?',
    category: 'bank-bi',
    categoryLabel: 'Bank & Bank Indonesia',
    mode: 'lembaga',
    readTime: '3 menit',
    tagline: 'Bagaimana keputusan di ruang rapat BI mempengaruhi cicilan KPR rumahmu?',
    summary: 'BI-Rate bukan sekadar angka di berita televisi, tapi pedal gas dan rem perekonomian Indonesia untuk mengendalikan inflasi.',
    content: {
      intro: 'Pernah mendengar berita: "Rapat Dewan Gubernur Bank Indonesia memutuskan mempertahankan BI-Rate di level 6,00%?". Apa sebenarnya pengaruhnya bagi masyarakat biasa yang sedang rebahan di kamar?',
      sections: [
        {
          heading: 'BI-Rate sebagai Suku Bunga Kebijakan',
          body: 'BI-Rate adalah suku bunga acuan yang ditetapkan Bank Indonesia untuk mengirimkan sinyal kebijakan moneter ke pasar keuangan dan perbankan.',
          analogyOrExample: 'BI-Rate ibarat termostat ruangan: saat ekonomi terlalu panas (inflasi tinggi harga barang melonjak), BI menaikkan suku bunga untuk mendinginkan belanja.'
        },
        {
          heading: 'Efek Berantai ke Bunga Deposito dan Bunga KPR',
          body: 'Ketika BI menaikkan BI-Rate, bank umum biasanya akan menaikkan bunga deposito (agar masyarakat lebih banyak menabung daripada konsumtif) dan menaikkan bunga kredit pinjaman/KPR floating. Sebaliknya, ketika ekonomi lesu, BI menurunkan suku bunga agar kredit lebih murah dan bisnis bergairah.'
        }
      ]
    },
    keyTakeaway: 'Kebijakan moneter BI bertujuan menyeimbangkan pertumbuhan ekonomi dengan pengendalian laju inflasi agar harga bahan pokok tetap terjangkau bagi rakyat.',
    actionableStep: 'Jika kamu memiliki cicilan KPR dengan bunga mengambang (floating rate), perhatikan pergerakan BI-Rate sebagai acuan estimasi penyesuaian cicilanmu di masa depan.',
    reflectionQuestion: 'Jika suku bunga bank sedang naik tinggi, apakah waktu tersebut lebih menguntungkan untuk menambah utang baru atau memperbesar tabungan deposito?',
    quiz: {
      question: 'Apa tujuan utama Bank Indonesia menaikkan suku bunga acuan (BI-Rate) ketika inflasi harga barang di pasar sedang melonjak tinggi?',
      options: [
        'Mendorong masyarakat untuk berutang sebanyak-banyaknya',
        'Meredam laju peredaran uang dan konsumsi yang berlebihan agar harga barang kembali stabil',
        'Menghabiskan cadangan kas negara',
        'Menaikkan harga tiket konser'
      ],
      correctIndex: 1,
      explanation: 'Tepat! Kenaikan BI-Rate bertujuan memperlambat laju inflasi dengan mendorong masyarakat menabung dan menahan belanja berlebihan sehingga tekanan harga mereda.'
    },
    officialSource: {
      name: 'Bank Indonesia - Kebijakan Moneter',
      url: 'https://bi.go.id/id/fungsi-utama/moneter/default.aspx',
      description: 'Kerangka Kebijakan Moneter dan Sasaran Inflasi Bank Indonesia',
      verifiedYear: '2026'
    }
  },
  {
    id: 'otoritas-jasa-keuangan-ojk',
    title: 'Otoritas Jasa Keuangan (OJK): Polisi Keuangan & Cara Cek Izin Resmi',
    category: 'lembaga-keuangan',
    categoryLabel: 'Lembaga Keuangan',
    mode: 'lembaga',
    readTime: '4 menit',
    tagline: 'Pelindung konsumen dari jeratan investasi bodong dan lembaga abal-abal.',
    summary: 'Apa itu OJK, sektor apa saja yang diawasi, dan bagaimana cara praktis mengecek apakah suatu aplikasi investasi atau pinjaman itu resmi atau ilegal?',
    content: {
      intro: 'Di era digital, ribuan aplikasi keuangan bermunculan di genggaman ponsel kita. Bagaimana membedakan aplikasi yang sah dengan penjahat berkedok fintech? Di sinilah peran krusial Otoritas Jasa Keuangan (OJK).',
      sections: [
        {
          heading: 'Tugas Pokok OJK: Pengawasan Terintegrasi & Perlindungan Konsumen',
          body: 'OJK bertugas melakukan pengaturan dan pengawasan terhadap seluruh kegiatan jasa keuangan di sektor: \n1. Perbankan (Bank umum & BPR)\n2. Pasar Modal (Saham, Reksa Dana, Obligasi, Sekuritas)\n3. Perasuransian, Penjaminan, dan Dana Pensiun\n4. Lembaga Pembiayaan & Lembaga Jasa Keuangan Lainnya (Multifinance, Pegadaian, Fintech P2P Lending/Pinjol).',
          analogyOrExample: 'OJK adalah Satpam dan Polisi Lalu Lintas Jasa Keuangan: memastikan semua pengemudi (penyedia jasa) punya SIM resmi, mematuhi rambu, dan tidak menipu penumpang (konsumen).'
        },
        {
          heading: 'Cara Cek Legalitas Lembaga via Kontak OJK 157',
          body: 'Sebelum mentransfer uang ke platform investasi atau pinjaman, selalu verifikasi izinnya melalui:\n• Kontak OJK Telepon: 157\n• WhatsApp Resmi OJK: 081-157-157-157 (bisa cek bot instan legalitas fintech)\n• Website resmi: ojk.go.id pada menu entitas berizin.',
          analogyOrExample: 'Kirim nama aplikasi di WhatsApp resmi OJK 157, bot akan langsung menjawab status perizinannya dalam 5 detik.'
        }
      ]
    },
    keyTakeaway: 'Legalitas adalah syarat mutlak, bukan opsi. Jika sebuah perusahaan menawarkan produk keuangan namun tidak terdaftar dan diawasi oleh OJK, jangan pernah setorkan uang sepeser pun!',
    actionableStep: 'Simpan nomor WhatsApp resmi OJK 081-157-157-157 di kontak ponselmu sekarang untuk mengecek legalitas sewaktu-waktu.',
    reflectionQuestion: 'Pernahkah kamu ditawari investasi titip dana di grup Telegram dengan janji keuntungan 30% per bulan tanpa risiko?',
    quiz: {
      question: 'Manakah kanal resmi dan cepat yang disediakan oleh OJK untuk masyarakat memeriksa legalitas suatu platform fintech atau lembaga keuangan?',
      options: [
        'Komentar di akun Instagram selebgram',
        'Nomor WhatsApp Resmi Kontak OJK di 081-157-157-157 atau telepon 157',
        'Grup Facebook jual beli barang bekas',
        'Pesan broadcast berantai di aplikasi pesan instan'
      ],
      correctIndex: 1,
      explanation: 'Tepat sekali! Kontak OJK 157 dan WhatsApp 081-157-157-157 adalah kanal pengaduan dan verifikasi legalitas resmi yang disediakan oleh Otoritas Jasa Keuangan.'
    },
    officialSource: {
      name: 'Otoritas Jasa Keuangan (OJK)',
      url: 'https://ojk.go.id',
      description: 'Undang-Undang No. 21 Tahun 2011 tentang Otoritas Jasa Keuangan',
      verifiedYear: '2026'
    }
  },
  {
    id: 'lembaga-penjamin-simpanan-lps',
    title: 'Lembaga Penjamin Simpanan (LPS): Penyelamat Uangmu & Syarat 3T',
    category: 'lembaga-keuangan',
    categoryLabel: 'Lembaga Keuangan',
    mode: 'lembaga',
    readTime: '4 menit',
    tagline: 'Kalau bank tempatmu menabung bangkrut, uangmu hilang atau diganti?',
    summary: 'Kenali LPS dan syarat 3T penjaminan simpanan perbankan hingga Rp2 Miliar per nasabah per bank.',
    content: {
      intro: 'Tahun 1998, Indonesia pernah mengalami krisis perbankan dahsyat di mana banyak bank ditutup dan nasabah panik menarik uangnya (bank run). Untuk mencegah trauma itu terulang, pemerintah mendirikan Lembaga Penjamin Simpanan (LPS).',
      sections: [
        {
          heading: 'Fungsi Utama LPS dan Batas Penjaminan',
          body: 'LPS menjamin simpanan nasabah di seluruh bank umum dan BPR konvensional maupun syariah yang beroperasi di wilayah Republik Indonesia. Nilai simpanan yang dijamin adalah MAKSIMAL Rp2 Miliar per nasabah per bank.',
          analogyOrExample: 'LPS seperti polis asuransi gratis untuk tabunganmu: jika bank tempatmu menabung dicabut izin usahanya, LPS yang akan mengembalikan uangmu.'
        },
        {
          heading: 'Wajib Paham: Syarat 3T Penjaminan LPS',
          body: 'Agar simpananmu dijamin dan dibayarkan LPS jika bank bangkrut, kamu wajib memenuhi kriteria 3T:\n1. TERCATAT dalam pembukuan bank (ada bukti transaksi resmi, bukan disetor ke rekening pribadi pegawai bank).\n2. TINGKAT BUNGA tidak melebihi tingkat bunga penjaminan LPS (TBP yang ditetapkan secara berkala oleh LPS).\n3. TIDAK melakukan tindakan yang merugikan bank (misalnya memiliki kredit macet yang menyebabkan bank kolaps).',
          analogyOrExample: 'Jika kamu tergiur cashback bunga deposito 9% padahal bunga penjaminan LPS cuma 4.25%, maka seluruh simpananmu TIDAK DIJAMIN LPS!'
        },
        {
          heading: 'Catatan Penting: LPS Tidak Menjamin Produk Investasi',
          body: 'LPS hanya menjamin produk simpanan murni (Giro, Tabungan, Deposito). LPS TIDAK menjamin produk investasi seperti Reksa Dana, Saham, Obligasi, atau Asuransi Unit Link meskipun dijual di kantor bank.'
        }
      ]
    },
    keyTakeaway: 'Pastikan bunga deposito yang kamu terima tidak melebihi batas bunga penjaminan LPS agar simpananmu 100% aman hingga Rp2 Miliar.',
    actionableStep: 'Kunjungi situs resmi lps.go.id untuk mengecek "Tingkat Bunga Penjaminan" (TBP) LPS yang berlaku saat ini sebelum menempatkan deposito.',
    reflectionQuestion: 'Jika kamu punya uang Rp3 Miliar, bagaimana strategi penempatannya di perbankan agar seluruhnya terlindungi oleh penjaminan LPS?',
    quiz: {
      question: 'Berapakah nilai maksimal simpanan nasabah yang dijamin oleh Lembaga Penjamin Simpanan (LPS) per nasabah pada satu bank sesuai ketentuan yang berlaku?',
      options: [
        'Rp50.000.000',
        'Rp500.000.000',
        'Rp2.000.000.000 (Dua Miliar Rupiah)',
        'Tidak terbatas sampai puluhan triliun rupiah'
      ],
      correctIndex: 2,
      explanation: 'Benar! Batas nilai simpanan yang dijamin LPS saat ini adalah maksimal Rp2 Miliar per nasabah per bank, dengan syarat memenuhi kriteria 3T LPS.'
    },
    officialSource: {
      name: 'Lembaga Penjamin Simpanan (LPS)',
      url: 'https://lps.go.id',
      description: 'Undang-Undang No. 24 Tahun 2004 tentang Lembaga Penjamin Simpanan dan Peraturan Pelaksanaannya',
      verifiedYear: '2026'
    }
  },
  {
    id: 'bank-digital-mbanking-ewallet',
    title: 'Bank Digital vs Mobile Banking vs E-Wallet: Apa Saja Bedanya?',
    category: 'bank-bi',
    categoryLabel: 'Bank & Bank Indonesia',
    mode: 'lembaga',
    readTime: '3 menit',
    tagline: 'Jangan salah kaprah menyimpan uang tabungan masa depan di dompet elektronik.',
    summary: 'Ketiganya sama-sama ada di smartphone, tapi payung hukum, fungsi, dan perlindungannya sangat berbeda.',
    content: {
      intro: 'Di layar ponsel, aplikasi m-banking bank konvensional, bank digital tanpa kantor cabang, dan e-wallet terlihat mirip: sama-sama bisa scan QRIS dan transfer uang. Namun ada perbedaan vital dalam hal suku bunga dan penjaminan!',
      sections: [
        {
          heading: '1. E-Wallet (Dompet Digital: GoPay, OVO, DANA, ShopeePay)',
          body: 'E-wallet adalah alat transaksi pembayaran (diatur Bank Indonesia sebagai Penyelenggara Jasa Pembayaran). Saldo di e-wallet TIDAK MENDAPATKAN BUNGA dan TIDAK DIJAMIN oleh LPS. Jangan jadikan e-wallet sebagai tempat menumpuk tabungan jangka panjang; isi secukupnya untuk belanja harian.',
          analogyOrExample: 'E-wallet seperti dompet lipat di saku celana: hanya untuk uang jajan hari ini.'
        },
        {
          heading: '2. Mobile Banking (m-BCA, Livin Mandiri, BRImo)',
          body: 'Merupakan kanal akses digital dari bank umum konvensional yang memiliki kantor cabang fisik. Uang disimpan di bank dan dijamin LPS sesuai syarat 3T.'
        },
        {
          heading: '3. Bank Digital (Jenius, SeaBank, Bank Jago, Blu, dll)',
          body: 'Merupakan bank berizin resmi OJK yang beroperasi secara digital dengan minim kantor cabang fisik. Biaya operasional hemat mereka sering dialihkan menjadi bunga tabungan kompetitif atau gratis transfer antarbank. Tetap berstatus bank dan simpanannya dijamin LPS (selama bunganya di bawah bunga penjaminan LPS).'
        }
      ]
    },
    keyTakeaway: 'Gunakan e-wallet murni untuk kenyamanan transaksi receh harian. Simpan tabungan utama dan dana darurat di bank (digital atau konvensional) yang dijamin LPS.',
    actionableStep: 'Periksa saldo e-wallet kamu saat ini. Jika ada saldo mengendap jutaan rupiah yang belum terpakai, pindahkan kembali ke rekening bank agar lebih aman dan menghasilkan bunga wajar.',
    reflectionQuestion: 'Berapa saldo rata-rata yang biasa kamu biarkan mengendap di aplikasi e-wallet tanpa menghasilkan imbal hasil?',
    quiz: {
      question: 'Apakah saldo yang tersimpan di dalam dompet digital (e-wallet) dijamin oleh Lembaga Penjamin Simpanan (LPS)?',
      options: [
        'Ya, dijamin hingga Rp10 Miliar',
        'Tidak, saldo e-wallet adalah instrumen pembayaran dan tidak termasuk simpanan perbankan yang dijamin oleh LPS',
        'Ya, jika pengguna sudah upgrade akun ke level premium',
        'Dijamin hanya pada hari libur nasional'
      ],
      correctIndex: 1,
      explanation: 'Tepat sekali! LPS hanya menjamin simpanan nasabah di bank umum dan BPR (giro, tabungan, deposito). Saldo di uang elektronik / e-wallet tidak dijamin oleh LPS.'
    },
    officialSource: {
      name: 'Bank Indonesia & Lembaga Penjamin Simpanan (LPS)',
      url: 'https://bi.go.id',
      description: 'Ketentuan Penyelenggaraan Uang Elektronik dan Ruang Lingkup Penjaminan Simpanan',
      verifiedYear: '2026'
    }
  },
  {
    id: 'fintech-p2p-vs-pinjol-ilegal',
    title: 'Fintech P2P Lending Berizin vs Pinjol Ilegal: Ciri-Ciri Nyata',
    category: 'lembaga-keuangan',
    categoryLabel: 'Lembaga Keuangan',
    mode: 'lembaga',
    readTime: '3 menit',
    tagline: 'Kenali ciri teror kontak dan bunga mencekik sebelum terlambat.',
    summary: 'Bagaimana membedakan pinjaman online resmi berizin OJK dengan rentenir online ilegal yang merusak privasi?',
    content: {
      intro: 'Pinjaman daring ilegal telah menghancurkan banyak kehidupan karena teror penagihan, intimidasi, dan penyebaran data pribadi. Padahal ada aturan ketat yang memisahkan fintech legal dan ilegal.',
      sections: [
        {
          heading: 'Ciri-Ciri Utama Pinjol ILEGAL:',
          body: '• Menawarkan pinjaman lewat SMS/WhatsApp dari nomor pribadi tidak dikenal.\n• Meminta izin akses kontak telepon, galeri foto, kamera, dan lokasi GPS ponsel (aturan resmi OJK hanya membolehkan izin CAMILAN: Camera, Microphone, Location secara wajar).\n• Bunga dan denda harian tidak transparan dan melambung liar.\n• Melakukan penagihan kasar dengan ancaman, caci maki, dan menyebarkan data ke seluruh kontak korban.',
          analogyOrExample: 'Pinjol ilegal seperti lintah darat yang masuk ke dalam ponselmu.'
        },
        {
          heading: 'Ciri Fintech P2P Lending RESMI BERIZIN OJK:',
          body: '• Terdaftar resmi dan diawasi OJK serta menjadi anggota AFPI (Asosiasi Fintech Pendanaan Bersama Indonesia).\n• Memiliki identitas kantor yang jelas dan layanan pengaduan konsumen.\n• Mematuhi batas maksimum manfaat ekonomi (bunga dan biaya) sesuai regulasi OJK.\n• Penagih wajib bersertifikasi dan dilarang mengancam atau meneror keluarga/kontak luar.'
        }
      ]
    },
    keyTakeaway: 'Jangan pernah merespons tawaran pinjaman cepat cair yang dikirim via WhatsApp nomor asing. Selalu cek daftar fintech berizin di website resmi ojk.go.id.',
    actionableStep: 'Periksa izin aplikasi di ponselmu: pastikan tidak ada aplikasi keuangan yang meminta izin akses ke daftar kontak buku telepon atau galeri fotomu.',
    reflectionQuestion: 'Apa langkah pertama yang harus kamu lakukan jika kerabatmu menjadi korban teror penagihan pinjol ilegal?',
    quiz: {
      question: 'Berdasarkan regulasi resmi OJK, apa saja batasan izin akses perangkat ponsel yang diperbolehkan untuk aplikasi fintech resmi (dikenal dengan istilah CAMILAN)?',
      options: [
        'Akses seluruh kontak WhatsApp, galeri foto pribadi, dan riwayat panggilan',
        'Camera, Microphone, dan Location (Kamera, Mikrofon, dan Lokasi) untuk verifikasi KYC',
        'Akses ke akun media sosial dan email pribadi peminjam',
        'Akses bebas tanpa batas ke semua file di memori ponsel'
      ],
      correctIndex: 1,
      explanation: 'Benar! OJK secara tegas membatasi akses aplikasi pinjol legal hanya pada Camera, Microphone, dan Location (CAMILAN). Aplikasi yang memaksa mengakses kontak dan galeri dipastikan ilegal.'
    },
    officialSource: {
      name: 'Otoritas Jasa Keuangan (OJK) & Satgas PASTI',
      url: 'https://ojk.go.id',
      description: 'Satuan Tugas Pemberantasan Aktivitas Keuangan Ilegal (Satgas PASTI)',
      verifiedYear: '2026'
    }
  },

  // --- MODE INVESTASI & PERLINDUNGAN RISIKO ---
  {
    id: 'segitiga-emas-investasi',
    title: 'Segitiga Emas Investasi: Return, Risiko, dan Likuiditas',
    category: 'investasi-risiko',
    categoryLabel: 'Investasi & Risiko',
    mode: 'investasi',
    readTime: '3 menit',
    tagline: 'Hukum besi finansial: "High Return, High Risk". Tidak ada keajaiban instan.',
    summary: 'Memahami bahwa tidak ada instrumen investasi yang bisa untung sangat besar, pasti aman tanpa risiko, sekaligus bisa dicairkan detik itu juga.',
    content: {
      intro: 'Dalam dunia investasi ada satu hukum alam yang tidak bisa dilanggar oleh siapa pun: Segitiga Trilema Investasi. Dari tiga hal (Return Tinggi, Risiko Rendah, Likuiditas Cepat), kamu hanya bisa memilih maksimal DUA hal sekaligus.',
      sections: [
        {
          heading: '1. Imbal Hasil (Return): Potensi Keuntungan',
          body: 'Seberapa besar pertumbuhan modal yang bisa kamu dapatkan per tahun. Saham dan reksa dana saham bisa memberikan return tinggi, tapi fluktuasinya tajam.',
          analogyOrExample: 'Mobil balap Formula 1: sangat cepat (return tinggi), tapi risiko kecelakaan tinggi jika tidak punya keahlian.'
        },
        {
          heading: '2. Risiko (Risk): Potensi Penurunan Nilai Modal',
          body: 'Setiap investasi mengandung risiko naik turun harga pasar. Produk yang menjamin modal aman (seperti deposito dan SBN) biasanya memberikan imbal hasil yang lebih terukur.',
          analogyOrExample: 'Kereta api listrik: lajunya stabil dan aman di jalurnya, tapi kamu tidak bisa memacu kecepatannya sesuka hati.'
        },
        {
          heading: '3. Likuiditas: Kemudahan Mencairkan Jadi Uang Tunai',
          body: 'Aset seperti properti (tanah/rumah) nilainya stabil naik, tapi butuh waktu berbulan-bulan untuk dijual saat butuh uang mendesak.'
        }
      ]
    },
    keyTakeaway: 'Jika ada orang yang menawarkan investasi dengan imbal hasil 10% per bulan, dijamin aman tanpa risiko, dan bisa ditarik kapan saja, 1000% itu adalah PENIPUAN!',
    actionableStep: 'Sebelum membeli produk investasi, tanyakan 3 hal pada dirimu: untuk apa tujuannya, berapa lama jangka waktunya, dan apakah kamu siap jika nilainya turun sementara?',
    reflectionQuestion: 'Apa profil toleransi risikomu: apakah kamu panik jika melihat portofolio investasimu berwarna merah minus 5% dalam seminggu?',
    quiz: {
      question: 'Manakah dari pernyataan investasi berikut yang paling sejalan dengan prinsip rasional keuangan?',
      options: [
        'Ada investasi yang menjamin keuntungan 50% pasti untung tanpa ada risiko sama sekali',
        'Semakin tinggi potensi keuntungan suatu instrumen, semakin tinggi pula potensi risiko fluktuasi atau kerugian yang menyertainya (High Return, High Risk)',
        'Investasi saham pasti membuat semua orang kaya raya dalam 3 hari',
        'Menyimpan uang di bawah kasur adalah investasi terbaik yang mengalahkan inflasi'
      ],
      correctIndex: 1,
      explanation: 'Benar! Prinsip fundamental keuangan adalah High Return, High Risk. Potensi imbal hasil yang lebih besar selalu diimbangi dengan risiko fluktuasi modal yang lebih tinggi.'
    },
    officialSource: {
      name: 'Bursa Efek Indonesia (IDX) & OJK',
      url: 'https://idx.co.id',
      description: 'Panduan Edukasi Pasar Modal bagi Investor Pemula (Yuk Nabung Saham)',
      verifiedYear: '2026'
    }
  },
  {
    id: 'bedanya-deposito-emas-reksadana-saham-sbn',
    title: 'Peta Instrumen: Deposito, Emas, Reksa Dana, Saham, & SBN Ritel',
    category: 'investasi-risiko',
    categoryLabel: 'Investasi & Risiko',
    mode: 'investasi',
    readTime: '4 menit',
    tagline: 'Pilih kendaraan yang tepat sesuai jarak tempuh impianmu.',
    summary: 'Panduan komprehensif membedakan produk investasi populer di Indonesia dari segi risiko, tujuan, dan legalitasnya.',
    content: {
      intro: 'Memilih investasi itu mirip memilih kendaraan transportasi. Mau pergi ke warung depan gang cukup jalan kaki atau naik sepeda; mau ke luar pulau naik pesawat terbang. Jangan naik pesawat hanya untuk menyeberang jalan!',
      sections: [
        {
          heading: '1. Deposito Bank & SBN Ritel (Surat Berharga Negara)',
          body: '• Deposito: Simpanan berjangka di bank, bunga pasti, dijamin LPS hingga Rp2 Miliar (syarat 3T). Cocok untuk dana jangka 1–12 bulan.\n• SBN Ritel (ORI, Sukuk Ritel, SBR, ST): Diterbitkan oleh Pemerintah RI lewat Kemenkeu. 100% dijamin undang-undang negara tanpa risiko gagal bayar, kupon bulanan menarik, sekaligus membantu pembangunan negeri.',
          analogyOrExample: 'SBN Ritel ibarat meminjamkan uang ke negara Indonesia, dibayar kembali dengan bunga tepat waktu.'
        },
        {
          heading: '2. Emas Logam Mulia',
          body: 'Aset lindung nilai (hedging) terhadap inflasi jangka panjang (di atas 5 tahun). Emas tidak membagikan dividen atau bunga bulanan, keuntungannya murni dari kenaikan harga beli vs harga jual.',
          analogyOrExample: 'Emas ibarat jaket pelampung: menjaga daya beli uangmu tetap terapung di tengah ombak inflasi.'
        },
        {
          heading: '3. Reksa Dana (Pasar Uang, Pendapatan Tetap, Campuran, Saham)',
          body: 'Wadah mengumpulkan dana dari banyak investor untuk dikelola oleh Manajer Investasi (MI) profesional yang berizin OJK. Sangat ramah pemula karena bisa mulai dari Rp10.000 dan tidak perlu memantau grafik saham tiap detik.'
        },
        {
          heading: '4. Saham (Pasar Modal / BEI)',
          body: 'Bukti kepemilikan bagian modal pada suatu perseroan terbuka (PT Tbk) yang terdaftar di Bursa Efek Indonesia (BEI). Berpotensi membagikan dividen laba dan capital gain, namun harga saham harian berfluktuasi tajam sesuai kinerja perusahaan dan pasar.'
        }
      ]
    },
    keyTakeaway: 'Tidak ada produk yang paling hebat untuk semua orang. Produk terbaik adalah produk yang kamu pahami cara kerjanya dan cocok dengan horizon waktu impianmu.',
    actionableStep: 'Buka kalkulator "Investasi Tanpa Pusing" di menu FinansialKu.com untuk mensimulasikan akumulasi modal dengan berbagai instrumen investasi.',
    reflectionQuestion: 'Apa tujuan keuangan terdekatmu dalam 3 tahun ke depan, dan instrumen mana yang paling sesuai dengan durasi waktu tersebut?',
    quiz: {
      question: 'Instrumen investasi manakah yang pembayarannya dijamin 100% oleh Undang-Undang Negara Republik Indonesia tanpa batas nominal Rp2 Miliar?',
      options: [
        'Saham perusahaan rintisan teknologi baru',
        'Surat Berharga Negara (SBN Ritel seperti ORI dan Sukuk Ritel) yang diterbitkan Kementerian Keuangan RI',
        'Koin crypto yang sedang viral di media sosial',
        'Arisan online di grup chat'
      ],
      correctIndex: 1,
      explanation: 'Benar! Pokok dan kupon SBN Ritel dijamin 100% oleh negara melalui Undang-Undang APBN Republik Indonesia, menjadikannya salah satu instrumen dengan risiko gagal bayar terendah.'
    },
    officialSource: {
      name: 'Kementerian Keuangan RI & Bursa Efek Indonesia (IDX)',
      url: 'https://kemenkeu.go.id/sbn',
      description: 'Informasi Resmi Surat Berharga Negara Ritel dan Mekanisme Investasi Pasar Modal',
      verifiedYear: '2026'
    }
  },
  {
    id: 'ciri-ciri-investasi-bodong',
    title: 'Ciri Investasi Bodong & Skema Ponzi: Jangan Tertipu "Robot Trading"',
    category: 'investasi-risiko',
    categoryLabel: 'Investasi & Risiko',
    mode: 'investasi',
    readTime: '3 menit',
    tagline: 'Jika terdengar terlalu muluk untuk menjadi nyata, hampir pasti itu penipuan.',
    summary: 'Bagaimana mengenali skema piramida, janji imbal hasil tetap tak wajar, dan dalih "titip dana" yang marak memakan korban.',
    content: {
      intro: 'Ratusan triliun rupiah uang masyarakat Indonesia lenyap dalam 10 tahun terakhir akibat investasi ilegal. Modusnya selalu berganti baju—mulai dari arisan bodong, kebun kurma fiktif, robot trading luar negeri, hingga crypto palsu. Namun polanya selalu sama!',
      sections: [
        {
          heading: '3 Rumus Pasti Investasi Bodong (2L: Legal & Logis):',
          body: '1. Menjanjikan "Pasti Untung" (Fix Return) yang Tidak Masuk Akal: Misalnya profit 1% sehari (30% sebulan atau 365% setahun). Ingat, suku bunga acuan BI hanya sekitar 6% SETAHUN dan bunga obligasi negara sekitar 6–7% setahun!\n2. Bonus Rekrut Anggota Baru (Skema Ponzi): Uang investor lama dibayarkan dari setoran uang member baru, bukan dari bisnis riil.\n3. Tidak Memiliki Izin dari OJK atau Bappebti: Sering mencatut logo OJK secara palsu atau hanya berbekal akta notaris/NIB OSS umum.',
          analogyOrExample: 'Skema Ponzi ibarat memotong kain dari bagian bawah celana untuk menambal bagian atas celana yang robek. Suatu saat kainnya habis dan celananya lenyap!'
        },
        {
          heading: 'Langkah Wajib Sebelum Menyetor Uang',
          body: 'Cek prinsip 2L: LEGAL (apakah izinnya sah dari OJK/Bappebti?) dan LOGIS (apakah model bisnis dan keuntungannya masuk akal secara kalkulasi ekonomi?).'
        }
      ]
    },
    keyTakeaway: 'Kekayaan sejati dibangun secara bertahap lewat kebiasaan hidup sehat dan investasi pada aset produktif riil, bukan dari tombol jalan pintas ajaib.',
    actionableStep: 'Jika ada kenalan atau influencer yang mengajak investasi dengan janji profit harian pasti untung, tolak dengan sopan dan laporkan ke Satgas PASTI OJK.',
    reflectionQuestion: 'Pernahkah kamu tergoda tawaran cepat kaya karena melihat pamer harta (flexing) orang lain di media sosial?',
    quiz: {
      question: 'Manakah tanda peringatan bahaya (Red Flag) paling khas dari suatu skema investasi bodong atau Ponzi?',
      options: [
        'Perusahaan mencantumkan risiko pasar secara transparan di prospektus',
        'Menjanjikan keuntungan pasti sangat tinggi (misal 20% per bulan tanpa risiko) dan mewajibkan rekrutmen anggota baru',
        'Memiliki izin resmi dari Otoritas Jasa Keuangan (OJK)',
        'Dana investasi disimpan di Bank Kustodian terpisah'
      ],
      correctIndex: 1,
      explanation: 'Tepat sekali! Janji keuntungan pasti yang fantastis tanpa risiko serta ketergantungan pada uang member baru adalah ciri mutlak skema penipuan piramida/Ponzi.'
    },
    officialSource: {
      name: 'Satgas PASTI (Pemberantasan Aktivitas Keuangan Ilegal) OJK',
      url: 'https://ojk.go.id',
      description: 'Siaran Pers dan Daftar Entitas Investasi Ilegal OJK',
      verifiedYear: '2026'
    }
  }
];
