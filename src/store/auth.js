import { createSlice } from '@reduxjs/toolkit';
import { authService } from '../services/auth';

export const register = (params) => async (dispatch) => {
  dispatch(updateAuthStore({ loading: true }));
  const response = await authService.signUp(params);
  if (response.status === 200) {
    dispatch(setUserData(response.data));
    updateAuthStore({ loading: false });
    dispatch(setValue({ registerSuccess: true }));
  }
};

export const logIn = (email, password) => async (dispatch) => {
  dispatch(updateAuthStore({ loading: true }));
  const response = await authService.logIn(email, password);
  if (response.status === 200) {
    dispatch(setUserData(response.data));
    updateAuthStore({ loading: false });
    dispatch(setValue({ loginSuccess: true }));
  }
};

export const logout = () => (dispatch) => {
  window.localStorage.removeItem('anylearn-token');
  dispatch(setLogout());
};

export const updateAuthStore = (value) => async (dispatch) => {
  dispatch(setValue(value));
};

export const getUserData = (token) => async (dispatch) => {
  const response = await authService.getUserData(token);
  if (response.status === 200) {
    dispatch(setUserData(response.data));
    dispatch(setValue({ loginSuccess: true }));
  }
};

const initialState = {
  loading: false,
  loginSuccess: false,
  registerSuccess: false,
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
    setValue: (state, action) => {
      return { ...state, ...action.payload };
    },
    setLogout: (state, action) => {
      state.user = null;
      state.loginSuccess = false;
      state.registerSuccess = false;
    },
  },
});

export const { setUserData, setLogout, setValue } = authSlice.actions;

export default authSlice.reducer;
