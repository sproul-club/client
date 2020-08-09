import axios from 'axios';
import { UPDATE_PROFILE } from './types';

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

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
// OTHERWISE
// We can just have a "save profile" that will send in a complete copy of the profile data and update it (riskier?)

// Get club user profile

// Delete profile / account
