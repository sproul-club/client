import {
  LOAD_PROFILE,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions/types';

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
  },
  resources: [],
  events: [],
  images: {
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
        resources: payload.resources,
        events: payload.events,
      };
    case UPDATE_PROFILE:
      return { ...state, profile: payload };
    case CLEAR_PROFILE:
      return { ...state, profile: null };
    case ADD_EVENT:
      return { ...state, events: payload };
    case UPDATE_EVENT:
      return { ...state, events: payload };
    case DELETE_EVENT:
      return { ...state };
    default:
      return state;
  }
}
