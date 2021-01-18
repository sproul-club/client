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

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
    throw err;
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  try {
    const res = await API.post('/api/user/login', { email, password });

    TOKENS.access.set(res.data.access, res.data.access_expires_in);
    TOKENS.refresh.set(res.data.refresh, res.data.refresh_expires_in);

    await dispatch(loadProfile());
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
    throw err;
  }
};

// Logout / clear profile
export const logout = (history) => async (dispatch) => {
  try {
    // revoke both access & refresh token
    await API.delete('/api/user/revoke-access', TOKENS.access.fullHeaderConfig());
    await API.delete('/api/user/revoke-refresh', TOKENS.refresh.fullHeaderConfig());
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }

  // remove tokens from local storage
  TOKENS.access.delete();
  TOKENS.refresh.delete();

  history.push('/');
  dispatch({ type: LOGOUT });
};

// Verify email as Callink email
export const isCallinkEmail = async (email) => {
  try {
    const res = await API.post('/api/user/email-exists', { email });
    return res.data.exists;
  } catch (err) {
    console.log(err);
  }
};

// Verify if password is strong enough
export const isPasswordStrong = async (password) => {
  try {
    const res = await API.post('/api/user/password-strength', { password });
    return res.data.strong;
  } catch (err) {
    console.log(err);
  }
};

// Resend account confirmation email
export const resendConfirmationEmail = (email) => async (dispatch) => {
  try {
    await API.post('/api/user/resend-confirm', { email });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
    console.log(err);
    throw err;
  }
};

// Send a password confirmation email to the user
export const sendResetPasswordEmail = async (email) => {
  try {
    const res = await API.post('/api/user/request-reset', { email });
    return res.data.status;
  } catch (err) {
    throw err;
    // dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Reset password
export const resetPassword = async (password, token) => {
  try {
    const res = await API.post('/api/user/confirm-reset', { token, password });
    return res.data.status;
  } catch (err) {
    throw err;
    // dispatch({ type: AUTH_ERROR, payload: err });
  }
};
