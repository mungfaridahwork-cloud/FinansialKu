export type AppTab = 
  | 'beranda' 
  | 'academy' 
  | 'kalkulator' 
  | 'investasi' 
  | 'cek-keuangan' 
  | 'anti-boncos' 
  | 'kamus' 
  | 'misi'
  | 'pro';

export type ArticleCategory = 
  | 'semua'
  | 'mulai-5-menit'
  | 'mengatur-uang'
  | 'bank-bi'
  | 'lembaga-keuangan'
  | 'investasi-risiko';

export interface OfficialSource {
  name: string;
  url: string;
  description: string;
  verifiedYear: string;
}

export interface MiniQuiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Article {
  id: string;
  title: string;
  category: ArticleCategory;
  categoryLabel: string;
  mode: 'rebahan' | 'praktik' | 'lembaga' | 'investasi';
  readTime: string;
  tagline: string;
  summary: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      analogyOrExample?: string;
    }[];
  };
  keyTakeaway: string;
  actionableStep?: string;
  reflectionQuestion?: string;
  quiz?: MiniQuiz;
  officialSource?: OfficialSource;
}

export interface DictionaryTerm {
  id: string;
  term: string;
  category: 'Dasar' | 'Perbankan' | 'Investasi' | 'Regulasi & Lembaga' | 'Utang & Risiko';
  definition: string;
  example: string;
  relatedArticleId?: string;
  officialRef?: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'Edukasi' | 'Cek Rekening' | 'Tabungan' | 'Waspada' | 'Anggaran';
  points: number;
  completed: boolean;
  actionTab?: AppTab;
  actionLabel?: string;
}

export interface FinancialCheckQuestion {
  id: number;
  question: string;
  subtext: string;
  options: {
    label: string;
    points: number;
    tip: string;
  }[];
}
