import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: localStorage.getItem("login") || "",
};

export const counterSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem("login", state.value);
    },
    deleteLogin: (state) => {
      state.value = "";
      localStorage.clear();
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, deleteLogin } = counterSlice.actions;
export default counterSlice.reducer;
