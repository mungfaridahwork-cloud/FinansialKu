import React, { useState, useEffect } from 'react';
import { AppTab, Article, Mission } from './types';
import { ARTICLES_DATA } from './data/articles';
import { INITIAL_MISSIONS } from './data/missions';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { RebahanAcademy } from './components/RebahanAcademy';
import { GajianCalculator } from './components/GajianCalculator';
import { InvestasiSimulator } from './components/InvestasiSimulator';
import { FinancialHealthCheck } from './components/FinancialHealthCheck';
import { AntiBoncos } from './components/AntiBoncos';
import { KamusFinansial } from './components/KamusFinansial';
import { MisiFinansial } from './components/MisiFinansial';
import { FinansialKuPro } from './components/FinansialKuPro';
import { ArticleModal } from './components/ArticleModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('beranda');
  const [activeArticleModal, setActiveArticleModal] = useState<Article | null>(null);

  // Dark mode with localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('finansialku_dark_mode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('finansialku_dark_mode', JSON.stringify(darkMode));
    } catch (e) {
      console.error(e);
    }
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Read articles tracking with localStorage
  const [readArticleIds, setReadArticleIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('finansialku_read_articles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleMarkAsRead = (articleId: string) => {
    setReadArticleIds((prev) => {
      if (prev.includes(articleId)) return prev;
      const next = [...prev, articleId];
      try {
        localStorage.setItem('finansialku_read_articles', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  // Missions tracking with localStorage
  const [missions, setMissions] = useState<Mission[]>(() => {
    try {
      const saved = localStorage.getItem('finansialku_missions');
      if (saved) {
        const savedIds: string[] = JSON.parse(saved);
        return INITIAL_MISSIONS.map((m) => ({
          ...m,
          completed: savedIds.includes(m.id),
        }));
      }
    } catch {
      // fallback
    }
    return INITIAL_MISSIONS;
  });

  const handleToggleMission = (id: string) => {
    setMissions((prev) => {
      const updated = prev.map((m) =>
        m.id === id ? { ...m, completed: !m.completed } : m
      );
      try {
        const completedIds = updated.filter((m) => m.completed).map((m) => m.id);
        localStorage.setItem('finansialku_missions', JSON.stringify(completedIds));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleResetMissions = () => {
    const reset = INITIAL_MISSIONS.map((m) => ({ ...m, completed: false }));
    setMissions(reset);
    try {
      localStorage.removeItem('finansialku_missions');
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenArticle = (article: Article) => {
    setActiveArticleModal(article);
  };

  const handleOpenArticleById = (articleId: string) => {
    const found = ARTICLES_DATA.find((a) => a.id === articleId);
    if (found) {
      setActiveArticleModal(found);
    } else {
      setActiveTab('academy');
    }
  };

  const completedMissionsCount = missions.filter((m) => m.completed).length;

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F4] dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        completedMissionsCount={completedMissionsCount}
        readArticlesCount={readArticleIds.length}
      />

      {/* Main Content View Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8">
        {activeTab === 'beranda' && (
          <HomeView
            setActiveTab={setActiveTab}
            onOpenArticle={handleOpenArticle}
            completedMissionsCount={completedMissionsCount}
            readArticlesCount={readArticleIds.length}
          />
        )}

        {activeTab === 'academy' && (
          <RebahanAcademy
            onOpenArticle={handleOpenArticle}
            readArticleIds={readArticleIds}
          />
        )}

        {activeTab === 'kalkulator' && <GajianCalculator />}

        {activeTab === 'investasi' && <InvestasiSimulator />}

        {activeTab === 'cek-keuangan' && (
          <FinancialHealthCheck setActiveTab={setActiveTab} />
        )}

        {activeTab === 'anti-boncos' && <AntiBoncos />}

        {activeTab === 'kamus' && (
          <KamusFinansial onOpenArticleById={handleOpenArticleById} />
        )}

        {activeTab === 'misi' && (
          <MisiFinansial
            missions={missions}
            onToggleMission={handleToggleMission}
            onResetMissions={handleResetMissions}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'pro' && <FinansialKuPro />}
      </main>

      {/* Article Reader Modal */}
      {activeArticleModal && (
        <ArticleModal
          article={activeArticleModal}
          onClose={() => setActiveArticleModal(null)}
          onNextArticle={(next) => setActiveArticleModal(next)}
          allArticles={ARTICLES_DATA}
          isRead={readArticleIds.includes(activeArticleModal.id)}
          onMarkAsRead={handleMarkAsRead}
        />
      )}

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
