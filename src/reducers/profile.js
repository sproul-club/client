import { CLEAR_PROFILE, UPDATE_PROFILE } from '../actions/types';
import { profileData } from '../utils/testApi';

const initialState = {
  profile: profileData,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PROFILE:
      return { ...state, profile: payload };
    case CLEAR_PROFILE:
      return { ...state, profile: null };
    default:
      return state;
  }
}
