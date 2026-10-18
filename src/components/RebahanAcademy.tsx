import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Clock, 
  BookOpen, 
  Check, 
  ArrowRight, 
  Filter, 
  Sparkles,
  Building2,
  TrendingUp,
  Compass,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { Article, ArticleCategory } from '../types';
import { ARTICLES_DATA } from '../data/articles';

interface RebahanAcademyProps {
  onOpenArticle: (article: Article) => void;
  readArticleIds: string[];
}

export const RebahanAcademy: React.FC<RebahanAcademyProps> = ({
  onOpenArticle,
  readArticleIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory>('semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: ArticleCategory; label: string }[] = [
    { id: 'semua', label: 'Semua Materi' },
    { id: 'mulai-5-menit', label: 'Mulai 5 Menit' },
    { id: 'mengatur-uang', label: 'Mengatur Uang' },
    { id: 'bank-bi', label: 'Bank & Bank Indonesia' },
    { id: 'lembaga-keuangan', label: 'Lembaga Keuangan' },
    { id: 'investasi-risiko', label: 'Investasi & Risiko' },
  ];

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory =
        activeCategory === 'semua' || article.category === activeCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.keyTakeaway.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalCount = ARTICLES_DATA.length;
  const readCount = readArticleIds.length;
  const progressPercentage = Math.round((readCount / totalCount) * 100);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white shadow-lg space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Rebahan Academy — Pusat Belajar Santai</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Belajar Finansial Tanpa Bikin Pusing
            </h1>
            <p className="text-sm sm:text-base text-purple-100/90 max-w-2xl leading-relaxed">
              Materi 2–3 menit dengan bahasa sehari-hari. Mulai dari mengamankan gaji pertama, cara kerja Bank Indonesia dan OJK, hingga tips menghindari pinjol ilegal.
            </p>
          </div>

          {/* Simple Progress Box */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 min-w-[220px] space-y-2 flex-shrink-0">
            <div className="flex items-center justify-between text-xs">
              <span className="text-purple-200">Progres Membacamu</span>
              <span className="font-extrabold text-white">{readCount} / {totalCount} Materi</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
              <div 
                className="h-full bg-emerald-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-[11px] text-purple-200/80">
              {progressPercentage === 100 
                ? '🎉 Hebat! Seluruh materi telah kamu selesaikan.' 
                : 'Tiap artikel dilengkapi kuis mini untuk uji pemahaman kilat.'}
            </p>
          </div>
        </div>
      </div>

      {/* Mode Guides Quick Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40">
          <div className="font-extrabold text-sm text-purple-900 dark:text-purple-300 flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Mode Rebahan</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Durasi 2–3 menit, analogi kopi dan bakso, bahasa santai, dan satu kesimpulan utama yang mudah diingat.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-900/40">
          <div className="font-extrabold text-sm text-teal-900 dark:text-teal-300 flex items-center gap-2 mb-1">
            <Compass className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>Mode Praktik</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Studi kasus nyata, simulasi anggaran bulanan, batasan cicilan utang, serta cara mengecek SLIK OJK.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
          <div className="font-extrabold text-sm text-blue-900 dark:text-blue-300 flex items-center gap-2 mb-1">
            <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Kenali Lembaga</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Pembedaan ketat mandat BI, OJK, LPS, dan kriteria legalitas fintech tanpa saling tertukar fungsinya.
          </p>
        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari materi (contoh: LPS, bunga majemuk, pinjol, gaji)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Category Tabs (Interactive Segmented Control Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 dark:bg-slate-900/90 rounded-2xl border border-slate-300/60 dark:border-slate-800">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                  isActive
                    ? 'bg-purple-700 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Article Cards Grid */}
      {filteredArticles.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Tidak ada materi yang cocok dengan kata kunci "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('semua');
            }}
            className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
          >
            Tampilkan Seluruh Materi
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredArticles.map((article) => {
            const isRead = readArticleIds.includes(article.id);
            return (
              <div
                key={article.id}
                onClick={() => onOpenArticle(article)}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-200 hover:shadow-lg flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Clean unboxed metadata with typographic separators (Zero-Pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
                    <span className="font-bold text-purple-700 dark:text-purple-400">
                      {article.categoryLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    {isRead && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-0.5">
                          <Check className="w-3 h-3" /> Selesai
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium italic mt-1 line-clamp-1">
                    {article.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-purple-700 dark:text-purple-400">
                  <span className="flex items-center gap-1">
                    <span>Baca & Kuis Mini</span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
