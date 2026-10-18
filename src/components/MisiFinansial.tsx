import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Sparkles, 
  HeartHandshake, 
  RotateCcw,
  Clock,
  Coins
} from 'lucide-react';
import { Mission, AppTab } from '../types';

interface MisiFinansialProps {
  missions: Mission[];
  onToggleMission: (id: string) => void;
  onResetMissions: () => void;
  setActiveTab: (tab: AppTab) => void;
}

export const MisiFinansial: React.FC<MisiFinansialProps> = ({
  missions,
  onToggleMission,
  onResetMissions,
  setActiveTab,
}) => {
  const completedCount = missions.filter((m) => m.completed).length;
  const totalCount = missions.length;
  const totalPoints = missions.reduce((acc, m) => m.completed ? acc + m.points : acc, 0);
  const maxPoints = missions.reduce((acc, m) => acc + m.points, 0);
  const percentage = Math.round((completedCount / totalCount) * 100);

  const getPositiveMessage = () => {
    if (completedCount === totalCount) {
      return 'Luar biasa! Seluruh misi kebiasaan finansial telah selesai. Kamu membuktikan bahwa melek finansial bisa dijalani dengan riang dan konsisten!';
    } else if (completedCount >= 4) {
      return 'Hebat sekali! Setengah perjalanan sudah kamu lalui. Satu kebiasaan kecil setiap hari akan mengubah masa depan finansialmu secara drastis.';
    } else if (completedCount > 0) {
      return 'Awal yang manis! Setiap centang adalah bukti kamu mulai mengambil kendali atas uangmu sendiri.';
    } else {
      return 'Pilih satu misi termudah hari ini. Tidak ada batas waktu, tidak ada ujian, dan tidak ada tekanan!';
    }
  };

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-900 via-emerald-950 to-slate-900 text-white shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-wider">
              <Award className="w-4 h-4 text-teal-400" />
              <span>Misi Finansialku</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Tantangan Kebiasaan Finansial Positif
            </h1>
            <p className="text-sm sm:text-base text-teal-100/90 max-w-xl leading-relaxed">
              Kemenangan besar dibangun dari langkah-langkah mikro yang dilakukan sambil santai di kasur.
            </p>
          </div>

          {/* Points & Progress Card */}
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 min-w-[200px] text-center space-y-2 flex-shrink-0">
            <span className="text-xs text-teal-200 block">Skor Apresiasi</span>
            <div className="text-3xl font-black text-white flex items-center justify-center gap-1">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>{totalPoints}</span>
              <span className="text-xs text-white/60 font-normal">/ {maxPoints} XP</span>
            </div>
            <span className="text-[11px] text-teal-200/80 block">
              {completedCount} dari {totalCount} Misi Selesai
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-2">
          <div className="w-full h-2.5 rounded-full bg-white/20 overflow-hidden">
            <div 
              className="h-full bg-teal-400 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-teal-200/80">
            <span>{percentage}% Tercapai</span>
            <span className="italic">{getPositiveMessage()}</span>
          </div>
        </div>
      </div>

      {/* Encouragement Notice */}
      <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 text-xs text-teal-950 dark:text-teal-200 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <HeartHandshake className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
          <span>
            <strong>Prinsip Misi Finansialku:</strong> Tidak ada pengurangan nilai, tidak ada hukuman jika terlewat, dan tidak ada rasa bersalah. Jalani dengan tempo ternyamanmu!
          </span>
        </div>
        {completedCount > 0 && (
          <button
            onClick={onResetMissions}
            className="text-[11px] font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 flex-shrink-0"
            title="Mulai ulang semua centang misi"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Missions Checklist List */}
      <div className="space-y-3.5">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className={`p-5 rounded-3xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              mission.completed
                ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div className="flex items-start gap-3.5 flex-1">
              <button
                type="button"
                onClick={() => onToggleMission(mission.id)}
                className="mt-0.5 text-emerald-600 dark:text-emerald-400 focus:outline-none transition-transform active:scale-90"
                aria-label={mission.completed ? 'Batal tandai selesai' : 'Tandai selesai'}
              >
                {mission.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100 dark:fill-emerald-900" />
                ) : (
                  <Circle className="w-6 h-6 text-slate-300 dark:text-slate-700 hover:text-emerald-500" />
                )}
              </button>

              <div className="space-y-1">
                {/* Clean unboxed metadata (Zero-Pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-teal-700 dark:text-teal-400">{mission.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {mission.duration}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">+{mission.points} XP</span>
                </div>

                <h3 className={`font-black text-base text-slate-900 dark:text-white ${
                  mission.completed ? 'line-through opacity-70' : ''
                }`}>
                  {mission.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </div>

            {/* Direct Action Link */}
            {mission.actionTab && (
              <div className="flex-shrink-0 self-end sm:self-center">
                <button
                  onClick={() => setActiveTab(mission.actionTab!)}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-400 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 transition-colors flex items-center gap-1.5 bg-slate-50 dark:bg-slate-950"
                >
                  <span>{mission.actionLabel || 'Coba Sekarang'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
