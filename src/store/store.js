import { configureStore } from '@reduxjs/toolkit';
import landing from './landing';

export const store = configureStore({
  reducer: { landing },
});
