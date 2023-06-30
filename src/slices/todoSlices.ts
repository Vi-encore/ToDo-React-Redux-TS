import { createSlice } from "@reduxjs/toolkit";
import store from "app/store";
// import { counterSlice } from "app/features/inputReducer";
import type { PayloadAction } from "@reduxjs/toolkit";
import ToDoList from "components/ToDoList/ToDoList";

type ToDoState = {
  title: string;
  description: string;
};

//create type!!
//getInitToDos => fetch

// }

const initValue: any = {
  //   toDoList: getInitToDos(localStorage.getItem("email")),
  //   email: getInitToDos(localStorage.getItem("email")),
  title: "",
  description: "",
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState: initValue,
  reducers: {
    createToDo: (state, action: PayloadAction<ToDoState>) => {
      //   getInitToDos();

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
