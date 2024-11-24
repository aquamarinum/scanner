import { useRef, useState } from "react";

export function usePopup(initialState: boolean = false) {
  const [popupState, setPopupState] = useState(initialState);

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
