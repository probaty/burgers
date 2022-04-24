import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
// import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: rootReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
