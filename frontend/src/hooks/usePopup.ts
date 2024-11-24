import { useRef, useState } from "react";

export function usePopup() {
  const [popupState, setPopupState] = useState(false);

  const openPopup = () => {
    setPopupState(true);
  };

  const closePopup = () => {
    setTimeout(() => {
      setPopupState(false);
    }, 1000);
  };

  return { popupState, openPopup, closePopup };
}
