import {
  LOAD_PROFILE,
  LOAD_PROFILE_NOT_LOGGED_IN,
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
  GET_SIZE_TAGS,
  ADD_RECR_EVENT,
  DELETE_RECR_EVENT,
  UPDATE_RECR_EVENT,
  GET_GALLERY_PHOTOS,
  ADD_GALLERY_PHOTO,
  UPDATE_GALLERY_PHOTO,
  DELETE_GALLERY_PHOTO,
} from './types';
import FormData from 'form-data';

import { loadAllClubs } from './catalog';
import { refreshToken } from './auth';
import { API, TOKENS } from '../../utils/backendClient';

// Load Profile
export const loadProfile = () => async (dispatch) => {
  try {
    const res = await API.get('/api/admin/profile');
    dispatch({ type: LOAD_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({ type: LOAD_PROFILE_ERROR, payload: err });
  }
};

// Update profile
export const updateProfile = (formData) => async (dispatch) => {
  try {
    await API.post('/api/admin/profile', {
      name: formData.name,
      tags: formData.tags,
      app_required: formData.app_required,
      new_members: formData.new_members,
      about_us: formData.about_us,
      get_involved: formData.get_involved,
      social_media_links: formData.social_media_links,
      num_users: formData.num_users,
      recruiting_start: formData.recruiting_start,
      recruiting_end: formData.recruiting_end,
      apply_deadline_start: formData.apply_deadline_start,
      apply_deadline_end: formData.apply_deadline_end,
      apply_link: formData.apply_link,
      is_reactivating: formData.is_reactivating,
    });

    await dispatch(loadAllClubs());

    dispatch({ type: UPDATE_PROFILE, payload: formData });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// Upload Logo
export const uploadLogo = (logo) => async (dispatch) => {
  if (!logo) return;

  let data = new FormData();
  data.append('logo', logo);

  const config = {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    },
  };

  try {
    const res = await API.post('/api/admin/upload-logo', data, config);
    dispatch({ type: UPLOAD_IMAGES, payload: res.data });

    await dispatch(loadProfile());
  } catch (err) {
    console.log(err.response.data);
    throw err;
  }
};

// Upload Banner
export const uploadBanner = (banner) => async (dispatch) => {
  if (!banner) return;

  let data = new FormData();
  data.append('banner', banner);

  const config = {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    },
  };

  try {
    const res = await API.post('/api/admin/upload-banner', data, config);
    dispatch({ type: UPLOAD_IMAGES, payload: res.data });

    await dispatch(loadProfile());
  } catch (err) {
    console.log(err.response.data);
    throw err;
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
// Recruitment Event Actions
export const addRecrEvent = (newEvent) => async (dispatch) => {
  try {
    const res = await API.post('/api/admin/recruiting-events', newEvent);
    dispatch({ type: ADD_RECR_EVENT, payload: res.data });
  } catch (err) {
    console.log(err.response);
  }
};

export const updateRecrEvent = (eventId, eventInfo) => async (dispatch) => {
  try {
    const res = await API.put(
      `/api/admin/recruiting-events/${eventId}`,
      eventInfo
    );

    dispatch({ type: UPDATE_RECR_EVENT, payload: res.data });
  } catch (err) {
    console.log(err.response);
  }
};

export const deleteRecrEvent = (id) => async (dispatch) => {
  try {
    // This will hit the api that will add the event, and return the new data with event added
    // and then update the profile information in state to be correct
    const res = await API.delete(`/api/admin/recruiting-events/${id}`);

    dispatch({ type: DELETE_RECR_EVENT, payload: res.data });
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
    const res = await API.put(
      `/api/admin/resources/${resourceId}`,
      resourceInfo
    );
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

export const getSizeTags = () => async (dispatch) => {
  try {
    const res = await API.get('/api/catalog/num-user-tags');
    const size_tags = res.data.map((tag) => ({
      label: tag.value,
      value: tag.id,
    }));
    dispatch({ type: GET_SIZE_TAGS, payload: size_tags });
  } catch (err) {
    console.log(err.response);
  }
};

// HI NICO LOOK OVER THESE ACTIONS AND MAKE SURE THEY'RE CORRECT <33333

export const getGalleryPhotos = () => async (dispatch) => {
  try {
    const res = await API.get('/api/admin/gallery-media');
    return res.data;
  } catch (err) {
    console.log(err.response);
  }
};

export const addGalleryPhoto = (fileObj, caption) => async (dispatch) => {
  let data = new FormData();

  data.append('photo', fileObj);
  data.append('caption', caption);

  const config = {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    },
  };

  try {
    const res = await API.post('/api/admin/gallery-media/photo', data, config);
    dispatch({ type: ADD_GALLERY_PHOTO, payload: res.data });
  } catch (err) {
    console.log(err.response.data);
  }
};

export const updateGalleryPhoto = (id, caption) => async (dispatch) => {
  let data = new FormData();

  data.append('caption', caption);

  const config = {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    },
  };

  try {
    const res = await API.put(
      `/api/admin/gallery-media/photo/${id}`,
      data,
      config
    );
    dispatch({ type: UPDATE_GALLERY_PHOTO, payload: res.data });
  } catch (err) {
    console.log(err.response);
  }
};

export const deleteGalleryPhoto = (id) => async (dispatch) => {
  try {
    const res = await API.delete(`/api/admin/gallery-media/${id}`);
    dispatch({ type: DELETE_GALLERY_PHOTO, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
