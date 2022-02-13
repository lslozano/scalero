import { useState, useEffect} from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const savedData = localStorage.getItem(key);

    return savedData !== null
      ? JSON.parse(savedData)
      : defaultValue;
  });

  useEffect(() => {
    const stringData = JSON.stringify(value);
    localStorage.setItem(key, stringData);
  }, [key, value])

  return [value, setValue];
};