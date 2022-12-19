import { useState, useEffect, createContext } from "react";

type ThemeState = {
  theme: string;
  handleThemeSwitch: () => void;
};

export const themeContext = createContext({} as ThemeState);

interface Props {
  children?: React.ReactNode;
}
enum Theme {
  light = "light",
  dark = "dark",
}
export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  useEffect(() => {
    if (theme === Theme.dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = (): void => {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
  };

  return (
    <themeContext.Provider value={{ theme, handleThemeSwitch }}>
      {children}
    </themeContext.Provider>
  );
};
