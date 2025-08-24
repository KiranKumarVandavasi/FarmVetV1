// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "expo-localization";

import en from "./en.json";
import te from "./te.json";

const resources = {
  te: { translation: te },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: RNLocalize.getLocales()[0].languageCode,
  fallbackLng: "te",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
