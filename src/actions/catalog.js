import { SEARCH_CLUBS, GET_ORGANIZATION, CLEAR_ORGANIZATION } from './types';
import axios from 'axios';

// Search Clubs
axios.defaults.baseURL = 'https://sc-backend-dev.herokuapp.com';

export const loadClubs = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const params = JSON.stringify({ limit: 30, skip: 0 });

    const res = await axios.post('/api/catalog/organizations', params, config);

    dispatch({ type: SEARCH_CLUBS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const searchClubs = ({
  name: search,
  tags,
  appReq: app_required,
  status: new_members,
}) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    const params = JSON.stringify({ search, tags, app_required, new_members });

    const res = await axios.post('/api/catalog/search', params, config);
    dispatch({ type: SEARCH_CLUBS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const getOrganization = (orgId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/catalog/organizations/${orgId}`);

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
