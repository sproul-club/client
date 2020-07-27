import { TEST, SEARCH_CLUBS } from '../actions/types';

const initialState = {
  clubs: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TEST:
      console.log('test reducer firing');
      return state;
    case SEARCH_CLUBS:
      return {...state, clubs: payload}
    default:
      return state;
  }
}
