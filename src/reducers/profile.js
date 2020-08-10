import { CLEAR_PROFILE, UPDATE_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PROFILE:
      return { ...state, profile: payload.profile };
    case CLEAR_PROFILE:
      return { ...state, profile: null };
    default:
      return state;
  }
}
