import { TEST } from './types';

// Search Clubs

export const searchClubs = (searchParams) => async (dispatch) => {
  const { text, tags, app_req, status } = searchParams;
  console.log(searchParams);

  try {
    dispatch({ type: TEST });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: CATALOG_ERROR,
    //   payload: { err }
    // })
  }
};
