import { combineReducers } from 'redux';
// import { userReducer } from './userReducer';
import userReducer from './userSlice';
import loadingReducer from './loadingAuthSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
