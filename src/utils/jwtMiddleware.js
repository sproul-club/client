import { logout, refreshToken } from '../actions/auth';
import { createBrowserHistory as createHistory } from 'history';

export default function authMiddleware({ dispatch, getState }) {
  return (next) => async (action) => {
    if (window.location.pathname.slice(0, 6) === '/admin') {
      const token = localStorage.getItem('token');
      const tokenExpire = localStorage.getItem('expiresAt');
      const refreshExpiresAt = localStorage.getItem('refreshExpiresAt');

      if (token && isExpired(tokenExpire)) {
        try {
          await dispatch(refreshToken());
          next(action);
        } catch (e) {
          isExpired(refreshExpiresAt) && logout(createHistory(), false);
          console.log('logout', e);
        }
      }
    }
    return next(action);
  };
}

function isExpired(tokenExpire) {
  let currentTime = new Date().getTime();
  return currentTime > tokenExpire;
}
