import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "app/store";

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: "",
};

export const counterSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem("login", state.value); //what type?
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
