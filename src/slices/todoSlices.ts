import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { counterSlice } from "app/features/inputReducer";
import ToDoService from "axios/ToDoService";
import ToDoList from "components/ToDoList/ToDoList";

type ToDoState = {
  title: string;
  description: string;
};

// const initValue: ToDoState = {
//   //   title: "",
//   //   description: "",
// };

const initValue: any = {
  todoData: [],
  loading: "idle",
  //   title: "",
  //   description: "",
};

// async function addTo(params: any) {
//     await
// }

export const toDoSlice = createSlice({
  name: "todos",
  initialState: initValue,
  reducers: {
    allToDosLoad: (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    allToDosReceived: (state, { payload }) => {
      state.loading = "idle";
      state.ToDosData = payload;
    },
    // createToDo: (state, action: PayloadAction<ToDoState>) => {
    //   state.title = action.payload.title;
    //   state.description = action.payload.description;
    //   //   const userObj = {
    //   //     title: state.title,
    //   //     description: state.description,
    //   //   };
    //   //   ToDoService.createCard(userObj);
    //   console.log(action.payload);
    // },
    // extraReducers: (builder) => {},
    // editToDo
    // deleteToDo
  },
});

export const { allToDosLoad, allToDosReceived } = toDoSlice.actions;

export const getAllToDos = (state: any) => state.todos.toDoData;
export const getLoading = (state: any) => state.todos.loading;

export default toDoSlice.reducer;
