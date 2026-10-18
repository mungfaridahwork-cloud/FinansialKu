import React, { useState } from 'react';
import { 
  Sparkles, 
  LayoutDashboard, 
  Target, 
  FileSpreadsheet, 
  Calculator, 
  Download, 
  Check, 
  Send, 
  AlertCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const FinansialKuPro: React.FC = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [userIdea, setUserIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const conceptFeatures = [
    {
      title: 'Dasbor Arus Kas Terintegrasi',
      icon: <LayoutDashboard className="w-5 h-5 text-purple-600" />,
      desc: 'Visualisasi mutasi pemasukan dan pengeluaran multi-rekening tanpa perlu bolak-balik buka berbagai aplikasi perbankan.',
    },
    {
      title: 'Target Finansial Multi-Pos',
      icon: <Target className="w-5 h-5 text-emerald-600" />,
      desc: 'Alokasikan tabungan terpisah untuk DP rumah, dana pendidikan anak, dan liburan dengan auto-tracking progres pencapaian.',
    },
    {
      title: 'Simulasi Pelunasan Utang Detil (Snowball & Avalanche)',
      icon: <Calculator className="w-5 h-5 text-blue-600" />,
      desc: 'Hitung penghematan bunga pinjaman dengan skema pelunasan dipercepat dan bandingkan strategi pelunasan secara matematis.',
    },
    {
      title: 'Ekspor Laporan PDF & Spreadsheet',
      icon: <Download className="w-5 h-5 text-amber-600" />,
      desc: 'Unduh ringkasan kondisi keuangan dan laporan arus kas siap cetak untuk diskusi bersama keluarga atau perencana keuangan.',
    },
  ];

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-10 pb-12 max-w-4xl mx-auto">
      {/* Concept Notice Banner */}
      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="block text-sm font-extrabold text-amber-950 dark:text-amber-100 mb-0.5">
            Pratinjau Konsep Masa Depan (Feature Concept Preview)
          </strong>
          FinansialKu Pro saat ini masih dalam tahap perancangan konsep dan riset kebutuhan pengguna. Kami tidak memproses transaksi pembayaran apa pun, dan semua fitur di bawah ini dirancang transparan sebagai roadmap pengembangan mendatang.
        </div>
      </div>

      {/* Hero Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-900 via-orange-950 to-slate-900 text-white shadow-lg space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>FinansialKu Pro — Konsep Premium Mendatang</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Asisten Pengelolaan Uang Tingkat Lanjut
        </h1>
        <p className="text-sm sm:text-base text-amber-100/90 max-w-2xl leading-relaxed">
          Dari simulasi santai menuju otomatisasi manajemen arus kas personal yang lengkap, aman, dan tetap ramah pemula.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {conceptFeatures.map((feat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              {feat.icon}
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                Rencana Modul {idx + 1}
              </span>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                {feat.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Waitlist / Feedback Form */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#F4F1EA] dark:bg-slate-900 border border-slate-300 dark:border-slate-800 space-y-6">
        <div>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">
            Beri Masukan atau Bergabung ke Daftar Antrean (Waitlist)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Bantu kami membangun fitur yang paling kamu butuhkan. Masukanmu akan menjadi prioritas tim pengembang FinansialKu.com.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-black text-lg text-emerald-950 dark:text-emerald-100">
              Terima Kasih Banyak!
            </h3>
            <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto leading-relaxed">
              Minatmu telah tercatat dalam simulasi riset produk FinansialKu Pro. Kami akan terus menyempurnakan fitur literasi gratis terlebih dahulu!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-3 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              Kirim masukan ide lainnya
            </button>
          </div>
        ) : (
          <form onSubmit={handleJoinWaitlist} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Email Notifikasi
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Fitur Apa yang Paling Kamu Nantikan?
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Auto-budgeting, konsultasi CFP, dll..."
                  value={userIdea}
                  onChange={(e) => setUserIdea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-xs font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Daftar Waiting List (Gratis)</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
