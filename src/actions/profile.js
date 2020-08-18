import axios from 'axios';
import { LOAD_PROFILE, UPDATE_PROFILE } from './types';
import setAuthToken from '../utils/setAuthToken';
import { deleteEventTestApi } from '../utils/testApi';

// Load Profile
export const loadProfile = () => async (dispatch) => {
  if (localStorage.token) {
    // setAuthToken
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/admin/profile');

    dispatch({ type: LOAD_PROFILE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// Update profile
export const updateProfile = (formData) => async (dispatch) => {
  console.log('FORMDATA:', formData);

  const justTheRightData = JSON.stringify({
    name: formData.name,
    tags: formData.tags,
    'app-required': formData['app-required'],
    'new-members': formData['new-members'],
    'about-us': formData['about-us'],
    'get-involved': formData['get-involved'],
    'social-media-links': formData['social-media-links'],
  });

  console.log('new formdata: ', justTheRightData);

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const res = await axios.post(
      '/api/admin/profile',
      justTheRightData,
      config
    );

    dispatch({ type: UPDATE_PROFILE, payload: formData });
  } catch (err) {
    console.log(err);
  }
};

// TODO
// Update profile
export const addEvent = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // const res = await axios.put('/api/profile/event', formData, config);
    const res = {};

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// We can just have a "save profile" that will send in a complete copy of the profile data and update it (riskier?)
export const updateEvent = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // This will hit the api that will add the event, and return the new data with event added
    // and then update the profile information in state to be correct
    // const res = await axios.put('/api/profile/event', formData, config);
    const res = {};

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  const res = deleteEventTestApi(id);

  console.log('res:', res);
  dispatch({ type: UPDATE_PROFILE, payload: res });
};

export const deleteResource = (id) => {};

// Get club user profile

// Delete profile / account
