import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const useAuth = () => useContext(AuthContext);

export default useAuth;
