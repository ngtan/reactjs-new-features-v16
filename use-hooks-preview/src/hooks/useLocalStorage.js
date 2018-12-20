import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [item, setItem] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);

      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    setItem(value);
    window.localStorage.setItem(key, JSON.stringify(item));
  };

  return [item, setValue];
}
