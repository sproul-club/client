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
  GET_TAGS,
  GET_SIZE_TAGS,
} from '../actions/types';

const initialState = {
  // yes I am currently storing state in multiple places, ugly but ill fix it
  owner: '',
  id: '',
  profile: {
    name: '',
    tags: [],
    app_required: false,
    new_members: false,
    about_us: '',
    num_users: 0,
  },
  resources: [],
  events: [],
  images: {
    logo_url: '',
    banner_url: '',
  },
  social_media_links: {},
  get_involved: '',
  tagOptions: [],
  sizeTagOptions: [],
  apply_deadline: '',
  apply_link: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PROFILE:
      const { logo_url, banner_url } = payload;
      return {
        ...state,
        profile: payload,
        owner: payload.owner,
        link_name: payload.link_name,
        resources: payload.resources,
        events: payload.events,
        images: { logo_url, banner_url },
        social_media_links: payload.social_media_links,
        get_involved: payload.get_involved,
        apply_deadline: payload.apply_deadline,
        apply_link: payload.apply_link,
      };
    case UPDATE_PROFILE:
      const updateSocial = payload.social_media_links
        ? payload.social_media_links
        : state.social_media_links;
      const updateGetInvolved = payload.get_involved
        ? payload.get_involved
        : state.get_involved;
      const updateAppDeadline = payload.apply_deadline
        ? payload.apply_deadline
        : state.apply_deadline;
      const updateAppLink = payload.apply_link
        ? payload.apply_link
        : state.apply_link;
      return {
        ...state,
        profile: payload,
        get_involved: updateGetInvolved,
        social_media_links: updateSocial,
        apply_deadline: updateAppDeadline,
        apply_link: updateAppLink,
      };
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
    case GET_TAGS:
      return { ...state, tagOptions: payload };
    case GET_SIZE_TAGS:
      return { ...state, sizeTagOptions: payload };
    default:
      return state;
  }
}
