import { createSlice } from '@reduxjs/toolkit';
import { authService } from '../services/auth';

const initialState = {
  loading: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      window.localStorage.setItem('anylearn-token', action.payload.token);
    },
    getUserData: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      window.localStorage.removeItem('anylearn-token');
      state.user = null;
    },
  },
});

export const { setUserData, getUserData, setLogout } = authSlice.actions;

export default authSlice.reducer;
