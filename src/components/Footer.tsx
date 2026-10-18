import React from 'react';
import { ExternalLink, ShieldCheck, BookOpen, AlertCircle, Sparkles } from 'lucide-react';
import { AppTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: AppTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const officialInstitutions = [
    {
      name: 'Bank Indonesia (BI)',
      role: 'Bank Sentral RI: Stabilitas Moneter & Sistem Pembayaran (QRIS, BI-FAST)',
      url: 'https://www.bi.go.id',
    },
    {
      name: 'Otoritas Jasa Keuangan (OJK)',
      role: 'Pengawasan Perbankan, Pasar Modal, IKNB, Fintech & Perlindungan Konsumen (Kontak 157)',
      url: 'https://www.ojk.go.id',
    },
    {
      name: 'Lembaga Penjamin Simpanan (LPS)',
      role: 'Penjaminan Simpanan Perbankan hingga Rp2 Miliar per Nasabah per Bank (Syarat 3T)',
      url: 'https://www.lps.go.id',
    },
    {
      name: 'Kementerian Keuangan RI',
      role: 'Penerbit Resmi Surat Berharga Negara (SBN Ritel: ORI, Sukuk Ritel, SBR, ST)',
      url: 'https://www.kemenkeu.go.id',
    },
    {
      name: 'Bursa Efek Indonesia (IDX)',
      role: 'Fasilitator Perdagangan Saham, Obligasi, dan Efek Pasar Modal Indonesia',
      url: 'https://www.idx.co.id',
    },
    {
      name: 'Badan Pusat Statistik (BPS)',
      role: 'Data Resmi Inflasi, Produk Domestik Bruto (PDB), dan Indikator Ekonomi Nasional',
      url: 'https://www.bps.go.id',
    },
  ];

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-[#F4F1EA] dark:bg-slate-950 text-slate-700 dark:text-slate-300 transition-colors">
      {/* Official Sources Bar */}
      <div className="bg-[#12372A] text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm tracking-wide uppercase">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Rujukan Resmi & Kepatuhan Informasi</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mt-1">
                Transparansi Sumber Primer Indonesia
              </h3>
            </div>
            <p className="text-xs text-emerald-200/80 max-w-lg leading-relaxed">
              Seluruh materi hukum, tugas kelembagaan, regulasi suku bunga acuan, batas penjaminan, dan perlindungan konsumen disusun mengacu pada kanal dan undang-undang resmi Republik Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {officialInstitutions.map((inst) => (
              <a
                key={inst.name}
                href={inst.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-emerald-900/50 hover:bg-emerald-900 border border-emerald-800/80 transition-all flex items-start justify-between gap-2"
              >
                <div>
                  <div className="font-bold text-sm text-emerald-200 group-hover:text-emerald-100 flex items-center gap-1.5">
                    <span>{inst.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </div>
                  <p className="text-xs text-emerald-300/70 mt-1 line-clamp-2 leading-relaxed">
                    {inst.role}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white font-bold text-lg flex items-center justify-center">
                FK
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                FinansialKu<span className="text-emerald-600 dark:text-emerald-400">.com</span>
              </span>
            </div>
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
              “Melek Finansial Sambil Rebahan.”
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              Platform edukasi literasi keuangan Indonesia: mempermudah pemahaman uang, perbankan, anggaran, dan investasi secara santai, praktis, dan ramah pemula.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Fitur Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('academy')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Rebahan Academy (Semua Mode)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('kalkulator')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Gajian Calculator (50/30/20 & Cicilan)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('investasi')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Investasi Tanpa Pusing (Simulasi)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('cek-keuangan')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Cek Kondisi Keuangan (Kuis 3 Menit)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('anti-boncos')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Anti Boncos (Detektor Latte Factor)
                </button>
              </li>
            </ul>
          </div>

          {/* Educational Sections */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Pusat Belajar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('academy')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Mode 5 Menit (Cepat Paham)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('academy')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Bank Indonesia & Bank Umum
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('academy')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Pengawasan OJK & Perlindungan
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('academy')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Penjaminan Simpanan LPS (3T)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('kamus')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Glosarium / Kamus Finansial
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Transparency */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Misi & Komitmen
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
              Kami percaya tidak ada kata terlambat untuk melek finansial. Tidak ada penghakiman atas kondisi awalmu—setiap langkah kecil adalah kemenangan.
            </p>
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
              <span className="font-bold block mb-1">Misi Finansialku Aktif</span>
              <span>Selesaikan tantangan harian untuk melatih kebiasaan keuangan yang sehat tanpa stres.</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-700 dark:text-slate-200">
                Pernyataan Kepatuhan & Penafian Tanggung Jawab (Disclaimer):
              </span>{' '}
              FinansialKu.com adalah platform media edukasi dan literasi keuangan independen. Seluruh konten, artikel, simulasi, kalkulator, dan kuis disajikan murni untuk tujuan edukasi dan informasi umum, serta TIDAK dimaksudkan sebagai nasihat keuangan personal, saran hukum perpajakan, rekomendasi saham/investasi spesifik, atau penawaran produk dari lembaga jasa keuangan mana pun. Perhitungan simulasi menggunakan asumsi ilustratif yang dapat berbeda dengan hasil riil. Pembaca disarankan berkonsultasi dengan perencana keuangan berlisensi atau institusi resmi sebelum mengambil keputusan finansial bernilai besar.
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} FinansialKu.com. Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-4">
            <span>Indonesia Financial Literacy Project</span>
            <span>·</span>
            <span>Ramah Pemula</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
