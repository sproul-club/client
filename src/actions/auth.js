import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from './types';
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
    console.log(err);
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
  console.log('logging in');

  const body = JSON.stringify({ email, password });

  try {
    // Once we have routes, it will create a new user on backend
    // and will return signed jwt
    let res = await axios.post('/api/user/login', body, config);

    // Calls redux reducer that puts the token into local storage
    // and token and isAuthenticated=true in app state
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadProfile());

    history.push('/admin');
  } catch (err) {
    console.log(err);
  }
};

// TODO:
// Logout / clear profile
export const logout = (history) => (dispatch) => {
  // this will push back to dashboard
  // will need to connect logout component with import { withRouter } from 'react-router'
  history.push('/');
  dispatch({ type: LOGOUT });
};

// TODO:
// Forgot password
