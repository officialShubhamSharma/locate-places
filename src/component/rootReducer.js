import { combineReducers } from 'redux';
import Reducer from './Reducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  dataState: Reducer, 
  authState: AuthReducer, 
});

export default rootReducer;
