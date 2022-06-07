import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  course: null
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourseData: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const { setUserData } = courseSlice.actions;

export default courseSlice.reducer;
