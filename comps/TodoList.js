import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import styles from "../styles/Todo.module.css";

const TodoList = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo setTodos={setTodos} todos={todos} todo={todo} id={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
