import { createSlice } from '@reduxjs/toolkit';
import { authService } from '../services/auth';

export const register = (params) => async (dispatch) => {
  const response = await authService.signUp(params);
  console.log(response);
};

export const logout = () => (dispatch) => {
  console.log('in action');
  window.localStorage.removeItem('anylearn-token');
  dispatch(setLogout());
};

const initialState = {
  loading: false,
  user: null,
};

const authSlice = createSlice({
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
    setLogout: (state, action) => {
      state.user = null;
    },
  },
});

export const { setUserData, getUserData, setLogout } = authSlice.actions;

export default authSlice.reducer;
