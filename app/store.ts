import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './features/cartSlice';
import restaurantReducer from './features/restaurantSlice';
export const store = configureStore({
  reducer: {
    cart: cardReducer,
    restaurant: restaurantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
