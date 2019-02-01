// Based on https://usehooks.com/useLocalStorage/

import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [item, setInnerValue] = useState(() => {
    try {
      return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    setInnerValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [item, setValue];
}

