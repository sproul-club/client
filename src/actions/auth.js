import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN,
  AUTH_ERROR,
} from './types';
import axios from 'axios';
import { loadProfile } from './profile';
import setAuthToken from '../utils/setAuthToken';

axios.defaults.baseURL = 'https://sc-backend-prod.herokuapp.com';

// Register User
export const register = (
  name,
  email,
  password,
  tags,
  app_required,
  new_members
) => async (dispatch) => {
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

    await dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    await dispatch({ type: AUTH_ERROR, payload: err });
    throw err;
  }
};

// Login User
export const login = (email, password, history, success, error) => async (
  dispatch
) => {
  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    let res = await axios.post('/api/user/login', body, config);

    localStorage.setItem('token', res.data.access);
    localStorage.setItem(
      'expiresAt',
      new Date().getTime() + res.data.access_expires_in
    );
    localStorage.setItem('refreshToken', res.data.refresh);
    localStorage.setItem(
      'refreshExpiresAt',
      new Date().getTime() + res.data.refresh_expires_in
    );

    await dispatch(loadProfile());
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    success();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
    error(err.response.data.reason);
  }
};

// Logout / clear profile
export const logout = (history, useBackend = true) => async (dispatch) => {
  const refreshToken = localStorage.getItem('refreshToken');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${refreshToken}`,
    },
  };

  if (useBackend) {
    try {
      // revoke refresh token
      await axios.delete('/api/user/revoke-refresh', config);
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err });
    }
  }

  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');

  history.push('/');
  // remove tokens from local storage
  dispatch({ type: LOGOUT });
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
      localStorage.setItem(
        'expiresAt',
        new Date().getTime() + res.data.access_expires_in
      );
      setAuthToken(res.data.access);

      dispatch({ type: REFRESH_TOKEN, payload: res.data });
    }
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Verify email as Callink email
export const isCallinkEmail = (email) => {
  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  const body = JSON.stringify({ email });

  return axios
    .post('/api/user/email-exists', body, config)
    .then((response) => {
      return response.data.exists;
    })
    .catch((err) => {
      console.log(err);
      // dispatch({ type: AUTH_ERROR, payload: err });
    });
};

// Verify if password is strong enough
export const isPasswordStrong = (password) => {
  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  const body = JSON.stringify({ password });

  return axios
    .post('/api/user/password-strength', body, config)
    .then((response) => {
      return response.data.strong;
    })
    .catch((error) => {
      console.log(error);
    });
};

// Login User
export const resendConfirmationEmail = (email, setResentEmail) => async (
  dispatch
) => {
  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const body = JSON.stringify({ email });

  try {
    setResentEmail(false);
    await axios.post('/api/user/resend-confirm', body, config);
    setResentEmail(true);

    // dispatch({ type: RESEND_EMAIL , payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Send a password confirmation email to the user
export const sendResetPasswordEmail = (email) => {
  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  const body = JSON.stringify({ email });

  return axios
    .post('/api/user/request-reset', body, config)
    .then((response) => {
      return response.data.status;
    })
    .catch((err) => {
      console.log(err);
      // dispatch({ type: AUTH_ERROR, payload: err });
    });
};

// Reset password
export const resetPassword = (password) => {
  // const token = localStorage.getItem('token');
  const token = new URLSearchParams(window.location.search).get('token');

  // Set headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  const body = JSON.stringify({ token, password });
  return axios
    .post('/api/user/confirm-reset', body, config)
    .then((response) => {
      return response.data.status;
    })
    .catch((err) => {
      console.log(err);
      // dispatch({ type: AUTH_ERROR, payload: err });
    });
};
