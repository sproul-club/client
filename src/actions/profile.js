import axios from 'axios';
import { UPDATE_PROFILE } from './types';
import { deleteEventTestApi } from '../utils/testApi';

// Create profile

// Update profile
export const addEvent = (formData) => async (dispatch) => {
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
