import { CLEAR_PROFILE } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case CLEAR_PROFILE:
      return { ...state, profile: null };
    default:
      return state;
  }
}
