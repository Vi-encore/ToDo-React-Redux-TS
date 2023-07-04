import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ToDoList from "components/ToDoList/ToDoList";
import { getAllToDos } from "app/features/api/apiSlice";

export interface ToDoState {
  data: Array<any>; //type for obj!
  isSuccess: boolean;
  loading: boolean;
  error: any;
}

const initialState: ToDoState = {
  data: [],
  isSuccess: false,
  // message: ''
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  // extraReducers: (builder)
  extraReducers: {
    [getAllToDos.pending]: (state) => {
      state.loading = true;
    },
    [getAllToDos.fulfilled]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getAllToDos.rejected]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default todoSlice.reducer;
