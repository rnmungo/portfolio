import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [dark, setDark] = useState(false);

  const toggleMode = () => {
    setDark((prevState) => {
      localStorage.setItem('portfolio-dark-mode-active', !dark);
      if (prevState) {
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
      }
      return !prevState;
    });
  };

  useEffect(() => {
    const darkModeStored = localStorage.getItem('portfolio-dark-mode-active');
    const darkMode = darkModeStored === 'false' ? false : true;
    setDark(darkMode);
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, []);

  return [dark, toggleMode];
};

export default useDarkMode;
