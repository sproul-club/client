import { SEARCH_CLUBS } from './types';
import { catalogTestApi } from '../utils/testApi';
import axios from 'axios';

// Search Clubs
axios.defaults.baseURL = 'https://sc-backend-v0.herokuapp.com';

export const searchClubs = (searchParams) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        limit: 50,
        skip: 0,
      },
    };

    const res = await axios.post('/api/catalog/organizations', config);
    console.log(res);

    dispatch({ type: SEARCH_CLUBS, payload: res });
  } catch (err) {
    console.log(err);
  }
};
