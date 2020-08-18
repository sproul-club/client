import axios from 'axios';
import {
  LOAD_PROFILE,
  UPDATE_PROFILE,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from './types';
import setAuthToken from '../utils/setAuthToken';

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
    console.log(res);

    dispatch({ type: UPDATE_PROFILE, payload: formData });
  } catch (err) {
    console.log(err);
  }
};

// TODO
// Add Event
// This does not work if they do not enter the right type of link?
export const addEvent = (formData, events) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const event = JSON.stringify(formData);

    const res = await axios.post('/api/admin/events', event, config);

    console.log(res);
    dispatch({ type: ADD_EVENT, payload: events.push(formData) });
  } catch (err) {
    console.log(err);
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
    // This will hit the api that will add the event, and return the new data with event added
    // and then update the profile information in state to be correct
    const res = await axios.put(`/api/admin/events/${eventId}`, event, config);

    dispatch({ type: UPDATE_EVENT, payload: res.data });
  } catch (err) {
    console.log(err);
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
    console.log('delete!', res);
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
    dispatch({ type: ADD_EVENT, payload: resources.push(formData) });
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

    dispatch({ type: UPDATE_EVENT, payload: res.data });
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
    console.log('delete!', res);
    dispatch({ type: DELETE_EVENT, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
