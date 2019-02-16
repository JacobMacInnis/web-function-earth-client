import {
  NEW_SUPPORT_REQUEST,
  NEW_SUPPORT_SUCCESS,
  NEW_SUPPORT_ERROR
} from '../actions/support';

const initialState = {
  success: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === NEW_SUPPORT_REQUEST) {
      return Object.assign({}, state, {
          loading: true,
          error: null
      });
  } else if (action.type === NEW_SUPPORT_SUCCESS) {
      return Object.assign({}, state, {
          success: true,
          loading: false,
          error: null
      });
  } else if (action.type === NEW_SUPPORT_ERROR) {
      return Object.assign({}, state, {
          loading: false,
          error: action.error
      });
  }
  return state;
};