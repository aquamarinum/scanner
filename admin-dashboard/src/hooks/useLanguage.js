import { useContext } from "react";
import { AppearanceContext } from "../hoc/AppearanceProvider";

export function useLanguage() {
  const { lang, toggleLang } = useContext(AppearanceContext);
  return { lang, toggleLang };
}
