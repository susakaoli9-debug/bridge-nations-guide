import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'np' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    destination: 'Destinations',
    blog: 'Blog',
    resources: 'Resources',
    news: 'News',
    faq: 'FAQ',
    gallery: 'Gallery',
    
    // Home Page
    heroTitle: 'Your Gateway to Global Education',
    heroSubtitle: 'Expert guidance for studying abroad in top universities worldwide',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    whyChooseUs: 'Why Choose Us',
    expertGuidance: 'Expert Guidance',
    expertGuidanceDesc: 'Professional counselors with years of experience',
    visaSupport: 'Visa Support',
    visaSupportDesc: 'Complete assistance with visa applications',
    careerCounseling: 'Career Counseling',
    careerCounselingDesc: 'Find the perfect course for your future',
    
    // Contact
    contactUs: 'Contact Us',
    getInTouch: 'Get in Touch',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    sendMessage: 'Send Message',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
  },
  np: {
    // Navigation
    home: 'होम',
    about: 'हाम्रो बारे',
    services: 'सेवाहरू',
    contact: 'सम्पर्क',
    destination: 'गन्तव्यहरू',
    blog: 'ब्लग',
    resources: 'स्रोतहरू',
    news: 'समाचार',
    faq: 'प्रश्नहरू',
    gallery: 'ग्यालरी',
    
    // Home Page
    heroTitle: 'विश्वव्यापी शिक्षाको लागि तपाईंको प्रवेशद्वार',
    heroSubtitle: 'विश्वभरका शीर्ष विश्वविद्यालयहरूमा अध्ययनको लागि विशेषज्ञ मार्गदर्शन',
    getStarted: 'सुरु गर्नुहोस्',
    learnMore: 'थप जान्नुहोस्',
    whyChooseUs: 'हामीलाई किन छान्ने',
    expertGuidance: 'विशेषज्ञ मार्गदर्शन',
    expertGuidanceDesc: 'वर्षौंको अनुभव भएका पेशेवर परामर्शदाताहरू',
    visaSupport: 'भिसा सहायता',
    visaSupportDesc: 'भिसा आवेदनमा पूर्ण सहायता',
    careerCounseling: 'करियर परामर्श',
    careerCounselingDesc: 'तपाईंको भविष्यको लागि उत्तम पाठ्यक्रम खोज्नुहोस्',
    
    // Contact
    contactUs: 'हामीलाई सम्पर्क गर्नुहोस्',
    getInTouch: 'सम्पर्कमा रहनुहोस्',
    name: 'नाम',
    email: 'इमेल',
    phone: 'फोन',
    message: 'सन्देश',
    sendMessage: 'सन्देश पठाउनुहोस्',
    
    // Footer
    quickLinks: 'द्रुत लिङ्कहरू',
    followUs: 'हामीलाई फलो गर्नुहोस्',
    allRightsReserved: 'सर्वाधिकार सुरक्षित',
  },
  jp: {
    // Navigation
    home: 'ホーム',
    about: '私たちについて',
    services: 'サービス',
    contact: 'お問い合わせ',
    destination: '留学先',
    blog: 'ブログ',
    resources: 'リソース',
    news: 'ニュース',
    faq: 'よくある質問',
    gallery: 'ギャラリー',
    
    // Home Page
    heroTitle: 'グローバル教育への入口',
    heroSubtitle: '世界トップクラスの大学への留学を専門家がサポート',
    getStarted: '始める',
    learnMore: '詳細を見る',
    whyChooseUs: '選ばれる理由',
    expertGuidance: '専門家のガイダンス',
    expertGuidanceDesc: '長年の経験を持つプロのカウンセラー',
    visaSupport: 'ビザサポート',
    visaSupportDesc: 'ビザ申請の完全サポート',
    careerCounseling: 'キャリアカウンセリング',
    careerCounselingDesc: '将来に最適なコースを見つける',
    
    // Contact
    contactUs: 'お問い合わせ',
    getInTouch: 'ご連絡ください',
    name: '名前',
    email: 'メール',
    phone: '電話',
    message: 'メッセージ',
    sendMessage: '送信',
    
    // Footer
    quickLinks: 'クイックリンク',
    followUs: 'フォロー',
    allRightsReserved: '全著作権所有',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
