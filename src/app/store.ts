import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "app/features/inputReducer";

const store = configureStore({
  //type??
  reducer: {
    email: counterReducer,
    //todo reducer
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
