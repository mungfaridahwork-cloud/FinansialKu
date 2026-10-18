import React, { useState, useMemo } from 'react';
import { 
  Bookmark, 
  Search, 
  ExternalLink, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  Tag
} from 'lucide-react';
import { DICTIONARY_DATA } from '../data/dictionary';
import { DictionaryTerm, Article } from '../types';
import { ARTICLES_DATA } from '../data/articles';

interface KamusFinansialProps {
  onOpenArticleById: (articleId: string) => void;
}

export const KamusFinansial: React.FC<KamusFinansialProps> = ({ onOpenArticleById }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Dasar', 'Perbankan', 'Investasi', 'Regulasi & Lembaga', 'Utang & Risiko'];

  const filteredTerms = useMemo(() => {
    return DICTIONARY_DATA.filter((term) => {
      const matchesCat = selectedCategory === 'Semua' || term.category === selectedCategory;
      const matchesSearch =
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.example.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 text-white shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
          <Bookmark className="w-4 h-4 text-emerald-400" />
          <span>Kamus Finansial Santai</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Glosarium Bahasa Manusia Biasa
        </h1>
        <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl leading-relaxed">
          Kumpulan istilah perbankan, regulasi BI & OJK, dan pasar modal yang diterjemahkan dengan analogi sehari-hari tanpa bahasa rumit.
        </p>
      </div>

      {/* Search & Categories */}
      <div className="space-y-4">
        <div className="relative max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari istilah finansial (contoh: BI-Rate, 3T, Inflasi, Likuiditas)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
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

        {/* Categories (Clean segmented button controls) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 dark:bg-slate-900/90 rounded-2xl border border-slate-300/60 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-300/40 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dictionary Terms Grid */}
      {filteredTerms.length === 0 ? (
        <div className="p-10 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <p className="text-xs sm:text-sm text-slate-500">
            Tidak ditemukan istilah yang cocok dengan "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Semua');
            }}
            className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            Tampilkan Seluruh Istilah
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTerms.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Clean unboxed metadata (Zero-Pill discipline) */}
                  <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  {item.officialRef && (
                    <span className="text-[11px] text-slate-400 truncate max-w-[200px]" title={item.officialRef}>
                      {item.officialRef}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug">
                  {item.term}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.definition}
                </p>

                {/* Everyday Example */}
                <div className="p-3.5 rounded-2xl bg-[#FBF9F4] dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-slate-200 block">
                    Contoh Sehari-hari:
                  </span>
                  <p className="leading-relaxed italic">
                    "{item.example}"
                  </p>
                </div>
              </div>

              {/* Link to related article */}
              {item.relatedArticleId && (
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Materi Terkait di Rebahan Academy</span>
                  <button
                    onClick={() => onOpenArticleById(item.relatedArticleId!)}
                    className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>Baca Artikel</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
