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
  ADD_RECR_EVENT,
  UPDATE_RECR_EVENT,
  DELETE_RECR_EVENT
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
  recruiting_events: [],
  images: {
    logo_url: '',
    banner_url: '',
  },
  social_media_links: {},
  get_involved: '',
  tagOptions: [],
  sizeTagOptions: [],
  recruiting_start: '',
  recruiting_end: '',
  apply_deadline_start: '',
  apply_deadline_end: '',
  apply_link: '',
  // reactivated: false
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
        recruiting_events: payload.recruiting_events,
        images: { logo_url, banner_url },
        social_media_links: payload.social_media_links,
        get_involved: payload.get_involved,
        recruiting_start: payload.recruiting_start,
        recruiting_end: payload.recruiting_end,
        apply_deadline_start: payload.apply_deadline_start,
        apply_deadline_end: payload.apply_deadline_end,
        apply_link: payload.apply_link,
      };
    case UPDATE_PROFILE:
      const updateSocial = payload.social_media_links
        ? payload.social_media_links
        : state.social_media_links;
      const updateGetInvolved = payload.get_involved
        ? payload.get_involved
        : state.get_involved;
      const updateRecruitingStart = payload.recruiting_start
        ? payload.recruiting_start
        : state.recruiting_start;
      const updateRecruitingEnd = payload.recruiting_end
        ? payload.recruiting_end
        : state.recruiting_end;
      const updateAppDeadlineStart = payload.apply_deadline_start
        ? payload.apply_deadline_start
        : state.apply_deadline_start;
      const updateAppDeadlineEnd = payload.apply_deadline_end
        ? payload.apply_deadline_end
        : state.apply_deadline_end;
      const updateAppLink = payload.apply_link
        ? payload.apply_link
        : state.apply_link;
      return {
        ...state,
        profile: payload,
        get_involved: updateGetInvolved,
        social_media_links: updateSocial,
        recruiting_start: updateRecruitingStart,
        recruiting_end: updateRecruitingEnd,
        apply_deadline_start: updateAppDeadlineStart,
        apply_deadline_end: updateAppDeadlineEnd,
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
    case ADD_RECR_EVENT:
    case UPDATE_RECR_EVENT:
    case DELETE_RECR_EVENT:
      return {...state, recruiting_events: payload}
    case GET_TAGS:
      return { ...state, tagOptions: payload };
    case GET_SIZE_TAGS:
      return { ...state, sizeTagOptions: payload };
    default:
      return state;
  }
}
