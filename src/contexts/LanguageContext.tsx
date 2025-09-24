import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'UA' | 'EN';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem('lang');

    if (savedLang) return savedLang as Language;

    return 'UA';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'UA' ? 'EN' : 'UA'));
  };

  return <LanguageContext.Provider value={{ lang, toggleLang }}>{children}</LanguageContext.Provider>;
}

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
