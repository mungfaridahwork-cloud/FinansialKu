import React from 'react';
import { 
  BookOpen, 
  Calculator, 
  TrendingUp, 
  CheckCircle2, 
  ShieldAlert, 
  Bookmark, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Shield, 
  Check, 
  Coffee, 
  Building2, 
  HelpCircle,
  Coins
} from 'lucide-react';
import { AppTab, Article } from '../types';
import { ARTICLES_DATA } from '../data/articles';

interface HomeViewProps {
  setActiveTab: (tab: AppTab) => void;
  onOpenArticle: (article: Article) => void;
  completedMissionsCount: number;
  readArticlesCount: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onOpenArticle,
  completedMissionsCount,
  readArticlesCount,
}) => {
  const recommendedArticles = ARTICLES_DATA.slice(0, 3);
  const institutionalArticles = ARTICLES_DATA.filter(a => a.category === 'bank-bi' || a.category === 'lembaga-keuangan').slice(0, 2);

  const features = [
    {
      id: 'academy' as AppTab,
      title: 'Rebahan Academy',
      tagline: 'Pusat Edukasi 2–3 Menitan',
      desc: 'Materi ringkas bahasa santai, dari gaji pertama, mutasi rekening, hingga pengawasan Bank Indonesia, OJK, dan LPS.',
      color: 'border-purple-200 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300',
      iconBg: 'bg-purple-600 text-white',
      icon: <BookOpen className="w-5 h-5" />,
      cta: 'Mulai Baca',
    },
    {
      id: 'kalkulator' as AppTab,
      title: 'Gajian Calculator',
      tagline: 'Simulasi Anggaran & Cicilan',
      desc: 'Atur alokasi gaji fleksibel (50/30/20 atau modifikasi), hitung dana darurat, cicilan utang, dan bunga majemuk secara interaktif.',
      color: 'border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300',
      iconBg: 'bg-blue-600 text-white',
      icon: <Calculator className="w-5 h-5" />,
      cta: 'Hitung Sekarang',
    },
    {
      id: 'investasi' as AppTab,
      title: 'Investasi Tanpa Pusing',
      tagline: 'Simulator & Peta Instrumen',
      desc: 'Pahami emas, deposito, reksa dana, saham, dan SBN tanpa janji muluk. Hitung akumulasi modal dengan asumsi jujur.',
      color: 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300',
      iconBg: 'bg-emerald-600 text-white',
      icon: <TrendingUp className="w-5 h-5" />,
      cta: 'Buka Simulator',
    },
    {
      id: 'cek-keuangan' as AppTab,
      title: 'Cek Kondisi Keuangan',
      tagline: 'Kuis Refleksi 3 Menit',
      desc: 'Evaluasi kesiapan dana darurat, arus kas, dan rasio utangmu dengan umpan balik hangat dan tanpa menghakimi.',
      color: 'border-teal-200 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/20 text-teal-700 dark:text-teal-300',
      iconBg: 'bg-teal-600 text-white',
      icon: <CheckCircle2 className="w-5 h-5" />,
      cta: 'Mulai Kuis',
    },
    {
      id: 'anti-boncos' as AppTab,
      title: 'Anti Boncos',
      tagline: 'Detektor Bocor Halus',
      desc: 'Temukan kemana larinya kopi susu kekinian, ongkir flash sale, dan biaya admin yang menumpuk jadi jutaan rupiah.',
      color: 'border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-300',
      iconBg: 'bg-rose-600 text-white',
      icon: <ShieldAlert className="w-5 h-5" />,
      cta: 'Cek Bocor Halus',
    },
    {
      id: 'kamus' as AppTab,
      title: 'Kamus Finansial',
      tagline: 'Glosarium Istilah Praktis',
      desc: 'Arti istilah BI-Rate, 3T LPS, SLIK OJK, likuiditas, inflasi, hingga bunga majemuk dengan contoh sehari-hari.',
      color: 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-200',
      iconBg: 'bg-emerald-700 text-white',
      icon: <Bookmark className="w-5 h-5" />,
      cta: 'Cari Istilah',
    },
    {
      id: 'misi' as AppTab,
      title: 'Misi Finansialku',
      tagline: 'Tantangan Kebiasaan Baik',
      desc: 'Micro-habits menyenangkan: periksa biaya rekening, kenali modus penipuan, hingga sisihkan receh kembalian.',
      color: 'border-teal-200 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/20 text-teal-700 dark:text-teal-300',
      iconBg: 'bg-teal-700 text-white',
      icon: <Award className="w-5 h-5" />,
      cta: 'Lihat Misi',
    },
    {
      id: 'pro' as AppTab,
      title: 'FinansialKu Pro',
      tagline: 'Konsep Fitur Masa Depan',
      desc: 'Pratinjau konsep dasbor multi-rekening, proyeksi arus kas cerdas, dan ekspor laporan keuangan terpadu.',
      color: 'border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300',
      iconBg: 'bg-amber-600 text-white',
      icon: <Sparkles className="w-5 h-5" />,
      cta: 'Lihat Konsep',
      isConcept: true,
    },
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-12 rounded-3xl bg-gradient-to-b from-[#12372A] to-[#184434] text-white px-6 sm:px-10 lg:px-14 shadow-xl border border-emerald-900">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/70 border border-emerald-700/60 text-emerald-300 text-xs font-semibold">
            <Coffee className="w-4 h-4 text-emerald-400" />
            <span>Mulai dari 3 Menit Sehari, Bebas Rasa Bersalah</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            Uangmu, <span className="text-emerald-400 underline decoration-emerald-500/40 decoration-wavy">kendalimu.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 font-normal leading-relaxed max-w-2xl mx-auto">
            Belajar mengatur uang nggak harus ribet. Dari gaji pertama sampai investasi masa depan, semua bisa kamu pelajari sambil rebahan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={() => setActiveTab('academy')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-extrabold text-sm shadow-lg shadow-emerald-950/40 transition-all transform active:scale-95 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Mulai Belajar</span>
            </button>
            <button
              onClick={() => setActiveTab('kalkulator')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-emerald-300" />
              <span>Coba Kalkulator</span>
            </button>
          </div>

          {/* Quick reassurance pills */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-emerald-200/80 border-t border-emerald-800/80 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tanpa istilah rumit</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Rujukan BI, OJK & LPS</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Gratis & Edukatif</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tidak Minta Data Pribadi</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Feature Cards Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Eksplorasi Fitur FinansialKu
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Pilih cara belajarmu: baca materi kilat, simulasikan gaji, atau cek kondisi dompetmu sekarang.
            </p>
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            8 Modul Siap Pakai
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat) => (
            <div
              key={feat.id}
              className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 bg-white dark:bg-slate-900 ${feat.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${feat.iconBg}`}>
                    {feat.icon}
                  </div>
                  {feat.isConcept && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                      Konsep
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs font-semibold opacity-80">
                    {feat.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setActiveTab(feat.id)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700"
                >
                  <span>{feat.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Quick Reads (Mode Rebahan) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Rekomendasi Rebahan Academy</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              Materi 2–3 Menit: Langsung Masuk Akal
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('academy')}
            className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>Buka Semua Materi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendedArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 bg-[#FBF9F4] dark:bg-slate-950 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">{article.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                <span>Baca & Ikuti Kuis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Spotlight (BI, OJK, LPS) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white border border-emerald-900 shadow-lg space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
            <Building2 className="w-4 h-4" />
            <span>Kenali Sistem Keuangan Nasional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Jangan Tertukar: Peran Bank Indonesia, OJK, dan LPS
          </h2>
          <p className="text-sm text-emerald-200/80 mt-2 leading-relaxed">
            Mengetahui siapa yang mengatur moneter, siapa yang mengawasi aplikasi pinjol dan investasi, serta siapa yang menjamin uangmu jika bank tutup adalah tameng terbaik dari kerugian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-800/80 space-y-2">
            <div className="font-extrabold text-base text-emerald-300">Bank Indonesia (BI)</div>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Bank Sentral Republik Indonesia. Mengatur suku bunga acuan (BI-Rate), mengendalikan inflasi, dan menyediakan sistem pembayaran QRIS & BI-FAST.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-800/80 space-y-2">
            <div className="font-extrabold text-base text-emerald-300">Otoritas Jasa Keuangan (OJK)</div>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Pengawas seluruh lembaga jasa keuangan (Bank, Pasar Modal, Saham, Asuransi, Fintech). Melindungi konsumen dan menindak investasi bodong via Kontak 157.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-800/80 space-y-2">
            <div className="font-extrabold text-base text-emerald-300">Lembaga Penjamin Simpanan (LPS)</div>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Menjamin saldo tabungan dan depositomu di bank hingga maksimal Rp2 Miliar per nasabah per bank, selama memenuhi Syarat 3T LPS.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <span className="text-xs text-emerald-300/80">
            Ingin membaca penjelasan lengkap dengan contoh kasus nyata?
          </span>
          <button
            onClick={() => setActiveTab('academy')}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <span>Buka Materi Lembaga Keuangan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Interactive Micro Mission Promo */}
      <section className="p-6 rounded-3xl bg-[#F4F1EA] dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-teal-700 dark:text-teal-400">
            <Award className="w-4 h-4" />
            <span>Misi Finansialku Hari Ini</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">
            Bangun Kebiasaan Finansial Sehat Selangkah Demi Selangkah
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Mulai dari memeriksa biaya admin rekening, mengecek rasio utang, sampai mengidentifikasi 1 bocor halus mingguan. Bebas hukuman, selalu penuh apresiasi.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-right hidden sm:block">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">Progres Misi</span>
            <span className="font-black text-lg text-emerald-700 dark:text-emerald-400">
              {completedMissionsCount} dari 8 Selesai
            </span>
          </div>
          <button
            onClick={() => setActiveTab('misi')}
            className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs transition-all flex items-center gap-2"
          >
            <span>Buka Tantangan Misi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
