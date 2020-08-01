import { SEARCH_CLUBS } from './types';
import { catalogTestApi } from '../utils/testApi';

// Search Clubs

export const searchClubs = (searchParams) => async (dispatch) => {
  try {
    // Once we have the API routes from Tejas, we can replace this with
    // either a GET request with params as part of the route
    // or a POST request with a content type header and body = params
    const res = catalogTestApi(searchParams);

    dispatch({ type: SEARCH_CLUBS, payload: res });
  } catch (err) {
    console.log(err);
  }
};
