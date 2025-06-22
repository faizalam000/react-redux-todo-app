// create store

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/TodoSlice";

 const Store = configureStore({
  reducer: todoReducer,
});


export default Store;