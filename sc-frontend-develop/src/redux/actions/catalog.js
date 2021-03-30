import {
  SEARCH_CLUBS,
  FILTER_CLUBS,
  LOAD_ALL_CLUBS,
  LOAD_MORE_CLUBS,
  GET_ORGANIZATION,
  CLEAR_ORGANIZATION,
  CLEAR_ORGANIZATIONS,
  LOAD_MORE_ORGS,
  SET_FORM_DETAILS,
  SET_TAGS,
  RESET_TAGS,
  SET_MEMBERS,
  RESET_MEMBERS,
} from './types';

import { API } from '../../utils/backendClient';

export const loadAllClubs = () => async (dispatch) => {
  try {
    const res = await API.get('/api/catalog/organizations?limit=999&skip=0');

    dispatch({
      type: LOAD_ALL_CLUBS,
      payload: res.data.results,
      num_results: res.data.num_results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const loadMoreClubs = (num_clubs) => {
  return { type: LOAD_MORE_CLUBS, payload: num_clubs };
};

export const filterClubs = (
  allOrganizations,
  formDetails,
  tagOptions,
  num_results
) => {
  console.log(num_results);
  const orgList = allOrganizations.map((club) => club.club);

  let filteredClubs = orgList;
  if (formDetails.name > 0)
    filteredClubs = filteredClubs.filter((club) =>
      club.name.includes(formDetails.name)
    );
  if (formDetails.appReq)
    filteredClubs = filteredClubs.filter((club) => club.app_required === true);
  if (formDetails.noAppReq)
    filteredClubs = filteredClubs.filter((club) => club.app_required === false);
  if (formDetails.recruiting)
    filteredClubs = filteredClubs.filter((club) => club.app_required === true);
  if (formDetails.notRecruiting)
    filteredClubs = filteredClubs.filter((club) => club.app_required === false);
  let searchTags = formDetails.tags.map((tag) => tag.label);
  for (let tag of searchTags) {
    filteredClubs = filteredClubs.filter((club) => {
      let clubtags = club.tags.map((tag) => tagOptions[tag].label);
      return clubtags.includes(tag);
    });
  }

  const sliced_filtered_results = filteredClubs.slice(0, num_results);

  return { type: FILTER_CLUBS, payload: sliced_filtered_results };
};

export const searchClubs = ({
  name: search,
  tags,
  appReq: app_required,
  status: new_members,
  limit,
  skip,
}) => async (dispatch) => {
  try {
    const body = { search, tags, app_required, new_members, limit, skip };
    const res = await API.post('/api/catalog/search', body);

    dispatch({
      type: SEARCH_CLUBS,
      payload: res.data.results,
      num_results: res.data.num_results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOrganization = (orgId) => async (dispatch) => {
  try {
    const res = await API.get(`/api/catalog/organizations/${orgId}`);

    dispatch({ type: GET_ORGANIZATION, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const clearOrganization = () => (dispatch) => {
  try {
    dispatch({ type: CLEAR_ORGANIZATION });
  } catch (err) {
    console.log(err);
  }
};

export const loadMoreOrgs = ({
  name: search,
  tags,
  appReq: app_required,
  status: new_members,
  limit,
  skip,
}) => async (dispatch) => {
  try {
    const body = { search, tags, app_required, new_members, limit, skip };
    const res = await API.post('/api/catalog/search', body);

    dispatch({
      type: LOAD_MORE_ORGS,
      payload: res.data.results,
      num_results: res.data.num_results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setFormDetails = ({ name, value }) => {
  if (name === 'tags') {
    if (value === 'reset') return { type: RESET_TAGS };
    return { type: SET_TAGS, payload: { name, value } };
  }
  if (name === 'members') {
    if (value === 'reset') return { type: RESET_MEMBERS };
    return { type: SET_MEMBERS, payload: { name, value } };
  }

  return { type: SET_FORM_DETAILS, payload: { name, value } };
};

export const clearOrganizations = () => {
  return { type: CLEAR_ORGANIZATIONS };
};
