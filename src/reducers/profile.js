import { LOAD_PROFILE, CLEAR_PROFILE, UPDATE_PROFILE } from '../actions/types';
import { profileData } from '../utils/testApi';

const initialState = {
  profile: {
    id: '',
    name: '',
    owner: '',
    tags: [],
    'app-required': false,
    'new-members': false,
    'about-us': '',
    'get-involved': '',
    'social-media-links': [],
    resources: [],
    events: [],
    'logo-url': '',
    'banner-url': '',
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case UPDATE_PROFILE:
      return { ...state, profile: payload };
    case CLEAR_PROFILE:
      return { ...state, profile: null };
    default:
      return state;
  }
}
