import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-lg z-50"
      aria-label={`Switch to ${i18n.language === 'en' ? 'German' : 'English'}`}
    >
      {i18n.language === 'en' ? '🇩🇪 DE' : '🇬🇧 EN'}
    </button>
  );
};

export default LanguageSwitcher;
