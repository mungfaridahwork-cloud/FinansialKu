import { Mission, FinancialCheckQuestion } from '../types';

export const INITIAL_MISSIONS: Mission[] = [
  {
    id: 'm1',
    title: 'Periksa Biaya Admin Rekeningmu',
    description: 'Buka m-banking, cari transaksi "ADM" atau biaya bulanan. Ketahui berapa biaya pemeliharaan rekeningmu setiap bulannya.',
    duration: '2 menit',
    category: 'Cek Rekening',
    points: 15,
    completed: false,
    actionTab: 'academy',
    actionLabel: 'Baca Panduan Mutasi'
  },
  {
    id: 'm2',
    title: 'Hitung Anggaran Gaji Pribadimu',
    description: 'Gunakan Gajian Calculator untuk mencoba simulasi alokasi 50/30/20 atau formula yang paling sesuai dengan gajimu.',
    duration: '3 menit',
    category: 'Anggaran',
    points: 20,
    completed: false,
    actionTab: 'kalkulator',
    actionLabel: 'Buka Kalkulator Gaji'
  },
  {
    id: 'm3',
    title: 'Tentukan 1 Target Dana Darurat Realistis',
    description: 'Hitung pengeluaran rutin 1 bulan, lalu kalikan 3 untuk target minimal lajang atau 6 untuk keluarga.',
    duration: '2 menit',
    category: 'Tabungan',
    points: 25,
    completed: false,
    actionTab: 'kalkulator',
    actionLabel: 'Hitung Dana Darurat'
  },
  {
    id: 'm4',
    title: 'Selesaikan 1 Materi Rebahan Academy & Kuis Mini',
    description: 'Baca satu materi singkat selama 2–3 menit dan jawab pertanyaan refleksinya untuk membangun pemahaman.',
    duration: '3 menit',
    category: 'Edukasi',
    points: 20,
    completed: false,
    actionTab: 'academy',
    actionLabel: 'Pilih Materi'
  },
  {
    id: 'm5',
    title: 'Deteksi 1 "Bocor Halus" Minggu Ini',
    description: 'Gunakan simulasi Anti Boncos untuk melihat berapa total pengeluaran kopi kekinian atau ongkir flash sale selama setahun.',
    duration: '3 menit',
    category: 'Waspada',
    points: 20,
    completed: false,
    actionTab: 'anti-boncos',
    actionLabel: 'Cek Anti Boncos'
  },
  {
    id: 'm6',
    title: 'Ketahui Batas Penjaminan LPS (Rp2 Miliar & Syarat 3T)',
    description: 'Pahami syarat agar tabungan dan depositomu aman dijamin oleh Lembaga Penjamin Simpanan.',
    duration: '3 menit',
    category: 'Edukasi',
    points: 25,
    completed: false,
    actionTab: 'academy',
    actionLabel: 'Kenali LPS'
  },
  {
    id: 'm7',
    title: 'Evaluasi Rasio Cicilanmu (Maksimal 30%)',
    description: 'Hitung seluruh cicilan berjalan dibanding penghasilan bulanan di kalkulator cicilan kami.',
    duration: '2 menit',
    category: 'Anggaran',
    points: 20,
    completed: false,
    actionTab: 'kalkulator',
    actionLabel: 'Cek Rasio Utang'
  },
  {
    id: 'm8',
    title: 'Simpan Kontak WhatsApp Resmi OJK 157',
    description: 'Simpan nomor 081-157-157-157 di ponselmu agar siap mengecek izin pinjol atau investasi kapan saja.',
    duration: '1 menit',
    category: 'Waspada',
    points: 15,
    completed: false,
    actionTab: 'kamus',
    actionLabel: 'Buka Glosarium'
  }
];

export const FINANCIAL_HEALTH_QUESTIONS: FinancialCheckQuestion[] = [
  {
    id: 1,
    question: 'Bagaimana kebiasaanmu mencatat atau memantau arus pengeluaran uang bulanan?',
    subtext: 'Pilih yang paling menggambarkan kenyataan sehari-harimu saat ini.',
    options: [
      {
        label: 'Tidak pernah mencatat sama sekali, sering bingung uang habis ke mana',
        points: 1,
        tip: 'Cobalah mulai dari yang paling sederhana: pantau mutasi m-banking seminggu sekali atau gunakan simulasi Anti Boncos kami.'
      },
      {
        label: 'Mengingat-ingat garis besarnya saja di kepala tanpa catatan',
        points: 2,
        tip: 'Ingatan manusia sering bias terhadap pengeluaran kecil. Menuliskan pos besar di awal bulan akan sangat meringankan pikiran.'
      },
      {
        label: 'Rutin memantau pos-pos besar atau mencatat di aplikasi/spreadsheet sederhana',
        points: 3,
        tip: 'Luar biasa! Kamu sudah memiliki kepekaan arus kas (cash flow awareness) yang menjadi fondasi utama ketenangan finansial.'
      }
    ]
  },
  {
    id: 2,
    question: 'Berapa bulan pengeluaran rutin yang bisa kamu cover jika tabungan daruratmu dipakai?',
    subtext: 'Bukan nilai gaji, melainkan biaya hidup esensial (makan, sewa, listrik).',
    options: [
      {
        label: 'Kurang dari 1 bulan atau belum punya simpanan cadangan sama sekali',
        points: 1,
        tip: 'Jangan berkecil hati. Jadikan target awal mengumpulkan 1 bulan pengeluaran terlebih dahulu sebagai bantal darurat pertama.'
      },
      {
        label: 'Sekitar 1 sampai 3 bulan pengeluaran rutin',
        points: 2,
        tip: 'Fondasi awal sudah bagus! Pertahankan dan tingkatkan bertahap menuju 3–6 bulan agar lebih tenang menghadapi situasi tak terduga.'
      },
      {
        label: 'Sudah aman minimal 3–6 bulan (atau >6 bulan untuk yang sudah berkeluarga)',
        points: 3,
        tip: 'Sangat prima! Dana daruratmu sudah sesuai rekomendasi perencana keuangan independen dan standar OJK.'
      }
    ]
  },
  {
    id: 3,
    question: 'Berapa persen porsi cicilan atau utang bulananmu dibanding total penghasilan?',
    subtext: 'Termasuk KPR, motor, kartu kredit, paylater, dan pinjaman lainnya.',
    options: [
      {
        label: 'Di atas 40% dari penghasilan, sering merasa tertekan saat bayar cicilan',
        points: 1,
        tip: 'Segera terapkan rem darurat: stop menambah cicilan baru dan prioritaskan pelunasan utang berbunga paling tinggi (metode avalanche).'
      },
      {
        label: 'Sekitar 20% sampai 35% dari penghasilan',
        points: 2,
        tip: 'Masih berada di batas toleransi aman standar perbankan (<30%), tetap hati-hati sebelum mengambil cicilan baru.'
      },
      {
        label: 'Di bawah 20% atau sama sekali tidak memiliki cicilan utang',
        points: 3,
        tip: 'Porsi utangmu sangat sehat dan fleksibel! Arus kasmu memiliki ruang gerak yang sangat luas untuk menabung dan berinvestasi.'
      }
    ]
  },
  {
    id: 4,
    question: 'Kapan kamu biasanya menyisihkan uang untuk tabungan atau investasi?',
    subtext: 'Menyangkut kedisiplinan dan sistem pengelolaan uang.',
    options: [
      {
        label: 'Di akhir bulan, itu pun kalau masih ada uang sisa (yang seringnya tidak ada)',
        points: 1,
        tip: 'Ubah prinsip ke "Pay Yourself First": sisihkan 10% di hari pertama gajian masuk, bukan mengandalkan sisa akhir bulan.'
      },
      {
        label: 'Kadang di awal bulan, tapi kadang terpaksa ditarik lagi untuk belanja',
        points: 2,
        tip: 'Gunakan rekening tabungan terpisah yang tidak dipasangi m-banking di ponsel utama untuk mengunci niat menabung.'
      },
      {
        label: 'Otomatis auto-debit atau disisihkan langsung di awal saat gaji/pemasukan masuk',
        points: 3,
        tip: 'Kebiasaan mental kelas juara! Sistem otomatis adalah rahasia orang yang sukses membangun aset jangka panjang.'
      }
    ]
  },
  {
    id: 5,
    question: 'Bagaimana kesiapan proteksimu (asuransi kesehatan / jaminan sosial)?',
    subtext: 'Perlindungan agar tabungan tidak ludes tersedot biaya rumah sakit.',
    options: [
      {
        label: 'Belum memiliki BPJS Kesehatan aktif maupun asuransi kesehatan swasta',
        points: 1,
        tip: 'Prioritaskan mengaktifkan BPJS Kesehatan sesegera mungkin. Ini adalah jaring pengaman kesehatan paling terjangkau dengan perlindungan luas.'
      },
      {
        label: 'Memiliki BPJS Kesehatan aktif atau proteksi dari kantor tempat kerja',
        points: 2,
        tip: 'Bagus! Kamu sudah memiliki perlindungan dasar. Pastikan iuran selalu tertib agar status kepesertaan tetap aktif saat dibutuhkan.'
      },
      {
        label: 'Sudah terlindungi BPJS Kesehatan aktif plus proteksi tambahan terukur sesuai kebutuhan',
        points: 3,
        tip: 'Perlindunganmu sangat komprehensif! Fondasi risiko kesehatanmu sudah tertata dengan rapi.'
      }
    ]
  },
  {
    id: 6,
    question: 'Seberapa paham kamu tentang perbedaan produk simpanan bank, LPS, dan investasi?',
    subtext: 'Literasi dasar mengenai tempat menyimpan dan menumbuhkan uang.',
    options: [
      {
        label: 'Masih sering bingung, takut salah pilih atau tertipu tawaran yang beredar',
        points: 1,
        tip: 'Tenang saja, FinansialKu.com hadir untukmu! Luangkan waktu 3 menit membaca materi "Kenali LPS" dan "Segitiga Emas Investasi" di Rebahan Academy.'
      },
      {
        label: 'Tahu bedanya secara umum, tapi belum mendalami detail risiko dan regulasinya',
        points: 2,
        tip: 'Arah yang tepat! Pahami syarat 3T LPS dan prinsip 2L (Legal & Logis) OJK agar makin percaya diri memilih produk yang pas.'
      },
      {
        label: 'Paham fungsi BI, OJK, syarat 3T LPS, serta perbedaan deposito, SBN, dan saham',
        points: 3,
        tip: 'Keren sekali! Tingkat literasi keuanganmu berada di atas rata-rata nasional. Kamu bisa mulai mengeksplorasi diversifikasi portofolio.'
      }
    ]
  }
];
