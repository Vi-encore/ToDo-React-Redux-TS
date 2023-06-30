import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// import { counterSlice } from "app/features/inputReducer";
import ToDoService from "axios/ToDoService";
import ToDoList from "components/ToDoList/ToDoList";

type ToDoState = {
  title: string;
  description: string;
};

const initValue: ToDoState = {
  title: "",
  description: "",
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState: initValue,
  reducers: {
    createToDo: (state, action: PayloadAction<ToDoState>) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      console.log(action.payload);
    },
    // editToDo
    // deleteToDo
  },
});

export const { createToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
