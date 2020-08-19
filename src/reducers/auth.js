import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOAD_PROFILE,
  LOGOUT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
};
 
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PROFILE:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      // put token in localStorage
      localStorage.setItem('token', payload.access);
      // update app state to have the payload (token) and isAuthenticated
      return {
        ...state,
        token: payload.access,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return { ...state };
    case LOGOUT:
      localStorage.removeItem('token');
      return { ...state, token: null, isAuthenticated: false, loading: false };
    default:
      return state;
  }
}
