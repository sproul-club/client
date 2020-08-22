import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOAD_PROFILE,
  LOAD_PROFILE_ERROR,
  REFRESH_TOKEN,
  LOGOUT,
  AUTH_ERROR,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  errors: null,
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
    case LOAD_PROFILE_ERROR:
      return { ...state, loading: false, isAuthenticated: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.access,
        refreshToken: payload.refresh,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return { ...state };
    case REFRESH_TOKEN:
      return { ...state, token: payload, isAuthenticated: true };
    case LOGOUT:
      return {
        ...state,
        token: null,
        refreshToken: null,
        isAuthenticated: false,
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
}
