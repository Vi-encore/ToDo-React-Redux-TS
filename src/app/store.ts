import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoReducer from "app/features/cardReducer";
import counterReducer from "app/features/inputReducer";

// import todoReducer from "slices/todoSlices";

const store = configureStore({
  //type??
  reducer: {
    email: counterReducer,
    todo: todoReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
