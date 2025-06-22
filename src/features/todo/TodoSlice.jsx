// create reducer and action in slice
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.unshift(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
      });
    },
    updateTodo: (state, action)=>{
        state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.task = action.payload.task;
        }
      }); 
    }
  },
});

export const { addTodo, deleteTodo, markAsDone, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
