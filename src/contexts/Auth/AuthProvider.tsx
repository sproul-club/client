import useLocalStorage from 'hooks/useLocalStorage';
import type Club from 'models/club/Club';
import Event from 'models/Event';
import User from 'models/User';
import { createContext, ReactNode, useState } from 'react';
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
  loginWithOAuth: () => void;
  loginWithEmail: ({}: LoginWithEmail_Params) => void;
  register: ({}: Register_Params) => void;

  toggleFavoriteClub: (id: Club['id']) => void;
  toggleFavoriteEvent: (id: Event['id']) => void;
}

export const AuthContext = createContext<AuthContext_Props | undefined>(
  undefined
);

const AuthProvider = ({ children }: AuthProvider_Props) => {
  const [user, setUser] = useState<User | null>(null);

  const loginWithEmail = ({ email, password }: LoginWithEmail_Params) => {};

  const loginWithOAuth = () => {};

  const register = ({
    email,
    password,
    firstName,
    lastName,
  }: Register_Params) => {};

  const logout = () => {
    setUser(null);
  };

  function toggleFavoriteClub(clubId: Club['id']) {
    if (!user)
      throw new Error(`Cannot toggle favorites for unauthenticated users`);
    if (user.favoriteClubs.includes(clubId)) {
      user.favoriteClubs = user.favoriteClubs.filter((id) => id != clubId);
    } else {
      user.favoriteClubs.push(clubId);
    }
  }

  function toggleFavoriteEvent(eventId: Event['id']) {
    if (!user)
      throw new Error(`Cannot toggle favorites for unauthenticated users`);
    if (user.favoriteEvents.includes(eventId)) {
      user.favoriteEvents = user.favoriteEvents.filter((id) => id != eventId);
    } else {
      user.favoriteEvents.push(eventId);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        isAuthenticated: !!user,
        loginWithOAuth: loginWithOAuth,
        loginWithEmail: loginWithEmail,
        register: register,

        toggleFavoriteEvent: toggleFavoriteEvent,
        toggleFavoriteClub: toggleFavoriteClub,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
