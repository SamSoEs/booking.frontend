import { configureStore } from '@reduxjs/toolkit';
import BookingReducer from './bookingReducer';

export const store = configureStore({
  reducer: {
    bookingReducer: BookingReducer,
  },
});
