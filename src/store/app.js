import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
