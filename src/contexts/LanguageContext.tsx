import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<any>(null);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic((prevIsArabic) => !prevIsArabic);
  };

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
