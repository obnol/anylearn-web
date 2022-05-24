import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import course from './course'

export const store = configureStore({
  reducer: { auth, course },
});
