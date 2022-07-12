import { configureStore } from "@reduxjs/toolkit";
import counter from "slices/counter";
import movies from "slices/movies";
import auth from "slices/auth";

// configureStore: mặc định đã được setup redux devtool và redux thunk
const store = configureStore({
  reducer: {
    counter,
    movies,
    auth,
  },
  // devTools: false // có enable devtool hay không, mặc định là true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
