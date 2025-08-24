import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const loadLang = async () => {
      const savedLang = await AsyncStorage.getItem("appLanguage");
      if (savedLang && savedLang !== language) {
        await i18next.changeLanguage(savedLang);
        setLanguage(savedLang);
      }
    };
    loadLang();
  }, []);

  const toggleLanguage = async () => {
    const newLang = language === "en" ? "te" : "en";
    await i18next.changeLanguage(newLang);
    setLanguage(newLang);
    await AsyncStorage.setItem("appLanguage", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
