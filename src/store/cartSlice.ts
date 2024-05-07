import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemCardType } from "../types";

const cartInitialState: ItemCardType[] = [];
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addTocart: (state, actions: PayloadAction<ItemCardType>) => {
      state.push(actions.payload);
    },
    removeFromCart: (state, actions: PayloadAction<ItemCardType>) => {
      return state.filter((item) => item.id != actions.payload.id);
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
