import { createContext } from "react";
import User from "../../models/User";

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
});

export default AuthContext;
