import {
  LOAD_PROFILE,
  LOAD_PROFILE_ERROR,
  UPDATE_PROFILE,
  UPLOAD_IMAGES,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  ADD_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
  UPDATE_PASSWORD,
  GET_TAGS,
} from './types';
import FormData from 'form-data';

import { refreshToken } from './auth';
import { API, TOKENS } from '../utils/backendClient';

// Load Profile
export const loadProfile = () => async (dispatch) => {
  if (TOKENS.access.exists()) {
    try {
      await dispatch(refreshToken());
      const res = await API.get('/api/admin/profile');
      dispatch({ type: LOAD_PROFILE, payload: res.data });
    } catch (err) {
      dispatch({ type: LOAD_PROFILE_ERROR, payload: err });
    }
  } else {
    dispatch({ type: LOAD_PROFILE_NOT_LOGGED_IN });
  }
};

// Update profile
export const updateProfile = (formData, success, error) => async (dispatch) => {
  try {
    await API.post('/api/admin/profile', {
      name: formData.name,
      tags: formData.tags,
      app_required: formData.app_required,
      new_members: formData.new_members,
      about_us: formData.about_us,
      get_involved: formData.get_involved,
      social_media_links: formData.social_media_links,
    });

    await success();
    dispatch({ type: UPDATE_PROFILE, payload: formData });
  } catch (err) {
    await error();
    console.log(err);
  }
};

// Upload Logo
export const uploadLogo = (images, success, error) => async (dispatch) => {
  try {
    let data = new FormData();

    if (!images.logo) return;

    data.append('logo', images.logo);

    const config = {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
    };

    const res = await API.post('/api/admin/upload-logo', data, config);
    await success();

    dispatch({ type: UPLOAD_IMAGES, payload: res.data });
  } catch (err) {
    error(err);
    console.log(err.response);
  }
};

// Upload Banner
export const uploadBanner = (images, success, error) => async (dispatch) => {
  try {
    let data = new FormData();

    if (!images.banner) return;

    data.append('banner', images.banner);

    const config = {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
    };

    const res = await API.post('/api/admin/upload-banner', data, config);
    await success();

    dispatch({ type: UPLOAD_IMAGES, payload: res.data });
  } catch (err) {
    await error(err);
    console.log(err.response);
  }
};

// Add Event
// This does not work if they do not enter the right type of link?
export const addEvent = (newEvent) => async (dispatch) => {
  try {
    const res = await API.post('/api/admin/events', newEvent);
    dispatch({ type: ADD_EVENT, payload: res.data });
  } catch (err) {
    console.log(err.response);
  }
};

// We can just have a "save profile" that will send in a complete copy of the profile data and update it (riskier?)
export const updateEvent = (eventId, eventInfo) => async (dispatch) => {
  try {
    const res = await API.put(`/api/admin/events/${eventId}`, eventInfo);

    dispatch({ type: UPDATE_EVENT, payload: res.data });
  } catch (err) {
    console.log(err.response);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    // This will hit the api that will add the event, and return the new data with event added
    // and then update the profile information in state to be correct
    const res = await API.delete(`/api/admin/events/${id}`);

    dispatch({ type: DELETE_EVENT, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

// Add Resource
export const addResource = (newResource, resources) => async (dispatch) => {
  try {
    const res = await API.post('/api/admin/resources', newResource);
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
    // Hits API to update resource, returns new data with resource added
    //  then update the profile information in state to be correct
    const res = await API.put(`/api/admin/resources/${resourceId}`, resourceInfo);
    dispatch({ type: UPDATE_RESOURCE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteResource = (id) => async (dispatch) => {
  try {
    // Hits API to delete resource, returns new data with resource added
    //  then update the profile information in state to be correct
    const res = await API.delete(`/api/admin/resources/${id}`);
    dispatch({ type: DELETE_RESOURCE, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const updatePassword = (changePassInfo, success, error) => async (
  dispatch
) => {
  try {
    const res = await API.post('/api/admin/change-password', changePassInfo);
    dispatch({ type: UPDATE_PASSWORD, payload: res.data });
    await success();
  } catch (err) {
    await error(err.response.data.reason);
  }
};

export const getTags = () => async (dispatch) => {
  try {
    const res = await API.get('/api/catalog/tags');
    const tags = res.data.map((tag) => ({ label: tag.name, value: tag.id }));
    dispatch({ type: GET_TAGS, payload: tags });
  } catch (err) {
    console.log(err.response);
  }
};

