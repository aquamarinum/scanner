import { useEffect, useState } from "react";

export function useValidation(type: "email" | "password", value: string) {
  const [fallbackMessage, setFallbackMessage] = useState<null | string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value.length === 0) {
        setFallbackMessage(null);
      } else {
        if (type === "email") {
          if (!matchMail()) {
            setFallbackMessage("Bad Email");
          } else {
            setFallbackMessage(null);
          }
        }
        if (type === "password") {
          if (!notShort(4)) {
            setFallbackMessage("Password too short");
            return;
          }
          if (!notLong(20)) {
            setFallbackMessage("Password too long");
            return;
          }
          if (!matchPassword()) {
            setFallbackMessage("Bad password symbols");
            return;
          }
          setFallbackMessage(null);
        }
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  const notShort = (min: number) => {
    if (value.length > min) return true;
    return false;
  };

  const notLong = (max: number) => {
    if (value.length < max) return true;
    return false;
  };

  const matchMail = () => {
    if (value.match(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/)) return true;
    return false;
  };

  const matchPassword = () => {
    if (value.match(/^[a-zA-Z0-9]{5,20}$/)) return true;
    return false;
  };

  return [fallbackMessage];
}
