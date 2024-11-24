import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string) {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    try {
      const json = localStorage.getItem(key);
      return json ? JSON.parse(json) : null;
    } catch (error) {
      console.error("[ERROR] ERROR WHILE READING LOCAL STORAGE");
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("[ERROR] ERROR WHILE UPDATING LOCAL STORAGE");
    }
  }, [storedValue]);

  return [storedValue, setStoredValue] as const;
}
