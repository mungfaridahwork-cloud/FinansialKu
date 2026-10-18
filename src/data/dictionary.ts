import { DictionaryTerm } from '../types';

export const DICTIONARY_DATA: DictionaryTerm[] = [
  {
    id: 'inflasi',
    term: 'Inflasi',
    category: 'Dasar',
    definition: 'Kenaikan harga barang dan jasa secara umum dan terus menerus dalam jangka waktu tertentu, yang menyebabkan penurunan daya beli uang.',
    example: 'Tahun 2005 uang Rp10.000 bisa dapat 2 porsi bakso komplit, sekarang uang Rp10.000 hanya cukup untuk membeli es teh manis dan kerupuk.',
    relatedArticleId: 'lima-istilah-finansial-populer',
    officialRef: 'Bank Indonesia (bi.go.id) & Badan Pusat Statistik (bps.go.id)'
  },
  {
    id: 'bunga-majemuk',
    term: 'Bunga Majemuk (Compound Interest)',
    category: 'Investasi',
    definition: 'Bunga yang dihitung tidak hanya dari modal pokok awal, tetapi juga dari akumulasi bunga yang telah diperoleh pada periode-periode sebelumnya (bunga berbunga).',
    example: 'Menabung Rp1 juta dengan bunga 6% setahun. Di tahun pertama dapat Rp60.000. Di tahun kedua, bunga dihitung dari Rp1.060.000, sehingga bunganya jadi Rp63.600, dan terus membesar seperti bola salju.',
    relatedArticleId: 'segitiga-emas-investasi',
    officialRef: 'Otoritas Jasa Keuangan (ojk.go.id)'
  },
  {
    id: 'bi-rate',
    term: 'BI-Rate',
    category: 'Regulasi & Lembaga',
    definition: 'Suku bunga kebijakan moneter yang ditetapkan secara berkala oleh Bank Indonesia untuk mencerminkan sinyal kebijakan moneter dan menjaga kestabilan nilai rupiah serta inflasi.',
    example: 'Saat BI-Rate dinaikkan dari 5.75% ke 6.00%, bank komersial cenderung menaikkan bunga deposito dan suku bunga kredit cicilan pinjaman.',
    relatedArticleId: 'peran-bi-moneter-sistem-pembayaran',
    officialRef: 'Bank Indonesia (bi.go.id)'
  },
  {
    id: 'lps-3t',
    term: 'Syarat 3T LPS',
    category: 'Perbankan',
    definition: 'Tiga syarat mutlak agar simpanan nasabah di bank dijamin oleh Lembaga Penjamin Simpanan (LPS): 1. Tercatat dalam pembukuan bank, 2. Tingkat bunga tidak melebihi bunga penjaminan LPS, 3. Tidak melakukan tindakan yang merugikan bank.',
    example: 'Pak Budi mendepositokan uang di bank dengan bunga 4.25% (di bawah batas penjaminan LPS) dan tercatat resmi, sehingga jika bank tutup, uang Pak Budi diganti utuh oleh LPS hingga Rp2 Miliar.',
    relatedArticleId: 'lembaga-penjamin-simpanan-lps',
    officialRef: 'Lembaga Penjamin Simpanan (lps.go.id)'
  },
  {
    id: 'ojk',
    term: 'OJK (Otoritas Jasa Keuangan)',
    category: 'Regulasi & Lembaga',
    definition: 'Lembaga negara independen yang bertugas mengatur, mengawasi, memeriksa, dan menyidik seluruh kegiatan di sektor perbankan, pasar modal, perasuransian, dana pensiun, lembaga pembiayaan, dan fintech di Indonesia.',
    example: 'Sebelum berinvestasi di aplikasi reksa dana baru, kamu mengecek ke WhatsApp OJK 081-157-157-157 untuk memastikan izin resminya.',
    relatedArticleId: 'otoritas-jasa-keuangan-ojk',
    officialRef: 'Otoritas Jasa Keuangan (ojk.go.id)'
  },
  {
    id: 'likuiditas',
    term: 'Likuiditas',
    category: 'Dasar',
    definition: 'Tingkat kemudahan dan kecepatan suatu aset untuk diubah menjadi uang tunai tanpa mengalami penurunan nilai yang signifikan.',
    example: 'Uang di rekening tabungan dan dompet digital sangat likuid (bisa dipakai detik ini juga). Sementara rumah di pinggir kota tidak likuid karena butuh berbulan-bulan untuk menjualnya.',
    relatedArticleId: 'lima-istilah-finansial-populer',
    officialRef: 'Bursa Efek Indonesia & OJK'
  },
  {
    id: 'diversifikasi',
    term: 'Diversifikasi',
    category: 'Investasi',
    definition: 'Strategi penempatan modal ke berbagai instrumen investasi yang berbeda untuk meminimalkan risiko kerugian total (prinsip tidak menaruh seluruh telur dalam satu keranjang).',
    example: 'Alih-alih menaruh seluruh Rp10 juta di saham 1 perusahaan gorengan, modal dibagi: 40% reksa dana pasar uang, 30% SBN ritel, dan 30% saham blue chip.',
    relatedArticleId: 'bedanya-deposito-emas-reksadana-saham-sbn',
    officialRef: 'Bursa Efek Indonesia (idx.co.id)'
  },
  {
    id: 'dividen',
    term: 'Dividen',
    category: 'Investasi',
    definition: 'Bagian keuntungan bersih perusahaan yang dibagikan kepada para pemegang saham berdasarkan persetujuan dalam Rapat Umum Pemegang Saham (RUPS).',
    example: 'Kamu memiliki 100 lot (10.000 lembar) saham PT Bank Sejahtera Tbk. Saat perusahaan membagikan dividen Rp200 per lembar, kamu menerima Rp2.000.000 langsung ke rekening dana nasabahmu.',
    relatedArticleId: 'bedanya-deposito-emas-reksadana-saham-sbn',
    officialRef: 'Bursa Efek Indonesia (idx.co.id)'
  },
  {
    id: 'sbn-ritel',
    term: 'SBN Ritel (Surat Berharga Negara)',
    category: 'Investasi',
    definition: 'Surat utang yang diterbitkan oleh Pemerintah Republik Indonesia khusus untuk warga negara Indonesia (WNI) ritel, dengan imbalan kupon bunga berkala dan pokok dijamin 100% oleh Undang-Undang APBN.',
    example: 'Membeli ORI (Obligasi Negara Ritel) atau Sukuk Ritel mulai dari Rp1 juta melalui mitra distribusi resmi seperti bank dan sekuritas, menerima transfer kupon setiap bulan.',
    relatedArticleId: 'bedanya-deposito-emas-reksadana-saham-sbn',
    officialRef: 'Kementerian Keuangan RI (kemenkeu.go.id)'
  },
  {
    id: 'reksa-dana',
    term: 'Reksa Dana',
    category: 'Investasi',
    definition: 'Wadah yang dipergunakan untuk menghimpun dana dari masyarakat pemodal untuk selanjutnya diinvestasikan dalam portofolio efek oleh Manajer Investasi (MI) yang berizin OJK.',
    example: 'Dengan modal Rp50.000, kamu bisa membeli Reksa Dana Pendapatan Tetap di mana danamu dikelola manajer investasi ke puluhan obligasi pemerintah dan korporasi terpercaya.',
    relatedArticleId: 'bedanya-deposito-emas-reksadana-saham-sbn',
    officialRef: 'Otoritas Jasa Keuangan (ojk.go.id)'
  },
  {
    id: 'dana-darurat',
    term: 'Dana Darurat (Emergency Fund)',
    category: 'Dasar',
    definition: 'Simpanan uang tunai likuid yang dialokasikan khusus untuk mengantisipasi kejadian mendadak tak terduga (seperti sakit, PHK, musibah keluarga, atau perbaikan kendaraan darurat) tanpa perlu berutang.',
    example: 'Dina yang lajang memiliki dana darurat Rp12 juta (setara 3 bulan pengeluaran rutin) yang disimpan di rekening tabungan terpisah tanpa kartu debit.',
    relatedArticleId: 'menentukan-target-dana-darurat',
    officialRef: 'OJK - Sikapi Uangmu'
  },
  {
    id: 'dsr-rasio-utang',
    term: 'Debt Service Ratio (DSR)',
    category: 'Utang & Risiko',
    definition: 'Persentase rasio total cicilan utang bulanan dibandingkan dengan total pendapatan bersih bulanan. Standar perbankan sehat menetapkan batas maksimal 30%–35%.',
    example: 'Gaji Rp5.000.000 dengan total cicilan motor dan paylater Rp1.500.000 memiliki DSR = 30% (kondisi sehat dan masih dalam batas toleransi aman).',
    relatedArticleId: 'mengelola-cicilan-dan-utang',
    officialRef: 'Bank Indonesia & OJK'
  },
  {
    id: 'tenor',
    term: 'Tenor',
    category: 'Perbankan',
    definition: 'Jangka waktu lamanya pinjaman kredit atau simpanan berjangka yang disepakati antara nasabah dan pihak lembaga jasa keuangan.',
    example: 'Cicilan kredit pemilikan rumah (KPR) dengan tenor 15 tahun, atau penempatan deposito bank dengan tenor 3 bulan.',
    relatedArticleId: 'lima-istilah-finansial-populer',
    officialRef: 'Otoritas Jasa Keuangan'
  },
  {
    id: 'slik-ojk',
    term: 'SLIK OJK (Dulu BI Checking)',
    category: 'Regulasi & Lembaga',
    definition: 'Sistem Layanan Informasi Keuangan di bawah OJK yang mencatat riwayat kelancaran pembayaran kredit dan pinjaman seluruh debitur dari bank, leasing, dan fintech legal di Indonesia.',
    example: 'Rian gagal mengajukan KPR karena namanya tercatat di SLIK OJK memiliki riwayat menunggak cicilan paylater sebesar Rp200.000 selama 6 bulan (kolektibilitas 5).',
    relatedArticleId: 'bongkar-paylater-biaya-terselubung',
    officialRef: 'OJK (ojk.go.id/id/kanal/perbankan/Pages/SLIK.aspx)'
  },
  {
    id: 'phishing-dan-soceng',
    term: 'Social Engineering & Phishing',
    category: 'Utang & Risiko',
    definition: 'Teknik manipulasi psikologis penipu untuk memancing korban secara sukarela menyerahkan data rahasia seperti PIN, Password, nomor kartu, atau kode OTP melalui link palsu, telepon panik, atau file berbahaya.',
    example: 'Menerima pesan WhatsApp tentang surat undangan nikah atau resi paket berakhiran .APK yang jika diklik mencoba mencuri SMS kode verifikasi perbankan.',
    relatedArticleId: 'mengenali-modus-penipuan-keuangan',
    officialRef: 'Bank Indonesia & Patroli Siber Polri'
  },
  {
    id: 'deposito',
    term: 'Deposito Berjangka',
    category: 'Perbankan',
    definition: 'Produk simpanan di bank yang penarikannya hanya dapat dilakukan pada waktu tertentu (jatuh tempo) menurut perjanjian antara nasabah penyimpan dengan bank, dengan bunga yang umumnya lebih tinggi dari tabungan biasa.',
    example: 'Menempatkan Rp10.000.000 di deposito 6 bulan dengan bunga 4.0% p.a., dana tidak boleh ditarik sebelum 6 bulan agar tidak terkena biaya penalti.',
    relatedArticleId: 'lembaga-penjamin-simpanan-lps',
    officialRef: 'LPS & Bank Indonesia'
  },
  {
    id: 'premi-asuransi',
    term: 'Premi Asuransi',
    category: 'Dasar',
    definition: 'Sejumlah uang yang wajib dibayarkan secara berkala oleh tertanggung (pemegang polis) kepada perusahaan asuransi sebagai imbalan atas pengalihan risiko perlindungan.',
    example: 'Membayar iuran BPJS Kesehatan atau premi asuransi rawat inap Rp150.000 per bulan agar ketika mendadak jatuh sakit, biaya rumah sakit puluhan juta tidak menghabiskan seluruh tabungan hidup.',
    relatedArticleId: 'segitiga-emas-investasi',
    officialRef: 'Otoritas Jasa Keuangan (ojk.go.id)'
  },
  {
    id: 'qris-bi-fast',
    term: 'QRIS & BI-FAST',
    category: 'Perbankan',
    definition: 'Standar pembayaran nasional yang diinisiasi oleh Bank Indonesia: QRIS (Quick Response Code Indonesian Standard) untuk pembayaran kode QR terintegrasi seluruh aplikasi, dan BI-FAST untuk transfer antarbank murah dan real-time 24/7.',
    example: 'Satu stiker QRIS di warung kopi bisa dipindai menggunakan m-BCA, Livin, GoPay, OVO, maupun ShopeePay tanpa batasan penyedia.',
    relatedArticleId: 'bank-dan-bank-indonesia',
    officialRef: 'Bank Indonesia (bi.go.id/qris)'
  }
];
