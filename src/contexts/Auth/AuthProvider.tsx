import { ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import AuthContext from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default ThemeProvider;
