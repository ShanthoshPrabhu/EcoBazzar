import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './cartslice'

export const store = configureStore({
  reducer: {
    cart: cartreducer,
  },
});