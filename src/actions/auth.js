import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN,
  AUTH_ERROR,
} from './types';

import { loadProfile } from './profile';
import { API, TOKENS } from '../utils/backendClient';

// Register User
export const register = (name, email, password, tags, app_required, new_members) => async (dispatch) => {
  try {
    const res = await API.post('/api/user/register', {
      name, email, password,
      tags, app_required, new_members,
    });

    await dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    await dispatch({ type: AUTH_ERROR, payload: err });
    throw err;
  }
};

// Login User
export const login = (email, password, history, success, error) => async (dispatch) => {
  // Set headers
  const body = JSON.stringify({ email, password });

  try {
    const res = await API.post('/api/user/login', { email, password });

    TOKENS.access.set(res.data.access, res.data.access_expires_in);
    TOKENS.refresh.set(res.data.refresh, res.data.refresh_expires_in);

    await dispatch(loadProfile());
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    await success();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
    await error(err.response.data.reason);
  }
};

// Logout / clear profile
export const logout = (history, useBackend = true) => async (dispatch) => {
  const accessToken = TOKENS.access.get();
  const refreshToken = TOKENS.refresh.get();

  if (useBackend) {
    try {
      // revoke both access & refresh token
      await API.delete('/api/user/revoke-access', TOKENS.access.fullHeaderConfig());
      await API.delete('/api/user/revoke-refresh', TOKENS.refresh.fullHeaderConfig());
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err });
    }
  }

  // remove tokens from local storage
  TOKENS.access.delete();
  TOKENS.refresh.delete();

  history.push('/');
  dispatch({ type: LOGOUT });
};

export const refreshToken = () => async (dispatch, getState) => {
  try {
    if (TOKENS.access.hasExpired()) {
      const res = await API.post('/api/user/refresh', {}, TOKENS.refresh.fullHeaderConfig());

      TOKENS.access.set(res.data.access, res.data.access_expires_in);

      dispatch({ type: REFRESH_TOKEN, payload: res.data });
    }
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Verify email as Callink email
export const isCallinkEmail = (email) => {
  try {
    const res = API.post('/api/user/email-exists', { email });
    return res.data.exists;
  } catch (err) {
    console.log(err);
    // dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Verify if password is strong enough
export const isPasswordStrong = (password) => {
  try {
    const res = API.post('/api/user/password-strength', { password });
    return res.data.strong;
  } catch (err) {
    console.log(err);
    // dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Login User
export const resendConfirmationEmail = (email, setResentEmail) => async (dispatch) => {
  try {
    setResentEmail(false);
    await API.post('/api/user/resend-confirm', { email });
    setResentEmail(true);

    // dispatch({ type: RESEND_EMAIL , payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Send a password confirmation email to the user
export const sendResetPasswordEmail = (email) => {
  try {
    const res = API.post('/api/user/request-reset', { email });
    return res.data.status;
  } catch (err) {
    console.log(err);
    // dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Reset password
export const resetPassword = (password) => {
  const token = new URLSearchParams(window.location.search).get('token');

  try {
    const res = API.post('/api/user/confirm-reset', { token, password });
    return res.data.status;
  } catch (err) {
    console.log(err);
    // dispatch({ type: AUTH_ERROR, payload: err });
  }
};
