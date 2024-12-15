import React, { createContext, useEffect, useState } from "react";

export const AppearanceContext = createContext({
  theme: "light",
  lang: "ru",
  toggleTheme: () => {},
  toggleLang: () => {},
});

const AppearanceProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ru");

  useEffect(() => {
    const themeResponse = localStorage.getItem("admin-theme");
    const langResponse = localStorage.getItem("admin-lang");

    if (themeResponse === "light" || themeResponse === "dark") {
      setTheme(themeResponse);
    }
    if (langResponse === "ru" || langResponse === "en") {
      setLang(langResponse);
    }
  }, []);

  const toggleTheme = () => {
    console.log("wanna change theme");
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("admin-theme", newTheme);
    setTheme(newTheme);
  };

  const toggleLang = () => {
    const newLang = lang === "ru" ? "en" : "ru";
    localStorage.setItem("admin-lang", newLang);
    setLang(newLang);
  };

  const value = { theme, lang, toggleTheme, toggleLang };
  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
};

export default AppearanceProvider;
