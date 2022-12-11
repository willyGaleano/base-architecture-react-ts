import { AUTHENTICATION_PATH } from '@application/constants';
import { combineReducers } from '@reduxjs/toolkit';
import authenticationReducer from '@application/slices/auth.slice';

const rootReducer = combineReducers({
	[AUTHENTICATION_PATH]: authenticationReducer,
});

export default rootReducer;
