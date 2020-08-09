import { USER_LOADED, REGISTER_SUCCESS } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      // Update app state to store the user and isAuthenticated
      return { ...state, isAuthenticated: true, loading: false, user: payload };
    case REGISTER_SUCCESS:
      // put token in localStorage
      localStorage.setItem('token', payload.token);
      // update app state to have the payload (token) and isAuthenticated
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    default:
      return state;
  }
}
