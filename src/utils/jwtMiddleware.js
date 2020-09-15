import { logout, refreshToken } from '../actions/auth';
import { createBrowserHistory as createHistory } from 'history';
import { TOKENS } from '../utils/backendClient'

export default function authMiddleware({ dispatch, getState }) {
  return (next) => async (action) => {
    if (window.location.pathname.slice(0, 6) === '/admin') {
      if (TOKENS.access.exists() && TOKENS.access.hasExpired()) {
        try {
          await dispatch(refreshToken());
          next(action);
        } catch (err) {
          if (TOKENS.refresh.exists())
            logout(createHistory(), false);
          console.log('logout', err);
        }
      }
    }
    return next(action);
  };
}