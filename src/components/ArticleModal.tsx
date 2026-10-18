import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Check, 
  AlertCircle,
  Lightbulb,
  Compass
} from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
  onNextArticle?: (next: Article) => void;
  allArticles: Article[];
  isRead: boolean;
  onMarkAsRead: (articleId: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onNextArticle,
  allArticles,
  isRead,
  onMarkAsRead,
}) => {
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id && (a.category === article.category || a.mode === article.mode))
    .slice(0, 2);

  const handleQuizOptionClick = (index: number) => {
    setSelectedQuizAnswer(index);
    setQuizSubmitted(true);
    if (!isRead) {
      onMarkAsRead(article.id);
    }
  };

  const handleCompleteRead = () => {
    if (!isRead) {
      onMarkAsRead(article.id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative w-full max-w-3xl bg-[#FBF9F4] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="p-4 sm:px-6 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-emerald-700 dark:text-emerald-400">
              {article.categoryLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime} baca
            </span>
            {isRead && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Sudah Dibaca
                </span>
              </>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Tutup artikel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Title Area */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
              {article.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium italic border-l-4 border-emerald-500 pl-3">
              {article.tagline}
            </p>
          </div>

          {/* Intro Box */}
          <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed bg-white dark:bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            {article.content.intro}
          </div>

          {/* Structured Sections */}
          <div className="space-y-6">
            {article.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-emerald-600 rounded-full inline-block" />
                  <span>{sec.heading}</span>
                </h2>
                <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  {sec.body}
                </div>
                {sec.analogyOrExample && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold block mb-0.5">Analogi Sehari-hari:</span>
                      <span>{sec.analogyOrExample}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* "Yang Perlu Diingat" / Key Takeaway */}
          <div className="p-5 rounded-2xl bg-[#12372A] text-white border border-emerald-900 space-y-2">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Yang Perlu Diingat (Intinya)</span>
            </div>
            <p className="text-sm sm:text-base text-emerald-50 font-medium leading-relaxed">
              {article.keyTakeaway}
            </p>
          </div>

          {/* Actionable Step (Coba Sekarang) */}
          {article.actionableStep && (
            <div className="p-5 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 space-y-2">
              <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Coba Sekarang (Langkah Praktis)</span>
              </div>
              <p className="text-xs sm:text-sm text-teal-950 dark:text-teal-100 leading-relaxed font-medium">
                {article.actionableStep}
              </p>
            </div>
          )}

          {/* Reflection Question */}
          {article.reflectionQuestion && (
            <div className="p-5 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 space-y-2">
              <div className="flex items-center gap-2 text-purple-800 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Pertanyaan Refleksi Dirimu</span>
              </div>
              <p className="text-xs sm:text-sm text-purple-950 dark:text-purple-100 italic leading-relaxed">
                "{article.reflectionQuestion}"
              </p>
            </div>
          )}

          {/* Interactive Mini Quiz */}
          {article.quiz && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Kuis Mini (Uji Pemahaman Cepat)</span>
                </div>
                <span className="text-xs text-slate-400">1 Pertanyaan</span>
              </div>

              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                {article.quiz.question}
              </h3>

              <div className="space-y-2">
                {article.quiz.options.map((opt, idx) => {
                  const isSelected = selectedQuizAnswer === idx;
                  const isCorrect = idx === article.quiz?.correctIndex;
                  let optStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900 text-slate-800 dark:text-slate-200';
                  
                  if (quizSubmitted) {
                    if (isCorrect) {
                      optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 font-medium';
                    } else if (isSelected && !isCorrect) {
                      optStyle = 'border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleQuizOptionClick(idx)}
                      disabled={quizSubmitted}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${optStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border text-xs font-bold mt-0.5 border-slate-300 dark:border-slate-700">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 leading-relaxed">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {quizSubmitted && (
                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
                  <span className="font-bold block text-slate-900 dark:text-white">
                    {selectedQuizAnswer === article.quiz.correctIndex ? '🎉 Jawabanmu Benar!' : '💡 Penjelasan:'}
                  </span>
                  <p className="leading-relaxed">{article.quiz.explanation}</p>
                </div>
              )}
            </div>
          )}

          {/* Official Source Reference Box */}
          {article.officialSource && (
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">
                  Sumber Primer & Regulasi Resmi:
                </span>
                <p className="leading-relaxed">
                  {article.officialSource.name} — {article.officialSource.description} (Diverifikasi {article.officialSource.verifiedYear})
                </p>
              </div>
              <a
                href={article.officialSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1 flex-shrink-0"
              >
                <span>Lihat Regulasi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Related Articles Suggestions */}
          {relatedArticles.length > 0 && onNextArticle && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Materi Lanjutan yang Relevan:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedArticles.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => {
                      onNextArticle(rel);
                      setSelectedQuizAnswer(null);
                      setQuizSubmitted(false);
                    }}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-400 text-left bg-white dark:bg-slate-950 group transition-all"
                  >
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1">
                      {rel.categoryLabel} · {rel.readTime}
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 line-clamp-1">
                      {rel.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={handleCompleteRead}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isRead 
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300' 
                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{isRead ? 'Telah Ditandai Selesai' : 'Tandai Selesai Membaca'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-bold transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
