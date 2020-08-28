import {
  SEARCH_CLUBS,
  GET_ORGANIZATION,
  CLEAR_ORGANIZATION,
  LOAD_MORE_ORGS,
} from '../actions/types';

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
    case LOAD_MORE_ORGS:
      return { ...state, clubs: [...state.clubs, ...payload] };
    default:
      return state;
  }
}
