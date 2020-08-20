import { SEARCH_CLUBS } from './types';
import { catalogTestApi } from '../utils/testApi';
import axios from 'axios';

// Search Clubs
axios.defaults.baseURL = 'https://sc-backend-v0.herokuapp.com';

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
    console.log(res);

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
    console.log(params);
    const res = await axios.post('/api/catalog/search', params, config);

    dispatch({ type: SEARCH_CLUBS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
