import { combineReducers } from 'redux';
// import { userReducer } from './userReducer';
import userReducer from '../slices/userSlice';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
