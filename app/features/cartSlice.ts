import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface ICartState {
  items: any;
}

const initialState: ICartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem: any) => cartItem._id === action.payload._id
      );
      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload._id}) as its not in the cart!`
        );
      }

      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsWithId = (state: RootState, _id: any) =>
  state.cart.items.filter((item: any) => item._id === _id);

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total: number, item: any) => (total += item.price),
    0
  );

export default cartSlice.reducer;
