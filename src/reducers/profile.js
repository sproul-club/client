import {
  LOAD_PROFILE,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  UPLOAD_IMAGES,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  ADD_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
} from '../actions/types';

const initialState = {
  profile: {
    id: '',
    name: '',
    owner: '',
    tags: [],
    app_required: false,
    new_members: false,
    about_us: '',
    get_involved: '',
    social_media_links: {},
  },
  resources: [],
  events: [],
  images: {
    logo_url: '',
    banner_url: '',
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
    case UPLOAD_IMAGES:
      // return { ...state, images: payload };
      return { ...state };
    case CLEAR_PROFILE:
      return { ...state, profile: null };
    case ADD_EVENT:
    case UPDATE_EVENT:
    case DELETE_EVENT:
      return { ...state, events: payload };
    case ADD_RESOURCE:
    case UPDATE_RESOURCE:
    case DELETE_RESOURCE:
      return { ...state, resources: payload };
    default:
      return state;
  }
}
