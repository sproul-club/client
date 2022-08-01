import { createContext } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: (arg0: "light" | "dark") => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "",
  setTheme: () => {},
  toggleTheme: () => {},
});

export default ThemeContext;
