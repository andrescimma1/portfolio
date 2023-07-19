import React, { createContext, useState } from "react";

// Crea el contexto
export const GlobalContext = createContext();

// Crea el proveedor del contexto
export const ContextProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  const testLanguage = (obj) => {
    return obj[language]
  }

  const handleButtonClick = (targetElement) => {
    setIsScrolled(true);

    // Scroll automático hacia el elemento deseado
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <GlobalContext.Provider value={{ isScrolled, handleButtonClick, testLanguage, toggleLanguage, language}}>
      {children}
    </GlobalContext.Provider>
  );
};
