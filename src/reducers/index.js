// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
