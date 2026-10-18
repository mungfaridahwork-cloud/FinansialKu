import React, { useState } from 'react';
import { AppTab } from '../types';
import { 
  BookOpen, 
  Calculator, 
  TrendingUp, 
  CheckCircle2, 
  ShieldAlert, 
  Bookmark, 
  Award, 
  Sparkles, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Coffee,
  HeartHandshake
} from 'lucide-react';

interface NavbarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  completedMissionsCount: number;
  readArticlesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  completedMissionsCount,
  readArticlesCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: AppTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'beranda', label: 'Beranda', icon: <Coffee className="w-4 h-4" /> },
    { id: 'academy', label: 'Rebahan Academy', icon: <BookOpen className="w-4 h-4" />, badge: readArticlesCount > 0 ? `${readArticlesCount}` : undefined },
    { id: 'kalkulator', label: 'Gajian Calculator', icon: <Calculator className="w-4 h-4" /> },
    { id: 'investasi', label: 'Investasi', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'cek-keuangan', label: 'Cek Keuangan', icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: 'anti-boncos', label: 'Anti Boncos', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'kamus', label: 'Kamus Finansial', icon: <Bookmark className="w-4 h-4" /> },
    { id: 'misi', label: 'Misi Finansialku', icon: <Award className="w-4 h-4" />, badge: completedMissionsCount > 0 ? `${completedMissionsCount}/8` : undefined },
    { id: 'pro', label: 'FinansialKu Pro', icon: <Sparkles className="w-4 h-4" />, badge: 'Konsep' },
  ];

  const handleNavClick = (tab: AppTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 transition-colors duration-200 border-b border-emerald-950/20 bg-[#12372A] text-white shadow-md">
      {/* Top Banner Notice */}
      <div className="bg-[#0b221a] px-4 py-1.5 text-xs text-emerald-200/90 border-b border-emerald-900/60 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Literasi Keuangan Independen & Ramah Pemula — Rujukan Resmi BI, OJK & LPS</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-emerald-300/80">
            <span>Situs Edukatif & Interaktif</span>
            <span>·</span>
            <span>Bebas Tekanan, Bebas Menghakimi</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-[#12372A] font-bold text-xl shadow-inner group-hover:scale-105 transition-transform">
              FK
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                  FinansialKu<span className="text-emerald-400">.com</span>
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/80 font-medium tracking-normal -mt-0.5">
                Melek Finansial Sambil Rebahan
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-150 ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-sm ring-1 ring-emerald-600/50'
                      : 'text-emerald-100 hover:text-white hover:bg-emerald-900/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                      item.badge === 'Konsep' 
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' 
                        : 'bg-emerald-700 text-emerald-100'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Ganti Tema Terang/Gelap"
              className="p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900/60 transition-colors"
              title={darkMode ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Quick action button */}
            <button
              onClick={() => handleNavClick('kalkulator')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs shadow transition-all transform active:scale-95"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Simulasi Cepat</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900/60"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e2c21] border-t border-emerald-900 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-800 text-white border-l-4 border-emerald-400'
                      : 'text-emerald-100 hover:bg-emerald-900/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-700/80 text-emerald-100">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-emerald-900/80 flex items-center justify-between text-xs text-emerald-300">
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              <span>Belajar santai, tanpa beban.</span>
            </span>
            <span>Materi Terbaca: {readArticlesCount}</span>
          </div>
        </div>
      )}
    </header>
  );
};
