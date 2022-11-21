import { ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import User from "../../models/User";
import AuthContext from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AuthContext.Provider value={{ user: user, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
