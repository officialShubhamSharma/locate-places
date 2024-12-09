import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    RESET_ERROR,
  } from './fetchData';
  
  const initialState = {
    loading: false,
    data: [],
    error: false
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: false
        };
      case FETCH_DATA_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: false
        };
      case FETCH_DATA_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
        case RESET_ERROR:
        return {
          ...state,
          error: false
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  