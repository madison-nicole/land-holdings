import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
  error: false,
  user: {},
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return {
        authenticated: true, error: false,
      };
    case ActionTypes.DEAUTH_USER:
      return {
        authenticated: false, error: false, user: {},
      };
    case ActionTypes.AUTH_ERROR:
      return {
        authenticated: false,
        error: true,
        user: {},
      };
    case ActionTypes.CLEAR_AUTH_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default authReducer;
