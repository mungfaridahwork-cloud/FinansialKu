import React, { useState } from 'react';
import { 
  Calculator, 
  RotateCcw, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  TrendingUp, 
  Shield, 
  PiggyBank, 
  CreditCard,
  Info
} from 'lucide-react';
import { formatRupiah, parseRupiahInput } from '../utils/formatters';

type CalcSubTab = 'alokasi' | 'darurat' | 'target' | 'bunga' | 'cicilan';

export const GajianCalculator: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<CalcSubTab>('alokasi');

  // --- Sub 1: Alokasi Gaji (50/30/20) State ---
  const [gajiInput, setGajiInput] = useState<number>(6000000);
  const [pctKebutuhan, setPctKebutuhan] = useState<number>(50);
  const [pctKeinginan, setPctKeinginan] = useState<number>(30);
  const [pctTabungan, setPctTabungan] = useState<number>(20);

  const totalPct = pctKebutuhan + pctKeinginan + pctTabungan;
  const isBalanced = totalPct === 100;

  const nominalKebutuhan = (gajiInput * pctKebutuhan) / 100;
  const nominalKeinginan = (gajiInput * pctKeinginan) / 100;
  const nominalTabungan = (gajiInput * pctTabungan) / 100;

  const applyPreset = (keb: number, kei: number, tab: number) => {
    setPctKebutuhan(keb);
    setPctKeinginan(kei);
    setPctTabungan(tab);
  };

  const handleResetAlokasi = () => {
    setGajiInput(6000000);
    applyPreset(50, 30, 20);
  };

  // --- Sub 2: Dana Darurat State ---
  const [pengeluaranBulanan, setPengeluaranBulanan] = useState<number>(3500000);
  type EmergencyStatus = 'single' | 'menikah' | 'anak' | 'freelancer';
  const [statusProfil, setStatusProfil] = useState<EmergencyStatus>('single');
  const [tabunganDaruratSaatIni, setTabunganDaruratSaatIni] = useState<number>(5000000);
  const [kemampuanNabungBulanan, setKemampuanNabungBulanan] = useState<number>(750000);

  const multipliers: Record<EmergencyStatus, { factor: number; label: string; desc: string }> = {
    single: { factor: 3, label: 'Lajang (Single)', desc: 'Minimal 3x pengeluaran bulanan rutin' },
    menikah: { factor: 6, label: 'Menikah (Tanpa Anak)', desc: 'Minimal 6x pengeluaran bulanan' },
    anak: { factor: 9, label: 'Menikah dengan Anak / Tanggungan', desc: 'Minimal 9x–12x pengeluaran bulanan' },
    freelancer: { factor: 12, label: 'Pekerja Lepas / Wirausaha', desc: 'Minimal 12x karena penghasilan tidak tetap' },
  };

  const targetDanaDarurat = pengeluaranBulanan * multipliers[statusProfil].factor;
  const kekuranganDanaDarurat = Math.max(0, targetDanaDarurat - tabunganDaruratSaatIni);
  const estimasiBulanDarurat = kemampuanNabungBulanan > 0 
    ? Math.ceil(kekuranganDanaDarurat / kemampuanNabungBulanan) 
    : 0;
  const daruratProgress = Math.min(100, Math.round((tabunganDaruratSaatIni / targetDanaDarurat) * 100));

  // --- Sub 3: Target Tabungan State ---
  const [targetTabunganNominal, setTargetTabunganNominal] = useState<number>(15000000);
  const [targetBulan, setTargetBulan] = useState<number>(12);
  const [asumsiImbalHasilTabungan, setAsumsiImbalHasilTabungan] = useState<number>(4); // misal RDPU 4% p.a.

  // Perhitungan setoran bulanan sederhana dengan pertimbangan return bulanan
  const monthlyRate = (asumsiImbalHasilTabungan / 100) / 12;
  const setoranBulananMurni = targetBulan > 0 ? targetTabunganNominal / targetBulan : 0;
  const setoranBulananDenganReturn = monthlyRate > 0 && targetBulan > 0
    ? (targetTabunganNominal * monthlyRate) / (Math.pow(1 + monthlyRate, targetBulan) - 1)
    : setoranBulananMurni;

  // --- Sub 4: Bunga Majemuk State ---
  const [bungaModalAwal, setBungaModalAwal] = useState<number>(5000000);
  const [bungaSetoranBulanan, setBungaSetoranBulanan] = useState<number>(500000);
  const [bungaTenorTahun, setBungaTenorTahun] = useState<number>(5);
  const [bungaReturnTahunan, setBungaReturnTahunan] = useState<number>(6); // 6% p.a.

  // Future Value calculation
  const totalBulanBunga = bungaTenorTahun * 12;
  const rBunga = (bungaReturnTahunan / 100) / 12;
  const fvModalAwal = bungaModalAwal * Math.pow(1 + rBunga, totalBulanBunga);
  const fvSetoranRutin = rBunga > 0 
    ? bungaSetoranBulanan * ((Math.pow(1 + rBunga, totalBulanBunga) - 1) / rBunga)
    : bungaSetoranBulanan * totalBulanBunga;
  const totalNilaiAkhirBunga = fvModalAwal + fvSetoranRutin;
  const totalModalDisetor = bungaModalAwal + (bungaSetoranBulanan * totalBulanBunga);
  const totalImbalHasilBunga = Math.max(0, totalNilaiAkhirBunga - totalModalDisetor);

  // --- Sub 5: Cicilan & DSR State ---
  const [dsrGaji, setDsrGaji] = useState<number>(7000000);
  const [dsrCicilanRumah, setDsrCicilanRumah] = useState<number>(1200000);
  const [dsrCicilanKendaraan, setDsrCicilanKendaraan] = useState<number>(600000);
  const [dsrCicilanLainnya, setDsrCicilanLainnya] = useState<number>(300000);

  const totalCicilanBulanan = dsrCicilanRumah + dsrCicilanKendaraan + dsrCicilanLainnya;
  const rasioDsr = dsrGaji > 0 ? (totalCicilanBulanan / dsrGaji) * 100 : 0;

  const getDsrStatus = (ratio: number) => {
    if (ratio <= 30) {
      return {
        label: 'Sehat & Aman',
        color: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800',
        advice: 'Porsi utangmu berada di bawah batas standar 30%. Arus kas bulananmu sangat longgar untuk menabung dan memenuhi kebutuhan hidup.',
      };
    } else if (ratio <= 40) {
      return {
        label: 'Perlu Waspada',
        color: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800',
        advice: 'Cicilanmu sudah mendekati 40% penghasilan. Jangan menambah pinjaman baru sampai salah satu cicilan selesai terlunasi.',
      };
    } else {
      return {
        label: 'Zona Bahaya',
        color: 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800',
        advice: 'Lebih dari 40% gajimu habis untuk membayar utang. Pos kebutuhan pokok dan tabungan berisiko defisit jika terjadi keadaan darurat.',
      };
    }
  };

  const dsrStatus = getDsrStatus(rasioDsr);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-sky-950 to-slate-900 text-white shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-wider">
          <Calculator className="w-4 h-4 text-sky-400" />
          <span>Gajian Calculator & Simulasi Finansial</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Simulasikan Uangmu Tanpa Asumsi Buta
        </h1>
        <p className="text-sm sm:text-base text-sky-100/90 max-w-2xl leading-relaxed">
          Semua angka di sini adalah alat bantu visual untuk merencanakan langkahmu. Sesuaikan pembagian anggaran dengan tanggungan, domisili, dan kondisi riil hidupmu.
        </p>
      </div>

      {/* Sub Tabs Selector */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 dark:bg-slate-900/90 rounded-2xl border border-slate-300/60 dark:border-slate-800">
        <button
          onClick={() => setActiveSubTab('alokasi')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
            activeSubTab === 'alokasi'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <PiggyBank className="w-4 h-4" />
          <span>Alokasi Gaji (50/30/20)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('darurat')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
            activeSubTab === 'darurat'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Shield className="w-4 h-4" />
          <span>Dana Darurat</span>
        </button>

        <button
          onClick={() => setActiveSubTab('target')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
            activeSubTab === 'target'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Target Tabungan</span>
        </button>

        <button
          onClick={() => setActiveSubTab('bunga')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
            activeSubTab === 'bunga'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Bunga Majemuk</span>
        </button>

        <button
          onClick={() => setActiveSubTab('cicilan')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
            activeSubTab === 'cicilan'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>Rasio Cicilan (DSR)</span>
        </button>
      </div>

      {/* --- SUBTAB 1: ALOKASI GAJI 50/30/20 --- */}
      {activeSubTab === 'alokasi' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white">
                  Kalkulator Alokasi Penghasilan
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Masukkan gaji bersih bulanan dan tentukan porsi pembagiannya.
                </p>
              </div>
              <button
                onClick={handleResetAlokasi}
                className="px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 transition-colors"
                title="Kembalikan ke pengaturan awal"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Income Input */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Gaji Bersih Bulanan (Take Home Pay)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                  Rp
                </span>
                <input
                  type="number"
                  step="100000"
                  min="0"
                  value={gajiInput}
                  onChange={(e) => setGajiInput(Number(e.target.value) || 0)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-extrabold text-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Nilai terformat: <strong className="text-slate-700 dark:text-slate-300">{formatRupiah(gajiInput)}</strong>
              </p>
            </div>

            {/* Presets */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Pilih Pola Alokasi Sesuai Kondisimu:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => applyPreset(50, 30, 20)}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                    pctKebutuhan === 50 && pctKeinginan === 30 && pctTabungan === 20
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="block font-black">50 / 30 / 20</span>
                  <span className="text-[10px] opacity-75 font-normal">Standar Umum</span>
                </button>

                <button
                  type="button"
                  onClick={() => applyPreset(60, 20, 20)}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                    pctKebutuhan === 60 && pctKeinginan === 20 && pctTabungan === 20
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="block font-black">60 / 20 / 20</span>
                  <span className="text-[10px] opacity-75 font-normal">Kota Besar</span>
                </button>

                <button
                  type="button"
                  onClick={() => applyPreset(70, 20, 10)}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                    pctKebutuhan === 70 && pctKeinginan === 20 && pctTabungan === 10
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="block font-black">70 / 20 / 10</span>
                  <span className="text-[10px] opacity-75 font-normal">Tanggungan / UMR</span>
                </button>

                <button
                  type="button"
                  onClick={() => applyPreset(40, 30, 30)}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                    pctKebutuhan === 40 && pctKeinginan === 30 && pctTabungan === 30
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="block font-black">40 / 30 / 30</span>
                  <span className="text-[10px] opacity-75 font-normal">Agresif Nabung</span>
                </button>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-5 pt-2">
              {/* Kebutuhan Pokok */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-800 dark:text-slate-200">
                    Kebutuhan Pokok (Sewa, Makan, Listrik, Tagihan)
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-extrabold text-sm">
                    {pctKebutuhan}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="90"
                  value={pctKebutuhan}
                  onChange={(e) => setPctKebutuhan(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Keinginan */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-800 dark:text-slate-200">
                    Keinginan & Gaya Hidup (Nongkrong, Hobi, Hiburan)
                  </span>
                  <span className="text-purple-600 dark:text-purple-400 font-extrabold text-sm">
                    {pctKeinginan}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="70"
                  value={pctKeinginan}
                  onChange={(e) => setPctKeinginan(Number(e.target.value))}
                  className="w-full accent-purple-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Tabungan & Investasi */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-800 dark:text-slate-200">
                    Tabungan, Dana Darurat & Investasi
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-sm">
                    {pctTabungan}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="70"
                  value={pctTabungan}
                  onChange={(e) => setPctTabungan(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Validation Alert */}
            {!isBalanced && (
              <div className={`p-4 rounded-2xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                totalPct > 100 
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200' 
                  : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
              }`}>
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold block">
                    Total Alokasi Saat Ini: {totalPct}% ({totalPct > 100 ? `Kelebihan ${totalPct - 100}%` : `Kurang ${100 - totalPct}%`})
                  </span>
                  <p className="mt-0.5 leading-relaxed">
                    Total persentase harus tepat 100% agar seluruh penghasilanmu terpetakan dengan jelas.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#12372A] text-white p-6 sm:p-7 rounded-3xl border border-emerald-900 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Hasil Pemetaan Nominal
                </span>
                <h3 className="text-2xl font-black mt-1">
                  Rencana Alokasi Gaji
                </h3>
              </div>

              {/* Breakdown Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs text-blue-200 font-semibold">
                    <span>Kebutuhan Pokok ({pctKebutuhan}%)</span>
                    <span>Wajib Pertama</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">
                    {formatRupiah(nominalKebutuhan)}
                  </div>
                  <p className="text-[11px] text-white/70">
                    Untuk makanan bergizi, tempat tinggal, cicilan esensial, dan listrik.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs text-purple-200 font-semibold">
                    <span>Keinginan ({pctKeinginan}%)</span>
                    <span>Guilt-Free Money</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">
                    {formatRupiah(nominalKeinginan)}
                  </div>
                  <p className="text-[11px] text-white/70">
                    Bebas dihabiskan untuk nongkrong, langganan film, atau jajan tanpa rasa bersalah.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs text-emerald-200 font-semibold">
                    <span>Tabungan & Investasi ({pctTabungan}%)</span>
                    <span>Masa Depanmu</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">
                    {formatRupiah(nominalTabungan)}
                  </div>
                  <p className="text-[11px] text-white/70">
                    Kunci dana darurat terlebih dahulu sebelum mulai melangkah ke investasi.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-800/80 text-xs text-emerald-200/80 leading-relaxed flex items-start gap-2">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-300" />
                <span>
                  <strong>Catatan Realistis:</strong> Metode 50/30/20 adalah panduan fleksibel. Jika biaya sewa dan transportasi memakan 65% gajimu, itu sah-sah saja. Yang terpenting adalah menyisihkan sebagian kecil di awal bulan!
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SUBTAB 2: DANA DARURAT --- */}
      {activeSubTab === 'darurat' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Kalkulator Target Dana Darurat
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Hitung jaring pengamanmu berdasarkan pengeluaran riil dan status tanggungan.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Status & Tanggungan Hidup
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(Object.keys(multipliers) as Array<keyof typeof multipliers>).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setStatusProfil(key)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      statusProfil === key
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 font-bold'
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="block text-xs font-extrabold">{multipliers[key].label}</span>
                    <span className="text-[11px] opacity-75 font-normal block mt-0.5">
                      {multipliers[key].desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Pengeluaran Pokok Rutin Per Bulan
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">Rp</span>
                <input
                  type="number"
                  step="100000"
                  min="0"
                  value={pengeluaranBulanan}
                  onChange={(e) => setPengeluaranBulanan(Number(e.target.value) || 0)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-extrabold text-base text-slate-900 dark:text-white"
                />
              </div>
              <p className="text-[11px] text-slate-500">
                Terformat: {formatRupiah(pengeluaranBulanan)} / bulan
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Tabungan Darurat Saat Ini
                </label>
                <input
                  type="number"
                  step="100000"
                  min="0"
                  value={tabunganDaruratSaatIni}
                  onChange={(e) => setTabunganDaruratSaatIni(Number(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
                />
                <p className="text-[11px] text-slate-500">{formatRupiah(tabunganDaruratSaatIni)}</p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Mampu Nabung Darurat Per Bulan
                </label>
                <input
                  type="number"
                  step="50000"
                  min="0"
                  value={kemampuanNabungBulanan}
                  onChange={(e) => setKemampuanNabungBulanan(Number(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
                />
                <p className="text-[11px] text-slate-500">{formatRupiah(kemampuanNabungBulanan)} / bulan</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#12372A] text-white p-6 sm:p-7 rounded-3xl border border-emerald-900 shadow-xl space-y-5">
              <div>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Rekomendasi Bantal Darurat
                </span>
                <h3 className="text-2xl font-black mt-1">
                  Target: {formatRupiah(targetDanaDarurat)}
                </h3>
                <p className="text-xs text-emerald-200/80 mt-1">
                  ({multipliers[statusProfil].factor} bulan x {formatRupiah(pengeluaranBulanan)})
                </p>
              </div>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>Progres Terkumpul</span>
                  <span className="text-emerald-300">{daruratProgress}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-white/20 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-400 rounded-full transition-all duration-300"
                    style={{ width: `${daruratProgress}%` }}
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-emerald-200">Kekurangan Dana:</span>
                  <span className="font-extrabold text-white">{formatRupiah(kekuranganDanaDarurat)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-200">Estimasi Terkumpul:</span>
                  <span className="font-extrabold text-emerald-300">
                    {kekuranganDanaDarurat === 0 
                      ? 'Target Sudah Tercapai! 🎉' 
                      : `~${estimasiBulanDarurat} Bulan (${(estimasiBulanDarurat / 12).toFixed(1)} Tahun)`}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-900/60 text-xs text-emerald-200/90 leading-relaxed">
                <strong>Simpan di Mana?</strong> Simpan dana darurat di instrumen likuid dan aman: rekening bank terpisah tanpa kartu debit aktif di dompet, deposito jangka pendek, atau Reksa Dana Pasar Uang (RDPU).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SUBTAB 3: TARGET TABUNGAN --- */}
      {activeSubTab === 'target' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Kalkulator Target Tabungan
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Ingin beli motor, bayar DP rumah, atau liburan? Cari tahu setoran bulanan yang dibutuhkan.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Nominal Target Dana Impian
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">Rp</span>
                <input
                  type="number"
                  step="500000"
                  min="0"
                  value={targetTabunganNominal}
                  onChange={(e) => setTargetTabunganNominal(Number(e.target.value) || 0)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-extrabold text-base text-slate-900 dark:text-white"
                />
              </div>
              <p className="text-[11px] text-slate-500">{formatRupiah(targetTabunganNominal)}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Target Waktu (Bulan)
                </label>
                <input
                  type="number"
                  min="1"
                  max="360"
                  value={targetBulan}
                  onChange={(e) => setTargetBulan(Number(e.target.value) || 1)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
                />
                <p className="text-[11px] text-slate-500">
                  {targetBulan} bulan (~{(targetBulan / 12).toFixed(1)} tahun)
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Asumsi Imbal Hasil (% / Tahun)
                </label>
                <input
                  type="number"
                  min="0"
                  max="15"
                  step="0.5"
                  value={asumsiImbalHasilTabungan}
                  onChange={(e) => setAsumsiImbalHasilTabungan(Number(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
                />
                <p className="text-[11px] text-slate-500">
                  {asumsiImbalHasilTabungan}% p.a. (Contoh: RDPU atau Deposito)
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#12372A] text-white p-6 sm:p-7 rounded-3xl border border-emerald-900 shadow-xl space-y-5">
              <div>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Target Bulanan yang Harus Disisihkan
                </span>
                <div className="text-3xl font-black mt-2 text-emerald-300">
                  {formatRupiah(Math.round(setoranBulananDenganReturn))}
                  <span className="text-xs font-normal text-white/80 block mt-1">/ bulan</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-emerald-200">Tanpa Imbal Hasil (Celengan):</span>
                  <span className="font-bold text-white">{formatRupiah(Math.round(setoranBulananMurni))} / bln</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-200">Dengan Asumsi {asumsiImbalHasilTabungan}%:</span>
                  <span className="font-bold text-emerald-300">{formatRupiah(Math.round(setoranBulananDenganReturn))} / bln</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between font-bold">
                  <span className="text-emerald-200">Penghematan Berkat Imbal Hasil:</span>
                  <span className="text-emerald-300">
                    {formatRupiah(Math.max(0, Math.round((setoranBulananMurni - setoranBulananDenganReturn) * targetBulan)))}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-emerald-200/80 leading-relaxed">
                * Angka simulasi bersifat ilustratif. Imbal hasil riil pasar dapat berubah sewaktu-waktu tergantung fluktuasi ekonomi dan ketentuan pajak bunga/imbal hasil.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- SUBTAB 4: BUNGA MAJEMUK --- */}
      {activeSubTab === 'bunga' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Simulasi Keajaiban Bunga Majemuk
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Lihat bagaimana bunga berbunga bekerja seperti bola salju dalam jangka panjang.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Modal Awal
                </label>
                <input
                  type="number"
                  step="500000"
                  min="0"
                  value={bungaModalAwal}
                  onChange={(e) => setBungaModalAwal(Number(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
                />
                <p className="text-[11px] text-slate-500">{formatRupiah(bungaModalAwal)}</p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Setoran Rutin Bulanan
                </label>
                <input
                  type="number"
                  step="100000"
                  min="0"
                  value={bungaSetoranBulanan}
                  onChange={(e) => setBungaSetoranBulanan(Number(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
                />
                <p className="text-[11px] text-slate-500">{formatRupiah(bungaSetoranBulanan)} / bulan</p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Jangka Waktu (Tahun)
                </label>
                <input
                  type="number"
                  min="1"
                  max="40"
                  value={bungaTenorTahun}
                  onChange={(e) => setBungaTenorTahun(Number(e.target.value) || 1)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
                />
                <p className="text-[11px] text-slate-500">{bungaTenorTahun} Tahun ({bungaTenorTahun * 12} Bulan)</p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Asumsi Pertumbuhan (% / Tahun)
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  step="0.5"
                  value={bungaReturnTahunan}
                  onChange={(e) => setBungaReturnTahunan(Number(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
                />
                <p className="text-[11px] text-slate-500">{bungaReturnTahunan}% p.a.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#12372A] text-white p-6 sm:p-7 rounded-3xl border border-emerald-900 shadow-xl space-y-5">
              <div>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Proyeksi Nilai Akhir
                </span>
                <div className="text-3xl font-black mt-2 text-emerald-300">
                  {formatRupiah(Math.round(totalNilaiAkhirBunga))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Modal Pokok: {formatRupiah(Math.round(totalModalDisetor))}</span>
                  <span className="text-emerald-300 font-bold">
                    Untung Majemuk: +{formatRupiah(Math.round(totalImbalHasilBunga))}
                  </span>
                </div>
                {/* Visual Ratio */}
                <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden flex">
                  <div 
                    className="bg-blue-400 h-full"
                    style={{ width: `${(totalModalDisetor / totalNilaiAkhirBunga) * 100}%` }}
                    title="Modal Disetor"
                  />
                  <div 
                    className="bg-emerald-400 h-full"
                    style={{ width: `${(totalImbalHasilBunga / totalNilaiAkhirBunga) * 100}%` }}
                    title="Imbal Hasil Bunga Majemuk"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 text-xs text-white/80 space-y-1">
                <span className="font-bold text-white block">Kekuatan Waktu:</span>
                <p className="leading-relaxed">
                  Dalam jangka panjang, keuntungan dari bunga majemuk bisa melampaui seluruh modal pokok yang kamu setorkan. Inilah alasan mengapa mulai sedini mungkin sangat berharga!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SUBTAB 5: CICILAN & DSR --- */}
      {activeSubTab === 'cicilan' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Kalkulator Rasio Utang (Debt Service Ratio)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Ketahui apakah cicilan bulananmu masih berada di zona aman atau sudah membahayakan dompet.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Gaji / Penghasilan Bersih Bulanan
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">Rp</span>
                <input
                  type="number"
                  step="200000"
                  min="0"
                  value={dsrGaji}
                  onChange={(e) => setDsrGaji(Number(e.target.value) || 0)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-extrabold text-base text-slate-900 dark:text-white"
                />
              </div>
              <p className="text-[11px] text-slate-500">{formatRupiah(dsrGaji)}</p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Daftar Cicilan Berjalan Setiap Bulan:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Cicilan Rumah (KPR/Sewa)
                  </label>
                  <input
                    type="number"
                    step="100000"
                    min="0"
                    value={dsrCicilanRumah}
                    onChange={(e) => setDsrCicilanRumah(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-xs"
                  />
                  <span className="text-[10px] text-slate-500">{formatRupiah(dsrCicilanRumah)}</span>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Cicilan Motor / Mobil
                  </label>
                  <input
                    type="number"
                    step="100000"
                    min="0"
                    value={dsrCicilanKendaraan}
                    onChange={(e) => setDsrCicilanKendaraan(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-xs"
                  />
                  <span className="text-[10px] text-slate-500">{formatRupiah(dsrCicilanKendaraan)}</span>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    Paylater / Pinjaman Lain
                  </label>
                  <input
                    type="number"
                    step="50000"
                    min="0"
                    value={dsrCicilanLainnya}
                    onChange={(e) => setDsrCicilanLainnya(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-xs"
                  />
                  <span className="text-[10px] text-slate-500">{formatRupiah(dsrCicilanLainnya)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#12372A] text-white p-6 sm:p-7 rounded-3xl border border-emerald-900 shadow-xl space-y-5">
              <div>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Hasil Analisis Beban Utang
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl font-black text-white">
                    {rasioDsr.toFixed(1)}%
                  </span>
                  <span className="text-xs text-emerald-200">dari penghasilan</span>
                </div>
                <p className="text-xs text-emerald-200/80 mt-1">
                  Total Cicilan: <strong>{formatRupiah(totalCicilanBulanan)}</strong> / bulan
                </p>
              </div>

              {/* Status Badge & Advice */}
              <div className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-1.5 ${dsrStatus.color}`}>
                <div className="font-black text-sm uppercase tracking-wide">
                  Status: {dsrStatus.label}
                </div>
                <p>{dsrStatus.advice}</p>
              </div>

              <div className="text-[11px] text-emerald-200/80 leading-relaxed space-y-1 border-t border-emerald-800/80 pt-3">
                <span className="font-bold text-white block">Standar Perbankan & OJK:</span>
                <p>
                  Bank dan analis kredit umumnya mensyaratkan rasio cicilan di bawah 30%–35% agar nasabah tidak terjerat gagal bayar saat menghadapi kebutuhan darurat.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
