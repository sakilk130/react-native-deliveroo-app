import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface IRestaurantState {
  restaurant: {
    id: string;
    imgUrl: string;
    title: string;
    rating: number;
    genre: any;
    address: string;
    short_description: string;
    dishes: any;
  };
}

const initialState: IRestaurantState = {
  restaurant: {
    id: '',
    imgUrl: '',
    title: '',
    rating: 0,
    genre: null,
    address: '',
    short_description: '',
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
