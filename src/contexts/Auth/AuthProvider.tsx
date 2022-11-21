import { createContext, ReactNode, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import User from "../../models/User";
// import AuthContext from "./AuthContext";

interface AuthProvider_Props {
  children: ReactNode;
}

interface LoginWithEmail_Params {
  email: string;
  password: string;
}

interface Register_Params {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface AuthContext_Props {
  user: User | null;
  isAuthenticated: boolean;
  loginWithCalNet: () => void;
  loginWithEmail: ({}: LoginWithEmail_Params) => void;
  register: ({}: Register_Params) => void;
}

export const AuthContext = createContext<AuthContext_Props | null>(null);

const AuthProvider = ({ children }: AuthProvider_Props) => {
  const [user, setUser] = useState<User | null>(null);

  const loginWithEmail = ({ email, password }: LoginWithEmail_Params) => {};

  const loginWithCalNet = () => {};

  const register = ({
    email,
    password,
    firstName,
    lastName,
  }: Register_Params) => {};

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        isAuthenticated: !!user,
        loginWithCalNet: loginWithCalNet,
        loginWithEmail: loginWithEmail,
        register: register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
