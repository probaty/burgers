import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: null | string;
  isAnonymous: null | boolean;
  id: null | string;
}

const initialState: UserState = {
  email: null,
  id: null,
  isAnonymous: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.isAnonymous = action.payload.isAnonymous;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.isAnonymous = null;
    },
  },
});

export const { removeUser, setUser } = userSlice.actions;

export default userSlice.reducer;
