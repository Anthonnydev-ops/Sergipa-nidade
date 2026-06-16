import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './traducoes/locales/en.json';
import translationPT from './traducoes/locales/pt.json';
import translationES from './traducoes/locales/es.json';

const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT },
  es: { translation: translationES }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'pt', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
