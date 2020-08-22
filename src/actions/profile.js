import axios from 'axios';
import {
  LOAD_PROFILE,
  LOAD_PROFILE_ERROR,
  UPDATE_PROFILE,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  ADD_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load Profile
export const loadProfile = () => async (dispatch) => {
  if (localStorage.token) {
    // setAuthToken as header
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/admin/profile');

    dispatch({ type: LOAD_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({ type: LOAD_PROFILE_ERROR, payload: err });
  }
};

// Update profile
export const updateProfile = (formData) => async (dispatch) => {
  const justTheRightData = JSON.stringify({
    name: formData.name,
    tags: formData.tags,
    app_required: formData.app_required,
    new_members: formData.new_members,
    about_us: formData.about_us,
    get_involved: formData.get_involved,
    social_media_links: formData.social_media_links,
  });

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    await axios.post('/api/admin/profile', justTheRightData, config);

    dispatch({ type: UPDATE_PROFILE, payload: formData });
  } catch (err) {
    console.log(err);
  }
};

// TODO
// Add Event
// This does not work if they do not enter the right type of link?
export const addEvent = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const event = JSON.stringify(formData);
    console.log(event);

    const res = await axios.post('/api/admin/events', event, config);

    console.log(res);
    dispatch({ type: ADD_EVENT, payload: res.data });
  } catch (err) {
    console.log(err.response);
  }
};

// We can just have a "save profile" that will send in a complete copy of the profile data and update it (riskier?)
export const updateEvent = (eventId, eventInfo) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const event = JSON.stringify(eventInfo);

    const res = await axios.put(`/api/admin/events/${eventId}`, event, config);

    dispatch({ type: UPDATE_EVENT, payload: res.data });
  } catch (err) {
    console.log(err.response);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    // This will hit the api that will add the event, and return the new data with event added
    // and then update the profile information in state to be correct
    const res = await axios.delete(`/api/admin/events/${id}`, config);

    dispatch({ type: DELETE_EVENT, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// TODO
// Add Resource
export const addResource = (formData, resources) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const resource = JSON.stringify(formData);

    const res = await axios.post('/api/admin/resources', resource, config);

    console.log(res);
    dispatch({ type: ADD_RESOURCE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// We can just have a "save profile" that will send in a complete copy of the profile data and update it (riskier?)
export const updateResource = (resourceId, resourceInfo) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const resource = JSON.stringify(resourceInfo);
    // This will hit the api that will add the event, and return the new data with event added
    // and then update the profile information in state to be correct
    const res = await axios.put(
      `/api/admin/resources/${resourceId}`,
      resource,
      config
    );

    dispatch({ type: UPDATE_RESOURCE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteResource = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    // This will hit the api that will add the event, and return the new data with event added
    // and then update the profile information in state to be correct
    const res = await axios.delete(`/api/admin/resources/${id}`, config);

    dispatch({ type: DELETE_RESOURCE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
