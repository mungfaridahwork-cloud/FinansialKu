import React, { useState } from 'react';
import { 
  CheckCircle2, 
  RotateCcw, 
  HeartHandshake, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Info,
  Compass
} from 'lucide-react';
import { FINANCIAL_HEALTH_QUESTIONS } from '../data/missions';
import { AppTab } from '../types';

interface FinancialHealthCheckProps {
  setActiveTab: (tab: AppTab) => void;
}

export const FinancialHealthCheck: React.FC<FinancialHealthCheckProps> = ({ setActiveTab }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = FINANCIAL_HEALTH_QUESTIONS;
  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
  };

  // Compute total score and personalized reflections
  const totalScore = Object.entries(answers).reduce((acc, [qId, optIdx]) => {
    const q = questions.find((item) => item.id === Number(qId));
    if (q && q.options[optIdx]) {
      return acc + q.options[optIdx].points;
    }
    return acc;
  }, 0);

  const maxPossible = questions.length * 3;
  const percentage = Math.round((totalScore / maxPossible) * 100);

  const getReflectiveSummary = () => {
    if (percentage >= 80) {
      return {
        title: 'Kondisi Finansialmu Sangat Tertata & Matang!',
        tone: 'Kebiasaanmu mencerminkan disiplin tinggi dan kesadaran risiko yang sangat matang.',
        nextStep: 'Kamu siap memperdalam strategi diversifikasi portofolio jangka panjang dan melindungi aset keluarga.',
        actionTab: 'investasi' as AppTab,
        actionLabel: 'Eksplorasi Simulator Investasi',
      };
    } else if (percentage >= 50) {
      return {
        title: 'Arah yang Sangat Positif & Berprogres Baik!',
        tone: 'Kamu sudah memiliki fondasi dan kesadaran dasar yang sehat. Ada beberapa celah kecil seperti penguncian dana darurat atau porsi cicilan yang bisa diperkuat.',
        nextStep: 'Fokuskan energi untuk menuntaskan dana darurat minimal 3 bulan dan menjaga rasio cicilan di bawah 30%.',
        actionTab: 'kalkulator' as AppTab,
        actionLabel: 'Hitung Target Dana Darurat',
      };
    } else {
      return {
        title: 'Langkah Awal yang Jujur & Sangat Berharga!',
        tone: 'Mengetahui kondisi nyata saat ini tanpa menghakimi diri sendiri adalah keberanian luar biasa. Tidak ada kata terlambat untuk mulai merapikan keuangan.',
        nextStep: 'Mulailah dari hal termudah: buat aturan jeda 24 jam saat gajian dan pantau 1 pos bocor halus mingguan.',
        actionTab: 'academy' as AppTab,
        actionLabel: 'Baca Panduan Gaji Pertama',
      };
    }
  };

  const summary = getReflectiveSummary();

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-900 via-emerald-950 to-slate-900 text-white shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-wider">
          <HeartHandshake className="w-4 h-4 text-teal-400" />
          <span>Cek Kondisi Keuangan Pribadi</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          Cermin Refleksi Finansial yang Ramah & Hangat
        </h1>
        <p className="text-sm sm:text-base text-teal-100/90 max-w-2xl leading-relaxed">
          Kuis 3 menit ini bukan penilaian kelayakan kredit atau vonis bank. Ini adalah teman bincang untuk membantumu melihat kebiasaan uangmu secara objektif.
        </p>
      </div>

      {!isCompleted ? (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-3">
            <span>
              Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
            </span>
            <div className="flex items-center gap-1">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-6 h-1.5 rounded-full transition-all ${
                    idx === currentQuestionIndex
                      ? 'bg-teal-600 dark:bg-teal-400'
                      : answers[questions[idx].id] !== undefined
                      ? 'bg-emerald-300 dark:bg-emerald-700'
                      : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Current Question */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
              {currentQ.question}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {currentQ.subtext}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt, idx) => {
              const isSelected = answers[currentQ.id] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(currentQ.id, idx)}
                  className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/40 text-teal-950 dark:text-teal-100 font-semibold shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-950 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center border text-xs font-bold mt-0.5 ${
                    isSelected 
                      ? 'border-teal-600 bg-teal-600 text-white' 
                      : 'border-slate-300 dark:border-slate-700'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <div className="space-y-1 flex-1">
                    <span className="block leading-relaxed">{opt.label}</span>
                    {isSelected && (
                      <p className="text-xs text-teal-700 dark:text-teal-300 font-normal pt-1 border-t border-teal-200/50 dark:border-teal-800/50">
                        💡 {opt.tip}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Nav Buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 disabled:opacity-30 disabled:pointer-events-none"
            >
              Sebelumnya
            </button>

            <button
              onClick={handleNext}
              disabled={answers[currentQ.id] === undefined}
              className="px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-bold transition-all disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5"
            >
              <span>{currentQuestionIndex === questions.length - 1 ? 'Lihat Hasil Refleksi' : 'Lanjut'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
              <div>
                <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
                  Hasil Refleksi Keuangan
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {summary.title}
                </h2>
              </div>
              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 self-start"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Kuis</span>
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {summary.tone}
            </p>

            <div className="p-5 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 space-y-2">
              <span className="text-xs font-extrabold text-teal-800 dark:text-teal-300 uppercase tracking-wider block">
                Langkah Praktis Rekomendasi Selanjutnya:
              </span>
              <p className="text-xs sm:text-sm text-teal-950 dark:text-teal-100 leading-relaxed font-medium">
                {summary.nextStep}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab(summary.actionTab)}
                  className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <span>{summary.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Breakdown of Question Responses & Tips */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                Catatan Refleksi Berdasarkan Jawabanmu:
              </h3>
              <div className="space-y-3">
                {questions.map((q) => {
                  const userChoiceIdx = answers[q.id];
                  const chosenOpt = userChoiceIdx !== undefined ? q.options[userChoiceIdx] : null;
                  if (!chosenOpt) return null;
                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 text-xs space-y-1.5"
                    >
                      <div className="font-bold text-slate-900 dark:text-white">
                        {q.question}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        Jawabanmu: <span className="font-semibold text-teal-700 dark:text-teal-400">"{chosenOpt.label}"</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 pt-1 border-t border-slate-200/60 dark:border-slate-800">
                        💡 {chosenOpt.tip}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Non-judgmental & Legal Disclaimer Notice */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 text-xs text-slate-500 leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-400" />
              <span>
                <strong>Penafian Edukatif:</strong> Kuis ini murni alat bantu refleksi diri untuk meningkatkan kesadaran finansial mandiri. Hasil di atas bukan merupakan penilaian skor kredit resmi, diagnosis kesehatan keuangan berlisensi, atau jaminan kelayakan pinjaman perbankan.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
