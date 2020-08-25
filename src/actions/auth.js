import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN,
  AUTH_ERROR,
} from './types';
import axios from 'axios';
import { loadProfile } from './profile';

axios.defaults.baseURL = 'https://sc-backend-dev.herokuapp.com';

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

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }
};

// Login User
export const login = (email, password, history, success, error) => async (dispatch) => {
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
    localStorage.setItem('expiresAt', new Date().getTime() + 300000);
    localStorage.setItem('refreshToken', res.data.refresh);

    await dispatch(loadProfile());
    await dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    await success();
  } catch (err) {
    await dispatch({ type: AUTH_ERROR, payload: err });
    await error(err.response.data.reason);
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
    await axios.delete('/api/user/revoke-refresh', config);

    // remove tokens from local storage
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
      localStorage.setItem('expiresAt', new Date().getTime() + 300000);

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
    let res = await axios.post('/api/user/resend-confirm', body, config);
    setResentEmail(true);
    console.log('confirmation email resent');

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
  console.log(token);
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
      console.log(response.data.status);
      return response.data.status;
    })
    .catch((err) => {
      console.log(err);
      // dispatch({ type: AUTH_ERROR, payload: err });
    });
};

