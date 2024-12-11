import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './rootReducer';
import { legacy_createStore } from '@reduxjs/toolkit';

// Create the Redux store and apply thunk middleware
const Store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default Store;
