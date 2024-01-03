import { useState, useEffect } from "react";

export const useLocalStorage = (initialValue, key) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null) return JSON.parse(storedValue);

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
