import { TEST, SEARCH_CLUBS } from './types';
import { catalogTestApi } from '../utils/testApi';

// Search Clubs

export const searchClubs = (searchParams) => async (dispatch) => {
  console.log(searchParams);

  try {
    const res = catalogTestApi(searchParams);

    dispatch({ type: SEARCH_CLUBS, payload: res });
    dispatch({ type: TEST });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: CATALOG_ERROR,
    //   payload: { err }
    // })
  }
};
