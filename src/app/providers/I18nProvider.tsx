import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'np' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    destination: 'Destinations',
    contact: 'Contact',
    heroTitle: 'Your Gateway to Global Education',
    heroSubtitle: 'Expert guidance for studying abroad with comprehensive support',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
  },
  np: {
    home: 'गृह',
    about: 'बारेमा',
    services: 'सेवाहरू',
    destination: 'गन्तव्यहरू',
    contact: 'सम्पर्क',
    heroTitle: 'विश्वव्यापी शिक्षाको लागि तपाईंको प्रवेशद्वार',
    heroSubtitle: 'विदेशमा अध्ययनको लागि विशेषज्ञ मार्गदर्शन र व्यापक सहयोग',
    getStarted: 'सुरु गर्नुहोस्',
    learnMore: 'थप जान्नुहोस्',
    quickLinks: 'द्रुत लिङ्कहरू',
    contactUs: 'हामीलाई सम्पर्क गर्नुहोस्',
    followUs: 'हामीलाई फलो गर्नुहोस्',
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',
  },
  jp: {
    home: 'ホーム',
    about: '私たちについて',
    services: 'サービス',
    destination: '目的地',
    contact: 'お問い合わせ',
    heroTitle: 'グローバル教育へのゲートウェイ',
    heroSubtitle: '留学のための専門的なガイダンスと包括的なサポート',
    getStarted: '始める',
    learnMore: 'もっと詳しく',
    quickLinks: 'クイックリンク',
    contactUs: 'お問い合わせ',
    followUs: 'フォローする',
    allRightsReserved: '全著作権所有。',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
