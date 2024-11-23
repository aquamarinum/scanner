import { useEffect, useState } from "react";
import { ValidationStatuses } from "../services/validation/Validator";

export function useAuthInput(
  initialValue: string,
  validator: (str: string) => ValidationStatuses
) {
  const [inputValue, setValue] = useState(initialValue);
  const [fallbackMessage, setFallbackMessage] = useState(
    ValidationStatuses.CORRECT
  );

  const setInputValue = (newValue: string) => {
    setInputValue(newValue);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue.length === 0) {
        setFallbackMessage(ValidationStatuses.CORRECT);
      } else {
        setFallbackMessage(validator(inputValue));
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return { inputValue, setInputValue, fallbackMessage };
}
