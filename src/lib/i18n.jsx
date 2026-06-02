import React, { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'id', label: 'Indonesia', flag: 'ID' },
  { code: 'zh', label: 'Chinese', flag: 'ZH' },
  { code: 'ar', label: 'Arabic', flag: 'AR' },
];

const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      commodities: 'Commodities',
      capabilities: 'Capabilities',
      markets: 'Markets',
      compliance: 'Compliance',
      insights: 'Insights',
      investor: 'Investor',
    },
    footer: {
      overview: 'Cross-border commodity platform for sourcing, compliance, documentation, and execution.',
      navigation: 'Navigation',
      contact_heading: 'Contact',
      legal: 'Legal',
      compliance_link: 'Compliance',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'Copyright 2026 Meridian Global Trading. All rights reserved.',
    },
  },
};

function getNestedValue(obj, key) {
  return key.split('.').reduce((acc, current) => (acc && acc[current] !== undefined ? acc[current] : undefined), obj);
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const value = useMemo(() => {
    const t = (key) => {
      const current = TRANSLATIONS[language] || TRANSLATIONS.en;
      return getNestedValue(current, key) || getNestedValue(TRANSLATIONS.en, key) || key;
    };

    return {
      language,
      setLanguage,
      t,
      languages: LANGUAGES,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
