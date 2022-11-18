import { createContext } from "react";

interface AuthContextProps {}

const AuthContext = createContext<AuthContextProps>({});

export default AuthContext;
