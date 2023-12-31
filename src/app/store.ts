import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "app/features/inputReducer";
import { apiSlice } from "app/features/api/apiSlice";

// import todoReducer from "slices/todoSlices";

const store = configureStore({
  reducer: {
    email: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
