import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const authSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
