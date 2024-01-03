import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEnglish from "./en/config.json";
import translationSpanish from "./es/config.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "es",
    debug: false,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: translationEnglish,
      },
      es: {
        translation: translationSpanish,
      },
    },
  });

export default i18n;
