import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './features/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
