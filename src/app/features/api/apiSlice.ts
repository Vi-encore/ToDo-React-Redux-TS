import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "app/store";
import ToDoList from "components/ToDoList/ToDoList";

export const getAllToDos = createAsyncThunk("todo/getAllToDos", async () => {
  const email = useSelector((state: RootState) => state.email.value);
  const response = await fetch(`https://l.study-link-demo.com/cards/${email}`);

  try {
    const result = await response.json();
    return result;

    // ToDoList(result);
  } catch (error) {
    console.log(error);
    return error;
  }
});
