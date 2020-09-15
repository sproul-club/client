import {
  SEARCH_CLUBS,
  GET_ORGANIZATION,
  CLEAR_ORGANIZATION,
  CLEAR_ORGANIZATIONS,
  LOAD_MORE_ORGS,
  SET_FORM_DETAILS,
  SET_TAGS,
} from './types';

import { API, TOKENS } from '../utils/backendClient';

export const loadClubs = () => async (dispatch) => {
  try {
    const res = await API.post('/api/catalog/organizations', { limit: 30, skip: 0 });

    dispatch({
      type: SEARCH_CLUBS,
      payload: res.data.results,
      num_results: res.data.num_results,
    });
  } catch (err) {
    console.log(err);
  }
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
  if (Array.isArray(value)) return { type: SET_TAGS, payload: { name, value } };
  return { type: SET_FORM_DETAILS, payload: { name, value } };
};

export const clearOrganizations = () => {
  return { type: CLEAR_ORGANIZATIONS };
};
