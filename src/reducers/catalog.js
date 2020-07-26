import { TEST } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case TEST:
      console.log('test reducer firing');
      return state;
    default:
      return state;
  }
}
