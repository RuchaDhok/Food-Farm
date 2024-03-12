import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //payload:"pizza" will automatically come inside action
    addItem: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items:["pizza"]}
    clearCart: (state, action) => {
      //RTK says either mutate the existing state or return a new state.
      state.items.length = 0; //originalState = []
      //return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

// createSlice will return an object which will have actions, reducer

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
