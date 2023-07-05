import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "app/store";

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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://l.study-link-demo.com/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (email) => `/cards/${email}`,
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/cards",
        method: "POST",
        body: todo,
      }),
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/cards/${todo.id}`,
        method: "PATCH", //can be PUT
        body: todo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        //todo.id
        url: `/cards/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
