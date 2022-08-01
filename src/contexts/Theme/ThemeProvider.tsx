import { ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import ThemeContext from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");
  const [localTheme, setLocalTheme] = useLocalStorage("sc-theme", "light");

  useEffect(() => {
    setTheme(localTheme);
  }, [localTheme]);

  const updateTheme = (newTheme: string) => {
    setLocalTheme(newTheme);
    setTheme(newTheme);
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      setLocalTheme(newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: updateTheme,
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
