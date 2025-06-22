import React, { useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  markAsDone,
  updateTodo,
} from "../features/todo/TodoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [updateId, setUpdateId] = useState("");
  const dispatch = useDispatch();

  const addtask = () => {
    if (input !== "") {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  const isDoneTask = (id) => {
    dispatch(markAsDone(id));
  };

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  const isEdit = (todo) => {
    setEditValue(todo.task);
    setUpdateId(todo.id);
    setEdit(true);
  };

  const updateTodos = () => {
    const updatedata = { id: updateId, task: editValue };
    dispatch(updateTodo(updatedata));
    setEdit(false);
  };

  return (
    <div>
      <h1 className="mb-10">Todo List</h1>
      <div className="flex justify-center mb-10 ">
        <input
          className="bg-gray-600 rounded-md pl-2 w-70"
          placeholder="enter todo"
          type="text"
          onChange={
            !edit
              ? (e) => {
                  setInput(e?.target?.value);
                }
              : (e) => {
                  setEditValue(e?.target?.value);
                }
          }
          value={!edit ? input : editValue}
        />{" "}
        {edit ? (
          <button className="ml-2 bg-blue-700" onClick={() => updateTodos()}>
            Update
          </button>
        ) : (
          <button className="ml-2 bg-blue-700" onClick={addtask}>
            Add
          </button>
        )}
      </div>
      <div>
        <ul className="overflow-y-auto">
          {todos.map((todo) => {
            return (
              <li
                className={`w-150 flex justify-between  space-x-5 bg-gray-950 mb-2 p-2 rounded-lg font-sans ${
                  todo.isDone ? "bg-green-700" : "bg-gray-200"
                } `}
                key={todo.id}
              >
                {todo?.task}{" "}
                <div>
                  <button
                    className="mr-1 bg-green-600"
                    onClick={() => isDoneTask(todo.id)}
                  >
                    <MdOutlineDone />
                  </button>
                  <button
                    className="mr-1 bg-orange-400"
                    onClick={() => {
                      isEdit(todo);
                    }}
                  >
                    <MdEditDocument />
                  </button>
                  <button
                    className="bg-red-700 "
                    onClick={() => deleteTask(todo.id)}
                  >
                    <IoTrashBin />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
