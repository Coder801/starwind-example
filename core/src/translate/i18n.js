import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { enTranslations } from './translations/en';
import { uaTranslations } from './translations/ua';

const resources = {
  en: enTranslations,
  ua: uaTranslations
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ua',
    fallbackLng: ['en'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
