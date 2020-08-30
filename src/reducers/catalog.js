import {
  SEARCH_CLUBS,
  GET_ORGANIZATION,
  CLEAR_ORGANIZATION,
  CLEAR_ORGANIZATIONS,
  LOAD_MORE_ORGS,
  SET_TAGS,
  SET_FORM_DETAILS,
} from '../actions/types';

const initialState = {
  clubs: [],
  organization: {},
  formDetails: {
    name: '',
    tags: [],
    appReq: false,
    noAppReq: false,
    recruiting: false,
    notRecruiting: false,
  },
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
    case CLEAR_ORGANIZATIONS:
      return { ...state, clubs: [] };
    case LOAD_MORE_ORGS:
      return { ...state, clubs: [...state.clubs, ...payload] };
    case SET_TAGS:
      return {
        ...state,
        formDetails: {
          ...state.formDetails,
          tags: [...payload.value],
        },
      };
    case SET_FORM_DETAILS:
      return {
        ...state,
        formDetails: {
          ...state.formDetails,
          [payload.name]: payload.value,
        },
      };
    default:
      return state;
  }
}
