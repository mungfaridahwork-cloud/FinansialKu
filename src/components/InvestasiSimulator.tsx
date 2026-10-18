import React, { useState } from 'react';
import { 
  TrendingUp, 
  Coins, 
  Building, 
  PieChart, 
  BarChart3, 
  FileText, 
  ShieldAlert, 
  Info,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { formatRupiah } from '../utils/formatters';

interface InstrumentInfo {
  id: string;
  name: string;
  icon: React.ReactNode;
  riskLevel: 'Rendah' | 'Moderat' | 'Tinggi';
  riskColor: string;
  horizon: string;
  typicalReturn: string;
  summary: string;
  guaranteeNote: string;
}

export const InvestasiSimulator: React.FC = () => {
  const [modalAwal, setModalAwal] = useState<number>(2000000);
  const [setoranRutin, setSetoranRutin] = useState<number>(500000);
  const [durasiTahun, setDurasiTahun] = useState<number>(5);
  const [asumsiReturn, setAsumsiReturn] = useState<number>(7); // 7% p.a.
  const [selectedProfile, setSelectedProfile] = useState<'konservatif' | 'moderat' | 'agresif'>('moderat');

  const instruments: InstrumentInfo[] = [
    {
      id: 'deposito',
      name: 'Deposito Bank',
      icon: <Building className="w-5 h-5 text-blue-600" />,
      riskLevel: 'Rendah',
      riskColor: 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800',
      horizon: '1 - 12 Bulan',
      typicalReturn: '3% - 4.5% / tahun',
      summary: 'Simpanan berjangka dengan bunga pasti. Sangat aman dan dijamin LPS hingga Rp2 Miliar (selama bunga di bawah batas penjaminan LPS).',
      guaranteeNote: 'Dijamin LPS sesuai Syarat 3T',
    },
    {
      id: 'sbn',
      name: 'SBN Ritel (ORI / Sukuk)',
      icon: <FileText className="w-5 h-5 text-teal-600" />,
      riskLevel: 'Rendah',
      riskColor: 'text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800',
      horizon: '2 - 6 Tahun',
      typicalReturn: '6% - 6.8% / tahun',
      summary: 'Surat utang yang diterbitkan Pemerintah RI lewat Kemenkeu. Kupon bulanan mengalir ke rekening, pokok dijamin 100% oleh Undang-Undang APBN.',
      guaranteeNote: '100% Dijamin Negara via UU APBN',
    },
    {
      id: 'emas',
      name: 'Emas Logam Mulia',
      icon: <Coins className="w-5 h-5 text-amber-500" />,
      riskLevel: 'Moderat',
      riskColor: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
      horizon: 'Min. 5 Tahun',
      typicalReturn: 'Lindung Nilai (±5-8% historis)',
      summary: 'Aset safe-haven pelindung inflasi jangka panjang. Tidak membagikan dividen atau bunga berkala; untung murni dari selisih harga jual dan beli.',
      guaranteeNote: 'Aset Fisik / Emas Digital Terlisensi Bappebti',
    },
    {
      id: 'reksadana',
      name: 'Reksa Dana',
      icon: <PieChart className="w-5 h-5 text-emerald-600" />,
      riskLevel: 'Moderat',
      riskColor: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
      horizon: '1 - 5+ Tahun',
      typicalReturn: '4% - 12% (Sesuai jenis)',
      summary: 'Dana dikelola Manajer Investasi (MI) profesional ke portofolio pasar uang, obligasi, atau saham. Mulai dari Rp10.000 dengan diversifikasi otomatis.',
      guaranteeNote: 'Diawasi OJK, Disimpan di Bank Kustodian',
    },
    {
      id: 'saham',
      name: 'Saham (Bursa Efek Indonesia)',
      icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
      riskLevel: 'Tinggi',
      riskColor: 'text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800',
      horizon: 'Min. 5 - 10 Tahun',
      typicalReturn: 'Fluktuatif (Bisa Minus / Plus Tinggi)',
      summary: 'Kepemilikan bagian bisnis riil di bursa efek. Menawarkan dividen dan apresiasi harga (capital gain), namun harga harian berfluktuasi tajam.',
      guaranteeNote: 'Diawasi OJK & IDX (Modal Tidak Dijamin)',
    },
  ];

  // Compound future value calculation
  const totalBulan = durasiTahun * 12;
  const rateBulanan = (asumsiReturn / 100) / 12;
  const fvModalAwal = modalAwal * Math.pow(1 + rateBulanan, totalBulan);
  const fvSetoran = rateBulanan > 0 
    ? setoranRutin * ((Math.pow(1 + rateBulanan, totalBulan) - 1) / rateBulanan)
    : setoranRutin * totalBulan;

  const estimasiNilaiAkhir = fvModalAwal + fvSetoran;
  const totalModalDisetor = modalAwal + (setoranRutin * totalBulan);
  const estimasiPertumbuhan = Math.max(0, estimasiNilaiAkhir - totalModalDisetor);

  const applyProfile = (prof: 'konservatif' | 'moderat' | 'agresif') => {
    setSelectedProfile(prof);
    if (prof === 'konservatif') setAsumsiReturn(5);
    if (prof === 'moderat') setAsumsiReturn(7.5);
    if (prof === 'agresif') setAsumsiReturn(11);
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span>Investasi Tanpa Pusing & Tanpa Halusinasi</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Pahami Instrumen & Simulasikan Akumulasi Modal
        </h1>
        <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl leading-relaxed">
          Bukan cara cepat kaya, melainkan cara melindungi uang dari inflasi dan membiarkan waktu bekerja untuk masa depanmu.
        </p>
      </div>

      {/* Simulator Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Simulator Akumulasi Investasi
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Ubah parameter modal, setoran rutin, dan asumsi pertumbuhan tahunan.
            </p>
          </div>

          {/* Quick Profile Presets */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Asumsi Profil Risiko:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => applyProfile('konservatif')}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                  selectedProfile === 'konservatif'
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>Konservatif</span>
                <span className="block text-[10px] font-normal opacity-75">±5% (SBN/Deposito)</span>
              </button>

              <button
                type="button"
                onClick={() => applyProfile('moderat')}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                  selectedProfile === 'moderat'
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>Moderat</span>
                <span className="block text-[10px] font-normal opacity-75">±7.5% (Campuran/Obligasi)</span>
              </button>

              <button
                type="button"
                onClick={() => applyProfile('agresif')}
                className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                  selectedProfile === 'agresif'
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                    : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>Agresif</span>
                <span className="block text-[10px] font-normal opacity-75">±11% (Saham/Indeks)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Modal Awal
              </label>
              <input
                type="number"
                step="500000"
                min="0"
                value={modalAwal}
                onChange={(e) => setModalAwal(Number(e.target.value) || 0)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
              />
              <p className="text-[11px] text-slate-500">{formatRupiah(modalAwal)}</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Setoran Rutin Bulanan
              </label>
              <input
                type="number"
                step="100000"
                min="0"
                value={setoranRutin}
                onChange={(e) => setSetoranRutin(Number(e.target.value) || 0)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
              />
              <p className="text-[11px] text-slate-500">{formatRupiah(setoranRutin)} / bulan</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Durasi Waktu (Tahun)
              </label>
              <input
                type="number"
                min="1"
                max="35"
                value={durasiTahun}
                onChange={(e) => setDurasiTahun(Number(e.target.value) || 1)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
              />
              <p className="text-[11px] text-slate-500">{durasiTahun} Tahun ({durasiTahun * 12} Bulan)</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Asumsi Pertumbuhan (% / Tahun)
              </label>
              <input
                type="number"
                min="1"
                max="25"
                step="0.5"
                value={asumsiReturn}
                onChange={(e) => setAsumsiReturn(Number(e.target.value) || 0)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
              />
              <p className="text-[11px] text-slate-500">{asumsiReturn}% per tahun</p>
            </div>
          </div>
        </div>

        {/* Results Card with Mandatory Realistic Warnings */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#12372A] text-white p-6 sm:p-7 rounded-3xl border border-emerald-900 shadow-xl space-y-5">
            <div>
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Estimasi Hasil Akhir ({durasiTahun} Tahun)
              </span>
              <div className="text-3xl font-black mt-2 text-emerald-300">
                {formatRupiah(Math.round(estimasiNilaiAkhir))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-emerald-200">Total Modal Disetor:</span>
                <span className="font-bold text-white">{formatRupiah(Math.round(totalModalDisetor))}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-200">Estimasi Pertumbuhan / Imbal Hasil:</span>
                <span className="font-bold text-emerald-300">+{formatRupiah(Math.round(estimasiPertumbuhan))}</span>
              </div>
            </div>

            {/* Crucial Disclaimers */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200 leading-relaxed flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 block mb-0.5">Peringatan Risiko Nyata:</strong>
                Pertumbuhan dalam simulator ini adalah asumsi matematis ilustratif, BUKAN prediksi masa depan atau jaminan pasti. Nilai investasi riil dapat naik atau turun mengikuti kondisi pasar modal dan ekonomi riil.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Instrument Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Peta 5 Instrumen Populer di Indonesia
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Pahami karakteristik risiko, durasi yang cocok, dan payung hukum masing-masing sebelum membeli.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {instruments.map((inst) => (
            <div
              key={inst.id}
              className="p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {inst.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${inst.riskColor}`}>
                    Risiko {inst.riskLevel}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                    {inst.name}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1">
                    <span>Horizon: {inst.horizon}</span>
                    <span>·</span>
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">{inst.typicalReturn}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {inst.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="truncate">{inst.guaranteeNote}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
