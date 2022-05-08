import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    loadOn(state) {
      state.loading = true;
    },
    loadOff(state) {
      state.loading = false;
    },
  },
});

export const { loadOff, loadOn } = loadingSlice.actions;

export default loadingSlice.reducer;
