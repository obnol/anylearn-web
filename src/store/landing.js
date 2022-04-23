import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const landingSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default landingSlice.reducer;
