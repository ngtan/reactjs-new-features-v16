import { useState, useEffect } from 'react';

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === targetKey) {
      setKeyPressed(true);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === targetKey) {
      setKeyPressed(false);
    }
  };

  useWindowEventListener('keydown', handleKeyDown);
  useWindowEventListener('keyup', handleKeyUp);

  return keyPressed;
}

function useWindowEventListener(type, listener) {
  useEffect(() => {
    window.addEventListener(type, listener);

    return () => {
      window.removeEventListener(type, listener);
    };
  }, []);
}

export default useKeyPress;
