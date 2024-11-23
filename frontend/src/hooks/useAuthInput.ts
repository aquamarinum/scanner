import { useEffect, useState } from "react";
import {
  ValidationStatuses,
  Validator,
} from "../services/validation/Validator";

export function useAuthInput(initialValue: string, type: "email" | "password") {
  const [inputValue, setValue] = useState(initialValue);
  const [fallbackMessage, setFallbackMessage] = useState(
    ValidationStatuses.CORRECT
  );

  const setInputValue = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue.length === 0) {
        setFallbackMessage(ValidationStatuses.CORRECT);
      } else {
        const AuthValidator = new Validator(inputValue);
        if (type === "email") {
          setFallbackMessage(AuthValidator.matchMail().getStatus());
        }
        if (type === "password") {
          setFallbackMessage(AuthValidator.matchPassword().getStatus());
        }
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return { inputValue, setInputValue, fallbackMessage };
}
