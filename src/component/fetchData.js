// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const RESET_ERROR_AUTH = 'RESET_ERROR_AUTH';
export const RESET_ERROR='RESET_ERROR';
export const RESET_AUTH_STATE='RESET_AUTH_STATE';

export const resetAuthState=()=>({
  type: RESET_AUTH_STATE,
});

const resetErrorRequest=()=>({
  type: RESET_ERROR,
});

const resetErrorAuthRequest=()=>({
  type: RESET_ERROR_AUTH,
});
// Action creators for Sign Up
const signUpRequest = () => ({
  type: SIGN_UP_REQUEST,
});

const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: user,
});

const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

// Thunk for Sign Up API Call
export const signUp = (logicData) => {
  console.log("inside signup middleware")
  return (dispatch) => {
    dispatch(signUpRequest());
    fetch('https://locate-places-backend.onrender.com/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logicData),
      credentials: 'include', // Ensure cookies are sent
    })
      .then((response) => {
        if (!response.ok) {
          dispatch(signUpFailure(response));
        }
        dispatch(signUpSuccess(response));
        return response;
      })
      .catch((error) => {
        dispatch(signUpFailure(error)); // Dispatch failure action
      });
  };
};

export const resetError = () =>{
  return (dispatch)=>{
    dispatch(resetErrorRequest())
  }
}

export const resetAuthError = () =>{
  return (dispatch)=>{
    dispatch(resetErrorAuthRequest())
  }
}


// Action creators for Sign In
const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
});

const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

// Thunk for Sign In API Call
export const signIn = (loginData) => {
  console.log("inside signup middleware")
  return (dispatch) => {
    dispatch(signInRequest());
    fetch('https://locate-places-backend.onrender.com/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      credentials: 'include'
    })
      .then((response) => {
        if (!response.ok) {
          dispatch(signInFailure(response));
        }
        else {
          dispatch(signInSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(signInFailure(error.message)); // Dispatch failure action
      });
  };
};




// Action Creators
const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

// Thunk Action to fetch data with body
export const fetchData = (inputData) => {
  return (dispatch, getState) => {
    dispatch(fetchDataRequest());

    fetch('https://locate-places-backend.onrender.com/locate/best-places-for-me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
      credentials: 'include' // This ensures the browser includes cookies (including HttpOnly cookies) in the request
    })
      .then((response) => {
        if(!response.ok){
          dispatch(fetchDataFailure(response));
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchDataSuccess(data)); // Dispatch success action
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message)); // Dispatch failure action
      });
  };
};
