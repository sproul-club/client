import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      `AuthContext must be called inside of its respective provider`
    );
  return context;
};

export default useAuth;
