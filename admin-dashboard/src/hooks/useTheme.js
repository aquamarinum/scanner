import { useContext } from "react";
import { AppearanceContext } from "../hoc/AppearanceProvider";

export function useTheme() {
  const { theme, toggleTheme } = useContext(AppearanceContext);
  return { theme, toggleTheme };
}
