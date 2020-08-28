import {
  SEARCH_CLUBS,
  GET_ORGANIZATION,
  CLEAR_ORGANIZATION,
} from '../actions/types';

// const allClubs = Object.keys(catalogData).map((club) => catalogData[club]);

const initialState = {
  clubs: [],
  organization: {},
};

export default function (state = initialState, action) {
  const { type, payload, num_results } = action;

  switch (type) {
    case SEARCH_CLUBS:
      return { ...state, clubs: payload, num_clubs: num_results };
    case GET_ORGANIZATION:
      return { ...state, organization: payload };
    case CLEAR_ORGANIZATION:
      return { ...state, organization: {} };
    default:
      return state;
  }
}
