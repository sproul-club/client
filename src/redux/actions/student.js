import {
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
  LOGIN_SUCCESS,
  LOGOUT
} from './types';

import { API, TOKENS } from '../../utils/backendClient';

// Login User 
// Not sure how this works with OAuth??
export const loginUser = (email, password) => async(dispatch) => {
  try {
    const res = await API.post('/api/student/login', { email, password });
    
    TOKENS.access.set(res.data.token.access, res.data.token.access_expires_in);
    TOKENS.refresh.set(res.data.token.refresh, res.data.token.refresh_expires_in);

    // do something to load the student profile?
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}

// Logout User
export const logoutUser = (history) => async (dispatch) => {
  try {
    // revoke both access & refresh token
    await API.delete(
      '/api/student/revoke-access',
      TOKENS.access.fullHeaderConfig()
    );
    await API.delete(
      '/api/student/revoke-refresh',
      TOKENS.refresh.fullHeaderConfig()
    );
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err });
  }

  // remove tokens from local storage
  TOKENS.access.delete();
  TOKENS.refresh.delete();

  history.push('/');
  dispatch({ type: LOGOUT });
};

// Finish Registration
export const finishRegister = (email, majors, minors, interests) => async (dispatch) => {
  try {
    const res = await API.post('/api/student/finish-register', { email, majors, minors, interests });
    dispatch({ type: FINISH_REGISTER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}

// Fetch set of majors
export const fetchMajors = () => async (dispatch) => {
  try {
    const res = await API.get('/api/student/majors');
    dispatch({ type: GET_MAJORS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}

// Fetch set of minors
export const fetchMinors = () => async (dispatch) => {
  try {
    const res = await API.get('/api/student/minors');
    dispatch({ type: GET_MINORS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}

// Fetch set of student years
export const fetchYears = () => async (dispatch) => {
  try {
    const res = await API.get('/api/student/years');
    dispatch({ type: GET_YEARS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}

// Fetch profile info
export const fetchProfileInfo = () => async (dispatch) => {
  try {
    const res = await API.get('/api/student/profile');
    dispatch({ type: GET_PROFILE_INFO, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}

// Edit profile info
export const updateProfileInfo = (majors, minors, interests) => async (dispatch) => {
  try {
    const res = await API.post('/api/student/profile', { majors, minors, interests });
    dispatch({ type: UPDATE_PROFILE_INFO, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}

// Add favorite clubs
export const addFavoriteClubs = (clubs) => async (dispatch) => {
  try {
    const res = await API.post('/api/student/favorite-clubs', clubs);
    dispatch({ type: ADD_FAVORITE_CLUBS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}

// Add favorite clubs
export const addFavoriteClubs = (clubs) => async (dispatch) => {
  try {
    const res = await API.delete('/api/student/favorite-clubs', clubs);
    dispatch({ type: DELETE_FAVORITE_CLUBS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}

// Edit club board
export const editClubBoard = (interested_clubs, applied_clubs, interviewed_clubs) => async (dispatch) => {
  try {
    const res = await API.put('/api/student/club-board', { interested_clubs, applied_clubs, interviewed_clubs });
    dispatch({ type: UPDATE_CLUB_BOARD, payload: res.data });
  } catch (err) {
    console.log(err);
  }
}