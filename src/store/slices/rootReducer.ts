import { combineReducers } from 'redux';
// import { userReducer } from './userReducer';
import userReducer from './userSlice';
import loadingReducer from './loadingAuthSlice';
import cartReducer from './cartSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
