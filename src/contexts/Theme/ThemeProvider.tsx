import { createContext, ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

interface ThemeContext_Props {
  theme: string;
  setTheme: (arg0: "light" | "dark") => void;
  toggleTheme: () => void;
}

interface ThemeProvider_Props {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContext_Props>({
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
});

const ThemeProvider = ({ children }: ThemeProvider_Props) => {
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
