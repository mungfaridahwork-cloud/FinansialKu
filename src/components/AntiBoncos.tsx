import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Coffee, 
  Car, 
  Receipt, 
  ShoppingBag, 
  HelpCircle, 
  Lightbulb, 
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';
import { formatRupiah } from '../utils/formatters';

interface ExpenseCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  defaultVal: number;
}

export const AntiBoncos: React.FC = () => {
  // Category breakdown
  const [makanHarian, setMakanHarian] = useState<number>(2000000);
  const [transportasi, setTransportasi] = useState<number>(600000);
  const [tagihanCicilan, setTagihanCicilan] = useState<number>(1800000);
  const [hiburanBelanja, setHiburanBelanja] = useState<number>(900000);

  const totalPengeluaran = makanHarian + transportasi + tagihanCicilan + hiburanBelanja;

  // Latte Factor / Bocor Halus Simulator
  const [bocorItemName, setBocorItemName] = useState<string>('Kopi Susu / Minuman Manis');
  const [bocorNominalPerHari, setBocorNominalPerHari] = useState<number>(25000);
  const [bocorFrekuensiMingguan, setBocorFrekuensiMingguan] = useState<number>(5); // 5 hari seminggu

  const bocorBulanan = Math.round((bocorNominalPerHari * bocorFrekuensiMingguan * 52) / 12);
  const bocorTahunan = bocorNominalPerHari * bocorFrekuensiMingguan * 52;

  const bocorPresets = [
    { name: 'Kopi Susu Kekinian', daily: 25000, days: 5 },
    { name: 'Biaya Ongkir & Flash Sale Iseng', daily: 15000, days: 4 },
    { name: 'Camilan Sore / Boba / Snack', daily: 20000, days: 5 },
    { name: 'Rokok / Pods', daily: 30000, days: 7 },
    { name: 'Langganan Streaming Tak Terpakai', daily: 3000, days: 7 },
  ];

  const handleApplyBocorPreset = (preset: typeof bocorPresets[0]) => {
    setBocorItemName(preset.name);
    setBocorNominalPerHari(preset.daily);
    setBocorFrekuensiMingguan(preset.days);
  };

  const handleResetExpenses = () => {
    setMakanHarian(2000000);
    setTransportasi(600000);
    setTagihanCicilan(1800000);
    setHiburanBelanja(900000);
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-950 via-red-950 to-slate-900 text-white shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-rose-300 uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          <span>Anti Boncos & Detektor Bocor Halus</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Temukan Aliran Uang Tanpa Rasa Bersalah
        </h1>
        <p className="text-sm sm:text-base text-rose-100/90 max-w-2xl leading-relaxed">
          Tujuan simulasi ini bukan melarangmu jajan atau menyuruh hidup menderita. Ini tentang melihat pola pengeluaran dengan sadar agar kamu bisa memilih mana hal yang benar-benar bernilai untukmu.
        </p>
      </div>

      {/* Grid: Expense Estimator & Latte Factor Detector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Monthly Expenses */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Simulasi 4 Pos Pengeluaran Bulanan
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Ketik perkiraan nominal yang biasa kamu keluarkan dalam 30 hari.
              </p>
            </div>
            <button
              onClick={handleResetExpenses}
              className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-4">
            {/* Makan & Kebutuhan Harian */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-emerald-600" />
                <span>1. Makan & Kebutuhan Rumah Tangga (Groceries)</span>
              </label>
              <input
                type="number"
                step="100000"
                min="0"
                value={makanHarian}
                onChange={(e) => setMakanHarian(Number(e.target.value) || 0)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
              />
              <span className="text-[11px] text-slate-500 block">{formatRupiah(makanHarian)} / bulan</span>
            </div>

            {/* Transportasi */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Car className="w-4 h-4 text-blue-600" />
                <span>2. Transportasi (Bensin, Ojol, Kereta, Parkir, Tol)</span>
              </label>
              <input
                type="number"
                step="50000"
                min="0"
                value={transportasi}
                onChange={(e) => setTransportasi(Number(e.target.value) || 0)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
              />
              <span className="text-[11px] text-slate-500 block">{formatRupiah(transportasi)} / bulan</span>
            </div>

            {/* Tagihan & Cicilan */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Receipt className="w-4 h-4 text-amber-600" />
                <span>3. Tagihan Rutin & Cicilan (Sewa, Listrik, WiFi, KPR/Motor)</span>
              </label>
              <input
                type="number"
                step="100000"
                min="0"
                value={tagihanCicilan}
                onChange={(e) => setTagihanCicilan(Number(e.target.value) || 0)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
              />
              <span className="text-[11px] text-slate-500 block">{formatRupiah(tagihanCicilan)} / bulan</span>
            </div>

            {/* Hiburan & Belanja */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-purple-600" />
                <span>4. Hiburan, Jajan, & Belanja Wishlist</span>
              </label>
              <input
                type="number"
                step="50000"
                min="0"
                value={hiburanBelanja}
                onChange={(e) => setHiburanBelanja(Number(e.target.value) || 0)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-[#FBF9F4] dark:bg-slate-950 font-bold text-sm"
              />
              <span className="text-[11px] text-slate-500 block">{formatRupiah(hiburanBelanja)} / bulan</span>
            </div>
          </div>
        </div>

        {/* Expenses Summary & Category Share */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#12372A] text-white p-6 sm:p-7 rounded-3xl border border-emerald-900 shadow-xl space-y-5">
            <div>
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Total Estimasi Pengeluaran
              </span>
              <div className="text-3xl font-black mt-2 text-white">
                {formatRupiah(totalPengeluaran)}
                <span className="text-xs font-normal text-white/70 block mt-0.5">/ bulan</span>
              </div>
            </div>

            {/* Proportion bars */}
            <div className="space-y-2 pt-2 border-t border-emerald-800/80">
              <span className="text-xs font-bold text-emerald-300">Proporsi Pengeluaran:</span>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between text-emerald-100">
                    <span>Makan ({totalPengeluaran > 0 ? Math.round((makanHarian / totalPengeluaran) * 100) : 0}%)</span>
                    <span>{formatRupiah(makanHarian)}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-emerald-900 mt-1">
                    <div 
                      className="bg-emerald-400 h-full rounded-full" 
                      style={{ width: `${totalPengeluaran > 0 ? (makanHarian / totalPengeluaran) * 100 : 0}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-blue-100">
                    <span>Transport ({totalPengeluaran > 0 ? Math.round((transportasi / totalPengeluaran) * 100) : 0}%)</span>
                    <span>{formatRupiah(transportasi)}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-emerald-900 mt-1">
                    <div 
                      className="bg-blue-400 h-full rounded-full" 
                      style={{ width: `${totalPengeluaran > 0 ? (transportasi / totalPengeluaran) * 100 : 0}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-amber-100">
                    <span>Tagihan & Cicilan ({totalPengeluaran > 0 ? Math.round((tagihanCicilan / totalPengeluaran) * 100) : 0}%)</span>
                    <span>{formatRupiah(tagihanCicilan)}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-emerald-900 mt-1">
                    <div 
                      className="bg-amber-400 h-full rounded-full" 
                      style={{ width: `${totalPengeluaran > 0 ? (tagihanCicilan / totalPengeluaran) * 100 : 0}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-purple-100">
                    <span>Hiburan & Jajan ({totalPengeluaran > 0 ? Math.round((hiburanBelanja / totalPengeluaran) * 100) : 0}%)</span>
                    <span>{formatRupiah(hiburanBelanja)}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-emerald-900 mt-1">
                    <div 
                      className="bg-purple-400 h-full rounded-full" 
                      style={{ width: `${totalPengeluaran > 0 ? (hiburanBelanja / totalPengeluaran) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/10 text-xs text-emerald-200/90 leading-relaxed flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Saran Ramah:</strong> Jangan menyalahkan diri sendiri jika ada pos yang membengkak. Cukup jadikan catatan ini sebagai kompas untuk menyesuaikan di minggu berikutnya.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Latte Factor Detector Section */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
            <Coffee className="w-4 h-4" />
            <span>Detektor Bocor Halus (The Latte Factor)</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Lihat Nominal Nyata Pengeluaran Kecil yang Berulang
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Pilih contoh kebiasaan atau masukkan nominal jajan rutinmu:
          </p>
        </div>

        {/* Presets */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {bocorPresets.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => handleApplyBocorPreset(preset)}
              className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-rose-400 dark:hover:border-rose-600 text-left transition-all bg-slate-50 dark:bg-slate-950"
            >
              <span className="block font-bold text-xs text-slate-800 dark:text-slate-200 line-clamp-1">
                {preset.name}
              </span>
              <span className="text-[11px] text-rose-600 dark:text-rose-400 font-semibold mt-1 block">
                {formatRupiah(preset.daily)} ({preset.days}x/mg)
              </span>
            </button>
          ))}
        </div>

        {/* Live inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Nama Kebiasaan / Barang
            </label>
            <input
              type="text"
              value={bocorItemName}
              onChange={(e) => setBocorItemName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Nominal Sekali Beli
            </label>
            <input
              type="number"
              step="5000"
              min="0"
              value={bocorNominalPerHari}
              onChange={(e) => setBocorNominalPerHari(Number(e.target.value) || 0)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold"
            />
            <span className="text-[10px] text-slate-500">{formatRupiah(bocorNominalPerHari)}</span>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Frekuensi Beli dalam Seminggu
            </label>
            <input
              type="number"
              min="1"
              max="7"
              value={bocorFrekuensiMingguan}
              onChange={(e) => setBocorFrekuensiMingguan(Number(e.target.value) || 1)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold"
            />
            <span className="text-[10px] text-slate-500">{bocorFrekuensiMingguan} hari per minggu</span>
          </div>
        </div>

        {/* Comparison Result Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider block">
              Dampak Akumulasi dari "{bocorItemName}"
            </span>
            <div className="text-2xl sm:text-3xl font-black text-rose-950 dark:text-rose-200">
              {formatRupiah(bocorTahunan)} <span className="text-xs font-normal text-rose-700 dark:text-rose-400">/ tahun</span>
            </div>
            <p className="text-xs text-rose-800 dark:text-rose-300">
              Setara dengan <strong>{formatRupiah(bocorBulanan)}</strong> setiap bulannya yang terpotong tanpa terasa.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-800/80 text-xs text-slate-700 dark:text-slate-300 max-w-md leading-relaxed">
            <strong className="block text-slate-900 dark:text-white mb-1">
              Bisa Dialihkan Jadi Apa?
            </strong>
            Nominal <strong>{formatRupiah(bocorTahunan)}</strong> ini cukup untuk membeli <strong>{Math.floor(bocorTahunan / 1300000)} gram emas murni</strong>, tiket pulang-pergi mudik keluarga, atau mengunci 1 bulan dana darurat cadangan hidupmu!
          </div>
        </div>
      </section>
    </div>
  );
};
