import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    hisob: 0,
  },
  reducers: {
    plus: (state) => {
      state.count++;
    },
    minus: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
    umum: (state, action) => {
      state.hisob += action.payload;
    },
    reset: (state) => {
      state.hisob = 0;
      state.count = 0;
    },
  },
});

export default cartSlice;
