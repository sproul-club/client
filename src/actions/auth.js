import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN,
  AUTH_ERROR,
} from './types';
import axios from 'axios';
import { loadProfile } from './profile';

axios.defaults.baseURL = 'https://sc-backend-v0.herokuapp.com';

// Load User

// Register User
export const register = (
  name,
  email,
  password,
  tags,
  app_required,
  new_members
) => async (dispatch) => {
  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const body = JSON.stringify({
    name,
    email,
    password,
    tags,
    app_required,
    new_members,
  });

  try {
    let res = await axios.post('/api/user/register', body, config);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Login User
export const login = (email, password, history) => async (dispatch) => {
  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    // Once we have routes, it will create a new user on backend
    // and will return signed jwt
    let res = await axios.post('/api/user/login', body, config);

    localStorage.setItem('token', res.data.access);
    localStorage.setItem('expiresAt', new Date().getTime() + 300000);
    localStorage.setItem('refreshToken', res.data.refresh);

    // Calls redux reducer that puts the token into local storage
    // and token and isAuthenticated=true in app state
    dispatch(loadProfile());
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });

    history.push('/admin');
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Logout / clear profile
export const logout = (history) => async (dispatch) => {
  const refreshToken = localStorage.getItem('refreshToken');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${refreshToken}`,
    },
  };
  try {
    // revoke refresh token
    const res = await axios.delete('/api/user/revoke-refresh', config);

    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');

    history.push('/');
    dispatch({ type: LOGOUT });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }
};

export const refreshToken = () => async (dispatch, getState) => {
  const expiresAt = localStorage.getItem('expiresAt');
  const refreshToken = localStorage.getItem('refreshToken');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${refreshToken}`,
    },
  };

  try {
    if (expiresAt < new Date().getTime()) {
      const res = await axios.post('/api/user/refresh', {}, config);

      localStorage.setItem('token', res.data.access);

      dispatch({ type: REFRESH_TOKEN, payload: res.data });
    }
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }
};
