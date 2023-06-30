import { createSlice } from "@reduxjs/toolkit";
// import { counterSlice } from "app/features/inputReducer";
import type { PayloadAction } from "@reduxjs/toolkit";
import ToDoList from "components/ToDoList/ToDoList";

type ToDoState = {
  title: string;
  description: string;
};

//create type!!
//getInitToDos => fetch

async function getInitToDos() {
  const email = localStorage.getItem("email");

  const url = `https://l.study-link-demo.com/cards/:${email}`;
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //   if (res.length === 0) {
      //     console.log("there are no toDos");
      //     //comp with no  todos found
      //   } else {
      //     console.log(res);

      ToDoList(res); //??
      //give res to component(toDoList) to map through it (give  all data to card comp)
      //   }
    });
}

//  const getInitToDos = () => {

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
      getInitToDos();
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
