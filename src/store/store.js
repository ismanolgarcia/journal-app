import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { journalSlice } from './journal/journalSlice';

export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    journalSlice: journalSlice.reducer,
  },
});
