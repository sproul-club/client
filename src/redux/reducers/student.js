import {
  LOGIN_STUDENT,
  FINISH_REGISTER,
  REFRESH_ACCESS_TOKEN,
  REVOKE_ACCESS_TOKEN,
  REVOKE_REFRESH_TOKEN,
  GET_MAJORS,
  GET_MINORS,
  GET_YEARS,
  GET_PROFILE_INFO,
  UPDATE_PROFILE_INFO,
  ADD_FAVORITE_CLUBS,
  DELETE_FAVORITE_CLUBS,
  UPDATE_CLUB_BOARD,
  LOGIN_SUCCESS
} from '../actions/types';

import { TOKENS } from '../../utils/backendClient';
import { PlaylistAddOutlined } from '@material-ui/icons';

const initialState = {
  token: TOKENS.access.get(),
  refreshToken: TOKENS.refresh.get(),
  isAuthenticated: false,
  loading: true,
  name: '',
  email: '',
  majors: [],
  minors: [],
  years: [],
  interests: [],
  bookmarked_clubs: [],
  visited_clubs: [],
  recommended_clubs: [],
  club_board: {
    interested_clubs: [],
    applied_clubs: [],
    interviewed_clubs: [],
  }
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        refreshToken: payload.token.refresh,
        token: payload.token.access,
        loading: false,
      };
    case LOGOUT:
      return { 
        ...state,
        token: null,
        refreshToken: null,
        isAuthenticated: false,
        loading: false, 
      }
    case FINISH_REGISTER:
      return { ...state };
    case REFRESH_TOKEN:
      return { ...state, token: payload.token.access, isAuthenticated: true };
    case GET_MAJORS:
      return { ...state, majors: payload };
    case GET_MINORS:
      return { ...state, minors: payload };
    case GET_YEARS:
      return { ...state, years: payload };
    case GET_PROFILE_INFO:
      return { 
        ...state,
        name: payload.full_name,
        email: payload.email,
        majors: payload.majors,
        minors: payload.minors,
        interests: payload.interests,
        bookmarked_clubs: payload.favorited_clubs,
        club_board: payload.club_board
      };
    case UPDATE_PROFILE_INFO:
      return { ...state };
    case ADD_FAVORITE_CLUBS:
      return { ...state, bookmarked_clubs: payload };
    case DELETE_FAVORITE_CLUBS:
      return { ...state, bookmarked_clubs: payload };
    case UPDATE_CLUB_BOARD:
      return { ...state, club_board: payload };
    default:
      return state;
  }
}