import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  RESET_ERROR_AUTH,
  RESET_AUTH_STATE
} from './fetchData';
const initialState = {
  loading: false,
  user: null,
  error: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        loading: true,
        user: null,
        error: false
      };
    case SIGN_IN_REQUEST:
      return {
        loading: true,
        user: null,
        error: false
      };
    case SIGN_UP_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: false
      };
    case SIGN_IN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: false
      };
    case SIGN_UP_FAILURE:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
      case RESET_ERROR_AUTH:
        return {
          ...state,
          error: false
        };
    case SIGN_IN_FAILURE:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    case RESET_AUTH_STATE:
      return {
        loading: false,
        user: null,
        error: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
