import React, { createContext, useState } from "react";

type ThemeType = "light" | "dark";
type LangType = "ru" | "en";

type AppearanceContextProps = {
  theme: ThemeType;
  lang: LangType;
  toggleTheme: () => void;
};

type AppearanceProviderProps = {
  children: JSX.Element;
};

export const AppearanceContext = createContext<AppearanceContextProps>({
  theme: "light",
  lang: "ru",
  toggleTheme: () => {},
});

const AppearanceProvider: React.FC<AppearanceProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [lang, setLang] = useState<LangType>("ru");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const changeLang = (lang: LangType) => {
    setLang(lang);
  };

  const value: AppearanceContextProps = {
    theme,
    lang,
    toggleTheme,
  };

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
};

export default AppearanceProvider;
